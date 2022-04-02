import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { join } from 'path'

import envs from './config/env/envs'
import env from './config/env/config'
import envValidation from './config/env/envValidation'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/database.module'
// import { AuthModule2 } from './auth-mock/auth.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envs[process.env.NODE_ENV] || envs['dev'],
      load: [env],
      isGlobal: true,
      validationSchema: envValidation,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      // TO WORK WITH SANBOX
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // PATH TO MY SCHEMAS
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      debug: true,
      cors: true,

      // GENERATE ALL TYPE FROM MY "GRAPHQL" SCHEMAS - IMPORTANT! THIS WON'T UPDATE THE TYPE IN THE FILE graphql.schema.ts, TO DO IT, PLEASE RUN "npm run gpql:watch"
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.schema.ts'),
      //   outputAs: 'class',
      // },
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
