import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gradient-dark">
      {/* Ensure header is above all content */}
      <div className="relative z-50">
        <Header />
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
