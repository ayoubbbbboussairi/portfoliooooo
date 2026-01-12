"use client";
import { projects } from "@/data/projects";
import { useRef } from "react";
import VCardSection from "@/components/common/global/VCardSection";
import { useStackedCards } from "@/hooks/useStackedCards";
import StackedProjectCard from "@/components/common/projects/StackedProjectCard";
import ProjectCard from "@/components/common/projects/ProjectCard";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";

const StackedProjectCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useStackedCards(containerRef, { selector: ".project-card" });
  return (
    <div className="relative" ref={containerRef}>
      {projects.map((project, i) => (
        <div
          key={i}
          className="project-card md:sticky relative top-16 z-30 sm:h-screen sm:py-0 first:pt-0 last:pb-0 py-16"
        >
          <StackedProjectCard key={i} idx={i} {...project} />
        </div>
      ))}
    </div>
  );
};

const ProjectCards = () => {
  return (
    <>
      <div className="grid 2xl:grid-cols-2 mt-4 gap-8">
        {projects.map((item, i) => (
          <ProjectCard key={i} idx={i} {...item} />
        ))}
      </div>
    </>
  );
};

const Portfolio = () => {
  const { projectCard } = useThemeVariantsContext();
  return (
    <VCardSection title="portfolio">
      {projectCard === "stacked-cards" ? (
        <StackedProjectCards />
      ) : (
        <ProjectCards />
      )}
    </VCardSection>
  );
};

export default Portfolio;
