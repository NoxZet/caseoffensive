import { ContainerCollection, SpecialCollection } from 'opening/collectionRegister'
import { Prefix } from 'opening/prefixRegister';
import { DbColumn } from './BaseModel';
import BaseItem from './BaseItem';
import ContainerResource from 'resource/Container';

export default class ContainerItem extends BaseItem {
	static tableName = 'container_item';
	static columns: DbColumn[] = BaseItem.columns.concat([
		{ name: 'mainCollection', type: 'TEXT', injectConstructor: true },
		{ name: 'mainSpecial', type: 'TEXT', injectConstructor: true, nullable: true },
		{ name: 'prefix', type: 'TEXT[]', injectConstructor: true },
		{ name: 'level', type: 'INT', injectConstructor: true, nullable: true },
		{ name: 'exp', type: 'INT', injectConstructor: true, nullable: true },
		{ name: 'sideCollection', type: 'TEXT', injectConstructor: true, nullable: true },
		{ name: 'sideSpecial', type: 'TEXT', injectConstructor: true, nullable: true },
		{ name: 'sideChance', type: 'DOUBLE PRECISION', injectConstructor: true },
		{ name: 'covertBoost', type: 'DOUBLE PRECISION', injectConstructor: true },
		{ name: 'specialBoost', type: 'DOUBLE PRECISION', injectConstructor: true },
	]);

	constructor(
		public mainCollection: ContainerCollection,
		public mainSpecial: SpecialCollection | undefined = undefined,
		public prefix: Prefix[] = [],
		public level: number = 1,
		public exp: number = 0,
		// Imported contraband collection
		public sideCollection: ContainerCollection | undefined = undefined,
		public sideSpecial: SpecialCollection | undefined = undefined,
		public sideChance: number = 0,
		// Increases chance of the rarest guns, both regular and contraband
		public covertBoost: number = 0,
		// Increases the chance of special item
		public specialBoost: number = 0,
	) {super();}

	toResource(): ContainerResource {
		return {
			id: this.id,
			owner_id: this.owner_id,
			mainCollection: this.mainCollection,
			mainSpecial: this.mainSpecial,
			prefix: this.prefix,
			level: this.level,
			exp: this.exp,
			sideCollection: this.sideCollection,
			sideSpecial: this.sideSpecial,
			sideChance: this.sideChance,
			covertBoost: this.covertBoost,
			specialBoost: this.specialBoost,
		};
	}
}
