import { useRef } from 'react';
import Avatar from './Avatar.jsx';

const TESTIMONIALS = [
  { name: 'Ramuel Smith' },
  { name: 'Queenita Warless' },
  { name: 'Wizzard Yanto' },
].map((entry) => ({
  ...entry,
  quote:
    'You will target the unanimity with a clear division and target with a very clear set time',
}));

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    trackRef.current?.scrollBy({ left: direction * 360, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading + arrows */}
        <div className="flex items-center justify-between gap-6">
          <h2 className="max-w-xs font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What our users who have used it say
          </h2>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-ink hover:text-ink"
            >
              <i className="fa-solid fa-arrow-left" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-black"
            >
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>

        {/* Cards — horizontal scroll track */}
        <div ref={trackRef} className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2">
          {TESTIMONIALS.map((entry) => (
            <article
              key={entry.name}
              className="flex w-[300px] shrink-0 snap-start flex-col rounded-xl bg-gray-100 p-6 sm:w-[340px]"
            >
              <div className="flex items-center gap-3">
                <Avatar name={entry.name} className="h-12 w-12 text-sm" />
                <div>
                  <p className="text-sm font-semibold">{entry.name}</p>
                  <div className="mt-1 flex gap-1 text-[11px] text-amber-400" aria-label="Rated 5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">{entry.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
