import React from "react";
import ReactRotatingText from "react-rotating-text";
import HeroImage from "../assets/HeroImage.webp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HeroElement = () => {
  const { t } = useTranslation("home");
  const navigate = useNavigate();

  return (
    <div className="rounded-[25px] bg-black bg-opacity-10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-display sm:text-5xl lg:text-6xl">
              <span className="block">Connecting</span>
              <span className="block">your</span>
              <ReactRotatingText
                items={["School", "Organization", "University", "Hospital"]}
                pause={2000}
                typingInterval={100}
                deletingInterval={100}
              />
            </h1>
            <p className="text-base text-gray-body sm:text-lg lg:text-xl">
              Transform your institution with our comprehensive digital
              solutions.
            </p>
            <button
              onClick={() => navigate("/products/ed-connect")}
              className="elevated-button mx-auto w-full max-w-xs px-4 py-2.5 font-semibold text-gray-display sm:px-6 sm:py-3 lg:mx-0"
            >
              {t("features")}
            </button>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={HeroImage}
              alt="Product"
              className="h-auto w-full max-w-2xl rounded-lg object-contain lg:max-h-[600]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroElement;
