"use client";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Button from "../global/Button";
import { useProjectContext } from "@/context/ProjectContext";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";

const ProjectImageSlider = ({
  projectIdx,
  images,
  title,
  openProject,
  isInDialog = false,
}: {
  projectIdx: number;
  images: string[];
  title: string;
  openProject?: () => void;
  isInDialog?: boolean;
}) => {
  const { projectImageIdxMap, setProjectImageIdx } = useProjectContext();

  const { projectImageAspect } = useThemeVariantsContext();

  const [imageIdx, setImageIdx] = useState(projectImageIdxMap[projectIdx] || 0);

  const isCanMoveNext = imageIdx < images.length - 1;

  const isCanMovePrev = imageIdx > 0;

  const next = () => {
    if (isCanMoveNext) {
      setProjectImageIdx(projectIdx, imageIdx + 1);
      setImageIdx(imageIdx + 1);
    }
  };

  const prev = () => {
    if (isCanMovePrev) {
      setProjectImageIdx(projectIdx, imageIdx - 1);
      setImageIdx(imageIdx - 1);
    }
  };

  return (
    <div
      className={cn(
        "relative group overflow-hidden size-full border border-[var(--border-secondary)] shadow-md",
        projectImageAspect == "video" ? "aspect-video" : "aspect-square",
        isInDialog ? "aspect-video" : "border-b-0"
      )}
    >
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={title}
          fill
          sizes={isInDialog ? "90vw" : "60vw"}
          className={cn(
            "object-cover pointer-events-auto duration-1000 ease-in-out",

            projectImageAspect == "video" ? "rounded-t-[var(--radius)]" : "rad",
            isInDialog ? "rounded-none" : "",
            i <= imageIdx ? "translate-y-0" : "translate-y-full"
          )}
          onClick={openProject}
        />
      ))}

      <div
        className={cn(
          "absolute left-0 top-0 size-full  opacity-0 duration backdrop-blur-[1px] bg-gradient-to-t from-black/50 to-black/0",
          isInDialog ? "" : "group-hover:opacity-100",
          projectImageAspect == "video" ? "rounded-t-[var(--radius)]" : "rad"
        )}
      />

      <ProjectImageSliderButton
        dir="right"
        onClick={next}
        isVisiable={isCanMoveNext}
      />

      <ProjectImageSliderButton
        dir="left"
        onClick={prev}
        isVisiable={isCanMovePrev}
      />

      {isInDialog ? null : (
        <div className="absolute position-center " onClick={openProject}>
          <Button className="background-blurry text-white shadow-xl group-hover:opacity-100 opacity-0 duration size-16 !rounded-full flex-center">
            <ZoomIn size={36} strokeWidth={1.25} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectImageSlider;

const ProjectImageSliderButton = ({
  dir,
  onClick,
  isVisiable,
}: {
  dir: "left" | "right";
  onClick: () => void;
  isVisiable: boolean;
}) => {
  return (
    <div
      className={cn(
        "absolute top-1/2 group-hover:-translate-y-1/2 translate-y-4 duration",
        dir === "right" ? "right-4" : "left-4",
        isVisiable
          ? ""
          : dir === "right"
          ? "opacity-0 translate-x-full"
          : "opacity-0 -translate-x-full"
      )}
      onClick={onClick}
    >
      <Button className="shadow-xl background-blurry text-white group-hover:opacity-100 opacity-0 duration size-12 !rounded-full flex-center">
        {dir === "right" ? <ChevronRight /> : <ChevronLeft />}
      </Button>
    </div>
  );
};
