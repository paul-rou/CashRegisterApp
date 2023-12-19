import {z} from "zod";

export const productSchema = z.object({
    name: z.string(),
    price: z.number(),
    numberInStock: z.number(),
    photoLink: z.string(),
})

export type productSchema = z.infer<typeof productSchema>