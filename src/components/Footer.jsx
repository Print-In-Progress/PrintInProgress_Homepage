import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      name: "Terms of Service",
      href: "/terms",
    },
    {
      name: "Privacy Policy",
      herf: "/privacy",
    },
    {
      name: "Legal Notice",
      href: "/legal-notice",
    },
  ];

  return (
    <footer className="mx-auto mt-auto flex w-full max-w-7xl flex-col gap-5 border-t border-gray-300 border-opacity-10 bg-navbar-bg bg-opacity-20 px-4 py-6 backdrop-blur-button">
      {/* Legal Links */}
      <nav className="flex justify-center gap-x-6">
        {links.map((link, index) => (
          <Link
            key={link + index}
            to={link.href}
            className="font-inter text-caption text-gray-400 underline underline-offset-2 transition-colors duration-200 hover:text-gray-100"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <section className="flex flex-row items-center justify-between">
        {/* Copyright */}
        <p className="font-inter text-caption text-gray-400">
          © {currentYear} Print In Progress. All rights reserved.
        </p>

        {/* Language Selector */}
        <select
          className="rounded-md border border-gray-300 border-opacity-10 bg-transparent px-2 py-1 font-inter text-caption text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          defaultValue="en"
        >
          <option value="en" className="bg-navbar-bg">
            English
          </option>
          <option value="de" className="bg-navbar-bg">
            Deutsch
          </option>
        </select>
      </section>
    </footer>
  );
};

export default Footer;
