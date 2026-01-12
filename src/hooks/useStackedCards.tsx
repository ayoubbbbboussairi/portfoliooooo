import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Options {
  selector: string;
  scale?: number;
  scrub?: number;
}

export function useStackedCards(
  container: React.RefObject<HTMLDivElement | null>,
  options: Options
) {
  const { selector, scale = 0.85, scrub = 1 } = options || {};

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(selector) as HTMLDivElement[];

      cards.forEach((card) => {
        gsap.to(card, {
          scale,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, [container, selector, scale, scrub]);
}
