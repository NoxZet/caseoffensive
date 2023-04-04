import { Prefix } from 'opening/prefixRegister';
import { Weapon, Quality } from 'opening/skinRegister'

/**
 * Representation of User sent to frontend
 */
type User = {
	id: number | undefined,
	username: string,
}
export default User;
