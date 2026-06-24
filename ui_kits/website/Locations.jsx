/* global React, ReactDOM, NAGUSite, NAGUDesignSystem_56f253 */
/* LOCATIONS page — where to find NAGU. Grounded on the two real spots from
   the approved Home (Jeddah open, Riyadh coming soon); hours/services are
   placeholders pending real store data. Responsive via nw-* classes. */
const { Page, Section, Kicker, BigHead, Btn, Icon, RED, INK, PAPER } = window.NAGUSite;
const { Tag } = window.NAGUDesignSystem_56f253;

const SKY = "../../assets/lifestyle/skyline-night.jpeg";

const LOCS = [
  {
    city: "Jeddah", jp: "ジェッダ", area: "Corniche Window",
    address: "Corniche Rd, Al Shati District, Jeddah",
    hours: "Daily · 12:00 PM – 2:00 AM",
    services: ["Takeaway", "Delivery", "Grab & Go"],
    status: "Open Now", on: true,
  },
  {
    city: "Riyadh", jp: "リヤド", area: "Olaya",
    address: "Olaya St, Al Olaya District, Riyadh",
    hours: "Opening 2026",
    services: ["Takeaway", "Delivery"],
    status: "Coming Soon", on: false,
  },
];

const DELIVERY = ["HungerStation", "Jahez", "ToYou", "Keeta"];

function LocationCard({ l }) {
  return (
    <div style={{ background: "#fff", border: "2px solid #141414", boxShadow: "6px 6px 0 0 #141414", padding: 22, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: RED }}><Icon name="map-pin" size={24} /></span>
          <div>
            <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 26, lineHeight: 1, color: INK }}>{l.city}</div>
            <div style={{ fontFamily: "var(--font-jp)", fontSize: 13, color: "#8a8a8a", marginTop: 4, letterSpacing: ".08em" }}>{l.jp} · {l.area}</div>
          </div>
        </div>
        <Tag tone={l.on ? "red" : "outline"}>{l.status}</Tag>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 18, fontFamily: "var(--font-sans)", fontSize: 14, color: "#3a3a3a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: INK, flex: "0 0 auto" }}><Icon name="navigation" size={16} /></span>{l.address}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: INK, flex: "0 0 auto" }}><Icon name="clock" size={16} /></span>{l.hours}
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
        {l.services.map((s) => <Tag key={s} tone="outline">{s}</Tag>)}
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: "auto", paddingTop: 20, flexWrap: "wrap" }}>
        {l.on
          ? <><Btn kind="red" size="md" href="order.html">Order</Btn><Btn kind="outline" size="md" href="#">Get Directions</Btn></>
          : <Btn kind="outline" size="md" href="#">Notify Me</Btn>}
      </div>
    </div>
  );
}

function LocationsPage() {
  return (
    <Page active="locations">
      {/* ---- hero ---- */}
      <Section bg="poster" className="nw-section--hero" style={{ overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", right: -20, top: -30, fontFamily: "var(--font-jp)", fontSize: "min(200px,28vw)", color: "rgba(255,255,255,.04)", lineHeight: .8, pointerEvents: "none" }}>店舗</div>
        <Kicker en="Locations" jp="ロケーション" light />
        <h1 className="nw-h1" style={{ color: "#fff", marginTop: 14 }}>
          Find a<br /><span style={{ color: "var(--nw-red)" }}>NAGU.</span>
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", maxWidth: 560, marginTop: 18 }}>
          Compact footprint, big street presence. Grab-and-go windows built for speed, with delivery from day one.
        </p>
      </Section>

      {/* ---- location cards ---- */}
      <Section bg="paper">
        <Kicker en="The Spots" jp="店舗一覧" />
        <BigHead>Where we're at.</BigHead>
        <div className="nw-grid nw-grid-2" style={{ marginTop: 32 }}>
          {LOCS.map((l) => <LocationCard key={l.city} l={l} />)}
        </div>
      </Section>

      {/* ---- map band ---- */}
      <Section bg="ink">
        <div className="nw-split">
          <div>
            <Kicker en="On the Map" jp="地図" light />
            <BigHead light>Built for the corner.</BigHead>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)", marginTop: 16, maxWidth: 520 }}>
              NAGU drops where the street already is: high-traffic windows, late hours, fast pickup. More cities loading.
            </p>
            <div style={{ marginTop: 22 }}><Btn kind="red" size="lg" href="franchise.html">Bring NAGU to Your City</Btn></div>
          </div>
          <div style={{ position: "relative", border: "3px solid #000", boxShadow: "8px 8px 0 0 #000" }}>
            <img loading="lazy" decoding="async" src={SKY} alt="Jeddah" style={{ width: "100%", height: "clamp(260px,38vw,380px)", objectFit: "cover", display: "block", filter: "saturate(1.1)" }} />
            <div style={{ position: "absolute", top: "42%", left: "38%" }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: RED, border: "3px solid #fff", boxShadow: "0 0 0 6px rgba(200,16,46,.35)" }} />
            </div>
            <div style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(10,10,10,.8)", color: "#fff", fontFamily: "var(--font-jp)", fontSize: 13, padding: "6px 10px", letterSpacing: ".1em" }}>ジェッダ · 海岸通り</div>
          </div>
        </div>
      </Section>

      {/* ---- delivery partners ---- */}
      <Section bg="paper" style={{ textAlign: "center" }}>
        <Kicker en="We Deliver" jp="デリバリー" />
        <BigHead>Or we come to you.</BigHead>
        <div className="nw-grid nw-grid-4" style={{ marginTop: 30 }}>
          {DELIVERY.map((d) => (
            <div key={d} style={{ background: "#fff", border: "2px solid #141414", boxShadow: "4px 4px 0 0 #141414", padding: "24px 16px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 90 }}>
              <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 19, color: INK }}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 30 }}><Btn kind="red" size="lg" href="order.html">Order for Delivery</Btn></div>
      </Section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("page")).render(<LocationsPage />);
