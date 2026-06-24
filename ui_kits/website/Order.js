(() => {
  const { Page, Section, Kicker, BigHead, Btn, Icon, RED, INK, PAPER } = window.NAGUSite;
  const { ProductCard, Tag } = window.NAGUDesignSystem_56f253;
  const MENU = window.NAGU_MENU;
  const DELIVERY = ["HungerStation", "Jahez", "ToYou", "Keeta"];
  const POPULAR = MENU.items.filter((it) => ["double-smash", "korean-beef", "fried-chicken"].includes(it.id));
  function ChannelCard({ icon, en, jp, title, desc, cta, href, dark }) {
    return /* @__PURE__ */ React.createElement("div", { style: { background: dark ? "#0a0a0a" : "#fff", border: "2px solid #141414", boxShadow: "7px 7px 0 0 #141414", padding: 30, display: "flex", flexDirection: "column", color: dark ? "#fff" : INK } }, /* @__PURE__ */ React.createElement("span", { style: { width: 56, height: 56, display: "inline-flex", alignItems: "center", justifyContent: "center", background: RED, color: "#fff", border: "2px solid #000" } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 28 })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 10, marginTop: 20 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 30, lineHeight: 1, color: dark ? "#fff" : INK } }, title), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-jp)", fontSize: 13, color: RED } }, jp)), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: dark ? "rgba(255,255,255,.7)" : "#3a3a3a", marginTop: 12, flex: 1 } }, desc), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22 } }, /* @__PURE__ */ React.createElement(Btn, { kind: "red", size: "lg", href }, cta)));
  }
  function OrderPage() {
    return /* @__PURE__ */ React.createElement(Page, { active: null }, /* @__PURE__ */ React.createElement(Section, { bg: "poster", className: "nw-section--hero", style: { overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true", style: { position: "absolute", right: -20, top: -30, fontFamily: "var(--font-jp)", fontSize: "min(200px,28vw)", color: "rgba(255,255,255,.04)", lineHeight: 0.8, pointerEvents: "none" } }, "\u6CE8\u6587"), /* @__PURE__ */ React.createElement(Kicker, { en: "Order Now", jp: "\u6CE8\u6587 / Order", light: true }), /* @__PURE__ */ React.createElement("h1", { className: "nw-h1", style: { color: "#fff", marginTop: 14 } }, "Skip the", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--nw-red)" } }, "line.")), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", maxWidth: 560, marginTop: 18 } }, "Order ahead for pickup, or get it delivered hot. Pick a channel and build your order. Repeat-friendly from the first tap.")), /* @__PURE__ */ React.createElement(Section, { bg: "paper" }, /* @__PURE__ */ React.createElement(Kicker, { en: "How To Order", jp: "\u6CE8\u6587\u65B9\u6CD5" }), /* @__PURE__ */ React.createElement(BigHead, null, "Pick your channel."), /* @__PURE__ */ React.createElement("div", { className: "nw-grid nw-grid-2", style: { marginTop: 32 } }, /* @__PURE__ */ React.createElement(
      ChannelCard,
      {
        icon: "shopping-bag",
        jp: "\u30C6\u30A4\u30AF\u30A2\u30A6\u30C8",
        title: "Pickup",
        href: "../ordering-app/index.html",
        cta: "Order for Pickup",
        desc: "Build your order in the app, skip the queue, and grab it hot from the window. Fastest way to eat."
      }
    ), /* @__PURE__ */ React.createElement(
      ChannelCard,
      {
        icon: "bike",
        jp: "\u30C7\u30EA\u30D0\u30EA\u30FC",
        title: "Delivery",
        href: "#delivery",
        cta: "Order for Delivery",
        dark: true,
        desc: "Get NAGU brought to you through your favorite delivery app. Same builds, same crunch, at your door."
      }
    ))), /* @__PURE__ */ React.createElement(Section, { bg: "ink" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Kicker, { en: "Start Here", jp: "\u4EBA\u6C17", light: true }), /* @__PURE__ */ React.createElement(BigHead, { light: true }, "The repeat orders.")), /* @__PURE__ */ React.createElement(Btn, { kind: "outline", onLight: false, href: "menu.html" }, "Full Menu")), /* @__PURE__ */ React.createElement("div", { className: "nw-grid nw-grid-3", style: { marginTop: 34 } }, POPULAR.map((it) => /* @__PURE__ */ React.createElement(
      ProductCard,
      {
        key: it.id,
        image: it.image,
        name: it.name,
        tagline: it.tagline,
        price: it.price,
        tags: it.tags,
        action: /* @__PURE__ */ React.createElement(Btn, { kind: "red", size: "md", href: "../ordering-app/index.html" }, "Add to Order")
      }
    )))), /* @__PURE__ */ React.createElement(Section, { bg: "paper", style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { id: "delivery", style: { position: "relative", top: -90 } }), /* @__PURE__ */ React.createElement(Kicker, { en: "Delivery Partners", jp: "\u30C7\u30EA\u30D0\u30EA\u30FC" }), /* @__PURE__ */ React.createElement(BigHead, null, "Order on your app of choice."), /* @__PURE__ */ React.createElement("div", { className: "nw-grid nw-grid-4", style: { marginTop: 30 } }, DELIVERY.map((d) => /* @__PURE__ */ React.createElement("a", { key: d, href: "#", style: { textDecoration: "none", background: "#fff", border: "2px solid #141414", boxShadow: "4px 4px 0 0 #141414", padding: "26px 16px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 92 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 19, color: INK } }, d))))), /* @__PURE__ */ React.createElement(Section, { bg: "red", style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-jp)", fontSize: 16, letterSpacing: ".14em", color: "rgba(255,255,255,.8)" } }, "\u30A2\u30D7\u30EA"), /* @__PURE__ */ React.createElement("h2", { className: "nw-h2", style: { color: "#fff", marginTop: 10 } }, "Get the app."), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.85)", maxWidth: 480, margin: "16px auto 0" } }, "Order faster, earn rewards, and unlock early drops, all in one place."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, marginTop: 26, justifyContent: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Btn, { kind: "outline", onLight: false, size: "lg", href: "../ordering-app/index.html" }, "Open the App"), /* @__PURE__ */ React.createElement(Btn, { kind: "outline", onLight: false, size: "lg", href: "rewards.html" }, "Join Rewards"))));
  }
  ReactDOM.createRoot(document.getElementById("page")).render(/* @__PURE__ */ React.createElement(OrderPage, null));
})();
