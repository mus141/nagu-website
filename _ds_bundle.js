/* @ds-bundle: {"format":3,"namespace":"NAGUDesignSystem_56f253","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"CharacterCard","sourcePath":"components/content/CharacterCard.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"PriceTag","sourcePath":"components/core/PriceTag.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QtyStepper","sourcePath":"components/forms/QtyStepper.jsx"}],"sourceHashes":{"components/content/Card.jsx":"3adb860aa528","components/content/CharacterCard.jsx":"70054a37aec4","components/content/ProductCard.jsx":"d2dce00221b2","components/core/Badge.jsx":"b2b3a9081748","components/core/Button.jsx":"93dc2170d3a8","components/core/PriceTag.jsx":"d8383e1c59a3","components/core/SectionHeading.jsx":"e31fde056025","components/core/Tag.jsx":"73541dec149e","components/forms/Input.jsx":"08c86a410f68","components/forms/QtyStepper.jsx":"abb7a057a7b9","ui_kits/ordering-app/App.jsx":"6904804f18a3","ui_kits/ordering-app/menu-data.js":"4ea726b91c40","ui_kits/website/Site.jsx":"fe6f96fec4df"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NAGUDesignSystem_56f253 = window.NAGUDesignSystem_56f253 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NAGU Card — the base surface: hard black keyline + optional hard
 * offset shadow. Square corners. Paper or ink fill.
 */
function Card({
  children,
  tone = "paper",
  shadow = true,
  interactive = false,
  padding = 20,
  style = {},
  ...rest
}) {
  const tones = {
    paper: {
      background: "var(--paper-0)",
      color: "var(--near-black)"
    },
    cream: {
      background: "var(--cream)",
      color: "var(--near-black)"
    },
    ink: {
      background: "var(--ink-900)",
      color: "var(--off-white)"
    },
    red: {
      background: "var(--nagu-red)",
      color: "var(--off-white)"
    }
  };
  const base = {
    border: "2px solid var(--near-black)",
    borderRadius: "var(--radius-md)",
    boxShadow: shadow ? "var(--shadow-offset)" : "none",
    padding,
    transition: "transform var(--dur-base) var(--ease-snap), box-shadow var(--dur-base) var(--ease-snap)",
    ...tones[tone],
    ...style
  };
  const handlers = interactive ? {
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translate(-2px,-2px)";
      if (shadow) e.currentTarget.style.boxShadow = "var(--shadow-offset-lg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      if (shadow) e.currentTarget.style.boxShadow = "var(--shadow-offset)";
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = "translate(2px,2px)";
      if (shadow) e.currentTarget.style.boxShadow = "0 0 0 0 var(--near-black)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "translate(-2px,-2px)";
      if (shadow) e.currentTarget.style.boxShadow = "var(--shadow-offset-lg)";
    }
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      cursor: interactive ? "pointer" : "default"
    }
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/CharacterCard.jsx
try { (() => {
/**
 * NAGU CharacterCard — collectible mascot card. Framed portrait, name in
 * display caps with a red split, role line, and a JP accent. Built to feel
 * like a tradeable IP card.
 */
function CharacterCard({
  image,
  name,
  role,
  jp,
  number,
  style = {}
}) {
  // split name so the tail colors red, matching the wordmark treatment
  const split = typeof name === "string" && name.length > 2 ? [name.slice(0, -2), name.slice(-2)] : [name, ""];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      background: "var(--ink-900)",
      border: "2px solid var(--near-black)",
      boxShadow: "var(--shadow-offset)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      ...style
    }
  }, number != null && /*#__PURE__*/React.createElement("div", {
    style: {
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
      padding: "2px 8px"
    }
  }, String(number).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3 / 4",
      overflow: "hidden",
      background: "var(--ink-800)"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: typeof name === "string" ? name : "NAGU character",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top center",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px 16px",
      borderTop: "2px solid var(--near-black)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 28,
      lineHeight: 0.95,
      letterSpacing: "0.02em",
      color: "var(--off-white)"
    }
  }, split[0], /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--nagu-red)"
    }
  }, split[1])), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--ink-400)",
      marginTop: 4
    }
  }, role), jp && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 16,
      color: "var(--nagu-red)",
      marginTop: 6
    }
  }, jp)));
}
Object.assign(__ds_scope, { CharacterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CharacterCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NAGU Badge — small count / status indicator. Circular for counts
 * (cart, notifications), block for status flags.
 */
function Badge({
  children,
  tone = "red",
  shape = "round",
  style = {},
  ...rest
}) {
  const tones = {
    red: {
      background: "var(--nagu-red)",
      color: "var(--off-white)"
    },
    ink: {
      background: "var(--near-black)",
      color: "var(--off-white)"
    },
    gold: {
      background: "var(--gold)",
      color: "var(--near-black)"
    },
    cream: {
      background: "var(--cream)",
      color: "var(--near-black)"
    }
  };
  const isRound = shape === "round";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NAGU Button — the signature hard-keyline + hard-offset-shadow control.
 * Snappy press that "stamps down" into its shadow.
 */
function Button({
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
    sm: {
      fontSize: 13,
      padding: "8px 14px",
      gap: 6
    },
    md: {
      fontSize: 15,
      padding: "12px 20px",
      gap: 8
    },
    lg: {
      fontSize: 18,
      padding: "16px 28px",
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: "var(--nagu-red)",
      color: "var(--off-white)",
      border: "var(--border-w) solid var(--near-black)",
      boxShadow: "var(--shadow-offset)"
    },
    dark: {
      background: "var(--near-black)",
      color: "var(--off-white)",
      border: "var(--border-w) solid var(--near-black)",
      boxShadow: "4px 4px 0 0 var(--nagu-red)"
    },
    outline: {
      background: "transparent",
      color: "var(--near-black)",
      border: "var(--border-w) solid var(--near-black)",
      boxShadow: "var(--shadow-offset)"
    },
    ghost: {
      background: "transparent",
      color: "var(--near-black)",
      border: "var(--border-w) solid transparent",
      boxShadow: "none"
    }
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
    transition: "transform var(--dur-fast) var(--ease-snap), box-shadow var(--dur-fast) var(--ease-snap), background var(--dur-fast) var(--ease-snap)",
    userSelect: "none",
    ...variants[variant],
    ...style
  };
  const onDown = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "translate(3px, 3px)";
    if (variant !== "ghost") e.currentTarget.style.boxShadow = "0 0 0 0 var(--near-black)";
  };
  const reset = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = variants[variant].boxShadow;
  };
  const onEnter = e => {
    if (disabled || variant !== "primary") return;
    e.currentTarget.style.background = "var(--red-bright)";
  };
  const onLeave = e => {
    reset(e);
    if (variant === "primary") e.currentTarget.style.background = "var(--nagu-red)";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseDown: onDown,
    onMouseUp: reset,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NAGU PriceTag — a stamped price block (SR currency). The hard-keyline,
 * slightly-rotated "price stamp" look from the menu.
 */
function PriceTag({
  amount,
  currency = "SR",
  size = "md",
  tone = "red",
  rotate = true,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 16,
      padding: "5px 9px",
      cur: 10
    },
    md: {
      fontSize: 22,
      padding: "7px 12px",
      cur: 12
    },
    lg: {
      fontSize: 32,
      padding: "9px 16px",
      cur: 15
    }
  };
  const tones = {
    red: {
      background: "var(--nagu-red)",
      color: "var(--off-white)"
    },
    ink: {
      background: "var(--near-black)",
      color: "var(--off-white)"
    },
    cream: {
      background: "var(--cream)",
      color: "var(--near-black)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sizes[size].cur,
      opacity: 0.85,
      alignSelf: "center"
    }
  }, currency), amount);
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * NAGU SectionHeading — poster-grade section opener with eyebrow,
 * stacked display headline, optional JP accent, and a paint-stroke underline.
 */
function SectionHeading({
  eyebrow,
  children,
  jpAccent,
  align = "left",
  tone = "ink",
  underline = true,
  style = {}
}) {
  const onLight = tone === "ink";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--nagu-red)",
      marginBottom: 10
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      lineHeight: 0.92,
      letterSpacing: "0.01em",
      fontSize: "clamp(34px, 5vw, 64px)",
      margin: 0,
      color: onLight ? "var(--near-black)" : "var(--off-white)"
    }
  }, children), jpAccent && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 20,
      color: "var(--nagu-red)",
      marginTop: 8,
      letterSpacing: "0.06em"
    }
  }, jpAccent), underline && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      marginTop: 16,
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : align === "right" ? 0 : "auto",
      width: 120,
      height: 8,
      background: "var(--nagu-red)",
      transform: "skewX(-12deg)"
    }
  }));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NAGU Tag — small uppercase chip for categories, sauce labels, JP accents.
 */
