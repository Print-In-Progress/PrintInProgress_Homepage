import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import HamburgerMenuButton from "./HamburgerMenuButton";
import MobileMenu from "./MobileMenu";
import DesktopNavbar from "./DesktopNavbar";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="relative">
      <nav className="flex flex-row items-center justify-between border-b border-gray-headline border-opacity-10 bg-navbar-bg bg-opacity-20 px-3 py-3 text-caption text-gray-display backdrop-blur-button sm:px-4">
        <section>
          <Link to="/">
            <img src={Logo} className="ml-1 h-14 sm:ml-0" alt="Logo" />
          </Link>
        </section>

        {/* Mobile Navbar */}
        <section className="inline sm:hidden">
          <HamburgerMenuButton active={active} setActive={setActive} />
        </section>

        {/* Desktop Navbar */}
        <DesktopNavbar />
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className="sm:hidden">
        <MobileMenu active={active} setActive={setActive} />
      </div>
    </header>
  );
};

export default Header;
