import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useFooterLinks } from "../config/navigationConfig";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const { t } = useTranslation("common");
  const footerLinks = useFooterLinks();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-300 border-opacity-10 bg-navbar-bg bg-opacity-20 backdrop-blur-button">
      <div className="mx-auto w-full max-w-7xl px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          {/* Links - Responsive grid that becomes vertical on mobile */}
          <nav className="grid auto-rows-auto grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-8">
            {footerLinks.map((item, index) => (
              <Link
                key={item.title + index}
                to={item.path}
                className="w-full text-center text-body text-gray-body transition-all duration-200 hover:text-gray-display sm:w-auto sm:text-left"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full border-t border-gray-300 border-opacity-10" />

          {/* Bottom section */}
          <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between sm:gap-6 lg:gap-8">
            {/* Copyright */}
            <p className="mt-4 w-full text-center text-caption text-gray-body sm:mt-0 sm:w-auto sm:text-left">
              © {currentYear} Print In Progress.{" "}
              {t("footer.allRightsReserved")}.
            </p>

            {/* Language Selector */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
