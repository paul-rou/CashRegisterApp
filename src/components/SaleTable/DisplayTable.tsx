import { Sell } from "@/pages/historique";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { flexRender, type Table } from "@tanstack/react-table";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const DisplayTable = ({ table }: { table: Table<Sell> }) => {
  return (
    <ChakraTable>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Th key={header.id}>
                <div
                  {...{
                    className: header.column.getCanSort()
                      ? "cursor-pointer select-none"
                      : "",
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: (
                      <ChevronRightIcon
                        h={5}
                        w={5}
                        className="mb-1 rotate-90"
                      />
                    ),
                    desc: (
                      <ChevronLeftIcon h={5} w={5} className="mb-1 rotate-90" />
                    ),
                  }[header.column.getIsSorted() as string] ?? null}
                </div>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default DisplayTable;
