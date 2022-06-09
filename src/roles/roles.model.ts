import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/user.model";
import { UserRoleModel } from "./user-roles.model";

interface rolesCreationAttr{
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role,rolesCreationAttr > {
    @ApiProperty({example: '1', description: "Уникальный идентификатор"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: "Уникальное значение роли"})
    @Column({type: DataType.STRING,unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Администратор', description: "Администратор приложения"})
    @Column({type: DataType.STRING,allowNull: false})
    description: boolean;

    @BelongsToMany(()=> User, () => UserRoleModel)
    users: User[];
}