/* global React, ReactDOM, NAGUSite, NAGUDesignSystem_56f253 */
/* FRANCHISE page — the partner/investor pitch: the opportunity, the lean
   model, the support, and how to apply. Responsive via nw-* classes. */
const { Page, Section, Kicker, BigHead, Btn, Icon, RED, INK, PAPER } = window.NAGUSite;
const { Tag } = window.NAGUDesignSystem_56f253;

const SKY = "../../assets/lifestyle/skyline-night.jpeg";

const STATS = [
  { v: "Content.\nCulture.\nCommunity.", l: "The core thought" },
  { v: "Lean", l: "Operational machine inside" },
  { v: "Compact", l: "Small footprint, big presence" },
  { v: "Day 1", l: "Delivery-ready from open" },
];

const MODEL = [
  { icon: "store", t: "Small-format footprint", d: "Grab-and-go windows over big dining rooms. Lower build cost, faster break-even, more placement options." },
  { icon: "flame", t: "Tight, high-repeat menu", d: "Smash burgers, Asian fried chicken, and co-brand drops, engineered for speed and repeat orders." },
  { icon: "megaphone", t: "Culture-led marketing", d: "Anime IP, collectible drops, and social-first content do the heavy lifting on awareness." },
  { icon: "settings", t: "Systemized operations", d: "Street culture on the outside, a lean operational machine on the inside. Built to run consistently." },
];

const SUPPORT = [
  "Site selection & build guidance",
  "Full brand & design system",
  "Menu, recipes & supply chain",
  "Staff training & operations playbook",
  "Marketing, drops & social toolkit",
  "Ordering app & rewards platform",
];

const STEPS = [
  { t: "Apply", d: "Send your details and target market." },
  { t: "Discovery", d: "We review fit, territory, and investment." },
  { t: "Sign & build", d: "Lock the deal, build the unit, train the team." },
  { t: "Open & grow", d: "Launch the drop. Scale across your territory." },
];

function FranchisePage() {
  return (
    <Page active="franchise">
      {/* ---- hero ---- */}
      <section className="nw-section nw-section--hero" style={{ position: "relative", overflow: "hidden", background: "#0a0a0a", color: "#fff" }}>
        <img loading="lazy" decoding="async" src={SKY} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .22 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,.65), rgba(10,10,10,.93))" }} />
        <div className="nw-container" style={{ position: "relative" }}>
          <Kicker en="Franchise" jp="フランチャイズ" light />
          <h1 className="nw-h1" style={{ color: "#fff", marginTop: 14 }}>
            Own the<br /><span style={{ color: "var(--nw-red)" }}>drop.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,.78)", maxWidth: 600, marginTop: 20 }}>
            NAGU sells high-status street culture in a wrapper, at an everyday price. Hyper-visual front-end, lean machine back-end. Bring it to your city.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <Btn kind="red" size="lg" href="#apply">Apply Now</Btn>
            <Btn kind="outline" onLight={false} size="lg" href="#deck">Request the Deck</Btn>
          </div>
        </div>
      </section>

      {/* ---- the opportunity (stats) ---- */}
      <Section bg="red">
        <Kicker en="The Opportunity" jp="機会" light />
        <BigHead light>Built to scale.</BigHead>
        <div className="nw-grid nw-grid-4" style={{ marginTop: 34 }}>
          {STATS.map((s) => (
            <div key={s.l} style={{ background: "rgba(0,0,0,.18)", border: "2px solid rgba(0,0,0,.35)", padding: 22 }}>
              <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 26, lineHeight: 1.02, color: "#fff", whiteSpace: "pre-line" }}>{s.v}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,.85)", marginTop: 12, letterSpacing: ".04em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- the model ---- */}
      <Section bg="paper">
        <Kicker en="The Model" jp="モデル" />
        <BigHead>Why it works.</BigHead>
        <div className="nw-grid nw-grid-2" style={{ marginTop: 34 }}>
          {MODEL.map((m) => (
            <div key={m.t} style={{ background: "#fff", border: "2px solid #141414", boxShadow: "6px 6px 0 0 #141414", padding: 26, display: "flex", gap: 18 }}>
              <span style={{ width: 50, height: 50, flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", background: RED, color: "#fff", border: "2px solid #000" }}><Icon name={m.icon} size={24} /></span>
              <div>
                <div className="nw-h3" style={{ color: INK }}>{m.t}</div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "#3a3a3a", marginTop: 8 }}>{m.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- what you get ---- */}
      <Section bg="ink">
        <div className="nw-split">
          <div>
            <Kicker en="What You Get" jp="サポート" light />
            <BigHead light>A full system, not a logo.</BigHead>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)", marginTop: 16, maxWidth: 520 }}>
              Partners get the entire NAGU machine: brand, operations, tech, and the culture engine that drives demand.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {SUPPORT.map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10, border: "2px solid rgba(255,255,255,.16)", background: "rgba(255,255,255,.02)", padding: "14px 16px", fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.4, color: "rgba(255,255,255,.85)" }}>
                <span style={{ color: RED, flex: "0 0 auto", marginTop: 1 }}><Icon name="check" size={16} /></span>{s}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- process ---- */}
      <Section bg="paper">
        <Kicker en="The Process" jp="流れ" />
        <BigHead>Four steps to open.</BigHead>
        <div className="nw-grid nw-grid-4" style={{ marginTop: 34 }}>
          {STEPS.map((s, i) => (
            <div key={s.t} style={{ background: "#fff", border: "2px solid #141414", boxShadow: "5px 5px 0 0 #141414", padding: 22 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: RED, lineHeight: 1 }}>0{i + 1}</span>
              <div className="nw-h3" style={{ color: INK, marginTop: 12 }}>{s.t}</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.55, color: "#3a3a3a", marginTop: 8 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- apply form ---- */}
      <Section bg="ink">
        <div id="apply" style={{ position: "relative", top: -90 }} />
        <div id="deck" style={{ position: "relative", top: -90 }} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <Kicker en="Apply" jp="応募" light />
          <h2 className="nw-h2" style={{ color: "#fff", marginTop: 10 }}>Bring NAGU to your city.</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)", marginTop: 14 }}>
            Tell us about you and your market. We'll send the franchise deck and the next steps.
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="nw-form" style={{ maxWidth: 720, margin: "28px auto 0" }}>
          {[["Full name", "text"], ["Email", "email"], ["Phone", "tel"], ["Target city / market", "text"]].map(([ph, type]) => (
            <input key={ph} type={type} required placeholder={ph} aria-label={ph} />
          ))}
          <textarea placeholder="Tell us about your experience & investment range" aria-label="Experience and investment range" rows={4} style={{ gridColumn: "1 / -1" }} />
          <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "center" }}>
            <button type="submit" className="nw-btn nw-btn--red nw-btn--lg">Submit Application</button>
          </div>
        </form>
      </Section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("page")).render(<FranchisePage />);
