/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-[var(--border)] text-lg focus-visible:border-[var(--main)] placeholder:text-[var(--text-tertiary)]  outline-none",
          "flex bg-transparent rounded-t-lg h-14 text-[var(--text-primary)] w-full border-b border-[var(--border)] py-8 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        style={{ transition: "border 300ms" }}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
