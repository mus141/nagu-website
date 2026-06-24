/* global React, ReactDOM, NAGUSite, NAGUDesignSystem_56f253 */
/* REWARDS page — the NAGU loyalty program: earn points, climb tiers, unlock
   early drop access. Responsive via nw-* classes. */
const { Page, Section, Kicker, BigHead, Btn, Icon, RED, INK, PAPER } = window.NAGUSite;
const { Tag } = window.NAGUDesignSystem_56f253;

const GOLD = "#C8A24A";

const STEPS = [
  { icon: "user-plus", t: "Sign up", d: "Join free in the app or online. Your card lives in your pocket." },
  { icon: "utensils", t: "Order & earn", d: "Every SR spent earns points, whether in-store, takeaway, or delivery." },
  { icon: "gift", t: "Redeem", d: "Cash points for free food, exclusive merch, and drop access." },
];

const TIERS = [
  {
    name: "Street", jp: "ストリート", req: "0 pts", accent: "#141414",
    perks: ["1 pt per SR", "Birthday reward", "Member-only offers"],
  },
  {
    name: "Crew", jp: "クルー", req: "1,500 pts", accent: RED, featured: true,
    perks: ["1.5 pts per SR", "Free side every month", "Early drop access", "All Street perks"],
  },
  {
    name: "Verse", jp: "ヴァース", req: "5,000 pts", accent: GOLD,
    perks: ["2 pts per SR", "Free combo every month", "First-access drops + merch", "Exclusive collectibles", "All Crew perks"],
  },
];

const PERKS = [
  { icon: "zap", t: "Points on everything", d: "Earn on every order, every channel." },
  { icon: "bell", t: "Early drop access", d: "Cop limited drops before they go public." },
  { icon: "gift", t: "Free food", d: "Redeem points for the builds you love." },
  { icon: "star", t: "Exclusive merch", d: "Member-only apparel and collectibles." },
];

function TierCard({ t }) {
  const dark = t.accent !== GOLD;
  return (
    <div style={{ background: t.featured ? "#0a0a0a" : "#fff", border: `2px solid ${t.accent}`, boxShadow: `7px 7px 0 0 ${t.accent}`, padding: 26, display: "flex", flexDirection: "column", position: "relative" }}>
      {t.featured && <div style={{ position: "absolute", top: -13, left: 22 }}><Tag tone="red">Most Popular</Tag></div>}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 30, lineHeight: 1, color: t.featured ? "#fff" : INK }}>{t.name}</span>
        <span style={{ fontFamily: "var(--font-jp)", fontSize: 13, color: t.accent === GOLD ? GOLD : (t.featured ? "rgba(255,255,255,.6)" : "#9a9a9a") }}>{t.jp}</span>
      </div>
      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", color: t.accent === GOLD ? GOLD : RED, marginTop: 8 }}>{t.req}</div>
      <div style={{ height: 2, background: t.accent, margin: "18px 0", opacity: .5 }} />
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {t.perks.map((p) => (
          <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.45, color: t.featured ? "rgba(255,255,255,.82)" : "#3a3a3a" }}>
            <span style={{ color: t.accent === GOLD ? GOLD : RED, flex: "0 0 auto", marginTop: 1 }}><Icon name="check" size={17} /></span>{p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RewardsPage() {
  return (
    <Page active="rewards">
      {/* ---- hero ---- */}
      <Section bg="poster" className="nw-section--hero" style={{ overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", right: -20, top: -30, fontFamily: "var(--font-jp)", fontSize: "min(190px,26vw)", color: "rgba(255,255,255,.04)", lineHeight: .8, pointerEvents: "none" }}>特典</div>
        <Kicker en="Rewards" jp="特典 / Loyalty" light />
        <h1 className="nw-h1" style={{ color: "#fff", marginTop: 14 }}>
          Eat. Earn.<br /><span style={{ color: "var(--nw-red)" }}>repeat.</span>
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", maxWidth: 560, marginTop: 18 }}>
          The NAGU rewards program turns repeat orders into free food, early drops, and member-only merch. Free to join. Built for regulars.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
          <Btn kind="red" size="lg" href="#join">Join Free</Btn>
          <Btn kind="outline" onLight={false} size="lg" href="order.html">Start Earning</Btn>
        </div>
      </Section>

      {/* ---- how it works ---- */}
      <Section bg="paper">
        <Kicker en="How It Works" jp="仕組み" />
        <BigHead>Three steps to free food.</BigHead>
        <div className="nw-grid nw-grid-3" style={{ marginTop: 34 }}>
          {STEPS.map((s, i) => (
            <div key={s.t} style={{ background: "#fff", border: "2px solid #141414", boxShadow: "6px 6px 0 0 #141414", padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 46, height: 46, display: "inline-flex", alignItems: "center", justifyContent: "center", background: RED, color: "#fff", border: "2px solid #000" }}><Icon name={s.icon} size={22} /></span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 34, color: "rgba(20,20,20,.14)" }}>0{i + 1}</span>
              </div>
              <div className="nw-h3" style={{ color: INK, marginTop: 16 }}>{s.t}</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "#3a3a3a", marginTop: 10 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- tiers ---- */}
      <Section bg="ink">
        <Kicker en="The Tiers" jp="ランク" light />
        <BigHead light>Climb the verse.</BigHead>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.7)", marginTop: 14, maxWidth: 560 }}>
          The more you eat, the more you unlock. Three tiers, from first order to full verse.
        </p>
        <div className="nw-grid nw-grid-3" style={{ marginTop: 38, alignItems: "stretch" }}>
          {TIERS.map((t) => <TierCard key={t.name} t={t} />)}
        </div>
      </Section>

      {/* ---- perks strip ---- */}
      <Section bg="paper">
        <Kicker en="Member Perks" jp="特典" />
        <BigHead>What you unlock.</BigHead>
        <div className="nw-grid nw-grid-4" style={{ marginTop: 32 }}>
          {PERKS.map((p) => (
            <div key={p.t} style={{ background: "#fff", border: "2px solid #141414", boxShadow: "4px 4px 0 0 #141414", padding: 22 }}>
              <span style={{ color: RED }}><Icon name={p.icon} size={26} /></span>
              <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 17, color: INK, marginTop: 14 }}>{p.t}</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.55, color: "#3a3a3a", marginTop: 8 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- join CTA ---- */}
      <Section bg="red" style={{ textAlign: "center" }}>
        <div id="join" style={{ position: "relative", top: -90 }} />
        <div style={{ fontFamily: "var(--font-jp)", fontSize: 16, letterSpacing: ".14em", color: "rgba(255,255,255,.8)" }}>今すぐ参加</div>
        <h2 className="nw-h2" style={{ color: "#fff", marginTop: 10 }}>Join the rewards.</h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.85)", maxWidth: 480, margin: "16px auto 0" }}>
          Free to join. Start earning on your very next order.
        </p>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", maxWidth: 520, margin: "24px auto 0" }}>
          <input type="email" required placeholder="you@email.com" aria-label="Email address" style={{ flex: "1 1 240px" }} />
          <button type="submit" className="nw-btn nw-btn--ink nw-btn--lg">Join Free</button>
        </form>
      </Section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("page")).render(<RewardsPage />);
