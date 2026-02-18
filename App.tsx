import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import { SectionId } from './types';
import { useScrollSpy } from './hooks/useScrollSpy';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [logoError, setLogoError] = useState(false);

  const sectionIds = [SectionId.HOME, SectionId.SERVICES, SectionId.PHILOSOPHY, SectionId.PORTFOLIO, SectionId.CONTACT];
  const activeSection = useScrollSpy(sectionIds, 110);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: SectionId) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationItems = [
    { label: 'Services', id: SectionId.SERVICES },
    { label: 'Methode', id: SectionId.PHILOSOPHY },
    { label: 'Projets', id: SectionId.PORTFOLIO },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-slate-300 font-sans selection:bg-accent-500/25 selection:text-brand-900">
      {showLoader && <PageLoader />}

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/86 backdrop-blur-xl border-b border-slate-800 shadow-soft py-2'
            : 'bg-white/62 backdrop-blur-md border-b border-transparent py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center gap-4">
          <button
            onClick={() => scrollTo(SectionId.HOME)}
            className="flex items-center gap-3 text-left"
            aria-label="Retour en haut"
          >
            {!logoError ? (
              <img
                src="/d-codex-logo-nav.png"
                alt="D-Codex Logo"
                className="h-7 md:h-8 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-3xl md:text-4xl font-brand text-brand-500">D-CODEX</span>
            )}
          </button>

          <div className="hidden md:flex items-center gap-7">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative text-sm font-semibold transition-colors ${
                    isActive ? 'text-brand-600' : 'text-slate-500 hover:text-brand-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            <button onClick={() => scrollTo(SectionId.CONTACT)} className="btn-primary text-sm">
              Parler a un expert
            </button>
          </div>

          <button
            className="md:hidden p-2.5 rounded-full bg-white/95 border border-slate-800 text-brand-600 shadow-soft"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-brand-dark/68 backdrop-blur-sm px-5 pt-24 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="glass-strong rounded-3xl p-7"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-5 text-left">
                {[...navigationItems, { label: 'Contact', id: SectionId.CONTACT }].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-xl font-display font-semibold transition-colors ${
                      activeSection === item.id ? 'text-brand-600' : 'text-slate-500 hover:text-brand-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Hero />
        <Services />
        <Philosophy />
        <Portfolio />
        <Stats />
        <Contact />
      </main>

      <ScrollToTop />
    </div>
  );
};

export default App;
