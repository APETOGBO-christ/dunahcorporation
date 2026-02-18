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
    name: 'AWAGA Kodjo Israel',
    role: 'CEO, Cybersecurite',
    bio: 'Leader visionnaire expert en securite offensive et protection des infrastructures numeriques.',
    image: '/israel.jpg',
    linkedin: 'https://www.linkedin.com/in/kodjo-isra%C3%ABl-awaga-333250331/',
    facebook: 'https://www.facebook.com/share/1ATPWDDo9G/',
  },
  {
    id: '2',
    name: 'BLEOUSSI Ededa',
    role: 'Developpeur',
    bio: 'Developpeur full-stack passionne par la creation d interfaces fluides et performantes.',
    image: '/ededa.jpg',
    linkedin: 'https://www.linkedin.com/in/ed%C3%A9da-bleoussi',
    email: 'ededa.blssi@gmail.com',
  },
  {
    id: '3',
    name: 'Josue KOMADAN',
    role: 'Designer',
    bio: 'Designer creatif specialise dans l experience utilisateur et l esthetique moderne.',
    image: '/josue.jpg',
    linkedin: 'https://www.linkedin.com/in/komadan-josu%C3%A9-k-m-514a78394/',
    facebook: 'https://www.facebook.com/profile.php?id=100070133946318',
  },
  {
    id: '4',
    name: 'Yawo Grace AKOGO',
    role: 'Developpeur',
    bio: 'Developpeur specialisee dans les solutions logicielles sur mesure et l optimisation de code.',
    image: '/grace.jpeg',
    linkedin: 'http://www.linkedin.com/in/yawo-grace-akogo-91075b29a',
    email: 'yawograceakogo@gmail.com',
  },
  {
    id: '5',
    name: 'Epiphane Junior GNAMATO',
    role: 'Developpeur',
    bio: 'Developpeur d applications mobiles et web focalise sur l innovation technique.',
    image: '/epiphane.jpg',
    linkedin: 'https://www.linkedin.com/in/epiphane-junior-gnamato-768233298/',
    facebook: 'https://web.facebook.com/epiphanejunior.gnamato',
  },
];

const Team: React.FC = () => {
  return (
    <section className="section-shell">
      <div className="container mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="tag-pill mx-auto mb-4">Equipe</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-950 mb-3">
            Les talents <span className="gradient-text">D-Codex</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Une equipe complementaire, orientee qualite de livraison.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
          {team.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group soft-card overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute left-4 right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/85 text-xs leading-relaxed mb-3">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-md bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-colors"
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
                        className="w-7 h-7 rounded-md bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-colors"
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
                        className="w-7 h-7 rounded-md bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-colors"
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
                        className="w-7 h-7 rounded-md bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-7 h-7 rounded-md bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-base font-display font-semibold text-slate-950 mb-1">{member.name}</h3>
                <p className="text-sm text-brand-600 font-medium">{member.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;