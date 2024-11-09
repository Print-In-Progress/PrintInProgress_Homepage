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
        path: "/contact/general",
      },
      {
        title: "Support Portal",
        path: "/contact/support",
      },
      {
        title: "Idea Portal",
        path: "/contact/ideas",
      },
    ],
  },
  {
    title: "Documentation",
    isDropdown: false,
    path: "/documentation",
  },
];
