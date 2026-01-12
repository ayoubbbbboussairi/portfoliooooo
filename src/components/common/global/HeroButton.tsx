"use client";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button, { ButtonVariants } from "./Button";

const HeroButton = ({
  text,
  className,
  variant = "primary",
  onClick,
}: {
  text: string;
  className?: string;
  variant?: ButtonVariants;
  onClick?: () => void;
}) => {
  return (
    <Button
      className={cn(
        "relative w-full text-2xl rounded-full! px-8 h-24",
        className
      )}
      title={text}
      variant={variant}
      onClick={onClick}
    >
      <div className="flex h-8 overflow-hidden ">
        <div className="text-inherit flex flex-col select-none group-hover:-translate-y-full transition-transform duration">
          <span className="flex items-center gap-1">
            {text} <ArrowUpRight size={28} />
          </span>
          <span className="flex items-center gap-1">
            {text} <ArrowDown size={28} />
          </span>
        </div>
      </div>
    </Button>
  );
};

export default HeroButton;
