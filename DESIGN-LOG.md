# stevenray.com 2026 — Design Log

## Current State (Feb 7, 2026)

The site has been restyled from a "Neon Punk" dark theme to a "Warm Editorial" light theme. It's in a launchable state but still being refined. The overall direction is locked in — details are what's left to dial.

---

## Design Evolution

### V1: Animated Dark (archived)
- **Location:** `archive/v2-animated-dark/`
- Dark navy/emerald palette, glass-morphism cards, dot grid canvas background (JS-animated), fade-in on scroll
- Too ornate for a personal site

### V2: Neon Punk (previous, in git history)
- Dark black `#0a0a0a` background
- Neon lime/cyan/pink palette with gradient text on name
- Grain texture overlay (SVG noise at 15% opacity)
- Glow pulse animation on name (3s infinite)
- Neon text-shadows on hover states
- Space Grotesk + Inter fonts
- **Problem:** The neon aesthetic undercut Steven's positioning as a design executive. It read "creative developer portfolio" instead of "design leader." Too many competing color accents. The constant animation felt gimmicky.

### V3: Warm Editorial (current)
- Light warm cream `#f7f5f2` background
- Near-black `#1a1a1a` text
- Single warm bronze accent `#8b7355` (hover states only)
- Playfair Display (serif) + Inter (sans-serif) — two fonts only
- No animations, no grain, no glow, no gradients
- Inspired by two reference images: Authentik (clean B&W editorial) and a warm cream minimalist layout

---

## Decisions Made

### Typography
| Decision | Why |
|----------|-----|
| **Playfair Display for headlines** | Warm, editorial serif. Confident without being flashy. Used on name, page titles, article titles, writing list titles. |
| **Inter for everything else** | Clean humanist sans-serif. Handles body text, labels, buttons, company names, roles, dates. Loaded at weights 300-600. |
| **Dropped Space Grotesk** | Was the third font. Once Playfair took the display role, Space Grotesk and Inter were doing similar jobs. Two fonts is cleaner — the serif/sans contrast does all the work. Space Grotesk's geometric personality didn't vibe with Playfair. |
| **Name in mixed case** | "Steven Ray" reads more editorial than "STEVEN RAY". Dropped `text-transform: uppercase` from `.name`. |
| **Reduced name size** | From `clamp(4rem, 15vw, 8rem)` (~64-128px) to `clamp(2.5rem, 6vw, 4rem)` (~40-64px). Steven specifically said the large header was what he liked least. Now reads as a confident masthead, not a billboard. |

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#f7f5f2` | Warm cream background |
| `--color-bg-elevated` | `#efece8` | Hover backgrounds on credentials |
| `--color-text` | `#1a1a1a` | Primary text, name |
| `--color-text-muted` | `#8a8580` | Subtitles, labels, roles, dates, button fills |
| `--color-accent` | `#8b7355` | Warm bronze — hover states only (links, company names, writing titles) |

### Layout & Components
| Decision | Why |
|----------|-----|
| **Small decorative rule after subtitle** | 48px, 2px tall, black. Inspired by the second reference image. Editorial section divider between header and content. Added via `.title::after` pseudo-element. |
| **Bio left border: 2px solid black** | Was 3px neon pink. Now quiet and structural. |
| **Connect buttons: filled warm gray** | Was 2px solid black outline. Steven didn't like the square outlines. Now filled `#8a8580` (matches Now/Previously heading color), cream text, 4px radius, no border. Hover darkens to black. |
| **Button gap: 0.75rem** | Tightened from 3rem. |
| **Credential sections untouched** | Steven said "the part I like the best is the Now and Previously sections. Super clean." Left those exactly as they were. |
| **All borders use `rgba(0, 0, 0, 0.08)`** | Consistent, subtle warm borders replacing the old `rgba(255, 255, 255, 0.1)` dark-theme borders. |

### What Was Removed
- Grain texture overlay (`body::before` with SVG noise)
- Neon top border gradient (`body::after`)
- `@keyframes glowPulse` animation
- All neon color variables (`--neon-pink`, `--neon-cyan`, `--neon-lime`, `--neon-purple`)
- Gradient text on name (`background: linear-gradient(...)`, `-webkit-background-clip: text`)
- Text-shadow glow effects on all hover states
- Box-shadow glow on buttons
- `::selection` with neon pink (now black/cream)

---

## Files Changed

| File | Changes |
|------|---------|
| `styles.css` | Complete restyle — new palette, two fonts, removed all neon/animation effects |
| `index.html` | Updated Google Fonts link (Playfair Display + Inter, dropped Space Grotesk) |
| `writings/index.html` | Updated Google Fonts link |
| `writings/team-memory.html` | Updated Google Fonts link + inline styles (neon-cyan h2 → text color, neon-lime strong → accent, dark borders → light borders) |
| `writings/context-graphing.html` | Updated Google Fonts link + inline styles (same pattern + coming-soon border) |
| `writings/cross-llm-shared-memory.html` | Updated Google Fonts link + inline styles (same pattern + coming-soon border) |

---

## What Still Needs Work

### Font Exploration
Steven wants to keep exploring serif options. Playfair Display is working but may not be the final choice. Suggested resources:
- **Typewolf** (typewolf.com) — curated, shows fonts in real-world context
- **Google Fonts** — free, easy to swap since already using it
- **Font Share** (fontshare.com) — free, high-quality from Indian Type Foundry
- **Klim Type Foundry** (klim.co.nz) — premium editorial faces (Tiempos, Untitled Serif)
- **Fonts In Use** (fontsinuse.com) — see fonts in actual design work

### Writings Link Placement
Currently buried in the footer. If writings are a real content pillar, they deserve more prominence — possibly in the header area or as a visible nav element.

### Overall Polish
Steven said "it's getting there" and "let's launch this for now until we can get it nailed down." The direction is right but refinement continues. Areas to revisit:
- Connect section heading ("Connect") — is it needed? Could just be the buttons.
- Mobile responsive behavior at 600px breakpoint with the new smaller name
- Whether the decorative rule after the subtitle is earning its keep
- Article page inline styles could potentially be moved to the main stylesheet for consistency (currently each article has a "go wild, each writing is its own canvas" approach)

### Reference Images
Two reference images Steven provided are on his Desktop:
- `/Users/concordsteve/Desktop/2c87cae12edd8c3df042cbb87fcc6ce7.jpg` — Authentik site (clean B&W, strong typography, generous whitespace)
- `/Users/concordsteve/Desktop/46711c17fbe2cde5d5350677b6be8085.jpg` — Warm cream editorial layout (bold serif, short decorative rules, airy feel)

---

## Architecture Notes

- **Pure static HTML/CSS** — no JavaScript, no frameworks, no build step
- **5 HTML files total**: homepage + writings hub + 3 article pages
- **1 shared stylesheet** (`styles.css`) + per-article inline `<style>` blocks
- **CSS custom properties** for all design tokens
- **Google Fonts CDN** for typography
- **Max width**: 900px
- **Spacing unit**: 1.5rem (`--space-unit`)
- **Responsive breakpoints**: 768px (credentials grid collapse), 600px (name resize, button stack)
- **Archive of previous versions**: `archive/` folder + `archive of stevenray.com 2025/` folder
- **Git history** preserves the neon punk version if we ever want to reference it
