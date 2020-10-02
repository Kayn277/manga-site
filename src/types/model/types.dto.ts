import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import {IsNumber, IsString} from 'class-validator';
import {TypesEntity} from './types.entity';

export class TypesDTO implements Readonly <TypesDTO> {
  @ApiModelProperty({required: true})
  @IsNumber()
  type_id: number;

  @ApiModelProperty({required: true})
  @IsString()
  type_name: string;

  
  
  public static from(dto: Partial<TypesDTO>) {
    const type = new TypesDTO();
    type.type_id = dto.type_id;
    type.type_name = dto.type_name;
    return type;
  }

  public static fromEntity(entity: TypesEntity) {
    return this.from({
      type_id: entity.type_id,
      type_name: entity.type_name,
    })
  }

  public toEntity(type: TypesEntity = null) {
    const it = new TypesEntity();
    it.type_id = type.type_id;
    it.type_name = type.type_name;
    return it;
  }

}