import { Weapon, Quality } from 'opening/skinRegister'
import { DbColumn } from './BaseModel';
import BaseItem from './BaseItem';

export default class SkinItem extends BaseItem {
	static tableName = 'skin_item';
	static columns: DbColumn[] = BaseItem.columns.concat([
		{ name: 'weapon', type: 'TEXT', injectCostructor: true },
		{ name: 'skin', type: 'TEXT', injectCostructor: true },
		{ name: 'quality', type: 'TEXT', injectCostructor: true },
		{ name: 'wear', type: 'DOUBLE PRECISION', injectCostructor: true, nullable: true },
		{ name: 'level', type: 'INT', injectCostructor: true },
		{ name: 'prefix', type: 'TEXT[]', injectCostructor: true },
		{ name: 'stattrak', type: 'INT', injectCostructor: true },
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
