import { cn } from "@/lib/utils";
import { Spotlight } from "../../motion-primitives/spotlight";

const GridPattern = ({ staticGrid = false }: { staticGrid?: boolean }) => {
  return (
    <>
      <Spotlight
        className="-z-1 background-gradient"
        size={350}
        parentPosition="sticky"
      />

      <div
        className={cn(
          "absolute left-0 top-0 w-screen h-screen grid lg:grid-cols-8 lg:grid-rows-4 md:grid-cols-6 md:grid-rows-4 grid-cols-3 grid-rows-5 gap-[1px]",
          staticGrid ? "dark:bg-[#333]/45 bg-[#999]/45" : ""
        )}
      >
        {Array.from({ length: 32 }).map((_, index) => (
          <div key={index} className="bg-[var(--bg-secondary)]" />
        ))}
      </div>
    </>
  );
};

export default GridPattern;
