import { Sell } from "@/pages/historique";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import DisplayTable from "./DisplayTable";
import TablePaginationController from "./TablePaginationController";
import { getDisplayableTableFromSell } from "@/lib/fromDatabaseToDisplayTable";
import { trpc } from "@/utils/trpc";

const SaleTable = ({ sells }: { sells: Sell[] }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);
  const [sellsToDisplay, setSellsToDisplay] = useState<Sell[]>(sells);

  const data = useMemo(
    () => getDisplayableTableFromSell(sellsToDisplay),
    [sellsToDisplay]
  );

  const { refetch: asyncGetSellsByDate } = trpc.getSellsByDate.useQuery(
    { startDate: startDate, endDate: endDate },
    { enabled: false }
  );

  const columns: ColumnDef<Sell>[] = useMemo(
    () => [
      {
        accessorKey: "date",
        header: () => "Date",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "productName",
        header: () => "Produit",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "numberSold",
        header: () => "Quantité",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "price",
        header: () => "Prix",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "paymentMethod",
        header: () => "Moyen de paiement",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "marketLocation",
        header: () => "Marché",
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleDateFilter = async () => {
    if (startDate < endDate) {
      const result = await asyncGetSellsByDate();
      if (result.data) setSellsToDisplay(result.data.result);
    } else {
      console.error("start date must be before end date");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="my-4 ml-2 mr-auto p-1 flex items-center gap-3 border-2">
        <p className="font-semibold">Date de début</p>
        <input
          type="date"
          id="date"
          name="date"
          min="2024-01-01"
          max="2050-12-31"
          className="mr-6"
          defaultValue={currentDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
        <p className="font-semibold">Date de fin</p>
        <input
          type="date"
          id="date"
          name="date"
          min="2024-01-01"
          max="2050-12-31"
          defaultValue={currentDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 py-1 px-2 text-slate-200 shadow-md font-medium rounded-md"
          onClick={() => handleDateFilter()}
        >
          Filtrer
        </button>
      </div>
      <DisplayTable table={table} />
      <TablePaginationController table={table} />
    </div>
  );
};

export default SaleTable;
