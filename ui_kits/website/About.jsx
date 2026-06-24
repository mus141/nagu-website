/* global React, ReactDOM, NAGUSite, NAGUDesignSystem_56f253 */
/* ABOUT page — who NAGU is: the origin, the thesis, the pillars, and the
   people. Brand voice + real character/scene art. Responsive via nw-* classes. */
const { Page, Section, Kicker, BigHead, Btn, Icon, RED, INK, PAPER } = window.NAGUSite;
const { Tag } = window.NAGUDesignSystem_56f253;

const SKY = "../../assets/lifestyle/skyline-night.jpeg";
const CH = (n) => `../../assets/characters/${n}`;

const VALUES = [
  { jp: "コンテンツ", t: "Content", d: "We make the brand worth watching: drops, characters, and culture-first storytelling." },
  { jp: "カルチャー", t: "Culture", d: "We use anime culture, we don't copy it. Street-led edge, localized for Jeddah and beyond." },
  { jp: "コミュニティ", t: "Community", d: "Regulars, collectors, and crew. The verse only works because people show up." },
];

const PILLARS = [
  { icon: "flame", t: "Value Smash, Asian Twist", d: "Classic smash formats + Korean flavor + the NAGU by URBAN co-brand line." },
  { icon: "sparkles", t: "Integrated Character IP", d: "Three sibling samurai-anime mascots (Nagu, Biku, Fifu) at the center of everything." },
  { icon: "zap", t: "Drop Culture", d: "Limited, fast, unpredictable releases that run like a streetwear label." },
  { icon: "settings", t: "Lean Machine", d: "Street culture on the outside, a tight operational machine on the inside." },
];

function AboutPage() {
  return (
    <Page active="about">
      {/* ---- hero ---- */}
      <section className="nw-section nw-section--hero" style={{ position: "relative", overflow: "hidden", background: "#0a0a0a", color: "#fff" }}>
        <img loading="lazy" decoding="async" src={SKY} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .22 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,.65), rgba(10,10,10,.93))" }} />
        <div className="nw-container" style={{ position: "relative" }}>
          <Kicker en="About" jp="アバウト / About" light />
          <h1 className="nw-h1" style={{ color: "#fff", marginTop: 14 }}>
            Built<br /><span style={{ color: "var(--nw-red)" }}>different.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,.78)", maxWidth: 600, marginTop: 20 }}>
            NAGU is the hypebeast drop of fast food: a culture-led smash-burger and Asian fried-chicken brand from Jeddah. Burgers crave. Anime craze. Asian twist.
          </p>
        </div>
      </section>

      {/* ---- the story ---- */}
      <Section bg="paper">
        <div className="nw-split">
          <div>
            <Kicker en="The Story" jp="物語" />
            <BigHead>Street-led edge.</BigHead>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.7, color: "#3a3a3a", marginTop: 16 }}>
              NAGU sells high-status street culture in a wrapper, at an everyday price. The front-end is hyper-visual: poster culture, anime energy, collectible IP. The back-end is a lean, systemized machine built to run fast and scale.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.7, color: "#3a3a3a", marginTop: 14 }}>
              Born in Jeddah, built for everywhere. We don't do childish or corporate. We do confident, culturally fluent, built different.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
              <Tag tone="red">Jeddah, KSA</Tag><Tag tone="outline">Est. street culture</Tag>
            </div>
          </div>
          <div style={{ position: "relative", border: "3px solid #141414", boxShadow: "8px 8px 0 0 #141414" }}>
            <img loading="lazy" decoding="async" src={CH("scene-02.jpeg")} alt="NAGU street scene" style={{ width: "100%", height: "clamp(280px,40vw,420px)", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </Section>

      {/* ---- values ---- */}
      <Section bg="ink">
        <Kicker en="What We Stand For" jp="価値観" light />
        <BigHead light>Content. Culture. Community.</BigHead>
        <div className="nw-grid nw-grid-3" style={{ marginTop: 36 }}>
          {VALUES.map((v) => (
            <div key={v.t} style={{ border: "2px solid rgba(255,255,255,.16)", background: "rgba(255,255,255,.02)", padding: 26 }}>
              <div style={{ fontFamily: "var(--font-jp)", fontSize: 15, color: RED, letterSpacing: ".08em" }}>{v.jp}</div>
              <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 30, color: "#fff", marginTop: 8, lineHeight: 1 }}>{v.t}</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.72)", marginTop: 12 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- pillars ---- */}
      <Section bg="paper">
        <Kicker en="The Pillars" jp="柱" />
        <BigHead>What makes it NAGU.</BigHead>
        <div className="nw-grid nw-grid-2" style={{ marginTop: 34 }}>
          {PILLARS.map((p) => (
            <div key={p.t} style={{ background: "#fff", border: "2px solid #141414", boxShadow: "6px 6px 0 0 #141414", padding: 26, display: "flex", gap: 18 }}>
              <span style={{ width: 50, height: 50, flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", background: RED, color: "#fff", border: "2px solid #000" }}><Icon name={p.icon} size={24} /></span>
              <div>
                <div className="nw-h3" style={{ color: INK }}>{p.t}</div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "#3a3a3a", marginTop: 8 }}>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- characters teaser ---- */}
      <Section bg="ink">
        <div className="nw-split">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {["nagu.jpeg", "biku.jpeg", "fifu.jpeg"].map((c) => (
              <div key={c} style={{ aspectRatio: "3/4", overflow: "hidden", border: "2px solid #000", boxShadow: "4px 4px 0 0 #000" }}>
                <img loading="lazy" decoding="async" src={CH(c)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            ))}
          </div>
          <div>
            <Kicker en="The Faces" jp="三兄妹" light />
            <BigHead light>Meet the siblings.</BigHead>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)", marginTop: 16, maxWidth: 460 }}>
              The brand isn't a logo. It's a cast. Nagu, Biku, and Fifu lead the drops, the cards, and the lore.
            </p>
            <div style={{ marginTop: 24 }}><Btn kind="red" size="lg" href="universe.html">Enter the Universe</Btn></div>
          </div>
        </div>
      </Section>

      {/* ---- careers CTA ---- */}
      <Section bg="red" style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-jp)", fontSize: 16, letterSpacing: ".14em", color: "rgba(255,255,255,.8)" }}>採用</div>
        <h2 className="nw-h2" style={{ color: "#fff", marginTop: 10 }}>Join the crew.</h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.85)", maxWidth: 480, margin: "16px auto 0" }}>
          We're always looking for people who get it. Kitchen, content, and beyond.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 26, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn kind="outline" onLight={false} size="lg" href="#">See Open Roles</Btn>
          <Btn kind="outline" onLight={false} size="lg" href="franchise.html">Franchise With Us</Btn>
        </div>
      </Section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("page")).render(<AboutPage />);
