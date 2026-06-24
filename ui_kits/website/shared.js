(() => {
  (function() {
    const { useState, useEffect } = React;
    const RED = "#C8102E", REDB = "#E0182F", REDT = "#FF3344", INK = "#141414", PAPER = "#ECE7DD";
    const TEX = "../../assets/elements/texture-overlay.jpg";
    const SKY = "../../assets/lifestyle/skyline-night.jpeg";
    const LOGO = "../../assets/logos/Nagu-Logo-Secondary.png";
    const { Tag } = window.NAGUDesignSystem_56f253 || {};
    const nav = [
      { label: "Menu", href: "menu.html", key: "menu" },
      { label: "Universe", href: "universe.html", key: "universe" },
      { label: "Drops", href: "drops.html", key: "drops" },
      { label: "Merch", href: "merch.html", key: "merch" },
      { label: "Locations", href: "locations.html", key: "locations" }
    ];
    const pascal = (n) => n.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("");
    function Icon({ name, size = 20, stroke = 2, style, ...rest }) {
      const data = window.lucide && window.lucide.icons && window.lucide.icons[pascal(name)] || [];
      return React.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
        data.map((c, i) => React.createElement(c[0], { key: i, ...c[1] }))
      );
    }
    function Btn({ children, kind = "red", onLight = true, size = "md", href, className = "", ...rest }) {
      const cls = [
        "nw-btn",
        kind === "red" ? "nw-btn--red" : "nw-btn--outline",
        size === "lg" ? "nw-btn--lg" : "",
        kind !== "red" && !onLight ? "nw-btn--on-dark" : "",
        className
      ].filter(Boolean).join(" ");
      const tagProps = href ? { href } : { type: rest.type || "button" };
      return /* @__PURE__ */ React.createElement(Btn_Tag, { href, className: cls, ...tagProps, ...rest }, children, /* @__PURE__ */ React.createElement("span", { className: "nw-btn-arrow", "aria-hidden": "true" }, "\u2197"));
    }
    function Btn_Tag({ href, children, ...rest }) {
      return href ? /* @__PURE__ */ React.createElement("a", { ...rest }, children) : /* @__PURE__ */ React.createElement("button", { ...rest }, children);
    }
    function Kicker({ en, jp, light }) {
      return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 15, letterSpacing: ".18em", color: light ? REDT : RED } }, en), jp && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-jp)", fontSize: 14, letterSpacing: ".1em", color: light ? "rgba(255,255,255,.5)" : "#7a726a" } }, jp));
    }
    function BigHead({ children, light }) {
      return /* @__PURE__ */ React.createElement("h2", { className: "nw-h2", style: { marginTop: 12, color: light ? "#fff" : INK } }, children);
    }
    function CharCard({ image, name, role, jp, light = true }) {
      const split = typeof name === "string" && name.length > 2 ? [name.slice(0, -2), name.slice(-2)] : [name, ""];
      return /* @__PURE__ */ React.createElement("div", { className: "nw-charcard" }, /* @__PURE__ */ React.createElement("div", { className: "nw-charcard-media", style: { aspectRatio: "4 / 5", overflow: "hidden", borderRadius: 5 } }, image && /* @__PURE__ */ React.createElement("img", { src: image, alt: typeof name === "string" ? name : "NAGU character", loading: "lazy", decoding: "async", style: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" } })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 30, lineHeight: 1, letterSpacing: ".02em", color: light ? "#fff" : INK } }, split[0], /* @__PURE__ */ React.createElement("span", { style: { color: RED } }, split[1])), role && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: light ? "rgba(255,255,255,.55)" : "#6a6a6a", marginTop: 8 } }, role), jp && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-jp)", fontSize: 16, color: light ? REDT : RED, marginTop: 6 } }, jp)));
    }
    function MenuCard({ item, action }) {
      const { name, tagline, price, tags = [], desc, calories, ingredients, allergies, image } = item;
      return /* @__PURE__ */ React.createElement("div", { className: "nw-menucard", tabIndex: 0, "aria-label": name }, /* @__PURE__ */ React.createElement("div", { className: "nw-menucard-media" }, image && /* @__PURE__ */ React.createElement("img", { src: image, alt: name, loading: "lazy", decoding: "async" }), price != null && /* @__PURE__ */ React.createElement("span", { className: "nw-menucard-price" }, "SR ", price), /* @__PURE__ */ React.createElement("div", { className: "nw-menucard-info", "aria-hidden": "true" }, desc && /* @__PURE__ */ React.createElement("p", { className: "nw-menucard-desc" }, desc), /* @__PURE__ */ React.createElement("dl", { className: "nw-menucard-facts" }, calories != null && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("dt", null, "Calories"), /* @__PURE__ */ React.createElement("dd", null, calories, " kcal")), ingredients && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("dt", null, "Ingredients"), /* @__PURE__ */ React.createElement("dd", null, ingredients)), allergies && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("dt", null, "Allergens"), /* @__PURE__ */ React.createElement("dd", null, allergies))))), /* @__PURE__ */ React.createElement("div", { className: "nw-menucard-body" }, /* @__PURE__ */ React.createElement("h3", { className: "nw-menucard-name" }, name), tagline && /* @__PURE__ */ React.createElement("p", { className: "nw-menucard-tag" }, tagline), tags.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 2 } }, tags.map((t, i) => /* @__PURE__ */ React.createElement(Tag, { key: i, tone: i === 0 ? "red" : "outline" }, t))), action && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8 } }, action)));
    }
    function FlipCard({ front, back, name, role, light = true }) {
      return /* @__PURE__ */ React.createElement("figure", { className: "nw-flip-card", style: { margin: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "nw-flip", tabIndex: 0, "aria-label": name ? `${name} collectible card` : "Collectible card" }, /* @__PURE__ */ React.createElement("div", { className: "nw-flip-inner" }, /* @__PURE__ */ React.createElement("img", { className: "nw-flip-face nw-flip-front", src: front, alt: name ? `${name} card front` : "Card front", loading: "lazy", decoding: "async" }), /* @__PURE__ */ React.createElement("img", { className: "nw-flip-face nw-flip-back", src: back, alt: name ? `${name} card back` : "Card back", loading: "lazy", decoding: "async" }))), (name || role) && /* @__PURE__ */ React.createElement("figcaption", { style: { marginTop: 16 } }, name && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 26, lineHeight: 1, letterSpacing: ".02em", color: light ? "#fff" : INK } }, name), role && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: light ? "rgba(255,255,255,.55)" : "#6a6a6a", marginTop: 7 } }, role)));
    }
    function TornDefs() {
      return /* @__PURE__ */ React.createElement("svg", { style: { position: "absolute", width: 0, height: 0 }, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("filter", { id: "nagu-torn" }, /* @__PURE__ */ React.createElement("feTurbulence", { type: "fractalNoise", baseFrequency: "0.016 0.024", numOctaves: "4", seed: "9", result: "n" }), /* @__PURE__ */ React.createElement("feDisplacementMap", { in: "SourceGraphic", in2: "n", scale: "17", xChannelSelector: "R", yChannelSelector: "G" })));
    }
    function Section({ children, bg = "paper", padY, style, className = "" }) {
      const backgrounds = { paper: PAPER, ink: "#0a0a0a", poster: "#0d0d0d", red: RED, none: "transparent" };
      const dark = bg === "ink" || bg === "poster" || bg === "red";
      return /* @__PURE__ */ React.createElement("section", { className: "nw-section " + className, style: { background: backgrounds[bg] || bg, color: dark ? "#fff" : INK, position: "relative", ...padY ? { paddingBlock: padY } : {}, ...style } }, /* @__PURE__ */ React.createElement("div", { className: "nw-container", style: { position: "relative" } }, children));
    }
    function PaperPanel({ children }) {
      return /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: "-14px -6px", background: PAPER, filter: "url(#nagu-torn)", boxShadow: "0 30px 70px rgba(0,0,0,.5)" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: "-14px -6px", background: `url(${TEX}) center/cover`, mixBlendMode: "multiply", opacity: 0.1, pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, children));
    }
    function NeonSign({ children, top, accent = false }) {
      return /* @__PURE__ */ React.createElement("div", { className: "nw-only-desktop", style: {
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
    function Header({ active, onMenu }) {
      return /* @__PURE__ */ React.createElement("header", { className: "nw-header" }, /* @__PURE__ */ React.createElement("div", { className: "nw-container nw-header-inner" }, /* @__PURE__ */ React.createElement("a", { href: "index.html", "aria-label": "NAGU home", style: { display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("img", { className: "nw-logo", src: LOGO, alt: "NAGU", style: { filter: "brightness(0) invert(1)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-jp)", color: REDT, fontSize: 14, letterSpacing: ".1em" }, className: "nw-only-desktop" }, "\u30CA\u30B0")), /* @__PURE__ */ React.createElement("nav", { className: "nw-navlinks nw-desk", "aria-label": "Primary" }, nav.map((n) => /* @__PURE__ */ React.createElement("a", { key: n.key, className: "nw-navlink", href: n.href, "data-active": active === n.key, "aria-current": active === n.key ? "page" : void 0 }, n.label))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("span", { className: "nw-only-desktop" }, /* @__PURE__ */ React.createElement(Btn, { kind: "red", href: "order.html" }, "Order Now")), /* @__PURE__ */ React.createElement("button", { className: "nw-burger", "aria-label": "Open menu", onClick: onMenu }, /* @__PURE__ */ React.createElement(Icon, { name: "menu", size: 22 })))));
    }
    function Drawer({ open, onClose, active }) {
      const closeRef = React.useRef(null);
      useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        if (open) {
          const onKey = (e) => {
            if (e.key === "Escape") onClose();
          };
          document.addEventListener("keydown", onKey);
          const t = setTimeout(() => closeRef.current && closeRef.current.focus(), 0);
          return () => {
            document.removeEventListener("keydown", onKey);
            clearTimeout(t);
            document.body.style.overflow = "";
          };
        }
        return () => {
          document.body.style.overflow = "";
        };
      }, [open, onClose]);
      return /* @__PURE__ */ React.createElement("div", { className: "nw-drawer", "data-open": open, role: "dialog", "aria-modal": "true", "aria-label": "Site menu", "aria-hidden": !open }, /* @__PURE__ */ React.createElement("div", { className: "nw-drawer-scrim", onClick: onClose }), /* @__PURE__ */ React.createElement("div", { className: "nw-drawer-panel" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } }, /* @__PURE__ */ React.createElement("img", { src: LOGO, alt: "NAGU", style: { height: 30, filter: "brightness(0) invert(1)" } }), /* @__PURE__ */ React.createElement("button", { ref: closeRef, className: "nw-burger", style: { display: "inline-flex" }, "aria-label": "Close menu", onClick: onClose, tabIndex: open ? 0 : -1 }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 22 }))), nav.map((n) => /* @__PURE__ */ React.createElement("a", { key: n.key, className: "nw-drawer-link", href: n.href, "data-active": active === n.key, "aria-current": active === n.key ? "page" : void 0, tabIndex: open ? 0 : -1 }, n.label)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(Btn, { kind: "red", size: "lg", href: "order.html", tabIndex: open ? 0 : -1 }, "Order Now"))));
    }
    function Footer() {
      const cols = [
        ["Menu", [["Smash Burgers", "menu.html"], ["Asian Fried Chicken", "menu.html"], ["Sides", "menu.html"], ["NAGU by URBAN", "menu.html"], ["Combos", "menu.html"]]],
        ["The Universe", [["Meet the Siblings", "universe.html"], ["Sauce Characters", "universe.html"], ["Lore", "universe.html"], ["Animated Drops", "universe.html"], ["Downloads", "universe.html"]]],
        ["Shop", [["Drops", "drops.html"], ["Apparel & Gear", "merch.html"], ["Character Cards", "merch.html"], ["Sticker Packs", "merch.html"], ["Pins", "merch.html"]]],
        ["More", [["Rewards", "rewards.html"], ["Locations", "locations.html"], ["Franchise", "franchise.html"], ["About", "about.html"], ["Careers", "about.html"]]]
      ];
      return /* @__PURE__ */ React.createElement("footer", { style: { position: "relative", background: "#0a0a0a", color: "#fff", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: -40, bottom: -60, fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "min(320px, 38vw)", color: "rgba(255,255,255,.04)", lineHeight: 0.8, pointerEvents: "none" } }, "NAGU"), /* @__PURE__ */ React.createElement("div", { className: "nw-container", style: { position: "relative", paddingBlock: "clamp(48px,7vw,72px) 36px" } }, /* @__PURE__ */ React.createElement("div", { className: "nw-foot-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", { src: LOGO, alt: "NAGU", style: { height: 38, filter: "brightness(0) invert(1)" } }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-jp)", color: REDT, fontSize: 15, marginTop: 14, letterSpacing: ".08em" } }, "\u5927\u80C6\u306A\u5473 \xB7 \u30CA\u30B0"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,.55)", marginTop: 14, lineHeight: 1.6, maxWidth: 240 } }, "Content. Culture. Community. The street-pop smash hit, built in Jeddah."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, marginTop: 18 } }, [["at-sign", "Instagram"], ["video", "YouTube"], ["message-circle", "WhatsApp"]].map(([ic, label]) => /* @__PURE__ */ React.createElement("a", { key: ic, className: "nw-social", href: "#", "aria-label": `NAGU on ${label}` }, /* @__PURE__ */ React.createElement(Icon, { name: ic, size: 18 }))))), cols.map(([h, links]) => /* @__PURE__ */ React.createElement("div", { key: h }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 15, letterSpacing: ".1em", color: REDT, marginBottom: 16 } }, h), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 7 } }, links.map(([l, href]) => /* @__PURE__ */ React.createElement("a", { key: l, className: "nw-footlink", href, style: { fontFamily: "var(--font-sans)", fontSize: 14 } }, l)))))), /* @__PURE__ */ React.createElement("div", { className: "nw-foot-bottom", style: { marginTop: 48, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,.14)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 18, flexWrap: "wrap", fontFamily: "var(--font-sans)", fontSize: 12.5, color: "rgba(255,255,255,.6)" } }, /* @__PURE__ */ React.createElement("span", null, "\xA9 NAGU 2026"), /* @__PURE__ */ React.createElement("a", { className: "nw-footlink", href: "#" }, "Privacy"), /* @__PURE__ */ React.createElement("a", { className: "nw-footlink", href: "#" }, "Terms"), /* @__PURE__ */ React.createElement("a", { className: "nw-footlink", href: "#" }, "Cookies")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, ["EN", "\u65E5\u672C\u8A9E", "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"].map((l, i) => /* @__PURE__ */ React.createElement("span", { key: l, style: { fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12.5, padding: "5px 11px", border: "1px solid rgba(255,255,255,.25)", color: i === 0 ? "#fff" : "rgba(255,255,255,.55)", background: i === 0 ? "rgba(255,255,255,.1)" : "transparent" } }, l))))));
    }
    function StickyOrder() {
      return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", right: "clamp(14px,3vw,26px)", bottom: "clamp(14px,3vw,26px)", zIndex: "var(--z-float)" } }, /* @__PURE__ */ React.createElement("a", { className: "nw-sticky-order", href: "order.html", "aria-label": "Order now" }, /* @__PURE__ */ React.createElement(Icon, { name: "shopping-bag", size: 18 }), " Order Now"));
    }
    function Page({ active, children }) {
      const [menuOpen, setMenuOpen] = useState(false);
      useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
      });
      return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", background: "#0a0a0a", fontFamily: "var(--font-sans)" } }, /* @__PURE__ */ React.createElement(TornDefs, null), /* @__PURE__ */ React.createElement(Header, { active, onMenu: () => setMenuOpen(true) }), /* @__PURE__ */ React.createElement(Drawer, { open: menuOpen, onClose: () => setMenuOpen(false), active }), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(StickyOrder, null));
    }
    window.NAGUSite = { Page, Header, Footer, StickyOrder, Section, Btn, Kicker, BigHead, CharCard, MenuCard, FlipCard, PaperPanel, NeonSign, TornDefs, Icon, nav, RED, REDB, REDT, INK, PAPER, TEX, SKY, LOGO };
  })();
})();
