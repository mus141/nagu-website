import * as React from "react";

export interface SectionHeadingProps {
  /** Uppercase wide-tracked kicker above the headline (red). */
  eyebrow?: React.ReactNode;
  /** The display headline (rendered in distressed caps). */
  children: React.ReactNode;
  /** Optional decorative Japanese accent line below the headline. */
  jpAccent?: React.ReactNode;
  /** @default "left" */
  align?: "left" | "center" | "right";
  /** "ink" = dark text for light backgrounds; "light" = off-white for dark. @default "ink" */
  tone?: "ink" | "light";
  /** Show the skewed red underline bar. @default true */
  underline?: boolean;
  style?: React.CSSProperties;
}

/** Poster-grade section opener: red eyebrow → stacked display headline → optional JP accent → skewed red rule. */
export function SectionHeading(props: SectionHeadingProps): React.ReactElement;
