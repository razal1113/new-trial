import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CostSection } from './components/CostSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* HERO - Sticky Base */}
        <div className="brand-sticky" style={{ zIndex: 1 }}>
          <Hero />
        </div>

        {/* INTRO (CostSection) - Overlays Hero */}
        <div className="content-over" style={{ zIndex: 2 }}>
          <CostSection />
        </div>

        {/* SERVICES - Sticky Base */}
        <div className="brand-sticky" style={{ zIndex: 3 }}>
          <ServicesSection />
        </div>

        {/* RECOMMENDATIONS (TeamSection) - Overlays Services */}
        <div className="content-over" style={{ zIndex: 4 }}>
          <TeamSection />
        </div>

        {/* ABOUT - Sticky Base */}
        <div className="brand-sticky" style={{ zIndex: 5 }}>
          <AboutSection />
        </div>

        {/* CONTACT - Final Sticky */}
        <div className="brand-sticky" style={{ zIndex: 6 }}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
