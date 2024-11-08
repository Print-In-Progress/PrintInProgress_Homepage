import React, { useState } from "react";
import HamburgerMenuButton from "./HamburgerMenuButton";
import MobileMenu from "./MobileMenu";

const MobileNavbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="inline sm:hidden">
      <HamburgerMenuButton active={active} setActive={setActive} />

      <MobileMenu active={active} setActive={setActive} />
    </div>
  );
};

export default MobileNavbar;
