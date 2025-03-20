import React from "react";

export function SectionTransition({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`h-20 bg-linear-to-t from-purple-50 dark:from-purple-900/10 to-transparent ${
        reverse ? "rotate-180" : ""
      }`}
    />
  );
}
