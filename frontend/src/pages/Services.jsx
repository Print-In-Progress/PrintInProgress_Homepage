import React from "react";
import { useTranslation } from "react-i18next";
import GlassCard from "../components/GlassCard";
import {
  useAdvancedCustomization,
  useAdditionalServices,
} from "../config/servicesConfig";

const Services = () => {
  const additionalServices = useAdditionalServices();
  const advancedCustomization = useAdvancedCustomization();
  const { t } = useTranslation("whyedconnect");

  return (
    <div className="mb-5 mt-5 flex flex-col gap-10 px-3 py-2">
      {/* Header Section */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h1 className="mb-4 text-display-md text-gray-display">
          {t("servicesOverview.title")}
        </h1>
        <p className="mb-8 max-w-2xl text-body text-gray-headline sm:text-headline">
          {t("servicesOverview.description")}
        </p>
      </section>

      {/* Additional Services */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-8 text-display-sm text-gray-display">
          {t("servicesOverview.components.additionalServices.title")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {additionalServices.map((service, index) => (
            <GlassCard
              key={index}
              heading={service.title}
              text={service.description}
            />
          ))}
        </div>
      </section>

      {/* Advanced Customization Services */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-8 text-display-sm text-gray-display">
          {t("servicesOverview.components.advancedCustomization.title")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {advancedCustomization.map((service, index) => (
            <GlassCard
              key={index}
              heading={service.title}
              text={service.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
