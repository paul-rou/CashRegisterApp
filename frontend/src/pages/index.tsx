import { GetStaticProps } from "next/types";
import prisma from "../lib/prisma";
import ProductLayout from "@/components/ProductLayout/ProductLayout";
import CashHeaderLayout from "@/components/CashHeaderLayout/CashHeaderLayout";

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
      <CashHeaderLayout />
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
