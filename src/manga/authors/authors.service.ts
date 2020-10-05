import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorsDTO} from './model/authors.dto';
import { AuthorsEntity} from './model/authors.entity';

@Injectable()
export class AuthorsService {
  constructor(@InjectRepository(AuthorsEntity) private readonly repository: Repository<AuthorsEntity>) {  }

   public async getAll() {
    return await this.repository.find();
  }

  public async getOne(id: number) {
    return await this.repository.find({where: [{author_id: id}]});
  }

  public async addOne(authorDTO: AuthorsDTO, author: AuthorsEntity) : Promise<AuthorsDTO> {
      return this.repository.save(authorDTO.toEntity(author)).then(e => AuthorsDTO.fromEntity(e));
  }
}
