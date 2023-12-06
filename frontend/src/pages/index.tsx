import { GetStaticProps } from "next/types";
import prisma from "../lib/prisma";

interface Product {
  id: number;
  photoLink: string;
  name: string;
  price: number;
  numberInStock: number;
}

const addProduct = async () => {
  const product = await prisma.product.create({
    data: {
      photoLink: "photolink",
      name: "Miel de printemps",
      price: 5,
      numberInStock: 20,
    },
  });
};

export default function Cash({ products }: { products: Product[] }) {
  return (
    <>
      <h1>Home directory</h1>
      <p>Here is the cash register board</p>
      <button onClick={() => console.log(products)}>
        Click here to add product
      </button>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await addProduct();
  const products = await prisma.product.findMany();
  return {
    props: { products },
  };
};
