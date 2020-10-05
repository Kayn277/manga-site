import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import {IsNumber, IsString} from 'class-validator';
import {TagsEntity} from './tags.entity';

export class TagsDTO implements Readonly <TagsDTO> {
  @ApiModelProperty({required: true})
  @IsNumber()
  tag_id: number;

  @ApiModelProperty({required: true})
  @IsString()
  tag_name: string;

  
  
  public static from(dto: Partial<TagsDTO>) {
    const tag = new TagsDTO();
    tag.tag_id = dto.tag_id;
    tag.tag_name = dto.tag_name;
    return tag;
  }

  public static fromEntity(entity: TagsEntity) {
    return this.from({
      tag_id: entity.tag_id,
      tag_name: entity.tag_name,
    })
  }

  public toEntity(tag: TagsEntity = null) {
    const it = new TagsEntity();
    it.tag_id = tag.tag_id;
    it.tag_name = tag.tag_name;
    return it;
  }

}