import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Product } from "@prisma/client";
import { FormEvent } from "react";

const ProductDialogForm = ({
  product,
  handleSubmit,
  children,
}: {
  product?: Product;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter un Produit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Remplir le formulaire suivant pour ajouter un produit</p>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
                onClose();
              }}
              className="flex flex-col mt-4 gap-4"
            >
              <div className="flex justify-between">
                <label htmlFor="name" className="font-semibold">
                  Nom du produit
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border-2"
                  defaultValue={product?.name}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="price" className="font-semibold">
                  Prix
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  step="0.01"
                  required
                  className="border-2"
                  defaultValue={product?.price}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="numberInStock" className="font-semibold">
                  Nombre en stock
                </label>
                <input
                  type="number"
                  id="numberInStock"
                  name="numberInStock"
                  required
                  className="border-2"
                  defaultValue={product?.numberInStock}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="photoLink" className="font-semibold">
                  Photo
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  className="border-2"
                />
              </div>
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
                  Enregistrer le Produit
                </button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductDialogForm;
