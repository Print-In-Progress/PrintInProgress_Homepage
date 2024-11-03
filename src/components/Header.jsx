import React, { useContext } from "react";
import { NavContext } from "../contexts/NavContext";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import HamburgerMenuButton from "./HamburgerMenuButton";

const Header = () => {
  const { active, setActive } = useContext(NavContext);

  const links = [
    { title: "Products", href: "/products" },
    { title: "Pricing", href: "/pricing" },
    { title: "Why edConnect?", href: "/why-edconnect" },
    { title: "Contact Us", href: "/contact-us" },
    { title: "Documentation", href: "/eocumentation" },
  ];

  return (
    <nav className="flex flex-row items-center justify-between border-b border-gray-headline border-opacity-10 bg-navbar-bg bg-opacity-20 px-3 py-3 text-caption text-gray-display sm:px-4">
      <section>
        <Link to="/">
          <img src={Logo} className="ml-1 h-14 sm:ml-0" />
        </Link>
      </section>

      {/* Mobile Navbar */}
      <section className="inline sm:hidden">
        <HamburgerMenuButton active={active} setActive={setActive} />
      </section>

      {/* Desktop Navbar */}
      <section className="text-menu-text hidden flex-row gap-6 sm:flex">
        {links.map((link, index) => (
          <Link key={link.title + index} to={link.href}>
            {link.title}
          </Link>
        ))}
      </section>
    </nav>
  );
};

export default Header;
