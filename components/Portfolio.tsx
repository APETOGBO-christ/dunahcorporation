import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project, SectionId } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Portail E-commerce',
    category: 'Web',
    description: 'Tunnel de vente optimise et back-office simplifie.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=650&fit=crop',
  },
  {
    id: '2',
    title: 'App Fintech',
    category: 'Mobile',
    description: 'Experience mobile claire pour piloter ses finances.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=650&fit=crop',
  },
  {
    id: '3',
    title: 'Solution IA Interne',
    category: 'IA',
    description: 'Automatisation des taches repetitives et gain de temps.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=650&fit=crop',
  },
  {
    id: '4',
    title: 'Audit Cyber',
    category: 'Cyber',
    description: 'Cartographie des risques et plan de remediation rapide.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&h=650&fit=crop',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id={SectionId.PORTFOLIO} className="section-shell overflow-hidden">
      <div className="absolute top-2 right-0 w-[30rem] h-[30rem] bg-accent-500/14 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-10">
        <div className="mb-10 text-center">
          <div className="tag-pill mx-auto mb-4">Realisations</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-600 mb-3">Projets recents</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Des cas concrets, orientés performance et conversion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group relative overflow-hidden rounded-[1.4rem] border border-slate-800/75 shadow-soft"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/78 via-brand-900/28 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="inline-flex w-fit px-3 py-1 rounded-full bg-white/90 text-brand-600 text-xs font-semibold mb-2.5">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-white/85 text-sm mb-4">{project.description}</p>
                <button className="inline-flex items-center gap-2 text-accent-300 text-sm font-semibold">
                  Voir le case study <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;