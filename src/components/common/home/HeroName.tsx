import { personal_data } from "@/data/home";
import { cn } from "@/lib/utils";
import styles from "../../../styles.module.css";
const { textContent } = styles;

const HeroName = () => {
  const animationSpeed = 8;
  const colors = [
    "var(--main)",
    "var(--gradient-to)",
    "var(--main)",
    "var(--gradient-to)",
    "var(--main)",
  ];

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className="relative overflow-hidden w-fit z-0 mb-8">
      <h1
        className={cn(
          textContent,
          "font-black text-gradient 2xl:text-[5rem] select-none 2xl:leading-[5.5rem] xl:text-[4rem] xl:leading-[4.5rem] md:text-[3rem] md:leading-[3.5rem] text-[2.5rem] leading-[3rem] text-wrap"
        )}
        style={gradientStyle}
      >
        {personal_data.name}
      </h1>
    </div>
  );
};

export default HeroName;
