import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesEntity } from './model/types.entity';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TypesEntity])
  ],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
