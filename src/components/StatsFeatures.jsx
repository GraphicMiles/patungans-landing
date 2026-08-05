import Reveal from './Reveal.jsx';

const FEATURES = [
  {
    icon: 'fa-bullseye',
    title: 'Clear targets',
    body: 'You will target the unanimity with a clear division and target with a very clear set time',
  },
  {
    icon: 'fa-chart-line',
    title: 'Promising progress',
    body: 'You can monitor the progress of your gathering along with your friends who are planning it',
  },
];

export default function StatsFeatures() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-4 lg:grid-cols-2 lg:gap-20">
      {/* Left — heading + stats (centered on mobile) */}
      <Reveal className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <h2 className="max-w-md font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Payment plans made easier together
        </h2>
        <div className="mt-10 flex gap-14">
          <div>
            <p className="font-display text-3xl font-bold text-primaryDark">2.3M +</p>
            <p className="mt-1 text-sm text-gray-500">Downloaded</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-primaryDark">4.9</p>
            <p className="mt-1 text-sm text-gray-500">Ratings</p>
          </div>
        </div>
      </Reveal>

      {/* Right — feature list */}
      <Reveal delay={150} className="w-full">
        <div className="divide-y divide-gray-200">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="py-8 first:pt-0 last:pb-0">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-primary">
                  <i className={`fa-solid ${feature.icon}`} />
                </span>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">{feature.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
