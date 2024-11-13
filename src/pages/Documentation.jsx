import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { documentationContent } from "../config/documentationConfig";

const Documentation = () => {
  const { section } = useParams();
  const { isSidebarOpen, setIsSidebarOpen } = useOutletContext();
  const [content, setContent] = useState({
    section: "Getting Started",
    title: "Introduction",
    content: "Welcome to the edConnect documentation...",
  });

  // Update content when route changes
  useEffect(() => {
    if (section && documentationContent[section]) {
      setContent(documentationContent[section]);
    } else {
      // Default content for /documentation route
      setContent({
        section: "Getting Started",
        title: "Introduction",
        content:
          "Welcome to the edConnect documentation. Select a topic from the sidebar to learn more about our platform and its features.",
      });
    }
  }, [section]);

  return (
    <>
      <nav className="mb-6 flex items-center justify-between md:justify-start">
        <div className="flex items-center text-gray-body">
          <span>{content.section}</span>
          <span className="mx-2">/</span>
          <span>{content.title}</span>
        </div>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-lg bg-primary px-4 py-2 text-gray-display md:hidden"
        >
          {isSidebarOpen ? "Hide Menu" : "Show Menu"}
        </button>
      </nav>

      <h1 className="mb-6 text-display-md text-gray-display">
        {content.title}
      </h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-body text-gray-body">{content.content}</p>
      </div>
    </>
  );
};

export default Documentation;
