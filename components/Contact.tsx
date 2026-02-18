import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="section-shell pt-24 pb-10 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-px w-full bg-gradient-to-r from-transparent via-slate-700/75 to-transparent" />
      <div className="absolute -bottom-24 right-0 w-[26rem] h-[26rem] bg-accent-500/15 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-14">
          <div>
            <div className="tag-pill mb-4">Contact</div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-brand-600 leading-tight mb-5"
            >
              Votre prochaine croissance
              <span className="gradient-text"> commence ici.</span>
            </motion.h2>

            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
              Un message suffit pour lancer un cadrage rapide et concret.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:contact@d-codex.com"
                className="soft-card p-4 flex items-center gap-4 hover:border-brand-400/55 transition-colors"
              >
                <span className="w-11 h-11 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-slate-500">Email</span>
                  <span className="text-brand-600 font-semibold">contact@d-codex.com</span>
                </span>
              </a>

              <div className="soft-card p-4 flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-slate-500">Telephone</span>
                  <span className="text-brand-600 font-semibold">+228 91 77 45 63</span>
                </span>
              </div>

              <div className="soft-card p-4 flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-slate-500">Localisation</span>
                  <span className="text-brand-600 font-semibold">Lome, Togo</span>
                </span>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(event) => event.preventDefault()}
            className="soft-card-strong p-7 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <label className="text-sm text-slate-500 space-y-2 block">
                <span>Nom</span>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-xl bg-white border border-slate-800 px-4 py-3 text-brand-600 focus:outline-none focus:border-accent-500"
                />
              </label>

              <label className="text-sm text-slate-500 space-y-2 block">
                <span>Entreprise</span>
                <input
                  type="text"
                  placeholder="Votre entreprise"
                  className="w-full rounded-xl bg-white border border-slate-800 px-4 py-3 text-brand-600 focus:outline-none focus:border-accent-500"
                />
              </label>
            </div>

            <label className="text-sm text-slate-500 space-y-2 block mb-4">
              <span>Email</span>
              <input
                type="email"
                placeholder="vous@entreprise.com"
                className="w-full rounded-xl bg-white border border-slate-800 px-4 py-3 text-brand-600 focus:outline-none focus:border-accent-500"
              />
            </label>

            <label className="text-sm text-slate-500 space-y-2 block mb-6">
              <span>Brief</span>
              <textarea
                rows={4}
                placeholder="Objectif, delai, budget cible"
                className="w-full rounded-xl bg-white border border-slate-800 px-4 py-3 text-brand-600 resize-none focus:outline-none focus:border-accent-500"
              />
            </label>

            <button type="submit" className="btn-primary w-full">
              Envoyer <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>

        <div className="pt-7 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} D-Codex. Tous droits reserves.
          </p>
          <p className="text-xs text-slate-500 uppercase tracking-[0.14em]">Design . Code . Impact</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;