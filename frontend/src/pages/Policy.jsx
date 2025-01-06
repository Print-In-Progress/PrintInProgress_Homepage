import React from "react";
import LegalPageLayout from "../layouts/LegalPageLayout";
import { usePrivacyConfig } from "../config/legal/privacyConfig";

const Policy = () => {
  const privacyConfig = usePrivacyConfig();

  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated={privacyConfig.lastUpdated}
    >
      {/* Maps over all items from the config file */}
      {privacyConfig.sections.map((section) => (
        <section key={section.id}>
          <h2 className="mb-4 text-headline text-gray-display">
            {section.title}
          </h2>

          {/* Maps over subsections from the config if needed */}
          {section.subsections ? (
            section.subsections.map((subsection, index) => (
              <div key={index} className="mb-4">
                <h3 className="mb-2 text-body font-semibold text-gray-display">
                  {subsection.title}
                </h3>
                <p className="text-body text-gray-body">{subsection.content}</p>
              </div>
            ))
          ) : section.bulletPoints ? (
            <ul className="list-disc pl-6 text-body text-gray-body">
              {section.bulletPoints.map((point, index) => (
                <li key={index} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-body text-gray-body">{section.content}</p>
          )}
        </section>
      ))}
    </LegalPageLayout>
  );
};

export default Policy;
