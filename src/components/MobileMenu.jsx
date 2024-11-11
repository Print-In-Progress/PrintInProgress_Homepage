import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { headerLinks } from "../config/navigationConfig";

const MobileMenu = ({ active, setActive }) => {
  const navigate = useNavigate();
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  const handleItemClick = (item) => {
    if (item.isDropdown) {
      setExpandedDropdown(expandedDropdown === item.title ? null : item.title);
    } else {
      navigate(item.path);
      setActive(false);
    }
  };

  const handleDropdownOptionClick = (path) => {
    navigate(path);
    setActive(false);
    setExpandedDropdown(null);
  };

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-0 right-0 top-20 z-50 flex flex-col gap-2 border-b border-gray-headline border-opacity-10 bg-navbar-bg bg-opacity-95 p-4 backdrop-blur-button"
        >
          {headerLinks.map((item, index) => (
            <div key={item.title + index}>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleItemClick(item)}
                className="flex w-full flex-row items-center justify-between rounded-lg py-2 text-left text-body text-gray-display hover:bg-white/10"
              >
                <span>{item.title}</span>
                {item.isDropdown && (
                  <motion.span
                    animate={{
                      rotate: expandedDropdown === item.title ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.span>
                )}
              </motion.button>

              <AnimatePresence>
                {item.isDropdown && expandedDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 flex flex-col overflow-hidden"
                  >
                    {item.options.map((option, optionIndex) => (
                      <motion.button
                        key={option.title + optionIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: optionIndex * 0.1 }}
                        onClick={() => handleDropdownOptionClick(option.path)}
                        className="rounded-lg py-2 text-left text-body text-gray-display hover:bg-white/10"
                      >
                        {option.title}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
