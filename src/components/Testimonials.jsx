import { useRef } from 'react';
import { Avatar, Card, Section } from './ui.jsx';

/* Pre-launch pilot stories — replace with verified user stories at launch. */
const TESTIMONIALS = [
  {
    name: 'Chidera Okafor',
    meta: 'Detty December trip · 9 friends · ₦650k',
    quote:
      'Nine of us pooled the Calabar trip without one awkward chat. Everyone watched the fill line move, so nobody had to chase anybody for balance.',
  },
  {
    name: 'Aminata Bello',
    meta: 'Wedding gift pool · 6 days',
    quote:
      'We funded my best friend’s aso-ebi and gift pool in six days. The ledger showed who added what — no suspicion, no “I sent it already” stories.',
  },
  {
    name: 'Tunde Bakare',
    meta: 'Flat supplies pool · ongoing',
    quote:
      'My flat runs light, water and cleaning through one pool. I add mine on salary week, my roommate adds his whenever — the target doesn’t mind.',
  },
];

const COHORTS = [
  { city: 'Lagos', date: '1 Oct 2026', status: 'opens first', live: true },
  { city: 'Abuja', date: '15 Nov 2026', status: 'cohort 2', live: false },
  { city: 'Port Harcourt', date: '9 Jan 2027', status: 'cohort 3', live: false },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' });
  };

  return (
    <Section id="stories" tone="ink">
      <div data-reveal className="flex items-end justify-between gap-6">
        <div>
          <p className="text-tiny font-semibold uppercase tracking-widest text-paper/60">
            Pilot circles
          </p>
          <h2 className="mt-6 font-display text-display-lg font-bold">Pools that already landed.</h2>
          <p className="mt-4 max-w-md text-small text-paper/60">
            Stories from three pilot groups across Lagos and Abuja.
          </p>
        </div>
        {/* User-controlled only — no autoplay */}
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous stories"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-paper transition-colors hover:border-paper"
          >
            <i className="fa-solid fa-arrow-left text-small" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next stories"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-paper transition-colors hover:border-paper"
          >
            <i className="fa-solid fa-arrow-right text-small" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        data-reveal
        className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
      >
        {TESTIMONIALS.map((entry) => (
          <Card key={entry.name} tone="ink" className="w-72 max-w-[85vw] shrink-0 snap-start">
            <p className="text-body text-paper/80">{entry.quote}</p>
            <div className="mt-8 flex items-center gap-3">
              <Avatar name={entry.name} className="h-10 w-10 text-tiny" />
              <div>
                <p className="text-small font-semibold text-paper">{entry.name}</p>
                <p className="mt-0.5 text-tiny font-semibold text-coral">{entry.meta}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Launch timeline */}
      <div data-reveal className="mt-16 grid gap-6 border-t border-line-dark pt-10 sm:grid-cols-3">
        {COHORTS.map((cohort) => (
          <div key={cohort.city}>
            <p className="flex items-center gap-2 text-body font-semibold text-paper">
              {cohort.city}
              {cohort.live && <span className="h-2 w-2 rounded-full bg-jade" aria-hidden="true" />}
            </p>
            <p className="mt-1 text-small text-paper/60">
              {cohort.date} · {cohort.status}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
