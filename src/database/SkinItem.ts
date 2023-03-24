import { Weapon, Quality } from 'opening/skinRegister'
import { DbColumn } from './BaseModel';
import BaseItem from './BaseItem';
import SkinResource from 'resource/Skin';
import { Prefix } from 'opening/prefixRegister';

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
		public prefix: Prefix[],
		public stattrak: number = 0,
	) {super();}

	toResource(): SkinResource {
		return {
			id: this.id,
			owner_id: this.owner_id,
			weapon: this.weapon,
			skin: this.skin,
			quality: this.quality,
			wear: this.wear,
			level: this.level,
			prefix: this.prefix,
			stattrak: this.stattrak,
		}
	}
}
