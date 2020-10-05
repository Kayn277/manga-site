import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'types' })
export class TypesEntity {
  @PrimaryGeneratedColumn('increment')
  type_id: number;

  @Column({ type: 'varchar', default: true, length: 50, nullable: false })
  type_name: string;

}