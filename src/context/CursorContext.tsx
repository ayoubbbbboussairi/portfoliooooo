"use client";
import { cn } from "@/lib/utils";
import { ReactNode, createContext, useContext, useEffect } from "react";

import styles from "../styles.module.css";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useThemeVariantsContext } from "./ThemeVariantsContext";
const { customCursor } = styles;

export const CursorContext = createContext(undefined);

export const useCursorContext = () => useContext(CursorContext);

export const CursorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth animation effect
  const smoothX = useSpring(mouseX, { stiffness: 7500, damping: 225 });
  const smoothY = useSpring(mouseY, { stiffness: 7500, damping: 225 });

  const { isCustomCursor } = useThemeVariantsContext();

  useEffect(() => {
    if (isCustomCursor) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY, isCustomCursor]);

  const applyGlobalCursor = (cursorProperty: string) => {
    const style = document.createElement("style");
    style.innerText = `* { cursor: ${cursorProperty} !important; }`;
    document.head.appendChild(style);
  };

  useEffect(() => {
    if (!isCustomCursor) applyGlobalCursor("auto");
    if (isCustomCursor) applyGlobalCursor("none");
  }, [isCustomCursor]);

  return (
    <CursorContext.Provider value={undefined}>
      {isCustomCursor ? (
        <motion.div
          className={cn(
            customCursor,
            "fixed top-0 left-0 bg-[var(--main)] pointer-events-none z-[99] size-10",
            "bg-gradient-to-br from-[var(--cursor-heavy-color)] dark:from-white via-[var(--cursor-color)] to-[var(--cursor-color)] dark:via-[var(--main)] dark:to-[var(--gradient-to)]"
          )}
          style={{
            translateX: smoothX,
            translateY: smoothY,
          }}
        />
      ) : null}
      {children}
    </CursorContext.Provider>
  );
};
