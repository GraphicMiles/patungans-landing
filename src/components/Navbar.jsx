import Placeholder from './Placeholder.jsx';

const LINKS = ['Service', 'Product', 'Blog', 'About Us'];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-mist/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <Placeholder label="logo" dark className="h-8 w-8 rounded-lg" />
          <span className="text-base font-semibold tracking-tight">Patungans</span>
        </a>

        {/* Center links */}
        <nav className="hidden items-center gap-8 text-sm text-gray-500 md:flex">
          {LINKS.map((link) => (
            <a key={link} href="#" className="transition-colors hover:text-ink">
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#"
          className="rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-black"
        >
          Get a Demo
        </a>
      </div>
    </header>
  );
}
