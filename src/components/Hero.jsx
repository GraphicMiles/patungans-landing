import WaitlistForm from './WaitlistForm.jsx';
import PoolViz from './PoolViz.jsx';
import { Section } from './ui.jsx';
import { useSectionProgress } from '../hooks/observers.js';

export default function Hero() {
  const [sectionRef, progress] = useSectionProgress();

  return (
    <Section className="" tight id="top">
      <div ref={sectionRef} className="grid items-center gap-16 lg:grid-cols-2">
        {/* Copy + waitlist capture */}
        <div data-reveal>
          <p className="text-tiny font-semibold uppercase tracking-widest text-jade">
            Patungans · launching in Lagos
          </p>
          <h1 className="mt-6 font-display text-display-xl font-bold text-ink">
            Pool money with friends toward one shared target.
          </h1>
          <p className="mt-6 max-w-md text-body-lg text-ink/70">
            Patungans ends the group-chat money scramble. Everyone contributes at their own
            pace, every naira is visible to every member, and the pool releases only when the
            target is hit.
          </p>

          <WaitlistForm anchor />

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

        {/* Product, visible above the fold — fill scrubs with scroll */}
        <div data-reveal style={{ '--reveal-delay': '120ms' }}>
          <PoolViz percent={progress * 100} target={650000} />
        </div>
      </div>
    </Section>
  );
}
