import { useCallback, useState } from 'react';
import { Section } from './ui.jsx';
import { usePrefersReducedMotion, useReversible } from '../hooks/observers.js';

/* Count-up numerals in the mono face (numerals only, per the type system).
   Reverses to 0 when scrolled back up past the trigger; renders the final
   value instantly under reduced motion. */
function StatNumber({ value, format }) {
  const [display, setDisplay] = useState(0);
  const reduced = usePrefersReducedMotion();

  const onEnter = useCallback(() => {
    if (reduced) {
      setDisplay(value);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const duration = 900;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, reduced]);

  const onLeaveUp = useCallback(() => setDisplay(0), []);
  const ref = useReversible(onEnter, onLeaveUp);

  return (
    <p ref={ref} className="font-mono text-mono-xl font-semibold text-ink">
      {format(display)}
    </p>
  );
}

/* Pre-launch demo figures — replace with live metrics when the backend lands. */
const STATS = [
  {
    value: 4832,
    format: (n) => Math.round(n).toLocaleString('en-US'),
    label: 'people already on the waitlist',
  },
  {
    value: 214,
    format: (n) => `₦${Math.round(n)}M`,
    label: 'in pool targets pledged before launch',
  },
  {
    value: 14,
    format: (n) => `${Math.round(n)} cities`,
    label: 'represented across Nigeria',
  },
];

export default function StatsStrip() {
  return (
    <Section tone="paper-deep" tight>
      <div className="grid gap-10 text-center sm:grid-cols-3">
        {STATS.map((stat, index) => (
          <div key={stat.label} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }}>
            <StatNumber value={stat.value} format={stat.format} />
            <p className="mt-2 text-small text-ink/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
