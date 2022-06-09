import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoleModel } from "../roles/user-roles.model";

interface userCreationAttr{
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User,userCreationAttr > {
    @ApiProperty({example: '1', description: "Уникальный идентификатор"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'example@gmail.com', description: "Email"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @ApiProperty({example: '123456', description: "Пароль"})
    @Column({type: DataType.STRING,allowNull: false})
    password: string;
    @ApiProperty({example: 'true', description: "Забанен или нет"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    @ApiProperty({example: 'За жизнь', description: "Нарушение"})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(()=> Role, () => UserRoleModel)
    roles: Role[];
}