import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { TrendingUp, Users, Award, Sparkles } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

const stats: Stat[] = [
  {
    id: '1',
    value: 30,
    suffix: '',
    label: 'Projets Réalisés',
    icon: TrendingUp,
    color: 'text-brand-400'
  },
  {
    id: '2',
    value: 27,
    suffix: '',
    label: 'Clients Satisfaits',
    icon: Users,
    color: 'text-accent-400'
  },
  {
    id: '3',
    value: 3,
    suffix: '',
    label: 'Années d\'Expérience',
    icon: Award,
    color: 'text-emerald-400'
  },
  {
    id: '4',
    value: 98,
    suffix: '%',
    label: 'Taux de Satisfaction',
    icon: Sparkles,
    color: 'text-yellow-400'
  }
];

const Stats: React.FC = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="stats-section" 
      className="py-20 bg-slate-950/50 border-y border-slate-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Notre Impact en <span className="gradient-text">Chiffres</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Des résultats concrets qui témoignent de notre engagement envers l'excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, 2000, startCounting);
            
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="glass p-8 rounded-2xl text-center hover:glass-strong transition-all duration-300 hover:scale-105">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-xl bg-slate-800/50 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="mb-2">
                    <span className={`text-5xl font-bold font-display ${stat.color}`}>
                      {count}{stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-slate-400 font-medium">{stat.label}</p>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
