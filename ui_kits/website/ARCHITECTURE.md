# NAGU Website — Architecture & Conventions

How the multi-page marketing site is structured. Read this before adding a page.

## Where things live
```
ui_kits/website/
├── index.html / Site.jsx     APPROVED Home landing (fixed 1440px — do not alter without sign-off)
├── site.css                  shared LAYOUT + responsive system (media queries, grid, header/footer, drawer)
├── shared.jsx                shared CHROME + brand helpers  → window.NAGUSite
├── _template.html / .jsx     copy these to start a new page
├── ARCHITECTURE.md           this file
└── <page>.html / <Page>.jsx  one pair per inner page (menu, universe, drops, …)
```
Design tokens, fonts, components and assets are shared from the project root
(`../../styles.css`, `../../_ds_bundle.js`, `../../assets/…`) and the canonical menu from
`../ordering-app/menu-data.js` (`window.NAGU_MENU`).

## Adding a page (recipe)
1. Copy `_template.html` → `menu.html` and `_template.jsx` → `Menu.jsx`.
2. In the html: set `<title>`, and point the last script at `./Menu.jsx`.
3. In the jsx: `const { Page, Section, ... } = window.NAGUSite;` then
   `<Page active="menu"> …sections… </Page>` and render into `#page`.
4. Build content with `Section` + the `nw-*` responsive classes + DS components.
5. Verify in the preview at desktop + mobile widths (and test the mobile drawer).

## Script load order (every page html)
`styles.css` → `site.css` → React → ReactDOM → Babel standalone → Lucide →
`_ds_bundle.js` → `menu-data.js` → `shared.jsx` (text/babel) → page jsx (text/babel).
`shared.jsx` must load before the page jsx (it defines `window.NAGUSite`).

## window.NAGUSite (shared API)
- **Layout:** `Page({active, children})` — chrome wrapper (header + mobile drawer + footer + sticky Order Now). `Section({bg, padY, children})` — full-bleed band (`bg`: `paper | ink | poster | red | none` or any CSS color) with a centered `.nw-container`.
- **Brand helpers:** `Btn`, `Kicker`, `BigHead`, `PaperPanel`, `NeonSign`, `Icon`, `TornDefs`.
- **Data/constants:** `nav`, `RED`, `REDB`, `INK`, `PAPER`, `TEX`, `SKY`, `LOGO`.

## Responsive system (site.css)
- Breakpoints: desktop > 960px · tablet 641–960 · mobile ≤ 640 (nav collapses to a drawer at ≤ 860).
- Container: `.nw-container` (max 1200px, fluid gutter). Section: `.nw-section`.
- Headings clamp: `.nw-h1 / .nw-h2 / .nw-h3`. Grids: `.nw-grid` + `.nw-grid-2/3/4` (auto-collapse). Split row: `.nw-split`. Visibility: `.nw-only-desktop / .nw-only-mobile`.
- Use CSS classes for anything that must change at a breakpoint (inline styles can't hold media queries); brand visuals can stay inline.

## Conventions / gotchas (learned)
- **Icons:** use `NAGUSite.Icon` (React-owned inline SVG), NOT `<i data-lucide>` inside interactive React — `lucide.createIcons()` mutates the DOM and breaks React reconciliation/handlers on re-render.
- **No `backdrop-filter`/`transform`/`filter` on an ancestor of a `position:fixed` overlay** — it becomes the containing block and traps the overlay. The mobile drawer is therefore a sibling of (not inside) the header.
- **Brand non-negotiables** (see ../../CLAUDE.md): NAGU red, hard black keyline + offset shadow, square corners, display caps + sentence-case body, English big / Japanese small, no emoji.
- Home (`Site.jsx`) is the approved comp and stays fixed-1440 until its dedicated responsive pass.
