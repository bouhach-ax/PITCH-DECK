import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Rocket, Target, Server, Stethoscope, Activity } from 'lucide-react';
import { Slide, CenteredSlide, SlideHeader } from '../components/SlideComponents';
import { AskChart } from '../components/Charts';

export const RoadmapSlide = () => {
  const milestones = [
    { icon: CheckCircle, title: 'État Actuel', text: 'Produit V1 finalisé et stable. Modules spécialisés (Gynéco, Cardio, Pédiatrie) opérationnels. Moteur d\'Intelligence calibré sur le contexte marocain.', active: true },
    { icon: Rocket, title: 'Go-To-Market Q1-Q2 2026', text: 'Déploiement d\'une force de vente terrain (Délégués digitaux) sur l\'axe Casablanca-Rabat pour équiper les 100 premiers cabinets "Ambassadeurs".', active: false },
    { icon: Target, title: 'Objectif Q4 2026', text: 'Atteindre 500 médecins abonnés actifs. Lancement de l\'application mobile patient (Carnet de santé connecté).', active: false },
  ];

  return (
    <Slide>
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-smart-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <SlideHeader label="L'Avenir" title="Traction & Roadmap" />

      <div className="relative ml-5 md:ml-8 border-l border-white/[0.08] flex-1 flex flex-col justify-center gap-4 md:gap-5 py-2">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 + i * 0.12 }}
            className="relative pl-6 md:pl-8"
          >
            <div className={`absolute -left-[9px] top-2 w-[18px] h-[18px] rounded-full flex items-center justify-center ${
              m.active
                ? 'bg-gradient-to-br from-smart-600 to-smart-500 shadow-glow'
                : 'bg-white/[0.06] border border-white/[0.12]'
            }`}>
              <m.icon size={9} className={m.active ? 'text-white' : 'text-white/40'} />
            </div>
            <div className={`p-3 md:p-4 rounded-xl ${
              m.active ? 'glass-hl' : i === 1 ? 'bg-white/[0.04] border border-white/[0.08]' : 'glass'
            }`}>
              <h3 className={`text-xs md:text-sm font-bold mb-1 ${m.active ? 'text-smart-300' : 'text-white/70'}`}>
                {m.title}
              </h3>
              <p className={`text-[10.5px] md:text-[11.5px] leading-relaxed ${m.active ? 'text-white/50' : 'text-white/30'}`}>
                {m.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};

export const TeamSlide = () => (
  <Slide>
    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-smart-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
    <SlideHeader
      label="Expertise & Vision"
      title="L'Équipe"
      subtitle="Une équipe pluridisciplinaire alliant :"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0 items-center">
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
        className="glass rounded-xl p-4 md:p-5 flex flex-col sm:flex-row gap-3 items-center"
      >
        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-smart-600/30 to-smart-500/15 rounded-full flex items-center justify-center flex-shrink-0">
          <Server className="text-smart-400 w-6 h-6 md:w-7 md:h-7" />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-white/90 text-sm md:text-base mb-1">Expertise Technique</h4>
          <p className="text-white/35 text-[10.5px] md:text-[11.5px] leading-relaxed">
            Maîtrise des architectures Cloud, Sécurité des données de santé et Développement IA.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-xl p-4 md:p-5 flex flex-col sm:flex-row gap-3 items-center"
      >
        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-smart-600/30 to-smart-500/15 rounded-full flex items-center justify-center flex-shrink-0">
          <Stethoscope className="text-smart-400 w-6 h-6 md:w-7 md:h-7" />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-white/90 text-sm md:text-base mb-1">Connaissance Métier</h4>
          <p className="text-white/35 text-[10.5px] md:text-[11.5px] leading-relaxed">
            Collaboration étroite avec des médecins partenaires pour définir les flux de travail (UX/UI) et valider la pertinence clinique des fonctionnalités.
          </p>
        </div>
      </motion.div>
    </div>
  </Slide>
);

export const ConclusionSlide = () => (
  <CenteredSlide>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-smart-600/[0.05] rounded-full blur-[180px] pointer-events-none" />

    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-smart-600 to-smart-500 rounded-2xl flex items-center justify-center mb-5 shadow-glow"
    >
      <Activity className="text-white w-7 h-7 md:w-8 md:h-8" />
    </motion.div>

    <motion.h2
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight"
    >
      CONCLUSION
    </motion.h2>

    <motion.div
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="max-w-3xl text-center"
    >
      <p className="text-sm md:text-base lg:text-lg text-white/35 font-light mb-3">
        SmartDoc n'est pas une simple "aide à la saisie".
      </p>
      <p className="text-sm md:text-base lg:text-lg mb-3">
        C'est la <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-smart-400 to-smart-300">colonne vertébrale numérique</span> du cabinet médical moderne.
      </p>
      <p className="text-xs md:text-sm lg:text-base text-white/45 leading-relaxed font-medium">
        Nous apportons la structure, la sécurité et l'intelligence qui manquent aujourd'hui aux médecins pour faire face à l'augmentation de leur charge de travail et aux exigences de leurs patients.
      </p>
    </motion.div>
  </CenteredSlide>
);

export const InvestmentSlide = () => (
  <CenteredSlide>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-smart-600/[0.06] rounded-full blur-[200px] pointer-events-none" />

    <motion.div
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mb-4 md:mb-5 text-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">Investissement</h2>
      <p className="text-xs md:text-sm text-smart-400/70 font-medium">Seed Round</p>
    </motion.div>

    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.15, type: 'spring', stiffness: 100 }}
      className="relative mb-6 md:mb-8"
    >
      <div className="absolute inset-0 bg-smart-400/20 blur-3xl rounded-full" />
      <div className="relative text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-smart-400 to-smart-300 leading-none">
        3.5 MDH
      </div>
    </motion.div>

    <motion.div
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="w-full max-w-xl"
    >
      <h3 className="text-xs md:text-sm text-white/40 mb-3 text-center font-medium">Allocation Budget</h3>
      <AskChart data={[
        { name: 'Sales Force', value: 40 },
        { name: 'Tech / IA', value: 35 },
        { name: 'Marketing', value: 25 },
      ]} />
    </motion.div>
  </CenteredSlide>
);
