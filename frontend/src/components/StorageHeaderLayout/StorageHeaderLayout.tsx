import StorageEditSummary from "../StorageEditSummary/StorageEditSummary";

const StorageHeaderLayout = () => {
  return (
    <div className="ml-4 mt-3 mb-5">
      <div className="flex">
        <StorageEditSummary />
        <div className="flex flex-col justify-center text-center ml-5 gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 pt-2 pb-2 pl-4 pr-4 text-slate-200 shadow-md font-medium rounded-md">
            Confirmer Modifications
          </button>
          <button className="bg-green-500 hover:bg-green-600 pt-2 pb-2 pl-4 pr-4 text-slate-200 shadow-md font-medium rounded-md">
            Ajouter Nouveau Produit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StorageHeaderLayout;
