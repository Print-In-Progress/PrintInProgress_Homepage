import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { sections } from "../config/documentationConfig";

const Documentation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mainHeight, setMainHeight] = useState(0);

  // Calculate and update main content height
  useEffect(() => {
    const updateHeight = () => {
      const headerHeight = document.querySelector("nav")?.offsetHeight || 0;
      const footerHeight = document.querySelector("footer")?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      setMainHeight(windowHeight - headerHeight - footerHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Set initial sidebar state based on screen size
  useEffect(() => {
    setIsSidebarOpen(window.innerWidth >= 768);
  }, []);

  // State for selected content
  const [selectedContent, setSelectedContent] = useState({
    section: sections[0].title,
    title: sections[0].items[0].title,
    content: sections[0].items[0].content,
  });

  return (
    <div className="relative flex min-h-full">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        style={{ height: mainHeight }}
        className={`fixed z-40 w-64 transform bg-navbar-bg bg-opacity-95 transition-transform duration-300 ease-in-out md:sticky md:top-0 md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <Sidebar
          className="h-full overflow-y-auto"
          backgroundColor="transparent"
          rootStyles={{
            ".ps-submenu-content": {
              backgroundColor: "#020617 !important",
            },
            "&": {
              borderRight: "none",
              boxShadow: "none",
            },
          }}
        >
          <Menu
            menuItemStyles={{
              button: {
                color: "#9CA3AF",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#F3F4F6",
                },
              },
            }}
          >
            {sections.map((section) => (
              <SubMenu
                key={section.title}
                label={section.title}
                className="text-body"
              >
                {section.items.map((item) => (
                  <MenuItem
                    key={item.title}
                    className="text-body"
                    onClick={() => {
                      setSelectedContent({
                        section: section.title,
                        title: item.title,
                        content: item.content,
                      });
                      if (window.innerWidth < 768) {
                        setIsSidebarOpen(false);
                      }
                    }}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </Sidebar>
      </div>

      {/* Main Content */}
      <div
        className="w-full px-4 py-6 md:px-8"
        style={{ minHeight: mainHeight }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <nav className="flex items-center text-gray-body">
              <span>{selectedContent.section}</span>
              <span className="mx-2">/</span>
              <span>{selectedContent.title}</span>
            </nav>

            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="rounded-lg bg-primary px-4 py-2 text-gray-display md:hidden"
            >
              {isSidebarOpen ? "Hide Menu" : "Show Menu"}
            </button>
          </div>

          <h1 className="mb-6 text-display-md text-gray-display">
            {selectedContent.title}
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-body text-gray-body">
              {selectedContent.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
