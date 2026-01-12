"use client";
import { dark_theme } from "@/data/config";
import { cn } from "@/lib/utils";
import {
  COLOR_OPTIONS,
  COLORS,
  CURSOR_COLORS,
  HEAVY_COLORS,
} from "@/shared/colors";
import { Moon, Palette, Sun } from "lucide-react";
import { useState } from "react";
import Panel from "./Panel";
import Button from "../Button";

const Separator = ({ text }: { text: string }) => {
  return <div className="mb-2 text-center text-primary">{text}</div>;
};

const ThemePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeColor, setActiveColor] = useState(0);

  const [isDark, setIsDark] = useState(dark_theme);
  const toggleHander = () => {
    setIsDark((p) => !p);
    document.documentElement.classList.toggle("dark");
  };

  const [activeGradientColor, setActiveGradientColor] = useState(6);

  return (
    <Panel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      Icon={Palette}
      className="right-0 top-18 z-40"
    >
      <Separator text="main color" />

      <div className="flex flex-wrap gap-4 mb-4">
        {COLOR_OPTIONS.map((c, i) =>
          c !== "black" ? (
            <Button
              key={i}
              className={cn(
                "size-8 hover:scale-95 duration-150 text-white text-sm flex justify-center items-center rounded-full",
                activeColor === i ? "pointer-events-none" : "cursor-pointer"
              )}
              style={{ backgroundColor: COLORS[c] }}
              onClick={() => {
                setActiveColor(i);
                document.documentElement.style.setProperty("--main", COLORS[c]);
                document.documentElement.style.setProperty(
                  "--cursor-color",
                  CURSOR_COLORS[c]
                );
                document.documentElement.style.setProperty(
                  "--cursor-heavy-color",
                  HEAVY_COLORS[c]
                );
              }}
            >
              {activeColor === i ? "✓" : ""}
            </Button>
          ) : null
        )}
      </div>

      <Separator text="theme mode" />

      <Button
        className="text-primary border border-[var(--text-primary)] rounded-full size-16 mx-auto mb-4"
        onClick={toggleHander}
      >
        {isDark ? <Sun /> : <Moon />}
      </Button>

      <Separator text="gradient color" />

      <div className="flex flex-wrap gap-4">
        {COLOR_OPTIONS.map((c, i) =>
          c !== "black" ? (
            <Button
              key={i}
              className={cn(
                "size-8 hover:scale-95 duration-150 text-white text-sm flex justify-center items-center rounded-full",
                activeGradientColor === i
                  ? "pointer-events-none"
                  : "cursor-pointer"
              )}
              style={{ backgroundColor: COLORS[c] }}
              onClick={() => {
                setActiveGradientColor(i);
                document.documentElement.style.setProperty(
                  "--gradient-to",
                  COLORS[c]
                );
              }}
            >
              {activeGradientColor === i ? "✓" : ""}
            </Button>
          ) : null
        )}
      </div>
    </Panel>
  );
};

export default ThemePanel;
