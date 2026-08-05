import { Button } from './ui.jsx';

export default function FinalCTA() {
  return (
    <section id="cta" className="bg-jade text-paper">
      <div data-reveal className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        {/* Outline vessel motif */}
        <svg viewBox="0 0 28 40" className="mx-auto h-10 w-7" aria-hidden="true">
          <rect x="2" y="2" width="24" height="36" rx="6" fill="none" strokeWidth="2" className="stroke-paper" />
          <line x1="8" x2="20" y1="14" y2="14" strokeWidth="2" className="stroke-paper/60" />
        </svg>
        <h2 className="mt-8 font-display text-display-lg font-bold">Your next plan deserves a pool.</h2>
        <p className="mx-auto mt-6 max-w-md text-body text-paper/80">
          Set the target, invite the friends, watch the fill line move. Patungans handles the
          chasing so you can handle the planning.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/signup" variant="inverse" className="px-8 py-3.5">
            Start a pool
          </Button>
        </div>
        <p className="mt-8 font-mono text-tiny text-paper/70">Free to start · No card required · Two minutes</p>
      </div>
    </section>
  );
}
