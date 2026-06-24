import React from "react";

/**
 * NAGU Badge — small count / status indicator. Circular for counts
 * (cart, notifications), block for status flags.
 */
export function Badge({ children, tone = "red", shape = "round", style = {}, ...rest }) {
  const tones = {
    red: { background: "var(--nagu-red)", color: "var(--off-white)" },
    ink: { background: "var(--near-black)", color: "var(--off-white)" },
    gold: { background: "var(--gold)", color: "var(--near-black)" },
    cream: { background: "var(--cream)", color: "var(--near-black)" },
  };
  const isRound = shape === "round";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 1,
        minWidth: isRound ? 20 : undefined,
        height: 20,
        padding: isRound ? "0 5px" : "0 8px",
        borderRadius: isRound ? "var(--radius-pill)" : "var(--radius-sm)",
        border: "2px solid var(--near-black)",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
