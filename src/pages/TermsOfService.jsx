import React from "react";
import LegalPageLayout from "../layouts/LegalPageLayout";
import { useTermsConfig } from "../config/legal/termsConfig";

const TermsOfService = () => {
  const termsConfig = useTermsConfig();

  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated={termsConfig.lastUpdated}
    >
      {termsConfig.sections.map((section) => (
        <section key={section.id}>
          <h2 className="mb-4 text-headline text-gray-display">
            {section.title}
          </h2>
          <p className="text-body text-gray-body">{section.content}</p>
          {section.bulletPoints && (
            <ul className="mt-4 list-disc pl-6 text-body text-gray-body">
              {section.bulletPoints.map((point, index) => (
                <li key={index} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </LegalPageLayout>
  );
};

export default TermsOfService;
