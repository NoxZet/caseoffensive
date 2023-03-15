import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { BaseModelId } from 'database/BaseModel';
import DbInterface from 'database/DbInterface';
import User from 'database/User';

const SALT_ROUNDS = 10;
const SESSION_BYTES = 64;

export class InvalidCredentials extends Error {}
export class InvalidToken extends Error {}

export default class Security {
	private sessions: {[key: string]: {userId: number, lastAccess: Date}} = {};

	constructor(
		private dbInterface: DbInterface
	) {}

	/**
	 * Abstraction of bcrypt.hash with constant salt rounds
	 * @param ptPassword Plaintext password
	 * @returns Promise that resolves with resulting hash
	 */
	hashPassword(ptPassword: string): Promise<string> {
		return bcrypt.hash(ptPassword, SALT_ROUNDS);
	}

	/**
	 * @param ptPassword Plaintext password
	 * @param hash Hash to compare against
	 * @returns Promise that resolves to true if password matches, rejects with {@link InvalidCredentials} if not
	 */
	async verifyPassword(ptPassword: string, hash: string): Promise<true> {
		const matches = await bcrypt.compare(ptPassword, hash);
		if (matches) {
			return true;
		} else {
			throw new InvalidCredentials();
		}
	}

	/**
	 * Promisification of crypto.randomBytes
	 * @param count How many bytes to generate
	 * @returns Promise that resolves to the buffer with generated bytes
	 */
	randomBytes(count: number): Promise<Buffer> {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(count, (error, buffer) => {
				if (error) {
					reject(error);
				} else {
					resolve(buffer);
				}
			});
		});
	}

	async verifyUser(username: string, ptPassword: string): Promise<User & BaseModelId> {
		const users = await this.dbInterface.selectModel(User, 'WHERE username = $1', [username]);
		if (users.length < 1) {
			throw new InvalidCredentials();
		} else {
			await this.verifyPassword(ptPassword, users[0].password);
			return users[0];
		}
	}

	async createSession(username: string, ptPassword: string): Promise<string> {
		const user = await this.verifyUser(username, ptPassword);
		const buffer = await this.randomBytes(SESSION_BYTES);
		const token = buffer.toString('base64url');
		this.sessions[token] = {
			userId: user.id,
			lastAccess: new Date(),
		};
		return token;
	}

	async getUser(token: string): Promise<User & BaseModelId> {
		if (!this.sessions[token]) {
			throw new InvalidToken();
		}
		const users = await this.dbInterface.selectModel(User, 'WHERE id = $1', [this.sessions[token].userId]);
		// User has disappeared, we shouldn't delete users (error will probably fall through to 500)
		if (users.length < 1) {
			delete this.sessions[token];
			throw new InvalidToken();
		} else {
			return users[0];
		}
	}
}
