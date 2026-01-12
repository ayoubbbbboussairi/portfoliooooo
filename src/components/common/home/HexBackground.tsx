import GridPattern from "../background/GridPattern";
import SparklesBackground from "../background/SparklesBackgronud";
import CircularBackground from "../background/CircularBackground";
import HexagonBG from "../background/HexagonBG";

const HexBackground = () => {
  return (
    <>
      <GridPattern />
      <CircularBackground className="left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] dark:opacity-100" />
      <CircularBackground className="-right-48 -bottom-48 dark:opacity-100" />
      <HexagonBG />
      <SparklesBackground />
    </>
  );
};

export default HexBackground;
