import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const ProductDialogAddForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <form className="flex flex-col mt-4 gap-4">
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
                  required
                  className="border-2"
                />
              </div>
            </form>
          </ModalBody>

          <ModalFooter className="flex gap-2">
            <button
              onClick={onClose}
              className="px-2 py-1 bg-red-500 text-slate-100 shadow-md font-medium rounded-md"
            >
              Fermer
            </button>
            <button className="px-2 py-1 bg-green-500 text-slate-100 shadow-md font-medium rounded-md">
              Enregistrer le Produit
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductDialogAddForm;
