import WaitlistForm from './WaitlistForm.jsx';
import PoolViz from './PoolViz.jsx';
import { useSectionProgress } from '../hooks/observers.js';

export default function Hero() {
  const [sectionRef, progress] = useSectionProgress();

  return (
    <section ref={sectionRef} className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 sm:py-28 lg:grid-cols-2">
        {/* Copy + waitlist capture */}
        <div data-reveal>
          <p className="text-tiny font-semibold uppercase tracking-widest text-jade">
            Patungan — pooled money between friends · built in Lagos
          </p>
          <h1 className="mt-6 font-display text-display-xl font-bold text-ink">
            Plan it together. Fund it together.
          </h1>
          <p className="mt-6 max-w-md text-body-lg text-ink/70">
            One target — a Detty December trip, a wedding gift, shared rent — every friend
            contributes on their own schedule, and the pool fills together.
          </p>

          <WaitlistForm />

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#how"
              className="text-small font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-jade"
            >
              See how it works
            </a>
            <p className="text-tiny text-ink/50">Doors open 1 Oct 2026 · Free to join</p>
          </div>
        </div>

        {/* Signature pool visualization — fill scrubs with scroll */}
        <div data-reveal style={{ '--reveal-delay': '120ms' }}>
          <PoolViz percent={progress * 100} target={650000} />
        </div>
      </div>
    </section>
  );
}
