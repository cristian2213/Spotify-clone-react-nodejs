import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User as IUser } from '../../graphql.schema'

@Entity({ name: 'users' })
class User implements IUser {
  @PrimaryGeneratedColumn({ type: 'smallint', unsigned: true })
  id: number

  @Column({
    type: 'varchar',
    name: 'name',
    length: 150,
    nullable: false,
  })
  name: string

  @Column({
    type: 'varchar',
    name: 'email',
    length: 150,
    nullable: false,
  })
  email: string

  @Column({
    type: 'varchar',
    length: 255,
    name: 'password',
    nullable: false,
  })
  password: string

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date
}

export default User
