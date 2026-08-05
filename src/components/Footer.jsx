import Placeholder from './Placeholder.jsx';

const COLUMNS = [
  { title: 'About', links: ['About us', 'Features', 'Blog', 'Download'] },
  { title: 'Company', links: ['How we work', 'Press Room', 'Jobs', 'Community'] },
  { title: 'Legal', links: ['Terms of use', 'Privacy Policy', 'Security Policy', 'Cookie Settings'] },
];

const SOCIALS = ['fb', 'tw', 'ig'];

export default function Footer() {
  return (
    // Extra top padding: the CTA banner overlaps into this dark band.
    <footer className="bg-ink pb-8 pt-44 text-sm text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <Placeholder label="logo" dark className="h-8 w-8 rounded-lg" />
            <span className="text-base font-semibold text-white">Patungans</span>
          </div>
          <p className="mt-5 max-w-xs leading-relaxed">
            A joint venture is an application to collect fees from an agreed plan
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((social) => (
              <a key={social} href="#" aria-label={`Patungans on ${social}`}>
                <Placeholder label={social} dark className="h-9 w-9 rounded-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-white">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 px-6 pt-6 text-center text-xs text-gray-500">
        © Copyright 2022 Patungans. All rights reserved.
      </div>
    </footer>
  );
}
