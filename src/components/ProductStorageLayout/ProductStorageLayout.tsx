import { Product } from "@/pages";
import ProductStorageCard from "../ProductStorageCard/ProductStorageCard";
import { FormEvent } from "react";

const ProductStorageLayout = ({
  products,
  handleUpdate,
}: {
  products: Product[];
  handleUpdate: (e: FormEvent<HTMLFormElement>, id: number) => void;
}) => {
  if (products) {
    return (
      <div className="flex flex-wrap ml-4 gap-3">
        <>
          {products.map((product) => (
            <ProductStorageCard
              product={product}
              key={product.id}
              handleUpdateProductId={(e: FormEvent<HTMLFormElement>) =>
                handleUpdate(e, product.id)
              }
            />
          ))}
        </>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default ProductStorageLayout;
