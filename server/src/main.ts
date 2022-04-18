import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as compression from 'compression';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  /* ********* MAIN APP *********** */
  const app = await NestFactory.create(AppModule);
  /* **************  ************** */
  /* ********* ENABLE CORS *********** */
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  /* **************  ************** */

  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());

  /* ********* SWAGGER DOCs **********/
  const config = new DocumentBuilder()
    .setTitle('Spotify Clone')
    .setDescription('Api clone wiht Nestjs, React, and GraphQL')
    .setVersion('1.0')
    .addBearerAuth({ in: 'header', type: 'http' })
    .addServer(process.env.APP_HOST)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });
  /* **************  ************** */

  /* ********* API VERSION **********/
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
    defaultVersion: '1',
  });
  /* **************  ************** */

  /* ********* MAIN APP *********** */
  await app.listen(process.env.APP_PORT || 3000);
  /* **************  ************** */
}
bootstrap();
