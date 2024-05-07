import HistoryHeaderLayout from "@/components/HistoryHeaderLayout/HistoryHeaderLayout";
import SaleTable from "@/components/SaleTable/SaleTable";
import prisma from "@/lib/prisma";
import { GetStaticProps } from "next";

export interface Sell {
  id: number;
  date: string;
  productName: string;
  price: number;
  numberSold: number;
  paymentMethod: string;
  marketLocation: string;
}

export default function History({ sells }: { sells: Sell[] }) {
  return (
    <>
      <div className="ml-5 mt-2 flex flex-col gap-4">
        <HistoryHeaderLayout
          totalPrice={sells.reduce((acc, sell) => acc + sell.price, 0)}
        />
        <SaleTable sells={sells} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const sells = await prisma.sell.findMany();

  return {
    props: { sells },
  };
};
