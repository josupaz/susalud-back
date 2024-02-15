import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  

  const config = new DocumentBuilder()
  .setTitle('API Documentation susalud back')
  .setDescription('API Documentation susalud back')
  .setVersion('1.0')
  .build();

const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

await app.listen(3000);

}
bootstrap();
