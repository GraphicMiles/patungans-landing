import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StatsStrip from './components/StatsStrip.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import TrustPair from './components/TrustPair.jsx';
import Recap from './components/Recap.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import { useRevealSystem } from './hooks/observers.js';

export default function LandingPage() {
  useRevealSystem();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <HowItWorks />
        <TrustPair />
        <Recap />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
