import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import prisma from "../../lib/prisma";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  getProducts: publicProcedure.query((opts)=>{
      console.log("getProducts method called")
      return prisma.product.findMany();
  })
});

export type AppRouter = typeof appRouter;