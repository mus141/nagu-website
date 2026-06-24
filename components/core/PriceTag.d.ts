import * as React from "react";

export interface PriceTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Numeric amount or range string, e.g. 22 or "18–24". */
  amount: React.ReactNode;
  /** @default "SR" */
  currency?: string;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** @default "red" */
  tone?: "red" | "ink" | "cream";
  /** Slight poster-stamp rotation. @default true */
  rotate?: boolean;
}

/** Stamped price block in SR — display face, hard keyline + offset shadow, tilted like a poster price stamp. */
export function PriceTag(props: PriceTagProps): React.ReactElement;
