import { Client } from "pg";
import BaseModel, { DbColumn, DbModel } from "./BaseModel";

export default class DbInterface {
	/**
	 * @param client Pg client
	 * @param classes Classes (not objects) to create tables and bind results for
	 */
	constructor (
		public client: Client,
		public classes: DbModel[]
	) {}

	getDbColumnName(name: string): string {
		return name
			.replace(/^([A-Z])/, letter => letter.toLowerCase())
			.replaceAll(/([A-Z])/g, letter => '_'+letter.toLowerCase());
	}

	createTables(): Promise<true> {
		return new Promise(async (resolve, reject) => {
			let classesLeft = this.classes.length;
			let failed = false;
			for (const OneClass of this.classes) {
				let primaryKeys = 0;
				let queryColumns = [];
				for (const column of OneClass.columns) {
					if ('primaryKey' in column) {
						primaryKeys++;
						queryColumns.push(`${this.getDbColumnName(column.name)} SERIAL PRIMARY KEY`);
					} else {
						let row = `${this.getDbColumnName(column.name)} ${column.type}`
						if (!column.nullable)
							row += ` NOT NULL`;
						if (column.foreignKey)
							row += ` REFERENCES ${column.foreignKey}`;
						queryColumns.push(row);
					}
				}
				let query = `CREATE TABLE IF NOT EXISTS ${OneClass.tableName}(\n` + queryColumns.join(`,\n`) + `\n)`;
				this.client.query(query).then(result => {
					classesLeft--;
					if (classesLeft === 0) {
						resolve(true);
					}
				}).catch(error => {
					if (!failed) {
						failed = true;
						reject(error);
					}
				});
			}
		});
	}

	insertModel(model: BaseModel): Promise<true> {
		for (const OneClass of this.classes) {
			if (model instanceof OneClass) {
				let queryColumnNames: string[] = [];
				let queryColumnValues: string[] = [];
				let values: any[] = [];
				let updateRows: string[] = [];
				let i = 0;
				let primaryKey: DbColumn | undefined = undefined;
				// Compose strings from column metadata - column names, $<int>, values
				for (const column of OneClass.columns) {
					i++;
					values.push((model as any)[column.name]);
					if ('primaryKey' in column) {
						primaryKey = column;
					} else {
						updateRows.push(`${this.getDbColumnName(column.name)} = $${i}`);
					}
					if (!('primaryKey' in column) || model.id) {

					}
				}
				// Create query string using the column strings INSERT INTO <tableName> (column1, ...) VALUES ($1, ...)
				let query = `INSERT INTO ${OneClass.tableName}(` + queryColumnNames.join(', ') + `)`
					+ `\nVALUES (${queryColumnValues.join(', ')})`;
				// If primary key, prepare possible update and returning of id to assign to inserted object
				if (primaryKey) {
					query += `\nON CONFLICT (${this.getDbColumnName(primaryKey.name)}) DO UPDATE SET\n` + updateRows.join(',\n')
					query += `\nRETURNING ${primaryKey.name}`
				}
				return new Promise((resolve, reject) => {
					this.client.query(query, values).then(returned => {
						if (primaryKey) {
							(model as any)[primaryKey.name] = returned.rows[0].id;
						}
						resolve(true);
					}).catch(error => reject(error));
				});
			}
		}
		throw new Error(`Cannot find DbModel for object of '${model.constructor.name}' class`);
	}
}
