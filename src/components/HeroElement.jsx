import ReactRotatingText from "react-rotating-text";
import HeroImage from "../assets/HeroImage.png";

const HeroElement = () => {
  return (
    <div className="flex flex-row items-center justify-center px-5">
      <section className="flex w-[321px] flex-col text-[50px] font-bold text-gray-display lg:w-[462px] lg:text-[72px] xl:w-[660px] xl:text-[92px]">
        <span>Connect</span>
        <span>your</span>
        <ReactRotatingText
          items={["School", "Organization", "University"]}
          pause={1500}
          typingInterval={100}
          deletingInterval={100}
        />
      </section>
      <img
        src={HeroImage}
        alt="Product"
        className="hidden h-auto w-full sm:inline sm:max-w-sm lg:max-w-lg"
      />
    </div>
  );
};

export default HeroElement;
