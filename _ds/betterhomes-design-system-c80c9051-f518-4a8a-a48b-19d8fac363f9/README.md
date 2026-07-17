# Betterhomes Design System

> **Trust Better. Get Better.**
> Homegrown since 1986 — bhomes.com

This is a design-time reference for the **Betterhomes** brand: a Dubai-based residential real-estate company founded in 1986 by Linda Mahoney from a small desk in the corner of her dining room. Betterhomes is one of the longest-running real-estate brokers in the UAE; the brand voice leans heavily on that homegrown heritage paired with a modern, considered visual identity. The 2024–2025 "branding refresh" captured in the source Figma file is the primary reference for this system.

Use this system when designing **anything** for Betterhomes — pitch decks, social posts, agent collateral, internal product UI, marketing landing pages. Everything here is rooted in the assets the brand team actually ships.

---

## Sources

This system was built from the following sources. Re-attach them if you need to extend it:

| Source | What | Where |
|---|---|---|
| `Betterhomes Design System.fig` | Primary source. 15 pages, 282 frames covering brand refresh, seasonal logo, type, colors, icons, stylescapes, stats, footer, components. | Figma file, mounted virtually |
| `uploads/IvyMode-*.ttf` | Display serif (Thin → Bold + italics) | Project uploads |
| `uploads/fonnts.com-IvyStyle_Sans_*.otf` | Secondary sans (Light/SemiBold/Bold) | Project uploads |
| `uploads/betterhomes - white.png`, `uploads/betterhomes - Slate blue.png` | Mentioned as uploaded by the user but **not present** in the project filesystem at build time — wordmark renders via the IvyMode font instead. Re-attach if needed. | — (missing) |

There is no codebase attached. Production website + product UI was not provided; the UI kit here recreates the brand surfaces (decks, agent stamps, social cards, listing card) the Figma defines — not bhomes.com itself. **If you have access to a code repo for bhomes.com or the internal agent tools, attach it and I can extend the UI kit to match.**

---

## Index — what's in this folder

```
.
├── README.md                  ← this file
├── SKILL.md                   ← skill-pack manifest
├── colors_and_type.css        ← CSS variables for color + type tokens
├── fonts/                     ← TTF/OTF webfonts (IvyMode + IvyStyle Sans)
├── assets/
│   ├── logos/                 ← bh-monogram.svg, bh-masterbrand-* logos
│   └── seals/                 ← stamp icon parts (sold/leased, hot-properties …)
├── preview/                   ← design-system cards (Type, Colors, Spacing, Components, Brand)
├── ui_kits/
│   └── betterhomes/           ← Recreations of brand surfaces (deck pages, listing card, seals)
│       ├── index.html
│       ├── components.jsx
│       └── README.md
└── slides/                    ← (none — no slide template was attached)
```

> **Tip for the agent reading this skill:** start with the design-system cards (`preview/*.html`) for a quick visual tour, then read `ui_kits/betterhomes/components.jsx` for the real component code. `colors_and_type.css` is the single source of truth for tokens.

---

## CONTENT FUNDAMENTALS

The Betterhomes voice is **warm, grounded, and confident** — built around a long heritage. It is **not** corporate-stiff, but it is **not** chummy or jokey either. It speaks like a knowledgeable family business that has been doing this for forty years and doesn't need to shout.

### Voice & tone
- **Heritage-forward.** Lean on the founding story. Examples used in the Figma: _"It all began in Linda's home, from a small desk in the corner of her dining room, to be precise."_ The phrase **"Homegrown since 1986"** is the standard footer signature.
- **Confidence, not bravado.** The tagline is **"Trust Better. Get Better."** — short, declarative, no exclamation marks.
- **Plain, not breezy.** Avoid startup-blog tics ("Hey there!", "Let's dive in"). Avoid real-estate clichés ("dream home", "luxury living"). Say what is true.
- **Second-person for the customer, first-person plural for the company.** "We've sold over X homes in Dubai Marina. Tell us what you're looking for and we'll narrow it down for you."

