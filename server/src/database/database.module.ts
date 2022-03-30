import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config/env/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>): any => {
        const {
          POSTGRES_HOST,
          POSTGRES_PORT,
          POSTGRES_NAME,
          POSTGRES_USER,
          POSTGRES_PASSWORD,
        } = configService.databases.postgrest;
        console.log(
          POSTGRES_HOST,
          POSTGRES_PORT,
          POSTGRES_NAME,
          POSTGRES_USER,
          POSTGRES_PASSWORD,
        );
        return {
          type: 'postgres',
          host: POSTGRES_HOST,
          port: POSTGRES_PORT,
          username: POSTGRES_USER,
          password: POSTGRES_PASSWORD,
          database: POSTGRES_NAME,
          synchronize: false, // DON'T USE IT IN PRODUCTION MODE
          autoLoadEntities: true,
        };
      },
    }),
  ],

  exports: [TypeOrmModule],
})
export class DatabaseModule {}
