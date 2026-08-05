import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui.jsx';
import { NavVessel } from './PoolViz.jsx';
import { usePageProgress } from '../hooks/observers.js';

const LINKS = [
  { label: 'How it works', href: '#how' },
  { label: 'Trust', href: '#trust' },
  { label: 'Stories', href: '#stories' },
  { label: 'About us', href: '#about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const progress = usePageProgress();

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur transition-all duration-300 ${
        condensed ? 'border-line' : 'border-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          condensed ? 'h-14' : 'h-16 sm:h-20'
        }`}
      >
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5">
          <NavVessel progress={progress} />
          <span className="font-display text-body-lg font-bold tracking-tight">Patungans</span>
        </Link>

        {/* Center links */}
        <nav className="hidden items-center gap-8 text-small font-medium text-ink/60 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login" className="rounded-button px-4 py-2 text-small font-semibold text-ink/70 transition-colors hover:text-ink">
            Log in
          </Link>
          <Button href="#waitlist" className="px-5 py-2.5">
            Join the waitlist
          </Button>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-button text-ink transition-colors hover:bg-paper-deep md:hidden"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-body`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-line bg-paper px-6 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-button px-3 py-2.5 text-small font-medium text-ink/70 transition-colors hover:bg-paper-deep hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button href="/login" variant="secondary" onClick={() => setMenuOpen(false)}>
              Log in
            </Button>
            <Button href="#waitlist" onClick={() => setMenuOpen(false)}>
              Join the waitlist
            </Button>
          </div>
        </div>
      )}

      {/* Slim jade scroll-progress bar */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-0.5 bg-jade"
        style={{ width: `${Math.round(progress * 1000) / 10}%` }}
      />
    </header>
  );
}
