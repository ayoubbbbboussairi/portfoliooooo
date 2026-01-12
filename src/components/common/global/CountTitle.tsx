import { count_title } from "@/data/config";
import { cn } from "@/lib/utils";

const CountTitle = ({
  idx,
  className,
}: {
  idx: number;
  className?: string;
}) => {
  return count_title ? (
    <h4
      className={cn(
        "font-bold opacity-25 group-hover:opacity-100 duration text-xl",
        idx === 0 ? "pr-2" : "",
        className
      )}
    >
      {`${idx >= 9 ? "" : 0}${idx + 1}`}
    </h4>
  ) : (
    <></>
  );
};

export default CountTitle;
