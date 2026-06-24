/* global React, ReactDOM, NAGUSite, NAGUDesignSystem_56f253, NAGU_MENU */
/* ORDER NOW page — the order hub every CTA links to. Choose a channel
   (pickup / delivery), see popular items, jump to delivery partners or the
   takeaway app. Responsive via nw-* classes. */
const { Page, Section, Kicker, BigHead, Btn, Icon, RED, INK, PAPER } = window.NAGUSite;
const { ProductCard, Tag } = window.NAGUDesignSystem_56f253;
const MENU = window.NAGU_MENU;

const DELIVERY = ["HungerStation", "Jahez", "ToYou", "Keeta"];
const POPULAR = MENU.items.filter((it) => ["double-smash", "korean-beef", "fried-chicken"].includes(it.id));

function ChannelCard({ icon, en, jp, title, desc, cta, href, dark }) {
  return (
    <div style={{ background: dark ? "#0a0a0a" : "#fff", border: "2px solid #141414", boxShadow: "7px 7px 0 0 #141414", padding: 30, display: "flex", flexDirection: "column", color: dark ? "#fff" : INK }}>
      <span style={{ width: 56, height: 56, display: "inline-flex", alignItems: "center", justifyContent: "center", background: RED, color: "#fff", border: "2px solid #000" }}><Icon name={icon} size={28} /></span>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 20 }}>
        <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 30, lineHeight: 1, color: dark ? "#fff" : INK }}>{title}</span>
        <span style={{ fontFamily: "var(--font-jp)", fontSize: 13, color: RED }}>{jp}</span>
      </div>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: dark ? "rgba(255,255,255,.7)" : "#3a3a3a", marginTop: 12, flex: 1 }}>{desc}</p>
      <div style={{ marginTop: 22 }}><Btn kind="red" size="lg" href={href}>{cta}</Btn></div>
    </div>
  );
}

function OrderPage() {
  return (
    <Page active={null}>
      {/* ---- hero ---- */}
      <Section bg="poster" className="nw-section--hero" style={{ overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", right: -20, top: -30, fontFamily: "var(--font-jp)", fontSize: "min(200px,28vw)", color: "rgba(255,255,255,.04)", lineHeight: .8, pointerEvents: "none" }}>注文</div>
        <Kicker en="Order Now" jp="注文 / Order" light />
        <h1 className="nw-h1" style={{ color: "#fff", marginTop: 14 }}>
          Skip the<br /><span style={{ color: "var(--nw-red)" }}>line.</span>
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", maxWidth: 560, marginTop: 18 }}>
          Order ahead for pickup, or get it delivered hot. Pick a channel and build your order. Repeat-friendly from the first tap.
        </p>
      </Section>

      {/* ---- channels ---- */}
      <Section bg="paper">
        <Kicker en="How To Order" jp="注文方法" />
        <BigHead>Pick your channel.</BigHead>
        <div className="nw-grid nw-grid-2" style={{ marginTop: 32 }}>
          <ChannelCard icon="shopping-bag" jp="テイクアウト" title="Pickup" href="../ordering-app/index.html" cta="Order for Pickup"
            desc="Build your order in the app, skip the queue, and grab it hot from the window. Fastest way to eat." />
          <ChannelCard icon="bike" jp="デリバリー" title="Delivery" href="#delivery" cta="Order for Delivery" dark
            desc="Get NAGU brought to you through your favorite delivery app. Same builds, same crunch, at your door." />
        </div>
      </Section>

      {/* ---- popular items ---- */}
      <Section bg="ink">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <Kicker en="Start Here" jp="人気" light />
            <BigHead light>The repeat orders.</BigHead>
          </div>
          <Btn kind="outline" onLight={false} href="menu.html">Full Menu</Btn>
        </div>
        <div className="nw-grid nw-grid-3" style={{ marginTop: 34 }}>
          {POPULAR.map((it) => (
            <ProductCard key={it.id} image={it.image} name={it.name} tagline={it.tagline} price={it.price} tags={it.tags}
              action={<Btn kind="red" size="md" href="../ordering-app/index.html">Add to Order</Btn>} />
          ))}
        </div>
      </Section>

      {/* ---- delivery partners ---- */}
      <Section bg="paper" style={{ textAlign: "center" }}>
        <div id="delivery" style={{ position: "relative", top: -90 }} />
        <Kicker en="Delivery Partners" jp="デリバリー" />
        <BigHead>Order on your app of choice.</BigHead>
        <div className="nw-grid nw-grid-4" style={{ marginTop: 30 }}>
          {DELIVERY.map((d) => (
            <a key={d} href="#" style={{ textDecoration: "none", background: "#fff", border: "2px solid #141414", boxShadow: "4px 4px 0 0 #141414", padding: "26px 16px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 92 }}>
              <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 19, color: INK }}>{d}</span>
            </a>
          ))}
        </div>
      </Section>

      {/* ---- app CTA ---- */}
      <Section bg="red" style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-jp)", fontSize: 16, letterSpacing: ".14em", color: "rgba(255,255,255,.8)" }}>アプリ</div>
        <h2 className="nw-h2" style={{ color: "#fff", marginTop: 10 }}>Get the app.</h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.85)", maxWidth: 480, margin: "16px auto 0" }}>
          Order faster, earn rewards, and unlock early drops, all in one place.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 26, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn kind="outline" onLight={false} size="lg" href="../ordering-app/index.html">Open the App</Btn>
          <Btn kind="outline" onLight={false} size="lg" href="rewards.html">Join Rewards</Btn>
        </div>
      </Section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("page")).render(<OrderPage />);
