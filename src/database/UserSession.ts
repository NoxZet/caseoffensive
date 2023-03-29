import { DbColumn } from './BaseModel';
import BaseModel from "./BaseModel";

export default class UserSession extends BaseModel {
	static tableName = 'user_session';
	static columns: DbColumn[] = BaseModel.columns.concat([
		{ name: 'user_id', type: 'INT', foreignKey: 'users(id)', injectConstructor: true },
		{ name: 'token', type: 'TEXT', injectConstructor: true },
		{ name: 'expireAt', type: 'TIMESTAMP', injectConstructor: true },
	]);

	constructor(
		public user_id: number,
		public token: string,
		public expireAt: Date,
	) {super();}
}
