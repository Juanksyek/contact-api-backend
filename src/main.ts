import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { Context, Handler, Callback } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init();
}

bootstrap();

let server: Handler;

export const handler: Handler = (event: any, context: Context, callback: Callback) => {
  if (!server) {
    server = serverlessExpress({ app: expressApp });
  }
  return server(event, context, callback);
};
