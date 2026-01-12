"use client";
import { spinning_text_words } from "@/data/home";
import { ArrowDown } from "lucide-react";
import Button from "./Button";
import CircularText from "@/components/motion-primitives/spinning-text";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const HeroSpinningText = () => {
  const scrollTo = useScrollToSection();

  return (
    <div className="absolute right-46 bottom-40 z-10">
      <Button
        className="animated-duration absolute position-center  size-44 hover:bg-[var(--main)] flex-center group !rounded-full"
        onClick={() => scrollTo("contact")}
      >
        <CircularText
          text={spinning_text_words}
          onHover="slowDown"
          spinDuration={20}
          className="text-white size-60 absolute position-center text-sm!"
        />

        <div className="animated-duration size-12 !rounded-full flex-center group-hover:bg-[var(--bg-primary-inverse)] text-white group-hover:text-[var(--text-primary-inverse)]">
          <ArrowDown className="text-inherit" />
        </div>
      </Button>
    </div>
  );
};

export default HeroSpinningText;
