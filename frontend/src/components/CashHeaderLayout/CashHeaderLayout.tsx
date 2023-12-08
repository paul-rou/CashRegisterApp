import SaleSummary from "../SaleSummary/SaleSummary";
import SearchBar from "../SearchBar/SearchBar";

const CashHeaderLayout = () => {
  return (
    <div className="ml-4 mt-3 mb-5">
      <SearchBar />
      <SaleSummary />
    </div>
  );
};

export default CashHeaderLayout;
