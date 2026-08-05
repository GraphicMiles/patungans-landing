// Scattered floating icon slots (swap for real icons later)
const ICON_SLOTS = [
  { size: 64, x: '6%', y: '8%' },
  { size: 44, x: '30%', y: '0%' },
  { size: 56, x: '52%', y: '14%' },
  { size: 40, x: '78%', y: '4%' },
  { size: 36, x: '0%', y: '38%' },
  { size: 48, x: '14%', y: '56%' },
  { size: 60, x: '38%', y: '58%' },
  { size: 44, x: '66%', y: '50%' },
  { size: 52, x: '86%', y: '38%' },
];

export default function CTABanner() {
  return (
    // Negative bottom margin makes the banner overlap the dark footer,
    // exactly like the reference design.
    <section className="relative z-10 -mb-24 px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#8CEB9C] via-primary to-primaryDark p-10 shadow-soft sm:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left — copy */}
          <div>
            <h2 className="max-w-sm text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Plan your budget now with your friends together
            </h2>
            <a
              href="#"
              className="mt-8 inline-block rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Download App
            </a>
          </div>

          {/* Right — floating icon placeholders */}
          <div className="relative hidden h-64 sm:block" aria-hidden="true">
            {ICON_SLOTS.map((slot, i) => (
              <div
                key={i}
                data-placeholder="cta icon"
                className="absolute rounded-full border border-dashed border-white/40 bg-white/20"
                style={{ left: slot.x, top: slot.y, width: slot.size, height: slot.size }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
