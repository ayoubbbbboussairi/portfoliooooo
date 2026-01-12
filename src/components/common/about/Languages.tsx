"use client";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";
import { languages } from "@/data/about";
import { cn } from "@/lib/utils";

const Languages = () => {
  const { aboutSection } = useThemeVariantsContext();
  return (
    <div className="flex lg:justify-start justify-center flex-wrap gap-8">
      {languages.map((item, i) => (
        <div
          className={cn(
            "rounded-full flex-center transition-colors",
            aboutSection === "default" ? "size-[160px]" : "size-[151px]"
          )}
          key={i}
          style={{
            background: `conic-gradient(var(--main) ${
              item.progress / 2
            }%, var(--gradient-to) ${
              item.progress
            }%, var(--border-secondary) ${0}%)`,
          }}
        >
          <div
            className={cn(
              "absolute rounded-full",
              aboutSection === "default"
                ? "size-[144px] bg-[var(--bg-secondary)]"
                : "size-[133px] bg-[var(--bg-primary)] dark:bg-[var(--bg-secondary)]"
            )}
          />

          <div className="relative m-0 text-center flex flex-col gap-1 font-[500]">
            <span className="text-[var(--text-secondary)]  uppercase">
              {item.language}
            </span>
            <span className="text-base font-mono text-gradient">
              {item.progress}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Languages;
