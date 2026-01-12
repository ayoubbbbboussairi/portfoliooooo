"use client";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";
import HexBackground from "./HexBackground";
import GridPattern from "../background/GridPattern";

const HomeBackground = () => {
  "use client";
  const { homeBackground } = useThemeVariantsContext();

  return homeBackground === "hex" ? (
    <HexBackground />
  ) : homeBackground === "grid" ? (
    <GridPattern staticGrid />
  ) : (
    <></>
  );
};

export default HomeBackground;
