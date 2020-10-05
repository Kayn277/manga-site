import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from 'typeorm';
import { TagsEntity } from '../tags/model/tags.entity';
import { GenresEntity } from '../genres/model/genres.entity';
import { TypesEntity } from '../types/model/types.entity';
import { AuthorsEntity } from '../authors/model/authors.entity';


@Entity({ name: 'manga' })
export class MangasEntity {
  @PrimaryGeneratedColumn('increment')
  manga_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  manga_name: string;

  @Column ({type: 'text', array: true })
  manga_title_images: string[];

  @Column ({type: 'text' })
  manga_description: string;

  @ManyToMany (type => TagsEntity, manga_tags => manga_tags.tag_id)
  manga_tags: number[];

  @ManyToMany (type => GenresEntity, manga_genres => manga_genres.genre_id)
  manga_genres: number[];

  @OneToMany (type => TypesEntity, manga_type => manga_type.type_id)
  manga_type: number;

  @Column ({type: 'integer'})
  manga_year: number;

  @ManyToMany (type => AuthorsEntity, manga_authors => manga_authors.author_id)
  manga_authors: number[];
}