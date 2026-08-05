# Patungans — What the Site Is and What It Does

## The product behind the page

1.  Patungans is a joint-venture / group-money application.
2.  The name comes from "patungan", the Indonesian term for splitting a cost
    or pooling money as a group — that mechanic is the whole product.
3.  Friends create a "pool" around a shared target: a weekend trip, a group
    gift, a birthday surprise, a shared subscription, an event.
4.  The pool has three properties: a name, a money target, and a date.
5.  Each member contributes on their own schedule — weekly, monthly, or
    whenever — with no fixed splits and no pressure.
6.  Everyone sees the same live picture: who has contributed, how much is in
    the pool, and how close the group is to the target.
7.  Milestone notifications fire as the pool fills, and reaching the target
    is treated as a shared celebration moment.
8.  The product promise is simple: pooled money between friends, made
    visible, painless, and accountable — so nobody has to do the chasing.

## What this site is

9.  This repository is the single-page marketing site for that product.
10. Its job is to explain the mechanic in five seconds, prove credibility with
    numbers and stories, and convert visitors into "Start a pool" signups.
11. It is a front-end-only build: every call-to-action is a UI entry point,
    and authentication is interface-only with no backend wiring.
12. It ships with no image assets at all — every future image is a labeled
    placeholder slot, and the hero visual is built from pure SVG and CSS.

## Page walkthrough, top to bottom

13. Navbar — sticky, condenses after ~40px of scroll (tighter height plus a
    hairline border), with a slim jade scroll-progress bar along its bottom
    edge and a miniature "vessel" glyph that fills as you read the page.
14. On mobile the nav collapses to a hamburger that opens a panel with the
    section links plus Log in / Start a pool buttons.
15. Hero (paper background) — the product statement in a heavy display serif:
    "Plan it together. Fund it together."
16. The subhead states the mechanic in one sentence: set one target,
    contribute on your own schedule, watch the pool fill together.
17. Two calls to action: "Start a pool" (primary, jade) and "See how it
    works" (secondary, outlined), plus a mono micro-line of proof.
18. The hero's visual anchor is the signature pool visualization (below),
    whose water level scrubs with your scroll position.
19. Stats band (deeper paper) — three aggregate proof numbers rendered in the
    mono face and counted up as they enter view: pools created, total money
    pooled, and average days to target.
20. How it works (ink background) — the genuine three-step sequence, and the
    only place numbered markers are used: create a pool and set the target;
    invite friends and let each set their pace; track it filling and hit it
    together.
21. Beside the steps sits the page's single image slot: a labeled placeholder
    reserved for a future app-screenshot (1200×1500 portrait).
22. Trust pair (paper) — two cards with one specific sentence each: security
    (regulated partner accounts, per-pool ledgers, encryption) and
    integrations (bank transfer, cards, e-wallets — one-tap contributing).
23. Recap band (deeper paper) — a miniature of the pool visualization framed
    around "why pooling with friends works": visible plans create
    accountability, and accountability is the feature.
24. Stories (ink) — three testimonial cards in a horizontal carousel that is
    user-controlled only (arrows and swipe, never autoplay), each with a
    distinct voice and a mono meta line describing that person's pool.
25. Final call to action (jade band) — one clean typographic ask, "Your next
    plan deserves a pool", a single button, and a mono reassurance line; the
    old scatter of icon-in-circle ornaments is gone.
