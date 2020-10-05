import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from 'typeorm';

@Entity({ name: 'tags' })
export class TagsEntity {
  @PrimaryGeneratedColumn('increment')
  tag_id: number;

  @Column({ type: 'varchar', default: true, length: 50, nullable: false })
  tag_name: string;


}