import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DesktopDropdownItem from "./DesktopDropdownItem";
import { navigationLinks } from "../config/navigationConfig";

const DesktopNavbar = () => {
  const navigate = useNavigate();
  const items = navigationLinks;
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleClick = (item) => {
    if (item.isDropdown) {
      setActiveDropdown(activeDropdown === item.title ? null : item.title);
    } else {
      setActiveDropdown(null);
      navigate(item.path);
    }
  };

  return (
    <section className="text-menu-text hidden flex-row gap-6 sm:flex">
      {items.map((item, index) => (
        <div key={item.title + index} className="relative">
          {/* Always Visible Nav Button */}
          <button
            onClick={() => handleClick(item)}
            className="relative hover:text-gray-700"
          >
            {item.title}
          </button>

          {/* Optional Dropdown Nav Button */}
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
