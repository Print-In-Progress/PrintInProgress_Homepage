import React from "react";

const ComponentsOverviewList = ({
    features,
}) => {
    return (
        <div className="mb-8">
            <ul className="space-y-4">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="flex items-center text-body text-gray-headline sm:text-headline"
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

    );
};

export default ComponentsOverviewList;
