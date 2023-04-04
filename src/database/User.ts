import { DbColumn } from './BaseModel';
import BaseModel from "./BaseModel";
import UserResource from 'resource/User';

export default class User extends BaseModel {
	static tableName = 'users'; // user is a reserved Postgres word
	static columns: DbColumn[] = BaseModel.columns.concat([
		{ name: 'username', type: 'TEXT', injectConstructor: true, unique: true },
		{ name: 'email', type: 'TEXT', injectConstructor: true, unique: true },
		{ name: 'password', type: 'TEXT', injectConstructor: true },
	]);

	constructor(
		public username: string,
		public email: string,
		public password: string
	) {super();}

	toResource(): UserResource {
		return {
			id: this.id,
			username: this.username,
		}
	}
}
