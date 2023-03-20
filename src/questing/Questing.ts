import { BaseModelId } from "database/BaseModel";
import DbInterface from "database/DbInterface";
import Quest from "database/Quest";
import QuestUser from "database/QuestUser";
import User from "database/User";

// What UTC hour a day starts as. Only positive values allowed.
const DAY_START_HOURS = 8;

class Questing {
	private lastDayEndCheck?: Date = undefined;

	constructor(
		public dbInterface: DbInterface,
	) {
		this.checkLastDay();
	}

	checkLastDay() {
		const currentDay = this.getTimeDay(new Date());
		if (!this.lastDayEndCheck || this.lastDayEndCheck.getTime() !== currentDay.getTime()) {
			// TODO: try to evaluate quests of the previous day (but really check their start dates)
			this.lastDayEndCheck = currentDay;
		}
	}

	async completePreviousDayQuest(currentQuest: QuestUser): Promise<boolean> {
		// TODO: implement quest timeLimit (needs fetching of other QuestUser for the day)
		const quest = (await this.dbInterface.selectModel(Quest,
			'WHERE quest_id = $1',
			[currentQuest.quest_id]
		))[0];
		const currentQuestEnd = this.getTimeDay(currentQuest.startTime, 1);
		const lapsed = currentQuestEnd.getTime() - currentQuest.startTime.getTime();
		const drops = Math.floor(lapsed / quest.baseLength);
		// TODO: create drop models
		return false;
	}

	async completeQuest(user: User & BaseModelId): Promise<boolean> {
		const currentQuests = await this.dbInterface.selectModel(QuestUser,
			'WHERE user_id = $1 AND finalLength IS NULL',
			[user.id]
		);
		if (currentQuests.length === 0) {
			return false;
		}
		const currentQuest = currentQuests[0];
		// If quest was started before today, it will only be completed up till the next midnight from its start
		const currentDay = this.getTimeDay(new Date());
		const questDay = this.getTimeDay(currentQuest.startTime);
		if (questDay < currentDay) {
			return this.completePreviousDayQuest(currentQuest);
		}
		return false;
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
