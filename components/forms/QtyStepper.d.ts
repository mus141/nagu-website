import * as React from "react";

export interface QtyStepperProps {
  /** Current quantity. @default 1 */
  value?: number;
  /** @default 1 */
  min?: number;
  /** @default 99 */
  max?: number;
  /** Called with the next clamped value. */
  onChange?: (next: number) => void;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

/** Quantity control — two hard-keyline square buttons (hover red) flanking a display-face count. */
export function QtyStepper(props: QtyStepperProps): React.ReactElement;
