export const useFeatureGroup1 = () => {
  return [
    {
      title: "Feature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Feature 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Feature 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];
};

export const useFeatureGroup2 = () => {
  return [
    {
      title: "Category 1",
      description: "Main description text goes here.",
      list: ["Feature point 1", "Feature point 2", "Feature point 3"],
    },
    {
      title: "Category 2",
      description: "Main description text goes here.",
      list: ["Feature point 1", "Feature point 2", "Feature point 3"],
    },
  ];
};
