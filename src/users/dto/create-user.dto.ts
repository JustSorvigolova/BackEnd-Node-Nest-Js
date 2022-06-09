import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
  @ApiProperty({example: 'test@gmail.com', description: 'admin'})
  readonly email: string;
  @ApiProperty({example: 'admin', description: 'description'})
  readonly password: string;
}