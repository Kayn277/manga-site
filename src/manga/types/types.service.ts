import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypesEntity } from './model/types.entity';
import { Repository } from 'typeorm';
import { TypesDTO } from './model/types.dto';

@Injectable()
export class TypesService {
  constructor(@InjectRepository(TypesEntity) private readonly repository: Repository<TypesEntity>) {  }

   public async getAll() {
    return await this.repository.find();
  }

  public async getOne(id: number) {
    return await this.repository.find({where: [{type_id: id}]});
  }

  public async addOne(typeDTO: TypesDTO, type: TypesEntity) : Promise<TypesDTO> {
      return this.repository.save(typeDTO.toEntity(type)).then(e => TypesDTO.fromEntity(e));
  }
}
