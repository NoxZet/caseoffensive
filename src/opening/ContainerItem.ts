import { KnifeCollection, GloveCollection, Case, Collection } from 'opening/collectionRegister'

export default class ContainerItem {
	constructor(
		public mainCollection: Case | Collection,
		public mainSpecial: KnifeCollection | GloveCollection | undefined,
		public level: number = 1,
		public exp: number = 0,
		public prefix: string[] = [],
		// Imported contraband collection
		public sideCollection?: Case | Collection,
		public sideSpecial?: KnifeCollection | GloveCollection | undefined,
		public sideChance: number = 0,
		// Increases chance of the rarest guns, both regular and contraband
		public covertBoost: number = 0,
		// Increases the chance of special item
		public specialBoost: number = 0,
	) {}
}
