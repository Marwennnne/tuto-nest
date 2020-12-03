/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionSuccessStatus:200
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  app.use(morgan('dev'));
  app.useGlobalPipes( new ValidationPipe({
    transform: true,
    whitelist: true
  }))
  await app.listen(3000);
}
bootstrap();
