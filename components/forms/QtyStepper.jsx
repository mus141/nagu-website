import React from "react";

/**
 * NAGU QtyStepper — quantity control for cart / item screens.
 * Two hard-keyline square buttons flanking a tabular count.
 */
export function QtyStepper({ value = 1, min = 1, max = 99, onChange = () => {}, size = "md", style = {} }) {
  const sizes = {
    sm: { btn: 30, font: 14, count: 32 },
    md: { btn: 38, font: 18, count: 40 },
    lg: { btn: 46, font: 22, count: 52 },
  };
  const s = sizes[size];
  const set = (next) => onChange(Math.max(min, Math.min(max, next)));

  const btn = (label, next, disabled) => (
    <button
      type="button"
      disabled={disabled}
      onClick={() => set(next)}
      style={{
        width: s.btn,
        height: s.btn,
        flex: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: s.font + 4,
        lineHeight: 1,
        background: "var(--near-black)",
        color: "var(--off-white)",
        border: "2px solid var(--near-black)",
        borderRadius: "var(--radius-sm)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.35 : 1,
        transition: "background var(--dur-fast) var(--ease-snap), transform var(--dur-fast) var(--ease-snap)",
      }}
      onMouseEnter={(e) => !disabled && (e.currentTarget.style.background = "var(--nagu-red)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--near-black)")}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(0.9)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "")}
    >
      {label}
    </button>
  );

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, ...style }}>
      {btn("–", value - 1, value <= min)}
      <span
        style={{
          minWidth: s.count,
          textAlign: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: s.font,
          color: "var(--near-black)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </span>
      {btn("+", value + 1, value >= max)}
    </div>
  );
}
