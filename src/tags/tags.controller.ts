import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsEntity } from './model/tags.entity';
import { TagsDTO } from './model/tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private service: TagsService) {
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
  public async addOne(@Body() user: TagsEntity) : Promise<TagsDTO> {
    console.log(user);
    const dto = new TagsDTO();
    return await this.service.addOne(dto, user);
  }
}
