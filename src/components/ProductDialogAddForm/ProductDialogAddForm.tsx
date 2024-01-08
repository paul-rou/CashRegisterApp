import { Product } from "@/pages";
import { trpc } from "@/utils/trpc";
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

const ProductDialogAddForm = ({
  setNewProducts,
}: {
  setNewProducts: (products: Product[]) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutateAsync: asyncInsertProductAndGetProducts } =
    trpc.insertProductAndGetProducts.useMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await asyncInsertProductAndGetProducts({
        name: e.currentTarget.name.value,
        price: Number(e.currentTarget.price.value),
        numberInStock: Number(e.currentTarget.numberInStock.value),
        photoLink: e.currentTarget.photo.value,
      }).then((res) => {
        if (res.products) setNewProducts(res.products);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="bg-green-500 hover:bg-green-600 pt-2 pb-2 pl-4 pr-4 text-slate-100 shadow-md font-medium rounded-md"
      >
        Ajouter Nouveau Produit
      </button>
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

export default ProductDialogAddForm;
