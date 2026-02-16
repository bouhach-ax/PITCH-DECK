import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Rocket, Target, Server, Stethoscope, Activity } from 'lucide-react';
import { Slide, CenteredSlide, CenteredDarkSlide, SlideHeader, SlideImage } from '../components/SlideComponents';
import { AskChart } from '../components/Charts';

export const RoadmapSlide = () => {
  const milestones = [
    { icon: CheckCircle, title: 'État Actuel', text: 'Produit V1 finalisé et stable. Modules spécialisés (Gynéco, Cardio, Pédiatrie) opérationnels. Moteur d\'Intelligence calibré sur le contexte marocain.', active: true },
    { icon: Rocket, title: 'Go-To-Market Q1-Q2 2026', text: 'Déploiement d\'une force de vente terrain (Délégués digitaux) sur l\'axe Casablanca-Rabat pour équiper les 100 premiers cabinets "Ambassadeurs".', active: false },
    { icon: Target, title: 'Objectif Q4 2026', text: 'Atteindre 500 médecins abonnés actifs. Lancement de l\'application mobile patient (Carnet de santé connecté).', active: false },
  ];

  return (
    <Slide>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-smart-100/60 rounded-full blur-[120px] pointer-events-none" />
      <SlideHeader label="L'Avenir" title="Traction & Roadmap" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 flex-1 min-h-0">
        <div className="lg:col-span-3 relative ml-4 md:ml-6 border-l-2 border-smart-200 flex flex-col justify-center gap-5 md:gap-6 py-2">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 + i * 0.15 }}
              className="relative pl-7 md:pl-9"
            >
              <div className={`absolute -left-[13px] top-3 w-6 h-6 rounded-full flex items-center justify-center ${
                m.active
                  ? 'bg-gradient-to-br from-smart-600 to-smart-500 shadow-stat'
                  : 'bg-white border-2 border-smart-200'
              }`}>
                <m.icon size={12} className={m.active ? 'text-white' : 'text-smart-400'} />
              </div>
              <div className={`p-4 md:p-5 rounded-2xl transition-all ${
                m.active
                  ? 'bg-gradient-to-br from-smart-50 to-smart-100/50 border-2 border-smart-300 shadow-card'
                  : 'bg-white border border-slate-200/80 shadow-card'
              }`}>
                <h3 className={`text-sm md:text-base font-bold mb-1 ${m.active ? 'text-smart-700' : 'text-slate-700'}`}>
                  {m.title}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed ${m.active ? 'text-smart-800/70' : 'text-slate-500'}`}>
                  {m.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <SlideImage
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Roadmap et stratégie"
          className="hidden lg:block lg:col-span-2 h-full"
        />
      </div>
    </Slide>
  );
};

export const TeamSlide = () => (
  <Slide>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-smart-100/50 rounded-full blur-[120px] pointer-events-none" />
    <SlideHeader
      label="Expertise & Vision"
      title="L'Équipe"
      subtitle="Une équipe pluridisciplinaire alliant :"
    />

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 flex-1 min-h-0 items-center">
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-gradient-to-br from-smart-50 to-smart-100/50 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row gap-4 items-center border-2 border-smart-200 shadow-card"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-smart-600 to-smart-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-stat">
            <Server className="text-white w-8 h-8 md:w-9 md:h-9" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-extrabold text-slate-800 text-sm md:text-base mb-1">Expertise Technique</h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Maîtrise des architectures Cloud, Sécurité des données de santé et Développement IA.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row gap-4 items-center border-2 border-cyan-200 shadow-card"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-600 to-smart-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-stat">
            <Stethoscope className="text-white w-8 h-8 md:w-9 md:h-9" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-extrabold text-slate-800 text-sm md:text-base mb-1">Connaissance Métier</h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Collaboration étroite avec des médecins partenaires pour définir les flux de travail (UX/UI) et valider la pertinence clinique des fonctionnalités.
            </p>
          </div>
        </motion.div>
      </div>
      <SlideImage
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Équipe et collaboration"
        className="hidden lg:block lg:col-span-2 h-full"
      />
    </div>
  </Slide>
);

export const ConclusionSlide = () => (
  <CenteredSlide>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-smart-100/40 rounded-full blur-[150px] pointer-events-none" />

    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-smart-600 to-smart-500 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-hero"
    >
      <Activity className="text-white w-8 h-8 md:w-10 md:h-10" />
    </motion.div>

    <motion.h2
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-5 md:mb-6 tracking-tight"
    >
      CONCLUSION
    </motion.h2>

    <motion.div
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="max-w-3xl text-center relative z-10"
    >
      <p className="text-sm md:text-base lg:text-lg text-slate-400 font-light mb-3">
        SmartDoc n'est pas une simple "aide à la saisie".
      </p>
      <p className="text-sm md:text-base lg:text-lg mb-3">
        C'est la <span className="font-extrabold gradient-text">colonne vertébrale numérique</span> du cabinet médical moderne.
      </p>
      <p className="text-xs md:text-sm lg:text-base text-slate-500 leading-relaxed font-medium">
        Nous apportons la structure, la sécurité et l'intelligence qui manquent aujourd'hui aux médecins pour faire face à l'augmentation de leur charge de travail et aux exigences de leurs patients.
      </p>
    </motion.div>
  </CenteredSlide>
);

export const InvestmentSlide = () => (
  <CenteredDarkSlide>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-smart-400/10 rounded-full blur-[200px] pointer-events-none" />

    <motion.div
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mb-5 md:mb-6 text-center relative z-10"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">Investissement</h2>
      <p className="text-sm md:text-base text-smart-300 font-semibold">Seed Round</p>
    </motion.div>

    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.15, type: 'spring', stiffness: 100 }}
      className="relative mb-8 md:mb-10 z-10"
    >
      <div className="absolute inset-0 bg-smart-400/25 blur-[50px] rounded-full" />
      <div className="relative text-4xl md:text-6xl lg:text-[80px] font-black text-transparent bg-clip-text bg-gradient-to-r from-smart-300 to-smart-200 leading-none">
        3.5 MDH
      </div>
    </motion.div>

    <motion.div
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="w-full max-w-2xl relative z-10"
    >
      <h3 className="text-sm md:text-base text-white/50 mb-4 text-center font-semibold">Allocation Budget</h3>
      <div className="bg-white/[0.06] rounded-2xl border border-white/[0.1] p-5 md:p-6">
        <AskChart data={[
          { name: 'Sales Force', value: 40 },
          { name: 'Tech / IA', value: 35 },
          { name: 'Marketing', value: 25 },
        ]} />
      </div>
    </motion.div>
  </CenteredDarkSlide>
);
