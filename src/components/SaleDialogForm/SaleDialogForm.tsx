import { ProductSaleRecap } from "@/pages";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FormEvent } from "react";
import SaleSummary from "../SaleSummary/SaleSummary";

const SaleDialogForm = ({
  productsToSale,
  handleSubmit,
  children,
}: {
  productsToSale: ProductSaleRecap[];
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter une vente</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Remplir le formulaire suivant pour ajouter une vente</p>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
                onClose();
              }}
              className="flex flex-col mt-4 gap-4"
            >
              <div className="flex justify-between">
                <label htmlFor="paymentMethod" className="font-semibold">
                  Méthode de paiement
                </label>
                <select id="paymentMethod" name="paymentMethod" className="p-2">
                  <option value="cash">Monnaie</option>
                  <option value="card">Carte</option>
                  <option value="cheque">Chèque</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              <div className="flex justify-between">
                <label htmlFor="marketLocation" className="font-semibold">
                  Marché ou Lieu de vente
                </label>
                <select
                  id="marketLocation"
                  name="marketLocation"
                  className="p-2"
                >
                  <option value="other">Autre</option>
                  <option value="etampes">Etampes</option>
                  <option value="corbreuse">Corbreuse</option>
                </select>
              </div>
              <div className="flex justify-between">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  defaultValue={currentDate}
                  min="2024-01-01"
                  max="2050-12-31"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="client">Client</label>
                <input
                  type="text"
                  id="client"
                  name="client"
                  defaultValue={"Non renseigné"}
                  className="border-2"
                />
              </div>
              <SaleSummary productsToSale={productsToSale} />
              <div className="flex gap-2 justify-end">
                <button
                  onClick={onClose}
                  className="px-2 py-1 bg-red-500 text-slate-100 shadow-md font-medium rounded-md"
                >
                  Fermer
                </button>
                <button
                  type="submit"
                  className="px-2 py-1 bg-green-500 text-slate-100 shadow-md font-medium rounded-md"
                >
                  Enregistrer la vente
                </button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SaleDialogForm;
