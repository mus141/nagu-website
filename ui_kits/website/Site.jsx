/* global React, NAGUDesignSystem_56f253, NAGU_MENU, lucide */
const { useEffect, useState, useRef } = React;
const { ProductCard, Tag } = window.NAGUDesignSystem_56f253;
const { CharCard, MenuCard } = window.NAGUSite;
const MENU = window.NAGU_MENU;
const RED = "#C8102E", REDB = "#E0182F", REDT = "#FF3344", INK = "#141414", PAPER = "#ECE7DD";
const TEX = "../../assets/elements/texture-overlay.jpg";
const SKY = "../../assets/lifestyle/skyline-night.jpeg";

/* label -> page url (nav + footer link targets) */
const PAGES = {
  "Menu": "menu.html", "Universe": "universe.html", "Drops": "drops.html", "Merch": "merch.html", "Locations": "locations.html",
  "Smash Burgers": "menu.html", "Asian Fried Chicken": "menu.html", "Sides": "menu.html", "NAGU by URBAN": "menu.html", "Combos": "menu.html",
  "Meet the Siblings": "universe.html", "Sauce Characters": "universe.html", "Lore": "universe.html", "Animated Drops": "universe.html", "Downloads": "universe.html",
  "Apparel & Gear": "merch.html", "Character Cards": "merch.html", "Sticker Packs": "merch.html", "Pins": "merch.html",
  "Rewards": "rewards.html", "Franchise": "franchise.html", "About": "about.html", "Careers": "about.html",
};

/* ---- sharp flat buttons (supports href -> renders an <a>) ---------------- */
function Btn({ children, kind = "red", onLight = true, size = "md", href, ...rest }) {
  const pad = size === "lg" ? "17px 28px" : "14px 22px";
  const fs = size === "lg" ? 19 : 16;
  const base = {
    display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer",
    fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900,
    letterSpacing: ".04em", fontSize: fs, padding: pad, border: "2px solid",
    borderRadius: 2, transition: "all .14s cubic-bezier(.2,.8,.2,1)", lineHeight: 1,
    textDecoration: "none",
  };
  const styles = kind === "red"
    ? { ...base, background: RED, color: "#fff", borderColor: RED }
    : { ...base, background: "transparent", color: onLight ? INK : "#fff", borderColor: onLight ? INK : "#fff" };
  const Tag = href ? "a" : "button";
  return (
    <Tag style={styles} href={href} {...rest}
      onMouseEnter={(e) => { if (kind === "red") e.currentTarget.style.background = REDB; else { e.currentTarget.style.background = onLight ? INK : "#fff"; e.currentTarget.style.color = onLight ? "#fff" : INK; } }}
      onMouseLeave={(e) => { if (kind === "red") e.currentTarget.style.background = RED; else { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = onLight ? INK : "#fff"; } }}>
      {children}<span style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>↗</span>
    </Tag>
  );
}

function Kicker({ en, jp, light, enColor }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 15, letterSpacing: ".18em", color: enColor || (light ? REDT : RED) }}>{en}</span>
      {jp && <span style={{ fontFamily: "var(--font-jp)", fontSize: 14, letterSpacing: ".1em", color: light ? "rgba(255,255,255,.5)" : "#7a726a" }}>{jp}</span>}
    </div>
  );
}
function BigHead({ children, light, size = 78 }) {
  return <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, lineHeight: 1.02, letterSpacing: ".01em", fontSize: size, color: light ? "#fff" : INK }}>{children}</h2>;
}

/* ---- reusable torn cream panel ------------------------------------------- */
function PaperPanel({ children, padV = 78 }) {
  return (
    <div style={{ position: "relative", width: 1440 }}>
      <div style={{ position: "absolute", top: 14, bottom: 14, left: 70, right: 70, background: PAPER, filter: "url(#nagu-torn)", boxShadow: "0 30px 70px rgba(0,0,0,.5)" }} />
      <div style={{ position: "absolute", top: 14, bottom: 14, left: 70, right: 70, background: `url(${TEX}) center/cover`, mixBlendMode: "multiply", opacity: .1, pointerEvents: "none" }} />
      <div style={{ position: "relative", padding: `${padV}px 128px` }}>{children}</div>
    </div>
  );
}

