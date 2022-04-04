import { LocalStrategy } from './strategies/local.strategy';
import { ConfigType } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from './../users/users.module';
import { JWTStrategy } from './strategies/jwt.strategy';
import config from '../config/env/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.auth.jwt.JWT_SECRET,
        };
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JWTStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
