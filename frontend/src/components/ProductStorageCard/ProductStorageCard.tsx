import ProductCard from "../ProductCard/ProductCard";

const ProductStorageCard = () => {
  return (
    <ProductCard>
      <div className="flex flex-col gap-1 justify-center">
        <button className="pt-1 pb-1 pl-3 pr-3 rounded-2xl shadow-md bg-green-500 text-slate-100 hover:bg-green-600">
          Modifier Produit
        </button>
        <button className="pt-1 pb-1 pl-3 pr-3 rounded-2xl shadow-md bg-red-500 text-slate-100 hover:bg-red-600">
          Supprimer Produit
        </button>
      </div>
    </ProductCard>
  );
};

export default ProductStorageCard;
