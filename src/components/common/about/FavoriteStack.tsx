"use client";
import Image from "next/image";
import { Tilt } from "@/components/motion-primitives/tilt";
import { COLORS, LIGHT_COLORS } from "@/shared/colors";
import { tools } from "@/data/about";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";
import { cn } from "@/lib/utils";

const FavoriteStack = () => {
  const { aboutSection } = useThemeVariantsContext();

  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 gap-8">
      {tools.map((t, i) => {
        return (
          <Tilt
            key={i}
            className={cn(
              "group overflow-hidden relative rad  size-full p-[1px] ",
              aboutSection === "cards"
                ? "h-44 dark:bg-[var(--bg-primary)] bg-[var(--bg-secondary)]"
                : "h-56 bg-[var(--bg-primary)]"
            )}
          >
            <Spotlight
              size={176}
              style={{ backgroundColor: COLORS[t.color] }}
              className={t.color === "black" ? "dark:bg-white!" : ""}
            />
            <div
              className={cn(
                "relative flex-center rad size-full",
                aboutSection === "cards"
                  ? "dark:bg-[var(--bg-primary)] bg-[var(--bg-secondary)]"
                  : "bg-[var(--bg-primary)]"
              )}
            >
              <Spotlight
                size={176}
                style={{
                  backgroundColor: LIGHT_COLORS[t.color],
                }}
                className={t.color === "black" ? "dark:bg-white/15!" : ""}
              />
              <Image
                src={t.image}
                width={64}
                height={64}
                alt={t.name}
                className="duration group-hover:opacity-0 group-hover:translate-y-4"
              />
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 duration group-hover:opacity-100 group-hover:-translate-y-1/2 translate-y-0  opacity-0  text-2xl font-semibold">
                {t.name}
              </h1>
            </div>
          </Tilt>
        );
      })}
    </div>
  );
};

export default FavoriteStack;
