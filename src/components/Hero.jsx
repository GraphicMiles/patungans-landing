import Avatar from './Avatar.jsx';
import Reveal from './Reveal.jsx';
import { MainPhone, StatsPhone } from './PhoneMockups.jsx';

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-2 lg:gap-10">
        {/* Left — copy (centered on mobile) */}
        <Reveal className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="max-w-2xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Plan joint ventures for <span className="text-primaryDark">desired targets</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-gray-500 lg:mx-0">
            when an unknown printer took a galley of type and script to make a type specimen book.
          </p>

          <button type="button" className="group mt-8 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primaryDark text-white transition-transform group-hover:scale-105">
              <i className="fa-solid fa-play text-sm" />
            </span>
            <span className="text-sm font-semibold">Introducing about us</span>
          </button>

          {/* Store badges */}
          <div className="relative mt-12 rounded-2xl bg-gray-200/80 px-6 pb-6 pt-8">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-4 py-1.5 text-xs text-gray-500">
              Available for download :
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
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
        </Reveal>

        {/* Right — happy users + phones */}
        <Reveal delay={150}>
          <div className="mb-8 flex items-center justify-center gap-3 lg:justify-end">
            <div className="flex -space-x-2.5">
              <Avatar name="Ada Obi" className="h-9 w-9 text-[10px]" ring="ring-2 ring-mist" />
              <Avatar name="Kunle Ade" className="h-9 w-9 text-[10px]" ring="ring-2 ring-mist" />
              <Avatar name="Tola Bello" className="h-9 w-9 text-[10px]" ring="ring-2 ring-mist" />
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-bold leading-none">1.5M +</p>
              <p className="mt-1 text-xs text-gray-500">Happy Users</p>
            </div>
          </div>

          <div className="relative mx-auto h-[500px] w-full max-w-[290px] sm:h-[580px] sm:max-w-[420px]">
            {/* Green blob behind the phones */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] bg-gradient-to-br from-[#9BEBA6] to-primaryDark sm:h-[400px] sm:w-[420px]" />

            <div className="absolute right-0 top-10 h-[420px] w-[200px] rotate-6 rounded-[2.6rem] sm:h-[520px] sm:w-[250px]">
              <StatsPhone />
            </div>
            <div className="absolute left-0 top-0 z-10 h-[460px] w-[220px] -rotate-6 rounded-[2.6rem] sm:h-[550px] sm:w-[270px]">
              <MainPhone />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
