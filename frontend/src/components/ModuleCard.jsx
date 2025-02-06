import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import FallbackImage from "../assets/PlaceholderImage.webp";

const ModulesCard = ({ title, content, imageUrl, status }) => {
  const { t } = useTranslation();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex h-fit w-full flex-col overflow-hidden rounded-[25px] border border-gray-outline bg-gray-outline bg-opacity-10">
      {/* Status Badge */}
      <div className="absolute right-4 top-4 z-10">
        <span
          className={`rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-md ${
            status === t("status.done")
              ? "border-green-500/50 bg-green-500/10 text-green-400"
              : status === t("status.in_progress")
                ? "border-yellow-500/50 bg-yellow-500/10 text-yellow-400"
                : "border-blue-500/50 bg-blue-500/10 text-blue-400"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Image Section */}
      <div className="relative w-full overflow-hidden pt-[56.25%]">
        <ImageWithFallback
          src={imageUrl}
          fallbackSrc={FallbackImage}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-4">
        <h3 className="text-headline font-bold text-gray-headline">{title}</h3>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 flex w-fit items-center gap-2 rounded-2xl bg-primary px-3 py-2 text-sm text-gray-display transition-colors hover:bg-primary/90"
        >
          {isExpanded ? "Hide Details" : "Show Details"}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2">
            {Array.isArray(content) ? (
              content.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <h4 className="text-body font-semibold text-gray-headline">
                    {item.key}
                  </h4>
                  <p className="text-body text-gray-caption">{item.details}</p>
                </div>
              ))
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesCard;
