import { useEffect, useState } from 'react';
import { Button } from './ui.jsx';

/* Sticky mobile conversion bar — appears after the hero, hides while the
   final CTA is on screen so the page never shows two asks at once. */
export default function MobileCTA() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 560);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    let observer;
    const cta = document.getElementById('cta');
    if (cta && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => setCtaInView(entry.isIntersecting));
      observer.observe(cta);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  if (!scrolled || ctaInView) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper px-6 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-small font-semibold text-ink">Join the waitlist</p>
          <p className="text-tiny text-ink/60">4,832 in line · Lagos first</p>
        </div>
        <Button href="#waitlist" className="px-5 py-3">
          Join free
        </Button>
      </div>
    </div>
  );
}
