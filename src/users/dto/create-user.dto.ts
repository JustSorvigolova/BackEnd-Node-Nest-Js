import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{
  @ApiProperty({example: 'test@gmail.com', description: 'admin'})
  @IsString({message: 'Должен быть строкой'})
  @IsEmail({},{message: "неправельный email"})
  readonly email: string;
  @IsString({message: 'Должен быть строкой'})
  @ApiProperty({example: 'admin', description: 'description'})
  @Length(4, 16,{message: 'не меньше 4 и не больше 16'})
  readonly password: string;
}