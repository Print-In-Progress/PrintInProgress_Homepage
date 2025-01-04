import React from "react";
import PlaceholerImage from "../assets/PlaceholderImage.png";
import ImageWithFallback from "./ImageWithFallback";

const GlassCard = ({ heading, text, imageUrl, descriptions }) => {
  // GlassCard Component has multiple Options of which not all are required

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[25px] border border-gray-outline bg-gray-outline bg-opacity-10">
      {/* Renders the image if a link if given - has a fallback option if the link is not valid*/}
      {imageUrl && (
        <div className="h-48 w-full overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            className="h-full w-full object-cover"
            fallbackSrc={PlaceholerImage}
            alt={heading}
          />
        </div>
      )}

      {/* Renders either the heading and descriptions or the heading and one text */}
      <span className="flex flex-col gap-3 p-4">
        {descriptions ? (
          <>
            <h3 className="text-headline font-bold text-gray-headline underline">
              {heading}
            </h3>
            <div className="flex flex-col gap-2">
              {descriptions.map((desc, index) => (
                <p key={index} className="text-body text-gray-body">
                  <strong className="font-semibold text-gray-headline">
                    {desc.key}:{" "}
                  </strong>
                  {desc.details}
                </p>
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="text-headline text-gray-headline">{heading}</h3>
            <p className="text-body text-gray-body">{text}</p>
          </>
        )}
      </span>
    </div>
  );
};

export default GlassCard;
