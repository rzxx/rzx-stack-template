import { buildApiApp } from './app';

const fastify = buildApiApp();

fastify.listen({ port: 3000, host: '0.0.0.0' }).then(() => {
    console.log('🚀 Fastify dev-server running at http://localhost:3000');
});