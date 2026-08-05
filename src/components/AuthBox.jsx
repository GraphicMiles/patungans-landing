import { useEffect, useState } from 'react';

/** The login / signup box — centered card with tabs, forms and social auth. */
export default function AuthBox({ mode, onSwitch, onClose }) {
  const [tab, setTab] = useState(mode);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => setTab(mode), [mode]);

  const isLogin = tab === 'login';
  const switchTab = (next) => {
    setTab(next);
    onSwitch?.(next);
  };

  return (
    <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-ink"
        >
          <i className="fa-solid fa-xmark" />
        </button>
      )}

      {/* Brand */}
      <div className="flex flex-col items-center text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink">
          <i className="fa-solid fa-infinity text-lg text-primary" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold tracking-tight">
          {isLogin ? 'Welcome back' : 'Create your account'}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {isLogin ? 'Log in to keep planning with your friends.' : 'Start planning joint ventures in minutes.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-6 grid grid-cols-2 rounded-lg bg-gray-100 p-1 text-sm font-semibold">
        <button
          type="button"
          onClick={() => switchTab('login')}
          className={`rounded-md py-2 transition-colors ${isLogin ? 'bg-white text-ink' : 'text-gray-500 hover:text-ink'}`}
        >
          Log in
        </button>
        <button
          type="button"
          onClick={() => switchTab('signup')}
          className={`rounded-md py-2 transition-colors ${!isLogin ? 'bg-white text-ink' : 'text-gray-500 hover:text-ink'}`}
        >
          Sign up
        </button>
      </div>

      {/* Form */}
      <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
        {!isLogin && (
          <label className="block">
            <span className="text-xs font-semibold text-gray-600">Full name</span>
            <div className="mt-1.5 flex items-center gap-3 rounded-lg border border-gray-200 px-3.5 py-2.5 transition-colors focus-within:border-primaryDark focus-within:ring-2 focus-within:ring-primary/30">
              <i className="fa-solid fa-user text-sm text-gray-400" />
              <input
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </label>
        )}

        <label className="block">
          <span className="text-xs font-semibold text-gray-600">Email</span>
          <div className="mt-1.5 flex items-center gap-3 rounded-lg border border-gray-200 px-3.5 py-2.5 transition-colors focus-within:border-primaryDark focus-within:ring-2 focus-within:ring-primary/30">
            <i className="fa-solid fa-envelope text-sm text-gray-400" />
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-gray-600">Password</span>
          <div className="mt-1.5 flex items-center gap-3 rounded-lg border border-gray-200 px-3.5 py-2.5 transition-colors focus-within:border-primaryDark focus-within:ring-2 focus-within:ring-primary/30">
            <i className="fa-solid fa-lock text-sm text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="••••••••"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="text-sm text-gray-400 transition-colors hover:text-ink"
            >
              <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
            </button>
          </div>
        </label>

        {isLogin && (
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-gray-300 accent-primaryDark" />
              Remember me
            </label>
            <a href="#" className="font-semibold text-primaryDark hover:underline">
              Forgot password?
            </a>
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-ink py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
        >
          {isLogin ? 'Log in' : 'Create account'}
        </button>
      </form>

      {/* Social auth */}
      <div className="my-5 flex items-center gap-3 text-xs text-gray-400">
        <span className="h-px flex-1 bg-gray-200" />
        or continue with
        <span className="h-px flex-1 bg-gray-200" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          <i className="fa-brands fa-google" /> Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          <i className="fa-brands fa-apple" /> Apple
        </button>
      </div>

      <p className="mt-6 text-center text-xs text-gray-500">
        {isLogin ? 'New to Patungans?' : 'Already have an account?'}{' '}
        <button
          type="button"
          onClick={() => switchTab(isLogin ? 'signup' : 'login')}
          className="font-semibold text-primaryDark hover:underline"
        >
          {isLogin ? 'Create an account' : 'Log in'}
        </button>
      </p>
    </div>
  );
}
