import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, SectionId } from '../types';
import { ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Luxe',
    category: 'Web',
    description: 'Refonte complète pour une marque de haute couture avec système de paiement intégré.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    title: 'FinTech App',
    category: 'Mobile',
    description: 'Application mobile intuitive pour la gestion de patrimoine et investissements.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Campagne Virale',
    category: 'Marketing',
    description: 'Stratégie social media générant +200% d\'engagement en 3 mois.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    title: 'Plateforme SaaS',
    category: 'Software',
    description: 'Solution B2B complexe pour la logistique internationale avec dashboard analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    title: 'Application Santé',
    category: 'Mobile',
    description: 'App de téléconsultation médicale avec prise de rendez-vous et suivi patient.',
    image: 'health-app.jpg'
  },
  {
    id: '6',
    title: 'Site Corporate',
    category: 'Web',
    description: 'Site institutionnel premium pour une banque avec animations sophistiquées.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
  }
];

const categories = ['Tout', 'Web', 'Mobile', 'Marketing', 'Software'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const filteredProjects = activeCategory === 'Tout' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id={SectionId.PORTFOLIO} className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              Réalisations Marquantes
            </motion.h2>
            <p className="text-slate-400">Une sélection de projets qui ont fait la différence.</p>
          </div>
        </div>

        {/* Category filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/50'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer hover:shadow-2xl hover:shadow-brand-900/50 transition-all duration-300"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-brand-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                    
                    {/* View project button */}
                    <button className="mt-4 flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      Voir le projet <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-500/50 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">Aucun projet dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;