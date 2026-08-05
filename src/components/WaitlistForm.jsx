import { useState } from 'react';
import { Avatar, Button } from './ui.jsx';

/* UI-only waitlist capture — deterministic ticket so the flow feels real
   without a backend. Swap `submit` for an API call when one exists. */

const IN_LINE = 4832;

const LINE_AVATARS = ['Chidera Okafor', 'Aminata Bello', 'Tunde Bakare', 'Zainab Musa'];

function hashOf(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export default function WaitlistForm({ tone = 'light' }) {
  const [email, setEmail] = useState('');
  const [ticket, setTicket] = useState(null);
  const [copied, setCopied] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const hash = hashOf(email.trim().toLowerCase());
    setTicket({
      position: 2347 + (hash % 1180),
      code: `PTG-${(hash % 1679616).toString(36).toUpperCase().padStart(4, '0')}`,
    });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(`https://patungans.app/r/${ticket.code}`);
    } catch {
      /* clipboard unavailable — the code stays visible to type manually */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  if (ticket) {
    return (
      <div className="mt-10 w-full max-w-md rounded-card border border-line bg-paper p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-tiny font-semibold uppercase tracking-widest text-ink/50">
            Patungans · Early access
          </p>
          <p className="font-mono text-mono-lg font-semibold text-jade">
            #{ticket.position.toLocaleString('en-US')}
          </p>
        </div>
        <p className="mt-3 text-small text-ink/70">
          You are in line. The Lagos cohort opens 1 October 2026 — we will email you the moment
          your spot opens.
        </p>
        <div className="my-5 border-t border-dashed border-line" />
        <p className="text-small font-semibold text-ink">Move up 50 spots per friend</p>
        <p className="mt-1 text-tiny text-ink/60">
          Share your link — every friend who joins pulls you forward in the queue.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <code className="font-mono text-small text-ink">patungans.app/r/{ticket.code}</code>
          <Button variant="secondary" onClick={copyLink} className="px-4 py-2">
            {copied ? 'Copied' : 'Copy link'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form id="waitlist" onSubmit={submit} className="mt-10 w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="waitlist-email">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-button border border-line bg-paper px-4 py-3 text-small text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-jade"
        />
        <Button type="submit" variant={tone === 'jade' ? 'inverse' : 'primary'}>
          Join the waitlist
        </Button>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex -space-x-2">
          {LINE_AVATARS.map((name) => (
            <Avatar key={name} name={name} className="h-7 w-7 text-tiny" ring="ring-2 ring-paper" />
          ))}
        </div>
        <p className="text-tiny text-ink/60">
          <span className="font-semibold text-ink">{IN_LINE.toLocaleString('en-US')}</span> already
          in line — Lagos · Abuja · Port Harcourt
        </p>
      </div>
    </form>
  );
}
