import React from "react";
import { PriceTag } from "../core/PriceTag.jsx";
import { Tag } from "../core/Tag.jsx";

/**
 * NAGU ProductCard — hero food card. Image block on dark, bold display
 * name, tagline, tag row, stamped price, and an add action slot.
 */
export function ProductCard({
  image,
  name,
  tagline,
  price,
  tags = [],
  action = null,
  onClick,
  style = {},
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--paper-0)",
        border: "2px solid var(--near-black)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-offset)",
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        transition: "transform var(--dur-base) var(--ease-snap), box-shadow var(--dur-base) var(--ease-snap)",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!onClick) return;
        e.currentTarget.style.transform = "translate(-2px,-2px)";
        e.currentTarget.style.boxShadow = "var(--shadow-offset-lg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "var(--shadow-offset)";
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "4 / 3",
          background: "var(--near-black)",
          borderBottom: "2px solid var(--near-black)",
        }}
      >
        {image && (
          <img
            src={image}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )}
        {price != null && (
          <div style={{ position: "absolute", top: 10, right: 10 }}>
            <PriceTag amount={price} size="sm" />
          </div>
        )}
      </div>
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            textTransform: "uppercase",
            fontWeight: 900,
            fontSize: 24,
            lineHeight: 0.95,
            letterSpacing: "0.01em",
            margin: 0,
            color: "var(--near-black)",
          }}
        >
          {name}
        </h3>
        {tagline && (
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.45, color: "var(--ink-500)", margin: 0 }}>
            {tagline}
          </p>
        )}
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 2 }}>
            {tags.map((t, i) => (
              <Tag key={i} tone={i === 0 ? "red" : "outline"}>
                {t}
              </Tag>
            ))}
          </div>
        )}
        {action && <div style={{ marginTop: 6 }}>{action}</div>}
      </div>
    </div>
  );
}
