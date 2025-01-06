import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDocumentationContent } from "../config/documentationConfig";

const Documentation = () => {
  const { t } = useTranslation("documentation");
  const { section } = useParams();
  const { isSidebarOpen, setIsSidebarOpen } = useOutletContext();
  const docContent = useDocumentationContent();

  // Default if no documentatio page is selected
  const defaultContent = {
    section: t("sections.gettingStarted.title"),
    title: t("sections.gettingStarted.items.intro.title"),
    content: t("sections.gettingStarted.items.intro.content"),
  };

  const [currentContent, setCurrentContent] = useState(defaultContent);

  useEffect(() => {
    const newContent =
      section && docContent[section] ? docContent[section] : defaultContent;
    if (JSON.stringify(currentContent) !== JSON.stringify(newContent)) {
      setCurrentContent(newContent);
    }
  }, [section, docContent, t]);

  return (
    <>
      <nav className="mb-6 flex items-center justify-between md:justify-start">
        <div className="flex items-center text-gray-body">
          <span>{currentContent.section}</span>
          <span className="mx-2">{t("ui.breadcrumbDivider")}</span>
          <span>{currentContent.title}</span>
        </div>

        {/* Mobile Button to open/close the Navbar */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-lg bg-primary px-4 py-2 text-gray-display md:hidden"
        >
          {isSidebarOpen ? t("ui.hideMenu") : t("ui.showMenu")}
        </button>
      </nav>

      <h1 className="mb-6 text-display-md text-gray-display">
        {currentContent.title}
      </h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-body text-gray-body">{currentContent.content}</p>
      </div>
    </>
  );
};

export default Documentation;
