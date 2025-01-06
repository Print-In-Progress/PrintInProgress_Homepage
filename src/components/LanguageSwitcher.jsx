import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="flex w-fit min-w-36 flex-col">
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between rounded-md border border-gray-300 border-opacity-10 bg-transparent px-4 py-2 text-caption text-gray-body transition-all duration-200 hover:border-opacity-20"
      >
        <span>
          {i18n.language === "en"
            ? t("footer.language.english")
            : t("footer.language.german")}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="ml-2">
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-1 flex flex-col gap-1 rounded-md border border-gray-300 border-opacity-10 bg-navbar-bg p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`w-full rounded px-3 py-1 text-left text-caption transition-colors hover:bg-white/10 ${i18n.language === "en" ? "text-gray-display" : "text-gray-body"}`}
              >
                {t("footer.language.english")}
              </button>
              <button
                onClick={() => setLanguage("de")}
                className={`w-full rounded px-3 py-1 text-left text-caption transition-colors hover:bg-white/10 ${i18n.language === "de" ? "text-gray-display" : "text-gray-body"}`}
              >
                {t("footer.language.german")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
