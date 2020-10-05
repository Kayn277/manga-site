import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TagsService} from './tags.service';
import {TagsController} from './tags.controller';
import { TagsEntity } from './model/tags.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TagsEntity])
  ],
  controllers: [TagsController],
  providers: [TagsService],
})


export class TagsModule {

}
