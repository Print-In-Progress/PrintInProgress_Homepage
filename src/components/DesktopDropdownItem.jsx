import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DesktopDropdownItem = ({ options, isOpen, setActiveDropdown }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    setActiveDropdown(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full z-[100] mt-1 w-48 rounded-lg bg-navbar-bg bg-opacity-95 p-2 backdrop-blur-button"
        >
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick(option.path)}
              className="w-full rounded-md px-4 py-2 text-left text-caption text-gray-display transition-colors hover:bg-white/10"
            >
              {option.title}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopDropdownItem;
