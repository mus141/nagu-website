import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fill. @default "paper" */
  tone?: "paper" | "cream" | "ink" | "red";
  /** Show the signature hard offset shadow. @default true */
  shadow?: boolean;
  /** Adds hover-lift / stamp-press behavior. @default false */
  interactive?: boolean;
  /** Inner padding in px. @default 20 */
  padding?: number;
  children?: React.ReactNode;
}

/** Base surface — square-cornered, hard black keyline + optional hard offset shadow; paper/cream/ink/red fills. */
export function Card(props: CardProps): React.ReactElement;
