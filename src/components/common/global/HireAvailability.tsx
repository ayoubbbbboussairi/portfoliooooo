import { cn } from "@/lib/utils";
import styles from "../../../styles.module.css";
const { dotAvilability } = styles;

const HireAvailability = ({
  isAvailable,
  className,
}: {
  isAvailable: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 uppercase",
        className
      )}
    >
      <div
        className={cn(
          "size-4 relative rounded-full ",
          isAvailable ? "bg-green-500" : "bg-red-500"
        )}
      >
        <div
          className={cn(
            isAvailable ? dotAvilability : "",
            "absolute left-0 top-0 right-0 bottom-0 opacity-100 rounded-full bg-inherit"
          )}
        />
      </div>
      <h2>
        {isAvailable
          ? "i am Available for hire"
          : "i am Not available for hire now"}
      </h2>
    </div>
  );
};

export default HireAvailability;
