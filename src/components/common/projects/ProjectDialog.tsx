"use client";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useProjectContext } from "@/context/ProjectContext";
import ProjectImageSlider from "./ProjectImageSlider";
import { AnimatePresence, motion } from "motion/react";
import ProjectTag from "./ProjectTag";
import ProjectLink from "./ProjectLink";
import Button from "../global/Button";
import { X } from "lucide-react";

const ProjectDialog = () => {
  const { projectIdx } = useProjectContext();
  const { title, description, tags, images, link, tools_used, duration } =
    projects[projectIdx];

  const { setIsOpenProject, isOpenProject } = useProjectContext();

  return (
    <>
      <div
        onClick={() => setIsOpenProject(false)}
        className={cn(
          "fixed bg-white/50 dark:bg-black/50 backdrop-blur-sm left-0 top-0 size-full z-40",
          isOpenProject
            ? "opacity-100 translate-y-0"
            : "translate-y-full opacity-0"
        )}
        style={{
          transitionDuration: isOpenProject
            ? "calc(var(--animation-duration)/2)"
            : "calc(var(--animation-duration)*2)",
        }}
      />

      <div
        onClick={() => setIsOpenProject(false)}
        className={cn(
          "animated-duration fixed right-4 group top-0 z-[46]",
          isOpenProject
            ? "translate-y-4 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        <Button>
          <div className="bg-[var(--main)] rounded-full flex-center text-white p-4">
            <X size={60} className="group-hover:rotate-90 duration" />
          </div>
        </Button>
      </div>

      <div
        className={cn(
          "fixed z-[45] bg-[var(--bg-primary)] overflow-y-auto overflow-x-hidden size-full rad",
          "border border-[var(--border)] p-16",
          isOpenProject ? "translate-y-0" : "translate-y-full"
        )}
        style={{
          transitionDuration: "var(--animation-duration)",
        }}
        data-lenis-prevent
      >
        <div className="grid gap-8">
          <AnimatePresence>
            {isOpenProject ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <ProjectImageSlider
                  projectIdx={projectIdx}
                  images={images}
                  title={title}
                  isInDialog
                />
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h1 className="text-4xl">{title}</h1>

              <ProjectLink link={link} />
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <ProjectTag key={i} tag={t} />
              ))}
            </div>
          </div>

          <p className="text-lg">{description}</p>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Tools Used:</h3>

            <div className="flex gap-2 flex-wrap">
              {tools_used.map((tool, i) => (
                <div
                  className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] py-2 px-4 rad"
                  key={i}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl text-[var(--text-secondary)]">
            Duration: <span className="text-[var(--main)]">{duration}</span> to
            finish
          </h3>
        </div>
      </div>
    </>
  );
};

export default ProjectDialog;
