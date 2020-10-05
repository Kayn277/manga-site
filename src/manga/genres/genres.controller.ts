import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresEntity } from './model/genres.entity';
import { GenresDTO } from './model/genres.dto';

@Controller('genres')
export class GenresController {
  constructor(private service: GenresService) {
  }
  @Get()
  public async getAll() {
    return await this.service.getAll();
  }

  @Get(':id')
  public async getOne(@Param() params) {
    return await this.service.getOne(params.id);
  }

  @Post()
  public async addOne(@Body() genre: GenresEntity) : Promise<GenresDTO> {
    console.log(genre);
    const dto = new GenresDTO();
    return await this.service.addOne(dto, genre);
  }
}
