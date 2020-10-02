import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { configService } from 'src/config/config.service';
import { UserModule } from './user/user.module';
import { TagsModule } from './tags/tags.module';
import { GenresController } from './genres/genres.controller';
import { GenresService } from './genres/genres.service';
import { GenresModule } from './genres/genres.module';
import { TypesController } from './types/types.controller';
import { TypesService } from './types/types.service';
import { TypesModule } from './types/types.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    TagsModule,
    GenresModule,
    TypesModule,
    AuthorsModule
  ],
  controllers: [AppController, GenresController, TypesController],
  providers: [AppService, GenresService, TypesService],
})
export class AppModule {

}
