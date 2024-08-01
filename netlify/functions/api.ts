import { Handler, Context, Callback } from 'aws-lambda';
import { handler } from '../../dist/src/main';

export const api: Handler = (event: any, context: Context, callback: Callback) => {
  return handler(event, context, callback);
};
