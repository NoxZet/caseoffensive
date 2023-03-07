import { Weapon, Quality } from 'opening/skinRegister'

export default class SkinItem {
	constructor(
		public weapon: Weapon,
		public skin: string,
		public quality: Quality,
		public wear: number,
		public level: number,
		public exp: number,
		public prefix: string[],
	) {}
}
