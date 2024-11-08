import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Placeholder Links
  const links = [
    { name: "Terms of Service", href: "/" },
    { name: "Privacy Policy", href: "/" },
    { name: "Legal Notice", href: "/" },
  ];

  return (
    <footer className="relative border-t border-gray-300 border-opacity-10 bg-navbar-bg bg-opacity-20 backdrop-blur-button">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="flex flex-col space-y-6 sm:space-y-8">
          {/* Links - Responsive grid that becomes vertical on mobile */}
          <nav className="grid auto-rows-auto grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="w-full text-center text-body text-gray-body transition-all duration-200 hover:text-gray-display sm:w-auto sm:text-left"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Divider - Adjusts margin based on screen size */}
          <div className="w-full border-t border-gray-300 border-opacity-10" />

          {/* Bottom section - Stacks on mobile, side by side on larger screens */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6 lg:gap-8">
            {/* Copyright - Full width on mobile, auto width on larger screens */}
            <p className="w-full text-center text-caption text-gray-body sm:w-auto sm:text-left">
              © {currentYear} Print In Progress. All rights reserved.
            </p>

            {/* Language Selector - Full width on mobile, auto width on larger screens */}
            <div className="w-full sm:w-auto">
              <select
                className="w-full rounded-md border border-gray-300 border-opacity-10 bg-transparent px-4 py-2 text-center text-caption text-gray-body transition-all duration-200 hover:border-opacity-20 focus:outline-none focus:ring-1 focus:ring-primary sm:w-auto sm:min-w-[120px] sm:text-left"
                defaultValue="en"
              >
                <option value="en" className="bg-navbar-bg">
                  English
                </option>
                <option value="de" className="bg-navbar-bg">
                  Deutsch
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
