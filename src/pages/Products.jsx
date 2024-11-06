import React from "react";
import GlassCard from "../components/cards/GlassCard";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const components = [
    {
      title: "edConnect Admin Panel",
      description:
        "The Admin Panel is your intuitive management and administration panel. You can administer all your modules from here. You will be able to send push notifications directly to your users' phones, edit and publish articles, events, and much more. The Admin Panel will be accessible online either from your own domain or with a custom subdomain assigned by us, such as admin-yourname.printinprogress.net. Experience the power of efficient management with the edConnect Admin Panel.",
    },
    {
      title: "edConnect Mobile",
      description:
        "edConnect Mobile allows your students, employees or teachers to access all the content you publish and utilize all other modules on the go. The app is available for download on the App and Play Store for all your users.",
    },
    {
      title: "edConnect Web",
      description:
        "The web version of edConnect Mobile. Your users will be able to access the same information as on edConnect Mobile from any device using your custom domain or a custom subdomain assigned by us, such as yourname.printinprogress.net.",
    },
  ];

  // Placeholder for Modules
  const modules = [
    {
      title: "User Management",
      description:
        "Core module for managing user accounts, roles, and permissions across the platform.",
    },
    {
      title: "Push Notifications",
      description:
        "Send instant updates and notifications to all users through mobile and web platforms",
    },
  ];

  return (
    <div className="mb-5 mt-5 flex flex-col gap-10 px-3 py-2">
      {/* Components Overview Section */}
      <section className="mx-auto w-full max-w-7xl px-10">
        <h1 className="mb-6 text-display-md text-gray-display">
          Components Overview
        </h1>
        <p className="mb-8 text-body text-gray-headline sm:text-headline">
          The edConnect System consists of 3 key components. NewsApp Web,
          edConnect Mobile, and edConnect Admin Panel. You can choose your own
          colors and design. The basic plan includes 4 Modules of your choosing
          and the User Management and Push Notifications Module. We offer a
          variety of specialized packages for educational institutions.
        </p>

        {/* Components Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {components.map((component, index) => (
            <GlassCard
              key={index}
              heading={component.title}
              text={component.description}
            />
          ))}
        </div>
      </section>

      {/* Modules Section */}
      <section className="mx-auto w-full max-w-7xl px-10">
        <h2 className="mb-6 text-display-md text-gray-display">
          Modules Overview
        </h2>

        {/* Modules Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <GlassCard
              key={index}
              heading={module.title}
              text={module.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
