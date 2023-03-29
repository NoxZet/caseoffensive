import express from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { BaseModelId } from 'database/BaseModel';
import DbInterface from 'database/DbInterface';
import User from 'database/User';
import UserSession from 'database/UserSession';

const SALT_ROUNDS = 10;
const SESSION_BYTES = 64;
const EXPIRY_DAYS = 7;

export class InvalidCredentials extends Error {}
export class InvalidToken extends Error {}

export default class Security {
	/** Pass as middleware to get error if user is not authenticated or User object in res.locals.user if they are */
	public readonly getUserMiddleware: (req: express.Request, res: express.Response, next: Function) => void;

	constructor(
		private dbInterface: DbInterface
	) {
		this.getUserMiddleware =
			(req: express.Request, res: express.Response, next: Function) => this.getUserMiddlewareMethod(req, res, next);
	}

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

	getExpiryDate(): Date {
		const date = new Date();
		date.setUTCDate(date.getUTCDate() + 1);
		return date;
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
		const session = new UserSession(user.id, token, this.getExpiryDate());
		await this.dbInterface.insertModel(session);
		return token;
	}

	getUserSession(token: string): Promise<UserSession & BaseModelId | undefined> {
		return this.dbInterface.selectModel(UserSession, 'WHERE token = $1', [token])
		.then(sessions => sessions[0]);
	}

	async deleteSession(token: string): Promise<true> {
		const userSession = await this.getUserSession(token);
		if (userSession) {
			await this.dbInterface.deleteModel(userSession);
		}
		return true;
	}

	async getUser(token: string): Promise<User & BaseModelId> {
		// Delete expired tokens first
		await this.dbInterface.deleteQuery(UserSession, 'WHERE expire_at < $1', [new Date()]);
		const userSession = await this.getUserSession(token);
		if (!userSession) {
			throw new InvalidToken();
		}
		const user = await this.dbInterface.selectModelByIdOrNull(User, userSession.user_id);
		// User has disappeared
		if (!user) {
			await this.dbInterface.deleteModel(userSession);
			throw new InvalidToken();
		}
		// Extend session expiry
		userSession.expireAt = this.getExpiryDate();
		await this.dbInterface.insertModel(userSession);
		return user;
	}

	private getUserMiddlewareMethod(req: express.Request, res: express.Response, next: Function) {
		this.getUser(req.headers.authorization || '')
		.then(user => {
			res.locals.user = user;
			next();
		})
		.catch(error => {
			if (error instanceof InvalidToken) {
				res.status(401).send({
					'message': 'Invalid authorization token',
				})
			} else {
				next(error);
			}
		});
	}
}
