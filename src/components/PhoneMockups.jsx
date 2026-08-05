import Avatar from './Avatar.jsx';

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[9px] font-semibold text-ink">
      <span>9:41</span>
      <span className="flex items-center gap-1 text-[8px]">
        <i className="fa-solid fa-signal" />
        <i className="fa-solid fa-wifi" />
        <i className="fa-solid fa-battery-full" />
      </span>
    </div>
  );
}

function Island() {
  return <div className="absolute left-1/2 top-2.5 z-10 h-[18px] w-16 -translate-x-1/2 rounded-full bg-ink" />;
}

const ACTIVITY = [
  { icon: 'fa-bag-shopping', tint: 'bg-rose-100 text-rose-500', name: 'Nike Store', when: 'Today, 2:14 pm', amount: '-$45.00' },
  { icon: 'fa-receipt', tint: 'bg-amber-100 text-amber-500', name: 'Electric Bill', when: 'Yesterday', amount: '-$23.73' },
  { icon: 'fa-store', tint: 'bg-sky-100 text-sky-500', name: 'Groceries', when: 'Monday', amount: '-$18.20' },
];

/** Main phone — balance dashboard, as in the reference design. */
export function MainPhone() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.4rem] border-[10px] border-ink bg-white">
      <Island />
      <StatusBar />

      <div className="flex items-center justify-between px-5 pt-3">
        <div>
          <p className="text-[9px] text-gray-400">Hello Smith,</p>
          <p className="text-[12px] font-bold text-ink">Welcome Back!</p>
        </div>
        <i className="fa-solid fa-bell text-[12px] text-gray-500" />
      </div>

      {/* Balance card */}
      <div className="px-4 pt-3">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primaryDark p-3.5">
          <div className="flex items-center justify-between">
            <div className="rounded-lg bg-white/20 px-2.5 py-1.5">
              <p className="text-[8px] text-white/80">My Balance</p>
              <p className="text-[13px] font-bold text-white">$529,73</p>
            </div>
            <div className="flex flex-col gap-1">
              <Avatar name="Ada Obi" className="h-5 w-5 text-[7px]" />
              <Avatar name="Kunle Ade" className="h-5 w-5 text-[7px]" />
              <Avatar name="Tola Bello" className="h-5 w-5 text-[7px]" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-[8px] text-white/80">
              <span>50%</span>
              <span>$529,73</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-white/25">
              <div className="h-full w-1/2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Friends */}
      <div className="px-5 pt-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold text-ink">Your Friends</p>
          <span className="text-[8px] font-semibold text-primaryDark">See All</span>
        </div>
        <div className="mt-2 flex justify-between">
          {['Wizzard Yanto', 'Queenita Warless', 'Ramuel Smith', 'Bola Ade'].map((name) => (
            <div key={name} className="flex flex-col items-center gap-1">
              <Avatar name={name} className="h-8 w-8 text-[8px]" />
              <span className="text-[7px] text-gray-500">{name.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="mt-3 flex-1 rounded-t-2xl bg-gray-50 px-5 pt-3">
        <p className="text-[10px] font-bold text-ink">Recent Activity</p>
        {ACTIVITY.map((item) => (
          <div key={item.name} className="flex items-center gap-2 border-b border-gray-100 py-2 last:border-0">
            <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${item.tint}`}>
              <i className={`fa-solid ${item.icon} text-[10px]`} />
            </span>
            <div className="flex-1">
              <p className="text-[9px] font-semibold text-ink">{item.name}</p>
              <p className="text-[7px] text-gray-400">{item.when}</p>
            </div>
            <span className="text-[9px] font-bold text-ink">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Second phone — statistics chart view. */
export function StatsPhone() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.4rem] border-[10px] border-ink bg-white">
      <Island />
      <StatusBar />

      <div className="flex items-center justify-between px-5 pt-3">
        <p className="text-[11px] font-bold text-ink">Statistics</p>
        <i className="fa-solid fa-ellipsis text-[12px] text-gray-500" />
      </div>

      <div className="px-5 pt-2">
        <p className="text-[18px] font-bold text-ink">$125.73</p>
        <p className="flex items-center gap-1 text-[8px] text-gray-400">
          <i className="fa-solid fa-arrow-trend-up text-primaryDark" /> 24% this month
        </p>
      </div>

      {/* Area chart */}
      <div className="px-3 pt-2">
        <svg viewBox="0 0 240 120" className="h-24 w-full" aria-hidden="true">
          <defs>
            <linearGradient id="statGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#4ADE80" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 92C28 84 44 58 70 62 96 66 110 34 138 40 166 46 182 22 208 28 224 32 234 26 240 22V120H0Z"
            fill="url(#statGrad)"
          />
          <path
            d="M0 92C28 84 44 58 70 62 96 66 110 34 138 40 166 46 182 22 208 28 224 32 234 26 240 22"
            fill="none"
            stroke="#22C55E"
            strokeWidth="2.5"
          />
          <circle cx="208" cy="28" r="4" fill="#22C55E" stroke="#fff" strokeWidth="2" />
        </svg>
      </div>

      {/* Friends list */}
      <div className="mt-auto rounded-t-2xl bg-gray-50 px-5 py-3">
        <p className="text-[10px] font-bold text-ink">My Friends</p>
        {[
          { name: 'Queenita Warless', amount: '$125.00' },
          { name: 'Wizzard Yanto', amount: '$240.07' },
        ].map((friend) => (
          <div key={friend.name} className="mt-2 flex items-center gap-2">
            <Avatar name={friend.name} className="h-7 w-7 text-[8px]" />
            <div className="flex-1">
              <p className="text-[9px] font-semibold text-ink">{friend.name}</p>
              <p className="text-[7px] text-gray-400">Joint target</p>
            </div>
            <span className="text-[9px] font-bold text-ink">{friend.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Landscape device card used in the dark section. */
export function DeviceCard() {
  return (
    <div className="relative mx-auto w-[320px] max-w-full">
      <div className="rounded-2xl bg-white p-3">
        <div className="rounded-xl bg-gradient-to-br from-primary to-primaryDark p-4">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-white/20 px-2 py-1 text-[9px] font-semibold text-white">
              <i className="fa-solid fa-plane-up mr-1" />
              Yay! On Monitor
            </span>
            <span className="text-[8px] text-white/80">4 March 2022</span>
          </div>
          <p className="mt-3 text-[9px] text-white/80">Accumulated Balance</p>
          <p className="text-xl font-bold text-white">$529,73</p>
        </div>
        <div className="px-1 pb-1 pt-3">
          <div className="flex justify-between text-[9px] text-gray-500">
            <span>50%</span>
            <span className="font-semibold text-ink">$529,73</span>
            <span className="text-gray-400">$1000.00</span>
          </div>
          <div className="mt-1.5 h-1.5 rounded-full bg-gray-100">
            <div className="h-full w-1/2 rounded-full bg-primaryDark" />
          </div>
        </div>
      </div>

      {/* Floating avatar rail */}
      <div className="absolute -right-4 top-6 flex flex-col items-center gap-1.5 rounded-xl bg-ink p-2">
        <Avatar name="Ada Obi" className="h-6 w-6 text-[7px]" />
        <Avatar name="Kunle Ade" className="h-6 w-6 text-[7px]" />
        <Avatar name="Tola Bello" className="h-6 w-6 text-[7px]" />
        <span className="text-[7px] font-semibold text-gray-400">+3</span>
      </div>

      {/* Floating savings chip */}
      <div className="absolute -left-4 bottom-8 flex items-center gap-2 rounded-lg bg-white px-3 py-2">
        <i className="fa-solid fa-circle-check text-sm text-primaryDark" />
        <div>
          <p className="text-[9px] font-bold text-ink">$120 saved</p>
          <p className="text-[7px] text-gray-400">this week</p>
        </div>
      </div>
    </div>
  );
}
