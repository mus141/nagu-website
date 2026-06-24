import React from "react";

/**
 * NAGU SectionHeading — poster-grade section opener with eyebrow,
 * stacked display headline, optional JP accent, and a paint-stroke underline.
 */
export function SectionHeading({
  eyebrow,
  children,
  jpAccent,
  align = "left",
  tone = "ink",
  underline = true,
  style = {},
}) {
  const onLight = tone === "ink";
  return (
    <div style={{ textAlign: align, ...style }}>
      {eyebrow && (
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--nagu-red)",
            marginBottom: 10,
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          textTransform: "uppercase",
          fontWeight: 900,
          lineHeight: 0.92,
          letterSpacing: "0.01em",
          fontSize: "clamp(34px, 5vw, 64px)",
          margin: 0,
          color: onLight ? "var(--near-black)" : "var(--off-white)",
        }}
      >
        {children}
      </h2>
      {jpAccent && (
        <div
          style={{
            fontFamily: "var(--font-jp)",
            fontSize: 20,
            color: "var(--nagu-red)",
            marginTop: 8,
            letterSpacing: "0.06em",
          }}
        >
          {jpAccent}
        </div>
      )}
      {underline && (
        <div
          aria-hidden="true"
          style={{
            marginTop: 16,
            marginLeft: align === "center" ? "auto" : 0,
            marginRight: align === "center" ? "auto" : align === "right" ? 0 : "auto",
            width: 120,
            height: 8,
            background: "var(--nagu-red)",
            transform: "skewX(-12deg)",
          }}
        />
      )}
    </div>
  );
}
