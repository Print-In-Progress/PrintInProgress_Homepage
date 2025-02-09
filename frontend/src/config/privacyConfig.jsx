import { useTranslation } from "react-i18next";

export const useCompliance = () => {
  const { t } = useTranslation("whyedconnect");
  return [
    {
      title: t("privacy.components.compliance.encryption.title"),
      description: t("privacy.components.compliance.encryption.description"),
    },
    {
      title: t("privacy.components.compliance.gdpr.title"),
      description:
        t("privacy.components.compliance.gdpr.description"),
    },
    {
      title: t("privacy.components.compliance.dataLocation.title"),
      description:
        t("privacy.components.compliance.dataLocation.description"),
    },
  ];
};

export const useHostingAndEncryptionStandards = () => {
  const { t } = useTranslation("whyedconnect");


  const edconnectCloudFeatures = Object.values(
    t("privacy.components.hostingAndEncryption.edconnectCloud.features", {
      returnObjects: true,
    })
  );

  const selfHostedFeatures = Object.values(
    t("privacy.components.hostingAndEncryption.selfHosted.features", {
      returnObjects: true,
    })
  );


  return [
    {
      title: t("privacy.components.hostingAndEncryption.edconnectCloud.title"),
      description: t("privacy.components.hostingAndEncryption.edconnectCloud.description"),
      list: edconnectCloudFeatures,
    },
    {
      title: t("privacy.components.hostingAndEncryption.selfHosted.title"),
      description: t("privacy.components.hostingAndEncryption.selfHosted.description"),
      list: selfHostedFeatures,
    },
  ];
};

export const useAccessAndControl = () => {
  const { t } = useTranslation("whyedconnect");
  return [
    {
      title: t("privacy.components.accessControl.cardTitle"),
      description: t("privacy.components.accessControl.description"),
    },
  ];
};