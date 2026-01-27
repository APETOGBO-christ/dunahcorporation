import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import { SectionId } from './types';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from './hooks/useScrollSpy';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [logoError, setLogoError] = useState(false);

  const sectionIds = [
    SectionId.HOME,
    SectionId.SERVICES,
    SectionId.PHILOSOPHY,
    SectionId.PORTFOLIO,
    SectionId.CONTACT
  ];
  
  const activeSection = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    // Hide loader after initial load
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: SectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { label: 'Services', id: SectionId.SERVICES },
    { label: 'Philosophie', id: SectionId.PHILOSOPHY },
    { label: 'Réalisations', id: SectionId.PORTFOLIO },
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-slate-200 font-sans selection:bg-brand-500 selection:text-white">
      {/* Page Loader */}
      {showLoader && <PageLoader />}

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            {!logoError ? (
              <img 
                src="/logo.png" 
                alt="Dunah Corporation Logo" 
                className="h-14 w-auto object-contain transition-transform hover:scale-105"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-white">
                DUNAH<span className="text-brand-500">.</span>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollTo(SectionId.CONTACT)}
              className="px-5 py-2.5 bg-white text-slate-900 font-semibold rounded-full hover:bg-brand-50 transition-colors text-sm shadow-lg hover:shadow-xl"
            >
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-slate-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
               {[
                { label: 'Services', id: SectionId.SERVICES },
                { label: 'Philosophie', id: SectionId.PHILOSOPHY },
                { label: 'Réalisations', id: SectionId.PORTFOLIO },
                { label: 'Contact', id: SectionId.CONTACT },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-2xl font-display font-medium text-white hover:text-brand-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Team />
        <FAQ />
        <Contact />
      </main>


      <ScrollToTop />
    </div>
  );
};

export default App;