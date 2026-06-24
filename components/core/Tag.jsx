import React from "react";

/**
 * NAGU Tag — small uppercase chip for categories, sauce labels, JP accents.
 */
export function Tag({ children, tone = "ink", jp = false, style = {}, ...rest }) {
  const tones = {
    ink: { background: "var(--near-black)", color: "var(--off-white)", border: "2px solid var(--near-black)" },
    red: { background: "var(--nagu-red)", color: "var(--off-white)", border: "2px solid var(--nagu-red)" },
    outline: { background: "transparent", color: "var(--near-black)", border: "2px solid var(--near-black)" },
    cream: { background: "var(--cream)", color: "var(--near-black)", border: "2px solid var(--near-black)" },
    gold: { background: "var(--gold)", color: "var(--near-black)", border: "2px solid var(--near-black)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: jp ? "var(--font-jp)" : "var(--font-sans)",
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: jp ? "0.04em" : "0.12em",
        textTransform: jp ? "none" : "uppercase",
        padding: "4px 9px",
        borderRadius: "var(--radius-pill)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
