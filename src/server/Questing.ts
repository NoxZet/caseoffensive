import ContainerItem from "database/ContainerItem";
import DbInterface from "database/DbInterface";

import { BaseModelId } from "database/BaseModel";
import User from "database/User";
import Quest from "database/Quest";
import QuestUser from "database/QuestUser";
import QuestResult from "database/QuestResult";

// What UTC hour a day starts as. Only positive values allowed.
const DAY_START_HOURS = 8;
// How many ms a quest can be done for before needing a "refresh".
const BASE_TIME_LIMIT = 15 * 60 * 1000;

export class AlreadyOnQuest extends Error {}
export class QuestNotActiveToday extends Error {}

export default class Questing {
	private lastDayEndCheck?: Date = undefined;

	constructor(
		public dbInterface: DbInterface,
	) {}

	async getCurrentQuest(user: User & BaseModelId): Promise<null | QuestUser & BaseModelId> {
		const currentQuests = await this.dbInterface.selectModel(QuestUser,
			'WHERE user_id = $1 AND final_length IS NULL',
			[user.id]
		);
		return currentQuests.length === 0 ? null : currentQuests[0];
	}

	async startUserQuest(user: User & BaseModelId, quest: Quest & BaseModelId): Promise<true> {
		const now = new Date();
		const currentDay = this.getTimeDay(now);
		if (quest.startTime > currentDay || quest.endTime < currentDay) {
			throw new QuestNotActiveToday();
		}
		if (await this.getCurrentQuest(user)) {
			throw new AlreadyOnQuest();
		}
		const questUser = new QuestUser(quest.id, user.id, now);
		return await this.dbInterface.insertModel(questUser);
	}

	async checkLastDay() {
		const currentDay = this.getTimeDay(new Date());
		if (!this.lastDayEndCheck || this.lastDayEndCheck.getTime() !== currentDay.getTime()) {
			const currentQuests = await this.dbInterface.selectModel(QuestUser,
				'WHERE final_length IS NULL'
			);
			for (const currentQuest of currentQuests) {
				if (currentQuest.startTime < currentDay) {
					await this.completeGivenQuest(currentQuest);
				}
			}
			this.lastDayEndCheck = currentDay;
		}
	}

	createDrops(currentQuest: QuestUser & BaseModelId, dropCount: number, quest: Quest & BaseModelId): Promise<ContainerItem[]> {
		if (dropCount <= 0) {
			return this.dbInterface.deleteModel(currentQuest)
			.then(_ => []);
		}
		// Could be improved by adding method for multiple insertions in one query
		// Needs a transaction, however, we need separate connection/pool for each request for that
		return new Promise<ContainerItem[]>(async (resolve, reject) => {
			let insertsLeft = dropCount;
			const droppedContainers: ContainerItem[] = [];
			// Function that's called for every drop finished
			const resolveOne = () => {
				insertsLeft--;
				// Set quest as finished
				if (insertsLeft === 0) {
					currentQuest.finalLength = dropCount * quest.baseLength;
					this.dbInterface.insertModel(currentQuest)
					.then(() => resolve(droppedContainers))
					.catch(error => reject(error));
				}
			}
			// Select possible quest results
			const results = await this.dbInterface.selectModel(QuestResult,
				'WHERE quest_id = $1', [quest.id]
			);
			let totalTickets = results.reduce((cum, result) => result.tickets + cum, 0);
			if (totalTickets <= 0) {
				throw new Error(`Quest (id=${quest.id}, name=${quest.displayName}) does not have any results`);
			}
			// Create drops
			nextDrop: for (let i = 0; i < dropCount; i++) {
				const ticket = Math.floor(Math.random() * totalTickets);
				let cum = 0;
				// Find correct drop for the generated ticket
				for (const result of results) {
					cum += result.tickets;
					if (ticket < cum) {
						const container = new ContainerItem(result.collection, result.special);
						container.original_owner_id = currentQuest.user_id;
						container.owner_id = currentQuest.user_id;
						container.created_at = new Date();
						droppedContainers.push(container);
						this.dbInterface.insertModel(container)
						.then(() => resolveOne())
						.catch(error => reject(error));
						continue nextDrop;
					}
				}
				throw new Error(`Quest (id=${quest.id}, name=${quest.displayName}) didn't find result for ticket ${ticket}`);
			}
		});
	}

	async cancelUsersQuest(user: User & BaseModelId): Promise<boolean> {
		// TODO: return the drops for displaying
		const currentQuest = await this.getCurrentQuest(user);
		if (!currentQuest) {
			return false;
		}
		await this.dbInterface.deleteModel(currentQuest);
		return true;
	}

	async completeUsersQuest(user: User & BaseModelId): Promise<ContainerItem[] | false> {
		// TODO: return the drops for displaying
		const currentQuest = await this.getCurrentQuest(user);
		if (!currentQuest) {
			return false;
		}
		return this.completeGivenQuest(currentQuest);
	}

	/**
	 * @param currentQuest QuestUser to get drop counts for
	 * @returns [<drops if redeemed right now>, <maximum drops reachable>]
	 */
	async getCurrentDropCount(currentQuest: QuestUser & BaseModelId): Promise<{currentDrops: number, maxDrops: number}> {
		// TODO: implement quest timeLimit (needs fetching of other QuestUser for the day)
		const quest = await this.dbInterface.selectModelById(Quest, currentQuest.quest_id);
		// Find how many drops were gotten before the day end
		const currentQuestEnd = new Date(Math.min(
			(new Date()).getTime(),
			this.getNextDay(currentQuest.startTime).getTime()
		));
		const lapsed = Math.min(currentQuestEnd.getTime() - currentQuest.startTime.getTime(), BASE_TIME_LIMIT);
		return {
			currentDrops: Math.floor(lapsed / quest.baseLength),
			maxDrops: Math.floor(BASE_TIME_LIMIT / quest.baseLength),
		};
	}

	async completeGivenQuest(currentQuest: QuestUser & BaseModelId): Promise<ContainerItem[]> {
		return await this.createDrops(
			currentQuest,
			(await this.getCurrentDropCount(currentQuest)).currentDrops,
			await this.dbInterface.selectModelById(Quest, currentQuest.quest_id)
		);
	}

	/**
	 * Gets the current date (midnight offset per DAY_START_HOURS, basically a timezone)
	 * Basically the last edge of the day that has passed per offset
	 */
	getTimeDay(now: Date, offset: number = 0): Date {
		const day = new Date(now);
		day.setUTCHours(DAY_START_HOURS, 0, 0, 0);
		if (now < day) {
			day.setUTCDate(day.getUTCDate() - 1);
		}
		day.setUTCDate(day.getUTCDate() + offset);
		return day;
	}

	getNextDay(now: Date): Date {
		return this.getTimeDay(now, 1);
	}
}