function Tag({
  children,
  tone = "ink",
  jp = false,
  style = {},
  ...rest
}) {
  const tones = {
    ink: {
      background: "var(--near-black)",
      color: "var(--off-white)",
      border: "2px solid var(--near-black)"
    },
    red: {
      background: "var(--nagu-red)",
      color: "var(--off-white)",
      border: "2px solid var(--nagu-red)"
    },
    outline: {
      background: "transparent",
      color: "var(--near-black)",
      border: "2px solid var(--near-black)"
    },
    cream: {
      background: "var(--cream)",
      color: "var(--near-black)",
      border: "2px solid var(--near-black)"
    },
    gold: {
      background: "var(--gold)",
      color: "var(--near-black)",
      border: "2px solid var(--near-black)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
/**
 * NAGU ProductCard — hero food card. Image block on dark, bold display
 * name, tagline, tag row, stamped price, and an add action slot.
 */
function ProductCard({
  image,
  name,
  tagline,
  price,
  tags = [],
  action = null,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--paper-0)",
      border: "2px solid var(--near-black)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-offset)",
      overflow: "hidden",
      cursor: onClick ? "pointer" : "default",
      transition: "transform var(--dur-base) var(--ease-snap), box-shadow var(--dur-base) var(--ease-snap)",
      ...style
    },
    onMouseEnter: e => {
      if (!onClick) return;
      e.currentTarget.style.transform = "translate(-2px,-2px)";
      e.currentTarget.style.boxShadow = "var(--shadow-offset-lg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-offset)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      background: "var(--near-black)",
      borderBottom: "2px solid var(--near-black)"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), price != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    amount: price,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 24,
      lineHeight: 0.95,
      letterSpacing: "0.01em",
      margin: 0,
      color: "var(--near-black)"
    }
  }, name), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      lineHeight: 1.45,
      color: "var(--ink-500)",
      margin: 0
    }
  }, tagline), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 2
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    tone: i === 0 ? "red" : "outline"
  }, t))), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, action)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NAGU Input — hard-keyline text field. Focus brings a red keyline +
 * a small offset shadow (the "stamp" focus).
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: onLight ? "var(--near-black)" : "var(--off-white)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: onLight ? "var(--paper-0)" : "var(--ink-900)",
      border: `2px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      padding: "0 12px",
      boxShadow: focused ? "3px 3px 0 0 var(--near-black)" : "none",
      transition: "box-shadow var(--dur-fast) var(--ease-snap), border-color var(--dur-fast) var(--ease-snap)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--ink-500)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      padding: "11px 0",
      color: onLight ? "var(--near-black)" : "var(--off-white)"
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: error ? "var(--nagu-red)" : "var(--ink-500)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QtyStepper.jsx
try { (() => {
/**
 * NAGU QtyStepper — quantity control for cart / item screens.
 * Two hard-keyline square buttons flanking a tabular count.
 */
function QtyStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange = () => {},
  size = "md",
  style = {}
}) {
  const sizes = {
    sm: {
      btn: 30,
      font: 14,
      count: 32
    },
    md: {
      btn: 38,
      font: 18,
      count: 40
    },
    lg: {
      btn: 46,
      font: 22,
      count: 52
    }
  };
  const s = sizes[size];
  const set = next => onChange(Math.max(min, Math.min(max, next)));
  const btn = (label, next, disabled) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => set(next),
    style: {
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
      transition: "background var(--dur-fast) var(--ease-snap), transform var(--dur-fast) var(--ease-snap)"
    },
    onMouseEnter: e => !disabled && (e.currentTarget.style.background = "var(--nagu-red)"),
    onMouseLeave: e => e.currentTarget.style.background = "var(--near-black)",
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.9)"),
    onMouseUp: e => e.currentTarget.style.transform = ""
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, btn("–", value - 1, value <= min), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: s.count,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: s.font,
      color: "var(--near-black)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), btn("+", value + 1, value >= max));
}
Object.assign(__ds_scope, { QtyStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QtyStepper.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ordering-app/App.jsx
try { (() => {
/* global React, NAGUDesignSystem_56f253, NAGU_MENU */
const {
  Button,
  Tag,
  Badge,
  PriceTag,
  QtyStepper,
  ProductCard,
  Card
} = window.NAGUDesignSystem_56f253;
const MENU = window.NAGU_MENU;
const RED = "var(--nagu-red)";
const INK = "var(--near-black)";
const PAPER = "var(--off-white)";

// ---- Top bar ---------------------------------------------------------------
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 18px",
      background: INK,
      borderBottom: "2px solid var(--near-black)",
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Nagu-Logo-Secondary.png",
    alt: "NAGU",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: PAPER
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: RED,
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".04em"
    }
  }, "Jeddah \xB7 Corniche")));
}

// ---- Hero drop -------------------------------------------------------------
function HeroDrop({
  onOrder
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: INK,
      borderBottom: "2px solid var(--near-black)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lifestyle/skyline-night.jpeg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: .55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "22px 18px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      color: RED,
      fontSize: 15,
      letterSpacing: ".06em"
    }
  }, "\u5927\u80C6\u306A\u5473 / BOLD FLAVOR"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      color: PAPER,
      fontWeight: 900,
      lineHeight: .9,
      fontSize: 40,
      marginTop: 6
    }
  }, "Burgers crave.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: RED
    }
  }, "Anime craze."), /*#__PURE__*/React.createElement("br", null), "Asian twist."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onOrder,
    iconRight: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\u2192")
  }, "Start Your Order"))));
}

// ---- Category tabs ---------------------------------------------------------
function Tabs({
  active,
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "14px 18px",
      overflowX: "auto",
      position: "sticky",
      top: 55,
      zIndex: 15,
      background: PAPER,
      borderBottom: "2px solid var(--near-black)"
    }
  }, MENU.categories.map(c => {
    const on = c === active;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => onPick(c),
      style: {
        flex: "none",
        fontFamily: "var(--font-display)",
        textTransform: "uppercase",
        fontWeight: 900,
        fontSize: 15,
        letterSpacing: ".03em",
        padding: "7px 14px",
        cursor: "pointer",
        border: "2px solid var(--near-black)",
        borderRadius: "var(--radius-sm)",
        background: on ? RED : "transparent",
        color: on ? PAPER : INK,
        boxShadow: on ? "3px 3px 0 0 var(--near-black)" : "none"
      }
    }, c);
  }));
}

// ---- Item detail sheet -----------------------------------------------------
function ItemSheet({
  item,
  onClose,
  onAdd
}) {
  const [qty, setQty] = React.useState(1);
  if (!item) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 40,
      background: "rgba(12,12,12,.55)",
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      background: PAPER,
      borderTop: "3px solid var(--near-black)",
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      maxHeight: "88%",
      overflowY: "auto",
      animation: "naguSheet .26s cubic-bezier(.2,.8,.2,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 220,
      background: INK,
      borderBottom: "2px solid var(--near-black)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: item.name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      width: 34,
      height: 34,
      border: "2px solid var(--near-black)",
      background: PAPER,
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 18,
      cursor: "pointer"
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 12,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    amount: item.price
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginBottom: 10
    }
  }, item.tags.map((t, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    tone: i === 0 ? "red" : "outline"
  }, t))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 30,
      lineHeight: .95,
      margin: 0,
      color: INK
    }
  }, item.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--text-body)",
      marginTop: 10
    }
  }, item.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(QtyStepper, {
    value: qty,
    onChange: setQty,
    size: "lg"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onAdd(item, qty)
  }, "Add \xB7 SR ", item.price * qty)))));
}

// ---- Menu view -------------------------------------------------------------
function MenuView({
  onOpen,
  onOrder
}) {
  const [tab, setTab] = React.useState(MENU.categories[0]);
  const items = MENU.items.filter(i => i.cat === tab);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroDrop, {
    onOrder: onOrder
  }), /*#__PURE__*/React.createElement(Tabs, {
    active: tab,
    onPick: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, items.map(it => /*#__PURE__*/React.createElement(ProductCard, {
    key: it.id,
    image: it.image,
    name: it.name,
    tagline: it.tagline,
    price: it.price,
    tags: it.tags.slice(0, 1),
    onClick: () => onOpen(it)
  }))));
}

// ---- Cart view -------------------------------------------------------------
function CartView({
  cart,
  onQty,
  onBack
}) {
  const lines = Object.entries(cart).map(([id, qty]) => ({
    item: MENU.items.find(i => i.id === id),
    qty
  }));
  const total = lines.reduce((s, l) => s + l.item.price * l.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: PAPER
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 18px",
      background: INK,
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 34,
      height: 34,
      border: "2px solid var(--near-black)",
      background: PAPER,
      borderRadius: "var(--radius-sm)",
      fontWeight: 900,
      fontSize: 18,
      cursor: "pointer"
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 24,
      color: PAPER
    }
  }, "Your Bag")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, lines.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-500)",
      fontSize: 15
    }
  }, "Bag's empty. Go grab a smash."), lines.map(({
    item,
    qty
  }) => /*#__PURE__*/React.createElement(Card, {
    key: item.id,
    padding: 12
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: "",
    style: {
      width: 64,
      height: 64,
      objectFit: "cover",
      border: "2px solid var(--near-black)",
      borderRadius: "var(--radius-sm)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 17,
      lineHeight: 1,
      color: INK
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-500)",
      marginTop: 4
    }
  }, "SR ", item.price, " each")), /*#__PURE__*/React.createElement(QtyStepper, {
    value: qty,
    onChange: n => onQty(item.id, n),
    size: "sm"
  }))))), lines.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    padding: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--ink-400)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 34,
      color: PAPER
    }
  }, "SR ", total)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    size: "lg"
  }, "Checkout \u2192")))));
}

// ---- App -------------------------------------------------------------------
function App() {
  const [view, setView] = React.useState("menu");
  const [openItem, setOpenItem] = React.useState(null);
  const [cart, setCart] = React.useState({
    "double-smash": 1,
    "loaded-fries": 1
  });
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = Object.entries(cart).reduce((s, [id, q]) => s + MENU.items.find(i => i.id === id).price * q, 0);
  const add = (item, qty) => {
    setCart(c => ({
      ...c,
      [item.id]: (c[item.id] || 0) + qty
    }));
    setOpenItem(null);
  };
  const setQty = (id, n) => setCart(c => {
    const next = {
      ...c
    };
    if (n <= 0) delete next[id];else next[id] = n;
    return next;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: PAPER,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, view === "menu" ? /*#__PURE__*/React.createElement(MenuView, {
    onOpen: setOpenItem,
    onOrder: () => {}
  }) : /*#__PURE__*/React.createElement(CartView, {
    cart: cart,
    onQty: setQty,
    onBack: () => setView("menu")
  })), view === "menu" && count > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: PAPER,
      borderTop: "2px solid var(--near-black)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setView("cart"),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: RED,
      color: PAPER,
      border: "2px solid var(--near-black)",
      boxShadow: "var(--shadow-offset)",
      borderRadius: "var(--radius-sm)",
      padding: "14px 18px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, count), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 18
    }
  }, "View Bag")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 22
    }
  }, "SR ", total))), /*#__PURE__*/React.createElement(ItemSheet, {
    item: openItem,
    onClose: () => setOpenItem(null),
    onAdd: add
  }));
}
ReactDOM.createRoot(document.getElementById("app")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ordering-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ordering-app/menu-data.js
try { (() => {
// NAGU menu data — canonical lineup from the brand deck. Prices in SR.
window.NAGU_MENU = {
  categories: ["Burgers", "Sides", "By CHAN", "Drinks"],
  items: [{
    id: "double-smash",
    cat: "Burgers",
    name: "Old School Double Smash",
    tagline: "Classic, cheesy, satisfying.",
    desc: "Two smashed beef patties, melted cheese, toasted bun. The comfort classic that started it all.",
    price: 22,
    image: "../../assets/products/double-smash.jpeg",
    cut: "../../assets/products/double-smash.png",
    tags: ["Comfort Classic", "Beef"],
    hero: true
  }, {
    id: "korean-beef",
    cat: "Burgers",
    name: "Korean Beef Smash",
    tagline: "Savory, punchy, distinctive.",
    desc: "Smashed beef, gochujang glaze, kimchi crunch, scallion. The Asian twist on a smash.",
    price: 24,
    image: "../../assets/products/korean-beef-smash.jpeg",
    cut: "../../assets/products/korean-beef-smash.png",
    tags: ["Asian Twist", "Spicy"]
  }, {
    id: "fried-chicken",
    cat: "Burgers",
    name: "Asian Fried Chicken",
    tagline: "Crispy, saucy, craveable.",
    desc: "Double-fried chicken thigh, signature glaze, slaw. Crunch you can hear.",
    price: 21,
    image: "../../assets/products/asian-fried-chicken.jpeg",
    cut: "../../assets/products/asian-fried-chicken.png",
    tags: ["Crispy Crunch", "Chicken"]
  }, {
    id: "loaded-fries",
    cat: "Sides",
    name: "Loaded Fries",
    tagline: "Shareable side favorite.",
    desc: "Fries piled with cheese, sauce, and crunch. Made to share — or not.",
    price: 15,
    image: "../../assets/products/loaded-fries.jpeg",
    tags: ["Shareable Hit"]
  }, {
    id: "fries",
    cat: "Sides",
    name: "French Fries",
    tagline: "Crisp. Salted. Classic.",
    desc: "Golden, hot, salted. The one you always add.",
    price: 9,
    image: "../../assets/lifestyle/img-5.jpeg",
    tags: ["Classic"]
  }, {
    id: "kendo-bites",
    cat: "Sides",
    name: "Kendo Chicken Bites",
    tagline: "Bite-size. Big crunch.",
    desc: "Crispy popcorn-style chicken bites with dip. High-repeat snack.",
    price: 13,
    image: "../../assets/products/asian-fried-chicken.jpeg",
    tags: ["Crispy Crunch"]
  }, {
    id: "bulgogi-smash",
    cat: "By CHAN",
    name: "Bulgogi Smash",
    tagline: "Premium co-brand drop.",
    desc: "NAGU by CHAN — bulgogi-marinated smash, signature Korean build. Limited.",
    price: 30,
    image: "../../assets/lifestyle/img-2.jpeg",
    tags: ["NAGU by CHAN", "Limited"]
  }, {
    id: "fire-chicken",
    cat: "By CHAN",
    name: "Fire Chicken",
    tagline: "Premium co-brand drop.",
    desc: "NAGU by CHAN — fire-glazed crispy chicken. Bring the heat.",
    price: 28,
    image: "../../assets/lifestyle/img-3.jpeg",
    tags: ["NAGU by CHAN", "Spicy"]
  }, {
    id: "cola",
    cat: "Drinks",
    name: "Cola",
    tagline: "Ice cold.",
    desc: "Classic fizz. Late-night fuel.",
    price: 7,
    image: "../../assets/lifestyle/lifestyle-extra.jpeg",
    tags: ["Cold"]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ordering-app/menu-data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, NAGUDesignSystem_56f253, NAGU_MENU, lucide */
const {
  useEffect,
  useState,
  useRef
} = React;
const {
  ProductCard,
  CharacterCard,
  Tag
} = window.NAGUDesignSystem_56f253;
const MENU = window.NAGU_MENU;
const RED = "#C8102E",
  REDB = "#E0182F",
  INK = "#141414",
  PAPER = "#ECE7DD";
const TEX = "../../assets/elements/texture-overlay.jpg";
const SKY = "../../assets/lifestyle/skyline-night.jpeg";

/* ---- sharp flat buttons -------------------------------------------------- */
function Btn({
  children,
  kind = "red",
  onLight = true,
  size = "md",
  ...rest
}) {
  const pad = size === "lg" ? "17px 28px" : "14px 22px";
  const fs = size === "lg" ? 19 : 16;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    fontFamily: "var(--font-display)",
    textTransform: "uppercase",
    fontWeight: 900,
    letterSpacing: ".04em",
    fontSize: fs,
    padding: pad,
    border: "2px solid",
    borderRadius: 2,
    transition: "all .14s cubic-bezier(.2,.8,.2,1)",
    lineHeight: 1
  };
  const styles = kind === "red" ? {
    ...base,
    background: RED,
    color: "#fff",
    borderColor: RED
  } : {
    ...base,
    background: "transparent",
    color: onLight ? INK : "#fff",
    borderColor: onLight ? INK : "#fff"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: styles
  }, rest, {
    onMouseEnter: e => {
      if (kind === "red") e.currentTarget.style.background = REDB;else {
        e.currentTarget.style.background = onLight ? INK : "#fff";
        e.currentTarget.style.color = onLight ? "#fff" : INK;
      }
    },
    onMouseLeave: e => {
      if (kind === "red") e.currentTarget.style.background = RED;else {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = onLight ? INK : "#fff";
      }
    }
  }), children, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700
    }
  }, "\u2197"));
}
function Kicker({
  en,
  jp,
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 15,
      letterSpacing: ".18em",
      color: RED
    }
  }, en), jp && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 14,
      letterSpacing: ".1em",
      color: light ? "rgba(255,255,255,.5)" : "#7a726a"
    }
  }, jp));
}
function BigHead({
  children,
  light,
  size = 78
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "12px 0 0",
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      lineHeight: .9,
      letterSpacing: ".01em",
      fontSize: size,
      color: light ? "#fff" : INK
    }
  }, children);
}

/* ---- reusable torn cream panel ------------------------------------------- */
function PaperPanel({
  children,
  padV = 78
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      bottom: 14,
      left: 70,
      right: 70,
      background: PAPER,
      filter: "url(#nagu-torn)",
      boxShadow: "0 30px 70px rgba(0,0,0,.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      bottom: 14,
      left: 70,
      right: 70,
      background: `url(${TEX}) center/cover`,
      mixBlendMode: "multiply",
      opacity: .1,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: `${padV}px 128px`
    }
  }, children));
}

/* ---- neon street sign ---------------------------------------------------- */
function NeonSign({
  children,
  top,
  accent = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top,
      writingMode: "vertical-rl",
      fontFamily: "var(--font-jp)",
      fontSize: 22,
      letterSpacing: ".18em",
      padding: "16px 9px",
      zIndex: 5,
      color: "#fff",
      background: "rgba(10,10,10,.55)",
      border: `2px solid ${accent ? RED : "rgba(232,24,47,.6)"}`,
      boxShadow: "0 0 14px rgba(224,24,47,.7), inset 0 0 12px rgba(224,24,47,.35)",
      textShadow: "0 0 8px rgba(255,60,80,.9)",
      backdropFilter: "blur(2px)"
    }
  }, children);
}
function Feature({
  icon,
  label,
  children,
  border = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0 26px",
      borderLeft: border ? "2px solid rgba(20,20,20,.16)" : "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 26,
      height: 26,
      color: INK
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 17,
      letterSpacing: ".04em",
      color: RED
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "#3a3a3a",
      margin: 0,
      maxWidth: 200
    }
  }, children));
}

/* ========================================================================= */
/* HERO STAGE                                                                */
/* ========================================================================= */
function HeroStage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1440,
      height: 1052,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      background: "#0a0a0a"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SKY,
    alt: "",
    style: {
      position: "absolute",
      left: -40,
      top: -20,
      width: 360,
      height: 1092,
      objectFit: "cover",
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: SKY,
    alt: "",
    style: {
      position: "absolute",
      right: -60,
      top: -20,
      width: 420,
      height: 1092,
      objectFit: "cover",
      opacity: .85,
      transform: "scaleX(-1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(120% 80% at 50% 30%, rgba(10,10,10,.2), rgba(10,10,10,.85) 80%)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: SKY,
    alt: "",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -10,
      width: "100%",
      height: 220,
      objectFit: "cover",
      objectPosition: "center 70%",
      filter: "grayscale(1) contrast(1.1) brightness(.7)",
      opacity: .55
    }
  })), /*#__PURE__*/React.createElement(NeonSign, {
    top: 86
  }, "\u6771\u4EAC \xD7 \u6F22\u5821"), /*#__PURE__*/React.createElement(NeonSign, {
    top: 300,
    accent: true
  }, "\u30D0\u30FC\u30AC\u30FC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 8,
      top: 360,
      writingMode: "vertical-rl",
      background: RED,
      color: "#fff",
      fontFamily: "var(--font-jp)",
      fontSize: 26,
      letterSpacing: ".2em",
      padding: "26px 10px",
      border: "2px solid #0a0a0a",
      boxShadow: "0 0 18px rgba(224,24,47,.6)",
      zIndex: 5
    }
  }, "\u30D0\u30FC\u30AC\u30FC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 18,
      left: 70,
      width: 1300,
      height: 884,
      background: PAPER,
      filter: "url(#nagu-torn)",
      boxShadow: "0 36px 90px rgba(0,0,0,.6)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 18,
      left: 70,
      width: 1300,
      height: 884,
      background: `url(${TEX}) center/cover`,
      mixBlendMode: "multiply",
      opacity: .12,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 18,
      left: 70,
      width: 1300,
      height: 884,
      padding: "40px 56px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Nagu-Logo-Primary.png",
    alt: "NAGU",
    style: {
      height: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28
    }
  }, ["Menu", "Universe", "Drops", "Merch", "Locations"].map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      textDecoration: "none",
      color: INK,
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 17,
      letterSpacing: ".03em",
      borderBottom: i === 0 ? `3px solid ${RED}` : "3px solid transparent",
      paddingBottom: 4
    }
  }, l)))), /*#__PURE__*/React.createElement(Btn, {
    kind: "red"
  }, "Order Now")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.02fr 0.98fr",
      gap: 16,
      marginTop: 28,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      lineHeight: .82,
      letterSpacing: ".005em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 150,
      color: INK
    }
  }, "Street"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 150,
      color: RED
    }
  }, "Smash", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 24,
      color: "#4a4a4a",
      letterSpacing: ".1em",
      marginLeft: 18,
      verticalAlign: "middle",
      textTransform: "none"
    }
  }, "\u30B9\u30DE\u30C3\u30B7\u30E5"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 19,
      lineHeight: 1.5,
      color: "#2a2a2a",
      margin: "22px 0 0",
      fontWeight: 500,
      maxWidth: 440
    }
  }, "Jeddah's first Japo burger joint.", /*#__PURE__*/React.createElement("br", null), "Burgers crave. Anime craze. Asian twist."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "red"
  }, "Follow the Drop"), /*#__PURE__*/React.createElement(Btn, {
    kind: "outline"
  }, "View the Menu")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -34,
      bottom: -22,
      width: 156,
      transform: "rotate(-5deg)",
      background: "#fff",
      padding: "10px 10px 14px",
      boxShadow: "0 10px 26px rgba(0,0,0,.3)",
      border: "1px solid #ddd"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -12,
      left: "50%",
      transform: "translateX(-50%) rotate(3deg)",
      width: 70,
      height: 22,
      background: "rgba(200,16,46,.25)",
      border: "1px solid rgba(200,16,46,.4)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/characters/fifu.jpeg",
    alt: "",
    style: {
      width: "100%",
      height: 150,
      objectFit: "cover",
      objectPosition: "top center",
      filter: "grayscale(1) contrast(1.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 13,
      lineHeight: 1.05,
      color: INK,
      marginTop: 8,
      letterSpacing: ".02em"
    }
  }, "Bold Flavors.", /*#__PURE__*/React.createElement("br", null), "Sharp Style.", /*#__PURE__*/React.createElement("br", null), "Asian Soul."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/characters/nagu.jpeg",
    alt: "",
    style: {
      position: "absolute",
      left: 10,
      top: 0,
      width: 300,
      height: 440,
      objectFit: "cover",
      objectPosition: "top center",
      filter: "grayscale(1) contrast(1.2) brightness(1.15)",
      opacity: .16
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/products/double-smash.png",
    alt: "NAGU smash burger",
    style: {
      position: "absolute",
      right: -10,
      top: 70,
      width: 470,
      filter: "drop-shadow(0 24px 30px rgba(0,0,0,.45))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -36,
      top: -8,
      width: 196,
      border: "2px solid #0a0a0a",
      boxShadow: "0 14px 30px rgba(0,0,0,.4)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SKY,
    alt: "",
    style: {
      width: "100%",
      height: 120,
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: RED,
      color: "#fff",
      padding: "8px 10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 15,
      lineHeight: 1
    }
  }, "NAGU", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      letterSpacing: ".22em"
    }
  }, "Burger Drop")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      opacity: .9
    }
  }, "\u30D0\u30FC\u30AC\u30FC"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: "rgba(20,20,20,.18)",
      margin: "8px 0 22px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)"
    }
  }, /*#__PURE__*/React.createElement(Feature, {
    icon: "flame",
    label: "Japo Soul"
  }, "Where Japanese inspiration meets bold street flavors."), /*#__PURE__*/React.createElement(Feature, {
    icon: "beef",
    label: "Crafted Bold",
    border: true
  }, "Smashed, stacked, and seasoned with purpose."), /*#__PURE__*/React.createElement(Feature, {
    icon: "zap",
    label: "Anime Energy",
    border: true
  }, "Inspired by anime. Fueled by hustle. Made to stand out."), /*#__PURE__*/React.createElement(Feature, {
    icon: "sparkles",
    label: "Made Different",
    border: true
  }, "Not just another burger. A culture. A vibe. A statement."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 70,
      right: 70,
      top: 916,
      height: 120,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 8px",
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 16,
      letterSpacing: ".14em",
      color: "#fff"
    }
  }, "Stay in the Loop"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 10,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "at-sign",
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 14
    }
  }, "@nagu.burgers")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "rgba(255,255,255,.6)",
      marginTop: 8
    }
  }, "Drops. Collabs. Chaos. Don't blink.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/characters/biku.jpeg",
    alt: "",
    style: {
      position: "absolute",
      left: "50%",
      bottom: -8,
      transform: "translateX(-50%)",
      height: 150,
      filter: "grayscale(1) contrast(1.2)",
      maskImage: "linear-gradient(to top, transparent, #000 30%)",
      WebkitMaskImage: "linear-gradient(to top, transparent, #000 30%)",
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      background: RED,
      color: "#fff",
      padding: "12px 18px",
      transform: "rotate(-1.5deg)",
      border: "2px solid #0a0a0a",
      boxShadow: "0 12px 26px rgba(0,0,0,.4)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Nagu-Logo-Secondary.png",
    alt: "NAGU",
    style: {
      height: 26,
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 18,
      letterSpacing: ".1em"
    }
  }, "\u30C1\u30B0"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 2,
      height: 30
    }
  }, [3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 1, 3, 2].map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: w,
      height: "100%",
      background: "#0a0a0a"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 22
    }
  }, "'24"))));
}

/* ========================================================================= */
/* LINEUP                                                                    */
/* ========================================================================= */
function Lineup() {
  const heroes = MENU.items.filter(i => i.cat === "Burgers");
  return /*#__PURE__*/React.createElement(PaperPanel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    en: "The Lineup",
    jp: "\u30E1\u30CB\u30E5\u30FC"
  }), /*#__PURE__*/React.createElement(BigHead, null, "Built for repeat.")), /*#__PURE__*/React.createElement(Btn, {
    kind: "outline"
  }, "Full Menu")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24,
      marginTop: 44
    }
  }, heroes.map(it => /*#__PURE__*/React.createElement(ProductCard, {
    key: it.id,
    image: it.image,
    name: it.name,
    tagline: it.tagline,
    price: it.price,
    tags: it.tags,
    action: /*#__PURE__*/React.createElement(Btn, {
      kind: "red",
      size: "md"
    }, "Add to Order")
  }))));
}

/* ========================================================================= */
/* LATEST DROP + COUNTDOWN                                                   */
/* ========================================================================= */
function Countdown() {
  const target = useRef(Date.now() + ((2 * 24 + 9) * 3600 + 41 * 60 + 12) * 1000);
  const calc = () => Math.max(0, target.current - Date.now());
  const [ms, setMs] = useState(calc());
  useEffect(() => {
    const i = setInterval(() => setMs(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  const s = Math.floor(ms / 1000);
  const parts = [["Days", Math.floor(s / 86400)], ["Hrs", Math.floor(s % 86400 / 3600)], ["Min", Math.floor(s % 3600 / 60)], ["Sec", s % 60]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 26
    }
  }, parts.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      minWidth: 78,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.25)",
      padding: "12px 6px",
      background: "rgba(0,0,0,.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 40,
      lineHeight: 1,
      color: "#fff"
    }
  }, String(v).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: RED,
      marginTop: 6
    }
  }, l))));
}
function LatestDrop() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1440,
      padding: "92px 198px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "#0d0d0d"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url(${TEX}) center/cover`,
      mixBlendMode: "screen",
      opacity: .06
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    en: "Latest Drop",
    jp: "\u9650\u5B9A / Limited",
    light: true
  }), /*#__PURE__*/React.createElement(BigHead, {
    light: true,
    size: 72
  }, "NAGU \xD7 CHAN."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: 1.55,
      color: "rgba(255,255,255,.72)",
      marginTop: 18,
      maxWidth: 460
    }
  }, "The premium co-brand drops next week. Bulgogi Smash, Fire Chicken, Kimchi Double Cheese \u2014 limited, fast, unpredictable. Built to sell out."), /*#__PURE__*/React.createElement(Countdown, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "red",
    size: "lg"
  }, "Set a Reminder"), /*#__PURE__*/React.createElement(Btn, {
    kind: "outline",
    onLight: false,
    size: "lg"
  }, "See Drops"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -18,
      left: -18,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "red"
  }, "Limited")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "3px solid #fff",
      boxShadow: "0 24px 60px rgba(0,0,0,.6)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lifestyle/img-2.jpeg",
    alt: "NAGU by CHAN \u2014 Bulgogi Smash",
    style: {
      width: "100%",
      height: 420,
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -20,
      right: -16,
      background: RED,
      color: "#fff",
      border: "2px solid #0a0a0a",
      padding: "10px 16px",
      transform: "rotate(-3deg)",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 26
    }
  }, "SR 30 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 14
    }
  }, "\u30D6\u30EB\u30B4\u30AE")))));
}

