import bcrypt from 'bcryptjs';
import DbInterface from 'database/DbInterface';
const SALT_ROUNDS = 10;

export default class Security {
	constructor(
		private dbInterface: DbInterface
	) {}

	hashPassword(ptPassword: string): Promise<string> {
		return bcrypt.hash(ptPassword, SALT_ROUNDS);
	}

	verifyPassword(ptPassword: string, hash: string): Promise<boolean> {
		return bcrypt.compare(ptPassword, hash);
	}
}
