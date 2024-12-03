import React from "react";
import { useTranslation } from "react-i18next";
import GlassCard from "../components/GlassCard";
import ModuleCard from "../components/ModuleCard";
import { useComponents, useModules } from "../config/productsConfig";

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

const ModuleCategory = ({ category }) => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <h3 className="text-display-sm text-gray-display">
        {category.title}
      </h3>
      <p className="text-body text-gray-body">
        {category.description}
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {category.modules.map((module) => (
        <ModuleCard
          key={module.id}
          title={module.title}
          descriptions={module.description}
          imageUrl={module.imageUrl}
          status={module.status}
        />
      ))}
    </div>
  </div>
);

const Products = () => {
  const { t } = useTranslation("products");
  const components = useComponents();
  const modules = useModules();

  return (
    <div className="min-h-screen flex-1 touch-pan-y overflow-y-auto scrollbar-hide overscroll-contain">
      <div className="relative flex flex-col gap-10 px-3 py-2">
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
        <section className="mx-auto w-full max-w-7xl px-5 pb-20">
          <h2 className="mb-6 text-display-md text-gray-display">
            {t("modulesOverview.title")}
          </h2>
          <div className="flex flex-col gap-12">
            {modules.map((category, index) => (
              <ModuleCategory
                key={`${category.title}-${index}`}
                category={category}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
