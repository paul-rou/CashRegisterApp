import { Product } from "@/pages";
import ProductCard from "../ProductCard/ProductCard";
import { FormEvent } from "react";
import ProductDialogForm from "../ProductDialogForm/ProductDialogForm";
import DeleteDialog from "../DeleteDialog/DeleteDialog";

const ProductStorageCard = ({
  product,
  deleteProduct,
  handleUpdateProductId,
}: {
  product: Product;
  deleteProduct: (id: number) => void;
  handleUpdateProductId: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <ProductCard product={product}>
      <div className="flex flex-col gap-1 justify-center">
        <ProductDialogForm
          handleSubmit={handleUpdateProductId}
          product={product}
        >
          <button className="pt-1 pb-1 pl-3 pr-3 rounded-2xl shadow-md bg-green-500 text-slate-100 hover:bg-green-600">
            Modifier Produit
          </button>
        </ProductDialogForm>
        <DeleteDialog deleteProduct={() => deleteProduct(product.id)}>
          <button className="pt-1 pb-1 pl-3 pr-3 rounded-2xl shadow-md bg-red-500 text-slate-100 hover:bg-red-600">
            Supprimer Produit
          </button>
        </DeleteDialog>
      </div>
    </ProductCard>
  );
};

export default ProductStorageCard;
