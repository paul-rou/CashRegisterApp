import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import prisma from "../../lib/prisma";
import { fullProductSchema, productSchema } from '@/schema/product.schema';

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
  }),
  insertProductAndGetProducts: publicProcedure.input(productSchema).mutation(async ({input})=>{
    const {name, price, numberInStock, photoLink } = input;
    const result = await prisma.product.create({
        data: {
            name: name,
            price: price,
            numberInStock: numberInStock,
            photoLink: photoLink,
        }
    })
    const products = await prisma.product.findMany();
    return {
      status: "201",
      message: "Product created successfully",
      result: result,
      products: products,
    }
  }),
  updateProductAndGetProducts: publicProcedure.input(fullProductSchema).mutation(async ({input})=>{
    const {id, name, price, numberInStock, photoLink } = input;
    const result = await prisma.product.update({
        where: {
          id: id
        },
        data: {
          name: name,
          price: price,
          numberInStock: numberInStock,
          photoLink: photoLink,
        }
    })
    const products = await prisma.product.findMany();
    return {
      status: "201",
      message: "Product updated successfully",
      result: result,
      products: products,
    }
  })
});

export type AppRouter = typeof appRouter;