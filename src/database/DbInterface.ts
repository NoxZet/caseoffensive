import { Client } from "pg";
import BaseModel, { BaseModelId, DbColumn, DbColumnNonPrimary, DbModel } from "./BaseModel";
import PostgresInterval from "postgres-interval";

export class MissingId extends Error {}
export class NoResult extends Error {}
export class CannotCreateNewPrimaryKey extends Error {}
export class CannotRemoveColumn extends Error {}

export default class DbInterface {
	/**
	 * @param client Pg client
	 * @param classes Classes (not objects) to create tables and bind results for
	 */
	constructor (
		public client: Client,
		public classes: DbModel<BaseModel>[]
	) {}

	getDbColumnName(name: string): string {
		return name
			.replace(/^([A-Z])/, letter => letter.toLowerCase())
			.replaceAll(/([A-Z])/g, letter => '_'+letter.toLowerCase());
	}

	private getColumnDefinition(column: DbColumnNonPrimary): string {
		let row = `${this.getDbColumnName(column.name)} ${column.type}`
		if (!column.nullable)
			row += ` NOT NULL`;
		if (column.unique)
			row += ` UNIQUE`;
		if (column.foreignKey)
			row += ` REFERENCES ${column.foreignKey}`;
		return row;
	}

	private createTables(): Promise<true> {
		return new Promise(async (resolve, reject) => {
			let classesLeft = this.classes.length;
			function resolveOneClass() {
				classesLeft--;
				if (classesLeft === 0) {
					resolve(true);
				}
			}
			for (const OneClass of this.classes) {
				let primaryKeys = 0;
				let queryColumns = [];
				for (const column of OneClass.columns) {
					if ('primaryKey' in column) {
						primaryKeys++;
						queryColumns.push(`${this.getDbColumnName(column.name)} SERIAL PRIMARY KEY`);
					} else {
						queryColumns.push(this.getColumnDefinition(column));
					}
				}
				let query = `CREATE TABLE IF NOT EXISTS ${OneClass.tableName}(\n` + queryColumns.join(`,\n`) + `\n)`;
				this.client.query(query).then(result => {
					resolveOneClass();
				}).catch(error => {
					reject(error);
				});
			}
		});
	}

	private updateColumns(): Promise<true> {
		return new Promise(async (resolve, reject) => {
			let classesLeft = this.classes.length;
			function resolveOneClass() {
				classesLeft--;
				if (classesLeft === 0) {
					resolve(true);
				}
			}
			for (const OneClass of this.classes) {
				// Find all columns for the table already in database
				let fetchQuery = `SELECT * FROM information_schema.columns WHERE table_name = '${OneClass.tableName}' ORDER BY ordinal_position`;
				this.client.query(fetchQuery).then(result => {
					// Check if any columns disappeared (are in db but not on class column definition)
					const removedColumns: string[] = [];
					for (const actualColumn of result.rows) {
						let present = false;
						for (const column of OneClass.columns) {
							if (actualColumn.column_name === this.getDbColumnName(column.name)) {
								present = true;
								break;
							}
						}
						if (!present) {
							removedColumns.push(actualColumn.column_name);
						}
					}
					if (removedColumns.length >= 1) {
						reject(new CannotRemoveColumn(`${OneClass.tableName}.(${removedColumns.join(', ')})`));
						return;
					}
					// Check for new columns (are on class definition but not in db)
					const addColumns: DbColumnNonPrimary[] = [];
					for (const column of OneClass.columns) {
						// Check if one of the fetched columns is this one
						let present = false;
						for (const actualColumn of result.rows) {
							if (actualColumn.column_name === this.getDbColumnName(column.name)) {
								present = true;
								break;
							}
						}
						if (!present) {
							if ('primaryKey' in column) {
								reject(new CannotCreateNewPrimaryKey(`${OneClass.tableName}.${column.name}`));
							} else {
								addColumns.push(column);
							}
						}
					}
					// Add missing columns if any
					if (addColumns.length >= 1) {
						const addColumnQuery: string[] = [];
						for (const newColumn of addColumns) {
							addColumnQuery.push(`ADD COLUMN ` + this.getColumnDefinition(newColumn));
						}
						let alterQuery = `ALTER TABLE ${OneClass.tableName}\n` + addColumnQuery.join(',\n');
						this.client.query(alterQuery).then(_ => {
							resolveOneClass();
						})
					} else {
						resolveOneClass();
					}
				});
			}
		});
	}

