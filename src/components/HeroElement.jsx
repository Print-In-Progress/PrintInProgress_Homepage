import ReactRotatingText from "react-rotating-text";
import HeroImage from "../assets/HeroImage.png";

const HeroElement = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-start justify-center px-5">
      <img
        src={HeroImage}
        alt="Product"
        className="relative inset-0 h-full max-h-screen w-full max-w-7xl object-cover brightness-75"
      />
      <section className="absolute left-0 top-0 z-10 flex w-fit flex-col text-7xl font-bold text-white">
        <span>Connect</span>
        <span>your</span>
        <ReactRotatingText
          items={["School", "Organization", "University"]}
          pause={1500}
          typingInterval={100}
          deletingInterval={100}
        />
      </section>
    </div>
  );
};

export default HeroElement;
