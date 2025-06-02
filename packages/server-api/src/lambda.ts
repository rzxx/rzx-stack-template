import { buildApiApp } from './app';
import { awsLambdaFastify } from '@fastify/aws-lambda';

const fastifyApp = buildApiApp();

export const handler = awsLambdaFastify(fastifyApp);