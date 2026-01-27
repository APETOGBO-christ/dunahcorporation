import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { Focus, Zap, Target } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id={SectionId.PHILOSOPHY} className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight"
            >
              Notre approche allie <br/>
              <span className="text-brand-400">Rigueur</span>, 
              <span className="text-accent-400"> Créativité</span> et 
              <span className="text-white"> Impact</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg leading-relaxed mb-8"
            >
              Chez Dunah Corporation, nous ne nous contentons pas de livrer un produit. 
              Nous construisons un écosystème digital cohérent qui raconte votre histoire et sert vos objectifs business.
              Chaque pixel a une raison d'être, chaque ligne de code sert la performance.
            </motion.p>
          </div>

          <div className="grid gap-6">
            {[
              { title: "Rigueur", desc: "Des standards de qualité élevés et des process maîtrisés.", icon: Focus, color: "text-brand-400" },
              { title: "Créativité", desc: "Des solutions innovantes pour vous démarquer de la concurrence.", icon: Zap, color: "text-accent-400" },
              { title: "Impact", desc: "Des résultats mesurables qui transforment votre activité.", icon: Target, color: "text-white" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-colors"
              >
                <div className={`p-3 rounded-lg bg-slate-800 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;