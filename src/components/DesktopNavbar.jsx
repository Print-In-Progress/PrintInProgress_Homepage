import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DesktopDropdownItem from "./DesktopDropdownItem";
import { navigationLinks } from "../config/navigationConfig";

const DesktopNavbar = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  // Handle clicking outside of navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (item) => {
    if (item.isDropdown) {
      setActiveDropdown(activeDropdown === item.title ? null : item.title);
    } else {
      setActiveDropdown(null);
      navigate(item.path);
    }
  };

  return (
    <section
      ref={navRef}
      className="text-menu-text hidden flex-row gap-6 sm:flex"
    >
      {navigationLinks.map((item, index) => (
        <div key={item.title + index} className="relative">
          <button
            onClick={() => handleClick(item)}
            className="relative hover:text-gray-700"
          >
            {item.title}
          </button>

          {item.isDropdown && (
            <DesktopDropdownItem
              options={item.options}
              isOpen={activeDropdown === item.title}
              setActiveDropdown={setActiveDropdown}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default DesktopNavbar;
