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
    <footer id="about" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-button border border-line-dark">
              <i className="fa-solid fa-infinity text-small text-jade" />
            </span>
            <span className="font-display text-body-lg font-bold">Patungans</span>
          </div>
          <p className="mt-5 max-w-xs text-small leading-relaxed text-paper/60">
            The shared pool for plans you make together.
          </p>
          <p className="mt-3 text-tiny text-paper/40">
            Built in Yaba, Lagos · hello@patungans.app · NDPR-compliant
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.icon}
                href="#"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line-dark text-paper/70 transition-colors hover:border-paper hover:text-paper"
              >
                <i className={`fa-brands ${social.icon} text-tiny`} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h3 className="text-tiny font-semibold uppercase tracking-widest text-paper/50">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-small text-paper/70 transition-colors hover:text-paper">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl border-t border-line-dark px-6 py-6 text-center text-tiny text-paper/40">
        © 2026 Patungans. All rights reserved.
      </div>
    </footer>
  );
}
