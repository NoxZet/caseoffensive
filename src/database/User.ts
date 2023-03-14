import { DbColumn } from './BaseModel';
import BaseModel from "./BaseModel";

export default class User extends BaseModel {
	static tableName = 'users';
	static columns: DbColumn[] = BaseModel.columns.concat([
		{ name: 'username', type: 'TEXT', injectCostructor: true, unique: true },
		{ name: 'email', type: 'TEXT', injectCostructor: true, unique: true },
		{ name: 'password', type: 'TEXT', injectCostructor: true },
	]);

	constructor(
		public username: string,
		public email: string,
		public password: string
	) {super();}
}
