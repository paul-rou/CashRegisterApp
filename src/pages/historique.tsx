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
      <div className="ml-3 mt-2 flex flex-col">
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
