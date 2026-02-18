import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    suffix: '+',
    label: 'Projets livres',
    icon: TrendingUp,
    color: 'text-brand-600',
  },
  {
    id: '2',
    value: 27,
    suffix: '+',
    label: 'Clients actifs',
    icon: Users,
    color: 'text-brand-600',
  },
  {
    id: '3',
    value: 3,
    suffix: '+',
    label: 'Annees d experience',
    icon: Award,
    color: 'text-accent-600',
  },
  {
    id: '4',
    value: 98,
    suffix: '%',
    label: 'Satisfaction',
    icon: Sparkles,
    color: 'text-accent-600',
  },
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
      { threshold: 0.35 },
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
    <section id="stats-section" className="section-shell">
      <div className="container mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="tag-pill mx-auto mb-4">Impact</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-600 mb-4">Des resultats mesurables</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Nous suivons les indicateurs qui comptent vraiment.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, 2000, startCounting);

            return (
              <motion.article
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="soft-card p-6 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 h-16 w-16 bg-accent-500/18 blur-2xl" />

                <div className={`w-12 h-12 rounded-xl bg-white border border-slate-800/75 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>

                <div className="mt-5">
                  <p className={`text-4xl md:text-5xl font-display font-bold ${stat.color}`}>
                    {count}
                    {stat.suffix}
                  </p>
                  <p className="text-slate-500 mt-2 text-sm">{stat.label}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;