import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 420);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.84 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.84 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-40 w-12 h-12 rounded-full bg-white border border-slate-800 text-slate-950 hover:border-brand-400 hover:text-brand-600 transition-colors shadow-soft"
          aria-label="Retour en haut"
        >
          <ChevronUp className="w-5 h-5 mx-auto" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;