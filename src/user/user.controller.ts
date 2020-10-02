import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './model/user.entity';
import { UserDTO } from './model/user.dto';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {
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
  public async addOne(@Body() user: UserEntity) : Promise<UserDTO> {
    console.log(user);
    const dto = new UserDTO();
    return await this.service.addOne(dto, user);
  }
}
