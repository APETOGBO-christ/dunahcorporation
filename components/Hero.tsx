import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SectionId } from '../types';

const heroImages = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
];

const metrics = [
  { value: '30+', label: 'Projets lances' },
  { value: '98%', label: 'Satisfaction client' },
  { value: '4', label: 'Piliers d expertise' },
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4600);

    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="section-shell min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[72vw] h-[56vw] min-h-[430px] max-h-[780px] rounded-full bg-gradient-to-br from-brand-400/20 via-brand-300/10 to-accent-500/16 blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="tag-pill mb-6">Web . Mobile . IA . Cybersecurite</div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-bold text-brand-600 leading-[1.03] tracking-tight mb-6">
            Une execution
            <span className="block gradient-text mt-1">nette, rapide, utile.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed mb-10">
            D-Codex cree des produits digitaux simples, beaux et performants.
            Chaque ecran est pense pour convertir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <button onClick={scrollToContact} className="btn-primary">
              Lancer mon projet <ArrowRight className="w-5 h-5" />
            </button>

            <button onClick={scrollToServices} className="btn-ghost">
              Voir nos services
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            {metrics.map((item) => (
              <div key={item.label} className="soft-card px-4 py-4">
                <p className="text-2xl font-display font-bold text-brand-600">{item.value}</p>
                <p className="text-sm text-slate-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="soft-card-strong p-4 md:p-5">
            <div className="relative aspect-[4/5] rounded-[1.2rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={heroImages[currentImage]}
                  alt="Equipe D-Codex"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/62 via-brand-900/12 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 glass rounded-2xl px-4 py-3">
                <p className="text-[0.66rem] uppercase tracking-[0.18em] text-brand-600 font-semibold">Focus conversion</p>
                <p className="text-sm text-slate-500 mt-1">Design epure. Parcours fluide. Message clair.</p>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 -bottom-7 soft-card px-4 py-3 max-w-[220px]">
            <p className="text-xs text-slate-500">Signature</p>
            <p className="text-sm font-semibold text-brand-600 mt-1">D-Codex, la precision au service de votre croissance.</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-brand-600 transition-colors"
        onClick={scrollToServices}
      >
        <span className="text-[0.65rem] uppercase tracking-[0.24em]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;