export const navigationLinks = [
  {
    title: "Products",
    isDropdown: false,
    path: "/products",
  },
  {
    title: "Pricing",
    isDropdown: false,
    path: "/pricing",
  },
  {
    title: "Why edConnect?",
    isDropdown: true,
    options: [
      {
        title: "Additional Services & Consultancy",
        path: "/services",
      },
      {
        title: "Privacy",
        path: "/privacy",
      },
    ],
  },
  {
    title: "Contact Us",
    isDropdown: true,
    options: [
      {
        title: "Get in touch",
        path: "/contact",
      },
      {
        title: "Support Portal",
        path: "/support",
      },
      {
        title: "Idea Portal",
        path: "/ideas",
      },
    ],
  },
  {
    title: "Documentation",
    isDropdown: false,
    path: "/documentation",
  },
];
