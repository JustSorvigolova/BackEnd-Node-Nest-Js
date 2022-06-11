import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./user.model";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesQuard } from "../auth/roles.quard";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";


@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private  usersService: UsersService) {
  }

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto){
      return this.usersService.createUser(userDto);
  }

  @ApiOperation({summary: 'Получение всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  @Roles('USER')
  @UseGuards(RolesQuard)
  getAll(){
    return this.usersService.getAllUsers();
  }

  @ApiOperation({summary: 'Выдача роли'})
  @ApiResponse({status: 200})
  @Post('/role')
  @Roles('ADMIN')
  @UseGuards(RolesQuard)
  addRole(@Body() dto: AddRoleDto){
    return this.usersService.addRole(dto);
  }

  @ApiOperation({summary: 'Банить пользователей'})
  @ApiResponse({status: 200})
  @Post('/ban')
  @Roles('ADMIN')
  @UseGuards(RolesQuard)
  banUser(@Body() dto: BanUserDto){
    return this.usersService.ban(dto);
  }

}
