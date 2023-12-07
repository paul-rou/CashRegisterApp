import { ReactNode } from "react";
import Drawer from "../Drawer/Drawer";

export interface NavigationElement {
  link: string;
  name: string;
}

const Layout = ({ children }: { children: ReactNode }) => {
  const navigationElementNames: NavigationElement[] = [
    { name: "Caisse", link: "" },
    { name: "Stockage", link: "stockage" },
    { name: "Historique", link: "historique" },
  ];
  return (
    <div className="flex h-full">
      <Drawer navigationElementNames={navigationElementNames} />
      {children}
    </div>
  );
};

export default Layout;
