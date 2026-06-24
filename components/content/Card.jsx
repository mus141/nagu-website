import React from "react";

/**
 * NAGU Card — the base surface: hard black keyline + optional hard
 * offset shadow. Square corners. Paper or ink fill.
 */
export function Card({ children, tone = "paper", shadow = true, interactive = false, padding = 20, style = {}, ...rest }) {
  const tones = {
    paper: { background: "var(--paper-0)", color: "var(--near-black)" },
    cream: { background: "var(--cream)", color: "var(--near-black)" },
    ink: { background: "var(--ink-900)", color: "var(--off-white)" },
    red: { background: "var(--nagu-red)", color: "var(--off-white)" },
  };
  const base = {
    border: "2px solid var(--near-black)",
    borderRadius: "var(--radius-md)",
    boxShadow: shadow ? "var(--shadow-offset)" : "none",
    padding,
    transition: "transform var(--dur-base) var(--ease-snap), box-shadow var(--dur-base) var(--ease-snap)",
    ...tones[tone],
    ...style,
  };
  const handlers = interactive
    ? {
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translate(-2px,-2px)";
          if (shadow) e.currentTarget.style.boxShadow = "var(--shadow-offset-lg)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "";
          if (shadow) e.currentTarget.style.boxShadow = "var(--shadow-offset)";
        },
        onMouseDown: (e) => {
          e.currentTarget.style.transform = "translate(2px,2px)";
          if (shadow) e.currentTarget.style.boxShadow = "0 0 0 0 var(--near-black)";
        },
        onMouseUp: (e) => {
          e.currentTarget.style.transform = "translate(-2px,-2px)";
          if (shadow) e.currentTarget.style.boxShadow = "var(--shadow-offset-lg)";
        },
      }
    : {};
  return (
    <div style={{ ...base, cursor: interactive ? "pointer" : "default" }} {...handlers} {...rest}>
      {children}
    </div>
  );
}
