import { useEffect, useState } from 'react';
import WaitlistForm from './WaitlistForm.jsx';
import { Section } from './ui.jsx';

const LAUNCH = new Date('2026-10-01T09:00:00+01:00').getTime();

function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, LAUNCH - now);
  const units = [
    { label: 'days', value: Math.floor(diff / 86400000) },
    { label: 'hours', value: Math.floor(diff / 3600000) % 24 },
    { label: 'mins', value: Math.floor(diff / 60000) % 60 },
    { label: 'secs', value: Math.floor(diff / 1000) % 60 },
  ];

  return (
    <div className="flex justify-center gap-8" role="timer" aria-label="Time until the Lagos launch">
      {units.map((unit) => (
        <div key={unit.label}>
          <p className="font-mono text-mono-lg font-semibold text-paper">
            {String(unit.value).padStart(2, '0')}
          </p>
          <p className="mt-1 text-tiny uppercase tracking-widest text-paper/70">{unit.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function FinalCTA() {
  return (
    <Section id="cta" tone="jade" narrow className="text-center">
      <div data-reveal>
        <Countdown />
        <h2 className="mt-10 font-display text-display-lg font-bold">Be first in the pool.</h2>
        <p className="mx-auto mt-6 max-w-md text-body text-paper/80">
          The Lagos cohort opens 1 October 2026, then Abuja and Port Harcourt. Waitlist members
          get in first — in order, and ahead of schedule for every friend they bring.
        </p>
        <div className="mx-auto flex max-w-md justify-center">
          <WaitlistForm tone="jade" />
        </div>
        <p className="mt-8 text-tiny text-paper/70">
          Free to join · No card required · Leave anytime
        </p>
      </div>
    </Section>
  );
}
