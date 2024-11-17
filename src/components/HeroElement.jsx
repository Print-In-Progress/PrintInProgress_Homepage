import React from "react";
import { useTranslation } from "react-i18next";
import ReactRotatingText from "react-rotating-text";
import HeroImage from "../assets/HeroImage.png";

const HeroElement = () => {
  const { t } = useTranslation("home");

  return (
    <div className="relative mx-auto flex w-full max-w-screen-2xl items-start justify-center px-5">
      <section className="pointer-events-none absolute left-0 top-0 z-[1] flex w-fit flex-col text-5xl font-bold text-white sm:text-7xl">
        <span>{t("hero.connect")}</span>
        <span>{t("hero.your")}</span>
        <span className="pointer-events-auto">
          <ReactRotatingText
            items={[
              t("hero.rotatingWords.school"),
              t("hero.rotatingWords.organization"),
              t("hero.rotatingWords.university"),
            ]}
            pause={2000}
            typingInterval={100}
            deletingInterval={100}
          />
        </span>
      </section>
      <img
        src={HeroImage}
        alt="Product"
        className="pointer-events-none max-h-screen"
      />
    </div>
  );
};

export default HeroElement;
