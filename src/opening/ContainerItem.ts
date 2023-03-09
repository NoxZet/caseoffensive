import { ContainerCollection, SpecialCollection } from 'opening/collectionRegister'
import { Prefix } from './prefixRegister';

export default class ContainerItem {
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
	) {}
}
