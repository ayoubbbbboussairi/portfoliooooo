"use client";
import { clients } from "@/data/about";
import Image from "next/image";
import { Tilt } from "@/components/motion-primitives/tilt";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { InfiniteSlider } from "../../motion-primitives/infinite-slider";
import StarRating from "./StarRating";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";
import { cn } from "@/lib/utils";

const Clients = () => {
  const { aboutSection } = useThemeVariantsContext();

  return (
    <InfiniteSlider
      speedOnHover={20}
      gap={32}
      className="mask relative z-20 py-8 -mt-8"
      speed={50}
      reverse={true}
    >
      {clients.map((client, i) => (
        <Tilt
          key={i}
          rotationFactor={6}
          className={cn(
            "relative aspect-square  md:h-[350px] h-[300px] rad",
            aboutSection === "cards"
              ? "dark:bg-[var(--bg-primary)] bg-[var(--bg-secondary)]"
              : "bg-[var(--bg-primary)]"
          )}
        >
          <div className="h-full rad p-[1px]">
            <Spotlight size={256} className="background-gradient" />
            <div
              className={cn(
                "relative flex flex-col justify-between h-full rad p-8",
                aboutSection === "cards"
                  ? "dark:bg-[var(--bg-primary)] bg-[var(--bg-secondary)]"
                  : "bg-[var(--bg-primary)]"
              )}
            >
              <p className="md:text-2xl!">❝ {client.comment} ❞</p>
              <div className="flex items-center gap-4">
                <Image
                  src={client.image}
                  width={70}
                  height={70}
                  alt={client.name}
                  className="rounded-full"
                />

                <div className="space-y-4 flex-1">
                  <h3>{client.name}</h3>
                  <StarRating averageRate={client.rate} />
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      ))}
    </InfiniteSlider>
  );
};

export default Clients;
