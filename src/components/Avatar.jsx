const COLORS = [
  'bg-rose-400',
  'bg-amber-400',
  'bg-emerald-400',
  'bg-sky-400',
  'bg-violet-400',
  'bg-fuchsia-400',
];

function initialsOf(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/** Clean initials avatar — stands in for user photos. */
export default function Avatar({ name, className = 'h-10 w-10 text-xs', ring = '' }) {
  const color = COLORS[(name.charCodeAt(0) + (name.charCodeAt(1) || 0)) % COLORS.length];
  return (
    <span
      aria-label={name}
      className={`${color} ${ring} flex shrink-0 items-center justify-center rounded-full font-semibold text-white ${className}`}
    >
      {initialsOf(name)}
    </span>
  );
}
