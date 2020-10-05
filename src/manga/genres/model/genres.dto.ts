import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import {IsNumber, IsString} from 'class-validator';
import {GenresEntity} from './genres.entity';

export class GenresDTO implements Readonly <GenresDTO> {
  @ApiModelProperty({required: true})
  @IsNumber()
  genre_id: number;

  @ApiModelProperty({required: true})
  @IsString()
  genre_name: string;

  
  
  public static from(dto: Partial<GenresDTO>) {
    const tag = new GenresDTO();
    tag.genre_id = dto.genre_id;
    tag.genre_name = dto.genre_name;
    return tag;
  }

  public static fromEntity(entity: GenresEntity) {
    return this.from({
      genre_id: entity.genre_id,
      genre_name: entity.genre_name,
    })
  }

  public toEntity(tag: GenresEntity = null) {
    const it = new GenresEntity();
    it.genre_id = tag.genre_id;
    it.genre_name = tag.genre_name;
    return it;
  }

}