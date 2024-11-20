import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useSections } from "../config/documentationConfig";

const DocumentationLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const sections = useSections();

  useEffect(() => {
    setIsSidebarOpen(window.innerWidth >= 768);
  }, []);

  return (
    <div className="flex h-full">
      {/* Rest of your component code, using sections directly */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`${
          isSidebarOpen ? "absolute bottom-0 left-0 top-0 z-40" : "hidden"
        } w-auto min-w-[240px] max-w-[280px] overflow-hidden bg-[#020617] md:relative md:block`}
      >
        <Sidebar
          backgroundColor="transparent"
          width="auto"
          rootStyles={{
            ".ps-submenu-content": {
              backgroundColor: "#020617 !important",
            },
            ".ps-sidebar-container": {
              height: "100%",
              border: "none !important",
              width: "100%",
            },
            ".ps-menu-button": {
              whiteSpace: "normal",
              height: "auto",
              padding: "8px 16px",
            },
            "&": {
              borderRight: "none",
              boxShadow: "none",
              width: "100%",
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
                      navigate(`/documentation/${item.path}`);
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
      </aside>

      <main className="w-full">
        <div className="mx-auto max-w-4xl px-4 py-6 md:px-8">
          <Outlet context={{ isSidebarOpen, setIsSidebarOpen }} />
        </div>
      </main>
    </div>
  );
};

export default DocumentationLayout;
