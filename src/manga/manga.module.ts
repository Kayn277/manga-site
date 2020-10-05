import { Module } from '@nestjs/common';
import { MangaController } from './manga.controller';
import { MangaService } from './manga.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from './tags/tags.module';
import { GenresModule } from './genres/genres.module';
import { TypesModule } from './types/types.module';
import { AuthorsModule } from './authors/authors.module';
import { MangasEntity } from './model/mangas.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MangasEntity]),
    TagsModule,
    GenresModule,
    TypesModule,
    AuthorsModule,
  ],
  controllers: [MangaController],
  providers: [MangaService]
})
export class MangaModule {}
