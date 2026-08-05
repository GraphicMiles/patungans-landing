import Avatar from './Avatar.jsx';
import Reveal from './Reveal.jsx';

// Anchor points on a 0–100% grid (center = 50,50) so the diagram scales
// down on small screens without overflowing.
const AVATARS = [
  { name: 'Ada Obi', x: 19.4, y: 18.1 },
  { name: 'Kunle Ade', x: 78.8, y: 23.1 },
  { name: 'Tola Bello', x: 85, y: 60 },
  { name: 'Bola Ade', x: 47.5, y: 86.9 },
  { name: 'Zainab Musa', x: 15, y: 64.4 },
];

export default function SocialProof() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 lg:grid-cols-2">
      {/* Left — network diagram */}
      <Reveal className="relative mx-auto h-72 w-72 max-w-full sm:h-80 sm:w-80">
        <div className="absolute inset-0 rounded-full bg-gray-200/50" />
        <svg
          className="absolute inset-0 h-full w-full text-gray-300"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          aria-hidden="true"
        >
          {AVATARS.map((point) => (
            <line key={point.name} x1="50" y1="50" x2={point.x} y2={point.y} />
          ))}
        </svg>

        {/* Center logo */}
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-ink sm:h-20 sm:w-20">
          <i className="fa-solid fa-infinity text-xl text-primary sm:text-2xl" />
        </span>

        {/* Connected avatars */}
        {AVATARS.map((point) => (
          <span
            key={point.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          >
            <Avatar name={point.name} className="h-10 w-10 text-[10px] sm:h-12 sm:w-12 sm:text-xs" ring="ring-4 ring-mist" />
          </span>
        ))}
      </Reveal>

      {/* Right — copy (centered on mobile) */}
      <Reveal delay={150} className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <h2 className="max-w-md font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Connecting with each other for the same purpose
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-500">
          You will target the unanimity with a clear division and target with a very clear set time
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
        >
          Learn More
        </a>
      </Reveal>
    </section>
  );
}
