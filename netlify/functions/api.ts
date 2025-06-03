import type { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { handler as trpcHandler } from '../../packages/server-api/dist/js/lambda';

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
    // You might need to adjust the event format slightly if @fastify/aws-lambda
    // expects something specific that Netlify's proxying doesn't perfectly match,
    // but usually it works out of the box.
    // Netlify uses AWS Lambda v2.0 payload format for HTTP functions.
    return trpcHandler(event, context);
};