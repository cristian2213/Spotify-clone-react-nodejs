import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  /* ********* MAIN APP *********** */
  const app = await NestFactory.create(AppModule);
  /* **************  ************** */

  /* ********* SWAGGER DOCs **********/
  const config = new DocumentBuilder()
    .setTitle('Spotify Clone')
    .setDescription('Api clone wiht Nestjs, React, and GraphQL')
    .setVersion('1.0')
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
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

  /* ********* ENABLE CORS *********** */
  app.enableCors();
  /* **************  ************** */
}
bootstrap();
