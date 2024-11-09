import React from "react";
import PlaceholerImage from "../assets/PlaceholderImage.png";
import ImageWithFallback from "./ImageWithFallback";

const GlassCard = ({ heading, text, imageUrl }) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[25px] border border-gray-outline bg-gray-outline bg-opacity-10">
      {imageUrl && (
        <div className="h-48 w-full overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            className="h-full w-full object-cover"
            fallbackSrc={PlaceholerImage}
          />
        </div>
      )}
      <span className="flex flex-col gap-3 p-4">
        <h3 className="text-headline text-gray-headline">{heading}</h3>
        <p className="text-body text-gray-body">{text}</p>
      </span>
    </div>
  );
};

export default GlassCard;
