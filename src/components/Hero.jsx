import Placeholder from './Placeholder.jsx';

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-5 lg:gap-10">
        {/* Left column — copy */}
        <div className="lg:col-span-3">
          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Plan joint ventures for desired targets
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-500">
            when an unknown printer took a galley of type and script to make a type specimen book.
          </p>

          {/* Play / intro */}
          <button type="button" className="group mt-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primaryDark text-white shadow-soft transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-sm font-semibold">Introducing about us</span>
          </button>

          {/* Store badges */}
          <div className="relative mt-12 inline-block rounded-2xl bg-gray-200/80 px-6 pb-6 pt-8">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-4 py-1.5 text-xs text-gray-500 shadow-soft">
              Available for download :
            </span>
            <div className="flex flex-wrap gap-4">
              <Placeholder label="App Store badge" dark className="h-10 w-[120px] rounded-lg" />
              <Placeholder label="Play Store badge" dark className="h-10 w-[120px] rounded-lg" />
            </div>
          </div>
        </div>

        {/* Right column — social count + phone mockups */}
        <div className="lg:col-span-2">
          <div className="mb-8 flex items-center justify-center gap-3 lg:justify-end">
            <div className="flex -space-x-2.5">
              <Placeholder label="avatar" showLabel={false} className="h-9 w-9 rounded-full ring-2 ring-mist" />
              <Placeholder label="avatar" showLabel={false} className="h-9 w-9 rounded-full ring-2 ring-mist" />
              <Placeholder label="avatar" showLabel={false} className="h-9 w-9 rounded-full ring-2 ring-mist" />
            </div>
            <div className="text-left">
              <p className="text-lg font-bold leading-none">1.5M +</p>
              <p className="mt-1 text-xs text-gray-500">Happy Users</p>
            </div>
          </div>

          {/* Phones over a green blob */}
          <div className="relative mx-auto h-[470px] w-full max-w-[380px] sm:h-[580px]">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] bg-gradient-to-br from-[#9BEBA6] to-primaryDark sm:h-[400px] sm:w-[400px]" />
            <Placeholder
              label="Phone mockup — back"
              className="absolute right-0 top-12 h-[420px] w-[200px] rotate-6 rounded-3xl shadow-2xl sm:h-[540px] sm:w-[260px]"
            />
            <Placeholder
              label="Phone mockup — main"
              className="absolute left-0 top-0 z-10 h-[440px] w-[220px] -rotate-6 rounded-3xl shadow-2xl sm:h-[560px] sm:w-[280px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
