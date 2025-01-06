import React from "react";
import { useNavigate } from "react-router-dom";
import DesktopDropdownItem from "./DesktopDropdownItem";
import { useHeaderLinks } from "../config/navigationConfig";

const DesktopNavbar = ({ activeDropdown, setActiveDropdown }) => {
  const navigate = useNavigate();
  const headerLinks = useHeaderLinks();

  const handleClick = (e, item) => {
    e.stopPropagation();
    if (item.isDropdown) {
      setActiveDropdown(activeDropdown === item.title ? null : item.title);
    } else {
      setActiveDropdown(null);
      navigate(item.path);
    }
  };

  {
    /* Dropdown Item Click is handeled it its own component */
  }

  return (
    <section className="text-menu-text hidden flex-row gap-6 sm:flex">
      {/* Maps over all the Links from the Config File */}
      {headerLinks.map((item, index) => (
        <div
          key={item.title + index}
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main Link */}
          <button
            onClick={(e) => handleClick(e, item)}
            className="relative hover:text-gray-700"
          >
            {item.title}
          </button>

          {/* Shows Dropdown Item if active */}
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
