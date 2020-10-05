import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsEntity } from './model/authors.entity';
import { AuthorsDTO } from './model/authors.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private service:AuthorsService) {
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
  public async addOne(@Body() author: AuthorsEntity) : Promise<AuthorsDTO> {
    const dto = new AuthorsDTO();
    return await this.service.addOne(dto, author);
  }
}
