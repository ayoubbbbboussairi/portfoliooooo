import { projects } from "@/data/projects";
import { InfiniteSlider } from "../../motion-primitives/infinite-slider";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Project = ({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) => {
  return (
    <Link href={link} target="_blank">
      <div className="relative aspect-square group border border-[var(--border-secondary)] rad overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="33vw"
          className="object-cover rad"
        />

        <div className="absolute left-0 top-0 size-full group-hover:opacity-100 opacity-0 duration backdrop-blur-[1px] bg-gradient-to-t from-black/50 to-black/0 rad" />

        <h1 className="absolute position-center w-[calc(100%-64px)] bg-black/5 backdrop-blur-sm p-4 group-hover:opacity-100 rad opacity-0 duration text-center !text-white">
          {title}
          <ArrowRight className="inline ml-1 duration group-hover:-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </h1>
      </div>
    </Link>
  );
};

const ProjectsTicker = () => {
  return (
    <InfiniteSlider
      speedOnHover={20}
      gap={32}
      className="mask"
      speed={50}
      reverse={true}
    >
      {projects.map((p, i) => (
        <div key={i} className="relative aspect-square lg:h-[300px] h-[200px]">
          <div key={i}>
            <Project image={p.images[0]} title={p.title} link={p.link} />
          </div>
        </div>
      ))}
    </InfiniteSlider>
  );
};

export default ProjectsTicker;
