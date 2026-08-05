# Patungans — Landing Page

Enterprise-grade marketing page for **Patungans**, the joint-venture / group-money
app: friends pool contributions toward a shared target (a trip, a gift, a
subscription, an event) and track the pool's progress together.

Built with **React + Vite + Tailwind CSS + React Router**. No image assets —
every future image slot uses the labeled `ImagePlaceholder` component, and the
signature visual (the pool) is pure SVG/CSS.

## Design system (tokens live only in `src/index.css`)

| Token     | Hex       | Job                                        |
| --------- | --------- | ------------------------------------------ |
| ink       | `#101B16` | deep pine dark backgrounds                 |
| paper     | `#F6F3EC` | warm bone light backgrounds                |
| jade      | `#1F7A5C` | growth / money — primary actions           |
| coral     | `#E8694A` | social warmth — friends & social proof     |
| gold      | `#C9A15A` | milestones / target reached only           |
| line      | `#DAD4C4` | hairlines on paper                         |

- **Display**: Fraunces (headlines only) · **Body**: Inter · **Numerals**: JetBrains Mono (money, %, stats only)
- Full type scale as `--font-size-*` / `--line-height-*` custom properties; no inline sizing.
- Zero shadows, zero raw hex/px outside the token file, no emoji.

## Signature element

`PoolViz` — contribution nodes (initials avatars) animate along SVG paths into a
central vessel whose fill **scrubs with scroll progress** through its section.
A miniature `NavVessel` in the sticky nav fills with page scroll progress next
to a slim jade progress bar.

## Motion

- One shared `IntersectionObserver` (`src/hooks/observers.js`), applied via
  `data-reveal` across all sections; reveals **reverse** when scrolling back up
  past the trigger (elements that left through the top stay revealed).
- Child stagger via `--reveal-delay` inline custom property.
- Stats count up on entry and reset on reverse; instant under
  `prefers-reduced-motion`, which also disables transforms and the traveling
  contribution dots.
- Testimonial carousel is user-controlled only (arrows / swipe, no autoplay).

## Routes

| Path      | Page                        |
| --------- | --------------------------- |
| `/`       | Landing page                |
| `/login`  | Centered login box (UI-only)|
| `/signup` | Centered signup box (UI-only)|

## Structure

```
src/
├── App.jsx               # router
├── LandingPage.jsx       # section composition + reveal system
├── index.css             # TOKEN FILE (only raw hex lives here) + reveal CSS
├── hooks/observers.js    # one IO config, scroll/page progress, reduced motion
├── pages/AuthPage.jsx    # /login & /signup centered box
└── components/
    ├── ui.jsx            # Button variants, Card, ImagePlaceholder, Avatar
    ├── PoolViz.jsx       # signature visualization + NavVessel
    ├── Navbar.jsx        # condensing sticky nav + progress bar + hamburger
    ├── Hero.jsx          # paper — headline + scrubbed pool viz
    ├── StatsStrip.jsx    # mono count-up stats band
    ├── HowItWorks.jsx    # ink — 3 numbered steps + screenshot slot
    ├── TrustPair.jsx     # paper — security / integrations cards
    ├── Recap.jsx         # paper-deep — mini pool viz + "why pooling works"
    ├── Testimonials.jsx  # ink — user-controlled carousel
    ├── FinalCTA.jsx      # jade band — single typographic ask
    ├── Footer.jsx        # ink — About/Company/Legal + socials
    └── AuthBox.jsx       # login/signup box
```

## Run

```bash
npm install
npm run dev
```
