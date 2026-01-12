"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import Button from "../Button";

const Panel = ({
  children,
  isOpen,
  setIsOpen,
  Icon,
  className,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  Icon: LucideIcon;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "fixed w-40 p-4 h-auto background-blurry z-40 translate-x-full data-[open=true]:translate-x-0 duration",
        className
      )}
      data-open={isOpen}
    >
      <Button
        className="background-blurry p-4 text-[var(--text-primary)] hover:text-[var(--main)] rounded-r-none! absolute left-0 top-0 -translate-x-full"
        magneticIntensity={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          className="data-[open=true]:rotate-180 duration"
          data-open={isOpen}
        />
      </Button>

      {children}
    </div>
  );
};

export default Panel;
