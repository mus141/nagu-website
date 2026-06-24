/* global React, ReactDOM, NAGUSite, NAGUDesignSystem_56f253 */
/* MERCH page — the NAGU shop: collectible character cards, sticker packs,
   pins, and apparel/gear. Brand rule: never redraw mascots — uses the real
   character/scene art. Apparel uses framed-graphic placeholders (no apparel
   photography exists yet). Responsive via nw-* classes. */
const { Page, Section, Kicker, BigHead, Btn, Icon, FlipCard, RED, INK, PAPER } = window.NAGUSite;
const { Tag } = window.NAGUDesignSystem_56f253;

const GOLD = "#C8A24A";
const CH = (n) => `../../assets/characters/${n}`;
const CARD = (n) => `../../assets/cards/${n}`;
const MERCH_HERO = "../../assets/lifestyle/merch-hero.jpeg";

/* collectible flip cards — front artwork flips to the back on hover/focus */
const CARDS = [
  { front: CARD("nagu-front.jpeg"), back: CARD("nagu-back.jpeg"), name: "NAGU", role: "The Culture Creator" },
  { front: CARD("biku-front.jpeg"), back: CARD("biku-back.jpeg"), name: "BIKU", role: "Open-Grill Jester" },
  { front: CARD("fifu-front.jpeg"), back: CARD("fifu-back.jpeg"), name: "FIFU", role: "Street Scout" },
];

/* shop products — real merch photography from the "09 - Merch" set. */
const MR = (n) => `../../assets/merch/${n}`;
const SHOP = [
  { img: MR("verse-tee.jpeg"), name: "Verse Tee", type: "Apparel", price: 120, jp: "Tシャツ" },
  { img: MR("drop-hoodie.jpeg"), name: "Drop Hoodie", type: "Apparel", price: 260, jp: "フーディー" },
  { img: MR("cap.jpeg"), name: "NAGU Cap", type: "Gear", price: 90, jp: "キャップ" },
  { img: MR("stickers-pack.jpeg"), name: "Sticker Pack", type: "Stickers", price: 25, jp: "ステッカー" },
  { img: MR("character-pin.jpeg"), name: "Character Pin", type: "Pins", price: 35, jp: "ピン", premium: true },
  { img: MR("tote-bag.jpeg"), name: "Tote Bag", type: "Gear", price: 70, jp: "トート" },
];

function ShopCard({ p }) {
  return (
    <div style={{ background: "#fff", border: `2px solid ${p.premium ? GOLD : "#141414"}`, boxShadow: `6px 6px 0 0 ${p.premium ? GOLD : "#141414"}`, display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", borderBottom: `2px solid ${p.premium ? GOLD : "#141414"}`, background: "#0a0a0a" }}>
        <img loading="lazy" decoding="async" src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <Tag tone={p.premium ? "gold" : "ink"}>{p.type}</Tag>
        </div>
      </div>
      <div style={{ padding: 16, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 20, lineHeight: 1, color: INK }}>{p.name}</span>
          <span style={{ fontFamily: "var(--font-jp)", fontSize: 12, color: "#9a9a9a" }}>{p.jp}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 16 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, color: RED }}>SR {p.price}</span>
          <Btn kind="red" size="md" href="#">Add</Btn>
        </div>
      </div>
    </div>
  );
}

function MerchPage() {
  return (
    <Page active="merch">
      {/* ---- hero ---- */}
      <section className="nw-section nw-section--hero" style={{ position: "relative", overflow: "hidden", background: "#0a0a0a", color: "#fff" }}>
        <img loading="lazy" decoding="async" src={MERCH_HERO} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", opacity: .6 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,10,10,.92) 0%, rgba(10,10,10,.7) 45%, rgba(10,10,10,.45) 100%)" }} />
        <div className="nw-container" style={{ position: "relative" }}>
        <Kicker en="Merch" jp="グッズ / Shop" light />
        <h1 className="nw-h1" style={{ color: "#fff", marginTop: 14 }}>
          Wear the<br /><span style={{ color: "var(--nw-red)" }}>drop.</span>
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", maxWidth: 560, marginTop: 18 }}>
          Apparel, gear, and collectible IP. The brand isn't just on the menu. It's in the closet, on the laptop, and in the card binder.
        </p>
        </div>
      </section>

      {/* ---- collectible cards ---- */}
      <Section bg="ink">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <Kicker en="Character Cards" jp="コレクション" light />
            <BigHead light>Collect the siblings.</BigHead>
          </div>
          <Tag tone="red">Limited Run</Tag>
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.7)", marginTop: 14, maxWidth: 560 }}>
          Numbered collectible cards for the core IP. Each drop adds a new variant. Chase the set. Hover a card to flip the stats.
        </p>
        <div className="nw-grid nw-grid-3" style={{ marginTop: 36 }}>
          {CARDS.map((c) => <FlipCard key={c.name} {...c} light />)}
        </div>
      </Section>

      {/* ---- the shop ---- */}
      <Section bg="paper">
        <Kicker en="The Shop" jp="ショップ" />
        <BigHead>Apparel, gear & extras.</BigHead>
        <div className="nw-grid nw-grid-3" style={{ marginTop: 34 }}>
          {SHOP.map((p) => <ShopCard key={p.name} p={p} />)}
        </div>
      </Section>

      {/* ---- premium pin band ---- */}
      <Section bg="ink">
        <div className="nw-split">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 14, height: 14, background: GOLD, display: "inline-block", border: "2px solid #000" }} />
              <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 14, letterSpacing: ".18em", color: GOLD }}>Premium · 限定</span>
            </div>
            <h2 className="nw-h2" style={{ color: "#fff", marginTop: 12 }}>Enamel pins. Gold-grade.</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)", marginTop: 16, maxWidth: 520 }}>
              The rare kimono-gold accent appears only on premium collectibles: hard enamel, numbered, drop-exclusive.
            </p>
            <div style={{ marginTop: 24 }}>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: GOLD, color: "#0a0a0a", border: "2px solid #0a0a0a", borderRadius: 2, fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 17, letterSpacing: ".04em", padding: "15px 24px", textDecoration: "none" }}>
                Shop Pins <Icon name="arrow-right" size={18} />
              </a>
            </div>
          </div>
          <div style={{ position: "relative", border: `3px solid ${GOLD}`, boxShadow: `8px 8px 0 0 ${GOLD}` }}>
            <img loading="lazy" decoding="async" src={MR("enamel-pin-gold.jpeg")} alt="NAGU gold-grade enamel pin" style={{ width: "100%", height: "clamp(260px,38vw,380px)", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </Section>

      {/* ---- CTA ---- */}
      <Section bg="red" style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-jp)", fontSize: 16, letterSpacing: ".14em", color: "rgba(255,255,255,.8)" }}>新作グッズ</div>
        <h2 className="nw-h2" style={{ color: "#fff", marginTop: 10 }}>New merch drops first.</h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.85)", maxWidth: 480, margin: "16px auto 0" }}>
          Members get early access to every apparel and collectible drop.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 26, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn kind="outline" onLight={false} size="lg" href="rewards.html">Join Rewards</Btn>
          <Btn kind="outline" onLight={false} size="lg" href="drops.html">See the Drops</Btn>
        </div>
      </Section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("page")).render(<MerchPage />);
