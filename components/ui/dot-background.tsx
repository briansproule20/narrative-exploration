import { cn } from "@/lib/utils";
import React from "react";

export const DotBackground = React.memo(
  ({ className }: { className?: string }) => {
    return (
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#ffffff_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#ffffff_1px,transparent_1px)]",
          className,
        )}
      />
    );
  },
);

DotBackground.displayName = "DotBackground"; 