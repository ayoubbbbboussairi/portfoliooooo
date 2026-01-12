import { lenis } from "@/context/SmoothScrollingProvider";

export const useScrollToSection = () => {
  const scrollTo = (id: string, offset = 0) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY + offset;

    lenis?.stop();

    window.scrollTo({
      top: id !== "home" ? top : 0,
      behavior: "smooth",
    });

    lenis?.start();
  };

  return scrollTo;
};
