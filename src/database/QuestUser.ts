import BaseModel, { DbColumn } from './BaseModel';

// Represents user going on a quest to receive a container
export default class QuestUser extends BaseModel {
	static tableName = 'quest_user';
	static columns: DbColumn[] = BaseModel.columns.concat([
		{ name: 'quest_id', type: 'INT', foreignKey: 'quest(id)' },
		{ name: 'user_id', type: 'INT', foreignKey: 'users(id)' },
		{ name: 'startTime', type: 'TIMESTAMP', injectConstructor: true },
		{ name: 'finalLength', type: 'INTERVAL', injectCostructor: true, nullable: true },
	]);

	constructor(
		public quest_id: number,
		public user_id: number,
		// When user went on this quest
		public startTime: Date,
		// Interval how long user was on quest (rounded to receive integer number of containers)
		// if null, user is still on this quest (only one ongoing quest allowed per user)
		public finalLength?: number,
	) {super();}
}