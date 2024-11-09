import React from "react";

const HeaderSection = ({ type }) => {
  const formTitles = {
    general: "Get in Touch",
    support: "Support Portal",
    ideas: "Share Your Ideas",
  };

  const formDescriptions = {
    general: "Have a question about edConnect? We'd love to hear from you.",
    support: "Need technical assistance? Our support team is here to help.",
    ideas: "Share your ideas to help us improve edConnect.",
  };

  return (
    <div className="mb-8">
      <h1 className="mb-2 text-display-md text-gray-display">
        {formTitles[type]}
      </h1>
      <p className="text-body text-gray-body">{formDescriptions[type]}</p>
    </div>
  );
};

export default HeaderSection;
