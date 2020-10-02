import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import {IsNumber, IsString} from 'class-validator';
import {UserEntity} from './user.entity';

export class UserDTO implements Readonly <UserDTO> {
  @ApiModelProperty({required: true})
  @IsNumber()
  user_id: number;

  @ApiModelProperty({required: true})
  @IsString()
  user_login: string;

  @ApiModelProperty({required: true})
  @IsString()
  user_password: string;

  @ApiModelProperty({required: true})
  @IsNumber()
  user_rate: number;
  
  
  public static from(dto: Partial<UserDTO>) {
    const user = new UserDTO();
    user.user_id = dto.user_id;
    user.user_login = dto.user_login;
    user.user_password = dto.user_password;
    user.user_rate = dto.user_rate;
    return user;
  }

  public static fromEntity(entity: UserEntity) {
    return this.from({
      user_id: entity.user_id,
      user_login: entity.user_login,
      user_password: entity.user_password,
      user_rate: entity.user_rate,
    })
  }

  public toEntity(user: UserEntity = null) {
    const it = new UserEntity();
    it.user_login = user.user_login;
    it.user_password = user.user_password;
    it.user_image = user.user_image;
    it.user_rate = user.user_rate;
    return it;
  }

}