/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "border-[var(--border)] text-lg focus-visible:border-[var(--main)] placeholder:text-[var(--text-tertiary)] outline-none rounded-t-lg",
          "flex bg-transparent min-h-48 text-[var(--text-primary)] w-full border-b py-8 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        style={{ transition: "border 300ms" }}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
