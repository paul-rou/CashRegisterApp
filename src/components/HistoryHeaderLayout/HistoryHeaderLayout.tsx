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
      <p className="ml-5">
        Total vendu : <strong>{totalPrice}</strong>€
      </p>
    </div>
  );
};

export default HistoryHeaderLayout;
