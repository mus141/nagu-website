(() => {
  const { useEffect, useState, useRef } = React;
  const { ProductCard, Tag } = window.NAGUDesignSystem_56f253;
  const { CharCard, MenuCard } = window.NAGUSite;
  const MENU = window.NAGU_MENU;
  const RED = "#C8102E";
  const REDB = "#E0182F";
  const REDT = "#FF3344";
  const INK = "#141414";
  const PAPER = "#ECE7DD";
  const TEX = "../../assets/elements/texture-overlay.jpg";
  const SKY = "../../assets/lifestyle/skyline-night.jpeg";
  function Btn({ children, kind = "red", onLight = true, size = "md", href, ...rest }) {
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
      lineHeight: 1,
      textDecoration: "none"
    };
    const styles = kind === "red" ? { ...base, background: RED, color: "#fff", borderColor: RED } : { ...base, background: "transparent", color: onLight ? INK : "#fff", borderColor: onLight ? INK : "#fff" };
    const Tag2 = href ? "a" : "button";
    return /* @__PURE__ */ React.createElement(
      Tag2,
      {
        style: styles,
        href,
        ...rest,
        onMouseEnter: (e) => {
          if (kind === "red") e.currentTarget.style.background = REDB;
          else {
            e.currentTarget.style.background = onLight ? INK : "#fff";
            e.currentTarget.style.color = onLight ? "#fff" : INK;
          }
        },
        onMouseLeave: (e) => {
          if (kind === "red") e.currentTarget.style.background = RED;
          else {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = onLight ? INK : "#fff";
          }
        }
      },
      children,
      /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 700 } }, "\u2197")
    );
  }
  function Kicker({ en, jp, light, enColor }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 15, letterSpacing: ".18em", color: enColor || (light ? REDT : RED) } }, en), jp && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-jp)", fontSize: 14, letterSpacing: ".1em", color: light ? "rgba(255,255,255,.5)" : "#7a726a" } }, jp));
  }
  function BigHead({ children, light, size = 78 }) {
    return /* @__PURE__ */ React.createElement("h2", { style: { margin: "18px 0 0", fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, lineHeight: 1.02, letterSpacing: ".01em", fontSize: size, color: light ? "#fff" : INK } }, children);
  }
  function PaperPanel({ children, padV = 78 }) {
    return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 1440 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 14, bottom: 14, left: 70, right: 70, background: PAPER, filter: "url(#nagu-torn)", boxShadow: "0 30px 70px rgba(0,0,0,.5)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 14, bottom: 14, left: 70, right: 70, background: `url(${TEX}) center/cover`, mixBlendMode: "multiply", opacity: 0.1, pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", padding: `${padV}px 128px` } }, children));
  }
  function NeonSign({ children, top, accent = false }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
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
    } }, children);
  }
  function Feature({ icon, label, children, border = false }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, padding: "0 26px", borderLeft: border ? "2px solid rgba(20,20,20,.16)" : "none" } }, /* @__PURE__ */ React.createElement("i", { "data-lucide": icon, style: { width: 26, height: 26, color: INK } }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 17, letterSpacing: ".04em", color: RED } }, label), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.5, color: "#3a3a3a", margin: 0, maxWidth: 200 } }, children));
  }
  function HeroStage() {
    return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 1440, height: 1052, flex: "none" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, overflow: "hidden", background: "#0a0a0a" } }, /* @__PURE__ */ React.createElement("img", { src: SKY, alt: "", style: { position: "absolute", left: -40, top: -20, width: 360, height: 1092, objectFit: "cover", opacity: 0.9 } }), /* @__PURE__ */ React.createElement("img", { src: SKY, alt: "", style: { position: "absolute", right: -60, top: -20, width: 420, height: 1092, objectFit: "cover", opacity: 0.85, transform: "scaleX(-1)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "radial-gradient(120% 80% at 50% 30%, rgba(10,10,10,.2), rgba(10,10,10,.85) 80%)" } }), /* @__PURE__ */ React.createElement("img", { src: SKY, alt: "", style: { position: "absolute", left: 0, right: 0, bottom: -10, width: "100%", height: 220, objectFit: "cover", objectPosition: "center 70%", filter: "grayscale(1) contrast(1.1) brightness(.7)", opacity: 0.55 } })), /* @__PURE__ */ React.createElement(NeonSign, { top: 86 }, "\u6771\u4EAC \xD7 \u6F22\u5821"), /* @__PURE__ */ React.createElement(NeonSign, { top: 300, accent: true }, "\u30D0\u30FC\u30AC\u30FC"), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 8, top: 360, writingMode: "vertical-rl", background: RED, color: "#fff", fontFamily: "var(--font-jp)", fontSize: 26, letterSpacing: ".2em", padding: "26px 10px", border: "2px solid #0a0a0a", boxShadow: "0 0 18px rgba(224,24,47,.6)", zIndex: 5 } }, "\u30D0\u30FC\u30AC\u30FC"), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 18, left: 70, width: 1300, height: 884, background: PAPER, filter: "url(#nagu-torn)", boxShadow: "0 36px 90px rgba(0,0,0,.6)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 18, left: 70, width: 1300, height: 884, background: `url(${TEX}) center/cover`, mixBlendMode: "multiply", opacity: 0.12, pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 18, left: 70, width: 1300, height: 884, padding: "40px 56px", boxSizing: "border-box", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 24, marginTop: 0, flex: 1, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("h1", { style: { margin: 0, fontFamily: "var(--font-display)", textTransform: "uppercase", lineHeight: 0.98, letterSpacing: ".005em" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontSize: 122, color: INK } }, "Street"), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontSize: 122, color: RED } }, "Smash"), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: "var(--font-jp)", fontSize: 24, color: "#4a4a4a", letterSpacing: ".22em", marginTop: 10, textTransform: "none" } }, "\u30B9\u30DE\u30C3\u30B7\u30E5")), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 19, lineHeight: 1.5, color: "#2a2a2a", margin: "24px 0 0", fontWeight: 500, maxWidth: 440 } }, "Jeddah's first Japo burger joint.", /* @__PURE__ */ React.createElement("br", null), "Burgers crave. Anime craze. Asian twist."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, marginTop: 32 } }, /* @__PURE__ */ React.createElement(Btn, { kind: "red", href: "drops.html" }, "Follow the Drop"), /* @__PURE__ */ React.createElement(Btn, { kind: "outline", href: "menu.html" }, "View the Menu"))), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: "100%", minHeight: 420 } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true", style: { position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 300, lineHeight: 0.78, color: "rgba(20,20,20,.05)", textTransform: "uppercase", pointerEvents: "none", whiteSpace: "nowrap" } }, "\u30CA\u30B0"), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 0, top: "50%", transform: "translateY(-50%) rotate(2.5deg)", width: 432 } }, /* @__PURE__ */ React.createElement("div", { style: { border: "3px solid #0a0a0a", boxShadow: "14px 16px 0 0 #0a0a0a", background: "#0a0a0a" } }, /* @__PURE__ */ React.createElement("img", { src: SKY, alt: "Neon Jeddah skyline at night", style: { width: "100%", height: 300, objectFit: "cover", display: "block" } }), /* @__PURE__ */ React.createElement("div", { style: { background: RED, color: "#fff", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 28, lineHeight: 1 } }, "NAGU", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, letterSpacing: ".22em" } }, "Burger Drop")), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-jp)", fontSize: 18, opacity: 0.9 } }, "\u30D0\u30FC\u30AC\u30FC"))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: -54, top: -46, width: 116, height: 116, borderRadius: "50%", background: RED, border: "3px solid #0a0a0a", transform: "rotate(-10deg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 12px 26px rgba(0,0,0,.4)", zIndex: 2 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-jp)", fontSize: 17, letterSpacing: ".06em" } }, "\u9650\u5B9A"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 16, lineHeight: 1, marginTop: 3, textAlign: "center" } }, "New", /* @__PURE__ */ React.createElement("br", null), "Drop"))))), /* @__PURE__ */ React.createElement("div", { style: { height: 2, background: "rgba(20,20,20,.18)", margin: "8px 0 22px" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)" } }, /* @__PURE__ */ React.createElement(Feature, { icon: "flame", label: "Japo Soul" }, "Where Japanese inspiration meets bold street flavors."), /* @__PURE__ */ React.createElement(Feature, { icon: "beef", label: "Crafted Bold", border: true }, "Smashed, stacked, and seasoned with purpose."), /* @__PURE__ */ React.createElement(Feature, { icon: "zap", label: "Anime Energy", border: true }, "Inspired by anime. Fueled by hustle. Made to stand out."), /* @__PURE__ */ React.createElement(Feature, { icon: "sparkles", label: "Made Different", border: true }, "Not just another burger. A culture. A vibe. A statement."))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, right: 0, top: 932, zIndex: 4 } }, /* @__PURE__ */ React.createElement(StickerTicker, null)));
  }
  const STICKERS = [
    { t: "\u9650\u5B9A Drop", tone: "red", jp: true },
    { t: "Street Smash", tone: "cream" },
    { t: "\u65B0\u4F5C", tone: "ink", jp: true },
    { t: "@nagu.burgers", tone: "red" },
    { t: "Anime Energy", tone: "cream" },
    { t: "\u30D0\u30FC\u30AC\u30FC", tone: "ink", jp: true },
    { t: "Built to Sell Out", tone: "red" },
    { t: "Jeddah", tone: "cream" },
    { t: "\u5927\u80C6\u306A\u5473", tone: "ink", jp: true },
    { t: "Don't Blink", tone: "red" }
  ];
  function StickerTicker() {
    const group = (key) => /* @__PURE__ */ React.createElement("div", { className: "nw-ticker-group", key, "aria-hidden": key === "b" ? "true" : void 0 }, STICKERS.map((s, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: `nw-sticker nw-sticker--${s.tone}` }, /* @__PURE__ */ React.createElement("span", { className: s.jp ? "nw-sticker-jp" : "" }, s.t))));
    return /* @__PURE__ */ React.createElement("div", { className: "nw-ticker", role: "marquee", "aria-label": "NAGU drop highlights" }, /* @__PURE__ */ React.createElement("div", { className: "nw-ticker-track" }, group("a"), group("b")));
  }
  function Lineup() {
    const heroes = MENU.items.filter((i) => i.cat === "Burgers");
    return /* @__PURE__ */ React.createElement(PaperPanel, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Kicker, { en: "The Lineup", jp: "\u30E1\u30CB\u30E5\u30FC" }), /* @__PURE__ */ React.createElement(BigHead, null, "Built for repeat.")), /* @__PURE__ */ React.createElement(Btn, { kind: "outline", href: "menu.html" }, "Full Menu")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 44 } }, heroes.map((it) => /* @__PURE__ */ React.createElement(MenuCard, { key: it.id, item: it, action: /* @__PURE__ */ React.createElement(Btn, { kind: "red", size: "md", href: "order.html" }, "Add to Order") }))));
  }
  function Countdown() {
    const target = useRef(Date.now() + ((2 * 24 + 9) * 3600 + 41 * 60 + 12) * 1e3);
    const calc = () => Math.max(0, target.current - Date.now());
    const [ms, setMs] = useState(calc());
    useEffect(() => {
      const i = setInterval(() => setMs(calc()), 1e3);
      return () => clearInterval(i);
    }, []);
    const s = Math.floor(ms / 1e3);
    const parts = [["Days", Math.floor(s / 86400)], ["Hrs", Math.floor(s % 86400 / 3600)], ["Min", Math.floor(s % 3600 / 60)], ["Sec", s % 60]];
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, marginTop: 26 } }, parts.map(([l, v]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { minWidth: 78, textAlign: "center", border: "2px solid rgba(255,255,255,.25)", padding: "12px 6px", background: "rgba(0,0,0,.4)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, lineHeight: 1, color: "#fff" } }, String(v).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: REDT, marginTop: 6 } }, l))));
  }
  function LatestDrop() {
    return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 1440, padding: "92px 198px", boxSizing: "border-box" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "#0d0d0d" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: `url(${TEX}) center/cover`, mixBlendMode: "screen", opacity: 0.06 } })), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 56, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Kicker, { en: "Latest Drop", jp: "\u9650\u5B9A / Limited", light: true }), /* @__PURE__ */ React.createElement(BigHead, { light: true, size: 72 }, "NAGU \xD7 URBAN."), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", marginTop: 18, maxWidth: 460 } }, "A limited-edition coffee collector drop by NAGU and Urban Roastery. A day-and-night blend \u2014 light and bright for the morning, dark and bold for the late run. Brew without limits."), /* @__PURE__ */ React.createElement(Countdown, null), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, marginTop: 30 } }, /* @__PURE__ */ React.createElement(Btn, { kind: "red", size: "lg", href: "drops.html" }, "Set a Reminder"), /* @__PURE__ */ React.createElement(Btn, { kind: "outline", onLight: false, size: "lg", href: "drops.html" }, "See Drops"))), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: -18, left: -18, zIndex: 2 } }, /* @__PURE__ */ React.createElement(Tag, { tone: "red" }, "Limited")), /* @__PURE__ */ React.createElement("div", { style: { borderRadius: 5, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,.6)" } }, /* @__PURE__ */ React.createElement("img", { src: "../../assets/drops/drop-1.jpeg", alt: "NAGU x Urban Roastery coffee collector drop", loading: "lazy", decoding: "async", style: { width: "100%", height: 420, objectFit: "cover", display: "block", borderRadius: 5 } })))));
  }
  function Universe() {
    const crew = [
      { image: "../../assets/characters/nagu-char-04.jpeg", name: "NAGU", role: "The Culture Creator", jp: "\u30CA\u30B0", number: 1 },
      { image: "../../assets/characters/nagu-char-01.jpeg", name: "BIKU", role: "Open-Grill Jester", jp: "\u30D3\u30AF", number: 2 },
      { image: "../../assets/characters/nagu-char-02.jpeg", name: "FIFU", role: "Street Scout", jp: "\u30D5\u30A3\u30D5", number: 3 }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 1440, padding: "92px 128px", boxSizing: "border-box", background: "#0a0a0a", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("img", { src: SKY, alt: "", loading: "lazy", decoding: "async", style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,.7), rgba(10,10,10,.92))" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Kicker, { en: "The Universe", jp: "\u30B6\u30FB\u30E6\u30CB\u30D0\u30FC\u30B9 / Web Verse", light: true }), /* @__PURE__ */ React.createElement(BigHead, { light: true }, "Meet the siblings."), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.7)", marginTop: 16, maxWidth: 560 } }, "Three sibling samurai. Streetwear-dressed, katana-carrying, sneaker-flexing. We use anime culture \u2014 we don't copy it.")), /* @__PURE__ */ React.createElement(Btn, { kind: "red", href: "universe.html" }, "Enter the Web Verse")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 44 } }, crew.map((c) => /* @__PURE__ */ React.createElement(CharCard, { key: c.name, ...c, light: true })))));
  }
  function Locations() {
    const locs = [
      { city: "Jeddah", area: "Corniche Window", status: "Open Now", on: true },
      { city: "Riyadh", area: "Olaya \xB7 Opening Soon", status: "Coming Soon", on: false }
    ];
    return /* @__PURE__ */ React.createElement(PaperPanel, null, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 48, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Kicker, { en: "Locations", jp: "\u30ED\u30B1\u30FC\u30B7\u30E7\u30F3" }), /* @__PURE__ */ React.createElement(BigHead, null, "Find a NAGU."), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "#3a3a3a", margin: "16px 0 26px", maxWidth: 380 } }, "Compact footprint. Big street presence. Grab-and-go windows built for speed \u2014 and delivery from day one."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, locs.map((l) => /* @__PURE__ */ React.createElement("div", { key: l.city, style: { display: "flex", alignItems: "center", justifyContent: "space-between", border: "2px solid #141414", background: "#fff", padding: "16px 18px", boxShadow: "4px 4px 0 0 #141414" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "map-pin", style: { width: 22, height: 22, color: RED } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 22, lineHeight: 1, color: INK } }, l.city), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontSize: 13, color: "#6a6a6a", marginTop: 3 } }, l.area))), /* @__PURE__ */ React.createElement(Tag, { tone: l.on ? "red" : "outline" }, l.status)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 26 } }, /* @__PURE__ */ React.createElement(Btn, { kind: "red", size: "lg", href: "order.html" }, "Order Now"))), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", border: "3px solid #141414", boxShadow: "8px 8px 0 0 #141414" } }, /* @__PURE__ */ React.createElement("img", { src: SKY, alt: "Jeddah", loading: "lazy", decoding: "async", style: { width: "100%", height: 380, objectFit: "cover", display: "block", filter: "saturate(1.1)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "42%", left: "38%" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 18, height: 18, borderRadius: "50%", background: RED, border: "3px solid #fff", boxShadow: "0 0 0 6px rgba(200,16,46,.35)" } })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 12, left: 12, background: "rgba(10,10,10,.8)", color: "#fff", fontFamily: "var(--font-jp)", fontSize: 13, padding: "6px 10px", letterSpacing: ".1em" } }, "\u30B8\u30A7\u30C3\u30C0 \xB7 \u6D77\u5CB8\u901A\u308A"))));
  }
  function Signup() {
    return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 1440, background: RED, padding: "72px 128px", boxSizing: "border-box", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: `url(${TEX}) center/cover`, mixBlendMode: "multiply", opacity: 0.14 } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Kicker, { en: "Drop Alerts", jp: "\u901A\u77E5", light: true, enColor: "#fff" }), /* @__PURE__ */ React.createElement(BigHead, { light: true, size: 68 }, "Don't miss a drop."), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 16, color: "rgba(255,255,255,.85)", marginTop: 14 } }, "Email or SMS. Drops. Collabs. Chaos. Don't blink.")), /* @__PURE__ */ React.createElement("form", { onSubmit: (e) => e.preventDefault(), style: { display: "flex", gap: 0, border: "2px solid #0a0a0a", background: "#fff", boxShadow: "8px 8px 0 0 #0a0a0a", flex: "none" } }, /* @__PURE__ */ React.createElement("label", { htmlFor: "nagu-drop-email", style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 } }, "Email address for drop alerts"), /* @__PURE__ */ React.createElement("input", { id: "nagu-drop-email", type: "email", name: "email", autoComplete: "email", placeholder: "your@email.com", style: { border: "none", outline: "none", padding: "16px 18px", fontFamily: "var(--font-sans)", fontSize: 16, width: 300, background: "transparent", color: INK } }), /* @__PURE__ */ React.createElement("button", { type: "submit", style: { border: "none", background: INK, color: "#fff", fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 16, letterSpacing: ".05em", padding: "0 26px", cursor: "pointer" } }, "Join"))));
  }
  function Site() {
    const { Page } = window.NAGUSite;
    return /* @__PURE__ */ React.createElement(Page, { active: null }, /* @__PURE__ */ React.createElement("div", { className: "nw-home-fit", style: { display: "flex", flexDirection: "column", alignItems: "center" } }, /* @__PURE__ */ React.createElement(HeroStage, null), /* @__PURE__ */ React.createElement(Lineup, null), /* @__PURE__ */ React.createElement(LatestDrop, null), /* @__PURE__ */ React.createElement(Universe, null), /* @__PURE__ */ React.createElement(Locations, null), /* @__PURE__ */ React.createElement(Signup, null)));
  }
  ReactDOM.createRoot(document.getElementById("site")).render(/* @__PURE__ */ React.createElement(Site, null));
})();
