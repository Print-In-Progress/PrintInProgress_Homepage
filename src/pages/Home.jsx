import React from "react";
import HeroElement from "../components/HeroElement";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/GlassCard.jsx";

const Home = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Intuitive",
      description:
        "Effortless to navigate and adaptable to your school's needs, edConnect minimizes setup time with smart automation. Spend less time on tech, and more time on what matters most— supporting students.",
    },
    {
      title: "Connected",
      description:
        "With a unified system for Extracurricular and learning management, edConnect empowers educators and students to access everything they need, saving time and reducing complexity.",
    },
    {
      title: "Engaging",
      description:
        "edConnect keeps students engaged and fosters school spirit.",
    },
  ];

  return (
    <main className="relative">
      <div className="mb-5 flex flex-col gap-10 px-3 py-2">
        <span className="relative">
          <HeroElement />
        </span>

        <span className="relative flex w-full flex-row justify-center">
          <button
            onClick={() => navigate("/products")}
            className="elevated-button px-7 py-5 text-headline font-bold text-gray-small sm:text-display-sm"
          >
            edConnect Features
          </button>
        </span>

        <p className="relative mx-auto w-full max-w-7xl px-5 text-body text-gray-headline sm:text-headline">
          The edConnect System gets publication, communication and data sharing
          within your school, school newspaper or university to the next level,
          making it interactive and more efficient than ever before. For
          institutions or districts, with unique requirements, we also offer the
          option to develop a fully customized system built on the edConnect
          platform, tailored to meet your specific needs and objectives.
        </p>

        {/* Benefit Cards Grid */}
        <section className="relative mx-auto w-full max-w-7xl items-center justify-center px-5">
          <span className="grid w-fit grid-rows-1 justify-center gap-5 sm:grid-cols-2 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <GlassCard
                key={index}
                heading={benefit.title}
                text={benefit.description}
              />
            ))}
          </span>
        </section>
      </div>
    </main>
  );
};

export default Home;
