import { ImagePlaceholder, Section } from './ui.jsx';

const PAINS = [
  'One friend fronts the money and quietly becomes the bank.',
  'Balances live in WhatsApp screenshots and memory.',
  'The chase sours the plan — and sometimes the friendship.',
];

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
    title: 'Watch it fill, hit it together',
    body: 'The pool updates in real time for every member. You are notified at each milestone — and when the target lands, the money releases.',
  },
];

export default function HowItWorks() {
  return (
    <Section id="how" tone="ink">
      {/* Problem */}
      <div data-reveal>
        <p className="text-tiny font-semibold uppercase tracking-widest text-paper/60">
          The problem
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PAINS.map((pain) => (
            <p key={pain} className="max-w-xs text-small text-paper/60">
              {pain}
            </p>
          ))}
        </div>
      </div>

      {/* Solution + sequence */}
      <div data-reveal className="mt-20">
        <p className="text-tiny font-semibold uppercase tracking-widest text-paper/60">
          The fix
        </p>
        <h2 className="mt-6 max-w-xl font-display text-display-lg font-bold">
          One pool, one target, every naira visible.
        </h2>
      </div>

      <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <ol className="space-y-12">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` }}
              className="flex gap-6"
            >
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
    </Section>
  );
}
