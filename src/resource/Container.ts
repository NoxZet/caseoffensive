import { ContainerCollection, SpecialCollection } from 'opening/collectionRegister'
import { Prefix } from 'opening/prefixRegister';

type Container = {
	id: number | undefined,
	owner_id: number | undefined,
	mainCollection: ContainerCollection,
	mainSpecial: SpecialCollection | undefined,
	prefix: Prefix[],
	level: number,
	exp: number,
	// Imported contraband collection
	sideCollection: ContainerCollection | undefined,
	sideSpecial: SpecialCollection | undefined,
	sideChance: number,
	// Increases chance of the rarest guns, both regular and contraband
	covertBoost: number,
	// Increases the chance of special item
	specialBoost: number,
};
export default Container;
