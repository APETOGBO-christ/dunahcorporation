import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-brand-dark">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-brand-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob" style={{ animationDelay: '4s' }} />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.9)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-sm font-medium text-brand-100 tracking-wide uppercase">Agence Digitale Nouvelle Génération</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400 mb-8 leading-tight tracking-tight"
        >
          Transformez vos idées <br /> en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">Résultats Concrets</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Dunah Corporation conçoit et déploie des solutions digitales sur mesure. 
          Rigueur, Créativité et Impact sont au cœur de notre ADN pour renforcer votre performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg shadow-brand-900/50 hover:shadow-brand-600/30"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative flex items-center gap-2">
              Démarrer un projet <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={scrollToServices}
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-medium rounded-full border border-slate-700 hover:border-slate-500 transition-all duration-300 backdrop-blur-sm"
          >
            Découvrir nos services
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToServices}
      >
        <div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;