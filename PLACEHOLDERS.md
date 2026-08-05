# Image Placeholder Checklist

Every image slot in the design is rendered with the shared
`src/components/Placeholder.jsx` component (or a `data-placeholder` div for the
CTA icons). Each slot is tagged in the DOM with `data-placeholder="<label>"`,
so you can locate them all with:

```js
document.querySelectorAll('[data-placeholder]');
```

Swap each `<Placeholder … />` for a real `<img />` / asset when ready.

| #  | Slot                          | Size / classes                    | Where                                        |
| -- | ----------------------------- | --------------------------------- | -------------------------------------------- |
| 1  | Logo icon (navbar)            | 32×32, rounded-lg, dark           | `src/components/Navbar.jsx`                  |
| 2  | Logo icon (footer)            | 32×32, rounded-lg, dark           | `src/components/Footer.jsx`                  |
| 3  | Logo icon (network center)    | 80×80, rounded-2xl, dark          | `src/components/SocialProof.jsx`             |
| 4  | Hero phone mockup — main      | 280×560 (sm+), rounded-3xl, -6°   | `src/components/Hero.jsx`                    |
| 5  | Hero phone mockup — back      | 260×540 (sm+), rounded-3xl, +6°   | `src/components/Hero.jsx`                    |
| 6  | Hero avatar circles (×3)      | 36×36, rounded-full               | `src/components/Hero.jsx`                    |
| 7  | App Store badge               | 120×40, rounded-lg, dark          | `src/components/Hero.jsx`                    |
| 8  | Play Store badge              | 120×40, rounded-lg, dark          | `src/components/Hero.jsx`                    |
| 9  | Feature icon — target         | 44×44, rounded-xl, dark           | `src/components/StatsFeatures.jsx`           |
| 10 | Feature icon — chart          | 44×44, rounded-xl, dark           | `src/components/StatsFeatures.jsx`           |
| 11 | Tablet mockup (dark section)  | 300×400, rounded-2xl              | `src/components/DarkFeature.jsx`             |
| 12 | Feature icon — shield         | 48×48, rounded-xl, dark           | `src/components/TwoColumnFeatures.jsx`       |
| 13 | Feature icon — grid           | 48×48, rounded-xl, dark           | `src/components/TwoColumnFeatures.jsx`       |
| 14 | Network diagram avatars (×5)  | 48×48, rounded-full               | `src/components/SocialProof.jsx`             |
| 15 | Testimonial avatars (×3)      | 48×48, rounded-full               | `src/components/Testimonials.jsx`            |
| 16 | CTA floating icons (×9)       | 36–64px circles                   | `src/components/CTABanner.jsx`               |
| 17 | Social icons — fb / tw / ig   | 36×36, rounded-full, dark         | `src/components/Footer.jsx`                  |

Non-image UI glyphs (play triangle, stars, arrows) are inline SVGs and are
**not** placeholders.
