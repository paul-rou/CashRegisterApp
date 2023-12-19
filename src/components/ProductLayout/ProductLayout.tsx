import { Product } from "@/pages";
import ProductCashCard from "../ProductCashCard/ProductCashCard";
import ProductStorageCard from "../ProductStorageCard/ProductStorageCard";

const ProductLayout = ({
  products,
  isProduct,
}: {
  products: Product[];
  isProduct: boolean;
}) => {
  console.log(products, "these are the products");
  if (products) {
    return (
      <div className="flex flex-wrap ml-4 gap-3">
        {isProduct ? (
          <>
            {products.map((product) => (
              <ProductCashCard product={product} key={product.id} />
            ))}
          </>
        ) : (
          <>
            <>
              {products.map((product) => (
                <ProductStorageCard product={product} key={product.id} />
              ))}
            </>
          </>
        )}
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default ProductLayout;
