import { Weapon, Quality } from 'opening/skinRegister'
import { DbColumn } from './BaseModel';
import BaseItem from './BaseItem';

export default class SkinItem extends BaseItem {
	static tableName = 'skin_item';
	static columns: DbColumn[] = BaseItem.columns.concat([
		{ name: 'weapon', type: 'TEXT', injectConstructor: true },
		{ name: 'skin', type: 'TEXT', injectConstructor: true },
		{ name: 'quality', type: 'TEXT', injectConstructor: true },
		{ name: 'wear', type: 'DOUBLE PRECISION', injectConstructor: true, nullable: true },
		{ name: 'level', type: 'INT', injectConstructor: true },
		{ name: 'prefix', type: 'TEXT[]', injectConstructor: true },
		{ name: 'stattrak', type: 'INT', injectConstructor: true },
	]);

	constructor(
		public weapon: Weapon,
		public skin: string,
		public quality: Quality,
		public wear: number | null,
		public level: number,
		public prefix: string[],
		public stattrak: number = 0,
	) {super();}
}
