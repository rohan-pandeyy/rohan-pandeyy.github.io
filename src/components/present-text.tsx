import { Fragment } from "react";

/**
 * Renders text, highlighting any "Present" (open-ended date ranges)
 * in a rounded grey badge that matches the surrounding text size.
 */
export function PresentText({ children }: { children: string }) {
  return (
    <>
      {children.split(/(Present)/).map((part, i) =>
        part === "Present" ? (
          <span
            key={i}
            className="inline-flex items-center rounded-sm bg-foreground/10 py-0.5 px-1.5 align-baseline text-[length:inherit] font-[inherit] leading-[inherit]"
          >
            Present
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
