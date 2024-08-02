import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const corsOptions = {
  origin: '*',
  methods: 'POST, GET, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
