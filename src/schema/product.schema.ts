import {z} from "zod";

export const productSchema = z.object({
    name: z.string(),
    price: z.number(),
    numberInStock: z.number(),
    photoLink: z.string(),
})

export const fullProductSchema = productSchema.extend({id: z.number()})

export type productSchema = z.infer<typeof productSchema>
export type fullProductSchema = z.infer<typeof fullProductSchema>