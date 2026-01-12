"use client";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon, Plus } from "lucide-react";
import CountTitle from "../global/CountTitle";
import { useEffect, useRef, useState } from "react";
import { useServiceContext } from "@/context/ServiceContext";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { Tilt } from "@/components/motion-primitives/tilt";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export type ServiceProps = {
  service: string;
  description: string;
  Icon: LucideIcon;
  idx: number;
} & {
  isOpen: boolean;
  onOpenChange: (idx: number) => void;
};

const Service = ({
  service,
  description,
  Icon,
  idx,
  isOpen,
  onOpenChange,
}: ServiceProps) => {
  const [isGetServiceHover, setIsGetServiceHover] = useState(false);

  const { setIsGetService, setServiceIdx } = useServiceContext();

  const scrollTo = useScrollToSection();

  const getService = () => {
    setTimeout(() => scrollTo("contact"), 200);
    setServiceIdx(idx);
    setIsGetService(true);
  };

  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <Tilt
      rotationFactor={2.5}
      className="relative bg-[var(--bg-primary)] p-px rad"
    >
      <Spotlight className="background-gradient" size={300} />
      <div
        className="relative rad overflow-hidden transition-all bg-[var(--bg-primary)] group"
        onClick={() => onOpenChange(idx)}
      >
        <div className="relative padding-query">
          <div className="flex justify-between items-center ">
            <div className="flex gap-8 items-center">
              <div className="size-24 duration sm:flex items-center justify-center hidden rad  bg-[var(--bg-secondary)]">
                <Icon
                  strokeWidth={1}
                  className="text-[var(--text-primary)] size-12 duration group-hover:text-[var(--main)]"
                />
              </div>

              <div className="space-y-4 ">
                <CountTitle idx={idx} />
                <h1 className="lg:text-4xl sm:text-2xl text-xl duration font-semibold">
                  {service}
                </h1>
              </div>
            </div>

            <div
              className={cn(
                "relative p-2 rounded-full text-primary bg-[var(--bg-secondary)] dark:bg-[#161616] group-hover:text-[var(--text-primary-inverse)]  group-hover:bg-[var(--bg-secondary-inverse)] duration",
                isOpen ? "rotate-45" : "group-hover:rotate-90"
              )}
            >
              <Plus />
            </div>
          </div>

          <div
            className={cn(
              "absolute left-1/2 -translate-x-1/2 bottom-8 w-[calc(100%-128px)] border-2 border-[var(--border)] border-dashed duration lg:block hidden",
              isOpen ? "opacity-100" : "opacity-0"
            )}
          />
        </div>

        <div
          ref={contentRef}
          style={{ height }}
          className="overflow-hidden transition-all ease-in-out duration"
        >
          <div
            className={cn(
              "padding-query pt-0! duration",
              isOpen ? "opacity-100" : "opacity-0"
            )}
          >
            <p>{description}</p>

            <div
              className={cn(
                "text-[var(--main)] flex items-center uppercase gap-3 text-2xl mt-8 duration",
                isGetServiceHover ? "text-primary" : ""
              )}
              onClick={getService}
              onMouseEnter={() => setIsGetServiceHover(true)}
              onMouseLeave={() => setIsGetServiceHover(false)}
            >
              <span>get the service</span>
              <ArrowRight
                className={cn(isGetServiceHover ? "rotate-90" : "", "duration")}
              />
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Service;
