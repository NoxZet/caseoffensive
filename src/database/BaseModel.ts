/**
 * - name: Name of the property to set. Database column name is generated from snake_case of this name.
 * - type: Postgres column type
 * - foreignKey: In the format table_name(column_name)
 * - primaryKey: Only one per model
 * - nullable
 * - injectConstructor: If true, set this attribute through object constructor - the order of columns
 *   with injectConstructor = true in column property must be the same as these properties in constructor.
 */
export type DbColumn =
{ name: string, type: string, foreignKey?: string, nullable?: true, injectCostructor?: true, unique?: true }
|
{ name: string, primaryKey: true, injectConstructor?: true };

export type DbModel = { new (...args: any[]): BaseModel, tableName: string, columns: DbColumn[] }

export default class BaseModel {
	static columns: DbColumn[] = [
		{ name: 'id', type: 'INT', primaryKey: true },
	];

	/** Set only by the DbInterface and shouldn't be modified manually */
	readonly id?: number = undefined;
}