### Casing
- **All lowercase** for the wordmark itself: `betterhomes` (one word, lowercase). Never capitalize "Betterhomes" inside the logo lockup.
- In body copy, **"Betterhomes"** is written as a proper noun, one word, capital B. Not "BetterHomes" or "Better Homes."
- Headlines: **sentence case**, not title case. Example from decks: _"Presentation Header"_, _"Title Here"_.
- Calls to action: sentence case, no period. _"View property"_, _"Book a viewing"_, _"Talk to an agent"_.

### Punctuation & numbers
- **Em dashes** for asides — they're a recurring rhythm in long-form copy.
- **No exclamation marks** in body copy. They appear only in social-media variants.
- **AED** is the canonical currency code; the **UAE Dirham symbol** (☐) is used in price displays alongside the figure (e.g. `د.إ 2,400,000` or `AED 2.4M`). The file ships the Dirham symbol as an asset (`/Branding-refresh/UAE_Dirham_Symbol-1-1`).
- Prices use **commas as thousands separator**; **"M" for million**, **"K" for thousand** is acceptable in tight layouts (listing cards, summaries).

### Emoji & expressive characters
- **No emoji** in primary product or marketing surfaces. The brand voice is too grounded for them; they appear only in informal social captions.
- **No "✨" / "🚀" / decorative emoji** in UI buttons or feature lists. Use Phosphor icons instead (see ICONOGRAPHY).
- The **curly opening quote `"`** (set in IvyMode) is used as a graphic device in review/quote seals — it's a visual motif, not literal punctuation.

### Sample copy
> **Hero, sales deck:**
> "Trust Better. Get Better."
> Homegrown since 1986. We know Dubai because we helped build it.

> **Property listing description:**
> Three-bedroom apartment on the 24th floor of Marina Gate Tower 2. South-facing balcony, panoramic views over the marina, and a five-minute walk to JBR. Available furnished or unfurnished.

> **Agent intro:**
> Priya leads our Palm Jumeirah team. Eight years at Betterhomes, 300+ closed deals, and yes — she'll tell you when a property isn't right for you.

---

## VISUAL FOUNDATIONS

### Colors
The palette is split into **primary** (the hero brand colors), **warm neutrals** (the heritage layer), and **accents** (the tertiary palette, used sparingly).

| Group | Token | Hex | Use |
|---|---|---|---|
| Primary | `--bh-slate-blue` | `#1F343F` | The brand. Hero dark. Pantone 7546c. |
| Primary | `--bh-white` | `#FFFFFF` | Hero light. Talks about Betterhomes as a whole. |
| Primary | `--bh-denim-blue` | `#2C537A` | Supporting blue. Editorial weight. Pantone 2140c. |
| Primary | `--bh-sand` | `#D9B9A0` | Warm partner to slate. Heritage feel. Pantone 7590c. |
| Accent | `--bh-powder-blue` | `#7BA0B2` | Pantone 2205c. Secondary accent. |
| Accent | `--bh-mist` | `#EDE8E4` | Pantone 400c (35% tint). Neutral warm background. |
| Accent | `--bh-salmon` | `#FF787A` | **Online CTA color only.** Not for print. |

**Rule of thumb:** Slate Blue and White do 80% of the work. Mist and Sand for warmth and surface variation. Powder Blue for editorial accent. Salmon Pink is reserved — it is the **online CTA color only** and should never appear in print collateral or as decoration.

> **The brand only sanctions these four accents.** Older Figma frames may still reference green / aero / amber from a deprecated palette — do not reach for them.

### Type
- **Display: IvyMode** (serif, foundry: DSType). Lowercase, generous letter-spacing, **Regular (400)** is the workhorse weight for headers — never Bold. The serif itself is the personality; weight doesn't need to add it. Light (300) is reserved for very-large display moments where you want maximum elegance.
- **Subheads + body: IvyEpic** (serif, the high-contrast didone-ish DSType sibling). Subheaders and editorial body copy run in IvyEpic — it gives the brand a single-typeface feel. **IvyEpic is self-hosted** from `fonts/` (Light 300, Regular 400, SemiBold 600) and exposed via the CSS variable `--font-epic`.
- **UI sans: Poppins** (sans-serif, geometric). Reserved for **UI labels, buttons, badges, navigation, and form chrome** — anywhere that demands the legibility of a sans. Body prose is no longer Poppins.
- **Secondary sans: IvyStyle Sans** (Light/SemiBold/Bold) is available for editorial layouts where Poppins feels too geometric.
- Headlines run at **Light (300) IvyMode** in the Figma — never Bold. The serif itself is the personality; weight doesn't need to add it.

