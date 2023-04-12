import { getPrefixesDisplayName, Prefix } from 'opening/prefixRegister';
import { Weapon, Quality, getWeaponDisplayName } from 'opening/skinRegister'

/**
 * Representation of Skin sent to frontend
 */
type Skin = {
	id: number | undefined,
	owner_id: number | undefined,
	weapon: Weapon,
	skin: string,
	quality: Quality,
	wear: number | null,
	level: number,
	prefix: Prefix[],
	stattrak: number,
}
export default Skin;

export function getSkinDisplayName(skin: Skin): [string, string] {
	return [getPrefixesDisplayName(skin.prefix) + ' ' + getWeaponDisplayName(skin.weapon), skin.skin];
}

export function getExteriorDisplayName(skin: Skin): string {
	if (skin.wear === null)
		return 'Vanilla';
	else if (skin.wear <= 0.07)
		return 'Factory New';
	else if (skin.wear <= 0.15)
		return 'Minimal Wear';
	else if (skin.wear <= 0.38)
		return 'Field-Tested';
	else if (skin.wear <= 0.45)
		return 'Well-Worn';
	else
		return 'Battle-Scarred';
}
