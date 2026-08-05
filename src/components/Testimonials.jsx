import { useRef } from 'react';
import Placeholder from './Placeholder.jsx';

const TESTIMONIALS = [
  { name: 'Ramuel Smith' },
  { name: 'Queenita Warless' },
  { name: 'Wizzard Yanto' },
].map((t) => ({
  ...t,
  quote:
    'You will target the unanimity with a clear division and target with a very clear set time',
}));

function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.921-.755 1.688-1.538 1.118l-3.367-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.783.57-1.838-.197-1.538-1.118l1.286-3.958a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
    </svg>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    trackRef.current?.scrollBy({ left: direction * 360, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading + arrows */}
        <div className="flex items-end justify-between gap-6">
          <h2 className="max-w-xs text-3xl font-bold tracking-tight sm:text-4xl">
            What our users who have used it say
          </h2>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-ink hover:text-ink"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path d="M19 12H5m6-6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-black"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards — horizontal scroll track */}
        <div ref={trackRef} className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="w-[300px] shrink-0 snap-start rounded-xl bg-gray-100 p-6 shadow-sm sm:w-[340px]"
            >
              <div className="flex items-center gap-3">
                <Placeholder label="avatar" showLabel={false} className="h-12 w-12 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <div className="mt-1 flex gap-0.5 text-amber-400" aria-label="Rated 5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">{t.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