/* ---- neon street sign ---------------------------------------------------- */
function NeonSign({ children, top, accent = false }) {
  return (
    <div style={{
      position: "absolute", left: 6, top, writingMode: "vertical-rl",
      fontFamily: "var(--font-jp)", fontSize: 22, letterSpacing: ".18em", padding: "16px 9px", zIndex: 5,
      color: "#fff", background: "rgba(10,10,10,.55)", border: `2px solid ${accent ? RED : "rgba(232,24,47,.6)"}`,
      boxShadow: "0 0 14px rgba(224,24,47,.7), inset 0 0 12px rgba(224,24,47,.35)",
      textShadow: "0 0 8px rgba(255,60,80,.9)", backdropFilter: "blur(2px)",
    }}>{children}</div>
  );
}

function Feature({ icon, label, children, border = false }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 26px", borderLeft: border ? "2px solid rgba(20,20,20,.16)" : "none" }}>
      <i data-lucide={icon} style={{ width: 26, height: 26, color: INK }}></i>
      <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 17, letterSpacing: ".04em", color: RED }}>{label}</div>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.5, color: "#3a3a3a", margin: 0, maxWidth: 200 }}>{children}</p>
    </div>
  );
}

/* ========================================================================= */
/* HERO STAGE                                                                */
/* ========================================================================= */
function HeroStage() {
  return (
    <div style={{ position: "relative", width: 1440, height: 1052, flex: "none" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#0a0a0a" }}>
        <img src={SKY} alt="" style={{ position: "absolute", left: -40, top: -20, width: 360, height: 1092, objectFit: "cover", opacity: .9 }} />
        <img src={SKY} alt="" style={{ position: "absolute", right: -60, top: -20, width: 420, height: 1092, objectFit: "cover", opacity: .85, transform: "scaleX(-1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 80% at 50% 30%, rgba(10,10,10,.2), rgba(10,10,10,.85) 80%)" }} />
        <img src={SKY} alt="" style={{ position: "absolute", left: 0, right: 0, bottom: -10, width: "100%", height: 220, objectFit: "cover", objectPosition: "center 70%", filter: "grayscale(1) contrast(1.1) brightness(.7)", opacity: .55 }} />
      </div>

      <NeonSign top={86}>東京 × 漢堡</NeonSign>
      <NeonSign top={300} accent>バーガー</NeonSign>

      <div style={{ position: "absolute", right: 8, top: 360, writingMode: "vertical-rl", background: RED, color: "#fff", fontFamily: "var(--font-jp)", fontSize: 26, letterSpacing: ".2em", padding: "26px 10px", border: "2px solid #0a0a0a", boxShadow: "0 0 18px rgba(224,24,47,.6)", zIndex: 5 }}>バーガー</div>

      {/* torn paper */}
      <div style={{ position: "absolute", top: 18, left: 70, width: 1300, height: 884, background: PAPER, filter: "url(#nagu-torn)", boxShadow: "0 36px 90px rgba(0,0,0,.6)" }} />
      <div style={{ position: "absolute", top: 18, left: 70, width: 1300, height: 884, background: `url(${TEX}) center/cover`, mixBlendMode: "multiply", opacity: .12, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: 18, left: 70, width: 1300, height: 884, padding: "40px 56px", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 24, marginTop: 0, flex: 1, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <h1 style={{ margin: 0, fontFamily: "var(--font-display)", textTransform: "uppercase", lineHeight: .98, letterSpacing: ".005em" }}>
              <span style={{ display: "block", fontSize: 122, color: INK }}>Street</span>
              <span style={{ display: "block", fontSize: 122, color: RED }}>Smash</span>
              <span style={{ display: "block", fontFamily: "var(--font-jp)", fontSize: 24, color: "#4a4a4a", letterSpacing: ".22em", marginTop: 10, textTransform: "none" }}>スマッシュ</span>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 19, lineHeight: 1.5, color: "#2a2a2a", margin: "24px 0 0", fontWeight: 500, maxWidth: 440 }}>
              Jeddah's first Japo burger joint.<br />Burgers crave. Anime craze. Asian twist.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
              <Btn kind="red" href="drops.html">Follow the Drop</Btn>
              <Btn kind="outline" href="menu.html">View the Menu</Btn>
            </div>
          </div>

          {/* right: poster collage — brand type watermark + neon-city drop card + limited stamp (no people, no product shot) */}
          <div style={{ position: "relative", height: "100%", minHeight: 420 }}>
            <div aria-hidden="true" style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 300, lineHeight: .78, color: "rgba(20,20,20,.05)", textTransform: "uppercase", pointerEvents: "none", whiteSpace: "nowrap" }}>ナグ</div>
            <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%) rotate(2.5deg)", width: 432 }}>
              <div style={{ border: "3px solid #0a0a0a", boxShadow: "14px 16px 0 0 #0a0a0a", background: "#0a0a0a" }}>
                <img src={SKY} alt="Neon Jeddah skyline at night" style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
                <div style={{ background: RED, color: "#fff", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 28, lineHeight: 1 }}>NAGU<br /><span style={{ fontSize: 12, letterSpacing: ".22em" }}>Burger Drop</span></span>
                  <span style={{ fontFamily: "var(--font-jp)", fontSize: 18, opacity: .9 }}>バーガー</span>
                </div>
              </div>
              <div style={{ position: "absolute", left: -54, top: -46, width: 116, height: 116, borderRadius: "50%", background: RED, border: "3px solid #0a0a0a", transform: "rotate(-10deg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 12px 26px rgba(0,0,0,.4)", zIndex: 2 }}>
                <span style={{ fontFamily: "var(--font-jp)", fontSize: 17, letterSpacing: ".06em" }}>限定</span>
                <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 16, lineHeight: 1, marginTop: 3, textAlign: "center" }}>New<br />Drop</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 2, background: "rgba(20,20,20,.18)", margin: "8px 0 22px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          <Feature icon="flame" label="Japo Soul">Where Japanese inspiration meets bold street flavors.</Feature>
          <Feature icon="beef" label="Crafted Bold" border>Smashed, stacked, and seasoned with purpose.</Feature>
          <Feature icon="zap" label="Anime Energy" border>Inspired by anime. Fueled by hustle. Made to stand out.</Feature>
          <Feature icon="sparkles" label="Made Different" border>Not just another burger. A culture. A vibe. A statement.</Feature>
        </div>
      </div>

      {/* hero foot band — right-to-left sticker ticker */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 932, zIndex: 4 }}>
        <StickerTicker />
      </div>
    </div>
  );
}

