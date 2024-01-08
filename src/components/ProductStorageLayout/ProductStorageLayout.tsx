import { Product } from "@/pages";
import ProductStorageCard from "../ProductStorageCard/ProductStorageCard";
import { FormEvent } from "react";

const ProductStorageLayout = ({
  products,
  deleteProduct,
  handleUpdate,
}: {
  products: Product[];
  deleteProduct: (id: number) => void;
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
              deleteProduct={deleteProduct}
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
