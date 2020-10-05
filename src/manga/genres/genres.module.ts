import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {GenresService} from './genres.service';
import {GenresController} from './genres.controller';
import { GenresEntity } from './model/genres.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([GenresEntity])
  ],
  controllers: [GenresController],
  providers: [GenresService],
})

export class GenresModule {

}
