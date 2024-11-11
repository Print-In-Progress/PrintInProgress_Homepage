export const headerLinks = [
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

export const footerLinks = [
  {
    title: "Terms Of Service",
    path: "/terms-of-service",
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    title: "Legal Notice",
    path: "/legal-notice",
  },
];
