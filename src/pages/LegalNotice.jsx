import React from "react";
import LegalPageLayout from "../layouts/LegalPageLayout";
import { legalNoticeConfig } from "../config/legal/legalNoticeConfig";

const LegalNotice = () => {
  return (
    <LegalPageLayout
      title="Legal Notice"
      lastUpdated={legalNoticeConfig.lastUpdated}
    >
      {legalNoticeConfig.sections.map((section) => (
        <section key={section.id}>
          <h2 className="mb-4 text-headline text-gray-display">
            {section.title}
          </h2>
          {Array.isArray(section.content) ? (
            <div className="text-body text-gray-body">
              {section.content.map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-body text-gray-body">{section.content}</p>
          )}
        </section>
      ))}
    </LegalPageLayout>
  );
};

export default LegalNotice;
