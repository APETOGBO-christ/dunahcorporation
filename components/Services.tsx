import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Share2, TrendingUp, Code2, Users } from 'lucide-react';
import { Service, SectionId } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Développement Web & Mobile',
    description: "Sites vitrines, e-commerce, applications web et mobiles. Nous créons des expériences fluides, rapides et sécurisées.",
    icon: Layout
  },
  {
    id: '2',
    title: 'Design UI/UX',
    description: "Une interface n'est rien sans une expérience utilisateur pensée. Nous allions esthétique et ergonomie pour convertir.",
    icon: Smartphone
  },
  {
    id: '3',
    title: 'Communication Digitale',
    description: "Définition de votre identité de marque, stratégie de contenu et campagnes publicitaires pour maximiser votre portée.",
    icon: Share2
  },
  {
    id: '4',
    title: 'Community Management',
    description: "Animation de vos communautés, modération et création de contenu engageant pour fidéliser votre audience.",
    icon: Users
  },
  {
    id: '5',
    title: 'Solutions Sur Mesure',
    description: "CRM, ERP, outils internes. Nous développons les logiciels spécifiques dont votre entreprise a besoin pour scaler.",
    icon: Code2
  },
  {
    id: '6',
    title: 'Stratégie de Performance',
    description: "SEO, SEA, Analytics. Nous analysons les données pour optimiser continuellement votre ROI.",
    icon: TrendingUp
  }
];

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Nos Domaines d'Expertise
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-400 max-w-2xl mx-auto"
          >
            Nous accompagnons nos clients de bout en bout avec une approche 360° du digital.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-brand-400 group-hover:text-brand-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;