import { buildApiApp } from './app.js';
import { awsLambdaFastify } from '@fastify/aws-lambda';

const fastifyApp = buildApiApp();

export const handler = awsLambdaFastify(fastifyApp);