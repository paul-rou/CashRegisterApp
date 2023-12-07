import { GetStaticProps } from "next/types";
import prisma from "../lib/prisma";
import ProductLayout from "@/components/ProductLayout/ProductLayout";

interface Product {
  id: number;
  photoLink: string;
  name: string;
  price: number;
  numberInStock: number;
}

export default function Cash({ products }: { products: Product[] }) {
  return (
    <div>
      <h1>Home directory</h1>
      <p>Here is the cash register board</p>
      <ProductLayout />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await prisma.product.findMany();
  return {
    props: { products },
  };
};
