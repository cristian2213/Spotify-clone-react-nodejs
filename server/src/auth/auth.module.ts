import { LocalStrategy } from './strategies/local.strategy'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { UsersModule } from './../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JWTStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'my-secret-key',
    }),
  ],
  providers: [AuthResolver, AuthService, LocalStrategy, JWTStrategy],
})
export class AuthModule {}
