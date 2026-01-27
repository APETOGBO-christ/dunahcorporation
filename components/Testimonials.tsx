import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId, Testimonial } from '../types';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Koffi',
    role: 'CEO',

    content: 'Dunah Corporation a transformé notre présence digitale. Leur expertise technique combinée à une compréhension profonde de nos besoins a donné des résultats exceptionnels. Notre nouveau site e-commerce a augmenté nos ventes de 300% en 6 mois.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'Jean-Paul Mensah',
    role: 'Directeur Marketing',

    content: 'Une équipe professionnelle et réactive. Ils ont su capter l\'essence de notre marque et la traduire en une application mobile intuitive qui plaît énormément à nos clients. Le suivi post-lancement est également impeccable.',
    avatar: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Akosua Adjei',
    role: 'Fondatrice',

    content: 'Travailler avec Dunah était un vrai plaisir. Ils ont non seulement créé un site magnifique mais ont aussi optimisé notre référencement. Nous sommes maintenant en première page Google pour nos mots-clés principaux !',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '4',
    name: 'Thomas Agbodjan',
    role: 'CTO',

    content: 'Le développement de notre plateforme SaaS était un défi technique majeur. L\'équipe de Dunah a livré une solution robuste, scalable et performante. Leur maîtrise des technologies modernes est impressionnante.',
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id={SectionId.PORTFOLIO} className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ce que disent nos <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            La confiance de nos clients est notre plus grande récompense.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="glass-strong p-8 md:p-12 rounded-3xl"
            >
              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-brand-600/20 rounded-full">
                  <Quote className="w-8 h-8 text-brand-400" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed text-center mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-brand-500/50"
                />
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-3 bg-slate-900/80 hover:bg-slate-800 rounded-full border border-slate-700 hover:border-brand-500 transition-all text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-3 bg-slate-900/80 hover:bg-slate-800 rounded-full border border-slate-700 hover:border-brand-500 transition-all text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-brand-500 w-8' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