### Spacing & grid
- **8pt grid.** Figma cards use radii of **32px** and **48px** on hero blocks, **8px** on imagery, full pill / circle on seals.
- Slide deck canvas is **1920 × 1080**, **64px gutters** all sides. Inner content cards radius **48px**.
- Card padding scales: 24 / 32 / 40 / 64 — pick the bucket, don't invent in-between values.

### Backgrounds & imagery
- **Full-bleed photography** behind a **radial dark gradient** (centered, transparent to `var(--bh-slate-blue)`) is the brand's signature deck cover. The gradient ensures any photo reads as moody / nighttime no matter the source.
- **Cards-on-photo** use a top-to-bottom linear gradient from transparent to `var(--bh-slate-blue)` so the bottom of the card is always legible.
- Photography vibe: **architectural, warm, golden-hour or twilight, Dubai-specific**. Marina, Palm, Downtown skylines. People photography is candid (agent + client), warmly lit, never stiff stock.
- No hand-drawn illustrations. No abstract geometric shapes as background. The brand uses photography and typography — not pattern.
- **No repeating textures** as background. White/Bone/Slate Blue solids only.

### Borders, dividers, hairlines
- Default hairline: **1px `rgba(30,51,64,0.12)`** on light, **1px `rgba(255,255,255,0.2)`** on dark.
- Section dividers on deck covers: **4px `rgba(255,255,255,0.5)`** horizontal rule, with metadata (left: tagline, right: URL) below it.
- No double borders. No dashed borders except as a designer affordance (Figma's component-cards use dashed borders to mark editable regions — strip them in production).

### Corner radii system
- `--radius-md: 8px` — imagery, listing card images.
- `--radius-2xl: 32px` — primary cards.
- `--radius-3xl: 48px` — hero content cards inside slides.
- `--radius-pill: 999px` — buttons, chips, seals (seals are perfect circles, 503×503 in source).

### Shadows / elevation
The brand is **restrained**. Shadows are soft and short — never dramatic drop shadows.
- `--shadow-sm`: card hover states.
- `--shadow-md`: modals, focused cards.
- `--shadow-lg`: overlays, popovers.
- No `box-shadow` on body text. No "neumorphic" inner shadows. No glow effects.

### Animation
- **Fade + minimal translate.** 250–350ms, easing `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out quart) is a safe default. No bounces, no springs, no parallax.
- Hover: **opacity 0.85** on photography, **background-color shift to a 10% lighter slate** on filled buttons, **underline appear** on text links.
- Press: **scale(0.98)** + **opacity 0.9** for buttons. No color shift on press.
- Page transitions: a 200ms cross-fade is enough; never slide.

### Transparency & blur
- **`rgba(0,0,0,0.4)` overlays** on top of photography for legibility. Never plain `opacity: 0.5` on the image itself.
- **Backdrop blur** is acceptable only on sticky navigation over photography. Otherwise, use solid backgrounds.

### Layout rules
- Decks: **logo top-left at 64px from edge** at `109 × 16px` rendered size on a 1920×1080 canvas. Page footer divider + metadata anchored bottom of the safe area.
- Always honor a **64px outer safe area** on slide layouts. Never paint to the edge except for full-bleed photography.
- Long-form pages: max content width ~1200px on a 1440 viewport; ~720px for prose columns.

### Seals & stamps (a distinctive brand motif)
The Figma defines a system of **circular slate-blue stamps** used as section markers in decks and social posts. Categories from the source: **Sold/Leased**, **Review**, **Hot Properties**, **Training**, **Superstar**, **Culture**, **PR**, **Blogs**. Each is a 503px circle, slate-blue fill, with a single warm-sand icon. Use these to label content sections — they're the brand's equivalent of a chapter heading.

---

## ICONOGRAPHY

### Icon system: Phosphor Icons
The Figma file uses **Phosphor Icons** as its UI icon set — the `/Icons/UI-icons/` directory contains ~700 components matching the Phosphor sprite (you can find `PhosphorLogo` in there). For production, **load from the Phosphor CDN** rather than re-rasterizing:

```html
<!-- Regular weight is the default in the Figma. -->
<script src="https://unpkg.com/@phosphor-icons/web"></script>
<i class="ph ph-house"></i>
<i class="ph ph-bed"></i>
<i class="ph ph-map-pin"></i>
```

Available weights in Phosphor: `thin`, `light`, `regular`, `bold`, `fill`, `duotone`. **The Figma uses `regular`**; pair `bold` only for emphasis (active nav item, primary CTA-adjacent icons).

Stroke / fill rules:
- Outline (regular) for navigation, listing meta, status chips.
- Fill for the icon inside a **dark-on-dark seal** (the sand-on-slate stamps).
- Never mix weights in the same icon row.

### Property-amenities iconography
For property amenities (Bed / Bath / Cube/SQFT / MapPin / CalendarBlank / View), use the Phosphor equivalents:
- Bed → `ph-bed`
- Bath → `ph-bathtub`
- Area → `ph-cube` (or `ph-resize` if a more "measure" reading is wanted)
- Location → `ph-map-pin`
- Date built → `ph-calendar-blank`
- Parking → `ph-car`
- View / scenic → `ph-binoculars` or `ph-mountains`

### Social icons
The Figma's `/Icons/Social-icons` directory ships a hundred-plus white-on-transparent SVGs for social platforms. For production these can be substituted with **Phosphor's brand icons** (which are kept up to date for changing logos) — e.g. `ph-instagram-logo`, `ph-whatsapp-logo`, `ph-linkedin-logo`, `ph-tiktok-logo`.

### Logos & marks
| Asset | File | Notes |
|---|---|---|
| BH monogram (slate blue) | `assets/logos/bh-monogram.svg` | The standalone "b" mark. Use as favicon, profile avatar, small lockups. `currentColor` — paint via CSS. |
| BH masterbrand wordmark | rendered via IvyMode font | The full **betterhomes** wordmark is rendered with the IvyMode serif at weight 300, lowercase, tight tracking. See `ui_kits/betterhomes/components.jsx` → `<Wordmark />`. |
| Tagline | text in IvyMode/IvyEpic 40px | "Trust Better. Get Better." appears as a typeset tagline below the masterbrand lockup in formal applications. |
| Seasonal/seasonal-logo variants | (not extracted) | The Figma has Halloween, Christmas, National Day, Barkfest variants — re-extract from `/Seasonal-Logo/` if needed. |

### Emoji / Unicode
- **Emoji are not used** in any of the Figma surfaces. Don't introduce them.
- **The opening curly quote `"`** set in IvyMode is the only "Unicode character used as graphic device" in the system — see the Review seal.
- The **UAE Dirham symbol** is sometimes used as a glyph (`د.إ`) — pair it with an ordinary digit string, not in IvyMode (it's a writing system, not a display device).

---

## How to use this skill

1. Read `colors_and_type.css` and link it from any HTML you author.
2. Look at `preview/` cards to internalize the system at a glance.
3. Look at `ui_kits/betterhomes/components.jsx` for the actual React components.
4. Copy any image, SVG, or font asset out of this folder into the project you're working on — don't reference across project roots in production HTML.
5. When in doubt: **Slate Blue + Bone + IvyMode**. Add Poppins for paragraphs. Stop there.

---

## Caveats

- The user-uploaded **logo PNGs are not in the project filesystem** at build time. The wordmark is reproduced typographically with IvyMode (the source font) which is the cleanest fallback — but if the bitmaps reappear, swap them in for production export.
- **IvyEpic** (the foundry sibling of IvyMode used at the tagline lockup) is now self-hosted in `fonts/` (Light/Regular/SemiBold) and wired to `--font-epic`.
- **No bhomes.com codebase** was attached. The UI kit recreates the **brand surfaces** the Figma actually defines (decks, listing cards, seals, agent stamps) and not the live product site/app. If you need a website kit, attach the repo and I'll extend it.
- The seal SVGs in the Figma decompose to many small vector pieces; only a couple are extracted as `assets/seals/*.svg`. The full seals are reconstructed in `components.jsx` using CSS + the Phosphor icon set for the inner glyph.
