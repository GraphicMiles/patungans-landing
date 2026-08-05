import { Card } from './ui.jsx';

const CARDS = [
  {
    title: 'Security and compliance',
    body: 'Every contribution sits in a regulated partner account under a per-pool ledger, and each transfer is encrypted in transit and at rest — the balance in a pool belongs to its members alone.',
  },
  {
    title: 'Integrations',
    body: 'Patungans connects to the wallets you already use — bank transfer, debit card, and e-wallets — so adding to a pool takes one tap, not a new account.',
  },
];

export default function TrustPair() {
  return (
    <section id="trust" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div data-reveal>
          <p className="font-mono text-tiny font-semibold uppercase tracking-widest text-jade">Trust and mechanics</p>
          <h2 className="mt-6 max-w-xl font-display text-display-lg font-bold text-ink">
            Built so money between friends stays friendly.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CARDS.map((card, index) => (
            <div key={card.title} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }}>
              <Card className="h-full">
                <h3 className="font-display text-display-md font-semibold text-ink">{card.title}</h3>
                <p className="mt-4 text-small text-ink/70">{card.body}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
