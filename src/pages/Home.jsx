import React from "react";
import HeroElement from "../components/HeroElement";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 px-3">
      <HeroElement />
      <Button
        text="Primary Button"
        onClick={() => console.log("Click!")}
        size="sm"
        type="primary"
      />
      <Button
        text="Secondary Button"
        onClick={() => console.log("Click!")}
        size="sm"
        type="secondary"
      />
      <Button
        text="Outlined Button"
        onClick={() => console.log("Click!")}
        size="sm"
        type="outlined"
      />
      <Button
        text="Elevated Button"
        onClick={() => console.log("Click!")}
        size="sm"
        type="elevated"
      />
    </div>
  );
};

export default Home;
