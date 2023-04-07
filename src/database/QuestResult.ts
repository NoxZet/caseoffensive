import { ContainerCollection, SpecialCollection } from 'opening/collectionRegister'
import { Prefix } from 'opening/prefixRegister';
import BaseModel, { DbColumn } from './BaseModel';
import ContainerResource from 'resource/Container';
import QuestResultResource from 'resource/QuestResult';

// Represents a quest that can be started on a given date, giving specified containers
export default class QuestResult extends BaseModel {
	static tableName = 'quest_result';
	static columns: DbColumn[] = BaseModel.columns.concat([
		{ name: 'quest_id', type: 'INT', foreignKey: 'quest(id)', injectConstructor: true },
		{ name: 'tickets', type: 'INT', injectConstructor: true },
		{ name: 'collection', type: 'TEXT', injectConstructor: true },
		{ name: 'special', type: 'TEXT', injectConstructor: true, nullable: true },
		{ name: 'prefix', type: 'TEXT[]', injectConstructor: true },
	]);

	constructor(
		public quest_id: number,
		public tickets: number,
		public collection: ContainerCollection,
		public special: SpecialCollection | undefined,
		public prefix: Prefix[],
	) {super();}

	toContainerResource(): ContainerResource {
		return {
			id: undefined,
			owner_id: undefined,
			mainCollection: this.collection,
			mainSpecial: this.special,
			prefix: this.prefix,
			level: 1,
			exp: 0,
			sideCollection: undefined,
			sideSpecial: undefined,
			sideChance: 0,
			covertBoost: 0,
			specialBoost: 0,
		};
	}

	toResource(): QuestResultResource {
		return {
			tickets: this.tickets,
			container: this.toContainerResource(),
		}
	}
}
