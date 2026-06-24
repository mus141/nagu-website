# NAGU Ordering App — UI Kit

A high-fidelity recreation of NAGU's **takeaway-first ordering app** — the core
"every order becomes a brand moment" surface. Mobile, delivery-native, built for speed.

## Screens / flow
1. **Menu** (`MenuView`) — hero drop banner (Jeddah skyline + EN/JP shout), sticky category
   tabs (Burgers / Sides / By CHAN / Drinks), two-up `ProductCard` grid with stamped prices.
2. **Item sheet** (`ItemSheet`) — bottom sheet: hero image, flavor tags, description,
   `QtyStepper`, and an Add button that totals live.
3. **Bag** (`CartView`) — line items with inline qty steppers, an ink total block, checkout.
4. **Order bar** — fixed bottom red bar with item count `Badge` + running total.

## Composition
Built almost entirely from system components: `ProductCard`, `PriceTag`, `Tag`, `Badge`,
`QtyStepper`, `Button`, `Card`. Only the phone chrome, hero, tabs, and order bar are local.

## Files
- `index.html` — phone-framed orchestrator (also a Starting Point)
- `App.jsx` — all screens + cart state (fake, client-side)
- `menu-data.js` — canonical NAGU menu (`window.NAGU_MENU`), prices in SR

## Notes
- Prices, items, and taglines are from the brand deck (Product Heroes / Pricing Strategy slides).
- Interactions are mocked client-side — tap a product to open the sheet, add to bag, adjust qty.
