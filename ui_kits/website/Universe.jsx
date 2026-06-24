/* global React, ReactDOM, NAGUSite, NAGUDesignSystem_56f253 */
/* UNIVERSE page — the NAGU "Web Verse": the three sibling-samurai mascots,
   the lore, scene art, and downloads. Brand rule: never redraw mascots —
   uses the real portraits in assets/characters/. Responsive via nw-* classes. */
const { Page, Section, Kicker, BigHead, Btn, CharCard, RED, INK, PAPER } = window.NAGUSite;
const { Tag } = window.NAGUDesignSystem_56f253;

const SKY = "../../assets/lifestyle/skyline-night.jpeg";
const WEBVERSE = "../../assets/lifestyle/web-verse-bg.jpeg";
const SCENE = (n) => `../../assets/characters/scene-0${n}.jpeg`;

/* The three siblings — roles + JP per the brand bible (matches Home). */
const CREW = [
  {
    image: "../../assets/characters/nagu-char-04.jpeg", name: "NAGU", role: "The Culture Creator", jp: "ナグ", number: 1,
    bio: "The face of the drop. Sets the tone, calls the collabs, and keeps the whole verse moving. If it's loud, it started with Nagu.",
  },
  {
    image: "../../assets/characters/nagu-char-01.jpeg", name: "BIKU", role: "Open-Grill Jester", jp: "ビク", number: 2,
    bio: "Lives at the flat-top. Smashes hard, talks trash, never misses a sear. The chaos that makes the kitchen sing.",
  },
  {
    image: "../../assets/characters/nagu-char-02.jpeg", name: "FIFU", role: "Street Scout", jp: "フィフ", number: 3,
    bio: "Eyes on the street. Finds the flavor, the corner, the next move before anyone else. The reason NAGU always feels early.",
  },
];

function UniversePage() {
  return (
    <Page active="universe">
      {/* ---- cinematic hero ---- */}
      <section className="nw-section nw-section--hero" style={{ position: "relative", overflow: "hidden", background: "#0a0a0a", color: "#fff" }}>
        <img loading="lazy" decoding="async" src={WEBVERSE} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .5 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,.55), rgba(10,10,10,.82) 60%, rgba(10,10,10,.95))" }} />
        <div className="nw-container" style={{ position: "relative" }}>
          <Kicker en="The Universe" jp="ザ・ユニバース / Web Verse" light />
          <h1 className="nw-h1" style={{ color: "#fff", marginTop: 14 }}>
            The web<br /><span style={{ color: "var(--nw-red)" }}>verse.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,.78)", maxWidth: 600, marginTop: 20 }}>
            Three sibling samurai. Streetwear-dressed, katana-carrying, sneaker-flexing. We use anime culture. We don't copy it. This is the world the food lives in.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <Btn kind="red" size="lg" href="drops.html">See the Drops</Btn>
            <Btn kind="outline" onLight={false} size="lg" href="merch.html">Collect the Cards</Btn>
          </div>
        </div>
      </section>

      {/* ---- meet the siblings ---- */}
      <Section bg="paper">
        <Kicker en="Meet the Siblings" jp="三兄妹" />
        <BigHead>Central IP. Not a logo.</BigHead>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "#3a3a3a", marginTop: 12, maxWidth: 620 }}>
          NAGU is built around three characters, not a mascot. They headline the drops, the cards, the merch and the lore: collectible IP you actually want to own.
        </p>
        <div className="nw-grid nw-grid-3" style={{ marginTop: 38 }}>
          {CREW.map((c) => (
            <div key={c.name}>
              <CharCard image={c.image} name={c.name} role={c.role} jp={c.jp} light={false} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "#3a3a3a", marginTop: 16 }}>{c.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- the lore (scene strip) ---- */}
      <Section bg="ink">
        <div className="nw-split">
          <div>
            <Kicker en="The Lore" jp="物語" light />
            <BigHead light>Street culture on the outside.</BigHead>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)", marginTop: 16, maxWidth: 520 }}>
              An operational machine on the inside. The verse is where the brand tells its story: neon alleys, late-night runs, surprise drops. Anime energy, Jeddah roots, built different.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
              <Tag tone="red">Content</Tag><Tag tone="outline">Culture</Tag><Tag tone="outline">Community</Tag>
            </div>
          </div>
          <div className="nw-gallery" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="nw-gallery-tile" style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", borderRadius: 5, animationDelay: `${n * .25}s` }}>
                <img loading="lazy" decoding="async" src={SCENE(n)} alt={`NAGU scene ${n}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 5 }} />
                <span className="nw-gallery-glow" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- animated drops teaser ---- */}
      <Section bg="poster">
        <div className="nw-split">
          <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", border: "2px solid #000", boxShadow: "6px 6px 0 0 #000" }}>
            <img loading="lazy" decoding="async" src={SCENE(2)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,10,10,.35)" }}>
              <span style={{ width: 74, height: 74, borderRadius: "50%", background: RED, border: "3px solid #000", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 0 30px rgba(200,16,46,.6)" }}>
                <NAGUSite.Icon name="play" size={30} />
              </span>
            </div>
          </div>
          <div>
            <Kicker en="Animated Drops" jp="アニメ" light />
            <BigHead light>The verse moves.</BigHead>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)", marginTop: 16, maxWidth: 520 }}>
              Short-form animated drops, character moments, and behind-the-grill chaos. Built for the feed first, the menu second.
            </p>
            <div style={{ marginTop: 24 }}><Btn kind="red" size="lg" href="drops.html">Watch the Latest</Btn></div>
          </div>
        </div>
      </Section>

      {/* ---- downloads ---- */}
      <Section bg="paper">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <Kicker en="Downloads" jp="ダウンロード" />
            <BigHead>Take the verse with you.</BigHead>
          </div>
          <Btn kind="outline" href="#">See All</Btn>
        </div>
        <div className="nw-grid nw-grid-4" style={{ marginTop: 32 }}>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} style={{ background: "#fff", border: "2px solid #141414", boxShadow: "5px 5px 0 0 #141414" }}>
              <div style={{ aspectRatio: "3/4", overflow: "hidden", borderBottom: "2px solid #141414" }}>
                <img loading="lazy" decoding="async" src={SCENE(n)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 15, color: INK }}>Wallpaper 0{n}</span>
                <span style={{ color: RED }}><NAGUSite.Icon name="download" size={18} /></span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- CTA ---- */}
      <Section bg="red" style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-jp)", fontSize: 16, letterSpacing: ".14em", color: "rgba(255,255,255,.8)" }}>ナグの世界</div>
        <h2 className="nw-h2" style={{ color: "#fff", marginTop: 10 }}>Join the verse.</h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.85)", maxWidth: 480, margin: "16px auto 0" }}>
          Drops, cards, and chaos, straight to your feed.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 26, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn kind="outline" onLight={false} size="lg" href="drops.html">See the Drops</Btn>
          <Btn kind="outline" onLight={false} size="lg" href="merch.html">Shop Merch</Btn>
        </div>
      </Section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("page")).render(<UniversePage />);
