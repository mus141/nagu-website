import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "ink" */
  tone?: "ink" | "red" | "outline" | "cream" | "gold";
  /** Render the label in the Japanese accent face (for 大胆な味-style callouts). @default false */
  jp?: boolean;
  children?: React.ReactNode;
}

/** Small pill chip — categories, sauce labels, "new drop", and JP accent tags. */
export function Tag(props: TagProps): React.ReactElement;
