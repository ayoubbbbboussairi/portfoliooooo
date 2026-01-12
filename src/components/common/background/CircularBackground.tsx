import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

const CircularBackground = ({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "size-96 bg-[var(--main)] z-0 rounded-full fixed pointer-events-none blur-[12rem] opacity-50",
        className
      )}
      style={style}
    />
  );
};

export default CircularBackground;
