import React from "react";
import GlassCard from "../components/GlassCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCompliance, useHostingAndEncryptionStandards, useAccessAndControl } from "../config/privacyConfig";

const Privacy = () => {
  const compliance = useCompliance();
  const hostingAndEcncryption = useHostingAndEncryptionStandards();
  const accessAndControl = useAccessAndControl();
  const { t } = useTranslation("whyedconnect");

  return (
    <div className="mb-5 mt-5 flex flex-col gap-10 px-3 py-2">
      {/* Header Section */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h1 className="mb-4 text-display-md text-gray-display">
          {t("privacy.title")}
        </h1>
        <p className="mb-8 max-w-2xl text-body text-gray-headline sm:text-headline">
          {t("privacy.description")}
        </p>
      </section>

      {/* Compliance & Data Security */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-8 text-display-sm text-gray-display">
          {t("privacy.components.compliance.title")}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {compliance.map((feature, index) => (
            <GlassCard
              key={index}
              heading={feature.title}
              text={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Hosting & Encryption Standards */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-8 text-display-sm text-gray-display">
          {t("privacy.components.hostingAndEncryption.title")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {hostingAndEcncryption.map((feature, index) => (
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
      {/* Access & Control */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-8 text-display-sm text-gray-display">
          {t("privacy.components.accessControl.title")}
        </h2>
        <div className="grid gap-6 md:grid-cols-1">
          {accessAndControl.map((feature, index) => (
            <GlassCard
              key={index}
              heading={feature.title}
              text={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Privacy Policy Call To Action */}
      <section className="mx-auto w-full max-w-7xl px-5">
        <h2 className="mb-4 text-display-sm text-gray-display">
          {t("privacy.components.cta.title")}
        </h2>
        <p className="mb-4 text-body text-gray-headline">
          {t("privacy.components.cta.descriptionPartOne")}{" "}
          <Link
            to="/privacy-policy"
            className="w-full text-center text-body text-primary transition-all duration-200 hover:text-gray-display sm:w-auto sm:text-left"
          >
            {t("privacy.components.cta.descriptionPartTwo")}
          </Link>{" "}
          {t("privacy.components.cta.descriptionPartThree")}
        </p>
        <p className="mb-4 text-body text-gray-headline">Mark Grinberg</p><p className="mb-4 text-body text-gray-headline">mark.grinber@printinprogress.net</p>
      </section>
    </div>
  );
};

export default Privacy;
