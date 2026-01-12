import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";

const SparkleI = ({
  className,
  size = 6,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <Sparkle
      className={cn("absolute text-[var(--main)]", className)}
      size={size}
    />
  );
};

const SparklesBackground = () => {
  return (
    <>
      <SparkleI className="bottom-8 left-8" size={12} />
      <SparkleI className="bottom-14 left-20" size={12} />
      <SparkleI className="bottom-8 left-16" size={4} />
      <SparkleI className="bottom-8 left-28" size={10} />
      <SparkleI className="bottom-2 left-16" size={8} />
      <SparkleI className="bottom-1 left-8" />
      <SparkleI className="bottom-1 left-2" size={4} />
      <SparkleI className="bottom-4 left-28" />
      <SparkleI className="bottom-6 left-1" />
      <SparkleI className="bottom-12 left-2" size={2} />
      <SparkleI className="bottom-1 left-36" size={4} />
    </>
  );
};

export default SparklesBackground;
