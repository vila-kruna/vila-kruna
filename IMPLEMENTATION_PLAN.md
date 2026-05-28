# Vila Kruna — Website Implementation Plan

**Client:** Vila Kruna — motel/apartments in Rakovica, Belgrade  
**Contact:** Frenki (close friend)  
**Owned by:** Frenki  
**Website:** None currently  
**Goal:** Professional bilingual (SR/EN) website that builds trust and drives bookings via Booking.com redirect  
**Pilot value:** Website is the free hook to get Frenki on board with the OFFER-001 pilot (review automation)  

---

## 1. Pages

| # | Page | URL slug | Purpose |
|---|---|---|---|
| 1 | Početna | `/` | Hero + overview + trust signals + CTA |
| 2 | Apartmani | `/apartmani` | Room types with photos, details, pricing |
| 3 | Cenovnik | `/cenovnik` | Prices table |
| 4 | Galerija | `/galerija` | Full 42+ photo gallery |
| 5 | Kontakt | `/kontakt` | Contact form + map + phone/email |

All pages share: Header (logo + nav), Footer (social + booking links)

---

## 2. Site Structure

```
vila-kruna-website/
├── index.html          # Home
├── apartmani.html      # Room types
├── cenovnik.html       # Prices
├── galerija.html       # Photo gallery
├── kontakt.html        # Contact
├── css/
│   └── style.css
├── js/
│   └── main.js         # Scrolling reviews, lightbox, mobile menu
└── assets/
    └── images/          # Downloaded from Booking.com + Google
```

**Stack:** Vanilla HTML/CSS/JS only — no framework needed for this scope.  
**Hosting:** Static files — GitHub Pages or Netlify (free tier is fine).

---

## 3. Site-Wide Elements

### Header
- Logo: Image placeholder
- Nav: Početna | Apartmani | Cenovnik | Galerija | Kontakt
- Language toggle: SR / EN
- Sticky on scroll
- Mobile: hamburger menu

### Footer
- Logo + tagline: "Vaš mir u Beogradu"
- Address: Svetozara Ivackovica 4, Rakovica, 11090 Beograd
- Phone: [TBD — ask Frenki]
- Email: [TBD — ask Frenki]
- Links: Booking.com profile | Google Business Profile
- Social: Instagram (if exists)
- Copyright: © 2025 Vila Kruna. Sva prava zadržana.
- Map

---

## 4. Page-by-Page Breakdown

---

### PAGE 1: Početna (Home)

#### Hero Section
- Background: Full-bleed exterior photo of Vila Kruna
- Headline: "Vila Kruna"
- Subheadline: "Vaš mir u Beogradu. Novo, prostrano, čisto — 10 min od centra."
- CTA Primary: "Rezerviši na Booking.com" → `https://www.booking.com/hotel/rs/vila-kruna-beograd.sr.html`
- CTA Secondary: "Pogledajte apartmane"
- Mobile: same layout, full-width CTA button

#### Trust Strip (below hero)
- Booking.com score: **9.0 — Izvanredno** (326 recenzija)
- Stars: ★★★ (3 stars)
- Google score: [TBD — need to pull from Google Business Profile]
- Display: horizontal bar, dark background, white text

#### About Section
- Headline: "Dobrodošli u Vila Kruna"
- Body copy (SR):
  > "Vila Kruna je moderno opremljen apartman i motel u mirnoj gradskoj četvrti Rakovica, na samo deset minuta vožnje od centra Beograda. Idealno za putnike, poslovne goste, parove ili kraće boravke — nudimo prostrane sobe, toplo gostoprimstvo i sve što vam treba za udoban odmor.
  >
  > Sve sobe su novoopremljene, čiste i udobne. Gosti ističu veliku površinu, moderno kupatilo i prijateljsku komunikaciju. Besplatan parking i WiFi su uvek uključeni."
- Body copy (EN):
  > "Vila Kruna is a modernly equipped apartment and motel in the peaceful Rakovica neighborhood of Belgrade — just a 10-minute drive from the city center. Ideal for travelers, business guests, couples, or short stays, we offer spacious rooms, warm hospitality, and everything you need for a comfortable stay.
  >
  > All rooms are newly furnished, clean, and comfortable. Guests consistently praise the spacious rooms, modern bathrooms, and friendly communication. Free parking and WiFi are always included."
