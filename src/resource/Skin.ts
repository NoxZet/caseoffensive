import { Prefix } from 'opening/prefixRegister';
import { Weapon, Quality } from 'opening/skinRegister'

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
