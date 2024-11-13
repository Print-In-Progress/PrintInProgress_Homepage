import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { sections } from "../config/documentationConfig";

const DocumentationLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsSidebarOpen(window.innerWidth >= 768);
  }, []);

  return (
    <div className="flex h-full">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "absolute bottom-0 left-0 top-0 z-40" : "hidden"
        } h-full w-64 overflow-auto bg-[#020617] md:relative md:block`}
      >
        <Sidebar
          backgroundColor="transparent"
          rootStyles={{
            ".ps-submenu-content": {
              backgroundColor: "#020617 !important",
            },
            ".ps-sidebar-container": {
              border: "none !important",
            },
            "&": {
              borderRight: "none", // Removes any right border
              boxShadow: "none", // Removes any box shadow
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

      {/* Main Content Area */}
      <main className="w-full">
        <div className="mx-auto max-w-4xl px-4 py-6 md:px-8">
          {/* Documentation Content */}
          <Outlet context={{ isSidebarOpen, setIsSidebarOpen }} />
        </div>
      </main>
    </div>
  );
};

export default DocumentationLayout;
