import React from "react";

const LegalPageLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="mb-5 mt-5 flex min-h-screen flex-col px-3 py-2">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="mb-6 text-display-md text-gray-display">{title}</h1>
        <p className="mb-8 text-body text-gray-body">
          Last updated: {lastUpdated}
        </p>
        <div className="flex flex-col gap-8">{children}</div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
