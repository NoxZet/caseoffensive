import { ContainerCollection, SpecialCollection } from 'opening/collectionRegister'
import { Prefix } from 'opening/prefixRegister';
import BaseModel, { DbColumn } from './BaseModel';

// Represents a quest that can be started on a given date, giving specified containers
export default class Quest extends BaseModel {
	static tableName = 'quest';
	static columns: DbColumn[] = BaseModel.columns.concat([
		{ name: 'startTime', type: 'DATE', injectConstructor: true },
		{ name: 'endTime', type: 'DATE', injectConstructor: true },
		{ name: 'displayName', type: 'TEXT', injectConstructor: true },
		{ name: 'baseLength', type: 'INTERVAL', injectConstructor: true },
		{ name: 'timeLimit', type: 'INTERVAL', injectConstructor: true, nullable: true },
	]);

	constructor(
		// First date where this quest occurs
		public startTime: Date,
		// Last date where this quest occurs. Set very high for unending quest.
		public endTime: Date,
		public displayName: string,
		// Interval, number of ms to complete quest once
		public baseLength: number,
		// Interval, number of ms allowed to do this quest for
		public timeLimit: number,
	) {super();}
}