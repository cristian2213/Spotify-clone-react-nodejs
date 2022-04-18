import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import envs from './config/env/envs';
import env from './config/env/config';
import envValidation from './config/env/envValidation';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SearchModule } from './search/search.module';
import { DownloadAudioModule } from './download-audio/download-audio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envs[process.env.NODE_ENV] || envs['dev'],
      load: [env],
      isGlobal: true,
      validationSchema: envValidation,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'storage'),
      exclude: ['/api'],
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, 'client'),
    //   renderPath: '*',
    //   exclude: ['/api'],
    // }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    SearchModule,
    DownloadAudioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
