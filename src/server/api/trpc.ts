/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE.
 */
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';

/**
 * CONTEXT
 *
 * @see https://trpc.io/docs/server/context
 */
export async function createTRPCContext(opts: { headers: Headers }) {
  return {
    ...opts,
  };
}

/**
 * INITIALIZATION
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * Create a server-side caller.
 *
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const { createCallerFactory } = t;

/**
 * ROUTER & PROCEDURE
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Public (unauthenticated) procedure
 */
export const publicProcedure = t.procedure;
