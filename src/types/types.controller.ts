import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesEntity } from './model/types.entity';
import { TypesDTO } from './model/types.dto';


@Controller('types')
export class TypesController {
  constructor(private service: TypesService) {
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
  public async addOne(@Body() type: TypesEntity) : Promise<TypesDTO> {
    const dto = new TypesDTO();
    return await this.service.addOne(dto, type);
  }
}