	updateDatabase(): Promise<true> {
		return this.createTables()
			.then(() => this.updateColumns())
			.then(() => true);
	}

	deleteModel(model: BaseModel & BaseModelId): Promise<true> {
		for (const OneClass of this.classes) {
			if (model instanceof OneClass) {
				let query = `DELETE FROM ${OneClass.tableName} WHERE id = $1`;
				return new Promise((resolve, reject) => {
					this.client.query(query, [model.id])
					.then(returned => resolve(true))
					.catch(error => reject(error));
				});
			}
		}
		throw new Error(`Cannot find DbModel for object of '${model.constructor.name}' class`);
	}

	deleteQuery<Model extends BaseModel>(OneClass: DbModel<Model>, conditions: string = '', parameters: any[] = []): Promise<true> {
		const columns = [];
		// Build a list of columns to select and a query string
		for (const column of OneClass.columns) {
			columns.push(this.columnSelectExpression(column));
		}
		const query = `DELETE FROM ${OneClass.tableName} ${conditions}`;
		return this.client.query(query, parameters)
		.then(returned => true);
	}

	private insertValueExpression(column: DbColumn, i: number) {
		if ('type' in column && column.type === 'INTERVAL') {
			return `$${i} * INTERVAL '1 millisecond'`;
		}
		return `$${i}`;
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
						queryColumnValues.push(this.insertValueExpression(column, i));
						parameters.push((model as any)[column.name]);
					}
					if ('primaryKey' in column) {
						primaryKey = column;
					} else {
						// The block with i++ will always happen if this block happens
						updateRows.push(`${this.getDbColumnName(column.name)} = ${this.insertValueExpression(column, i)}`);
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

	private columnSelectExpression(column: DbColumn) {
		if ('type' in column && column.type === 'INTERVAL') {
			return `(EXTRACT (EPOCH FROM ${this.getDbColumnName(column.name)}) * 1000)::INT`
				+ ` AS ${this.getDbColumnName(column.name)}`;
		}
		return this.getDbColumnName(column.name);
	}

	selectCount(OneClass: DbModel<BaseModel>, conditions: string = '', parameters: any[] = []): Promise<number> {
		const query = `SELECT COUNT(*) FROM ${OneClass.tableName} ${conditions}`;
		return new Promise((resolve, reject) => {
			this.client.query(query, parameters).then(returned => {
				resolve(returned.rows[0].count);
			}).catch(error => reject(error));
		});
	}

	selectModel<Model extends BaseModel>(OneClass: DbModel<Model>, conditions: string = '', parameters: any[] = []): Promise<(Model & BaseModelId)[]> {
		const columns = [];
		// Build a list of columns to select and a query string
		for (const column of OneClass.columns) {
			columns.push(this.columnSelectExpression(column));
		}
		const query = `SELECT ${columns.join(', ')} FROM ${OneClass.tableName} ${conditions}`;
		return new Promise((resolve, reject) => {
			this.client.query(query, parameters).then(returned => {
				const models = [];
				// Bind each row onto a model object
				for (const row of returned.rows) {
					const constructorParams = [];
					// injectConstructor columns are pushed onto array to be passed into constructor
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
					// Every BaseModel should have an id assigned when retrived from database
					if (typeof model.id !== 'number') {
						throw new MissingId(OneClass.name);
					}
					models.push((model as Model & BaseModelId));
				}
				resolve(models);
			}).catch(error => reject(error));
		});
	}

	/**
	 * @param OneClass Model class to fetch for
	 * @param id
	 * @returns Promise that resolves to a model with the id or null
	 */
	selectModelByIdOrNull<Model extends BaseModel>(OneClass: DbModel<Model>, id: number): Promise<(Model & BaseModelId) | null> {
		return this.selectModel(OneClass, 'WHERE id = $1', [id])
		.then((models) => {
			if (models.length === 0) {
				return null;
			} else {
				return models[0];
			}
		});
	}

	/**
	 * @param OneClass Model class to fetch for
	 * @param id
	 * @returns Promise that resolves to a model with the id or rejects with {@link NoResult}
	 */
	selectModelById<Model extends BaseModel>(OneClass: DbModel<Model>, id: number): Promise<Model & BaseModelId> {
		return this.selectModelByIdOrNull(OneClass, id)
		.then((model) => {
			if (model === null) {
				throw new NoResult();
			} else {
				return model;
			}
		})
	}
}

let db
