import React from "react";
import GlassCard from "../components/GlassCard";
import { featureGroup1, featureGroup2 } from "../config/privacyConfig";

const Privacy = () => {
  return (
    <div className="mb-5 mt-5 flex flex-col gap-10 px-3 py-2">
      {/* Header Section */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h1 className="mb-4 text-display-md text-gray-display">
          Privacy & Security
        </h1>
        <p className="mb-8 max-w-2xl text-body text-gray-headline sm:text-headline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Feature Group 1 */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-8 text-display-sm text-gray-display">
          Feature Group 1
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featureGroup1.map((feature, index) => (
            <GlassCard
              key={index}
              heading={feature.title}
              text={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Feature Group 2 */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-8 text-display-sm text-gray-display">
          Feature Group 2
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featureGroup2.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-primary border-opacity-20 bg-gray-outline bg-opacity-10 p-6"
            >
              <h3 className="mb-4 text-headline text-gray-display">
                {feature.title}
              </h3>
              <p className="mb-4 text-body text-gray-body">
                {feature.description}
              </p>
              <ul className="list-inside list-disc text-body text-gray-body">
                {feature.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Privacy;
