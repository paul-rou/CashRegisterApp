import SaleSummary from "../SaleSummary/SaleSummary";
import SearchBar from "../SearchBar/SearchBar";

const CashHeaderLayout = () => {
  return (
    <div className="ml-4 mt-3 mb-5">
      <SearchBar />
      <div className="flex">
        <SaleSummary />
        <div className="flex flex-col justify-center text-center ml-5 gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 pt-2 pb-2 pl-4 pr-4 text-slate-200 shadow-md font-medium rounded-md">
            Confirmer la vente
          </button>
          <p>
            Total : <strong>81</strong>€
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashHeaderLayout;
