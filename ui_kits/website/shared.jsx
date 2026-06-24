/* global React */
/* ============================================================
   NAGU WEBSITE — shared chrome + brand helpers
   Exposes window.NAGUSite = { Page, Header, Footer, StickyOrder,
   Section, Btn, Kicker, BigHead, PaperPanel, NeonSign, TornDefs,
   nav, RED, INK, PAPER, TEX, SKY }.
   Pages load this (after _ds_bundle.js) then their own JSX.
   Mirrors the look of the approved Home (Site.jsx) so new pages
   stay consistent, but is responsive (uses site.css classes).
   ============================================================ */
(function () {
  const { useState, useEffect } = React;

  const RED = "#C8102E", REDB = "#E0182F", REDT = "#FF3344", INK = "#141414", PAPER = "#ECE7DD";
  const TEX = "../../assets/elements/texture-overlay.jpg";
  const SKY = "../../assets/lifestyle/skyline-night.jpeg";
  const LOGO = "../../assets/logos/Nagu-Logo-Secondary.png";
  /* DS bundle is loaded before this file — pull the bits shared chrome reuses */
  const { Tag } = (window.NAGUDesignSystem_56f253 || {});

  /* canonical primary nav (matches the sitemap) */
  const nav = [
    { label: "Menu", href: "menu.html", key: "menu" },
    { label: "Universe", href: "universe.html", key: "universe" },
    { label: "Drops", href: "drops.html", key: "drops" },
    { label: "Merch", href: "merch.html", key: "merch" },
    { label: "Locations", href: "locations.html", key: "locations" },
  ];

  /* ---- inline icon (React-owned SVG from Lucide data) -----------------
     We DON'T use <i data-lucide> + lucide.createIcons() in interactive
     chrome: createIcons() replaces the <i> with an <svg>, which corrupts
     React's DOM reconciliation and breaks event handlers on re-render.
     This builds the same icon as a React element React fully controls. */
  const pascal = (n) => n.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  function Icon({ name, size = 20, stroke = 2, style, ...rest }) {
    const data = (window.lucide && window.lucide.icons && window.lucide.icons[pascal(name)]) || [];
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
      data.map((c, i) => React.createElement(c[0], { key: i, ...c[1] }))
    );
  }

  /* ---- buttons -------------------------------------------------------
     All states (hover/active/focus) live in site.css (.nw-btn*) so they're
     consistent site-wide and keyboard-focusable. `onLight` only matters for
     outline buttons: false = white outline on dark grounds. */
  function Btn({ children, kind = "red", onLight = true, size = "md", href, className = "", ...rest }) {
    const cls = ["nw-btn", kind === "red" ? "nw-btn--red" : "nw-btn--outline",
      size === "lg" ? "nw-btn--lg" : "", (kind !== "red" && !onLight) ? "nw-btn--on-dark" : "", className]
      .filter(Boolean).join(" ");
    const tagProps = href ? { href } : { type: rest.type || "button" };
    return (
      <Btn_Tag href={href} className={cls} {...tagProps} {...rest}>
        {children}<span className="nw-btn-arrow" aria-hidden="true">↗</span>
      </Btn_Tag>
    );
  }
  function Btn_Tag({ href, children, ...rest }) {
    return href ? <a {...rest}>{children}</a> : <button {...rest}>{children}</button>;
  }

  function Kicker({ en, jp, light }) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 15, letterSpacing: ".18em", color: light ? REDT : RED }}>{en}</span>
        {jp && <span style={{ fontFamily: "var(--font-jp)", fontSize: 14, letterSpacing: ".1em", color: light ? "rgba(255,255,255,.5)" : "#7a726a" }}>{jp}</span>}
      </div>
    );
  }
  function BigHead({ children, light }) {
    return <h2 className="nw-h2" style={{ marginTop: 12, color: light ? "#fff" : INK }}>{children}</h2>;
  }

  /* ---- frameless character display (no card frame/border/shadow) ------
     Replaces the bundled CharacterCard's framed look per request: just the
     portrait + name (red tail) + role + JP accent. `light` = on dark grounds. */
  function CharCard({ image, name, role, jp, light = true }) {
    const split = typeof name === "string" && name.length > 2 ? [name.slice(0, -2), name.slice(-2)] : [name, ""];
    return (
      <div className="nw-charcard">
        <div className="nw-charcard-media" style={{ aspectRatio: "4 / 5", overflow: "hidden", borderRadius: 5 }}>
          {image && <img src={image} alt={typeof name === "string" ? name : "NAGU character"} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />}
        </div>
        <div style={{ marginTop: 22 }}>
          <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 30, lineHeight: 1, letterSpacing: ".02em", color: light ? "#fff" : INK }}>
            {split[0]}<span style={{ color: RED }}>{split[1]}</span>
          </div>
          {role && <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: light ? "rgba(255,255,255,.55)" : "#6a6a6a", marginTop: 8 }}>{role}</div>}
          {jp && <div style={{ fontFamily: "var(--font-jp)", fontSize: 16, color: light ? REDT : RED, marginTop: 6 }}>{jp}</div>}
        </div>
      </div>
    );
  }

  /* ---- MENU CARD — food card with a hover-revealed nutrition panel -------
     Replaces the bundled ProductCard on the Lineup + Menu page. The image
     block holds a price chip; on hover (or focus) a dark panel slides up
     over the image showing the short description, calories, ingredients and
     allergens. Square keyline + offset shadow per brand. `item` = a row from
     window.NAGU_MENU. */
  function MenuCard({ item, action }) {
    const { name, tagline, price, tags = [], desc, calories, ingredients, allergies, image } = item;
    return (
      <div className="nw-menucard" tabIndex={0} aria-label={name}>
        <div className="nw-menucard-media">
          {image && <img src={image} alt={name} loading="lazy" decoding="async" />}
          {price != null && <span className="nw-menucard-price">SR {price}</span>}
          <div className="nw-menucard-info" aria-hidden="true">
            {desc && <p className="nw-menucard-desc">{desc}</p>}
            <dl className="nw-menucard-facts">
              {calories != null && (<><dt>Calories</dt><dd>{calories} kcal</dd></>)}
              {ingredients && (<><dt>Ingredients</dt><dd>{ingredients}</dd></>)}
              {allergies && (<><dt>Allergens</dt><dd>{allergies}</dd></>)}
            </dl>
          </div>
        </div>
        <div className="nw-menucard-body">
          <h3 className="nw-menucard-name">{name}</h3>
          {tagline && <p className="nw-menucard-tag">{tagline}</p>}
          {tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 2 }}>
              {tags.map((t, i) => <Tag key={i} tone={i === 0 ? "red" : "outline"}>{t}</Tag>)}
            </div>
          )}
          {action && <div style={{ marginTop: 8 }}>{action}</div>}
        </div>
      </div>
    );
  }

  /* ---- FLIP CARD — collectible card that flips to its back on hover ------
     Front + back are complete card artworks (assets/cards/). 3D flip lives in
     site.css (.nw-flip). 5px radius, soft shadow, no extra keyline (the art
     carries its own border). Optional caption below. */
  function FlipCard({ front, back, name, role, light = true }) {
    return (
      <figure className="nw-flip-card" style={{ margin: 0 }}>
        <div className="nw-flip" tabIndex={0} aria-label={name ? `${name} collectible card` : "Collectible card"}>
          <div className="nw-flip-inner">
            <img className="nw-flip-face nw-flip-front" src={front} alt={name ? `${name} card front` : "Card front"} loading="lazy" decoding="async" />
            <img className="nw-flip-face nw-flip-back" src={back} alt={name ? `${name} card back` : "Card back"} loading="lazy" decoding="async" />
          </div>
        </div>
        {(name || role) && (
          <figcaption style={{ marginTop: 16 }}>
            {name && <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 26, lineHeight: 1, letterSpacing: ".02em", color: light ? "#fff" : INK }}>{name}</div>}
            {role && <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: light ? "rgba(255,255,255,.55)" : "#6a6a6a", marginTop: 7 }}>{role}</div>}
          </figcaption>
        )}
      </figure>
    );
  }

  /* ---- torn paper SVG filter (include once per page) ------------------ */
  function TornDefs() {
    return (
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <filter id="nagu-torn">
          <feTurbulence type="fractalNoise" baseFrequency="0.016 0.024" numOctaves="4" seed="9" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="17" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    );
  }

  /* ---- full-bleed section with optional bg + centered container ------- */
  function Section({ children, bg = "paper", padY, style, className = "" }) {
    const backgrounds = { paper: PAPER, ink: "#0a0a0a", poster: "#0d0d0d", red: RED, none: "transparent" };
    const dark = bg === "ink" || bg === "poster" || bg === "red";
    return (
      <section className={"nw-section " + className} style={{ background: backgrounds[bg] || bg, color: dark ? "#fff" : INK, position: "relative", ...(padY ? { paddingBlock: padY } : {}), ...style }}>
        <div className="nw-container" style={{ position: "relative" }}>{children}</div>
      </section>
    );
  }

  /* ---- reusable torn cream panel (responsive) ------------------------ */
  function PaperPanel({ children }) {
    return (
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: "-14px -6px", background: PAPER, filter: "url(#nagu-torn)", boxShadow: "0 30px 70px rgba(0,0,0,.5)" }} />
        <div style={{ position: "absolute", inset: "-14px -6px", background: `url(${TEX}) center/cover`, mixBlendMode: "multiply", opacity: .1, pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>{children}</div>
      </div>
    );
  }

  /* ---- vertical neon street sign ------------------------------------- */
  function NeonSign({ children, top, accent = false }) {
    return (
      <div className="nw-only-desktop" style={{
        position: "absolute", left: 6, top, writingMode: "vertical-rl",
        fontFamily: "var(--font-jp)", fontSize: 22, letterSpacing: ".18em", padding: "16px 9px", zIndex: 5,
        color: "#fff", background: "rgba(10,10,10,.55)", border: `2px solid ${accent ? RED : "rgba(232,24,47,.6)"}`,
        boxShadow: "0 0 14px rgba(224,24,47,.7), inset 0 0 12px rgba(224,24,47,.35)",
        textShadow: "0 0 8px rgba(255,60,80,.9)", backdropFilter: "blur(2px)",
      }}>{children}</div>
    );
  }

  /* ---- HEADER (responsive) ------------------------------------------
     NOTE: the mobile Drawer is rendered as a SIBLING of <header> (see
     Page), NOT inside it. The header has backdrop-filter, which makes it
     the containing block for position:fixed descendants — a nested fixed
     drawer would be trapped at header height. Keep them separate. */
  function Header({ active, onMenu }) {
    return (
      <header className="nw-header">
        <div className="nw-container nw-header-inner">
          <a href="index.html" aria-label="NAGU home" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img className="nw-logo" src={LOGO} alt="NAGU" style={{ filter: "brightness(0) invert(1)" }} />
            <span style={{ fontFamily: "var(--font-jp)", color: REDT, fontSize: 14, letterSpacing: ".1em" }} className="nw-only-desktop">ナグ</span>
          </a>
          <nav className="nw-navlinks nw-desk" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.key} className="nw-navlink" href={n.href} data-active={active === n.key} aria-current={active === n.key ? "page" : undefined}>{n.label}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="nw-only-desktop"><Btn kind="red" href="order.html">Order Now</Btn></span>
            <button className="nw-burger" aria-label="Open menu" onClick={onMenu}>
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>
    );
  }

  /* ---- mobile DRAWER (sibling of header; fixed to viewport) ----------
     Hardened: locks body scroll, closes on Escape, moves focus to the close
     button on open, and exposes dialog semantics to assistive tech. */
  function Drawer({ open, onClose, active }) {
    const closeRef = React.useRef(null);
    useEffect(() => {
      document.body.style.overflow = open ? "hidden" : "";
      if (open) {
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        const t = setTimeout(() => closeRef.current && closeRef.current.focus(), 0);
        return () => { document.removeEventListener("keydown", onKey); clearTimeout(t); document.body.style.overflow = ""; };
      }
      return () => { document.body.style.overflow = ""; };
    }, [open, onClose]);
    return (
      <div className="nw-drawer" data-open={open} role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
        <div className="nw-drawer-scrim" onClick={onClose} />
        <div className="nw-drawer-panel">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <img src={LOGO} alt="NAGU" style={{ height: 30, filter: "brightness(0) invert(1)" }} />
            <button ref={closeRef} className="nw-burger" style={{ display: "inline-flex" }} aria-label="Close menu" onClick={onClose} tabIndex={open ? 0 : -1}>
              <Icon name="x" size={22} />
            </button>
          </div>
          {nav.map((n) => (
            <a key={n.key} className="nw-drawer-link" href={n.href} data-active={active === n.key} aria-current={active === n.key ? "page" : undefined} tabIndex={open ? 0 : -1}>{n.label}</a>
          ))}
          <div style={{ marginTop: 18 }}><Btn kind="red" size="lg" href="order.html" tabIndex={open ? 0 : -1}>Order Now</Btn></div>
        </div>
      </div>
    );
  }

  /* ---- FOOTER (responsive) ------------------------------------------- */
  function Footer() {
    const cols = [
      ["Menu", [["Smash Burgers", "menu.html"], ["Asian Fried Chicken", "menu.html"], ["Sides", "menu.html"], ["NAGU by URBAN", "menu.html"], ["Combos", "menu.html"]]],
      ["The Universe", [["Meet the Siblings", "universe.html"], ["Sauce Characters", "universe.html"], ["Lore", "universe.html"], ["Animated Drops", "universe.html"], ["Downloads", "universe.html"]]],
      ["Shop", [["Drops", "drops.html"], ["Apparel & Gear", "merch.html"], ["Character Cards", "merch.html"], ["Sticker Packs", "merch.html"], ["Pins", "merch.html"]]],
      ["More", [["Rewards", "rewards.html"], ["Locations", "locations.html"], ["Franchise", "franchise.html"], ["About", "about.html"], ["Careers", "about.html"]]],
    ];
    return (
      <footer style={{ position: "relative", background: "#0a0a0a", color: "#fff", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -40, bottom: -60, fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "min(320px, 38vw)", color: "rgba(255,255,255,.04)", lineHeight: .8, pointerEvents: "none" }}>NAGU</div>
        <div className="nw-container" style={{ position: "relative", paddingBlock: "clamp(48px,7vw,72px) 36px" }}>
          <div className="nw-foot-grid">
            <div>
              <img src={LOGO} alt="NAGU" style={{ height: 38, filter: "brightness(0) invert(1)" }} />
              <div style={{ fontFamily: "var(--font-jp)", color: REDT, fontSize: 15, marginTop: 14, letterSpacing: ".08em" }}>大胆な味 · ナグ</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,.55)", marginTop: 14, lineHeight: 1.6, maxWidth: 240 }}>Content. Culture. Community. The street-pop smash hit, built in Jeddah.</p>
              <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
                {[["at-sign", "Instagram"], ["video", "YouTube"], ["message-circle", "WhatsApp"]].map(([ic, label]) => (
                  <a key={ic} className="nw-social" href="#" aria-label={`NAGU on ${label}`}>
                    <Icon name={ic} size={18} />
                  </a>
                ))}
              </div>
            </div>
            {cols.map(([h, links]) => (
              <div key={h}>
                <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 15, letterSpacing: ".1em", color: REDT, marginBottom: 16 }}>{h}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {links.map(([l, href]) => <a key={l} className="nw-footlink" href={href} style={{ fontFamily: "var(--font-sans)", fontSize: 14 }}>{l}</a>)}
                </div>
              </div>
            ))}
          </div>
          <div className="nw-foot-bottom" style={{ marginTop: 48, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,.14)" }}>
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontFamily: "var(--font-sans)", fontSize: 12.5, color: "rgba(255,255,255,.6)" }}>
              <span>© NAGU 2026</span><a className="nw-footlink" href="#">Privacy</a><a className="nw-footlink" href="#">Terms</a><a className="nw-footlink" href="#">Cookies</a>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["EN", "日本語", "العربية"].map((l, i) => (
                <span key={l} style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12.5, padding: "5px 11px", border: "1px solid rgba(255,255,255,.25)", color: i === 0 ? "#fff" : "rgba(255,255,255,.55)", background: i === 0 ? "rgba(255,255,255,.1)" : "transparent" }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  /* ---- sticky floating order CTA ------------------------------------- */
  function StickyOrder() {
    return (
      <div style={{ position: "fixed", right: "clamp(14px,3vw,26px)", bottom: "clamp(14px,3vw,26px)", zIndex: "var(--z-float)" }}>
        <a className="nw-sticky-order" href="order.html" aria-label="Order now">
          <Icon name="shopping-bag" size={18} /> Order Now
        </a>
      </div>
    );
  }

  /* ---- page wrapper: chrome + content + lucide refresh --------------- */
  function Page({ active, children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
    return (
      <div style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "var(--font-sans)" }}>
        <TornDefs />
        <Header active={active} onMenu={() => setMenuOpen(true)} />
        <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} active={active} />
        <main>{children}</main>
        <Footer />
        <StickyOrder />
      </div>
    );
  }

  window.NAGUSite = { Page, Header, Footer, StickyOrder, Section, Btn, Kicker, BigHead, CharCard, MenuCard, FlipCard, PaperPanel, NeonSign, TornDefs, Icon, nav, RED, REDB, REDT, INK, PAPER, TEX, SKY, LOGO };
})();
