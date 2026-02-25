# stevenray.com 2026 — Design Log

## Current State (Feb 13, 2026)

The site is **live at stevenray.com** via Cloudflare Pages. The warm editorial direction is locked in. Instrument Serif has replaced Playfair Display for display type (name, page titles, article titles). All three articles are published. The site is in active refinement mode.

### What's Live
- **Homepage** — Steven Ray name in Instrument Serif at 96px, subtitle "AI builder. Design leader. Founder. Investor.", bio updated to include "AI & Design"
- **Writings index** — 3 published articles in reverse chronological order, titles in Instrument Serif
- **3 published articles** — all with Instrument Serif titles
- **Custom domain** — stevenray.com + www.stevenray.com both active with SSL via Cloudflare Pages

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
- No animations, no grain, no glow, no gradients
- Inspired by two reference images: Authentik (clean B&W editorial) and a warm cream minimalist layout

---

## Typography (Current)

| Element | Font | Size | Weight |
|---------|------|------|--------|
| **Steven Ray (name)** | Instrument Serif (`--font-name`) | 96px | 400 |
| **Page titles** (Writings header) | Instrument Serif (`--font-name`) | 96px | 400 |
| **Article titles** (on article pages) | Instrument Serif (`--font-name`) | clamp(2rem, 6vw, 3rem) | 400 |
| **Writing list titles** (writings index) | Instrument Serif (`--font-name`) | clamp(1.5rem, 4vw, 2.25rem) | 400 |
| **Body text, labels, buttons** | Inter (`--font-body`) | various | 300-600 |
| **Other serif uses** (if any) | Playfair Display (`--font-serif`) | various | 400-700 |

### Font Loading
All HTML pages load: `Instrument Serif`, `Playfair Display` (wght 400-700), `Inter` (wght 300-600) via Google Fonts CDN.

### CSS Custom Properties
```css
--font-name: 'Instrument Serif', Georgia, serif;    /* display: name + titles */
--font-serif: 'Playfair Display', Georgia, serif;    /* kept for other serif uses */
--font-body: 'Inter', -apple-system, sans-serif;     /* everything else */
```

### Typography History
- **Dropped Space Grotesk** — was a third font, redundant once Playfair took the display role
- **Playfair Display demoted** — was the main display font, replaced by Instrument Serif for name/titles (Feb 13). Still loaded and available via `--font-serif` for other uses.
- **Instrument Serif adopted** — Steven chose this from Google Fonts specimen preview. Used for his name and all page/article titles. Weight 400, no bold.

---

## Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#f7f5f2` | Warm cream background |
| `--color-bg-elevated` | `#efece8` | Hover backgrounds on credentials |
| `--color-text` | `#1a1a1a` | Primary text, name |
| `--color-text-muted` | `#8a8580` | Subtitles, labels, roles, dates, button fills |
| `--color-accent` | `#8b7355` | Warm bronze — hover states only (links, company names, writing titles) |

---

## Content

### Homepage Copy
- **Subtitle:** "AI builder. Design leader. Founder. Investor."
- **Bio:** "25 years building products at the intersection of technology and design. Co-founded Dialexa, scaled it to 300+ people, sold it to IBM. Now I help companies see what's possible with AI & Design."
- **Social links:** linkedin.com/in/stevenray, x.com/stevenray

### Published Writings (reverse chronological)
1. **The Context Problem Nobody Is Talking About** — February 2026 (`context-graphing.html`)
2. **Team Memory** — January 2026 (`team-memory.html`)
3. **The Memory Silo Problem** — December 2025 (`cross-llm-shared-memory.html`)

---

## Hosting & Deployment

- **Platform:** Cloudflare Pages
- **Project name:** `stevenray-com`
- **Domains:** `stevenray.com`, `www.stevenray.com`, `stevenray-com.pages.dev`
- **Git repo:** `github.com/StevenRay/stevenray.com`
- **Deploy trigger:** Push to `main` branch auto-deploys
- **DNS:** Cloudflare zone `1b01861b3a68d79ee29becd1fbdba133`, nameservers on Cloudflare (mckenzie/miguel)
- **Domain registrar:** GoDaddy (original), DNS moved to Cloudflare

---

## Layout & Components
| Decision | Why |
|----------|-----|
| **Small decorative rule after subtitle** | 48px, 2px tall, black. Editorial section divider between header and content. Added via `.title::after` pseudo-element. |
| **Bio left border: 2px solid black** | Quiet and structural. |
| **Bio max-width: 640px** | Widened from 600px to prevent "Design." from orphaning after bio copy update. |
| **Connect buttons: filled warm gray** | Filled `#8a8580`, cream text, 4px radius, no border. Hover darkens to black. |
| **Button gap: 0.75rem** | Tightened from 3rem. |
| **Credential sections untouched** | Steven said "the part I like the best is the Now and Previously sections. Super clean." |
| **All borders use `rgba(0, 0, 0, 0.08)`** | Consistent, subtle warm borders. |

---

## What Still Needs Work

### Writings Link Placement
Currently buried in the footer. If writings are a real content pillar, they deserve more prominence — possibly in the header area or as a visible nav element.

### Overall Polish
Areas to revisit:
- Connect section heading ("Connect") — is it needed? Could just be the buttons.
- Mobile responsive behavior at 600px breakpoint — name is now 96px fixed, may need responsive scaling
- Whether the decorative rule after the subtitle is earning its keep
- Article page inline styles could potentially be moved to the main stylesheet for consistency
- Open Graph meta descriptions should be updated to match new article titles

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
- **Google Fonts CDN** for typography (Instrument Serif, Playfair Display, Inter)
- **Max width**: 900px
- **Spacing unit**: 1.5rem (`--space-unit`)
- **Responsive breakpoints**: 768px (credentials grid collapse), 600px (name resize, button stack)
- **Archive of previous versions**: `archive/` folder + `archive of stevenray.com 2025/` folder
- **Git history** preserves all previous versions

---

## Session Log — Feb 13, 2026

Changes made this session:
1. Connected custom domains (stevenray.com + www) to Cloudflare Pages
2. Fixed LinkedIn and X links (stevenaray → stevenray)
3. Switched name font from Playfair Display to **Instrument Serif** at 96px, weight 400
4. Applied Instrument Serif to writings page title, all article titles, and writing list titles
5. Updated subtitle to "AI builder. Design leader. Founder. Investor."
6. Updated bio to "AI & Design"
7. Widened bio max-width from 600px to 640px to prevent orphaned "Design."
8. Published **Context Graphing** article (was "Coming Soon")
9. Published **Cross LLM Shared Memory** article (was "Coming Soon"), dated December 2025
10. Reordered writings to reverse chronological (Feb → Jan → Dec)
11. Sized writing list titles to clamp(1.5rem, 4vw, 2.25rem)
