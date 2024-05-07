import { Sell } from "@/pages/historique";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const SaleTable = ({ sells }: { sells: Sell[] }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Produit</Th>
          <Th>Quantité</Th>
          <Th>Prix</Th>
          <Th>Moyen de paiement</Th>
          <Th>Marché</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sells?.map((sell) => (
          <Tr key={sell.id}>
            <Td>{sell.date}</Td>
            <Td>{sell.productName}</Td>
            <Td>{sell.numberSold}</Td>
            <Td>{sell.price}</Td>
            <Td>{sell.paymentMethod}</Td>
            <Td>{sell.marketLocation}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SaleTable;
