import React from "react";
import GlassCard from "../components/GlassCard";
import ModuleCard from "../components/ModuleCard";
import { components, moduleCategories } from "../config/productsConfig";

const Products = () => {
  return (
    <div className="mb-5 mt-5 flex flex-col gap-10 px-3 py-2">
      {/* Components Overview Section */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h1 className="mb-6 text-display-md text-gray-display">
          Components Overview
        </h1>
        <p className="mb-8 text-body text-gray-headline sm:text-headline">
          The edConnect System consists of 3 key components. NewsApp Web,
          edConnect Mobile, and edConnect Admin Panel. You can choose your own
          colors and design. The basic plan includes 4 Modules of your choosing
          and the User Management and Push Notifications Module. We offer a
          variety of specialized packages for educational institutions.
        </p>

        {/* Components Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {components.map((component, index) => (
            <GlassCard
              key={index}
              heading={component.title}
              text={component.description}
              imageUrl={component.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Modules Section */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-6 text-display-md text-gray-display">
          Modules Overview
        </h2>

        {/* Modules Categories */}
        <div className="flex flex-col gap-12">
          {Object.entries(moduleCategories).map(([categoryId, category]) => (
            <div key={categoryId} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-display-sm text-gray-display">
                  {category.title}
                </h3>
                <p className="text-body text-gray-body">
                  {category.description}
                </p>
              </div>

              {/* Modules Grid for each category */}
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
