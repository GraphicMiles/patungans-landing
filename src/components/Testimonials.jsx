import { useRef } from 'react';
import { Avatar, Card } from './ui.jsx';

const TESTIMONIALS = [
  {
    name: 'Ramuel Smith',
    meta: 'Wedding gift pool · 9 days',
    quote:
      'Nine days, fully funded. Everyone could see who had added what, so nobody had to chase anybody — the pool did the awkward part for us.',
  },
  {
    name: 'Queenita Warless',
    meta: 'Household pool · ongoing',
    quote:
      'Our flat runs groceries and cleaning through one pool. The fill line ended the “who owes who” conversation completely.',
  },
  {
    name: 'Wizzard Yanto',
    meta: 'Bali surf trip · 6 contributors',
    quote:
      'I contributed weekly, the others monthly. The target didn’t care, and neither did the app — we hit it eleven days early.',
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' });
  };

  return (
    <section id="stories" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div data-reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-tiny font-semibold uppercase tracking-widest text-paper/50">Stories</p>
            <h2 className="mt-6 font-display text-display-lg font-bold">Pools that already landed.</h2>
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
                  <p className="mt-0.5 font-mono text-tiny text-coral">{entry.meta}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
