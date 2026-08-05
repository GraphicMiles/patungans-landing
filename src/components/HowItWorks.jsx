import { ImagePlaceholder } from './ui.jsx';

const STEPS = [
  {
    title: 'Create a pool, set the target',
    body: 'Name the plan and set the amount and the date — a Detty December trip, a group gift, shared rent.',
  },
  {
    title: 'Invite friends, each sets their pace',
    body: 'Everyone joins with their own contribution schedule: weekly, monthly, or whenever it works. No fixed splits, no pressure.',
  },
  {
    title: 'Track it filling, hit it together',
    body: 'The pool updates in real time. You get notified at every milestone — and a gold moment when the target lands.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div data-reveal>
          <p className="text-tiny font-semibold uppercase tracking-widest text-paper/50">How it works</p>
          <h2 className="mt-6 max-w-xl font-display text-display-lg font-bold">
            Three steps from “we should” to “we did”.
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Steps — numbered because it is a genuine sequence */}
          <ol className="space-y-12">
            {STEPS.map((step, index) => (
              <li key={step.title} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }} className="flex gap-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-dark font-mono text-small font-semibold text-jade">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-display-md font-semibold">{step.title}</h3>
                  <p className="mt-3 max-w-md text-small text-paper/60">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Future product screenshot slot */}
          <div data-reveal style={{ '--reveal-delay': '160ms' }}>
            <ImagePlaceholder
              tone="dark"
              brief="app screen — live pool detail with contributor list"
              dimensions="1200×1500, portrait"
              className="aspect-[4/5] w-full rounded-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
