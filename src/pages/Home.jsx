import React from "react";
import HeroElement from "../components/HeroElement";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 px-3 py-2">
      <HeroElement />

      <button className="secondary-button">Test</button>

      <input type="text" placeholder="test..." className="primary-input" />
    </div>
  );
};

export default Home;
