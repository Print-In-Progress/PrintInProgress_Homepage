import { useTranslation } from "react-i18next";

export const useHeaderLinks = () => {
  const { t } = useTranslation();
  return [
    {
      title: t("header.products"),
      isDropdown: false,
      path: "/products",
    },
    {
      title: t("header.pricing"),
      isDropdown: false,
      path: "/pricing",
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
      path: "/documentation",
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