- Image: Room photo, right side

#### Amenities Grid
- Headline: "Sadržaji"
- Icons + labels, 2-row grid:
  - 🅿 Besplatan parking
  - 📶 Besplatan WiFi
  - 🐾 Kućni ljubimci dozvoljeni
  - ❄️ Klima uređaj
  - 🔥 Grejanje
  - 🏢 Recepciona 24h
  - 🏠 Terasa
  - 🚭 Sobe za nepušače
  - 📺 TV i multimediji
  - 🛁 Veliko kupatilo

#### Rooms Preview
- Headline: "Sobe i apartmani"
- 2 cards side by side:
  - Card 1: "Apartman" — photo + short copy + "Pogledajte sve apartmane →" (links to `/apartmani`)
  - Card 2: "Soba" — photo + short copy + "Pogledajte sve sobe →" (links to `/apartmani`)
- CTA below cards: "Rezerviši na Booking.com →"

#### Moving Reviews Stripe ★★★
- Headline: "Šta kažu gosti" (above stripe)
- 5 Google reviews in a continuous horizontal scroll
- Speed: one review passes every ~8-10 seconds
- Pauses on hover
- Each card shows:
  - ⭐⭐⭐⭐⭐ stars
  - Reviewer name + country flag
  - Short review text (max ~150 chars displayed)
  - Google logo/icon at bottom
- Reviews source: Google Business Profile (manual selection of best 5)
- Technical: CSS animation `@keyframes scroll` + simple JS for pause-on-hover

#### Location Section
- Headline: "Lokacija"
- Google Maps embed: Svetozara Ivackovica 4, Beograd
- Key points:
  - 10 min od centra Beograda
  - Blizu autoputa (izlaz za Rakovicu)
  - Mirna i tiha lokacija
  - Besplatan parking u blizini

#### CTA Section
- Dark background
- Headline: "Spremni za boravak?"
- Subheadline: "Rezervišite direktno preko Booking.com — brzo i jednostavno."
- Button: "Rezerviši na Booking.com" → Booking.com link

---

### PAGE 2: Apartmani (Room Types)

**Headline:** "Sobe i apartmani"

**Room Type 1 — Apartman**
- Photo gallery: 4-6 photos (bedroom, living area, kitchen, bathroom, exterior)
- Description (SR):
  > "Apartman u Vili Kruna nudi potpuno opremljen prostor za 1-4 osobe. Uključuje spavaću sobu sa bračnim krevetom, dnevni boravak sa kaučem na razvlačenje, potpuno opremljenu kuhinju i moderno kupatilo. Idealno za parove, porodice ili poslovne goste koji žele prostor i privatnost."
- Description (EN):
  > "The Vila Kruna apartment offers a fully equipped space for 1-4 guests. Includes a bedroom with a double bed, a living room with a sofa bed, a fully equipped kitchen, and a modern bathroom. Ideal for couples, families, or business guests who want space and privacy."
- Capacity: 1-4 osobe
- Features: WiFi, AC, TV, kitchen, parking, private bathroom
- CTA: "Rezerviši ovaj apartman na Booking.com →"

**Room Type 2 — Soba**
- Photo gallery: 3-4 photos
- Description (SR):
  > "Standardna soba u Vili Kruna nudi udoban smeštaj za 1-2 osobe. Svaka soba ima sopstveno kupatilo, klima uređaj, besplatan WiFi i TV. Čista, prostrana i mirna — savršena za kratke boravke i tranzitne goste."
- Description (EN):
  > "The standard room at Vila Kruna offers comfortable accommodation for 1-2 guests. Each room has a private bathroom, air conditioning, free WiFi, and TV. Clean, spacious, and quiet — perfect for short stays and transit travelers."
- Capacity: 1-2 osobe
- Features: WiFi, AC, TV, parking, private bathroom
- CTA: "Rezerviši ovu sobu na Booking.com →"

---

### PAGE 3: Cenovnik (Prices)

**Headline:** "Cene"

Note: Prices shown are approximate — link to Booking.com for live availability. This page serves as a reference, not a booking engine.

