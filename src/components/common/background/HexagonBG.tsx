import { cn } from "@/lib/utils";
import styles from "../../../styles.module.css";
const { hexagon } = styles;

export const Hexagon = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        hexagon,
        className,
        "size-60 background-gradient absolute opacity-5"
      )}
    />
  );
};

const HexagonBG = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "fixed left-0 top-0 w-full h-full z-0")}>
      {/* level 1 */}
      <Hexagon className="right-[359px] top-[-182px] !opacity-25" />
      <Hexagon className="right-[-121px] top-[-182px] !opacity-25" />

      {/* level 2 */}
      <Hexagon className="right-[479px] top-[-2px]" />
      <Hexagon className="right-[-1px] top-[-2px]" />

      {/* level 3 */}
      <Hexagon className="right-[599px] top-[178px] !opacity-25" />
      <Hexagon className="right-[119px] top-[178px] !opacity-25" />

      {/* level 4 */}
      <Hexagon className="right-[719px] top-[358px]" />
      <Hexagon className="right-[239px] top-[358px]" />

      {/* level 5 */}
      <Hexagon className="right-[839px] top-[538px] !opacity-25" />
      <Hexagon className="right-[359px] top-[538px] !opacity-25" />
      <Hexagon className="right-[-121px] top-[538px] !opacity-25" />

      {/* level 6 */}
      <Hexagon className="right-[959px] top-[718px]" />
      <Hexagon className="right-[479px] top-[718px]" />
      <Hexagon className="right-[-1px] top-[718px]" />
    </div>
  );
};

export default HexagonBG;
