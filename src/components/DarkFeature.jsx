import Placeholder from './Placeholder.jsx';

export default function DarkFeature() {
  return (
    <section className="px-6">
      <div className="relative mx-auto max-w-6xl rounded-3xl bg-secondary px-8 py-14 shadow-soft sm:px-12">
        {/* Pill overlapping the top edge */}
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-6 py-2 text-sm font-semibold text-primaryDark shadow-soft">
          Monitor easily
        </span>

        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Left — copy */}
          <div className="lg:col-span-3">
            <h2 className="max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
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

          {/* Right — device mockup + floating UI chips */}
          <div className="relative mx-auto lg:col-span-2">
            <Placeholder label="Tablet mockup" className="h-[400px] w-[300px] rounded-2xl shadow-2xl" />
            <div className="absolute -left-6 top-10 rounded-lg bg-white px-3 py-2 text-[10px] font-medium text-gray-500 shadow-lg">
              Floating UI
            </div>
            <div className="absolute -right-4 bottom-12 rounded-lg bg-white px-3 py-2 text-[10px] font-medium text-gray-500 shadow-lg">
              Floating UI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
