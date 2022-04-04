import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import envs from './config/env/envs';
import env from './config/env/config';
import envValidation from './config/env/envValidation';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AudioModule } from './audio/audio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envs[process.env.NODE_ENV] || envs['dev'],
      load: [env],
      isGlobal: true,
      validationSchema: envValidation,
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    AudioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
