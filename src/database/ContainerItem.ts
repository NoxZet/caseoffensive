import { ContainerCollection, SpecialCollection } from 'opening/collectionRegister'
import { Prefix } from 'opening/prefixRegister';
import { DbColumn } from './BaseModel';
import BaseItem from './BaseItem';

export default class ContainerItem extends BaseItem {
	static tableName = 'container_item';
	static columns: DbColumn[] = BaseItem.columns.concat([
		{ name: 'mainCollection', type: 'TEXT', injectCostructor: true },
		{ name: 'mainSpecial', type: 'TEXT', injectCostructor: true, nullable: true },
		{ name: 'level', type: 'INT', injectCostructor: true, nullable: true },
		{ name: 'exp', type: 'INT', injectCostructor: true, nullable: true },
		{ name: 'prefix', type: 'TEXT[]', injectCostructor: true, nullable: true },
		{ name: 'sideCollection', type: 'TEXT', injectCostructor: true, nullable: true },
		{ name: 'sideSpecial', type: 'TEXT', injectCostructor: true, nullable: true },
		{ name: 'sideChance', type: 'DOUBLE PRECISION', injectCostructor: true },
		{ name: 'covertBoost', type: 'DOUBLE PRECISION', injectCostructor: true },
		{ name: 'specialBoost', type: 'DOUBLE PRECISION', injectCostructor: true },
	]);

	constructor(
		public mainCollection: ContainerCollection,
		public mainSpecial: SpecialCollection | undefined,
		public level: number = 1,
		public exp: number = 0,
		public prefix: Prefix[] = [],
		// Imported contraband collection
		public sideCollection?: ContainerCollection,
		public sideSpecial?: SpecialCollection | undefined,
		public sideChance: number = 0,
		// Increases chance of the rarest guns, both regular and contraband
		public covertBoost: number = 0,
		// Increases the chance of special item
		public specialBoost: number = 0,
	) {super();}
}
