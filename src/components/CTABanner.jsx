// Floating icon bubbles (Font Awesome), scattered like the reference design
const ICON_SLOTS = [
  { icon: 'fa-car', size: 64, x: '6%', y: '8%' },
  { icon: 'fa-graduation-cap', size: 44, x: '30%', y: '0%' },
  { icon: 'fa-plane', size: 56, x: '52%', y: '14%' },
  { icon: 'fa-cart-shopping', size: 40, x: '78%', y: '4%' },
  { icon: 'fa-book-open', size: 36, x: '0%', y: '40%' },
  { icon: 'fa-house', size: 48, x: '14%', y: '58%' },
  { icon: 'fa-briefcase', size: 60, x: '38%', y: '56%' },
  { icon: 'fa-camera', size: 44, x: '66%', y: '50%' },
  { icon: 'fa-music', size: 52, x: '86%', y: '36%' },
];

export default function CTABanner() {
  return (
    // Negative bottom margin makes the banner overlap the dark footer,
    // exactly like the reference design.
    <section className="relative z-10 -mb-24 px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#8CEB9C] via-primary to-primaryDark p-10 sm:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left — copy */}
          <div>
            <h2 className="max-w-sm font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Plan your budget now with your friends together
            </h2>
            <a
              href="#"
              className="mt-8 inline-block rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Download App
            </a>
          </div>

          {/* Right — floating icons */}
          <div className="relative hidden h-64 sm:block" aria-hidden="true">
            {ICON_SLOTS.map((slot) => (
              <span
                key={slot.icon}
                className="absolute flex items-center justify-center rounded-full bg-white/20 text-white"
                style={{ left: slot.x, top: slot.y, width: slot.size, height: slot.size }}
              >
                <i className={`fa-solid ${slot.icon} text-sm`} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
