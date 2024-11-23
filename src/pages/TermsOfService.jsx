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
      {
        <section className="flex flex-col gap-3">
          <h2 className="text-display-sm text-gray-headline">
            {termsConfig.introduction.title}
          </h2>
          {termsConfig.introduction.content.map((part, index) => (
            <p key={index} className="text-body text-gray-body">
              {part}
            </p>
          ))}
        </section>
      }
      {termsConfig.mainPart.map((part, index) => (
        <section key={part.id} className="flex flex-col gap-3">
          <h2 className="text-display-sm text-gray-headline">
            {index + 1}. {part.title}
          </h2>

          {part.sections.map((section) => (
            <span key={section.id} className="flex flex-col gap-2">
              <h3 className="text-headline text-gray-headline"></h3>

              {section.content.map((cont, index) => (
                <span key={section.id + index}>
                  {cont.type == "normal" && (
                    <p className="text-body text-gray-body">{cont.text}</p>
                  )}

                  {cont.type == "bullet" && (
                    <ul className="flex list-disc flex-col pl-6 text-body text-gray-body">
                      {cont.points.map((point, index) => (
                        <li key={index + section.id}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {cont.type == "contact" && (
                    <span className="flex list-disc flex-col text-body font-bold text-gray-display">
                      {cont.info.map((point, index) => (
                        <p key={index + section.id}>{point}</p>
                      ))}
                    </span>
                  )}
                </span>
              ))}
            </span>
          ))}
        </section>
      ))}
    </LegalPageLayout>
  );
};

export default TermsOfService;
