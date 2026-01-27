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
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Nous livrons tout projet maximum 1 mois grâce à notre équipe de guerriers. Notre méthodologie agile et notre expertise nous permettent de respecter des délais serrés sans compromettre la qualité.'
  },
  {
    id: '2',
    question: 'Proposez-vous des services de maintenance après livraison ?',
    answer: 'Absolument ! Nous offrons des contrats de maintenance mensuels incluant les mises à jour de sécurité, les corrections de bugs, les sauvegardes régulières et le support technique. Nous restons votre partenaire digital sur le long terme.'
  },
  {
    id: '3',
    question: 'Travaillez-vous avec des clients en dehors du Togo ?',
    answer: 'Oui, nous travaillons avec des clients partout dans le monde. Grâce à nos outils de collaboration en ligne et notre expérience du travail à distance, nous assurons une communication fluide quel que soit le fuseau horaire.'
  },
  {
    id: '4',
    question: 'Quelles technologies utilisez-vous ?',
    answer: 'Nous utilisons des technologies modernes et éprouvées : React, Next.js, Node.js pour le développement web ; React Native et Flutter pour le mobile ; et des solutions cloud comme AWS et Google Cloud. Nous choisissons toujours la stack la plus adaptée à vos besoins spécifiques.'
  },
  {
    id: '5',
    question: 'Comment se déroule votre processus de travail ?',
    answer: 'Notre processus comprend 5 étapes : 1) Découverte et analyse de vos besoins, 2) Conception et design, 3) Développement itératif, 4) Tests et ajustements, 5) Lancement et formation. Vous êtes impliqué à chaque étape avec des points de validation réguliers.'
  },
  {
    id: '6',
    question: 'Proposez-vous des solutions de paiement échelonné ?',
    answer: 'Oui, nous proposons des plans de paiement flexibles adaptés à votre budget. Généralement, nous demandons un acompte de 30% au démarrage, 40% à mi-parcours et 30% à la livraison finale. Des arrangements spécifiques peuvent être discutés.'
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Questions <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Vous avez des questions ? Nous avons les réponses.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-slate-900/50 transition-colors"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-brand-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA to chatbot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="glass-strong p-8 rounded-2xl border border-slate-800">
              <MessageCircle className="w-12 h-12 text-brand-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="text-slate-400 mb-6">
                Discutez avec nous sur WhatsApp ou contactez-nous directement !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/22891774563"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuter sur WhatsApp
                </a>
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
                >
                  Nous contacter
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
