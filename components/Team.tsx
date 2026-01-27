import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, Facebook } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  email?: string;
  facebook?: string;
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'AWAGA Kodjo Israël',
    role: 'CEO, Cybersécurité',
    bio: 'Leader visionnaire expert en sécurité offensive et protection des infrastructures numériques.',
    image: '/israel.jpg',
    linkedin: 'https://www.linkedin.com/in/kodjo-isra%C3%ABl-awaga-333250331/',
    facebook: 'https://www.facebook.com/share/1ATPWDDo9G/'
  },
  {
    id: '2',
    name: 'BLEOUSSI Ededa',
    role: 'Développeur',
    bio: 'Développeur full-stack passionné par la création d\'interfaces fluides et performantes.',
    image: '/ededa.jpg',
    linkedin: 'https://www.linkedin.com/in/edéda-bleoussi',
    email: 'ededa.blssi@gmail.com'
  },
  {
    id: '3',
    name: 'Josue KOMADAN',
    role: 'Designer',
    bio: 'Designer créatif spécialisé dans l\'expérience utilisateur et l\'esthétique moderne.',
    image: '/josue.jpg',
    linkedin: 'https://www.linkedin.com/in/komadan-josu%C3%A9-k-m-514a78394/',
    facebook: 'https://www.facebook.com/profile.php?id=100070133946318'
  },
  {
    id: '4',
    name: 'Yawo Grace AKOGO',
    role: 'Développeur',
    bio: 'Développeur spécialisée dans les solutions logicielles sur mesure et l\'optimisation de code.',
    image: '/grace.jpeg',
    linkedin: 'http://www.linkedin.com/in/yawo-grace-akogo-91075b29a',
    email: 'yawograceakogo@gmail.com'
  },
  {
    id: '5',
    name: 'Epiphane Junior GNAMATO',
    role: 'Développeur',
    bio: 'Développeur d\'applications mobiles et web focalisé sur l\'innovation technique.',
    image: '/epiphane.jpg',
    linkedin: 'https://www.linkedin.com/in/epiphane-junior-gnamato-768233298/',
    facebook: 'https://web.facebook.com/epiphanejunior.gnamato'
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            L'Équipe <span className="gradient-text">Dunah</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ici vous trouverez les meilleurs dans leur domaine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-all duration-300">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-slate-300 text-xs mb-4">{member.bio}</p>
                      
                      {/* Social links */}
                      <div className="flex justify-center gap-2">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-slate-800 hover:bg-brand-600 rounded-lg transition-colors text-slate-400 hover:text-white"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {member.facebook && (
                          <a
                            href={member.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-slate-800 hover:bg-brand-600 rounded-lg transition-colors text-slate-400 hover:text-white"
                            aria-label="Facebook"
                          >
                            <Facebook className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-slate-800 hover:bg-brand-600 rounded-lg transition-colors text-slate-400 hover:text-white"
                            aria-label="Twitter"
                          >
                            <Twitter className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-slate-800 hover:bg-brand-600 rounded-lg transition-colors text-slate-400 hover:text-white"
                            aria-label="GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="p-1.5 bg-slate-800 hover:bg-brand-600 rounded-lg transition-colors text-slate-400 hover:text-white"
                            aria-label="Email"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-brand-400 text-sm font-medium">{member.role}</p>
                </div>

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 via-accent-500/0 to-brand-500/0 group-hover:from-brand-500/20 group-hover:via-accent-500/20 group-hover:to-brand-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
