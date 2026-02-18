import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BrainCircuit, ShieldCheck, BarChart3 } from 'lucide-react';
import { Service, SectionId } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Web & Mobile',
    description: 'Sites et apps rapides, robustes et prêtes a scaler.',
    icon: Smartphone,
  },
  {
    id: '2',
    title: 'Integration IA',
    description: 'Automatisez vos workflows avec des usages IA utiles.',
    icon: BrainCircuit,
  },
  {
    id: '3',
    title: 'Cybersecurite',
    description: 'Audit, prevention et protection proactive de vos actifs.',
    icon: ShieldCheck,
  },
  {
    id: '4',
    title: 'Croissance Digitale',
    description: 'Design, contenu et mesure pour convertir mieux.',
    icon: BarChart3,
  },
];

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="section-shell overflow-hidden">
      <div className="absolute top-10 -left-24 w-72 h-72 rounded-full bg-brand-400/14 blur-3xl -z-10" />
      <div className="absolute bottom-0 -right-12 w-72 h-72 rounded-full bg-accent-500/16 blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-pill mx-auto mb-4"
          >
            Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-brand-600 mb-5"
          >
            Ce que D-Codex livre
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            Peu de bruit, beaucoup de valeur.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="soft-card p-7 group relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-500/0 via-accent-500/65 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500/12 to-accent-500/18 border border-brand-400/25 flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-brand-600" />
              </div>

              <h3 className="text-xl font-display font-semibold text-brand-600 mb-2.5">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;