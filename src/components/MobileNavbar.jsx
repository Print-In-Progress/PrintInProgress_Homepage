import React from "react";
import HamburgerMenuButton from "./HamburgerMenuButton";
import MobileMenu from "./MobileMenu";
import { headerLinks } from "../config/navigationConfig";

const MobileNavbar = ({ active, setActive }) => {
  return (
    <div className="inline sm:hidden">
      <HamburgerMenuButton active={active} setActive={setActive} />
      <MobileMenu
        active={active}
        setActive={setActive}
        headerLinks={headerLinks()}
      />
    </div>
  );
};

export default MobileNavbar;
