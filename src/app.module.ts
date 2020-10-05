import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { configService } from 'src/config/config.service';
import { UserModule } from './user/user.module';
import { MangaModule } from './manga/manga.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    MangaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
