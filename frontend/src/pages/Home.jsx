import React from "react";
import { useTranslation } from "react-i18next";
import HeroElement from "../components/HeroElement";
import GlassCard from "../components/GlassCard.jsx";

const Home = () => {
  const { t } = useTranslation("home");

  const benefits = [
    {
      title: t("benefits.intuitive.title"),
      description: t("benefits.intuitive.description"),
    },
    {
      title: t("benefits.connected.title"),
      description: t("benefits.connected.description"),
    },
    {
      title: t("benefits.engaging.title"),
      description: t("benefits.engaging.description"),
    },
  ];

  return (
    <main className="relative">
      <div className="mb-5 flex flex-col gap-10 px-3 py-2">
        <span className="relative">
          <HeroElement />
        </span>

        <p className="relative mx-auto w-full max-w-7xl px-5 text-body text-gray-headline sm:text-headline">
          {t("mainDescription")}
        </p>

        {/* Benefit Cards Grid */}
        <section className="relative mx-auto w-full max-w-7xl items-center justify-center px-5">
          <span className="grid w-fit grid-rows-1 justify-center gap-5 sm:grid-cols-2 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <GlassCard
                key={index}
                heading={benefit.title}
                text={benefit.description}
              />
            ))}
          </span>
        </section>
      </div>
    </main>
  );
};

export default Home;
