import React from "react";
import HeroElement from "../components/HeroElement";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/cards/GlassCard";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10 px-3 py-2">
      <HeroElement />

      <span className="flex w-full flex-row justify-center">
        <button
          onClick={() => navigate("/products")}
          className="elevated-button px-7 py-5 text-headline font-bold text-gray-small sm:text-display-sm"
        >
          edConnect Features
        </button>
      </span>

      <p className="w-full max-w-7xl px-10 text-body text-gray-headline sm:text-headline">
        The edConnect System gets publication, communication and data sharing
        within your school, school newspaper or university to the next level,
        making it interactive and more efficient than ever before. For
        institutions or districts, with unique requirements, we also offer the
        option to develop a fully customized system built on the edConnect
        platform, tailored to meet your specific needs and objectives
      </p>

      <section className="flex w-full flex-row justify-center">
        <span className="grid w-fit grid-rows-1 justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard
            heading="Intuitive"
            text="Effortless to navigate and adaptable to your school’s needs, edConnect minimizes setup time with smart automation. Spend less time on tech, and more time on what matters most - supporting students."
          />
          <GlassCard
            heading="Connected"
            text="With a unified system for Extracurricular and learning management, edConnect empowers educators and students to access everything they need, saving time and reducing complexity."
          />
          <GlassCard
            heading="Engaging"
            text="edConnect keeps students engaged and fosters school spirit."
          />
        </span>
      </section>
    </div>
  );
};

export default Home;
