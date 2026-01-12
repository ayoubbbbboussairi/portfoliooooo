"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { smooth_scrolling_duration } from "@/data/config";
import { useThemeVariantsContext } from "./ThemeVariantsContext";

export let lenis: Lenis | null = null;

export function SmoothScrollingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSmoothScrolling } = useThemeVariantsContext();

  useEffect(() => {
    if (isSmoothScrolling) {
      lenis = new Lenis({
        duration: smooth_scrolling_duration,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing (optional)
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis?.destroy();
        lenis = null;
      };
    }
  }, [isSmoothScrolling]);

  return <>{children}</>;
}
