import Placeholder from './Placeholder.jsx';

const FEATURES = [
  {
    icon: 'target icon',
    title: 'Clear targets',
    body: 'You will target the unanimity with a clear division and target with a very clear set time',
  },
  {
    icon: 'chart icon',
    title: 'Promising progress',
    body: 'You can monitor the progress of your gathering along with your friends who are planning it',
  },
];

export default function StatsFeatures() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-4 lg:grid-cols-2 lg:gap-20">
      {/* Left — heading + stats */}
      <div>
        <h2 className="max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
          Payment plans made easier together
        </h2>
        <div className="mt-10 flex gap-14">
          <div>
            <p className="text-3xl font-bold text-primaryDark">2.3M +</p>
            <p className="mt-1 text-sm text-gray-500">Downloaded</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primaryDark">4.9</p>
            <p className="mt-1 text-sm text-gray-500">Ratings</p>
          </div>
        </div>
      </div>

      {/* Right — feature list */}
      <div className="divide-y divide-gray-200">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="py-7 first:pt-0 last:pb-0">
            <div className="flex items-center gap-4">
              <Placeholder label={feature.icon} dark className="h-11 w-11 rounded-xl" />
              <h3 className="font-semibold">{feature.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
