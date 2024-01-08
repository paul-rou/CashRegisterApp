import { GetServerSideProps } from "next/types";
import ProductLayout from "@/components/ProductLayout/ProductLayout";
import CashHeaderLayout from "@/components/CashHeaderLayout/CashHeaderLayout";
import prisma from "@/lib/prisma";

export interface Product {
  id: number;
  photoLink: string | null;
  name: string;
  price: number;
  numberInStock: number;
}

export default function Cash({ products }: { products: Product[] }) {
  return (
    <div>
      <CashHeaderLayout />
      <ProductLayout products={products} isProduct />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await prisma.product.findMany();

  return {
    props: { products },
  };
};
