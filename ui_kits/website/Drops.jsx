/* global React, ReactDOM, NAGUSite, NAGUDesignSystem_56f253 */
/* DROPS page — the streetwear-style "drop" calendar: a featured drop with a
   live countdown, a feed of upcoming/live/sold-out drops, and how it works.
   Responsive via nw-* classes. */
const { Page, Section, Kicker, BigHead, Btn, Icon, RED, INK, PAPER } = window.NAGUSite;
const { Tag } = window.NAGUDesignSystem_56f253;
const { useState, useEffect, useRef } = React;

/* ---- live countdown (same logic as the approved Home) ---- */
function Countdown() {
  const target = useRef(Date.now() + ((2 * 24 + 9) * 3600 + 41 * 60 + 12) * 1000);
  const calc = () => Math.max(0, target.current - Date.now());
  const [ms, setMs] = useState(calc());
  useEffect(() => { const i = setInterval(() => setMs(calc()), 1000); return () => clearInterval(i); }, []);
  const s = Math.floor(ms / 1000);
  const parts = [["Days", Math.floor(s / 86400)], ["Hrs", Math.floor((s % 86400) / 3600)], ["Min", Math.floor((s % 3600) / 60)], ["Sec", s % 60]];
  return (
    <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
      {parts.map(([l, v]) => (
        <div key={l} style={{ minWidth: 74, flex: "1 1 64px", maxWidth: 96, textAlign: "center", border: "2px solid rgba(255,255,255,.25)", padding: "12px 6px", background: "rgba(0,0,0,.4)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, lineHeight: 1, color: "#fff" }}>{String(v).padStart(2, "0")}</div>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: RED, marginTop: 6 }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

/* ---- drop feed data — limited-edition collab drops ---- */
const DROPS = [
  { name: "NAGU × URBAN", sub: "Day & night coffee blend. Collector drop with Urban Roastery.", img: "../../assets/drops/drop-1.jpeg", date: "Drops next week", status: "Upcoming", tone: "red" },
  { name: "NAGU × RAPTOR", sub: "Built bold, driven by instinct. Limited collector box.", img: "../../assets/drops/drop-2.jpeg", date: "Drops this month", status: "Upcoming", tone: "red" },
  { name: "NAGU × HEINZ", sub: "Tokyo small-batch sauces. A hit of the unexpected.", img: "../../assets/drops/drop-3.jpeg", date: "Coming soon", status: "Upcoming", tone: "outline" },
  { name: "NAGU × EYEWA", sub: "Two visions, one focus. See the future.", img: "../../assets/drops/drop-4.jpeg", date: "Coming soon", status: "Upcoming", tone: "outline" },
  { name: "To Be Announced", tba: true },
  { name: "To Be Announced", tba: true },
];

const STEPS = [
  { icon: "bell", t: "Set a reminder", d: "Drops are announced, not scheduled forever. Get the alert before it goes live." },
  { icon: "zap", t: "Move fast", d: "Limited builds, limited windows. When it's live, it's live. Then it's gone." },
  { icon: "shopping-bag", t: "Cop it", d: "Order ahead, skip the line, pick it up hot. Repeat next drop." },
];

function DropsPage() {
  return (
    <Page active="drops">
      {/* ---- hero ---- */}
      <Section bg="poster" className="nw-section--hero" style={{ overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", right: -20, top: -30, fontFamily: "var(--font-jp)", fontSize: "min(200px,28vw)", color: "rgba(255,255,255,.04)", lineHeight: .8, pointerEvents: "none" }}>限定</div>
        <Kicker en="Drops" jp="限定 / Limited" light />
        <h1 className="nw-h1" style={{ color: "#fff", marginTop: 14 }}>
          Built to<br /><span style={{ color: "var(--nw-red)" }}>sell out.</span>
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", maxWidth: 560, marginTop: 18 }}>
          NAGU runs like a streetwear label: surprise drops, limited builds, fast windows. Blink and it's gone.
        </p>
      </Section>

      {/* ---- featured drop + countdown ---- */}
      <Section bg="ink">
        <div className="nw-split">
          <div>
            <Kicker en="Latest Drop" jp="限定 / Limited" light />
            <BigHead light>NAGU × URBAN.</BigHead>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.72)", marginTop: 16, maxWidth: 460 }}>
              A limited-edition coffee collector drop by NAGU and Urban Roastery. A day-and-night blend — light and bright for the morning, dark and bold for the late run. Brew without limits.
            </p>
            <Countdown />
            <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
              <Btn kind="red" size="lg" href="#reminder">Set a Reminder</Btn>
              <Btn kind="outline" onLight={false} size="lg" href="menu.html">See the Menu</Btn>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -14, left: -14, zIndex: 2 }}><Tag tone="red">Limited</Tag></div>
            <div style={{ borderRadius: 5, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,.6)" }}>
              <img loading="lazy" decoding="async" src="../../assets/drops/drop-1.jpeg" alt="NAGU x Urban Roastery coffee collector drop" style={{ width: "100%", height: "clamp(280px,40vw,420px)", objectFit: "cover", display: "block", borderRadius: 5 }} />
            </div>
          </div>
        </div>
      </Section>

      {/* ---- drop feed ---- */}
      <Section bg="paper">
        <Kicker en="The Feed" jp="ドロップ" />
        <BigHead>Every drop, tracked.</BigHead>
        <div className="nw-grid nw-grid-3" style={{ marginTop: 34 }}>
          {DROPS.map((d, i) => d.tba ? (
            <div key={`tba-${i}`} className="nw-dropcard nw-dropcard--tba" aria-label="Drop to be announced">
              <span aria-hidden="true" style={{ fontFamily: "var(--font-jp)", fontSize: 64, color: "rgba(255,255,255,.12)", lineHeight: 1 }}>限定</span>
              <div className="nw-h3" style={{ color: "#fff", marginTop: 14, textAlign: "center" }}>To Be Announced</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.5, color: "rgba(255,255,255,.6)", marginTop: 8, textAlign: "center" }}>Next collab loading.</p>
              <span style={{ marginTop: 16 }}><Tag tone="outline">Soon</Tag></span>
            </div>
          ) : (
            <a key={d.name} href="#reminder" className="nw-dropcard" aria-label={`${d.name} — ${d.date}`}>
              <div className="nw-dropcard-media" style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderBottom: "2px solid #141414" }}>
                <img loading="lazy" decoding="async" src={d.img} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", top: 10, left: 10 }}><Tag tone={d.tone}>{d.status}</Tag></div>
              </div>
              <div style={{ padding: 18, display: "flex", flexDirection: "column", flex: 1 }}>
                <div className="nw-h3" style={{ color: INK }}>{d.name}</div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.5, color: "#3a3a3a", marginTop: 8 }}>{d.sub}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 16 }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12.5, letterSpacing: ".06em", textTransform: "uppercase", color: RED }}>{d.date}</span>
                  <span className="nw-dropcard-arrow" style={{ color: INK }}><Icon name="arrow-right" size={20} /></span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* ---- how drops work ---- */}
      <Section bg="ink">
        <Kicker en="How Drops Work" jp="仕組み" light />
        <BigHead light>Three moves.</BigHead>
        <div className="nw-grid nw-grid-3" style={{ marginTop: 34 }}>
          {STEPS.map((s, i) => (
            <div key={s.t} style={{ border: "2px solid rgba(255,255,255,.16)", background: "rgba(255,255,255,.02)", padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 46, height: 46, display: "inline-flex", alignItems: "center", justifyContent: "center", background: RED, color: "#fff", border: "2px solid #000" }}><Icon name={s.icon} size={22} /></span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 34, color: "rgba(255,255,255,.18)" }}>0{i + 1}</span>
              </div>
              <div className="nw-h3" style={{ color: "#fff", marginTop: 16 }}>{s.t}</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,.7)", marginTop: 10 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- reminder CTA ---- */}
      <Section bg="red" style={{ textAlign: "center" }} >
        <div id="reminder" style={{ position: "relative", top: -90 }} />
        <div style={{ fontFamily: "var(--font-jp)", fontSize: 16, letterSpacing: ".14em", color: "rgba(255,255,255,.8)" }}>次のドロップ</div>
        <h2 className="nw-h2" style={{ color: "#fff", marginTop: 10 }}>Never miss a drop.</h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.85)", maxWidth: 480, margin: "16px auto 0" }}>
          Get the alert the second the next one goes live.
        </p>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", maxWidth: 520, margin: "24px auto 0" }}>
          <input type="email" required placeholder="you@email.com" aria-label="Email address" style={{ flex: "1 1 240px" }} />
          <button type="submit" className="nw-btn nw-btn--ink nw-btn--lg">Notify Me</button>
        </form>
      </Section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("page")).render(<DropsPage />);
