"use client";
import { personal_data } from "@/data/home";
import Image from "next/image";
import styles from "../../../styles.module.css";
import { cn } from "@/lib/utils";
import HeroSpinningText from "../global/HeroSpinningText";
const { fadeIn } = styles;

const HeroImage = () => {
  return (
    <div className="absolute left-0 top-0 size-full z-40">
      <Image
        src={personal_data.image}
        alt={personal_data.name}
        width={450}
        height={450}
        className={cn(
          "object-cover rounded-full border-[6px] border-white/10 shadow-2xl z-10 duration-1000",
          "lg:w-[450px] lg:h-[450px] md:w-[350px] md:h-[350px] w-[280px] h-[280px]", // Responsive sizes
          fadeIn
        )}
        style={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)", // Vertically centered
        }}
      />

      <div className="sm:block hidden">
        <HeroSpinningText />
      </div>
    </div>
  );
};

export default HeroImage;
