import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Header = ({ mobileMenuActive, setMobileMenuActive }) => {
  return (
    <nav className="relative flex flex-row items-center justify-between border-b border-gray-headline border-opacity-10 bg-navbar-bg bg-opacity-20 px-3 py-3 text-caption text-gray-display backdrop-blur-button sm:px-4">
      <section>
        <Link to="/">
          <img src={Logo} className="ml-1 h-14 sm:ml-0" alt="Logo" />
        </Link>
      </section>

      <MobileNavbar active={mobileMenuActive} setActive={setMobileMenuActive} />

      <DesktopNavbar />
    </nav>
  );
};

export default Header;
