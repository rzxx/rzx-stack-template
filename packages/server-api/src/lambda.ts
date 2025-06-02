import { buildApiApp } from './app';
import { awsLambdaFastify } from '@fastify/aws-lambda';

const fastifyApp = buildApiApp();

// Экспортируем хэндлер, который Netlify Functions будет вызывать
export const handler = awsLambdaFastify(fastifyApp);