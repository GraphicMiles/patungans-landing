# Patungans — Demo Landing Page 1

A responsive recreation of the Patungans landing page built with **React +
Vite + Tailwind CSS + React Router**, using **Font Awesome 6** (CDN) for all
icons. Typography: **Inter** (body) + **Space Grotesk** (display).

## Features

- Sticky navbar with **hamburger menu** on mobile
- **`/login` and `/signup` routes** — the auth box (tabs, forms, social
  buttons) rendered as a page, perfectly centered on screen
- Phone & device mockups built as real UI in JSX (balance card, chart, activity list)
- Initials-based avatars (`Avatar` component) standing in for user photos
- Scrollable testimonials with working arrow controls
- Green CTA banner overlapping the dark footer, like the reference design
- **Scroll-reveal animations** (`Reveal` component, IntersectionObserver)
- Mobile-first centering: copy blocks center on small screens, left-align on desktop

## Routes

| Path     | Page                            |
| -------- | ------------------------------- |
| `/`      | Landing page                    |
| `/login` | Centered login box              |
| `/signup`| Centered signup box             |

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview the production build
```

## Structure

```
src/
├── App.jsx                  # router (/ , /login, /signup)
├── LandingPage.jsx          # composes the landing sections
├── main.jsx                 # React entry point
├── index.css                # Tailwind entry
├── pages/
│   └── AuthPage.jsx         # centered auth page for /login & /signup
└── components/
    ├── AuthBox.jsx          # login / signup box (tabs + forms)
    ├── Avatar.jsx           # initials avatar (stands in for photos)
    ├── Reveal.jsx           # scroll-reveal animation wrapper
    ├── Navbar.jsx           # sticky header + hamburger
    ├── PhoneMockups.jsx     # MainPhone / StatsPhone / DeviceCard UI mockups
    ├── Hero.jsx             # headline + phone mockups + store badges
    ├── StatsFeatures.jsx    # stats + clear targets / promising progress
    ├── DarkFeature.jsx      # "Monitor easily" dark panel
    ├── TwoColumnFeatures.jsx# security + integrations cards
    ├── SocialProof.jsx      # network diagram section
    ├── Testimonials.jsx     # scrollable testimonial cards
    ├── CTABanner.jsx        # green gradient download banner
    └── Footer.jsx           # dark footer with link columns
```

## Design tokens (tailwind.config.js)

- Primary `#4ADE80`, Primary dark `#22C55E`
- Secondary `#1F2937`, Ink `#111827`, Mist `#F6F5FA`
- `font-sans` Inter, `font-display` Space Grotesk
- Shadows only where the design needs depth (phones, auth box)

## Notes

- Icons: Font Awesome 6 classes loaded from CDN in `index.html`.
- Avatars: swap `Avatar` for real `<img />` tags when photos are available.
