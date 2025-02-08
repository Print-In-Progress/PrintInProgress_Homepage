// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    common: await import("./locales/en/common.json").then((m) => m.default),
    home: await import("./locales/en/home.json").then((m) => m.default),
    products: await import("./locales/en/products.json").then((m) => m.default),
    pricing: await import("./locales/en/pricing.json").then((m) => m.default),
    contact: await import("./locales/en/contact.json").then((m) => m.default),
    documentation: await import("./locales/en/documentation.json").then(
      (m) => m.default,
    ),
    whyedconnect: await import("./locales/en/whyedconnect.json").then((m) => m.default),
  },
  de: {
    common: await import("./locales/de/common.json").then((m) => m.default),
    home: await import("./locales/de/home.json").then((m) => m.default),
    products: await import("./locales/de/products.json").then((m) => m.default),
    pricing: await import("./locales/de/pricing.json").then((m) => m.default),
    contact: await import("./locales/de/contact.json").then((m) => m.default),
    documentation: await import("./locales/de/documentation.json").then(
      (m) => m.default,
    ),
    whyedconnect: await import("./locales/de/whyedconnect.json").then((m) => m.default),
  },
};

// Define available namespaces
const AVAILABLE_NAMESPACES = [
  "common",
  "home",
  "products",
  "pricing",
  "contact",
  "documentation",
  "whyedconnect",
];

// Define supported languages
const SUPPORTED_LANGUAGES = ["en", "de"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES,
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    ns: AVAILABLE_NAMESPACES,
    defaultNS: "common",
    load: "languageOnly",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
