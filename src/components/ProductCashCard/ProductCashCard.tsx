import { Product } from "@/pages";
import ProductCard from "../ProductCard/ProductCard";

const ProductCashCard = ({
  product,
  addProduct,
  removeProduct,
}: {
  product: Product;
  addProduct: () => void;
  removeProduct: () => void;
}) => {
  return (
    <ProductCard product={product}>
      <div className="flex gap-1 mt-3 justify-center">
        <button
          className="pt-1 pb-1 pl-3 pr-3 rounded-2xl shadow-md bg-green-500 text-slate-200 hover:bg-green-600"
          onClick={addProduct}
        >
          Ajouter
        </button>
        <button
          className="pt-1 pb-1 pl-3 pr-3 rounded-2xl shadow-md bg-red-500 text-slate-200 hover:bg-red-600"
          onClick={removeProduct}
        >
          Retirer
        </button>
      </div>
    </ProductCard>
  );
};

export default ProductCashCard;
