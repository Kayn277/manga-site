import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column({ type: 'varchar', default: true, length: 50, nullable: false })
  user_login: string;

  @Column({ type: 'varchar', default: true, length: 50, nullable: false })
  user_password: string;

  @Column({ type: 'text', default: true, nullable: true })
  user_image: string;

  @Column({ type: 'integer', default: 0, nullable: false })
  user_rate: number;
}