/* ---- infinite right-to-left ticker of brand stickers --------------------- */
const STICKERS = [
  { t: "限定 Drop", tone: "red", jp: true },
  { t: "Street Smash", tone: "cream" },
  { t: "新作", tone: "ink", jp: true },
  { t: "@nagu.burgers", tone: "red" },
  { t: "Anime Energy", tone: "cream" },
  { t: "バーガー", tone: "ink", jp: true },
  { t: "Built to Sell Out", tone: "red" },
  { t: "Jeddah", tone: "cream" },
  { t: "大胆な味", tone: "ink", jp: true },
  { t: "Don't Blink", tone: "red" },
];
function StickerTicker() {
  const group = (key) => (
    <div className="nw-ticker-group" key={key} aria-hidden={key === "b" ? "true" : undefined}>
      {STICKERS.map((s, i) => (
        <span key={i} className={`nw-sticker nw-sticker--${s.tone}`}>
          <span className={s.jp ? "nw-sticker-jp" : ""}>{s.t}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="nw-ticker" role="marquee" aria-label="NAGU drop highlights">
      <div className="nw-ticker-track">{group("a")}{group("b")}</div>
    </div>
  );
}

/* ========================================================================= */
/* LINEUP                                                                    */
/* ========================================================================= */
function Lineup() {
  const heroes = MENU.items.filter((i) => i.cat === "Burgers");
  return (
    <PaperPanel>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <Kicker en="The Lineup" jp="メニュー" />
          <BigHead>Built for repeat.</BigHead>
        </div>
        <Btn kind="outline" href="menu.html">Full Menu</Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 44 }}>
        {heroes.map((it) => (
          <MenuCard key={it.id} item={it} action={<Btn kind="red" size="md" href="order.html">Add to Order</Btn>} />
        ))}
      </div>
    </PaperPanel>
  );
}

/* ========================================================================= */
/* LATEST DROP + COUNTDOWN                                                   */
/* ========================================================================= */
function Countdown() {
  const target = useRef(Date.now() + ((2 * 24 + 9) * 3600 + 41 * 60 + 12) * 1000);
  const calc = () => Math.max(0, target.current - Date.now());
  const [ms, setMs] = useState(calc());
  useEffect(() => { const i = setInterval(() => setMs(calc()), 1000); return () => clearInterval(i); }, []);
  const s = Math.floor(ms / 1000);
  const parts = [["Days", Math.floor(s / 86400)], ["Hrs", Math.floor((s % 86400) / 3600)], ["Min", Math.floor((s % 3600) / 60)], ["Sec", s % 60]];
  return (
    <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
      {parts.map(([l, v]) => (
        <div key={l} style={{ minWidth: 78, textAlign: "center", border: "2px solid rgba(255,255,255,.25)", padding: "12px 6px", background: "rgba(0,0,0,.4)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, lineHeight: 1, color: "#fff" }}>{String(v).padStart(2, "0")}</div>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: REDT, marginTop: 6 }}>{l}</div>
        </div>
      ))}
    </div>
  );
}
function LatestDrop() {
  return (
    <div style={{ position: "relative", width: 1440, padding: "92px 198px", boxSizing: "border-box" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "#0d0d0d" }} />
        <div style={{ position: "absolute", inset: 0, background: `url(${TEX}) center/cover`, mixBlendMode: "screen", opacity: .06 }} />
      </div>
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 56, alignItems: "center" }}>
        <div>
          <Kicker en="Latest Drop" jp="限定 / Limited" light />
          <BigHead light size={72}>NAGU × URBAN.</BigHead>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", marginTop: 18, maxWidth: 460 }}>
            A limited-edition coffee collector drop by NAGU and Urban Roastery. A day-and-night blend — light and bright for the morning, dark and bold for the late run. Brew without limits.
          </p>
          <Countdown />
          <div style={{ display: "flex", gap: 14, marginTop: 30 }}>
            <Btn kind="red" size="lg" href="drops.html">Set a Reminder</Btn>
            <Btn kind="outline" onLight={false} size="lg" href="drops.html">See Drops</Btn>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: -18, left: -18, zIndex: 2 }}><Tag tone="red">Limited</Tag></div>
          <div style={{ borderRadius: 5, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,.6)" }}>
            <img src="../../assets/drops/drop-1.jpeg" alt="NAGU x Urban Roastery coffee collector drop" loading="lazy" decoding="async" style={{ width: "100%", height: 420, objectFit: "cover", display: "block", borderRadius: 5 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* THE UNIVERSE / SIBLINGS                                                   */
/* ========================================================================= */
function Universe() {
  const crew = [
    { image: "../../assets/characters/nagu-char-04.jpeg", name: "NAGU", role: "The Culture Creator", jp: "ナグ", number: 1 },
    { image: "../../assets/characters/nagu-char-01.jpeg", name: "BIKU", role: "Open-Grill Jester", jp: "ビク", number: 2 },
    { image: "../../assets/characters/nagu-char-02.jpeg", name: "FIFU", role: "Street Scout", jp: "フィフ", number: 3 },
  ];
  return (
    <div style={{ position: "relative", width: 1440, padding: "92px 128px", boxSizing: "border-box", background: "#0a0a0a", overflow: "hidden" }}>
      <img src={SKY} alt="" loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .22 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,.7), rgba(10,10,10,.92))" }} />
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <Kicker en="The Universe" jp="ザ・ユニバース / Web Verse" light />
            <BigHead light>Meet the siblings.</BigHead>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.7)", marginTop: 16, maxWidth: 560 }}>
              Three sibling samurai. Streetwear-dressed, katana-carrying, sneaker-flexing. We use anime culture — we don't copy it.
            </p>
          </div>
          <Btn kind="red" href="universe.html">Enter the Web Verse</Btn>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 44 }}>
          {crew.map((c) => <CharCard key={c.name} {...c} light />)}
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* LOCATIONS                                                                 */
/* ========================================================================= */
function Locations() {
  const locs = [
    { city: "Jeddah", area: "Corniche Window", status: "Open Now", on: true },
    { city: "Riyadh", area: "Olaya · Opening Soon", status: "Coming Soon", on: false },
  ];
  return (
    <PaperPanel>
      <div style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 48, alignItems: "center" }}>
        <div>
          <Kicker en="Locations" jp="ロケーション" />
          <BigHead>Find a NAGU.</BigHead>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, color: "#3a3a3a", margin: "16px 0 26px", maxWidth: 380 }}>
            Compact footprint. Big street presence. Grab-and-go windows built for speed — and delivery from day one.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {locs.map((l) => (
              <div key={l.city} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "2px solid #141414", background: "#fff", padding: "16px 18px", boxShadow: "4px 4px 0 0 #141414" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <i data-lucide="map-pin" style={{ width: 22, height: 22, color: RED }}></i>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 22, lineHeight: 1, color: INK }}>{l.city}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#6a6a6a", marginTop: 3 }}>{l.area}</div>
                  </div>
                </div>
                <Tag tone={l.on ? "red" : "outline"}>{l.status}</Tag>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 26 }}><Btn kind="red" size="lg" href="order.html">Order Now</Btn></div>
        </div>
        <div style={{ position: "relative", border: "3px solid #141414", boxShadow: "8px 8px 0 0 #141414" }}>
          <img src={SKY} alt="Jeddah" loading="lazy" decoding="async" style={{ width: "100%", height: 380, objectFit: "cover", display: "block", filter: "saturate(1.1)" }} />
          <div style={{ position: "absolute", top: "42%", left: "38%" }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: RED, border: "3px solid #fff", boxShadow: "0 0 0 6px rgba(200,16,46,.35)" }} />
          </div>
          <div style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(10,10,10,.8)", color: "#fff", fontFamily: "var(--font-jp)", fontSize: 13, padding: "6px 10px", letterSpacing: ".1em" }}>ジェッダ · 海岸通り</div>
        </div>
      </div>
    </PaperPanel>
  );
}

