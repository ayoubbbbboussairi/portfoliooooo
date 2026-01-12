"use client";
import { ZoomIn } from "lucide-react";
import Image from "next/image";
import ProjectTag from "./ProjectTag";
import { useProjectDialog } from "@/hooks/useProjectDialog";
import Button from "../global/Button";
import { Tilt } from "@/components/motion-primitives/tilt";
import ProjectLink from "./ProjectLink";

const StackedProjectCard = ({
  images,
  title,
  link,
  tags,
  idx,
}: {
  images: string[];
  title: string;
  link: string;
  tags: string[];
  idx: number;
}) => {
  const { openProjectDialog } = useProjectDialog(idx);

  return (
    <Tilt rotationFactor={2.5} className="will-change-transform">
      <div className="relative will-change-transform aspect-video rad">
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes="(max-width: 768px) 75vw, 50vw"
          className="object-cover rad"
        />

        <div className="absolute left-0 top-0 size-full opacity-25 bg-black/25 rad" />

        <div className="absolute left-8 top-8 w-[calc(100%-64px)] flex justify-between z-50">
          <div className="bg-black/5 backdrop-blur-lg  rad p-8 space-y-4 md:flex hidden flex-col justify-center">
            <h1 className=" text-white! text-2xl line-clamp-1 w-96">{title}</h1>
            <div className="flex gap-4">
              {tags.slice(0, 3).map((t, i) => (
                <ProjectTag key={i} tag={t} />
              ))}
              {tags.length > 3 ? (
                <ProjectTag tag={`+${tags.length - 3}`} />
              ) : null}
            </div>
          </div>

          <div className="flex md:flex-col flex-row gap-4 p-8 rad bg-black/5 backdrop-blur-lg">
            <ProjectLink link={link} />

            <Button
              variant="outline"
              onClick={openProjectDialog}
              className="group size-16!"
            >
              <ZoomIn className="group-hover:rotate-90 duration " />
            </Button>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default StackedProjectCard;
