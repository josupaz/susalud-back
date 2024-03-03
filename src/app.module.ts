import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { DoctorModule } from './doctor/doctor.module';
import { PacienteModule } from './paciente/paciente.module';
import { TurnoModule } from './turno/turno.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule,
    AuthModule,
    DoctorModule,
    PacienteModule,
    TurnoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static async configure() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('API susalud back')
      .setDescription('API Documentation susalud back')
      .setVersion('1.0')
      .build();

    const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    return app;
  }
}
