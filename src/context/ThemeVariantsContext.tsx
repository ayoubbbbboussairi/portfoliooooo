"use client";
import {
  about_section,
  custom_cursor,
  home_background,
  project_card_option,
  project_image_aspect,
  scrollbar,
  smooth_scrolling,
} from "@/data/config";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeVariantsContextProps = {
  homeBackground: HomeBackgroundOptions;
  setHomeBackground: Dispatch<SetStateAction<HomeBackgroundOptions>>;

  aboutSection: AboutSectionOptions;
  setAboutSection: Dispatch<SetStateAction<AboutSectionOptions>>;

  projectCard: ProjectCardOptions;
  setProjectCard: Dispatch<SetStateAction<ProjectCardOptions>>;

  projectImageAspect: ProjectImageAspectOptions;
  setProjectImageAspect: Dispatch<SetStateAction<ProjectImageAspectOptions>>;

  isSmoothScrolling: boolean;
  setIsSmoothScrolling: Dispatch<SetStateAction<boolean>>;

  isCustomCursor: boolean;
  setIsCustomCursor: Dispatch<SetStateAction<boolean>>;

  isScrollbar: boolean;
  setIsScrollbar: Dispatch<SetStateAction<boolean>>;
};

export const ThemeVariantsContext = createContext(
  {} as ThemeVariantsContextProps
);

export const useThemeVariantsContext = () => useContext(ThemeVariantsContext);

// option arrays
export const homeBackgroundOptions: HomeBackgroundOptions[] = [
  "hex",
  "grid",
  "no",
];
export const aboutSectionOptions: AboutSectionOptions[] = ["default", "cards"];
export const projectCardOptions: ProjectCardOptions[] = [
  "stacked-cards",
  "cards",
];
export const projectImageAspectOptions: ProjectImageAspectOptions[] = [
  "video",
  "square",
];

// option types
export type HomeBackgroundOptions = "hex" | "grid" | "no";
export type AboutSectionOptions = "default" | "cards";
export type ProjectCardOptions = "stacked-cards" | "cards";
export type ProjectImageAspectOptions = "video" | "square";

export const ThemeVariantsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [homeBackground, setHomeBackground] =
    useState<HomeBackgroundOptions>(home_background);

  const [aboutSection, setAboutSection] =
    useState<AboutSectionOptions>(about_section);

  const [projectCard, setProjectCard] =
    useState<ProjectCardOptions>(project_card_option);

  const [projectImageAspect, setProjectImageAspect] =
    useState<ProjectImageAspectOptions>(project_image_aspect);

  const [isSmoothScrolling, setIsSmoothScrolling] = useState(smooth_scrolling);

  const [isCustomCursor, setIsCustomCursor] = useState(custom_cursor);

  const [isScrollbar, setIsScrollbar] = useState(scrollbar);

  const toggleScrollbar = () => {
    const root = document.documentElement;

    if (!isScrollbar) {
      // For Firefox
      root.style.scrollbarWidth = "none";

      // For Chrome, Safari
      const style = document.createElement("style");
      style.id = "hide-scrollbar-style";
      style.innerHTML = `
      html::-webkit-scrollbar {
        display: none;
      }
    `;
      document.head.appendChild(style);
    } else {
      root.style.scrollbarWidth = "";
      const existing = document.getElementById("hide-scrollbar-style");
      if (existing) existing.remove();
    }
  };

  useEffect(() => toggleScrollbar(), [isScrollbar]);

  return (
    <ThemeVariantsContext.Provider
      value={{
        homeBackground,
        setHomeBackground,

        aboutSection,
        setAboutSection,

        projectCard,
        setProjectCard,

        projectImageAspect,
        setProjectImageAspect,

        isSmoothScrolling,
        setIsSmoothScrolling,

        isCustomCursor,
        setIsCustomCursor,

        isScrollbar,
        setIsScrollbar,
      }}
    >
      {children}
    </ThemeVariantsContext.Provider>
  );
};

export default ThemeVariantsContext;
