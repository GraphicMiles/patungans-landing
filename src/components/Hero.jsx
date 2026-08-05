import Avatar from './Avatar.jsx';
import { MainPhone, StatsPhone } from './PhoneMockups.jsx';

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-20 pt-12 lg:grid-cols-2 lg:gap-10">
        {/* Left — copy */}
        <div className="flex flex-col items-start">
          <h1 className="max-w-xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Plan joint ventures for desired targets
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-500">
            when an unknown printer took a galley of type and script to make a type specimen book.
          </p>

          <button type="button" className="group mt-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primaryDark text-white transition-transform group-hover:scale-105">
              <i className="fa-solid fa-play text-xs" />
            </span>
            <span className="text-sm font-semibold">Introducing about us</span>
          </button>

          {/* Store badges */}
          <div className="relative mt-12 rounded-2xl bg-gray-200/80 px-6 pb-6 pt-8">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-4 py-1.5 text-xs text-gray-500">
              Available for download :
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="flex items-center gap-3 rounded-lg bg-ink px-4 py-2 text-white transition-colors hover:bg-black">
                <i className="fa-brands fa-apple text-xl" />
                <span className="text-left leading-tight">
                  <span className="block text-[8px] text-gray-300">For iOS &amp; macOS</span>
                  <span className="block text-sm font-semibold">App Store</span>
                </span>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-lg bg-ink px-4 py-2 text-white transition-colors hover:bg-black">
                <i className="fa-brands fa-google-play text-lg" />
                <span className="text-left leading-tight">
                  <span className="block text-[8px] text-gray-300">For Android 4.0</span>
                  <span className="block text-sm font-semibold">Play Store</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right — happy users + phones */}
        <div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:justify-end">
            <div className="flex -space-x-2.5">
              <Avatar name="Ada Obi" className="h-9 w-9 text-[10px]" ring="ring-2 ring-mist" />
              <Avatar name="Kunle Ade" className="h-9 w-9 text-[10px]" ring="ring-2 ring-mist" />
              <Avatar name="Tola Bello" className="h-9 w-9 text-[10px]" ring="ring-2 ring-mist" />
            </div>
            <div className="text-left">
              <p className="text-lg font-bold leading-none">1.5M +</p>
              <p className="mt-1 text-xs text-gray-500">Happy Users</p>
            </div>
          </div>

          <div className="relative mx-auto h-[500px] w-full max-w-[290px] sm:h-[580px] sm:max-w-[420px]">
            {/* Green blob behind the phones */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] bg-gradient-to-br from-[#9BEBA6] to-primaryDark sm:h-[400px] sm:w-[420px]" />

            <div className="absolute right-0 top-10 h-[420px] w-[200px] rotate-6 rounded-[2.6rem] shadow-2xl sm:h-[520px] sm:w-[250px]">
              <StatsPhone />
            </div>
            <div className="absolute left-0 top-0 z-10 h-[460px] w-[220px] -rotate-6 rounded-[2.6rem] shadow-2xl sm:h-[550px] sm:w-[270px]">
              <MainPhone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
