import { useTranslation } from "react-i18next";

export const useHeaderLinks = () => {
  const { t } = useTranslation();

  // No translation for edConnect and medConnect as its the product name

  return [
    {
      title: t("header.products"),
      isDropdown: true,
      options: [
        {
          title: "edConnect",
          path: "/products/ed-connect",
        },
      ],
    },
    {
      title: t("header.pricing"),
      isDropdown: true,
      options: [
        {
          title: "edConnect",
          path: "/pricing/ed-connect",
        },
      ],
    },
    {
      title: t("header.whyEdConnect"),
      isDropdown: true,
      options: [
        {
          title: t("header.services"),
          path: "/services",
        },
        {
          title: t("header.privacy"),
          path: "/privacy",
        },
      ],
    },
    {
      title: t("header.contactUs"),
      isDropdown: true,
      options: [
        {
          title: t("header.getInTouch"),
          path: "/contact/general",
        },
        {
          title: t("header.supportPortal"),
          path: "/contact/support",
        },
        {
          title: t("header.ideaPortal"),
          path: "/contact/ideas",
        },
      ],
    },
    {
      title: t("header.documentation"),
      isDropdown: false,
      path: "/documentation/intro",
    },
  ];
};

export const useFooterLinks = () => {
  const { t } = useTranslation();
  return [
    {
      title: t("footer.termsOfService"),
      path: "/terms-of-service",
    },
    {
      title: t("footer.privacyPolicy"),
      path: "/privacy-policy",
    },
    {
      title: t("footer.legalNotice"),
      path: "/legal-notice",
    },
  ];
};
