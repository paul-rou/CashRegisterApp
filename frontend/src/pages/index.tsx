import { GetStaticProps } from "next/types";
import ProductLayout from "@/components/ProductLayout/ProductLayout";
import CashHeaderLayout from "@/components/CashHeaderLayout/CashHeaderLayout";
import { trpc } from "@/utils/trpc";
import prisma from "@/lib/prisma";

export interface Product {
  id: number;
  photoLink: string;
  name: string;
  price: number;
  numberInStock: number;
}

export default function Cash({ products }: { products: Product[] }) {
  console.log(products, "From backend");
  return (
    <div>
      <CashHeaderLayout />
      <ProductLayout isProduct />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await prisma.product.findMany();

  return {
    props: { products },
  };
};
