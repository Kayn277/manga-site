import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'genres' })
export class GenresEntity {
  @PrimaryGeneratedColumn('increment')
  genre_id: number;

  @Column({ type: 'varchar', default: true, length: 50, nullable: false })
  genre_name: string;

}