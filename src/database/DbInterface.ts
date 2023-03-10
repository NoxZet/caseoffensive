import { Client } from "pg";
import BaseModel, { DbColumn } from "./BaseModel";

class DbInterface {
	constructor (
		public client: Client,
		public classes: { tableName: string, columns: DbColumn[] }[]
	) {}

	createTables() {
		for (const oneClass of this.classes) {
			// TODO: Create table
		}
	}
}
