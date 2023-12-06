import Link from "next/link";

const DrawerNavigationElement = ({
  link,
  name,
}: {
  link: string;
  name: string;
}) => {
  return (
    <Link
      href={`/${link}`}
      className="w-full h-10 leading-10 select-none hover:bg-gray-300"
    >
      {name}
    </Link>
  );
};

export default DrawerNavigationElement;