/* ========================================================================= */
/* THE UNIVERSE / SIBLINGS                                                   */
/* ========================================================================= */
function Universe() {
  const crew = [{
    image: "../../assets/characters/nagu.jpeg",
    name: "NAGU",
    role: "The Culture Creator",
    jp: "ナグ",
    number: 1
  }, {
    image: "../../assets/characters/biku.jpeg",
    name: "BIKU",
    role: "Open-Grill Jester",
    jp: "ビク",
    number: 2
  }, {
    image: "../../assets/characters/fifu.jpeg",
    name: "FIFU",
    role: "Street Scout",
    jp: "フィフ",
    number: 3
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1440,
      padding: "92px 128px",
      boxSizing: "border-box",
      background: "#0a0a0a",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SKY,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: .22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,10,10,.7), rgba(10,10,10,.92))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    en: "The Universe",
    jp: "\u30B6\u30FB\u30E6\u30CB\u30D0\u30FC\u30B9 / Web Verse",
    light: true
  }), /*#__PURE__*/React.createElement(BigHead, {
    light: true
  }, "Meet the siblings."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      lineHeight: 1.55,
      color: "rgba(255,255,255,.7)",
      marginTop: 16,
      maxWidth: 560
    }
  }, "Three sibling samurai. Streetwear-dressed, katana-carrying, sneaker-flexing. We use anime culture \u2014 we don't copy it.")), /*#__PURE__*/React.createElement(Btn, {
    kind: "red"
  }, "Enter the Web Verse")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24,
      marginTop: 44
    }
  }, crew.map(c => /*#__PURE__*/React.createElement(CharacterCard, _extends({
    key: c.name
  }, c))))));
}

