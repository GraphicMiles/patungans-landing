import { DeviceCard } from './PhoneMockups.jsx';

export default function DarkFeature() {
  return (
    <section className="overflow-x-clip px-6">
      <div className="relative mx-auto max-w-6xl rounded-3xl bg-secondary px-6 py-14 sm:px-12">
        {/* Pill overlapping the top edge */}
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-6 py-2 text-sm font-semibold text-primaryDark">
          Monitor easily
        </span>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          {/* Left — copy */}
          <div>
            <h2 className="max-w-md font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Connecting your beliefs with discourse with friends
            </h2>
            <p className="mt-4 text-sm text-gray-400">Stay up to date on the progress of your plan</p>
            <a
              href="#"
              className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primaryDark"
            >
              Learn More
            </a>
          </div>

          {/* Right — device mockup */}
          <div className="px-6 sm:px-10">
            <DeviceCard />
          </div>
        </div>
      </div>
    </section>
  );
}
