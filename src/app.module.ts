import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'admin',
      password: 'root',
      database: 'su-salud-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
    BreedsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static async configure() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('API Documentation susalud back')
      .setDescription('API Documentation susalud back')
      .setVersion('1.0')
      .build();

    const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    return app;
  }
}
