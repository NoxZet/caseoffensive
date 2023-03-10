import BaseModel, { DbColumn } from "database/BaseModel";

export default class BaseItem extends BaseModel {
	static columns: DbColumn[] = BaseModel.columns.concat([
		{ name: 'original_owner_id', type: 'INT', foreignKey: 'user(id)', nullable: true },
		{ name: 'owner_id', type: 'INT', foreignKey: 'user(id)', nullable: true },
		{ name: 'original_ip', type: 'TEXT', nullable: true },
		{ name: 'created_at', type: 'TIMESTAMP' },
	]);

	public original_owner_id?: number;
	public owner_id?: number;
	public original_ip?: string;
	public created_at?: Date;
}
