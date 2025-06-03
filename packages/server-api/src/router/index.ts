import { publicProcedure, router } from '../trpc.js';

export const appRouter = router({
    ping: publicProcedure
        .query(async () => {
            return {
                status: 'success',
                message: 'pong',
                timestamp: new Date().toISOString(),
            };
        })
});

export type AppRouter = typeof appRouter;