import ProductDialogForm from "../ProductDialogForm/ProductDialogForm";
import StorageEditSummary from "../StorageEditSummary/StorageEditSummary";
import { FormEvent } from "react";

const StorageHeaderLayout = ({
  handleAdd,
}: {
  handleAdd: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <div className="ml-4 mt-3 mb-5">
      <div className="flex">
        <StorageEditSummary />
        <div className="flex flex-col justify-center text-center m-5">
          <ProductDialogForm handleSubmit={handleAdd}>
            <button className="bg-green-500 hover:bg-green-600 pt-2 pb-2 pl-4 pr-4 text-slate-100 shadow-md font-medium rounded-md">
              Ajouter Nouveau Produit
            </button>
          </ProductDialogForm>
        </div>
      </div>
    </div>
  );
};

export default StorageHeaderLayout;
