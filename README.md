# Syqa Capital

Corporate website for SYQA Capital Co., Ltd.
An Asia-focused investment firm. Japan at the core.

## File Structure

```
syqa-website/
├── index.html              # Home — landing with hero, quote, cross-links
├── firm.html               # About / Firm story
├── focus.html              # Three investment focus areas
├── leadership.html         # Team (scalable grid)
├── news.html               # Announcements (empty-state scaffold)
├── contact.html            # Contact info
├── legal.html              # Legal & Privacy disclosures
├── styles.css              # All shared styles (single source of truth)
├── script.js               # All shared JavaScript
└── README.md               # This file
```

## Tech

- Pure HTML + CSS + JS (no framework, no build step)
- Loads Google Fonts (Fraunces, Shippori Mincho B1, Noto Sans JP) and Fontshare (Switzer)
- Fully bilingual EN/JP with language toggle (persists via localStorage)
- Mobile-first responsive
- Zero tracking, zero cookies, zero third-party scripts beyond fonts

## Brand System

- **Palette**: Pine `#203B36` + Copper `#B87333` + Bone `#EDE7D8`
- **Typography**: Fraunces (display serif), Switzer (UI sans), Shippori Mincho B1 + Noto Sans JP (Japanese)
- **Logo**: "SYQA" in Fraunces Light + copper dot
- **Visual grammar**: 1px hairlines only, generous negative space, copper used sparingly as structural accent

## Deployment

Recommended: **Cloudflare Pages** (free, global CDN, automatic HTTPS).

1. Push this folder to a private GitHub repository
2. Create a Cloudflare Pages project pointing to that repo
3. Build settings:
   - Framework preset: **None**
   - Build command: *(leave blank)*
   - Build output directory: `/`
4. Connect custom domain `syqacapital.com`
5. Done.

## Maintenance

### To add a team member
Open `leadership.html`, find the `<div class="lg">` grid, copy an existing `<div class="lc">` block, update the fields per the inline comment instructions.

### To add a news announcement
Open `news.html`, remove the `<div class="news-empty">` block once you have your first announcement, then add `<div class="news-item">` blocks per the inline comment instructions.

### To update copy on any page
Edit the specific `.html` file. The `styles.css` and `script.js` files are shared across all pages — update them once, every page gets the change.

### To change the palette or typography
Edit the `:root` CSS custom properties at the top of `styles.css`.

## Regulatory Note

This site is designed as a **corporate information site**, not an investment solicitation platform. It avoids FIEA-regulated language. SYQA Capital does not currently hold Japanese financial instruments business registration. Before adding any fund-specific or investment-offering content, consult Japanese fund counsel.

---

© 2026 SYQA Capital Co., Ltd.
