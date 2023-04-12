import { ContainerCollection, getCollectionContainerDisplayName, SpecialCollection } from 'opening/collectionRegister'
import { getPrefixesDisplayName, Prefix } from 'opening/prefixRegister';

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
	baseSprite: string | undefined,
};
export default Container;

export function getContainerDisplayName(container: Container): string {
	return getPrefixesDisplayName(container.prefix.filter(prefix => prefix !== 'stattrak' || !container.mainCollection.startsWith('case')))
		+ ' ' + getCollectionContainerDisplayName(container.mainCollection);
}
