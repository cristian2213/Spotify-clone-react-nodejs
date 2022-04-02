import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bycrypt from 'bcrypt'
import { CreateUserInput } from 'src/graphql.schema'
import User from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userReposity: Repository<User>) {}

  async create(createUserInput: CreateUserInput): Promise<User | never> {
    const { password } = createUserInput
    const userIntance = this.userReposity.create(createUserInput)
    userIntance.password = await bycrypt.hash(password, 10)
    return await this.userReposity.save(userIntance)
  }

  async findOne(id?: number): Promise<User | never> {
    const user = await this.userReposity.findOne(id)
    if (!user) throw new NotFoundException(`User #${id} doesn't exist`)
    return user
  }

  async remove(id: number): Promise<User | never | Error> {
    const user = await this.userReposity.findOne(id)
    if (!user) throw new NotFoundException(`User #${id} doesn't exist`)
    await this.userReposity.delete(user.id)
    return user
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.userReposity.findOne({
      where: {
        email,
      },
    })
    return user
  }
}
