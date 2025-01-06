import React from "react";
import { useTranslation } from "react-i18next";

const HeaderSection = ({ type }) => {
  const { t } = useTranslation("contact");

  const formTitles = {
    general: t("forms.general.title"),
    support: t("forms.support.title"),
    ideas: t("forms.ideas.title"),
  };

  const formDescriptions = {
    general: t("forms.general.description"),
    support: t("forms.support.description"),
    ideas: t("forms.ideas.description"),
  };

  return (
    <div className="mb-8">
      <h1 className="mb-2 text-display-md text-gray-display">
        {formTitles[type]}
      </h1>
      <p className="text-body text-gray-body">{formDescriptions[type]}</p>
    </div>
  );
};

export default HeaderSection;
