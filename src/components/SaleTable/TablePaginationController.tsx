import { Sell } from "@/pages/historique";
import { Table } from "@tanstack/react-table";
import {
  Flex,
  Tooltip,
  IconButton,
  Text,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const TablePaginationController = ({ table }: { table: Table<Sell> }) => {
  return (
    <Flex justifyContent="space-between" m={4} alignItems="center">
      <Flex>
        <Tooltip label="First Page">
          <IconButton
            onClick={() => table.firstPage()}
            isDisabled={!table.getCanPreviousPage()}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
            aria-label={""}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            onClick={() => table.previousPage()}
            isDisabled={!table.getCanPreviousPage()}
            icon={<ChevronLeftIcon h={6} w={6} />}
            aria-label={""}
          />
        </Tooltip>
      </Flex>

      <Flex alignItems="center">
        <Text flexShrink="0" mr={8}>
          Page{" "}
          <Text fontWeight="bold" as="span">
            {table.getState().pagination.pageIndex + 1}
          </Text>{" "}
          sur{" "}
          <Text fontWeight="bold" as="span">
            {table.getPageCount().toLocaleString()}
          </Text>
        </Text>
        <Text flexShrink="0">Aller à la page :</Text>
        <NumberInput
          ml={2}
          mr={8}
          w={28}
          min={1}
          max={table.getPageCount()}
          onChange={(value) => {
            const page = value ? Number(value) - 1 : 0;
            table.setPageIndex(page);
          }}
          defaultValue={table.getState().pagination.pageIndex + 1}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>

      <Flex>
        <Tooltip label="Next Page">
          <IconButton
            onClick={() => table.nextPage()}
            isDisabled={!table.getCanNextPage()}
            icon={<ChevronRightIcon h={6} w={6} />}
            aria-label={""}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            onClick={() => table.lastPage()}
            isDisabled={!table.getCanNextPage()}
            icon={<ArrowRightIcon h={3} w={3} />}
            ml={4}
            aria-label={""}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default TablePaginationController;
