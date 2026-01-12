"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const ArrowLink = ({
  text,
  onClick,
  className,
  size = "base",
}: {
  text: string;
  onClick?: () => void;
  className?: string;
  size?: "base" | "xl";
}) => {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-[var(--text-tertiary)] group-hover:text-[var(--main)] hover:text-[var(--main)] group relative w-fit",
        className
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "group-hover:text-[var(--main)] uppercase",
          size === "base" ? "text-base" : "text-xl"
        )}
      >
        {text}
      </span>
      <ArrowRight
        size={size === "base" ? 16 : 20}
        className={cn(
          "group-hover:rotate-90 duration",
          size === "base" ? "group-hover:opacity-100 opacity-0" : ""
        )}
      />
    </span>
  );
};

export default ArrowLink;
