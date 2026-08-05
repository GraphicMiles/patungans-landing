import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StatsStrip from './components/StatsStrip.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Trust from './components/Trust.jsx';
import Benefits from './components/Benefits.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import MobileCTA from './components/MobileCTA.jsx';
import { useRevealSystem } from './hooks/observers.js';

/* Journey: problem → solution → how → trust → benefits → proof → FAQ → ask */
export default function LandingPage() {
  useRevealSystem();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <HowItWorks />
        <Trust />
        <Benefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
