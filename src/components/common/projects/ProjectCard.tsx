"use client";
import { useProjectContext } from "@/context/ProjectContext";
import ProjectImageSlider from "./ProjectImageSlider";
import { cn } from "@/lib/utils";
import CountTitle from "../global/CountTitle";
import ProjectLink from "./ProjectLink";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";
import { useProjectDialog } from "@/hooks/useProjectDialog";

export type ProjectProps = {
  title: string;
  images: string[];
  tags: string[];
  link: string;
  idx: number;
};

const ProjectFooter = ({
  title,
  link,
  idx,
  isOut = false,
}: Omit<ProjectProps, "images"> & { isOut?: boolean }) => {
  return (
    <div
      className={cn(
        isOut
          ? "bg-[var(--bg-primary)] border border-[var(--border)] border-t-transparent rounded-b-[var(--radius)]"
          : "absolute left-0 bottom-0 bg-black/15 backdrop-blur-sm w-full",
        " p-8  space-y-8"
      )}
    >
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <CountTitle
            idx={idx}
            className={cn(
              "text-2xl hidden sm:inline",
              isOut ? "" : "text-white!"
            )}
          />
          <h1
            className={cn("text-2xl line-clamp-1", isOut ? "" : "text-white!")}
          >
            {title}
          </h1>
        </div>
        <ProjectLink link={link} />
      </div>
    </div>
  );
};

const ProjectCard = ({ title, images, tags, link, idx }: ProjectProps) => {
  const { projectIdx } = useProjectContext();

  const { projectImageAspect } = useThemeVariantsContext();

  const { openProjectDialog } = useProjectDialog(idx);

  return (
    <div>
      <div
        className={cn(
          "relative border border-[var(--border)] overflow-hidden ",
          projectImageAspect == "video" ? "rounded-t-[var(--radius)]" : "rad"
        )}
      >
        <ProjectImageSlider
          projectIdx={projectIdx}
          images={images}
          title={title}
          openProject={openProjectDialog}
        />

        {projectImageAspect == "square" ? (
          <ProjectFooter title={title} link={link} idx={idx} tags={tags} />
        ) : null}
      </div>

      {projectImageAspect == "video" ? (
        <ProjectFooter title={title} link={link} idx={idx} tags={tags} isOut />
      ) : null}
    </div>
  );
};

export default ProjectCard;
