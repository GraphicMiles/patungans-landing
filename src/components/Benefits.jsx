import PoolViz from './PoolViz.jsx';
import { Section } from './ui.jsx';
import { useSectionProgress } from '../hooks/observers.js';

const PERKS = [
  {
    title: 'Queue priority',
    body: 'Waitlist members are admitted first, in order, as each city opens.',
  },
  {
    title: 'Founding member status',
    body: 'Cohort 1 keeps a permanent founding badge and a year of premium, free.',
  },
  {
    title: 'Referral jumps',
    body: 'Every friend who joins moves you up 50 spots — up to 500.',
  },
  {
    title: 'Shape the product',
    body: 'Early members vote on the first feature drops after launch.',
  },
];

export default function Benefits() {
  const [vizRef, progress] = useSectionProgress();

  return (
    <Section id="benefits" tone="paper-deep">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div data-reveal>
          <p className="text-tiny font-semibold uppercase tracking-widest text-jade">
            Why join now
          </p>
          <h2 className="mt-6 font-display text-display-lg font-bold text-ink">
            Early members get more than early access.
          </h2>
          <ul className="mt-12 space-y-8">
            {PERKS.map((perk, index) => (
              <li
                key={perk.title}
                data-reveal
                style={{ '--reveal-delay': `${index * 60}ms` }}
                className="flex gap-6"
              >
                <span className="font-mono text-small font-semibold text-jade">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-body font-semibold text-ink">{perk.title}</h3>
                  <p className="mt-1 max-w-sm text-small text-ink/70">{perk.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div ref={vizRef} data-reveal style={{ '--reveal-delay': '120ms' }}>
          <PoolViz percent={progress * 100} target={650000} compact />
        </div>
      </div>
    </Section>
  );
}
