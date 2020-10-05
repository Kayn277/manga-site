import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import {IsNumber, IsString, IsArray, ValidateNested, ArrayMinSize} from 'class-validator';
import { Type } from 'class-transformer';
import {MangasEntity} from './mangas.entity';
import { TagsEntity } from '../tags/model/tags.entity';
import { GenresEntity } from '../genres/model/genres.entity';
import { TypesEntity } from '../types/model/types.entity';
import { AuthorsEntity } from '../authors/model/authors.entity';

export class MangasDTO implements Readonly <MangasDTO> {
  @ApiModelProperty({required: true})
  @IsNumber()
  manga_id: number;

  @ApiModelProperty({required: true})
  @IsString()
  manga_name: string;

  @ApiModelProperty({required: false})
  @IsArray()
  @ArrayMinSize(0)
  @ValidateNested({each: true})
  @Type(() => String)
  manga_title_images: string[];

  @ApiModelProperty({required: true})
  @IsString()
  manga_description: string;

  @ApiModelProperty({required: true})
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({each: true})
  @Type(() => TagsEntity)
  manga_tags: TagsEntity[];

  @ApiModelProperty({required: true})
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({each: true})
  @Type(() => GenresEntity)
  manga_genres: GenresEntity[];

  @ApiModelProperty({required: true})
  @IsNumber()
  manga_type: TypesEntity;

  @ApiModelProperty({required: true})
  @IsNumber()
  manga_year: number;

  @ApiModelProperty({required: true})
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({each: true})
  @Type(() => Number)
  manga_authors: AuthorsEntity[];

  public static from(dto: Partial<MangasDTO>) {
    const manga = new MangasDTO();
    manga.manga_id = dto.manga_id;
    manga.manga_name = dto.manga_name;
    manga.manga_title_images = dto.manga_title_images;
    manga.manga_description = dto.manga_description;
    manga.manga_tags = dto.manga_tags;
    manga.manga_genres = dto.manga_genres;
    manga.manga_type = dto.manga_type;
    manga.manga_year = dto.manga_year;
    manga.manga_authors = dto.manga_authors;
    return manga;
  }

  public static fromEntity(entity: MangasEntity) {
    return this.from({
      manga_id : entity.manga_id,
      manga_name : entity.manga_name,
      manga_title_images : entity.manga_title_images,
      manga_description : entity.manga_description,
      manga_tags : entity.manga_tags,
      manga_genres : entity.manga_genres,
      manga_type : entity.manga_type,
      manga_year : entity.manga_year,
      manga_authors : entity.manga_authors
    })
  }

  public toEntity(manga: MangasEntity = null) {
    const it = new MangasEntity();
    it.manga_id = manga.manga_id;
    it.manga_name = manga.manga_name;
    it.manga_title_images = manga.manga_title_images;
    it.manga_description = manga.manga_description;
    it.manga_tags = manga.manga_tags;
    it.manga_genres = manga.manga_genres;
    it.manga_type = manga.manga_type;
    it.manga_year = manga.manga_year;
    it.manga_authors = manga.manga_authors;
    return it;
  }

}