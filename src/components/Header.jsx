import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Header = ({
  mobileMenuActive,
  setMobileMenuActive,
  desktopDropdownActive,
  setDesktopDropdownActive,
}) => {
  const handlePageClick = () => {
    if (desktopDropdownActive) {
      setDesktopDropdownActive(null);
    }
    if (mobileMenuActive) {
      setMobileMenuActive(false);
    }
  };

  return (
    <nav className="relative flex flex-row items-center justify-between border-b border-gray-headline border-opacity-10 bg-navbar-bg bg-opacity-20 px-3 py-3 text-caption text-gray-display backdrop-blur-button sm:px-4">
      {/* Section to close Dropdown when clicked */}
      <section onClick={handlePageClick}>
        <Link to="/">
          <img src={Logo} className="h-14" alt="Logo" />
        </Link>
      </section>

      <MobileNavbar active={mobileMenuActive} setActive={setMobileMenuActive} />

      <DesktopNavbar
        activeDropdown={desktopDropdownActive}
        setActiveDropdown={setDesktopDropdownActive}
      />
    </nav>
  );
};

export default Header;
