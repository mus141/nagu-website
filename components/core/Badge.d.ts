import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "red" */
  tone?: "red" | "ink" | "gold" | "cream";
  /** "round" for counts, "block" for status flags. @default "round" */
  shape?: "round" | "block";
  children?: React.ReactNode;
}

/** Small count / status indicator with the hard black keyline — cart counts, notifications, status flags. */
export function Badge(props: BadgeProps): React.ReactElement;
