import { useState } from 'react';
import { Section } from './ui.jsx';

const ITEMS = [
  {
    q: 'When does Patungans launch?',
    a: 'The Lagos cohort opens 1 October 2026, followed by Abuja and Port Harcourt. Waitlist members are admitted first, in queue order.',
  },
  {
    q: 'Is joining the waitlist free?',
    a: 'Completely. No card, no commitment — just your email and your place in line. You can leave the queue at any time.',
  },
  {
    q: 'Who gets early access first?',
    a: 'Founding members — the top of the queue and the people who referred their way up — then the queue in order, cohort by cohort.',
  },
  {
    q: 'Will my money be safe once pools go live?',
    a: 'Pools will sit in CBN-licensed partner accounts under a per-pool ledger. Patungans never holds your balance, and we are NDPR-compliant with everything encrypted.',
  },
  {
    q: 'Can I contribute without a smartphone?',
    a: 'Yes. At launch you will be able to add money from any Nigerian bank, card, e-wallet, or USSD code — contributing works on any phone.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section tone="paper-deep" narrow>
      <div data-reveal className="text-center">
        <p className="text-tiny font-semibold uppercase tracking-widest text-jade">Questions</p>
        <h2 className="mt-6 font-display text-display-lg font-bold text-ink">
          Before you join the line.
        </h2>
      </div>

      <div className="mt-14 divide-y divide-line border-y border-line">
        {ITEMS.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q} data-reveal style={{ '--reveal-delay': `${index * 60}ms` }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-body font-semibold text-ink transition-colors hover:text-jade"
              >
                {item.q}
                <i
                  className={`fa-solid fa-plus text-small text-ink/50 transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-reveal ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-small text-ink/70">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
