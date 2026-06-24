import React from "react";

/**
 * NAGU PriceTag — a stamped price block (SR currency). The hard-keyline,
 * slightly-rotated "price stamp" look from the menu.
 */
export function PriceTag({ amount, currency = "SR", size = "md", tone = "red", rotate = true, style = {}, ...rest }) {
  const sizes = {
    sm: { fontSize: 16, padding: "5px 9px", cur: 10 },
    md: { fontSize: 22, padding: "7px 12px", cur: 12 },
    lg: { fontSize: 32, padding: "9px 16px", cur: 15 },
  };
  const tones = {
    red: { background: "var(--nagu-red)", color: "var(--off-white)" },
    ink: { background: "var(--near-black)", color: "var(--off-white)" },
    cream: { background: "var(--cream)", color: "var(--near-black)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 3,
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: "0.01em",
        padding: sizes[size].padding,
        border: "2px solid var(--near-black)",
        boxShadow: "var(--shadow-offset)",
        borderRadius: "var(--radius-sm)",
        transform: rotate ? "rotate(-3deg)" : "none",
        fontSize: sizes[size].fontSize,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontSize: sizes[size].cur, opacity: 0.85, alignSelf: "center" }}>{currency}</span>
      {amount}
    </span>
  );
}
