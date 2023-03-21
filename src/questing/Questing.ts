import { BaseModelId } from "database/BaseModel";
import ContainerItem from "database/ContainerItem";
import DbInterface from "database/DbInterface";
import Quest from "database/Quest";
import QuestUser from "database/QuestUser";
import User from "database/User";

// What UTC hour a day starts as. Only positive values allowed.
const DAY_START_HOURS = 8;
// How many ms a quest can be done for before needing a "refresh".
const BASE_TIME_LIMIT = 15 * 60 * 1000;

class Questing {
	private lastDayEndCheck?: Date = undefined;

	constructor(
		public dbInterface: DbInterface,
	) {}

	async startUserQuest(user: User & BaseModelId, quest: Quest & BaseModelId): Promise<boolean> {
		const currentQuests = await this.dbInterface.selectModel(QuestUser,
			'WHERE user_id = $1 AND finalLength IS NULL',
			[user.id]
		);
		if (currentQuests.length > 0) {
			return false;
		}
		const questUser = new QuestUser(quest.id, user.id, new Date());
		return await this.dbInterface.insertModel(questUser);
	}

	async completeUsersQuest(user: User & BaseModelId): Promise<boolean> {
		const currentQuests = await this.dbInterface.selectModel(QuestUser,
			'WHERE user_id = $1 AND finalLength IS NULL',
			[user.id]
		);
		if (currentQuests.length === 0) {
			return false;
		}
		const currentQuest = currentQuests[0];
		return this.completeGivenQuest(currentQuest);
	}

	async checkLastDay() {
		const currentDay = this.getTimeDay(new Date());
		if (!this.lastDayEndCheck || this.lastDayEndCheck.getTime() !== currentDay.getTime()) {
			const currentQuests = await this.dbInterface.selectModel(QuestUser,
				'WHERE finalLength IS NULL'
			);
			for (const currentQuest of currentQuests) {
				if (currentQuest.startTime < currentDay) {
					await this.completeGivenQuest(currentQuest);
				}
			}
			this.lastDayEndCheck = currentDay;
		}
	}

	createDrops(currentQuest: QuestUser & BaseModelId, dropCount: number, quest: Quest): Promise<true> {
		if (dropCount <= 0) {
			return this.dbInterface.deleteModel(currentQuest);
		}
		// Could be improved by adding method for multiple insertions in one query
		// Needs a transaction, however, we need separate connection/pool for each request for that
		return new Promise<true>((resolve, reject) => {
			let insertsLeft = dropCount;
			const resolveOne = () => {
				insertsLeft--;
				if (insertsLeft === 0) {
					currentQuest.finalLength = dropCount * quest.baseLength;
					this.dbInterface.insertModel(currentQuest)
					.then(() => resolve(true))
					.catch(error => reject(error));
				}
			}
			// Create drops
			for (let i = 0; i < dropCount; i++) {
				const container = new ContainerItem(quest.collection, quest.special);
				container.original_owner_id = currentQuest.user_id;
				container.owner_id = currentQuest.user_id;
				container.created_at = new Date();
				this.dbInterface.insertModel(container)
				.then(() => resolveOne())
				.catch(error => reject(error));
			}
		});
	}

	async completeGivenQuest(currentQuest: QuestUser & BaseModelId): Promise<true> {
		// TODO: implement quest timeLimit (needs fetching of other QuestUser for the day)
		const quest = await this.dbInterface.selectModelById(Quest, currentQuest.quest_id);
		// Find how many drops were gotten before the day end
		const currentQuestEnd = new Date(Math.min(
			new Date().getTime(),
			this.getNextDay(currentQuest.startTime).getTime()
		));
		const lapsed = Math.min(currentQuestEnd.getTime() - currentQuest.startTime.getTime(), BASE_TIME_LIMIT);
		const dropCount = Math.floor(lapsed / quest.baseLength);
		return await this.createDrops(currentQuest, dropCount, quest);
	}

	/**
	 * Gets the current date (midnight offset per DAY_START_HOURS, basically a timezone)
	 * Basically the last edge of the day that has passed per offset
	 */
	getTimeDay(now: Date, offset: number = 0): Date {
		const day = new Date(now);
		day.setUTCHours(DAY_START_HOURS, 0, 0, 0);
		if (now < day) {
			day.setDate(day.getDate() - 1);
		}
		day.setDate(day.getDate() + offset);
		return day;
	}

	getNextDay(now: Date): Date {
		return this.getTimeDay(now, 1);
	}
}
