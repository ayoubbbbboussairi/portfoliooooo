import { cn } from "@/lib/utils";
import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const StarRating: React.FC<{ averageRate: number }> = ({ averageRate }) => {
  const fullStars = Math.floor(averageRate);
  const halfStar = averageRate % 1 >= 0.4 ? 0.5 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  const emptyFullStars = Math.floor(emptyStars);
  const emptyHalfStar = emptyStars % 1 >= 0.4 ? 0.5 : 0;

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <FAI
          icon={faStar}
          key={i}
          size="lg"
          className={cn("text-[var(--main)]")}
        />
      ))}
      {halfStar === 0.5 && (
        <FAI
          icon={faStarHalf}
          size="lg"
          className={cn("text-[var(--main)] mr-[3px]")}
        />
      )}
      {emptyHalfStar === 0.5 ? (
        <FAI
          icon={faStarHalf}
          size="lg"
          className={cn("text-[var(--border)] -ml-[30px]")}
          style={{ transform: "rotateY(180deg)" }}
        />
      ) : null}
      {[...Array(emptyFullStars)].map((_, i) => (
        <FAI
          icon={faStar}
          size="lg"
          key={i}
          className={cn("text-[var(--border)]")}
        />
      ))}
    </div>
  );
};

export default StarRating;
