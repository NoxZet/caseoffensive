import { DbColumn } from './BaseModel';
import BaseModel from "./BaseModel";

export default class User extends BaseModel {
	static tableName = 'user';
	static columns: DbColumn[] = BaseModel.columns.concat([
		{ name: 'username', type: 'TEXT', injectCostructor: true },
		{ name: 'email', type: 'TEXT', injectCostructor: true },
		{ name: 'password', type: 'TEXT', injectCostructor: true },
	]);
}
