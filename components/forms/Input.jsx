import React from "react";

/**
 * NAGU Input — hard-keyline text field. Focus brings a red keyline +
 * a small offset shadow (the "stamp" focus).
 */
export function Input({
  label,
  hint,
  error,
  iconLeft = null,
  tone = "light",
  style = {},
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const onLight = tone === "light";
  const inputId = id || (label ? `nagu-in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const borderColor = error ? "var(--nagu-red)" : focused ? "var(--nagu-red)" : "var(--near-black)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: onLight ? "var(--near-black)" : "var(--off-white)",
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: onLight ? "var(--paper-0)" : "var(--ink-900)",
          border: `2px solid ${borderColor}`,
          borderRadius: "var(--radius-sm)",
          padding: "0 12px",
          boxShadow: focused ? "3px 3px 0 0 var(--near-black)" : "none",
          transition: "box-shadow var(--dur-fast) var(--ease-snap), border-color var(--dur-fast) var(--ease-snap)",
        }}
      >
        {iconLeft && <span style={{ display: "flex", color: "var(--ink-500)" }}>{iconLeft}</span>}
        <input
          id={inputId}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            padding: "11px 0",
            color: onLight ? "var(--near-black)" : "var(--off-white)",
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: error ? "var(--nagu-red)" : "var(--ink-500)",
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
