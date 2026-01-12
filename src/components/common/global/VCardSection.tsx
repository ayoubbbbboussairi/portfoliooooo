"use client";
import { ReactNode } from "react";

const VCardSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section id={title}>
      <h1 className="mb-32 font-extrabold md:text-8xl sm:text-7xl text-5xl tracking-wide text-query">
        {title.split("-").join(" ")}
      </h1>
      <>{children}</>
    </section>
  );
};

export default VCardSection;
