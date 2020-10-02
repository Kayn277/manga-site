import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'authors' })
export class AuthorsEntity {
  @PrimaryGeneratedColumn('increment')
  author_id: number;

  @Column({ type: 'varchar', default: true, length: 255, nullable: false })
  author_name: string;

}