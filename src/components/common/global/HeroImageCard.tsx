"use client";
import Image from "next/image";
import { about_image, cv, is_available } from "@/data/about";
import HireAvailability from "./HireAvailability";
import Link from "next/link";
import HeroButton from "./HeroButton";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const HeroImageCard = () => {
  const scrollTo = useScrollToSection();
  return (
    <div className="lg:col-span-3 lg:h-[100vh] h-fit 2xl:p-16 p-8  bg-[var(--bg-primary)] lg:sticky relative lg:top-0 transition-shadow border-r border-[var(--border)]">
      <div className="absolute left-0 -bottom-[5px] w-screen h-1 bg-[var(--border)] z-50" />
      <div className="aspect-square relative rounded-full group">
        <Image
          src={about_image}
          alt={"me"}
          fill
          sizes="33vw"
          className="object-cover scale-95 group-hover:scale-100 duration mx-auto border border-[var(--border-secondary)] rounded-full"
        />
        <div className="absolute position-center size-full bg-transparent rounded-full border-[2px] border-[var(--main)] border-dashed" />
      </div>

      <div className="mt-8 space-y-8 rounded-b-lg">
        <HireAvailability isAvailable={is_available} />

        <div className="flex flex-wrap gap-8">
          {is_available ? (
            <div className="flex-1">
              <HeroButton
                text="Hire me"
                variant="primary"
                onClick={() => scrollTo("contact")}
              />
            </div>
          ) : null}

          {cv.source ? (
            <Link href={cv.source} target="_blank" className="flex-1">
              <HeroButton text="Resume" variant="outline" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HeroImageCard;
