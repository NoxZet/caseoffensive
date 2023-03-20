import BaseModel, { DbColumn } from './BaseModel';

// Represents interval where a quest is recurring
export default class QuestSchedule extends BaseModel {
	static tableName = 'quest_schedule';
	static columns: DbColumn[] = BaseModel.columns.concat([
		{ name: 'quest_id', type: 'INT', foreignKey: 'quest(id)' },
		{ name: 'startTime', type: 'DATE', injectConstructor: true },
		{ name: 'endTime', type: 'DATE', injectConstructor: true },
	]);

	constructor(
		// This quest should have null onDate
		public quest_id: number,
		// First date where this quest occurs
		public startTime: Date,
		// Last date where this quest occurs. Set very high for unending quest.
		public endTime: Date,
	) {super();}
}