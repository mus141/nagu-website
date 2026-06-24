import React from "react";

/**
 * NAGU Button — the signature hard-keyline + hard-offset-shadow control.
 * Snappy press that "stamps down" into its shadow.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { fontSize: 13, padding: "8px 14px", gap: 6 },
    md: { fontSize: 15, padding: "12px 20px", gap: 8 },
    lg: { fontSize: 18, padding: "16px 28px", gap: 10 },
  };
  const variants = {
    primary: {
      background: "var(--nagu-red)",
      color: "var(--off-white)",
      border: "var(--border-w) solid var(--near-black)",
      boxShadow: "var(--shadow-offset)",
    },
    dark: {
      background: "var(--near-black)",
      color: "var(--off-white)",
      border: "var(--border-w) solid var(--near-black)",
      boxShadow: "4px 4px 0 0 var(--nagu-red)",
    },
    outline: {
      background: "transparent",
      color: "var(--near-black)",
      border: "var(--border-w) solid var(--near-black)",
      boxShadow: "var(--shadow-offset)",
    },
    ghost: {
      background: "transparent",
      color: "var(--near-black)",
      border: "var(--border-w) solid transparent",
      boxShadow: "none",
    },
  };

  const base = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-display)",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    fontWeight: 900,
    lineHeight: 1,
    fontSize: sizes[size].fontSize,
    padding: sizes[size].padding,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform var(--dur-fast) var(--ease-snap), box-shadow var(--dur-fast) var(--ease-snap), background var(--dur-fast) var(--ease-snap)",
    userSelect: "none",
    ...variants[variant],
    ...style,
  };

  const onDown = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = "translate(3px, 3px)";
    if (variant !== "ghost") e.currentTarget.style.boxShadow = "0 0 0 0 var(--near-black)";
  };
  const reset = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = variants[variant].boxShadow;
  };
  const onEnter = (e) => {
    if (disabled || variant !== "primary") return;
    e.currentTarget.style.background = "var(--red-bright)";
  };
  const onLeave = (e) => {
    reset(e);
    if (variant === "primary") e.currentTarget.style.background = "var(--nagu-red)";
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={base}
      onMouseDown={onDown}
      onMouseUp={reset}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
