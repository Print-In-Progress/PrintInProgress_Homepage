import React from "react";

const PrimaryButton = ({ text, onClick, type, size }) => {
  let classNames =
    "w-fit rounded-full hover:opacity-85 active:opacity-70 transition-opacity duration-150 ";

  // Choose Button Type
  switch (type.toLowerCase()) {
    case "primary":
      classNames +=
        "bg-gradient-to-r text-gray-headline from-edconnect-blue to-primary ";
      break;
    case "secondary":
      classNames +=
        "text-gray-headline bg-[#565656] bg-opacity-10 border border-[#565656] border-opacity-20 bg-blend-color-burn ";
      break;
    case "outlined":
      classNames +=
        "text-primary bg-transparent border border-primary border-2 ";
      break;
    case "elevated":
      classNames +=
        "bg-gradient-to-r text-gray-headline from-primary to-secondary shadow-lg ";
      break;
    default:
      classNames +=
        "bg-gradient-to-r text-gray-headline from-edconnect-blue to-primary ";
      break;
  }

  // Choose Button Size
  switch (size.toLowerCase()) {
    case "sm":
      classNames += "px-7 py-3 text-lg font-bold";
      break;
    case "md":
      classNames += "px-8 py-4 text-xl font-bold";
      break;
    case "lg":
      classNames += "px-9 py-5 text-2xl font-bold";
      break;
    default:
      classNames += "px-7 py-3 text-lg font-bold";
      break;
  }

  return (
    <button onClick={onClick} className={classNames}>
      {text}
      <p className="shadow-black"></p>
    </button>
  );
};

export default PrimaryButton;