| Tip smeštaja | Kapacitet | Noćenje (RSD) | Noćenje (EUR) |
|---|---|---|---|
| Soba standard | 1-2 osobe | ~3.500 RSD | ~30 EUR |
| Apartman | 1-4 osobe | ~5.000 RSD | ~42 EUR |

*(Real prices to be confirmed with Frenki. These are placeholder reference points.)*

- Note text: "Cene su indikativne. Za tačnu dostupnost i cene posetite Booking.com."
- CTA: "Pogledaj sve cene na Booking.com →"

---

### PAGE 4: Galerija (Photo Gallery)

**Headline:** "Galerija"

- 42+ photos in a responsive masonry grid
- Categories as filter tabs: Sve | Sobe | Apartmani | Kupatilo | Eksterijer
- Lightbox on click — full-size image, left/right arrows, close button
- Download all images from Booking.com before building this page
- Source folder: `assets/images/`

---

### PAGE 5: Kontakt (Contact)

**Headline:** "Kontakt"

**Contact Info Block**
- Adresa: Svetozara Ivackovica 4, Rakovica, 11090 Beograd, Srbija
- Telefon: [TBD — ask Frenki]
- Email: [TBD — ask Frenki]
- GPS koordinate: [TBD]

**Contact Form**
- Fields: Ime | Email | Telefon | Poruka
- Button: "Pošaljite poruku"
- Note: "Odgovaramo u roku od 24h"

**Map**
- Google Maps embed, full-width below the form

**Directions text**
> "Iz pravca autoputa — izlaz Rakovica, skrenite levo, pratite oznake. Parking besplatan u blizini."

---

## 5. Design Spec

### Colors
| Role | Color | Hex |
|---|---|---|
| Primary / CTA | Forest green | `#2D6A4F` |
| Primary hover | Dark green | `#1B4332` |
| Accent | Warm gold | `#D4A843` |
| Background | Off-white | `#FAFAF8` |
| Text primary | Charcoal | `#2C2C2C` |
| Text secondary | Medium gray | `#6B6B6B` |
| Dark section bg | Dark charcoal | `#1A1A1A` |
| Border / divider | Light gray | `#E0E0E0` |

### Typography
- Headlines: `Playfair Display` (Google Fonts) — trustworthy, warm, slightly traditional
- Body / Nav: `Inter` (Google Fonts) — clean, readable
- Font sizes: 48px hero, 36px section heads, 18px body, 14px captions

### Layout
- Max-width container: 1200px centered
- Sections: full-width alternating (white / off-white)
- Mobile-first breakpoints: 768px (tablet), 1024px (desktop)
- Spacing: 80px vertical padding per section on desktop, 48px on mobile

### Components
- **CTA Buttons:** Rounded, green background, white text, hover lifts with shadow
- **Cards:** White bg, subtle border, soft shadow, rounded corners
- **Amenity icons:** Simple SVG icons, centered label below
- **Review cards:** White card, gold stars, quote text in italic, subtle quote mark watermark
- **Navigation:** Horizontal desktop / slide-in drawer mobile

---

## 6. Booking CTA Placement

Every page has multiple Booking.com CTAs to maximize conversion:

| Location | CTA |
|---|---|
| Hero (every page) | "Rezerviši na Booking.com" |
| After rooms preview (home) | "Rezerviši na Booking.com →" |
| After room detail (apartmani) | "Rezerviši ovaj apartman / sobu na Booking.com →" |
| Footer | "Rezerviši na Booking.com" button |
| CTA section (bottom of home) | Large green CTA button |
| Prices page | "Pogledaj sve cene na Booking.com →" |

All CTAs point to:  
`https://www.booking.com/hotel/rs/vila-kruna-beograd.sr.html`

---

## 7. Reviews Stripe — Technical Spec

**Source:** 5 hand-picked Google reviews (best ones, most recent, showing 5 stars or 4+ stars with good text)

**Data to collect from Google Business Profile:**
- Reviewer name
- Star rating
- Review text (shortened to ~150 chars if needed)
- Date

