import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import GlassCard from "../components/GlassCard";
import ModuleCard from "../components/ModuleCard";
import { useComponents, useModules } from "../config/productsConfig";

// Component thats only needed in this file - no component file needed
const ComponentsGrid = ({ components }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {components.map((component) => (
      <GlassCard
        key={component.id || component.title}
        heading={component.title}
        text={component.description}
        imageUrl={component.imageUrl}
      />
    ))}
  </div>
);

// Component thats only needed in this file - no component file needed
const ModuleCategory = ({ category, activeDropdown, onDropdownToggle }) => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <h3 className="text-display-sm text-gray-display">{category.title}</h3>
      <p className="text-body text-gray-body">{category.description}</p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {category.modules.map((module) => (
        <ModuleCard
          key={module.id}
          title={module.title}
          content={module.description}
          imageUrl={module.imageUrl}
          status={module.status}
          isExpanded={activeDropdown === module.id}
          onToggle={() => onDropdownToggle(module.id)}
        />
      ))}
    </div>
  </div>
);

const Products = () => {
  const { t } = useTranslation("products");
  const components = useComponents();
  const unsortedModules = useModules();
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Status priority helper function
  const getStatusPriority = (status) => {
    switch (status) {
      case t("status.done"):
        return 1;
      case t("status.inProgress"):
        return 2;
      default: // planned
        return 3;
    }
  };

  // Sort modules within each category
  const modules = unsortedModules.map((category) => ({
    ...category,
    modules: [...category.modules].sort(
      (a, b) => getStatusPriority(a.status) - getStatusPriority(b.status),
    ),
  }));

  const handleDropdownToggle = (moduleId) => {
    setActiveDropdown(activeDropdown === moduleId ? null : moduleId);
  };

  return (
    <div className="relative mb-16 flex flex-col gap-10 px-3 py-2">
      {/* Components Overview Section */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h1 className="mb-6 text-display-md text-gray-display">
          {t("componentsOverview.title")}
        </h1>
        <p className="mb-8 text-body text-gray-headline sm:text-headline">
          {t("componentsOverview.description")}
        </p>
        <ComponentsGrid components={components} />
      </section>

      {/* Modules Section */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-6 text-display-md text-gray-display">
          {t("modulesOverview.title")}
        </h2>
        <div className="flex flex-col gap-12">
          {modules.map((category, index) => (
            <ModuleCategory
              key={`${category.title}-${index}`}
              category={category}
              activeDropdown={activeDropdown}
              onDropdownToggle={handleDropdownToggle}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
