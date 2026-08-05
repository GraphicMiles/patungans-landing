/* Shared primitives — one implementation per pattern, used by every section. */

const BUTTON_VARIANTS = {
  primary: 'bg-jade text-paper hover:bg-jade-deep',
  secondary: 'border border-line bg-transparent text-ink hover:border-ink',
  onInk: 'border border-line-dark bg-transparent text-paper hover:border-paper',
  inverse: 'bg-ink text-paper hover:bg-ink-raise',
};

export function Button({ variant = 'primary', href, onClick, children, className = '', type }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-button px-6 py-3 text-small font-semibold transition-colors duration-200 ${BUTTON_VARIANTS[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? 'button'} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function Card({ tone = 'paper', className = '', children }) {
  const tones = {
    paper: 'bg-paper border border-line',
    'paper-deep': 'bg-paper-deep border border-line',
    ink: 'bg-ink-raise border border-line-dark',
  };
  return <div className={`rounded-card p-8 ${tones[tone]} ${className}`}>{children}</div>;
}

/**
 * §6 convention — every future image slot. Labeled, bordered, no network,
 * no unlabeled gray boxes. States exact dimensions + content brief.
 */
export function ImagePlaceholder({ brief, dimensions, tone = 'light', className = '' }) {
  const tones = {
    light: 'border-line text-ink/60',
    dark: 'border-line-dark text-paper/60',
  };
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${brief}, ${dimensions}`}
      className={`flex items-center justify-center border border-dashed p-6 text-center ${tones[tone]} ${className}`}
    >
      <span className="font-mono text-tiny tracking-wide">
        [ IMAGE — {brief}, {dimensions} ]
      </span>
    </div>
  );
}

const AVATAR_TONES = ['bg-coral text-paper', 'bg-jade text-paper', 'bg-gold text-ink'];

/** Initials avatar — the page's stand-in for contributor photos. */
export function Avatar({ name, className = 'h-10 w-10 text-tiny', tone }) {
  const picked = AVATAR_TONES[tone ?? hashOf(name)];
  return (
    <span
      aria-label={name}
      className={`${picked} flex shrink-0 items-center justify-center rounded-full font-semibold ${className}`}
    >
      {initialsOf(name)}
    </span>
  );
}

function hashOf(name) {
  return (name.charCodeAt(0) + (name.charCodeAt(1) || 0)) % AVATAR_TONES.length;
}

function initialsOf(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}
