import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import {IsNumber, IsString} from 'class-validator';
import {AuthorsEntity} from './authors.entity';

export class AuthorsDTO implements Readonly <AuthorsDTO> {
  @ApiModelProperty({required: true})
  @IsNumber()
  author_id: number;

  @ApiModelProperty({required: true})
  @IsString()
  author_name: string;

  
  
  public static from(dto: Partial<AuthorsDTO>) {
    const author = new AuthorsDTO();
    author.author_id = dto.author_id;
    author.author_name = dto.author_name;
    return author;
  }

  public static fromEntity(entity: AuthorsEntity) {
    return this.from({
      author_id: entity.author_id,
      author_name: entity.author_name,
    })
  }

  public toEntity(author: AuthorsEntity = null) {
    const it = new AuthorsEntity();
    it.author_id = author.author_id;
    it.author_name = author.author_name;
    return it;
  }

}