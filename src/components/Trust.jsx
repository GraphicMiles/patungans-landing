import { Section } from './ui.jsx';

const POINTS = [
  {
    title: 'Your money, your name',
    body: 'Contributions sit in CBN-licensed partner accounts held under your own name. Patungans never takes possession of your balance.',
  },
  {
    title: 'A ledger every member can see',
    body: 'Every naira in and out is recorded per pool, visible to all members at any time. No side accounts, no hidden math.',
  },
  {
    title: 'Encrypted end to end',
    body: 'Transfers and personal data are encrypted in transit and at rest, on infrastructure audited before launch.',
  },
  {
    title: 'NDPR privacy',
    body: 'We are NDPR-compliant. Your data is never sold, and you can export or delete your account and history at any time.',
  },
  {
    title: 'Licensed rails only',
    body: 'Pools run on CBN-licensed banking and payment partners — Paystack and Flutterwave rails, plus USSD for feature phones.',
  },
  {
    title: 'Leave anytime',
    body: 'Exit a pool and your unspent contribution returns to you. No lock-ins, no exit fees, no wahala.',
  },
];

export default function Trust() {
  return (
    <Section id="trust" tone="paper">
      <div data-reveal>
        <p className="text-tiny font-semibold uppercase tracking-widest text-jade">Trust</p>
        <h2 className="mt-6 max-w-xl font-display text-display-lg font-bold text-ink">
          Your money stays yours. We just keep it visible.
        </h2>
        <p className="mt-6 max-w-lg text-body text-ink/70">
          Plain answers to the only question that matters when money moves between friends.
        </p>
      </div>

      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {POINTS.map((point, index) => (
          <div
            key={point.title}
            data-reveal
            style={{ '--reveal-delay': `${index * 60}ms` }}
            className="flex gap-4"
          >
            <i className="fa-solid fa-check mt-1 text-small text-jade" aria-hidden="true" />
            <div>
              <h3 className="text-body font-semibold text-ink">{point.title}</h3>
              <p className="mt-2 max-w-md text-small text-ink/70">{point.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
