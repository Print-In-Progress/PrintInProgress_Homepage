import { useTranslation } from "react-i18next";

export const useSections = () => {
  const { t } = useTranslation("documentation");
  return [
    {
      title: t("sections.gettingStarted.title"),
      items: [
        {
          title: t("sections.gettingStarted.items.intro.title"),
          path: "intro",
        },
        {
          title: t("sections.gettingStarted.items.quickstart.title"),
          path: "quickstart",
        },
        {
          title: t("sections.gettingStarted.items.installation.title"),
          path: "installation",
        },
      ],
    },
    {
      title: t("sections.components.title"),
      items: [
        {
          title: t("sections.components.items.adminPanel.title"),
          path: "admin-panel",
        },
        {
          title: t("sections.components.items.mobileApp.title"),
          path: "mobile-app",
        },
        {
          title: t("sections.components.items.webInterface.title"),
          path: "web-interface",
        },
      ],
    },
    {
      title: t("sections.modules.title"),
      items: [
        {
          title: t("sections.modules.items.newspaper.title"),
          path: "newspaper",
        },
        {
          title: t("sections.modules.items.events.title"),
          path: "events",
        },
        {
          title: t("sections.modules.items.notifications.title"),
          path: "notifications",
        },
        {
          title: t("sections.modules.items.userManagement.title"),
          path: "user-management",
        },
        {
          title: t("sections.modules.items.surveys.title"),
          path: "surveys",
        },
      ],
    },
  ];
};

export const useDocumentationContent = () => {
  const { t } = useTranslation("documentation");
  return {
    intro: {
      section: t("sections.gettingStarted.title"),
      title: t("sections.gettingStarted.items.intro.title"),
      content: t("sections.gettingStarted.items.intro.content"),
    },
    quickstart: {
      section: t("sections.gettingStarted.title"),
      title: t("sections.gettingStarted.items.quickstart.title"),
      content: t("sections.gettingStarted.items.quickstart.content"),
    },
    installation: {
      section: t("sections.gettingStarted.title"),
      title: t("sections.gettingStarted.items.installation.title"),
      content: t("sections.gettingStarted.items.installation.content"),
    },
    "admin-panel": {
      section: t("sections.components.title"),
      title: t("sections.components.items.adminPanel.title"),
      content: t("sections.components.items.adminPanel.content"),
    },
    "mobile-app": {
      section: t("sections.components.title"),
      title: t("sections.components.items.mobileApp.title"),
      content: t("sections.components.items.mobileApp.content"),
    },
    "web-interface": {
      section: t("sections.components.title"),
      title: t("sections.components.items.webInterface.title"),
      content: t("sections.components.items.webInterface.content"),
    },
    newspaper: {
      section: t("sections.modules.title"),
      title: t("sections.modules.items.newspaper.title"),
      content: t("sections.modules.items.newspaper.content"),
    },
    events: {
      section: t("sections.modules.title"),
      title: t("sections.modules.items.events.title"),
      content: t("sections.modules.items.events.content"),
    },
    notifications: {
      section: t("sections.modules.title"),
      title: t("sections.modules.items.notifications.title"),
      content: t("sections.modules.items.notifications.content"),
    },
    "user-management": {
      section: t("sections.modules.title"),
      title: t("sections.modules.items.userManagement.title"),
      content: t("sections.modules.items.userManagement.content"),
    },
    surveys: {
      section: t("sections.modules.title"),
      title: t("sections.modules.items.surveys.title"),
      content: t("sections.modules.items.surveys.content"),
    },
  };
};