**Display:**
```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ ⭐⭐⭐⭐⭐       │ │ ⭐⭐⭐⭐⭐       │ │ ⭐⭐⭐⭐       │
│ "Velika i    │ │ "Apartman    │ │ "Čisto,      │
│  prostrana   │ │  odličan za  │ │  moderno,    │
│  soba..."    │ │  prenoćište.."│ │  preporučujem."│
│ — Dragan K.  │ │ — Jovica M.  │ │ — Marko R.  │
│ Google ★    │ │ Google ★    │ │ Google ★   │
└──────────────┘ └──────────────┘ └──────────────┘
           ← ← ← continuous scroll ← ← ←
```

**CSS animation:**
```css
@keyframes reviewsScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.reviews-track {
  animation: reviewsScroll 40s linear infinite;
}
.reviews-track:hover {
  animation-play-state: paused;
}
```

**JS:** Simple pause-on-hover (CSS-only also works)  
**Infinite loop:** Duplicate the 5 review cards in the track so the loop is seamless

---

## 8. Booking.com Score Display

**Data:**
- Score: **9.0**
- Label: **Izvanredno**
- Review count: **326**
- Stars: 3 ★★★

**Placement:** Trust strip directly below hero, full-width bar

**Display format:**
```
┌──────────────────────────────────────────────────────┐
│  ⭐ 9.0 na Booking.com — Izvanredno (326 recenzija)   │
└──────────────────────────────────────────────────────┘
```

**Google score:** TBD — pull from Google Business Profile once access is confirmed  
**Display:** If Google score exists, show next to Booking score in the same strip

---

## 9. Bilingual Setup

**Primary language:** Serbian (SR)  
**Secondary language:** English (EN)

**Approach:** Two-language toggle in header — SR / EN

When EN is selected:
- All page content switches to English
- Meta tags, alt texts, page titles switch to EN

**Implementation:**
- Store all copy in a `translations` JS object:
```js
const t = {
  sr: { headline: "Vila Kruna", sub: "Vaš mir u Beogradu" },
  en: { headline: "Vila Kruna", sub: "Your peace in Belgrade" }
};
```
- On language toggle, swap text content
- Or: two separate HTML files per page (SR + EN) — more SEO-friendly

**SEO note:** Serbian primary means `<html lang="sr">` and Hreflang tags for SR/EN.

---

## 10. SEO Setup

| Element | Content |
|---|---|
| Title (home) | Vila Kruna — Apartmani i motel u Beogradu \| Booking.com rating 9.0 |
| Meta description | Vila Kruna motel i apartmani u Rakovici, Beograd. Novo, prostrano, čisto — 10 min od centra. Besplatan parking i WiFi. Ocena 9.0 na Booking.com. |
| Canonical URL | `https://vilakruna.rs` (or similar) |
| OG Image | Best exterior photo |
| Hreflang | sr + en |
| Robots | index, follow |

---

## 11. What's Needed from Frenki (Data Collection)

Before coding is complete, need to confirm with Frenki:

- [ ] Phone number
- [ ] Email address
- [ ] Instagram account (if exists)
- [ ] Facebook (if exists)
- [ ] Exact room types and names
- [ ] Real prices (replace placeholders in Cenovnik page)
- [ ] Confirmation of 5 best Google reviews to use in stripe
- [ ] Whether to use a custom domain — if yes, which one
- [ ] Who manages hosting / domain

---

## 12. Build Order

1. **Set up project folder** — create directory structure
2. **Download images** — get all 42+ photos from Booking.com manually, place in `assets/images/`
3. **Pull Google reviews** — visit GBP profile, copy 5 best review texts with names
4. **Write base HTML templates** — shared header/footer in every page
5. **Build Home page** — hero, trust strip, about, amenities, room preview, reviews stripe, location, CTA
6. **Build Apartmani page** — room type cards with gallery
7. **Build Cenovnik page** — prices table
8. **Build Galerija page** — masonry grid + lightbox JS
9. **Build Kontakt page** — form + map embed
10. **Add CSS** — colors, typography, layout, responsive
11. **Add JS** — mobile menu, language toggle, reviews animation, lightbox
12. **SEO** — meta tags, OG image, hreflang
13. **Deploy** — GitHub Pages or Netlify (static, free)
14. **Test** — mobile, desktop, all CTAs, language toggle, lightbox

---

*Plan created: 2026-05-25*  
*For: OFFER-001 — Vila Kruna pilot client*  
*Location: `workspace/leads/Vila-Kruna_Frenki/IMPLEMENTATION_PLAN.md`*