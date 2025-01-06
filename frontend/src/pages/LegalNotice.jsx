import React from "react";
import LegalPageLayout from "../layouts/LegalPageLayout";
import { useLegalNoticeConfig } from "../config/legal/legalNoticeConfig";

const LegalNotice = () => {
  const legalNoticeConfig = useLegalNoticeConfig();

  return (
    <LegalPageLayout title="Legal Notice">
      {/* Maps over all the items from the config file */}
      {legalNoticeConfig.sections.map((section) => (
        <section key={section.id} className="flex flex-col gap-4">
          {section.title && (
            <h2 className="text-headline text-gray-display">{section.title}</h2>
          )}

          {/* Maps over every item in one parent element if its an array */}
          {Array.isArray(section.content) ? (
            <div className="flex flex-col gap-2 text-body text-gray-body">
              {section.content.map((line, index) => (
                <p key={index}>{line}</p>
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
