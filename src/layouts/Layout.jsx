import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [desktopDropdownActive, setDesktopDropdownActive] = useState(null);

  // Close Navbar if clicked anywhere on the page
  const handlePageClick = () => {
    if (mobileMenuActive) {
      setMobileMenuActive(false);
    }
    if (desktopDropdownActive) {
      setDesktopDropdownActive(null);
    }
  };

  return (
    <div
      onClick={handlePageClick}
      className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gradient-dark"
    >
      {/* Ensure header is above all content */}
      <div className="relative z-50">
        <Header
          mobileMenuActive={mobileMenuActive}
          setMobileMenuActive={setMobileMenuActive}
          desktopDropdownActive={desktopDropdownActive}
          setDesktopDropdownActive={setDesktopDropdownActive}
        />
      </div>

      {/* Main content */}
      <main className="relative z-0">
        <Outlet />
      </main>
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
