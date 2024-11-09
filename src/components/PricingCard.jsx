import React from "react";

const PricingCard = ({
  title,
  price,
  priceDescription,
  features,
  buttonText = "Contact Sales",
  onButtonClick,
}) => {
  return (
    <div className="overflow-hidden rounded-[25px] border border-gray-outline border-opacity-20 bg-gray-outline bg-opacity-10 p-8">
      <div className="mb-6">
        <h2 className="text-display-sm text-gray-display">{title}</h2>
        <div className="mt-4 flex items-baseline">
          <span className="text-display-lg text-gray-display">{price}</span>
          <span className="ml-2 text-body text-gray-body">
            {priceDescription}
          </span>
        </div>
      </div>

      <div className="mb-8">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-body text-gray-body"
            >
              <svg
                className="mr-3 h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="primary-button px-8 py-3 text-body text-gray-small"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
