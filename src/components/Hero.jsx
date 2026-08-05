import { Button } from './ui.jsx';
import PoolViz from './PoolViz.jsx';
import { useSectionProgress } from '../hooks/observers.js';

export default function Hero() {
  const [sectionRef, progress] = useSectionProgress();

  return (
    <section ref={sectionRef} className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 sm:py-28 lg:grid-cols-2">
        {/* Copy */}
        <div data-reveal>
          <p className="font-mono text-tiny font-semibold uppercase tracking-widest text-jade">
            Patungan — pooled money between friends
          </p>
          <h1 className="mt-6 font-display text-display-xl font-bold text-ink">
            Plan it together. Fund it together.
          </h1>
          <p className="mt-6 max-w-md text-body-lg text-ink/70">
            Patungans is the shared pool for friends: set one target — a trip, a gift, a
            subscription — contribute on your own schedule, and watch the pool fill together.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/signup">Start a pool</Button>
            <Button href="#how" variant="secondary">
              See how it works
            </Button>
          </div>
          <p className="mt-8 font-mono text-tiny text-ink/50">
            Free to start · 12,480 pools funded · no card required
          </p>
        </div>

        {/* Signature pool visualization — fill scrubs with scroll */}
        <div data-reveal style={{ '--reveal-delay': '120ms' }}>
          <PoolViz percent={progress * 100} />
        </div>
      </div>
    </section>
  );
}
