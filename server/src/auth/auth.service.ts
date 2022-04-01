import { Injectable, NotFoundException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { compare } from 'bcrypt'
import { UserInputError } from 'apollo-server-express'
import { User, LoginResponse } from '../graphql.schema'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findUserByEmail(email)

    if (!user) throw new NotFoundException(`User with ${email} doesn't exist`)

    const isEqual = await compare(password, user.password)
    if (!isEqual) throw new UserInputError('Password do not match')

    return user
  }

  async generateJWT(loginInput: any): Promise<LoginResponse> {
    const {} = loginInput
    const payload = {
      sub: '',
      email: '',
    }

    const date = new Date()
    const currentTime = date.getTime()
    const expirationTime = currentTime + 1000 * 60 * 60 * 24 * 5 // 5 days

    const token = this.jwtService.sign(payload, {
      expiresIn: expirationTime,
    })

    return { token, expirationTime: expirationTime + '' }
  }
}
