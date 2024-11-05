import ReactRotatingText from "react-rotating-text";
import HeroImage from "../assets/HeroImage.png";

const HeroElement = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-screen-2xl items-start justify-center px-5">
      <section className="absolute left-0 top-0 z-10 flex w-fit flex-col text-5xl font-bold text-white sm:text-7xl">
        <span>Connect</span>
        <span>your</span>
        <ReactRotatingText
          items={["School", "Organization", "University"]}
          pause={2000}
          typingInterval={100}
          deletingInterval={100}
        />
      </section>
      <img src={HeroImage} alt="Product" className="max-h-screen" />
    </div>
  );
};

export default HeroElement;
