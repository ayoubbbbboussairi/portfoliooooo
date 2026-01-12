"use client";
import { services } from "@/data/services";
import { useRef, useState } from "react";
import Service from "../../common/services/Service";
import VCardSection from "@/components/common/global/VCardSection";
import { useStackedCards } from "@/hooks/useStackedCards";

const Services = () => {
  const [activeServiceIdx, setActiveServiceIdx] = useState<number | null>(null);

  const onOpenChange = (idx: number) => {
    setActiveServiceIdx((prev) => (prev === idx ? null : idx));
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useStackedCards(containerRef, { selector: ".service-card" });

  return (
    <VCardSection title="services">
      <div className="relative" ref={containerRef}>
        {services.map((item, i) => (
          <div
            key={i}
            className="service-card relative  z-30  first:pt-0 last:pb-0 py-4"
          >
            <Service
              idx={i}
              {...item}
              isOpen={activeServiceIdx === i}
              onOpenChange={() => onOpenChange(i)}
            />
          </div>
        ))}
      </div>
    </VCardSection>
  );
};

export default Services;
