import { ProductSaleRecap } from "@/pages";
import SaleSummary from "../SaleSummary/SaleSummary";
import SearchBar from "../SearchBar/SearchBar";

const CashHeaderLayout = ({
  productsToSale,
}: {
  productsToSale: ProductSaleRecap[];
}) => {
  const totalPrice = productsToSale.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="ml-4 mt-3 mb-5">
      <SearchBar />
      <div className="flex">
        <SaleSummary productsToSale={productsToSale} />
        <div className="flex flex-col justify-center text-center ml-5 gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 pt-2 pb-2 pl-4 pr-4 text-slate-200 shadow-md font-medium rounded-md">
            Confirmer la vente
          </button>
          <p>
            Total : <strong>{totalPrice}</strong>€
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashHeaderLayout;
