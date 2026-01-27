import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-slate-950 relative overflow-hidden pt-24 pb-8">
      {/* Footer background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
            >
              Prêt à transformer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                votre vision
              </span>{' '}
              ?
            </motion.h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Discutons de votre projet. Que ce soit pour une refonte complète, une stratégie digitale ou une application sur mesure au Togo et à l'international.
            </p>

            <div className="space-y-6">
              <a href="mailto:dunahcorporation@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors p-4 rounded-xl hover:bg-slate-900 border border-transparent hover:border-slate-800">
                <div className="bg-brand-600/20 p-3 rounded-lg text-brand-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="font-medium">dunahcorporation@gmail.com</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-slate-300 p-4 rounded-xl border border-transparent">
                <div className="bg-brand-600/20 p-3 rounded-lg text-brand-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Téléphone</div>
                  <div className="font-medium">+228 91 77 45 63</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300 p-4 rounded-xl border border-transparent">
                <div className="bg-brand-600/20 p-3 rounded-lg text-brand-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Siège</div>
                  <div className="font-medium">Lomé, Togo</div>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Nom complet</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Entreprise</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Votre société" />
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <label className="text-sm text-slate-400">Email professionnel</label>
              <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="john@company.com" />
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm text-slate-400">Votre message</label>
              <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none" placeholder="Parlez-nous de votre projet..."></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              Envoyer le message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Dunah Corporation, Lomé, Togo. Tous droits réservés.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;