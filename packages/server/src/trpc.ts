import { initTRPC } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';


export function createContext({ req, res }: CreateFastifyContextOptions) {
    return { req, res };
}

const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;