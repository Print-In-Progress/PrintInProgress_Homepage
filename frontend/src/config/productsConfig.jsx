import { useTranslation } from "react-i18next";
import DigitalClassRegisterImage from "../assets/DigitalClassRegisterImage.webp";
import DigitalLibraryImage from "../assets/DigitalLibraryImage.webp";
import EdAIImage from "../assets/EdAIImage.webp";
import EventsImage from "../assets/EventsImage.webp";
import ExtracurricularManagementImage from "../assets/ExtracurricularManagementImage.webp";
import LearnLabImage from "../assets/LearnLabImage.webp";
import MessagingImage from "../assets/MessagingImage.webp";
import NewspaperImage from "../assets/NewspaperImage.webp";
import OtherFeaturesImage from "../assets/OtherFeaturesImage.webp";
import PushNotificationsImage from "../assets/PushNotificationsImage.webp";
import SortingImage from "../assets/SortingImage.webp";
import SurveysImage from "../assets/SurveysImage.webp";
import UserManagementImage from "../assets/UserManagementImage.webp";
import ParentConnectImage from "../assets/ParentConnectImage.webp";
import EdConnectAdminPanelImage from "../assets/EdConnectAdminPanelImage.webp";
import EdConnectMobileImage from "../assets/EdConnectMobileImage.webp";
import EdConnectWebImage from "../assets/EdConnectWebImage.webp";

export const useComponents = () => {
  const { t } = useTranslation("products");
  return [
    {
      id: "admin-panel",
      title: t("componentsOverview.components.adminPanel.title"),
      description: t("componentsOverview.components.adminPanel.description"),
      imageUrl: EdConnectAdminPanelImage,
    },
    {
      id: "edconnect-mobile",
      title: t("componentsOverview.components.mobile.title"),
      description: t("componentsOverview.components.mobile.description"),
      imageUrl: EdConnectMobileImage,
    },
    {
      id: "edconnect-web",
      title: t("componentsOverview.components.web.title"),
      description: t("componentsOverview.components.web.description"),
      imageUrl: EdConnectWebImage,
    },
  ];
};

