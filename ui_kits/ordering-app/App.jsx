/* global React, NAGUDesignSystem_56f253, NAGU_MENU */
const { Button, Tag, Badge, PriceTag, QtyStepper, ProductCard, Card } = window.NAGUDesignSystem_56f253;
const MENU = window.NAGU_MENU;

const RED = "var(--nagu-red)";
const INK = "var(--near-black)";
const PAPER = "var(--off-white)";

// ---- Top bar ---------------------------------------------------------------
function TopBar() {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "14px 18px", background: INK, borderBottom: "2px solid var(--near-black)",
      position: "sticky", top: 0, zIndex: 20,
    }}>
      <img src="../../assets/logos/Nagu-Logo-Secondary.png" alt="NAGU" style={{ height: 26 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 6, color: PAPER }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".04em" }}>Jeddah · Corniche</span>
      </div>
    </div>
  );
}

// ---- Hero drop -------------------------------------------------------------
function HeroDrop({ onOrder }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", background: INK, borderBottom: "2px solid var(--near-black)" }}>
      <img src="../../assets/lifestyle/skyline-night.jpeg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .55 }} />
      <div style={{ position: "relative", padding: "22px 18px 24px" }}>
        <div style={{ fontFamily: "var(--font-jp)", color: RED, fontSize: 15, letterSpacing: ".06em" }}>大胆な味 / BOLD FLAVOR</div>
        <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", color: PAPER, fontWeight: 900, lineHeight: .9, fontSize: 40, marginTop: 6 }}>
          Burgers crave.<br /><span style={{ color: RED }}>Anime craze.</span><br />Asian twist.
        </div>
        <div style={{ marginTop: 16 }}>
          <Button variant="primary" onClick={onOrder} iconRight={<span style={{fontSize:18}}>→</span>}>Start Your Order</Button>
        </div>
      </div>
    </div>
  );
}

// ---- Category tabs ---------------------------------------------------------
function Tabs({ active, onPick }) {
  return (
    <div style={{
      display: "flex", gap: 8, padding: "14px 18px", overflowX: "auto",
      position: "sticky", top: 55, zIndex: 15, background: PAPER, borderBottom: "2px solid var(--near-black)",
    }}>
      {MENU.categories.map((c) => {
        const on = c === active;
        return (
          <button key={c} onClick={() => onPick(c)} style={{
            flex: "none", fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900,
            fontSize: 15, letterSpacing: ".03em", padding: "7px 14px", cursor: "pointer",
            border: "2px solid var(--near-black)", borderRadius: "var(--radius-sm)",
            background: on ? RED : "transparent", color: on ? PAPER : INK,
            boxShadow: on ? "3px 3px 0 0 var(--near-black)" : "none",
          }}>{c}</button>
        );
      })}
    </div>
  );
}

// ---- Item detail sheet -----------------------------------------------------
function ItemSheet({ item, onClose, onAdd }) {
  const [qty, setQty] = React.useState(1);
  if (!item) return null;
  return (
    <div onClick={onClose} style={{ position: "absolute", inset: 0, zIndex: 40, background: "rgba(12,12,12,.55)", display: "flex", alignItems: "flex-end" }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: "100%", background: PAPER, borderTop: "3px solid var(--near-black)", borderTopLeftRadius: 14, borderTopRightRadius: 14,
        maxHeight: "88%", overflowY: "auto", animation: "naguSheet .26s cubic-bezier(.2,.8,.2,1)",
      }}>
        <div style={{ position: "relative", height: 220, background: INK, borderBottom: "2px solid var(--near-black)" }}>
          <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, width: 34, height: 34, border: "2px solid var(--near-black)", background: PAPER, borderRadius: "var(--radius-sm)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, cursor: "pointer" }}>✕</button>
          <div style={{ position: "absolute", bottom: 12, left: 14 }}><PriceTag amount={item.price} /></div>
        </div>
        <div style={{ padding: 18 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
            {item.tags.map((t, i) => <Tag key={i} tone={i === 0 ? "red" : "outline"}>{t}</Tag>)}
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 30, lineHeight: .95, margin: 0, color: INK }}>{item.name}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-body)", marginTop: 10 }}>{item.desc}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
            <QtyStepper value={qty} onChange={setQty} size="lg" />
            <Button variant="primary" size="lg" onClick={() => onAdd(item, qty)}>Add · SR {item.price * qty}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Menu view -------------------------------------------------------------