/* ========================================================================= */
/* LOCATIONS                                                                 */
/* ========================================================================= */
function Locations() {
  const locs = [{
    city: "Jeddah",
    area: "Corniche Window",
    status: "Open Now",
    on: true
  }, {
    city: "Riyadh",
    area: "Olaya · Opening Soon",
    status: "Coming Soon",
    on: false
  }];
  return /*#__PURE__*/React.createElement(PaperPanel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    en: "Locations",
    jp: "\u30ED\u30B1\u30FC\u30B7\u30E7\u30F3"
  }), /*#__PURE__*/React.createElement(BigHead, null, "Find a NAGU."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      lineHeight: 1.55,
      color: "#3a3a3a",
      margin: "16px 0 26px",
      maxWidth: 380
    }
  }, "Compact footprint. Big street presence. Grab-and-go windows built for speed \u2014 and delivery from day one."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, locs.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.city,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "2px solid #141414",
      background: "#fff",
      padding: "16px 18px",
      boxShadow: "4px 4px 0 0 #141414"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 22,
      height: 22,
      color: RED
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 22,
      lineHeight: 1,
      color: INK
    }
  }, l.city), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "#6a6a6a",
      marginTop: 3
    }
  }, l.area))), /*#__PURE__*/React.createElement(Tag, {
    tone: l.on ? "red" : "outline"
  }, l.status)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "red",
    size: "lg"
  }, "Order Now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      border: "3px solid #141414",
      boxShadow: "8px 8px 0 0 #141414"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SKY,
    alt: "Jeddah",
    style: {
      width: "100%",
      height: 380,
      objectFit: "cover",
      display: "block",
      filter: "saturate(1.1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "42%",
      left: "38%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: RED,
      border: "3px solid #fff",
      boxShadow: "0 0 0 6px rgba(200,16,46,.35)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 12,
      left: 12,
      background: "rgba(10,10,10,.8)",
      color: "#fff",
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      padding: "6px 10px",
      letterSpacing: ".1em"
    }
  }, "\u30B8\u30A7\u30C3\u30C0 \xB7 \u6D77\u5CB8\u901A\u308A"))));
}

