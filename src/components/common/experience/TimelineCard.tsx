import ArrowLink from "../global/ArrowLink";
import { Tilt } from "@/components/motion-primitives/tilt";
import { useEffect, useRef, useState } from "react";
import CountTitle from "../global/CountTitle";
import { Spotlight } from "../../motion-primitives/spotlight";
import { cn } from "@/lib/utils";

type TimelineCardProps = {
  idx: number;
  year: string;
  event: string;
  description: string;
} & {
  isOpen: boolean;
  onOpenChange: (idx: number) => void;
};

const TimelineCard = ({
  idx,
  year,
  event,
  description,
  isOpen,
  onOpenChange,
}: TimelineCardProps) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="flex gap-8 group">
      <div
        className="border-[2px] px-16 hidden md:flex justify-center items-center border-[var(--border)] group-hover:border-[var(--main)] border-dashed text-xl font-semibold  rad duration"
        onClick={() => onOpenChange(idx)}
      >
        <h4 className="group-hover:text-[var(--main)]! text-nowrap duration">
          {year}
        </h4>
      </div>

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
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="flex md:hidden">{year}</h3>
                <h1 className="lg:text-2xl sm:text-2xl text-xl duration font-semibold">
                  {event}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <ArrowLink text="know more" />
                <CountTitle idx={idx} />
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
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default TimelineCard;
