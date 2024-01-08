import { Product } from "@/pages";
import ProductCashCard from "../ProductCashCard/ProductCashCard";

const ProductLayout = ({ products }: { products: Product[] }) => {
  if (products) {
    return (
      <div className="flex flex-wrap ml-4 gap-3">
        <>
          {products.map((product) => (
            <ProductCashCard product={product} key={product.id} />
          ))}
        </>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default ProductLayout;
