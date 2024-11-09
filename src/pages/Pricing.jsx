import React from "react";
import GlassCard from "../components/GlassCard";
import PricingCard from "../components/PricingCard";

const PricingPage = () => {
  const basicPlanFeatures = [
    "4 modules of your choice",
    "User Management module included",
    "Push Notifications module included",
    "Annual billing",
    "Basic support",
  ];

  const handleContactSales = () => {
    // Handle contact sales action
    console.log("Contact sales clicked");
  };

  return (
    <div className="mb-5 mt-5 flex flex-col gap-10 px-3 py-2">
      <section className="mx-auto w-full max-w-7xl px-5">
        {/* Header Section */}
        <h1 className="mb-6 text-display-md text-gray-display">
          Simple, Transparent Pricing
        </h1>
        <p className="mb-8 text-body text-gray-headline sm:text-headline">
          Our flexible pricing model makes edConnect accessible and customizable
          for any educational institution. The Basic Plan starts at just $1 per
          student or teacher per year and includes 4 modules of your choice,
          along with essential User Management and Push Notifications modules.
        </p>

        {/* Main Pricing Card */}
        <div className="mb-12">
          <PricingCard
            title="Basic Plan"
            price="$1"
            priceDescription="per student/teacher per year"
            features={basicPlanFeatures}
            onButtonClick={handleContactSales}
          />
        </div>

        {/* Additional Information */}
        <div className="grid gap-8 md:grid-cols-2">
          <GlassCard
            heading="Additional Modules"
            text="Schools can further enhance their experience by adding extra modules at either a per-student, per-year rate or a fixed annual fee, based on the module."
          />
          <GlassCard
            heading="Volume Discounts"
            text="We offer 10-15% bulk discounts for larger institutions, school districts, or those opting for three or more additional modules."
          />
          <GlassCard
            heading="Long-term Commitment"
            text="Schools committing to a 3-year plan enjoy an additional 10% discount on all services."
          />
          <GlassCard
            heading="Custom Solutions"
            text="As each institution's needs are unique, we're happy to negotiate pricing to find the best fit for your requirements."
          />
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
