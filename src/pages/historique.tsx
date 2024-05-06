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

export default function History({ sell }: { sell: Sell[] }) {
  return (
    <>
      <h1>History page</h1>
      <div className="flex flex-col">
        {sell?.map((sell) => (
          <div key={sell.id}>
            <p>{sell.date}</p>
            <p>{sell.productName}</p>
            <p>{sell.price}</p>
            <p>{sell.numberSold}</p>
            <p>{sell.paymentMethod}</p>
            <p>{sell.marketLocation}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const sell = await prisma.sell.findMany();

  return {
    props: { sell },
  };
};
