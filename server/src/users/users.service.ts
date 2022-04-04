import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bycrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDataDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userReposity: Repository<User>) {}

  async create(createUserInput: UserDataDto): Promise<User | never> {
    const { password } = createUserInput;
    const userIntance = this.userReposity.create(createUserInput);
    userIntance.password = await bycrypt.hash(password, 10);
    return await this.userReposity.save(userIntance);
  }

  async findOne(id?: number): Promise<User | never> {
    const user = await this.userReposity.findOne(id);
    if (!user) throw new NotFoundException(`User #${id} doesn't exist`);
    return user;
  }

  async remove(id: number): Promise<User | never> {
    const user = await this.userReposity.findOne(id);
    if (!user) throw new NotFoundException(`User #${id} doesn't exist`);
    await this.userReposity.delete(user.id);
    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.userReposity.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}
