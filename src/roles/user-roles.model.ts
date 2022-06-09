import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "./roles.model";
import { User } from "../users/user.model";


@Table({tableName: 'user-role', createdAt: false, updatedAt: false})
export class UserRoleModel extends Model<UserRoleModel> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;
  @ForeignKey(()=> Role)
  @Column({type: DataType.INTEGER})
  roleid: number;
  @ForeignKey(()=> User)
  @Column({type: DataType.INTEGER})
  userid: number;
}