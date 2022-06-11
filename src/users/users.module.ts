import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.model";
import { Role } from "../roles/roles.model";
import { UserRoleModel } from "../roles/user-roles.model";
import { RolesModule } from "../roles/roles.module";
import { AuthModule } from "../auth/auth.module";
import { Posts } from "../posts/posts.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoleModel, Posts]),
    RolesModule,
    forwardRef(()=>
      AuthModule )
  ],
  exports : [UsersService]
})
export class UsersModule {}