export const useModules = () => {
  const { t } = useTranslation("products");
  return [
    {
      title: t("modulesOverview.categories.corePlatform.title"),
      description: t("modulesOverview.categories.corePlatform.description"),
      modules: [
        {
          id: "user-management",
          title: t("modules.userManagement.title"),
          status: t("status.done"),
          imageUrl: UserManagementImage,
          description: [
            {
              key: t(
                "modules.userManagement.features.roleBasedPermissions.key",
              ),
              details: t(
                "modules.userManagement.features.roleBasedPermissions.details",
              ),
            },
            {
              key: t("modules.userManagement.features.profileManagement.key"),
              details: t(
                "modules.userManagement.features.profileManagement.details",
              ),
            },
            {
              key: t("modules.userManagement.features.customUserGroups.key"),
              details: t(
                "modules.userManagement.features.customUserGroups.details",
              ),
            },
            {
              key: t("modules.userManagement.features.activityLog.key"),
              details: t("modules.userManagement.features.activityLog.details"),
            },
          ],
        },
        {
          id: "push-notifications",
          title: t("modules.pushNotifications.title"),
          status: t("status.done"),
          imageUrl: PushNotificationsImage,
          description: [
            {
              key: t(
                "modules.pushNotifications.features.instantNotifications.key",
              ),
              details: t(
                "modules.pushNotifications.features.instantNotifications.details",
              ),
            },
            {
              key: t(
                "modules.pushNotifications.features.audienceSegmentation.key",
              ),
              details: t(
                "modules.pushNotifications.features.audienceSegmentation.details",
              ),
            },
          ],
        },
        {
          id: "other-features",
          title: t("modules.otherFeatures.title"),
          status: t("status.done"),
          imageUrl: OtherFeaturesImage,
          description: [
            {
              key: t("modules.otherFeatures.features.customRegistration.key"),
              details: t(
                "modules.otherFeatures.features.customRegistration.details",
              ),
            },
            {
              key: t("modules.otherFeatures.features.colorSchemes.key"),
              details: t("modules.otherFeatures.features.colorSchemes.details"),
            },
          ],
        },
      ],
    },
    {
      title: t("modulesOverview.categories.communicationCollaboration.title"),
      description: t(
        "modulesOverview.categories.communicationCollaboration.description",
      ),
      modules: [
        {
          id: "newspaper",
          title: t("modules.newspaper.title"),
          status: t("status.done"),
          imageUrl: NewspaperImage,
          description: [
            {
              key: t("modules.newspaper.features.digitalBlog.key"),
              details: t("modules.newspaper.features.digitalBlog.details"),
            },
            {
              key: t("modules.newspaper.features.multimediaSupport.key"),
              details: t(
                "modules.newspaper.features.multimediaSupport.details",
              ),
            },
            {
              key: t("modules.newspaper.features.articleManagement.key"),
              details: t(
                "modules.newspaper.features.articleManagement.details",
              ),
            },
            {
              key: t("modules.newspaper.features.userEngagement.key"),
              details: t("modules.newspaper.features.userEngagement.details"),
            },
            {
              key: t("modules.newspaper.features.userPermissions.key"),
              details: t("modules.newspaper.features.userPermissions.details"),
            },
          ],
        },
        {
          id: "messaging",
          title: t("modules.messaging.title"),
          status: t("status.inProgress"),
          imageUrl: MessagingImage,
          description: [
            {
              key: t("modules.messaging.features.groupChats.key"),
              details: t("modules.messaging.features.groupChats.details"),
            },
            {
              key: t("modules.messaging.features.fileSharing.key"),
              details: t("modules.messaging.features.fileSharing.details"),
            },
            {
              key: t("modules.messaging.features.mediaSharing.key"),
              details: t("modules.messaging.features.mediaSharing.details"),
            },
            {
              key: t("modules.messaging.features.encryption.key"),
              details: t("modules.messaging.features.encryption.details"),
            },
          ],
        },
        {
          id: "parent-teacher",
          title: t("modules.parentTeacher.title"),
          status: t("status.planned"),
          imageUrl: ParentConnectImage,
          description: [
            {
              key: t("modules.parentTeacher.features.directMessaging.key"),
              details: t(
                "modules.parentTeacher.features.directMessaging.details",
              ),
            },
            {
              key: t("modules.parentTeacher.features.progressReports.key"),
              details: t(
                "modules.parentTeacher.features.progressReports.details",
              ),
            },
            {
              key: t("modules.parentTeacher.features.meetingScheduler.key"),
              details: t(
                "modules.parentTeacher.features.meetingScheduler.details",
              ),
            },
          ],
        },
      ],
    },
    {
      title: t("modulesOverview.categories.learningEducation.title"),
      description: t(
        "modulesOverview.categories.learningEducation.description",
      ),
      modules: [
        {
          id: "digitalLibrary",
          title: t("modules.digitalLibrary.title"),
          status: t("status.inProgress"),
          imageUrl: DigitalLibraryImage,
          description: [
            {
              key: t("modules.digitalLibrary.features.documentStorage.key"),
              details: t(
                "modules.digitalLibrary.features.documentStorage.details",
              ),
            },
            {
              key: t("modules.digitalLibrary.features.accessPermissions.key"),
              details: t(
                "modules.digitalLibrary.features.accessPermissions.details",
              ),
            },
            {
              key: t("modules.digitalLibrary.features.multimediaStorage.key"),
              details: t(
                "modules.digitalLibrary.features.multimediaStorage.details",
              ),
            },
            {
              key: t("modules.digitalLibrary.features.aiAssignments.key"),
              details: t(
                "modules.digitalLibrary.features.aiAssignments.details",
              ),
            },
            {
              key: t("modules.digitalLibrary.features.prebuiltLibraries.key"),
              details: t(
                "modules.digitalLibrary.features.prebuiltLibraries.details",
              ),
            },
          ],
        },
        {
          id: "collaborative-learning",
          title: t("modules.collaborativeLearning.title"),
          status: t("status.planned"),
          imageUrl: LearnLabImage,
          description: [
            {
              key: t(
                "modules.collaborativeLearning.features.assignmentDistribution.key",
              ),
              details: t(
                "modules.collaborativeLearning.features.assignmentDistribution.details",
              ),
            },
            {
              key: t("modules.collaborativeLearning.features.fileUpload.key"),
              details: t(
                "modules.collaborativeLearning.features.fileUpload.details",
              ),
            },
            {
              key: t(
                "modules.collaborativeLearning.features.realTimeCollaboration.key",
              ),
              details: t(
                "modules.collaborativeLearning.features.realTimeCollaboration.details",
              ),
            },
            {
              key: t("modules.collaborativeLearning.features.grading.key"),
              details: t(
                "modules.collaborativeLearning.features.grading.details",
              ),
            },
            {
              key: t(
                "modules.collaborativeLearning.features.discussionBoards.key",
              ),
              details: t(
                "modules.collaborativeLearning.features.discussionBoards.details",
              ),
            },
            {
              key: t("modules.collaborativeLearning.features.peerReview.key"),
              details: t(
                "modules.collaborativeLearning.features.peerReview.details",
              ),
            },
            {
              key: t(
                "modules.collaborativeLearning.features.pollsAndSurveys.key",
              ),
              details: t(
                "modules.collaborativeLearning.features.pollsAndSurveys.details",
              ),
            },
          ],
        },
        {
          id: "educational-ai",
          title: t("modules.educationalAi.title"),
          status: t("status.planned"),
          imageUrl: EdAIImage,
          description: [
            {
              key: t("modules.educationalAi.features.plagiarismDetection.key"),
              details: t(
                "modules.educationalAi.features.plagiarismDetection.details",
              ),
            },
            {
              key: t("modules.educationalAi.features.feedbackGeneration.key"),
              details: t(
                "modules.educationalAi.features.feedbackGeneration.details",
              ),
            },
            {
              key: t("modules.educationalAi.features.automatedGrading.key"),
              details: t(
                "modules.educationalAi.features.automatedGrading.details",
              ),
            },
          ],
        },
      ],
    },
    {
      title: t("modulesOverview.categories.eventActivity.title"),
      description: t("modulesOverview.categories.eventActivity.description"),
      modules: [
        {
          id: "events",
          title: t("modules.events.title"),
          status: t("status.done"),
          imageUrl: EventsImage,
          description: [
            {
              key: t("modules.events.features.eventCreation.key"),
              details: t("modules.events.features.eventCreation.details"),
            },
            {
              key: t("modules.events.features.rsvpTracking.key"),
              details: t("modules.events.features.rsvpTracking.details"),
            },
            {
              key: t("modules.events.features.eventCategorization.key"),
              details: t("modules.events.features.eventCategorization.details"),
            },
          ],
        },
        {
          id: "extracurricular",
          title: t("modules.extracurricular.title"),
          status: t("status.planned"),
          imageUrl: ExtracurricularManagementImage,
          description: [
            {
              key: t("modules.extracurricular.features.clubForums.key"),
              details: t("modules.extracurricular.features.clubForums.details"),
            },
            {
              key: t("modules.extracurricular.features.documentCreation.key"),
              details: t(
                "modules.extracurricular.features.documentCreation.details",
              ),
            },
            {
              key: t(
                "modules.extracurricular.features.activityRegistration.key",
              ),
              details: t(
                "modules.extracurricular.features.activityRegistration.details",
              ),
            },
            {
              key: t("modules.extracurricular.features.attendanceTracking.key"),
              details: t(
                "modules.extracurricular.features.attendanceTracking.details",
              ),
            },
          ],
        },
        {
          id: "sorting",
          title: t("modules.sorting.title"),
          status: t("status.done"),
          imageUrl: SortingImage,
          description: [
            {
              key: t("modules.sorting.features.classAssignment.key"),
              details: t("modules.sorting.features.classAssignment.details"),
            },
            {
              key: t("modules.sorting.features.groupCreation.key"),
              details: t("modules.sorting.features.groupCreation.details"),
            },
            {
              key: t("modules.sorting.features.criteriaInput.key"),
              details: t("modules.sorting.features.criteriaInput.details"),
            },
            {
              key: t("modules.sorting.features.preferenceMatching.key"),
              details: t("modules.sorting.features.preferenceMatching.details"),
            },
            {
              key: t("modules.sorting.features.manualOverrides.key"),
              details: t("modules.sorting.features.manualOverrides.details"),
            },
          ],
        },
      ],
    },
    {
      title: t("modulesOverview.categories.assessmentTracking.title"),
      description: t(
        "modulesOverview.categories.assessmentTracking.description",
      ),
      modules: [
        {
          id: "surveys",
          title: t("modules.surveys.title"),
          status: t("status.done"),
          imageUrl: SurveysImage,
          description: [
            {
              key: t("modules.surveys.features.surveyBuilder.key"),
              details: t("modules.surveys.features.surveyBuilder.details"),
            },
            {
              key: t("modules.surveys.features.responseAnalytics.key"),
              details: t("modules.surveys.features.responseAnalytics.details"),
            },
            {
              key: t("modules.surveys.features.targetedDistribution.key"),
              details: t(
                "modules.surveys.features.targetedDistribution.details",
              ),
            },
          ],
        },
        {
          id: "digital-class-register",
          title: t("modules.digitalClassRegister.title"),
          status: t("status.planned"),
          imageUrl: DigitalClassRegisterImage,
          description: [
            {
              key: t(
                "modules.digitalClassRegister.features.attendanceTracking.key",
              ),
              details: t(
                "modules.digitalClassRegister.features.attendanceTracking.details",
              ),
            },
            {
              key: t(
                "modules.digitalClassRegister.features.absenceManagement.key",
              ),
              details: t(
                "modules.digitalClassRegister.features.absenceManagement.details",
              ),
            },
            {
              key: t("modules.digitalClassRegister.features.digitalNotes.key"),
              details: t(
                "modules.digitalClassRegister.features.digitalNotes.details",
              ),
            },
            {
              key: t(
                "modules.digitalClassRegister.features.homeworkTracking.key",
              ),
              details: t(
                "modules.digitalClassRegister.features.homeworkTracking.details",
              ),
            },
          ],
        },
      ],
    },
  ];
};
