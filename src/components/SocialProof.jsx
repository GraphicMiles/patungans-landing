import Avatar from './Avatar.jsx';

// Avatar anchor points on the 320×320 diagram (center = 160,160)
const AVATARS = [
  { name: 'Ada Obi', x: 62, y: 58 },
  { name: 'Kunle Ade', x: 252, y: 74 },
  { name: 'Tola Bello', x: 272, y: 192 },
  { name: 'Bola Ade', x: 152, y: 278 },
  { name: 'Zainab Musa', x: 48, y: 206 },
];

export default function SocialProof() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 lg:grid-cols-2">
      {/* Left — network diagram */}
      <div className="relative mx-auto h-80 w-80">
        <div className="absolute inset-0 rounded-full bg-gray-200/50" />
        <svg
          className="absolute inset-0 h-full w-full text-gray-300"
          viewBox="0 0 320 320"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          {AVATARS.map((point) => (
            <line key={point.name} x1="160" y1="160" x2={point.x} y2={point.y} />
          ))}
        </svg>

        {/* Center logo */}
        <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-ink">
          <i className="fa-solid fa-infinity text-2xl text-primary" />
        </span>

        {/* Connected avatars */}
        {AVATARS.map((point) => (
          <span
            key={point.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: point.x, top: point.y }}
          >
            <Avatar name={point.name} className="h-12 w-12 text-xs" ring="ring-4 ring-mist" />
          </span>
        ))}
      </div>

      {/* Right — copy */}
      <div>
        <h2 className="max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
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
      </div>
    </section>
  );
}
