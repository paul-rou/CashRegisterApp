const StorageEditSummary = () => {
  return (
    <div className="mt-3 bg-white shadow-md pt-3 pl-2 pb-3 pr-8">
      <h2>
        <strong>Récapitulatif des modifications</strong>
      </h2>
      <div className="ml-2">
        <p>
          Miel de Printemps 500g : <s>3 stock</s> -&gt; 4 stock{" "}
        </p>
        <p>
          Miel de Printemps 500g : <s>5€</s> -&gt; 6,5€
        </p>
        <p>Nouveau Produit : Miel de Tournesol</p>
        <p>
          <s>Miel du Gatinais</s>
        </p>
      </div>
    </div>
  );
};

export default StorageEditSummary;
