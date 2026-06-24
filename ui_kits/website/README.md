# NAGU Website — UI Kit

A high-fidelity recreation of NAGU's **drop-style landing page** — built from the brand's own
reference comp and `Nagu-Website-Sitemap.md`. The site is *not a menu — it's a hype channel*:
poster-led, character-IP forward, delivery-pushing, franchise-ready.

## The page (Home `/`) — full scrolling landing
Built from `Nagu-Website-Sitemap.md`, in a **torn-paper street collage** language over a neon-Tokyo dark stage:
1. **Hero** — torn cream panel, sitemap nav (Menu · Universe · Drops · Merch · Locations) + Order Now, huge English display headline (STREET / SMASH, red) with small JP accent (スマッシュ), dual CTAs, collage props (neon signs 東京×漢堡 / バーガー, burger hero + faint character sketch, NAGU Burger Drop window card, taped manga polaroid), feature strip, and a hero-foot band (Stay in the Loop + ticket strip with barcode + '24).
2. **The Lineup** — paper section, three hero `ProductCard`s with Add buttons.
3. **Latest Drop** — dark section, NAGU × CHAN co-brand teaser with a **live countdown** + framed limited shot.
4. **The Universe** — dark Web-Verse section, three `CharacterCard`s (Nagu / Biku / Fifu).
5. **Locations** — paper section, location cards (Jeddah open / Riyadh soon) + a pinned map block + Order Now.
6. **Drop Alerts** — red signup band (email/SMS).
7. **Footer** — full sitemap columns, socials, EN / 日本語 / العربية language toggle, legal, NAGU watermark.
8. **Sticky Order Now** — fixed floating CTA.

## Type rule
**English big, Japanese small + minimal** — display caps dominate; JP (`Nagu JP`) only ever
appears as small decorative accents and neon signage. Never crowd languages.

## Files
- `index.html` — page shell (loads Lucide + the DS bundle; also a Starting Point)
- `Site.jsx` — the full collage composition

## Notes & substitutions
- Torn paper, neon signs, barcode, and the ticket strip are CSS/SVG — no bespoke raster art.
- The "window" card and manga cutouts reuse the lifestyle + mascot assets (grayscaled to read as sketch/manga).
- Lucide's brand `instagram` glyph was removed upstream; the social line uses `at-sign` as a stand-in.
- This kit recreates the full **Home** landing; the sitemap's deeper inner pages (full Menu, Universe, Drops, Merch, Rewards, Franchise, About) are documented but not built out as separate screens.
