"use client";
import { Spotlight } from "../../motion-primitives/spotlight";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";

const AboutCard = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  const { aboutSection } = useThemeVariantsContext();

  return (
    <div
      className={cn(
        "relative lg:col-span-12",
        aboutSection === "cards"
          ? "border border-[var(--border-secondary)]  p-[1px] rad bg-[var(--bg-primary)] dark:bg-[var(--bg-secondary)]"
          : "overflow-visible!",
        className
      )}
    >
      <Spotlight
        size={400}
        className={cn(
          "background-gradient",
          aboutSection === "default" ? "hidden" : ""
        )}
      />

      <div
        className={cn(
          "relative space-y-16",
          aboutSection === "cards"
            ? "p-8  bg-[var(--bg-primary)] dark:bg-[var(--bg-secondary)] rad h-full"
            : ""
        )}
      >
        <h1
          className={cn(
            "font-semibold tracking-wide transition-transform text-query",
            aboutSection === "cards"
              ? "md:text-4xl text-3xl"
              : "md:text-5xl text-4xl"
          )}
        >
          {title}
        </h1>
        <>{children}</>
      </div>
    </div>
  );
};

export default AboutCard;
