import { useState } from 'react';
import AuthModal from './AuthModal.jsx';

const LINKS = ['Service', 'Product', 'Blog', 'About Us'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, setAuth] = useState({ open: false, tab: 'login' });

  const openAuth = (tab) => {
    setAuth({ open: true, tab });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-mist/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink">
            <i className="fa-solid fa-infinity text-sm text-primary" />
          </span>
          <span className="text-base font-bold tracking-tight">Patungans</span>
        </a>

        {/* Center links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-500 md:flex">
          {LINKS.map((link) => (
            <a key={link} href="#" className="transition-colors hover:text-ink">
              {link}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => openAuth('login')}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:text-ink"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => openAuth('signup')}
            className="rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-gray-200/70 md:hidden"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-200/70 bg-mist px-6 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col">
            {LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200/70 hover:text-ink"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => openAuth('login')}
              className="rounded-lg border border-gray-300 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200/70"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => openAuth('signup')}
              className="rounded-lg bg-ink py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      <AuthModal
        open={auth.open}
        tab={auth.tab}
        onClose={() => setAuth((current) => ({ ...current, open: false }))}
        onTabChange={(tab) => setAuth({ open: true, tab })}
      />
    </header>
  );
}
