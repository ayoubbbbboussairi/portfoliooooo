"use client";
import { experience } from "@/data/experience";
import TimelineCard from "../../common/experience/TimelineCard";
import { useRef, useState } from "react";
import VCardSection from "@/components/common/global/VCardSection";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { useStackedCards } from "@/hooks/useStackedCards";

const Experience = () => {
  return (
    <VCardSection title="experience">
      <div className="grid gap-32">
        <div className="relative lg:mt-0 mt-32">
          <History resumePart="working" />
        </div>

        <div className="relative">
          <History resumePart="education" />
        </div>
      </div>
    </VCardSection>
  );
};

export default Experience;

const HistoryIcon = ({ Icon }: { Icon: IconDefinition }) => {
  return (
    <div className="mb-16 lg:mx-0 flex-center mx-auto rounded-full relative  border-[3px] border-dashed size-40 border-[var(--border)] overflow-hidden">
      <FontAwesomeIcon
        icon={Icon}
        size="4x"
        className="text-[var(--text-primary)]"
      />
    </div>
  );
};

const History = ({ resumePart }: { resumePart: "education" | "working" }) => {
  const [activeServiceIdx, setActiveServiceIdx] = useState<number | null>(null);

  const onOpenChange = (idx: number) => {
    setActiveServiceIdx((prev) => (prev === idx ? null : idx));
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useStackedCards(containerRef, { selector: ".timeline-card" });

  return (
    <>
      <div className="space-y-8">
        <HistoryIcon
          Icon={resumePart === "education" ? faGraduationCap : faBriefcase}
        />
        <div className="relative" ref={containerRef}>
          {experience[resumePart].map((item, i) => (
            <div
              key={i}
              className="timeline-card relative top-16 z-30  first:pt-0 last:pb-0 py-4"
            >
              <TimelineCard
                idx={i}
                resumePart={resumePart}
                {...item}
                isOpen={activeServiceIdx === i}
                onOpenChange={() => onOpenChange(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
