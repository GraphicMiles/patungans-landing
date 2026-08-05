import { useEffect, useRef, useState } from 'react';

/* One shared IntersectionObserver + one config for the whole app.
   Reveals reverse when the element exits back below the viewport
   (user scrolled up past the trigger); elements that left through the
   top stay revealed. */

let observer = null;
const callbacks = new WeakMap();

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const cb = callbacks.get(entry.target);
          if (!cb) continue;
          if (entry.isIntersecting) cb.onEnter?.();
          else if (entry.boundingClientRect.top > 0) cb.onLeaveUp?.();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
  }
  return observer;
}

export function observeReversible(el, { onEnter, onLeaveUp }) {
  callbacks.set(el, { onEnter, onLeaveUp });
  getObserver().observe(el);
  return () => {
    getObserver().unobserve(el);
    callbacks.delete(el);
  };
}

/** Toggles .is-revealed on every [data-reveal] element on the page. */
export function useRevealSystem() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
    const cleanups = elements.map((el) =>
      observeReversible(el, {
        onEnter: () => el.classList.add('is-revealed'),
        onLeaveUp: () => el.classList.remove('is-revealed'),
      }),
    );
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}

/** Hook form of the same behavior for component-driven state. */
export function useReversible(onEnter, onLeaveUp) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    return observeReversible(el, { onEnter, onLeaveUp });
  }, [onEnter, onLeaveUp]);
  return ref;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event) => setReduced(event.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

/** 0→1 progress of scrolling through the element (for the scrubbed pool fill). */
export function useSectionProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const value = (vh - rect.top) / (vh + rect.height);
      setProgress(Math.min(1, Math.max(0, value)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return [ref, progress];
}

/** 0→1 progress through the whole document (nav progress bar + mini vessel). */
export function usePageProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return progress;
}
