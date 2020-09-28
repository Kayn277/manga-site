import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from '../model/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) {  }

  public async getAll() {
    return await this.repository.find();
  }

  public async getOne(id: number) {
    return await this.repository.find({where: [{user_id: id}]});
  }

  public async addOne(userDTO: UserDTO, user: UserEntity) : Promise<UserDTO> {
    console.log(user);
    console.log(userDTO);
    return this.repository.save(userDTO.toEntity(user)).then(e => UserDTO.fromEntity(e));
  }


}
