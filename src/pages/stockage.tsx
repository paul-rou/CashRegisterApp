import { GetStaticProps } from "next/types";
import prisma from "../lib/prisma";
import StorageHeaderLayout from "@/components/StorageHeaderLayout/StorageHeaderLayout";
import { FormEvent, useState } from "react";
import { Product } from ".";
import { trpc } from "@/utils/trpc";
import ProductStorageLayout from "@/components/ProductStorageLayout/ProductStorageLayout";

export default function Storage({ products }: { products: Product[] }) {
  const [newProducts, setNewProducts] = useState<Product[]>(products);

  const { mutateAsync: asyncInsertProductAndGetProducts } =
    trpc.insertProductAndGetProducts.useMutation();
  const { mutateAsync: asyncUpdateProductAndGetProducts } =
    trpc.updateProductAndGetProducts.useMutation();
  const { mutateAsync: asyncDeleteProductAndGetProducts } =
    trpc.deleteProductAndGetProducts.useMutation();

  const handleAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await asyncInsertProductAndGetProducts({
        name: e.currentTarget.name.value,
        price: Number(e.currentTarget.price.value),
        numberInStock: Number(e.currentTarget.numberInStock.value),
        photoLink: e.currentTarget.photo.value,
      }).then((res) => {
        if (res.products) setNewProducts(res.products);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e: FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    try {
      const result = await asyncUpdateProductAndGetProducts({
        id: id,
        name: e.currentTarget.name.value,
        price: Number(e.currentTarget.price.value),
        numberInStock: Number(e.currentTarget.numberInStock.value),
        photoLink: e.currentTarget.photo.value,
      }).then((res) => {
        if (res.products) setNewProducts(res.products);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      console.log(id, "from front deleteProduct");
      const result = await asyncDeleteProductAndGetProducts(id).then((res) => {
        if (res.products) setNewProducts(res.products);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <StorageHeaderLayout handleAdd={handleAdd} />
      <ProductStorageLayout
        products={newProducts}
        deleteProduct={deleteProduct}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await prisma.product.findMany();
  return {
    props: { products },
  };
};
