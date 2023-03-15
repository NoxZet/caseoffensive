import { Client } from "pg";
import BaseModel, { DbColumn, DbModel } from "./BaseModel";

export type DbExtraColumn = { name: string, expression: string }

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
						if (column.unique)
							row += ` UNIQUE`;
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
				let parameters: any[] = [];
				let updateRows: string[] = [];
				let i = 0;
				let primaryKey: DbColumn | undefined = undefined;
				// Compose strings from column metadata - column names, $<int>, values
				for (const column of OneClass.columns) {
					// If model[primaryKey] is not set, don't set it in query so it can autogenerate
					if (!('primaryKey' in column) || (model as any)[column.name]) {
						i++;
						queryColumnNames.push(this.getDbColumnName(column.name));
						queryColumnValues.push(`$${i}`);
						parameters.push((model as any)[column.name]);
					}
					if ('primaryKey' in column) {
						primaryKey = column;
					} else {
						// The block with i++ will always happen if this block happens
						updateRows.push(`${this.getDbColumnName(column.name)} = $${i}`);
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
					this.client.query(query, parameters).then(returned => {
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

	selectModel(OneClass: DbModel, conditions: string = '', parameters: any[] = []): Promise<BaseModel[]> {
		const columns = [];
		// Build a list of columns to select and a query string
		for (const column of OneClass.columns) {
			columns.push(this.getDbColumnName(column.name));
		}
		const query = `SELECT ${columns.join(', ')} FROM ${OneClass.tableName} ${conditions}`;
		return new Promise((resolve, reject) => {
			this.client.query(query, parameters).then(returned => {
				const models = [];
				// Bind each row onto a model object
				for (const row of returned.rows) {
					const constructorParams = [];
					// injectCostructor columns are pushed onto array to be passed into constructor
					for (const column of OneClass.columns) {
						if ('injectConstructor' in column) {
							constructorParams.push(row[this.getDbColumnName(column.name)]);
						}
					}
					const model = new OneClass(...constructorParams);
					// The rest is assigned after construction
					for (const column of OneClass.columns) {
						if (!('injectConstructor' in column)) {
							(model as any)[column.name] = row[this.getDbColumnName(column.name)];
						}
					}
					models.push(model);
				}
				resolve(models);
			}).catch(error => reject(error));
		});
	}
}

let db
