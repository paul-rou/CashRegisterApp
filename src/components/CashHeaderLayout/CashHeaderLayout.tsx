import { ProductSaleRecap } from "@/pages";
import SaleSummary from "../SaleSummary/SaleSummary";
import SaleDialogForm from "../SaleDialogForm/SaleDialogForm";
import { FormEvent } from "react";

const CashHeaderLayout = ({
  productsToSale,
  postSale,
}: {
  productsToSale: ProductSaleRecap[];
  postSale: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  const totalPrice = productsToSale.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="ml-4 mt-3 mb-5">
      <div className="flex">
        <SaleSummary productsToSale={productsToSale} />
        <div className="flex flex-col justify-center text-center ml-5 gap-3">
          <SaleDialogForm
            productsToSale={productsToSale}
            handleSubmit={postSale}
          >
            <button className="bg-blue-600 hover:bg-blue-700 mt-3 pt-2 pb-2 pl-4 pr-4 text-slate-200 shadow-md font-medium rounded-md">
              Confirmer la vente
            </button>
          </SaleDialogForm>
          <p>
            Total : <strong>{totalPrice}</strong>€
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashHeaderLayout;
