import React from "react";

const GlassCard = ({ heading, text }) => {
  return (
    <div className="flex h-full w-80 flex-col gap-3 rounded-[25px] border border-gray-outline bg-gray-outline bg-opacity-10 p-4">
      <h3 className="text-headline text-gray-headline">{heading}</h3>
      <p className="text-body text-gray-body">{text}</p>
    </div>
  );
};

export default GlassCard;
