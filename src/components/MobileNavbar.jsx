import React from "react";
import HamburgerMenuButton from "./HamburgerMenuButton";
import MobileMenu from "./MobileMenu";

const MobileNavbar = ({ active, setActive }) => {
  const handleClickAway = () => {
    if (active) {
      setActive(false);
    }
  };

  return (
    <div className="inline sm:hidden">
      <HamburgerMenuButton active={active} setActive={setActive} />
      <MobileMenu active={active} setActive={setActive} />
    </div>
  );
};

export default MobileNavbar;
