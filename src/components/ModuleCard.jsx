import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";
import PlaceholderImage from "../assets/PlaceholderImage.png";

const ModuleCard = ({ title, descriptions, imageUrl, status }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isExpanded &&
        contentRef.current &&
        buttonRef.current &&
        !contentRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div className="relative">
      <div className="relative flex h-full w-full flex-col rounded-[25px] border border-gray-outline bg-gray-outline bg-opacity-10">
        {/* Status Badge */}
        <div className="absolute right-4 top-4 z-10">
          <span
            className={`rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-md ${status === t("status.done")
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
        <div className="relative h-48 w-full overflow-hidden rounded-t-[25px]">
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

        {/* Button Section with Expanded Content */}
        <div className="relative mt-auto p-4 overflow-visible">
          <button
            ref={buttonRef}
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-gray-display transition-colors hover:bg-primary/90"
          >
            {isExpanded ? t("buttons.hide_details") : t("buttons.show_details")}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                ref={contentRef}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute z-50 w-full rounded-[25px] border border-gray-outline bg-navbar-bg bg-opacity-95 backdrop-blur-lg"
                style={{
                  bottom: '100%',
                  left: 0,
                  right: 0
                }}
              >
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-headline">{title}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(false);
                      }}
                      className="rounded-full p-1 hover:bg-gray-outline/20"
                    >
                      <span className="text-gray-body text-xl">×</span>
                    </button>
                  </div>
                  {descriptions.map((desc, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <h4 className="font-semibold text-gray-headline">
                        {desc.key}
                      </h4>
                      <p className="text-sm text-gray-body">{desc.details}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
