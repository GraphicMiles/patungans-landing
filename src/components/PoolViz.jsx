/* The signature element: contribution nodes connect to a central vessel
   that fills with scroll progress. Pure SVG/CSS, no images, no continuous
   motion — the fill is driven entirely by scroll position. */

const CONTRIBUTORS = [
  { name: 'Ada Obi', x: 70, y: 66 },
  { name: 'Kunle Ade', x: 46, y: 196 },
  { name: 'Tola Bello', x: 96, y: 322 },
  { name: 'Bola Ade', x: 452, y: 74 },
  { name: 'Zainab Musa', x: 468, y: 214 },
];

const VESSEL = { x: 208, y: 128, w: 104, h: 208, r: 16 };
const INNER = { x: 214, y: 134, w: 92, h: 196, r: 12 };
const MOUTH = { x: 260, y: 128 };

function pathFor(point) {
  const midY = MOUTH.y - 40;
  return `M ${point.x} ${point.y} C ${point.x} ${midY}, ${MOUTH.x - 60} ${midY}, ${MOUTH.x} ${MOUTH.y}`;
}

function initialsOf(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function PoolViz({ percent, target = 1500, compact = false }) {
  const clamped = Math.min(100, Math.max(0, percent));
  const fillHeight = (INNER.h * clamped) / 100;
  const fillY = INNER.y + INNER.h - fillHeight;
  const amount = Math.round((target * clamped) / 100);

  return (
    <figure className="w-full">
      <svg viewBox="0 0 520 400" className="h-auto w-full" aria-hidden="true">
        <defs>
          <clipPath id="vessel-clip">
            <rect x={INNER.x} y={INNER.y} width={INNER.w} height={INNER.h} rx={INNER.r} />
          </clipPath>
        </defs>

        {/* Contribution paths */}
        {CONTRIBUTORS.map((person, i) => (
          <path
            key={person.name}
            id={`flow-${i}`}
            d={pathFor(person)}
            fill="none"
            strokeWidth="1.5"
            className="stroke-line"
          />
        ))}

        {/* Travelling dots removed — motion is scroll-driven only */}

        {/* Vessel */}
        <rect
          x={VESSEL.x}
          y={VESSEL.y}
          width={VESSEL.w}
          height={VESSEL.h}
          rx={VESSEL.r}
          fill="none"
          strokeWidth="2"
          className="stroke-ink"
        />
        <g clipPath="url(#vessel-clip)">
          <rect x={INNER.x} y={fillY} width={INNER.w} height={fillHeight} className="fill-jade" />
          {/* target line — gold, milestone only */}
          <line
            x1={INNER.x}
            x2={INNER.x + INNER.w}
            y1={INNER.y + 1}
            y2={INNER.y + 1}
            strokeWidth="2"
            strokeDasharray="4 4"
            className="stroke-gold"
          />
        </g>

        {/* Target-reached badge appears only at 100% */}
        {clamped >= 100 && (
          <g>
            <circle cx={VESSEL.x + VESSEL.w} cy={VESSEL.y} r="14" className="fill-gold" />
            <path
              d={`M ${VESSEL.x + VESSEL.w - 6} ${VESSEL.y} l 4 5 l 8 -9`}
              fill="none"
              strokeWidth="2.5"
              className="stroke-ink"
            />
          </g>
        )}

        {/* Contributor nodes */}
        {CONTRIBUTORS.map((person) => (
          <g key={person.name}>
            <circle cx={person.x} cy={person.y} r="24" strokeWidth="1.5" className="fill-paper stroke-line" />
            <text
              x={person.x}
              y={person.y + 4}
              textAnchor="middle"
              className="fill-ink font-mono"
              fontSize="13"
              fontWeight="600"
            >
              {initialsOf(person.name)}
            </text>
          </g>
        ))}
      </svg>

      {!compact && (
        <figcaption className="mt-4 flex items-baseline justify-center gap-4">
          <span className="font-mono text-mono-lg font-semibold text-jade">{Math.round(clamped)}%</span>
          <span className="font-mono text-mono text-ink/60">
            ₦{amount.toLocaleString('en-US')} of ₦{target.toLocaleString('en-US')}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

/** Miniature vessel for the nav — fills with page scroll progress. */
export function NavVessel({ progress }) {
  const h = 14 * progress;
  return (
    <svg viewBox="0 0 14 20" className="h-5 w-3.5" aria-hidden="true">
      <rect x="1" y="1" width="12" height="18" rx="3" fill="none" strokeWidth="1.5" className="stroke-ink" />
      <rect x="3" y={17 - h} width="8" height={h} className="fill-jade" />
    </svg>
  );
}