/* ========================================================================= */
/* DROP-ALERT SIGNUP                                                         */
/* ========================================================================= */
function Signup() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1440,
      background: RED,
      padding: "72px 128px",
      boxSizing: "border-box",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url(${TEX}) center/cover`,
      mixBlendMode: "multiply",
      opacity: .14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    en: "Drop Alerts",
    jp: "\u901A\u77E5",
    light: true
  }), /*#__PURE__*/React.createElement(BigHead, {
    light: true,
    size: 68
  }, "Don't miss a drop."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "rgba(255,255,255,.85)",
      marginTop: 14
    }
  }, "Email or SMS. Drops. Collabs. Chaos. Don't blink.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 0,
      border: "2px solid #0a0a0a",
      background: "#fff",
      boxShadow: "8px 8px 0 0 #0a0a0a",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "your@email.com",
    style: {
      border: "none",
      outline: "none",
      padding: "16px 18px",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      width: 300,
      background: "transparent",
      color: INK
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      border: "none",
      background: INK,
      color: "#fff",
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 16,
      letterSpacing: ".05em",
      padding: "0 26px",
      cursor: "pointer"
    }
  }, "Join"))));
}

/* ========================================================================= */
/* FOOTER                                                                    */
/* ========================================================================= */
function Footer() {
  const cols = [["Menu", ["Smash Burgers", "Asian Fried Chicken", "Sides", "NAGU by CHAN", "Combos"]], ["The Universe", ["Meet the Siblings", "Sauce Characters", "Lore", "Animated Drops", "Downloads"]], ["Shop", ["Drops", "Apparel & Gear", "Character Cards", "Sticker Packs", "Pins"]], ["More", ["Rewards", "Locations", "Franchise", "About", "Careers"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      width: 1440,
      background: "#0a0a0a",
      color: "#fff",
      padding: "72px 128px 40px",
      boxSizing: "border-box",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -40,
      bottom: -60,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 320,
      color: "rgba(255,255,255,.04)",
      lineHeight: .8,
      pointerEvents: "none"
    }
  }, "NAGU"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.3fr repeat(4, 1fr)",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Nagu-Logo-Secondary.png",
    alt: "NAGU",
    style: {
      height: 38,
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      color: RED,
      fontSize: 15,
      marginTop: 14,
      letterSpacing: ".08em"
    }
  }, "\u5927\u80C6\u306A\u5473 \xB7 \u30CA\u30B0"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "rgba(255,255,255,.55)",
      marginTop: 14,
      lineHeight: 1.6,
      maxWidth: 240
    }
  }, "Content. Culture. Community. The street-pop smash hit \u2014 built in Jeddah."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 18
    }
  }, ["at-sign", "video", "message-circle"].map(ic => /*#__PURE__*/React.createElement("span", {
    key: ic,
    style: {
      width: 38,
      height: 38,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid rgba(255,255,255,.3)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 18,
      height: 18,
      color: "#fff"
    }
  }))))), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 15,
      letterSpacing: ".1em",
      color: RED,
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      textDecoration: "none",
      color: "rgba(255,255,255,.72)",
      fontFamily: "var(--font-sans)",
      fontSize: 14
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 48,
      paddingTop: 22,
      borderTop: "1px solid rgba(255,255,255,.14)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "rgba(255,255,255,.5)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 NAGU 2024"), /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Terms"), /*#__PURE__*/React.createElement("span", null, "Cookies")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ["EN", "日本語", "العربية"].map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 12.5,
      padding: "5px 11px",
      border: "1px solid rgba(255,255,255,.25)",
      color: i === 0 ? "#fff" : "rgba(255,255,255,.55)",
      background: i === 0 ? "rgba(255,255,255,.1)" : "transparent"
    }
  }, l)))));
}

/* ========================================================================= */
function Site() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      width: 0,
      height: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("filter", {
    id: "nagu-torn"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.016 0.024",
    numOctaves: "4",
    seed: "9",
    result: "n"
  }), /*#__PURE__*/React.createElement("feDisplacementMap", {
    in: "SourceGraphic",
    in2: "n",
    scale: "17",
    xChannelSelector: "R",
    yChannelSelector: "G"
  }))), /*#__PURE__*/React.createElement(HeroStage, null), /*#__PURE__*/React.createElement(Lineup, null), /*#__PURE__*/React.createElement(LatestDrop, null), /*#__PURE__*/React.createElement(Universe, null), /*#__PURE__*/React.createElement(Locations, null), /*#__PURE__*/React.createElement(Signup, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 26,
      bottom: 26,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: RED,
      color: "#fff",
      border: "2px solid #0a0a0a",
      borderRadius: 2,
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      fontWeight: 900,
      fontSize: 17,
      letterSpacing: ".04em",
      padding: "15px 24px",
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(200,16,46,.5)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shopping-bag",
    style: {
      width: 18,
      height: 18
    }
  }), " Order Now")));
}
ReactDOM.createRoot(document.getElementById("site")).render(/*#__PURE__*/React.createElement(Site, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CharacterCard = __ds_scope.CharacterCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QtyStepper = __ds_scope.QtyStepper;

})();
