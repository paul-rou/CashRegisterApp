import { NavigationElement } from "../Layout/layout";
import DrawerNavigationElement from "./DrawerNavigationElement";

const Drawer = ({
  navigationElementNames,
}: {
  navigationElementNames: NavigationElement[];
}) => {
  return (
    <nav className="flex flex-col text-center bg-[#EEEEEE] w-[200px] h-full">
      {navigationElementNames.map((navigationElement, i) => (
        <DrawerNavigationElement
          name={navigationElement.name}
          link={navigationElement.link}
          key={i}
        />
      ))}
    </nav>
  );
};

export default Drawer;