26. Footer (ink) — brand, rewritten tagline ("The shared pool for plans you
    make together"), social row, and About / Company / Legal link columns,
    left-aligned per landing-page convention.

## Routes

27. `/` — the landing page described above.
28. `/login` — the login box, centered on screen: email, password with
    show/hide toggle, remember-me, forgot-password, Google/Apple options.
29. `/signup` — the same box in signup mode, adding a full-name field.
30. Tabs inside the box navigate between the two routes; closing returns
    home. Both routes are UI-only by design.

## Design system

31. Palette with three accents that each have one job: jade for growth and
    money (primary actions), coral for social warmth (friends, stories),
    gold reserved strictly for milestone / target-reached moments.
32. Deep pine ink and warm bone paper alternate as full-bleed section
    backgrounds so the page has visible rhythm while scrolling.
33. Hairline "line" colors handle every border and divider; there are no
    drop shadows anywhere on the site.
34. Typography: Fraunces, a heavy display serif, for headlines only — the
    trust signal for money between friends.
35. Inter for all body and UI copy; JetBrains Mono exclusively for money
    amounts, percentages, and statistics so every number reads as real data.
36. The whole type scale lives as CSS custom properties; components never
    hard-code sizes, colors, or spacing.

## The signature visualization

37. Contribution nodes — initials avatars from the shared avatar system —
    sit around a central vessel.
38. Coral dots travel along curved SVG paths from each node into the vessel,
    making the product mechanic literally visible.
39. The vessel's fill level is tied to scroll progress through its section,
    with a mono percentage and dollar-of-target readout beneath it.
40. A dashed gold target line marks the top; a gold badge appears only when
    the fill reaches 100%.
41. A miniature version repeats in the recap section, and a tiny vessel in
    the navbar doubles as the page's scroll-progress indicator.

## Motion

42. Every major element reveals on viewport entry — a modest fade plus small
    upward translate on a custom easing curve, never spins or bounces.
43. Reveals are reversible: scroll back up past a section's trigger and its
    elements animate back to their pre-reveal state; elements that exited
    through the top stay revealed so reading downward never flickers.
44. One shared IntersectionObserver configuration powers all of this via a
    `data-reveal` attribute; children stagger through a `--reveal-delay`
    custom property set per index.
45. Stats count up on entry and reset when reversed.
46. `prefers-reduced-motion` collapses everything to instant opacity changes
    and hides the traveling contribution dots.

## Responsiveness and accessibility

47. The layout holds together down to a 360px viewport: clamped headline
    sizes, stacking grids, carousel cards capped at 85% of the viewport.
48. Every interactive element — buttons, links, inputs, arrows, hamburger —
    has a visible coral keyboard-focus outline.
49. Decorative SVGs are aria-hidden; placeholders and avatars carry labels.

## Images and placeholders

50. Nothing on the page is a generated, sourced, or remote image.
51. The single `ImagePlaceholder` component renders a dashed, labeled box
    stating the exact dimensions and content brief for the future artwork.
52. Icons appear only as functional UI glyphs (menu, arrows, brand marks);
    no icon library stands in for imagery.

## Stack and engineering norms

53. React + Vite + Tailwind CSS, with React Router for the two auth routes.
54. Font Awesome 6 (CDN) for functional glyphs; Google Fonts for the three
    typefaces; no animation libraries — native IntersectionObserver, rAF,
    and SVG/CSS only.
55. One implementation per pattern: one Button with variants, one Card, one
    Avatar, one reveal system, one placeholder component.

## What the site deliberately does not do

56. No backend, no real authentication, no payments, no CMS, no blog pages.
57. No autoplaying carousels, no parallax, no text-scramble effects.
58. No rainbow UI: anything that is not growth, social, or milestone stays
    ink, paper, or hairline.

## Bottom line

59. The site presents Patungans as a funded, trustworthy fintech product by
    making its actual mechanic — friends filling one shared vessel toward one
    shared target — the visual and verbal center of every section.
60. Everything else (stats, steps, trust cards, stories, CTA) exists to move
    a visitor from "we should plan this" to "start a pool".

## Page rhythm at a glance

61. Hero — paper: statement, mechanic, actions, live pool.
62. Stats band — deeper paper: mono proof numbers.
63. How it works — ink: three numbered steps plus screenshot slot.
64. Trust pair — paper: security and integrations cards.
65. Recap — deeper paper: miniature pool and accountability argument.
66. Stories — ink: user-driven testimonial carousel.
67. Final ask — jade: single conversion moment.
68. Footer — ink: brand, tagline, link columns.

## Copy voice

69. No filler: every sentence says something specific about the product.
70. Money language is concrete — targets, dates, contributions, fill lines.
71. Numbers always wear the mono face so they read as data, not decoration.

## Repository map

72. src/index.css — the token file: palette, type scale, motion variables.
73. src/hooks/observers.js — one observer config plus scroll-progress hooks.
74. src/components/ui.jsx — Button, Card, ImagePlaceholder, Avatar.
75. src/components/PoolViz.jsx — the signature visualization and NavVessel.
76. src/components/Navbar…Footer — one file per page section.
77. src/pages/AuthPage.jsx — the centered login/signup box routes.
78. src/LandingPage.jsx — composition plus the reveal system mount.
79. src/App.jsx — the router: /, /login, /signup.

## Running it

80. npm install, then npm run dev for the Vite server on port 5173.

## Acceptance this build satisfies

81. Zero legacy filler copy remains in the DOM.
82. Reveals reverse on upward scroll and hold on downward exit.
83. Reduced-motion users get opacity-only, instant content.
84. 360px renders without horizontal overflow.
85. No image files, no image URLs, one labeled placeholder component.