function MenuView({ onOpen, onOrder }) {
  const [tab, setTab] = React.useState(MENU.categories[0]);
  const items = MENU.items.filter((i) => i.cat === tab);
  return (
    <div>
      <HeroDrop onOrder={onOrder} />
      <Tabs active={tab} onPick={setTab} />
      <div style={{ padding: "18px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {items.map((it) => (
          <ProductCard key={it.id} image={it.image} name={it.name} tagline={it.tagline} price={it.price} tags={it.tags.slice(0, 1)} onClick={() => onOpen(it)} />
        ))}
      </div>
    </div>
  );
}

// ---- Cart view -------------------------------------------------------------
function CartView({ cart, onQty, onBack }) {
  const lines = Object.entries(cart).map(([id, qty]) => ({ item: MENU.items.find((i) => i.id === id), qty }));
  const total = lines.reduce((s, l) => s + l.item.price * l.qty, 0);
  return (
    <div style={{ minHeight: "100%", background: PAPER }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", background: INK, position: "sticky", top: 0, zIndex: 10 }}>
        <button onClick={onBack} style={{ width: 34, height: 34, border: "2px solid var(--near-black)", background: PAPER, borderRadius: "var(--radius-sm)", fontWeight: 900, fontSize: 18, cursor: "pointer" }}>←</button>
        <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 24, color: PAPER }}>Your Bag</span>
      </div>
      <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        {lines.length === 0 && <p style={{ color: "var(--ink-500)", fontSize: 15 }}>Bag's empty. Go grab a smash.</p>}
        {lines.map(({ item, qty }) => (
          <Card key={item.id} padding={12}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <img src={item.image} alt="" style={{ width: 64, height: 64, objectFit: "cover", border: "2px solid var(--near-black)", borderRadius: "var(--radius-sm)" }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 17, lineHeight: 1, color: INK }}>{item.name}</div>
                <div style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 4 }}>SR {item.price} each</div>
              </div>
              <QtyStepper value={qty} onChange={(n) => onQty(item.id, n)} size="sm" />
            </div>
          </Card>
        ))}
      </div>
      {lines.length > 0 && (
        <div style={{ padding: 18 }}>
          <Card tone="ink" padding={16}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 700, color: "var(--ink-400)" }}>Total</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 34, color: PAPER }}>SR {total}</span>
            </div>
            <div style={{ marginTop: 14 }}><Button variant="primary" block size="lg">Checkout →</Button></div>
          </Card>
        </div>
      )}
    </div>
  );
}

// ---- App -------------------------------------------------------------------
function App() {
  const [view, setView] = React.useState("menu");
  const [openItem, setOpenItem] = React.useState(null);
  const [cart, setCart] = React.useState({ "double-smash": 1, "loaded-fries": 1 });
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = Object.entries(cart).reduce((s, [id, q]) => s + MENU.items.find((i) => i.id === id).price * q, 0);

  const add = (item, qty) => {
    setCart((c) => ({ ...c, [item.id]: (c[item.id] || 0) + qty }));
    setOpenItem(null);
  };
  const setQty = (id, n) => setCart((c) => {
    const next = { ...c };
    if (n <= 0) delete next[id]; else next[id] = n;
    return next;
  });

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: PAPER, position: "relative", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        {view === "menu" ? <MenuView onOpen={setOpenItem} onOrder={() => {}} /> : <CartView cart={cart} onQty={setQty} onBack={() => setView("menu")} />}
      </div>
      {view === "menu" && count > 0 && (
        <div style={{ padding: 14, background: PAPER, borderTop: "2px solid var(--near-black)" }}>
          <button onClick={() => setView("cart")} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            background: RED, color: PAPER, border: "2px solid var(--near-black)", boxShadow: "var(--shadow-offset)",
            borderRadius: "var(--radius-sm)", padding: "14px 18px", cursor: "pointer",
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Badge tone="ink">{count}</Badge>
              <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: 900, fontSize: 18 }}>View Bag</span>
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22 }}>SR {total}</span>
          </button>
        </div>
      )}
      <ItemSheet item={openItem} onClose={() => setOpenItem(null)} onAdd={add} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
