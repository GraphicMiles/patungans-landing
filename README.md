# Patungans — Demo Landing Page 1

A responsive recreation of the Patungans landing page built with **React +
Vite + Tailwind CSS**. All images are rendered as labelled placeholder divs
(`src/components/Placeholder.jsx`) so real assets can be dropped in later —
see [PLACEHOLDERS.md](./PLACEHOLDERS.md) for the full checklist.

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
    ├── Placeholder.jsx      # shared image placeholder
    ├── Navbar.jsx           # sticky header
    ├── Hero.jsx             # headline + phone mockups
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
- Soft shadow `0 4px 6px -1px rgba(0,0,0,0.1)`
- Radii: cards `rounded-2xl/3xl`, buttons `rounded-lg`, pills `rounded-full`
