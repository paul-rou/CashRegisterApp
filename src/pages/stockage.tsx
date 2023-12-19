import { GetStaticProps } from "next/types";
import prisma from "../lib/prisma";
import ProductLayout from "@/components/ProductLayout/ProductLayout";
import StorageHeaderLayout from "@/components/StorageHeaderLayout/StorageHeaderLayout";

export interface Product {
  id: number;
  photoLink: string;
  name: string;
  price: number;
  numberInStock: number;
}

export default function Storage({ products }: { products: Product[] }) {
  return (
    <div>
      <StorageHeaderLayout />
      <ProductLayout isProduct={false} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await prisma.product.findMany();
  return {
    props: { products },
  };
};
