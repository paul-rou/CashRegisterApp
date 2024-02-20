import { Product } from "@/pages";
import ProductCashCard from "../ProductCashCard/ProductCashCard";

const ProductLayout = ({
  products,
  handleProductToSale,
}: {
  products: Product[];
  handleProductToSale: (productId: number, addOne: Boolean) => void;
}) => {
  if (products) {
    return (
      <div className="flex flex-wrap ml-4 gap-3">
        <>
          {products.map((product) => (
            <ProductCashCard
              product={product}
              key={product.id}
              addProduct={() => {
                if (product.numberInStock)
                  handleProductToSale(product.id, true);
              }}
              removeProduct={() => handleProductToSale(product.id, false)}
            />
          ))}
        </>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default ProductLayout;
