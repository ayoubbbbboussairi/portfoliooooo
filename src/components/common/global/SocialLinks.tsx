"use client";
import Link from "next/link";
import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import { COLORS, ColorType } from "@/shared/colors";
import { useState } from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
import { social_links } from "@/data/contact";

const SocialLink = ({
  link,
  color,
  Icon,
  idx,
}: {
  link: string;
  color: ColorType;
  Icon: IconDefinition;
  idx: number;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Button>
      <div style={{ transitionDuration: `${(idx + 1) * 300}ms` }}>
        <Link
          href={link}
          target="_blank"
          className={cn(
            "group size-16 rounded-full border flex-center text-[var(--text-primary)] duration",
            color === "black" ? "dark:!text-white" : "",
            color === "black" && isHover ? "dark:!border-white" : ""
          )}
          style={{
            color: COLORS[color],
            borderColor: isHover ? COLORS[color] : "transparent",
          }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <FAI
            icon={Icon}
            className="group-hover:scale-125 text-inherit duration"
            size="lg"
          />
        </Link>
      </div>
    </Button>
  );
};

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-wrap sm:gap-8 gap-4", className)}>
      {social_links.map((item, i) => (
        <SocialLink key={i} idx={i} {...item} />
      ))}
    </div>
  );
};

export default SocialLinks;
