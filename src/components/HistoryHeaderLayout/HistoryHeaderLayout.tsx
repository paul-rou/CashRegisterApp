import ReactHTMLTableToExcel from "react-html-table-to-excel";

const HistoryHeaderLayout = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <div className="flex items-center">
      <div className="w-[60%] mt-3 bg-white shadow-md pt-3 pl-2 pb-3 pr-8">
        <h2>
          <strong>Historique des ventes</strong>
        </h2>
        <p className="ml-2">
          Cette page recense toutes les ventes effectuées, avec le total des
          prix des produits vendus. Il est possible de filtrer les ventes par
          date.
        </p>
      </div>
      <div className="flex flex-col items-center ml-5 gap-3">
        <p>
          Total vendu : <strong>{totalPrice}</strong>€
        </p>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="w-46 h-10 bg-blue-600 hover:bg-blue-700 py-1 px-2 text-slate-200 shadow-md font-medium rounded-md"
          table="table-to-xls"
          filename="tableauDesVentes"
          sheet="tablexls"
          buttonText="Télécharger le tableau"
        />
      </div>
    </div>
  );
};

export default HistoryHeaderLayout;
