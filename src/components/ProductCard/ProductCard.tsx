import Image from "next/image";
import honeyImage from "./miel.jpg";
import { ReactNode } from "react";

const ProductCard = ({ children }: { children: ReactNode }) => {
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
          <strong>Miel de Printemps 500g</strong>
        </p>
        <p>
          <strong>7</strong> en stock
        </p>
        <p>
          <strong>5</strong>€
        </p>
        {children}
      </div>
    </div>
  );
};

export default ProductCard;
