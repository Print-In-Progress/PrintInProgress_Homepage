import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";
import PlaceholderImage from "../assets/PlaceholderImage.png";

const ModuleCard = ({ title, descriptions, imageUrl, status }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative h-full">
      {/* Main Card */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[25px] border border-gray-outline bg-gray-outline bg-opacity-10">
        {/* Status Badge */}
        <div className="absolute right-4 top-4 z-10">
          <span
            className={`rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-md ${
              status === "Done"
                ? "border-green-500/50 bg-green-500/10 text-green-400"
                : status === "In Progress"
                  ? "border-yellow-500/50 bg-yellow-500/10 text-yellow-400"
                  : "border-blue-500/50 bg-blue-500/10 text-blue-400"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            fallbackSrc={PlaceholderImage}
            className="h-full w-full object-cover"
            alt={title}
          />
        </div>

        {/* Title Section */}
        <div className="flex flex-col p-4">
          <h3 className="text-headline font-bold text-gray-headline">
            {title}
          </h3>
        </div>

        {/* Expand Button */}
        <div className="mt-auto p-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-gray-display transition-colors hover:bg-primary/90"
          >
            {isExpanded ? "Hide Details" : "Show Details"}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full z-50 mt-2 w-full"
          >
            <div className="rounded-[25px] border border-gray-outline bg-navbar-bg bg-opacity-95 backdrop-blur-lg">
              <div className="flex flex-col gap-4 p-6">
                {descriptions.map((desc, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <h4 className="font-semibold text-gray-headline">
                      {desc.key}
                    </h4>
                    <p className="text-sm text-gray-body">{desc.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModuleCard;
