import { GetStaticProps } from "next/types";
import prisma from "../lib/prisma";
import ProductLayout from "@/components/ProductLayout/ProductLayout";
import StorageHeaderLayout from "@/components/StorageHeaderLayout/StorageHeaderLayout";
import { useState } from "react";
import { Product } from ".";

export default function Storage({ products }: { products: Product[] }) {
  const [newProducts, setNewProducts] = useState<Product[]>(products);
  return (
    <div>
      <StorageHeaderLayout setNewProducts={setNewProducts} />
      <ProductLayout products={newProducts} isProduct={false} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await prisma.product.findMany();
  return {
    props: { products },
  };
};
