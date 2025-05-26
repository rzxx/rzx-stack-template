import Fastify from 'fastify';
import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { createContext } from './trpc';
import { appRouter } from './routers/index';

const fastify = Fastify({
    logger: true,
});

fastify.register(cors, {
    origin: 'http://localhost:5173',
    credentials: true,
});

fastify.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: {
        router: appRouter,
        createContext,
    },
});

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await fastify.listen({ port: parseInt(PORT as string), host: '0.0.0.0' });
        console.log(`🚀 Server listening on http://localhost:${PORT}`);
        console.log(`tRPC API available at http://localhost:${PORT}/trpc`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();