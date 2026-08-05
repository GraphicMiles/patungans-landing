import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StatsFeatures from './components/StatsFeatures.jsx';
import DarkFeature from './components/DarkFeature.jsx';
import TwoColumnFeatures from './components/TwoColumnFeatures.jsx';
import SocialProof from './components/SocialProof.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTABanner from './components/CTABanner.jsx';
import Footer from './components/Footer.jsx';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsFeatures />
        <DarkFeature />
        <TwoColumnFeatures />
        <SocialProof />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
