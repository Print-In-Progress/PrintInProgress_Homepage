import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NavigationSection = ({ currentType }) => {
  const navigate = useNavigate();

  const { t } = useTranslation("contact");

  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <button
        onClick={() => navigate("/contact/general")}
        className={`rounded-full px-6 py-2 text-body transition-all ${
          currentType === "general"
            ? "bg-primary text-gray-display"
            : "bg-gray-outline bg-opacity-10 text-gray-body hover:bg-opacity-20"
        }`}
      >
        {t("navigation.getInTouch")}
      </button>

      <button
        onClick={() => navigate("/contact/support")}
        className={`rounded-full px-6 py-2 text-body transition-all ${
          currentType === "support"
            ? "bg-primary text-gray-display"
            : "bg-gray-outline bg-opacity-10 text-gray-body hover:bg-opacity-20"
        }`}
      >
        {t("navigation.supportPortal")}
      </button>

      <button
        onClick={() => navigate("/contact/ideas")}
        className={`rounded-full px-6 py-2 text-body transition-all ${
          currentType === "ideas"
            ? "bg-primary text-gray-display"
            : "bg-gray-outline bg-opacity-10 text-gray-body hover:bg-opacity-20"
        }`}
      >
        {t("navigation.ideaPortal")}
      </button>
    </div>
  );
};

export default NavigationSection;
