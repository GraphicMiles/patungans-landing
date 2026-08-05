# Patungans — Demo Landing Page 1

A responsive recreation of the Patungans landing page built with **React +
Vite + Tailwind CSS**, using **Font Awesome 6** (CDN) for all icons.

## Features

- Sticky navbar with **hamburger menu** on mobile
- **Login / Sign up modal** (tabbed, with forms, social auth buttons, Esc/overlay close)
- Phone & device mockups built as real UI in JSX (balance card, chart, activity list)
- Initials-based avatars (`Avatar` component) standing in for user photos
- Scrollable testimonials with working arrow controls
- Green CTA banner overlapping the dark footer, like the reference design

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
├── App.jsx                  # assembles the page sections
├── main.jsx                 # React entry point
├── index.css                # Tailwind entry
└── components/
    ├── Avatar.jsx           # initials avatar (stands in for photos)
    ├── AuthModal.jsx        # login / signup box
    ├── Navbar.jsx           # sticky header + hamburger + auth triggers
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
- Shadows are used only where the design needs depth (phones, modal)

## Notes

- Icons: Font Awesome 6 classes (`<i class="fa-solid fa-…" />`) loaded from CDN in `index.html`.
- Avatars: swap `Avatar` for real `<img />` tags when photos are available.
