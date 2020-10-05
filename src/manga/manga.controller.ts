import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangasEntity } from './model/mangas.entity';
import { MangasDTO } from './model/mangas.dto';

@Controller('manga')
export class MangaController {
    constructor(private service: MangaService) {
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
    public async addOne(@Body() type: MangasEntity) : Promise<MangasDTO> {
      const dto = new MangasDTO();
      return await this.service.addOne(dto, type);
    }
}