/* ========================================================================= */
/* DROP-ALERT SIGNUP                                                         */
/* ========================================================================= */
function Signup() {
  return (
    <div style={{ position: "relative", width: 1440, background: RED, padding: "72px 128px", boxSizing: "border-box", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: `url(${TEX}) center/cover`, mixBlendMode: "multiply", opacity: .14 }} />
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
        <div>
          <Kicker en="Drop Alerts" jp="通知" light enColor="#fff" />
          <BigHead light size={68}>Don't miss a drop.</BigHead>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "rgba(255,255,255,.85)", marginTop: 14 }}>Email or SMS. Drops. Collabs. Chaos. Don't blink.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 0, border: "2px solid #0a0a0a", background: "#fff", boxShadow: "8px 8px 0 0 #0a0a0a", flex: "none" }}>
          <label htmlFor="nagu-drop-email" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 }}>Email address for drop alerts</label>
          <input id="nagu-drop-email" type="email" name="email" autoComplete="email" placeholder="your@email.com" style={{ border: "none", outline: "none", padding: "16px 18px", fontFamily: "var(--font-sans)", fontSize: 16, width: 300, background: "transparent", color: INK }} />
          <button type="submit" style={{ border: "none", background: INK, color: "#fff", fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 16, letterSpacing: ".05em", padding: "0 26px", cursor: "pointer" }}>Join</button>
        </form>
      </div>
    </div>
  );
}

/* Home's footer, mobile drawer and sticky Order CTA come from the shared
   chrome (window.NAGUSite.Page) — see Site() below. The old bespoke Footer
   that lived here was dead (Page renders shared.jsx's Footer, © 2026) and was
   removed to kill the duplication/date drift the audit flagged. */

/* ========================================================================= */
/* Home now uses the SHARED chrome (window.NAGUSite.Page) so its header,
   footer, mobile drawer and sticky Order CTA match every inner page. The
   fixed-1440 hero/section comps are centered inside the shared <main>.
   (Page provides the nagu-torn filter + lucide refresh, so the home no
   longer defines its own.) */
function Site() {
  const { Page } = window.NAGUSite;
  return (
    <Page active={null}>
      <div className="nw-home-fit" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <HeroStage />
        <Lineup />
        <LatestDrop />
        <Universe />
        <Locations />
        <Signup />
      </div>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("site")).render(<Site />);
