import React from 'react';
import { motion } from 'framer-motion';
import { Focus, Zap, Target } from 'lucide-react';
import { SectionId } from '../types';

const values = [
  {
    title: 'Rigueur',
    desc: 'Un cadre clair, des livrables fiables.',
    icon: Focus,
    color: 'text-brand-600',
  },
  {
    title: 'Creativite',
    desc: 'Une forme forte au service du fond.',
    icon: Zap,
    color: 'text-accent-600',
  },
  {
    title: 'Impact',
    desc: 'Des decisions guidees par vos objectifs business.',
    icon: Target,
    color: 'text-brand-600',
  },
];

const Philosophy: React.FC = () => {
  return (
    <section id={SectionId.PHILOSOPHY} className="section-shell">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="tag-pill mb-5"
            >
              Methode
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-brand-600 leading-tight mb-6"
            >
              Une approche simple,
              <span className="gradient-text"> des resultats nets.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="text-slate-500 text-lg leading-relaxed max-w-xl"
            >
              D-Codex combine strategie, design et execution technique pour livrer vite et bien, sans complexite inutile.
            </motion.p>
          </div>

          <div className="grid gap-4">
            {values.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.07 }}
                className="soft-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-100 border border-brand-300/35 flex items-center justify-center">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-semibold text-brand-600 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;