# Patungans

The marketing page for Patungans, a group-savings app where friends pool money
toward one shared target: a trip, a gift, a subscription, an event. The page
explains the idea, shows the pool filling, and sends people to the app.

Live at [patungans.vercel.app](https://patungans.vercel.app).

## Why it exists

Group money fails on bookkeeping, not on intent. Everyone agrees to the trip, one
person collects, and the record of who paid what lives in a chat thread. Patungans
makes the pool the object: a target, a running total, and everyone able to see it.
The landing page has to sell that in one screen, so the pool is the signature
visual and it is drawn, not photographed.

## What you can do

- **Read the pitch** and how the pool works.
- **See the pool fill** as the page's main visual, built in SVG and CSS.
- **Follow the sections** in order, on desktop and phone.
- **Place a future screenshot** anywhere a `ImagePlaceholder` component sits: the
  page ships with no image assets by design, and each slot is labelled.

## Running it

```bash
npm install
npm run dev      # vite
npm run build    # production build
npm run preview  # serve the build
```

## Design system

Tokens live only in `src/index.css`, and nothing else hardcodes a colour:

| Token | Hex | Job |
|---|---|---|
| ink | `#101B16` | deep pine dark backgrounds |
| paper | `#F6F3EC` | warm bone light backgrounds |
| jade | green | the pool, progress and affirmative action |

React, Vite, Tailwind CSS and React Router. `SITE_SUMMARY.md` records the page
structure and copy decisions.

## What is not here

- No app, no accounts and no payments. This is the marketing page for the product.
- No photography or illustration. Every image slot is a labelled placeholder, so
  the layout is honest about what is still missing.
- No CMS. Copy changes are code changes.

## How it is built

```
index.html          entry
src/                components, sections, routes
src/index.css       the only place design tokens are defined
tailwind.config.js, postcss.config.js, vite.config.js
SITE_SUMMARY.md     structure and copy decisions
```
