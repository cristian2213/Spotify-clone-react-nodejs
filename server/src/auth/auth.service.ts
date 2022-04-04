import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload, TokenRes } from './dto/token.dto';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(signupInput: SignUpDto): Promise<User | never> {
    const { email } = signupInput;
    const user = await this.usersService.findUserByEmail(email);
    if (user) throw new NotFoundException(`User with ${email} already exists`);
    const newUser = await this.usersService.create(signupInput);
    return newUser;
  }

  async login(loginInput: LoginDto): Promise<TokenRes> {
    const { id, email } = loginInput;
    const payload: TokenPayload = {
      sub: id,
      email,
    };
    const expirationTime = (1000 * 60 * 60 * 24 * 5).toString(); // 5 days
    const token = this.generateJWT(payload, expirationTime);
    return { token, expirationTime };
  }

  generateJWT(payload: TokenPayload, expirationTime: string): string {
    const token = this.jwtService.sign(payload, {
      expiresIn: expirationTime,
    });
    return token;
  }

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) return null;
    const isEqual = await compare(pass, user.password);
    if (!isEqual) return null;
    return user;
  }
}
