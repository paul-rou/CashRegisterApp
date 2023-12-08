import ProductCashCard from "../ProductCashCard/ProductCashCard";
import ProductStorageCard from "../ProductStorageCard/ProductStorageCard";

const ProductLayout = ({ isProduct }: { isProduct: boolean }) => {
  return (
    <div className="flex flex-wrap ml-4 gap-3">
      {isProduct ? (
        <>
          <ProductCashCard />
          <ProductCashCard />
          <ProductCashCard />
          <ProductCashCard />
          <ProductCashCard />
          <ProductCashCard />
          <ProductCashCard />
          <ProductCashCard />
          <ProductCashCard />
          <ProductCashCard />
        </>
      ) : (
        <>
          <ProductStorageCard />
          <ProductStorageCard />
          <ProductStorageCard />
          <ProductStorageCard />
          <ProductStorageCard />
          <ProductStorageCard />
          <ProductStorageCard />
          <ProductStorageCard />
          <ProductStorageCard />
          <ProductStorageCard />
        </>
      )}
    </div>
  );
};

export default ProductLayout;
