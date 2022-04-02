import { LocalStrategy } from './strategies/local.strategy'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { UsersModule } from './../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JWTStrategy } from './strategies/jwt.strategy'
import config from '../config/env/config'
import { ConfigType } from '@nestjs/config'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.auth.jwt.JWT_SECRET,
        }
      },
    }),
  ],
  providers: [AuthResolver, AuthService, LocalStrategy, JWTStrategy],
})
export class AuthModule {}
