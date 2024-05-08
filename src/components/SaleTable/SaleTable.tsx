import { Sell } from "@/pages/historique";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useMemo } from "react";
import DisplayTable from "./DisplayTable";
import TablePaginationController from "./TablePaginationController";

const SaleTable = ({ sells }: { sells: Sell[] }) => {
  const data = sells;

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
    getPaginationRowModel: getPaginationRowModel(), //load client-side pagination code
  });

  return (
    <div className="flex flex-col">
      <DisplayTable table={table} />
      <TablePaginationController table={table} />
    </div>
  );
};

export default SaleTable;
