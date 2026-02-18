import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'Quels sont vos delais de livraison ?',
    answer:
      'Selon la complexite, nous livrons une premiere version fonctionnelle en quelques semaines. Le planning detaille est partage des le cadrage.',
  },
  {
    id: '2',
    question: 'Proposez-vous de la maintenance apres livraison ?',
    answer:
      'Oui. Nous proposons un suivi mensuel avec corrections, mises a jour de securite, supervision et evolutions mineures.',
  },
  {
    id: '3',
    question: 'Travaillez-vous avec des clients hors du Togo ?',
    answer:
      'Oui. Nous travaillons a distance avec des clients internationaux en gardant un rythme de communication clair et structure.',
  },
  {
    id: '4',
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      'Notre stack depend du besoin: React, Next.js, Node.js pour le web; React Native et Flutter pour le mobile; cloud AWS ou GCP selon le contexte.',
  },
  {
    id: '5',
    question: 'Comment se deroule votre processus de travail ?',
    answer:
      'Notre processus suit cinq etapes: cadrage, design, developpement iteratif, tests, puis lancement. Chaque phase est validee avec vous.',
  },
  {
    id: '6',
    question: 'Avez-vous des plans de paiement flexibles ?',
    answer:
      'Oui. Nous etablissons un echeancier adapte au projet avec des jalons de livraison clairs et transparents.',
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="section-shell">
      <div className="container mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="tag-pill mx-auto mb-4">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-950 mb-3">
            Questions <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Vous avez une question precise ? Nous repondons sans detour.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.article
              key={faq.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="soft-card overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-5 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-slate-950 font-semibold">{faq.question}</span>
                <motion.span animate={{ rotate: openId === faq.id ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown className="w-5 h-5 text-brand-600" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-slate-800/70 text-slate-500 leading-relaxed pt-4">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="soft-card-strong mt-8 p-7 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-semibold text-slate-950 mb-2">Vous voulez une reponse rapide ?</h3>
            <p className="text-slate-500 mb-6">Discutons sur WhatsApp ou via notre formulaire de contact.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://wa.me/22891774563"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Discuter sur WhatsApp
              </a>

              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-slate-800 text-slate-950 font-semibold hover:border-brand-400 transition-colors"
              >
                Nous contacter
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;