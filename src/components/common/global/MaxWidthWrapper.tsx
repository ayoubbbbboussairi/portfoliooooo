import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-2xl xl:px-16 px-8", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
