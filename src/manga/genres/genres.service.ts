import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenresDTO} from './model/genres.dto';
import {GenresEntity} from './model/genres.entity';


@Injectable()
export class GenresService {
   constructor(@InjectRepository(GenresEntity) private readonly repository: Repository<GenresEntity>) {  }

   public async getAll() {
    return await this.repository.find();
  }

  public async getOne(id: number) {
    return await this.repository.find({where: [{genre_id: id}]});
  }

  public async addOne(genreDTO: GenresDTO, genre: GenresEntity) : Promise<GenresDTO> {
      return this.repository.save(genreDTO.toEntity(genre)).then(e => GenresDTO.fromEntity(e));
  }
}
