import { ReactNode } from "react";
import HeroImageCard from "./HeroImageCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { InfiniteSlider } from "../../motion-primitives/infinite-slider";
import { achievements } from "@/data/about";

const VCardSectionsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main id="main">
      <InfiniteSlider
        speedOnHover={20}
        gap={64}
        className="py-12 bg-[var(--bg-primary-inverse)]"
        speed={50}
        reverse={true}
      >
        {achievements.map((sentence, i) => (
          <span
            key={i}
            className="whitespace-nowrap uppercase text-nowrap text-[var(--text-primary-inverse)] font-semibold text-[3rem]"
          >
            {sentence}
          </span>
        ))}
      </InfiniteSlider>

      <div className="lg:grid lg:grid-cols-12 gap-0">
        <HeroImageCard />

        <div className="lg:grid lg:col-span-9 lg:mt-0 ">
          <MaxWidthWrapper className="mt-32">{children}</MaxWidthWrapper>
        </div>
      </div>
    </main>
  );
};

export default VCardSectionsLayout;
