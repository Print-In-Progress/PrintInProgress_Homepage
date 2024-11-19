import React from "react";
import { useTranslation } from "react-i18next";
import GlassCard from "../components/GlassCard";
import PricingCard from "../components/PricingCard";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("pricing");

  const basicPlanFeatures = [
    t("components.basicPlan.features.modulesOfChoise"),
    t("components.basicPlan.features.userManagementModule"),
    t("components.basicPlan.features.pushNotificationModule"),
    t("components.basicPlan.features.annualBilling"),
    t("components.basicPlan.features.basicSupport"),
  ];

  const handleContactButton = () => {
    navigate("/contact/general");
  };

  return (
    <div className="mb-5 mt-5 flex flex-col gap-10 px-3 py-2">
      <section className="mx-auto w-full max-w-7xl px-5">
        {/* Header Section */}
        <h1 className="mb-6 text-display-md text-gray-display">{t("title")}</h1>
        <p className="mb-8 text-body text-gray-headline sm:text-headline">
          {t("description")}
        </p>

        {/* Main Pricing Card */}
        <div className="mb-12">
          <PricingCard
            title={t("components.basicPlan.title")}
            price={t("components.basicPlan.price")}
            priceDescription={t("components.basicPlan.description")}
            features={basicPlanFeatures}
            buttonText={t("components.basicPlan.contactButton")}
            onButtonClick={handleContactButton}
          />
        </div>

        {/* Additional Information */}
        <div className="grid gap-8 md:grid-cols-2">
          <GlassCard
            heading={t("components.additionalModules.title")}
            text={t("components.additionalModules.description")}
          />
          <GlassCard
            heading={t("components.volumeDiscounts.title")}
            text={t("components.volumeDiscounts.description")}
          />
          <GlassCard
            heading={t("components.longTermCommitment.title")}
            text={t("components.longTermCommitment.description")}
          />
          <GlassCard
            heading={t("components.customSolutions.title")}
            text={t("components.customSolutions.description")}
          />
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
