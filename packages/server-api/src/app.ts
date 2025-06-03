import Fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './router/index.js';
import { createContext } from './trpc.js';
import fastifyCors from '@fastify/cors';

export function buildApiApp() {
    const fastify = Fastify({
        logger: true,
    });

    let allowedOrigin: string | string[] | RegExp | undefined = undefined;

    if (process.env.NODE_ENV === 'development') {
        allowedOrigin = '*';
    } else if (process.env.URL) {
        allowedOrigin = process.env.URL;
    }

    fastify.register(fastifyCors, {
        origin: allowedOrigin || false,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
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