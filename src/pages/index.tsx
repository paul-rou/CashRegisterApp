import { GetServerSideProps } from "next/types";
import ProductLayout from "@/components/ProductLayout/ProductLayout";
import CashHeaderLayout from "@/components/CashHeaderLayout/CashHeaderLayout";
import prisma from "@/lib/prisma";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  photoLink: string | null;
  name: string;
  price: number;
  numberInStock: number;
}

export interface ProductSaleRecap {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Cash({ products }: { products: Product[] }) {
  const [productsToSale, setProductsToSale] = useState<ProductSaleRecap[]>([]);

  const handleProductToSale = (productId: number, addOne: Boolean) => {
    const alreadyInCart = productsToSale.find(
      (product) => product.id === productId
    );

    if (alreadyInCart) {
      if (alreadyInCart.quantity === 1 && !addOne) {
        const newProductsToSale = productsToSale.filter(
          (product) => product.id !== productId
        );

        setProductsToSale(newProductsToSale);
        return;
      }

      const newProductsToSale = productsToSale.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: addOne ? product.quantity + 1 : product.quantity - 1,
          };
        }
        return product;
      });

      setProductsToSale(newProductsToSale);
    } else if (addOne) {
      const productToSale = products.find(
        (product) => product.id === productId
      );

      setProductsToSale([
        ...productsToSale,
        {
          id: productId,
          name: productToSale?.name ?? "",
          price: productToSale?.price ?? 0,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div>
      <CashHeaderLayout productsToSale={productsToSale} />
      <ProductLayout
        products={products}
        handleProductToSale={handleProductToSale}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await prisma.product.findMany();

  return {
    props: { products },
  };
};
