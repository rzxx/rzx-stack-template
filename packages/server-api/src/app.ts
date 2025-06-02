import Fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './router';
import { createContext } from './trpc';
import fastifyCors from '@fastify/cors';

export function buildApiApp() {
    const fastify = Fastify({
        logger: true,
    });

    fastify.register(fastifyCors, {
        origin: process.env.CORS_ORIGIN || '*',
        credentials: true,
    });

    fastify.register(fastifyTRPCPlugin, {
        prefix: '/trpc',
        trpcOptions: {
            router: appRouter,
            createContext,
        },
    });

    return fastify;
}