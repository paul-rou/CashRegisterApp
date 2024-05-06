import { GetStaticProps } from "next/types";
import ProductLayout from "@/components/ProductLayout/ProductLayout";
import CashHeaderLayout from "@/components/CashHeaderLayout/CashHeaderLayout";
import prisma from "@/lib/prisma";
import { FormEvent, useState } from "react";
import { trpc } from "@/utils/trpc";

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
  const [productsToShow, setProductsToShow] = useState<Product[]>(products);

  const { mutateAsync: asyncAddSellsAndGetProducts } =
    trpc.addMultipleSellsAndGetProducts.useMutation();

  const handleProductToSale = (productId: number, addOne: Boolean) => {
    const alreadyInCart = productsToSale.find(
      (product) => product.id === productId
    );

    // Update the numberInStock of the product
    const newProductsToShow = productsToShow.map((product: Product) => {
      if (product.id === productId) {
        const addOrRemove = addOne ? 1 : -1;
        if (
          product.numberInStock - addOrRemove < 0 ||
          (!alreadyInCart && !addOne)
        )
          return product;
        product.numberInStock = product.numberInStock - addOrRemove;
      }
      return product;
    });

    setProductsToShow(newProductsToShow);

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

  const postSale = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!productsToSale) return;
    try {
      const sales = productsToSale.map((product) => {
        return {
          id: product.id,
          price: product.price,
          date: e.currentTarget.date.value,
          productName: product.name,
          numberSold: product.quantity,
          paymentMethod: e.currentTarget.paymentMethod.value,
          marketLocation: e.currentTarget.marketLocation.value,
        };
      });
      const result = await asyncAddSellsAndGetProducts(sales).then((res) => {
        if (res.products) setProductsToShow(res.products);
        setProductsToSale([]);
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <CashHeaderLayout productsToSale={productsToSale} postSale={postSale} />
      <ProductLayout
        products={productsToShow}
        handleProductToSale={handleProductToSale}
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
