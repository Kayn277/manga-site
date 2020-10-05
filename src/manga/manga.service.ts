import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MangasEntity } from './model/mangas.entity';
import { Repository } from 'typeorm';
import { MangasDTO } from './model/mangas.dto';

@Injectable()
export class MangaService {
  constructor(@InjectRepository(MangasEntity) private readonly repository: Repository<MangasEntity>) {  }

   public async getAll() {
    return await this.repository.find();
  }

  public async getOne(id: number) {
    return await this.repository.find({where: [{manga_id: id}]});
  }

  public async addOne(mangaDTO: MangasDTO, tag: MangasEntity) : Promise<MangasDTO> {
      return this.repository.save(mangaDTO.toEntity(tag)).then(e => MangasDTO.fromEntity(e));
  }
}
