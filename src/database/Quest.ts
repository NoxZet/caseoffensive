import { ContainerCollection, SpecialCollection } from 'opening/collectionRegister'
import { Prefix } from 'opening/prefixRegister';
import BaseModel, { DbColumn } from './BaseModel';

// Represents a quest that can be started on a given date, giving specified containers
export default class Quest extends BaseModel {
	static tableName = 'quest';
	static columns: DbColumn[] = BaseModel.columns.concat([
		{ name: 'onDate', type: 'DATE', injectConstructor: true, nullable: true },
		{ name: 'collection', type: 'TEXT', injectCostructor: true },
		{ name: 'special', type: 'TEXT', injectCostructor: true, nullable: true },
		{ name: 'prefix', type: 'TEXT[]', injectCostructor: true, nullable: true },
		{ name: 'baseLength', type: 'INTERVAL', injectCostructor: true },
		{ name: 'timeLimit', type: 'INTERVAL', injectCostructor: true, nullable: true },
	]);

	constructor(
		// First date where this quest occurs
		public startTime: Date,
		// Last date where this quest occurs. Set very high for unending quest.
		public endTime: Date,
		public collection: ContainerCollection,
		public special: SpecialCollection | undefined,
		public prefix: Prefix[],
		// Interval, number of ms to complete quest once
		public baseLength: number,
		// Interval, number of ms allowed to do this quest for
		public timeLimit: number,
	) {super();}
}