import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import prisma from "../../lib/prisma";
import { arraySellSchema, fullProductSchema, productSchema } from '@/schema/product.schema';

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
  deleteProductAndGetProducts: publicProcedure.input(z.number()).mutation(async ({input})=>{
    const result = await prisma.product.delete({
        where: {
            id: Number(input)
        }
    })
    const products = await prisma.product.findMany();
    return {
      status: "201",
      message: "Product deleted successfully",
      result: result,
      products: products,
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
  }),
  addMultipleSellsAndGetProducts: publicProcedure.input(arraySellSchema).mutation(async ({input})=>{
    const sells = input;
    const results = await Promise.all(sells.map(sell => prisma.sell.create({ data: {
      date: sell.date,
      productName: sell.productName,
      price: sell.price,
      numberSold: sell.numberSold,
      paymentMethod: sell.paymentMethod,
      marketLocation: sell.marketLocation,
    } })));
    for (const sell of sells) {
      await prisma.product.update({
        where: {
          id: sell.id
        },
        data: {
            numberInStock: {
              decrement: sell.numberSold,
            } 
        }
      });
    }
    const products = await prisma.product.findMany();
    return {
      status: "201",
      message: "Sells added successfully",
      result: results,
      products: products,
    }
  })
});

export type AppRouter = typeof appRouter;