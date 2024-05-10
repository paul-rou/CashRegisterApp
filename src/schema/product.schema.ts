import {z} from "zod";

export const productSchema = z.object({
    name: z.string(),
    price: z.number(),
    numberInStock: z.number(),
    photoLink: z.string(),
})

export const sellSchema = z.object({
    id: z.number(),
    date: z.string(),
    productName: z.string(),
    price: z.number(),
    numberSold: z.number(),
    paymentMethod: z.string(),
    marketLocation: z.string(),
})

export const dateFilterSchema = z.object({
    startDate : z.string(),
    endDate : z.string(),
})

export const fullProductSchema = productSchema.extend({id: z.number()})
export const arraySellSchema = z.array(sellSchema)

export type productSchema = z.infer<typeof productSchema>
export type fullProductSchema = z.infer<typeof fullProductSchema>

export type sellSchema = z.infer<typeof sellSchema>
export type arraySellSchema = z.infer<typeof arraySellSchema>

export type dateFilterSchema = z.infer<typeof dateFilterSchema>