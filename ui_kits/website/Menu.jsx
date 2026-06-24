/* global React, ReactDOM, NAGUSite, NAGUDesignSystem_56f253, NAGU_MENU */
/* MENU page — full lineup grouped by category, with a sticky filter.
   Built on the shared chrome (window.NAGUSite) + the canonical menu
   (window.NAGU_MENU) + DS ProductCard/Tag. Responsive via nw-* classes. */
const { Page, Section, Kicker, BigHead, Btn, MenuCard, RED, INK, PAPER, TEX } = window.NAGUSite;
const { Tag } = window.NAGUDesignSystem_56f253;
const MENU = window.NAGU_MENU;

const { useState } = React;

/* JP accent per category — small, minimal (brand rule: English big, JP small) */
const CAT_JP = {
  Burgers: "バーガー",
  Sides: "サイド",
  "Full Menu": "フルセット",
};
const CAT_BLURB = {
  Burgers: "Smashed thin, seared hard, stacked loud. The reason you came.",
  Sides: "The supporting cast that steals the scene. Built to share, or not.",
  "Full Menu": "The entire lineup in one order. Every burger, every side — feed the whole crew.",
};

function MenuPage() {
  const cats = MENU.categories;
  const [active, setActive] = useState("All");
  const filters = ["All", ...cats];
  const shown = active === "All" ? cats : [active];

  return (
    <Page active="menu">
      {/* ---- poster hero ---- */}
      <Section bg="poster" className="nw-section--hero" style={{ overflow: "hidden" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute", right: -30, top: -40, fontFamily: "var(--font-jp)",
            fontSize: "min(220px, 30vw)", color: "rgba(255,255,255,.04)", lineHeight: .8, pointerEvents: "none",
          }}
        >
          メニュー
        </div>
        <Kicker en="The Lineup" jp="メニュー" light />
        <h1 className="nw-h1" style={{ color: "#fff", marginTop: 14 }}>
          The whole<br /><span style={{ color: "var(--nw-red)" }}>drop.</span>
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", maxWidth: 560, marginTop: 18 }}>
          Smash burgers, crispy chicken, loaded sides and crispy shrimp — or grab the whole spread in one order. Every build engineered for the repeat.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
          <Btn kind="red" size="lg" href="order.html">Order Now</Btn>
          <Btn kind="outline" onLight={false} size="lg" href="universe.html">Meet the Siblings</Btn>
        </div>
      </Section>

      {/* ---- sticky category filter ---- */}
      <div style={{ position: "sticky", top: 72, zIndex: 40, background: "rgba(10,10,10,.92)", backdropFilter: "blur(6px)", borderBottom: "2px solid #000" }}>
        <div className="nw-container" style={{ display: "flex", gap: 10, overflowX: "auto", paddingBlock: 14, WebkitOverflowScrolling: "touch" }}>
          {filters.map((f) => {
            const on = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  flex: "0 0 auto", cursor: "pointer", fontFamily: "var(--font-display)", textTransform: "uppercase",
                  fontWeight: 900, fontSize: 15, letterSpacing: ".04em", padding: "10px 18px", borderRadius: 2,
                  border: "2px solid", borderColor: on ? RED : "rgba(255,255,255,.25)",
                  background: on ? RED : "transparent", color: "#fff", transition: "all .14s cubic-bezier(.2,.8,.2,1)",
                  whiteSpace: "nowrap",
                }}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* ---- menu by category ---- */}
      <Section bg="paper">
        {shown.map((cat, ci) => {
          const items = MENU.items.filter((it) => it.cat === cat);
          if (!items.length) return null;
          return (
            <div key={cat} style={{ marginTop: ci === 0 ? 0 : 72 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
                <Kicker en={cat} jp={CAT_JP[cat]} />
                {cat === "Full Menu" && <Tag tone="red">Best Value</Tag>}
              </div>
              <BigHead>{cat}</BigHead>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.55, color: "#3a3a3a", marginTop: 10, maxWidth: 540 }}>
                {CAT_BLURB[cat]}
              </p>
              <div className="nw-grid nw-grid-3" style={{ marginTop: 30 }}>
                {items.map((it) => (
                  <MenuCard
                    key={it.id}
                    item={it}
                    action={<Btn kind="red" size="md" href="order.html">Add to Order</Btn>}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </Section>

      {/* ---- closing CTA band ---- */}
      <Section bg="red" style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-jp)", fontSize: 16, letterSpacing: ".14em", color: "rgba(255,255,255,.8)" }}>大胆な味</div>
        <h2 className="nw-h2" style={{ color: "#fff", marginTop: 10 }}>Hungry yet?</h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.85)", maxWidth: 480, margin: "16px auto 0" }}>
          Skip the line. Build your order and pick it up hot.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 26, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn kind="outline" onLight={false} size="lg" href="order.html">Start an Order</Btn>
          <Btn kind="outline" onLight={false} size="lg" href="locations.html">Find a Location</Btn>
        </div>
      </Section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("page")).render(<MenuPage />);
