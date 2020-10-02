import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagsDTO } from './model/tags.dto';
import {TagsEntity} from './model/tags.entity';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(TagsEntity) private readonly repository: Repository<TagsEntity>) {  }

   public async getAll() {
    return await this.repository.find();
  }

  public async getOne(id: number) {
    return await this.repository.find({where: [{tag_id: id}]});
  }

  public async addOne(tagDTO: TagsDTO, tag: TagsEntity) : Promise<TagsDTO> {
      return this.repository.save(tagDTO.toEntity(tag)).then(e => TagsDTO.fromEntity(e));
  }

}
