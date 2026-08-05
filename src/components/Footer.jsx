const COLUMNS = [
  { title: 'About', links: ['About us', 'Features', 'Blog', 'Download'] },
  { title: 'Company', links: ['How we work', 'Press Room', 'Jobs', 'Community'] },
  { title: 'Legal', links: ['Terms of use', 'Privacy Policy', 'Security Policy', 'Cookie Settings'] },
];

const SOCIALS = [
  { icon: 'fa-facebook-f', label: 'Facebook' },
  { icon: 'fa-twitter', label: 'Twitter' },
  { icon: 'fa-instagram', label: 'Instagram' },
];

export default function Footer() {
  return (
    // Extra top padding: the CTA banner overlaps into this dark band.
    <footer className="bg-ink pb-8 pt-44 text-sm text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-2.5 md:justify-start">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <i className="fa-solid fa-infinity text-sm text-primary" />
            </span>
            <span className="font-display text-base font-bold text-white">Patungans</span>
          </div>
          <p className="mx-auto mt-5 max-w-xs leading-relaxed md:mx-0">
            A joint venture is an application to collect fees from an agreed plan
          </p>
          <div className="mt-6 flex justify-center gap-3 md:justify-start">
            {SOCIALS.map((social) => (
              <a
                key={social.icon}
                href="#"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-300 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
              >
                <i className={`fa-brands ${social.icon} text-xs`} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((column) => (
          <div key={column.title} className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-white">{column.title}</h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
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
