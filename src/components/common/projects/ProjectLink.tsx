"use client";
import Link from "next/link";
import Button from "../global/Button";
import { ArrowRight } from "lucide-react";

const ProjectLink = ({ link }: { link: string }) => {
  return (
    <Link href={link} target="_blank">
      <Button variant="primary" className="size-16! h-fit group">
        <ArrowRight className="inline ml-1 duration group-hover:-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Button>
    </Link>
  );
};

export default ProjectLink;
