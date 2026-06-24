import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase field label above the input. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message (turns keyline + text red, overrides hint). */
  error?: string;
  /** Icon element rendered inside, left of the text (e.g. Lucide Search). */
  iconLeft?: React.ReactNode;
  /** "light" for light backgrounds, "dark" for ink surfaces. @default "light" */
  tone?: "light" | "dark";
}

/** Hard-keyline text field; focus brings a red keyline + offset "stamp" shadow. */
export function Input(props: InputProps): React.ReactElement;
