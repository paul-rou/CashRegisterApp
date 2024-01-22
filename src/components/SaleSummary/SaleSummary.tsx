import { ProductSaleRecap } from "@/pages";

const SaleSummary = ({
  productsToSale,
}: {
  productsToSale: ProductSaleRecap[];
}) => {
  return (
    <div className="mt-3 bg-white shadow-md pt-3 pl-2 pb-3 pr-8">
      <h2>
        <strong>Récapitulatif</strong>
      </h2>
      <div className="ml-2">
        {productsToSale.map((product) => (
          <p key={product.id}>
            {product.name} x {product.quantity} :{" "}
            {product.price * product.quantity}€
          </p>
        ))}
      </div>
    </div>
  );
};

export default SaleSummary;
