import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import prisma from "../../lib/prisma";
import { productSchema } from '@/schema/product.schema';

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
  }),
  insertProduct: publicProcedure.input(productSchema).mutation(async ({input})=>{
      const {name, price, numberInStock, photoLink } = input;
      const result = await prisma.product.create({
          data: {
              name: name,
              price: price,
              numberInStock: numberInStock,
              photoLink: photoLink,
          }
      })
      return {
        status: "201",
        message: "Product created successfully",
        result: result,
      }
  })
});

export type AppRouter = typeof appRouter;