import React from "react";
import GlassCard from "../components/GlassCard";
import {
  useMainServices,
  useAdditionalServices,
} from "../config/servicesConfig";

const Services = () => {
  const mainServices = useMainServices();
  const additionalServices = useAdditionalServices();

  return (
    <div className="mb-5 mt-5 flex flex-col gap-10 px-3 py-2">
      {/* Header Section */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h1 className="mb-4 text-display-md text-gray-display">
          Services Overview
        </h1>
        <p className="mb-8 max-w-2xl text-body text-gray-headline sm:text-headline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Main Services */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-8 text-display-sm text-gray-display">
          Main Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {mainServices.map((service, index) => (
            <GlassCard
              key={index}
              heading={service.title}
              text={service.description}
            />
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-8 text-display-sm text-gray-display">
          Additional Services
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
    </div>
  );
};

export default Services;
