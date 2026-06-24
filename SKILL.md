---
name: nagu-design
description: Use this skill to generate well-branded interfaces and assets for NAGU (Japo Burgers) — a culture-led smash burger + Asian fried chicken brand from Jeddah — for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# NAGU — Japo Burgers · Design Skill

**The Hypebeast Drop of Fast Food.** Anime attitude, street-pop identity, takeaway-first.
*Burgers crave. Anime craze. Asian twist.*

Read `README.md` first — it carries the full brand world, content fundamentals (voice),
visual foundations, and iconography. Then explore the other files.

## What's here
- `styles.css` — global entry point (link this one file). `@import`s all tokens + fonts.
- `tokens/` — colors, typography, spacing, effects (CSS custom properties).
- `assets/` — logos, brand fonts, paint strokes + grunge texture, mascot IP, product shots, lifestyle art.
- `guidelines/` — foundation specimen cards (Type / Colors / Spacing / Brand).
- `components/` — React primitives (Button, Tag, Badge, PriceTag, Card, ProductCard,
  CharacterCard, Input, QtyStepper, SectionHeading).
- `ui_kits/` — full-screen recreations: `ordering-app/` (mobile takeaway) and `website/` (drop landing).

## How to use
- **Visual artifacts** (slides, mocks, throwaway prototypes): copy the assets you need out of
  `assets/`, link `styles.css`, and build static HTML. Use the real logos, fonts, mascots,
  and product shots — never redraw them or generate new ones.
- **Production code**: copy assets and read the rules here to design fluently in the brand.

## Non-negotiables (the brand quick-card)
- **Color:** NAGU Red `#B70D2A`, Near Black `#1E1E1E`, Off-White `#F2F2F2`, Cream `#DCD2C8`. High contrast always.
- **Type:** Nagu Display (distressed caps — headlines), Nagu Sans (body/UI), Nagu JP (decorative EN/JP accents only).
- **Signature device:** hard black keyline + hard, no-blur offset block shadow. Square corners.
- **Voice:** short, stacked, three-beat staccato lines. ALL CAPS shouts, sentence-case body. No emoji. EN primary + subtle JP accent.
- **Motion:** snappy (120–200ms), press "stamps down". No floats, no bounce.
- **Never:** childish cartoon overload, cheap/low-status, crowded 3-language layouts, corporate, generic, soft SaaS rounding, bluish-purple gradients.

If invoked with no other guidance, ask what the user wants to build, ask a few sharp
questions, then act as an expert NAGU designer — outputting HTML artifacts *or* production code.
