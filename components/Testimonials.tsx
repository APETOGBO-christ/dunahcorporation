import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Koffi',
    role: 'CEO',
    content:
      'D-Codex a transforme notre presence digitale. Leur expertise technique et leur comprehension de nos besoins ont genere des resultats exceptionnels.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: '2',
    name: 'Jean-Paul Mensah',
    role: 'Directeur Marketing',
    content:
      'Equipe professionnelle et reactive. Ils ont capte l essence de notre marque puis livre une application mobile intuitive, tres bien adoptee par nos clients.',
    avatar: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: '3',
    name: 'Akosua Adjei',
    role: 'Fondatrice',
    content:
      'Travail fluide, livrables solides et accompagnement tres clair. Le site est plus performant et notre visibilite organique a fortement progresse.',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: '4',
    name: 'Thomas Agbodjan',
    role: 'CTO',
    content:
      'Leur maitrise technique est reelle. Notre plateforme SaaS est stable, scalable et plus simple a maintenir depuis la refonte.',
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5600);

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
    enter: (customDirection: number) => ({
      x: customDirection > 0 ? 260 : -260,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (customDirection: number) => ({
      x: customDirection < 0 ? 260 : -260,
      opacity: 0,
    }),
  };

  return (
    <section className="section-shell overflow-hidden">
      <div className="absolute top-8 left-1/4 w-80 h-80 rounded-full bg-accent-400/12 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-400/12 blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="tag-pill mx-auto mb-4">Temoignages</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-950 mb-4">
            Ce que disent nos <span className="gradient-text">clients</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">La confiance de nos clients valide notre niveau d execution.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.article
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: 'spring', stiffness: 270, damping: 30 }, opacity: { duration: 0.2 } }}
              className="soft-card-strong p-8 md:p-10"
            >
              <div className="w-12 h-12 rounded-full bg-brand-100 border border-brand-300/40 flex items-center justify-center mx-auto mb-5">
                <Quote className="w-6 h-6 text-brand-600" />
              </div>

              <div className="flex justify-center gap-1.5 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-300 text-lg md:text-xl leading-relaxed text-center mb-8">"{testimonials[currentIndex].content}"</p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full border-2 border-brand-300/45"
                />
                <div className="text-left">
                  <h4 className="text-slate-950 font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-slate-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-16 w-11 h-11 rounded-full bg-white border border-slate-800 text-slate-950 hover:border-brand-400 hover:text-brand-600 transition-colors shadow-soft"
            aria-label="Precedent"
          >
            <ChevronLeft className="w-5 h-5 mx-auto" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-16 w-11 h-11 rounded-full bg-white border border-slate-800 text-slate-950 hover:border-brand-400 hover:text-brand-600 transition-colors shadow-soft"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5 mx-auto" />
          </button>

          <div className="flex justify-center gap-2 mt-7">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-7 bg-brand-500' : 'w-2 bg-slate-700 hover:bg-slate-600'}`}
                aria-label={`Temoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;