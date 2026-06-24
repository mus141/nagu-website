import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "dark" | "outline" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to fill container width. @default false */
  block?: boolean;
  disabled?: boolean;
  /** Element rendered before the label (e.g. a Lucide icon). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * NAGU's primary action control: distressed-caps label, hard black keyline,
 * hard offset shadow, and a press that stamps the block into its shadow.
 *
 * @startingPoint section="Core" subtitle="Hard-keyline action button with stamp-press" viewport="320x120"
 */
export function Button(props: ButtonProps): React.ReactElement;
