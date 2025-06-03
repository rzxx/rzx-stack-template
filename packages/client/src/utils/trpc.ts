import { QueryClient } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import type { AppRouter } from '../../../server-api/src/router';

const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        // browser should use relative path
        return '';
    }
    if (process.env.VERCEL_URL) { // Vercel
        return `https://${process.env.VERCEL_URL}`;
    }
    if (process.env.URL) { // Netlify build
        return process.env.URL;
    }
    return `http://localhost:${process.env.PORT ?? 3000}`; // Fallback for other environments
};

export const queryClient = new QueryClient();

const trpcClient = createTRPCClient<AppRouter>({
    links: [httpBatchLink({ url: `${getBaseUrl()}/trpc`, })],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
    client: trpcClient,
    queryClient,
});