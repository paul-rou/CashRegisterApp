import Image from "next/image";
import honeyImage from "./miel.jpg";
import { ReactNode } from "react";
import { Product } from "@/pages";

const ProductCard = ({
  product,
  children,
}: {
  product: Product;
  children: ReactNode;
}) => {
  return (
    <div className="flex h-[200px] w-[320px] p-3 rounded-xl shadow-md bg-white">
      <div className="mt-auto mb-auto">
        <Image
          src={honeyImage}
          width={120}
          height={120}
          alt="Picture of honey"
        />
      </div>
      <div className="ml-3 mt-auto mb-auto text-center">
        <p>
          <strong>{product.name}</strong>
        </p>
        <p>
          <strong>{product.numberInStock}</strong> en stock
        </p>
        <p>
          <strong>{product.price}</strong>€
        </p>
        {children}
      </div>
    </div>
  );
};

export default ProductCard;
