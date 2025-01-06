import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };

  return (
    <select
      onChange={changeLanguage}
      value={activeLanguage}
      className="w-full rounded-md border border-gray-300 border-opacity-10 bg-transparent px-4 py-2 text-center text-caption text-gray-body transition-all duration-200 hover:border-opacity-20 focus:outline-none focus:ring-1 focus:ring-primary sm:w-auto sm:min-w-[120px] sm:text-left"
    >
      <option value="en" className="bg-navbar-bg">
        English
      </option>
      <option value="de" className="bg-navbar-bg">
        Deutsch
      </option>
    </select>
  );
};

export default LanguageSwitcher;
