import React from "react";
import HamburgerMenuButton from "./HamburgerMenuButton";
import MobileMenu from "./MobileMenu";
import { useHeaderLinks } from "../config/navigationConfig";

const MobileNavbar = ({ active, setActive }) => {
  return (
    <div className="inline sm:hidden">
      <HamburgerMenuButton active={active} setActive={setActive} />
      <MobileMenu
        active={active}
        setActive={setActive}
        headerLinks={useHeaderLinks()}
      />
    </div>
  );
};

export default MobileNavbar;
