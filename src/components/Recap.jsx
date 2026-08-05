import PoolViz from './PoolViz.jsx';
import { useSectionProgress } from '../hooks/observers.js';

export default function Recap() {
  const [sectionRef, progress] = useSectionProgress();

  return (
    <section ref={sectionRef} className="border-y border-line bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 sm:py-32 lg:grid-cols-2">
        {/* Miniature signature visualization, scrubbed in its own section */}
        <div data-reveal className="order-2 lg:order-1">
          <PoolViz percent={progress * 100} compact />
        </div>

        <div data-reveal style={{ '--reveal-delay': '120ms' }} className="order-1 lg:order-2">
          <p className="text-tiny font-semibold uppercase tracking-widest text-jade">Why pooling works</p>
          <h2 className="mt-6 font-display text-display-lg font-bold text-ink">Shared targets stick.</h2>
          <p className="mt-6 max-w-md text-body text-ink/70">
            A pool makes the plan visible to everyone in it. Contributors who can watch the fill
            line move add money more consistently than people saving alone — accountability is
            the feature, not the spreadsheet.
          </p>
          <p className="mt-8 font-mono text-mono text-ink/60">
            3 in 4 pools reach their target before the date.
          </p>
        </div>
      </div>
    </section>
  );
}
