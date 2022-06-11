import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from "./posts.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Posts } from "./posts.model";
import { User } from "../users/user.model";
import { FilesModule } from "../files/files.module";


@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    SequelizeModule.forFeature([User, Posts]),
    FilesModule
  ]
})
export class PostsModule {}
