import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [desktopDropdownActive, setDesktopDropdownActive] = useState(null);

  // Close Dropdown if clicked anywhere on the page
  const handlePageClick = () => {
    if (mobileMenuActive) {
      setMobileMenuActive(false);
    }
    if (desktopDropdownActive) {
      setDesktopDropdownActive(null);
    }
  };

  // Overflow-x-hidden because else you get a scrollbar when the Contact us desktop navbar dropdown is active
  return (
    <>
      <ToastContainer />
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden bg-gradient-dark">
        {/* Ensure header is above all content */}
        <div className="relative z-50">
          <Header
            mobileMenuActive={mobileMenuActive}
            setMobileMenuActive={setMobileMenuActive}
            desktopDropdownActive={desktopDropdownActive}
            setDesktopDropdownActive={setDesktopDropdownActive}
          />
        </div>

        {/* Close Dropdown when clicked anywhere but the Header (its handeled seperately) */}
        {/* Main content */}
        <main onClick={handlePageClick} className="relative z-0">
          <Outlet />
        </main>
        {/* Footer */}
        <div onClick={handlePageClick} className="relative z-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
