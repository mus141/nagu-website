(() => {
  const { Page, Section, Kicker, BigHead, Btn, MenuCard, RED, INK, PAPER, TEX } = window.NAGUSite;
  const { Tag } = window.NAGUDesignSystem_56f253;
  const MENU = window.NAGU_MENU;
  const { useState } = React;
  const CAT_JP = {
    Burgers: "\u30D0\u30FC\u30AC\u30FC",
    Sides: "\u30B5\u30A4\u30C9",
    "Full Menu": "\u30D5\u30EB\u30BB\u30C3\u30C8"
  };
  const CAT_BLURB = {
    Burgers: "Smashed thin, seared hard, stacked loud. The reason you came.",
    Sides: "The supporting cast that steals the scene. Built to share, or not.",
    "Full Menu": "The entire lineup in one order. Every burger, every side \u2014 feed the whole crew."
  };
  function MenuPage() {
    const cats = MENU.categories;
    const [active, setActive] = useState("All");
    const filters = ["All", ...cats];
    const shown = active === "All" ? cats : [active];
    return /* @__PURE__ */ React.createElement(Page, { active: "menu" }, /* @__PURE__ */ React.createElement(Section, { bg: "poster", className: "nw-section--hero", style: { overflow: "hidden" } }, /* @__PURE__ */ React.createElement(
      "div",
      {
        "aria-hidden": "true",
        style: {
          position: "absolute",
          right: -30,
          top: -40,
          fontFamily: "var(--font-jp)",
          fontSize: "min(220px, 30vw)",
          color: "rgba(255,255,255,.04)",
          lineHeight: 0.8,
          pointerEvents: "none"
        }
      },
      "\u30E1\u30CB\u30E5\u30FC"
    ), /* @__PURE__ */ React.createElement(Kicker, { en: "The Lineup", jp: "\u30E1\u30CB\u30E5\u30FC", light: true }), /* @__PURE__ */ React.createElement("h1", { className: "nw-h1", style: { color: "#fff", marginTop: 14 } }, "The whole", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--nw-red)" } }, "drop.")), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", maxWidth: 560, marginTop: 18 } }, "Smash burgers, crispy chicken, loaded sides and crispy shrimp \u2014 or grab the whole spread in one order. Every build engineered for the repeat."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Btn, { kind: "red", size: "lg", href: "order.html" }, "Order Now"), /* @__PURE__ */ React.createElement(Btn, { kind: "outline", onLight: false, size: "lg", href: "universe.html" }, "Meet the Siblings"))), /* @__PURE__ */ React.createElement("div", { style: { position: "sticky", top: 72, zIndex: 40, background: "rgba(10,10,10,.92)", backdropFilter: "blur(6px)", borderBottom: "2px solid #000" } }, /* @__PURE__ */ React.createElement("div", { className: "nw-container", style: { display: "flex", gap: 10, overflowX: "auto", paddingBlock: 14, WebkitOverflowScrolling: "touch" } }, filters.map((f) => {
      const on = active === f;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: f,
          onClick: () => setActive(f),
          style: {
            flex: "0 0 auto",
            cursor: "pointer",
            fontFamily: "var(--font-display)",
            textTransform: "uppercase",
            fontWeight: 900,
            fontSize: 15,
            letterSpacing: ".04em",
            padding: "10px 18px",
            borderRadius: 2,
            border: "2px solid",
            borderColor: on ? RED : "rgba(255,255,255,.25)",
            background: on ? RED : "transparent",
            color: "#fff",
            transition: "all .14s cubic-bezier(.2,.8,.2,1)",
            whiteSpace: "nowrap"
          }
        },
        f
      );
    }))), /* @__PURE__ */ React.createElement(Section, { bg: "paper" }, shown.map((cat, ci) => {
      const items = MENU.items.filter((it) => it.cat === cat);
      if (!items.length) return null;
      return /* @__PURE__ */ React.createElement("div", { key: cat, style: { marginTop: ci === 0 ? 0 : 72 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Kicker, { en: cat, jp: CAT_JP[cat] }), cat === "Full Menu" && /* @__PURE__ */ React.createElement(Tag, { tone: "red" }, "Best Value")), /* @__PURE__ */ React.createElement(BigHead, null, cat), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.55, color: "#3a3a3a", marginTop: 10, maxWidth: 540 } }, CAT_BLURB[cat]), /* @__PURE__ */ React.createElement("div", { className: "nw-grid nw-grid-3", style: { marginTop: 30 } }, items.map((it) => /* @__PURE__ */ React.createElement(
        MenuCard,
        {
          key: it.id,
          item: it,
          action: /* @__PURE__ */ React.createElement(Btn, { kind: "red", size: "md", href: "order.html" }, "Add to Order")
        }
      ))));
    })), /* @__PURE__ */ React.createElement(Section, { bg: "red", style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-jp)", fontSize: 16, letterSpacing: ".14em", color: "rgba(255,255,255,.8)" } }, "\u5927\u80C6\u306A\u5473"), /* @__PURE__ */ React.createElement("h2", { className: "nw-h2", style: { color: "#fff", marginTop: 10 } }, "Hungry yet?"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.85)", maxWidth: 480, margin: "16px auto 0" } }, "Skip the line. Build your order and pick it up hot."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, marginTop: 26, justifyContent: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Btn, { kind: "outline", onLight: false, size: "lg", href: "order.html" }, "Start an Order"), /* @__PURE__ */ React.createElement(Btn, { kind: "outline", onLight: false, size: "lg", href: "locations.html" }, "Find a Location"))));
  }
  ReactDOM.createRoot(document.getElementById("page")).render(/* @__PURE__ */ React.createElement(MenuPage, null));
})();
