import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/user.model";

interface PostsCreationAttr{
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({tableName: 'posts'})
export class Posts extends Model<Posts,PostsCreationAttr > {
  @ApiProperty({example: '1', description: "Уникальный идентификатор"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Column({type: DataType.STRING,allowNull: false})
  content: string;

  @Column({type: DataType.STRING})
  image: string

  @Column({type: DataType.INTEGER})
  @ForeignKey(()=>User)
  userId: number

  @BelongsTo(()=>User)
  author: User
}