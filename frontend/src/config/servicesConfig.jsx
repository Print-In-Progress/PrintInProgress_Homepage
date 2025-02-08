import { useTranslation } from "react-i18next";

export const useAdditionalServices = () => {
  const { t } = useTranslation("whyedconnect");

  return [
    {
      title: t("servicesOverview.components.additionalServices.flexibleHosting.title"),
      description:
        t("servicesOverview.components.additionalServices.flexibleHosting.description"),
    },
    {
      title: t("servicesOverview.components.additionalServices.onboarding.title"),
      description:
        t("servicesOverview.components.additionalServices.onboarding.description"),
    },
    {
      title: t("servicesOverview.components.additionalServices.strategicConsultancy.title"),
      description:
        t("servicesOverview.components.additionalServices.strategicConsultancy.description"),
    },
    {
      title: t("servicesOverview.components.additionalServices.useCaseDemo.title"),
      description:
        t("servicesOverview.components.additionalServices.useCaseDemo.description"),
    },
  ];
};

export const useAdvancedCustomization = () => {
  const { t } = useTranslation("whyedconnect");

  return [
    {
      title: t("servicesOverview.components.advancedCustomization.customModules.title"),
      description:
        t("servicesOverview.components.advancedCustomization.customModules.description"),
    },
    {
      title: t("servicesOverview.components.advancedCustomization.completeCustomSystems.title"),
      description:
        t("servicesOverview.components.advancedCustomization.completeCustomSystems.description"),
    },
  ];
};