import React from "react";

/**
 * NAGU CharacterCard — collectible mascot card. Framed portrait, name in
 * display caps with a red split, role line, and a JP accent. Built to feel
 * like a tradeable IP card.
 */
export function CharacterCard({ image, name, role, jp, number, style = {} }) {
  // split name so the tail colors red, matching the wordmark treatment
  const split = typeof name === "string" && name.length > 2 ? [name.slice(0, -2), name.slice(-2)] : [name, ""];
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        background: "var(--ink-900)",
        border: "2px solid var(--near-black)",
        boxShadow: "var(--shadow-offset)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        ...style,
      }}
    >
      {number != null && (
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 2,
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 18,
            color: "var(--off-white)",
            background: "var(--nagu-red)",
            border: "2px solid var(--near-black)",
            borderRadius: "var(--radius-sm)",
            padding: "2px 8px",
          }}
        >
          {String(number).padStart(2, "0")}
        </div>
      )}
      <div style={{ aspectRatio: "3 / 4", overflow: "hidden", background: "var(--ink-800)" }}>
        {image && (
          <img
            src={image}
            alt={typeof name === "string" ? name : "NAGU character"}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
          />
        )}
      </div>
      <div style={{ padding: "12px 14px 16px", borderTop: "2px solid var(--near-black)" }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            textTransform: "uppercase",
            fontWeight: 900,
            fontSize: 28,
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            color: "var(--off-white)",
          }}
        >
          {split[0]}
          <span style={{ color: "var(--nagu-red)" }}>{split[1]}</span>
        </div>
        {role && (
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink-400)",
              marginTop: 4,
            }}
          >
            {role}
          </div>
        )}
        {jp && (
          <div style={{ fontFamily: "var(--font-jp)", fontSize: 16, color: "var(--nagu-red)", marginTop: 6 }}>{jp}</div>
        )}
      </div>
    </div>
  );
}
