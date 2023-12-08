import Image from "next/image";
import honeyImage from "./miel.jpg";

const ProductCard = () => {
  return (
    <div className="flex h-[200px] w-[320px] p-3 rounded-xl shadow-md bg-white">
      <div className="mt-auto mb-auto">
        <Image
          src={honeyImage}
          width={120}
          height={120}
          alt="Picture of honey"
        />
      </div>
      <div className="ml-3 mt-auto mb-auto text-center">
        <p>
          <strong>7</strong> en stock
        </p>
        <p>
          <strong>5</strong>€
        </p>
        <div className="flex gap-1 mt-5">
          <button className="pt-1 pb-1 pl-3 pr-3 rounded-2xl shadow-md bg-green-500 text-slate-200 hover:bg-green-600">
            Ajouter
          </button>
          <button className="pt-1 pb-1 pl-3 pr-3 rounded-2xl shadow-md bg-red-500 text-slate-200 hover:bg-red-600">
            Retirer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
