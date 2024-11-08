import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ active, setActive }) => {
  const navigate = useNavigate();

  const links = [
    {
      title: "Products",
      onClick: () => {
        navigate("/products");
        setActive(false);
      },
    },
    {
      title: "Pricing",
      onClick: () => {
        navigate("/pricing");
        setActive(false);
      },
    },
    {
      title: "Why edConnect?",
      onClick: () => {
        console.log("");
        setActive(false);
      },
    },
    {
      title: "Contact Us",
      onClick: () => {
        console.log("");
        setActive(false);
      },
    },
    {
      title: "Documentation",
      onClick: () => {
        navigate("/documentation");
        setActive(false);
      },
    },
  ];

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-0 right-0 top-20 z-50 flex flex-col gap-2 border-b border-gray-headline border-opacity-10 bg-navbar-bg bg-opacity-95 p-4 backdrop-blur-button"
        >
          {links.map((link, index) => (
            <motion.button
              key={link.title + index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={link.onClick}
              className="w-full rounded-lg py-2 text-left text-body text-gray-display hover:bg-white/10"
            >
              {link.title}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
