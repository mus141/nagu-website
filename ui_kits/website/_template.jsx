/* global React, ReactDOM, NAGUSite */
/* Page template — copy this + _template.html to start a new page.
   Replace `active` with the nav key and fill Sections with content. */
const { Page, Section, Kicker, BigHead, Btn } = window.NAGUSite;

function TemplatePage() {
  return (
    <Page active={null}>
      {/* dark poster intro */}
      <Section bg="poster">
        <Kicker en="Page Template" jp="テンプレート" light />
        <h1 className="nw-h1" style={{ color: "#fff", marginTop: 14 }}>
          Street<span style={{ color: "var(--nw-red)" }}>ready.</span>
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,.72)", maxWidth: 560, marginTop: 18 }}>
          This is the shared chrome — sticky header with mobile drawer, footer, and floating Order Now — wrapping any page content. Copy <code>_template.html</code> + <code>_template.jsx</code> to begin.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
          <Btn kind="red" size="lg">Primary CTA</Btn>
          <Btn kind="outline" onLight={false} size="lg">Secondary</Btn>
        </div>
      </Section>

      {/* paper content + responsive grid */}
      <Section bg="paper">
        <Kicker en="Section" jp="セクション" />
        <BigHead>Built for repeat.</BigHead>
        <div className="nw-grid nw-grid-3" style={{ marginTop: 36 }}>
          {[1, 2, 3].map((n) => (
            <div key={n} style={{ background: "#fff", border: "2px solid #141414", boxShadow: "6px 6px 0 0 #141414", padding: 24, minHeight: 180 }}>
              <div className="nw-h3" style={{ color: "#141414" }}>Card {n}</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.55, color: "#3a3a3a", marginTop: 10 }}>Hard keyline + offset shadow. Square corners. Street poster, not soft SaaS.</p>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("page")).render(<TemplatePage />);
