import { cn } from "@/lib/utils";
import { CheckCircle2, TriangleAlert } from "lucide-react";

const FormResponse = ({
  error,
  message,
}: {
  error?: boolean;
  message?: string;
}) => {
  if (error == null || !message) return <span />;

  return (
    <div
      className={cn(
        "p-8 mt-4 flex items-center gap-x-2  rad border",
        error
          ? "bg-red-500/15 text-red-500 border-red-500/25"
          : "bg-green-500/15 text-green-500 border-green-500/25"
      )}
    >
      {error ? <TriangleAlert /> : <CheckCircle2 />}
      <p className="!text-inherit text-sm!">{message}</p>
    </div>
  );
};

export default FormResponse;
