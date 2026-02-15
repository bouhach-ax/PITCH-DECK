import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Award, Globe, AlertTriangle, Zap, TrendingUp, ShieldCheck, DollarSign, Activity } from 'lucide-react';
import { Slide, CenteredSlide, SlideHeader, GlassCard } from '../components/SlideComponents';

export const CoverSlide = () => (
  <CenteredSlide>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-smart-600/[0.06] rounded-full blur-[180px] pointer-events-none" />
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.03 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <Activity className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] text-smart-400" />
    </motion.div>

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center max-w-5xl"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-block px-5 py-2 rounded-full border border-smart-600/30 bg-smart-600/10 text-smart-400 font-semibold text-xs tracking-[0.2em] uppercase mb-6 md:mb-8"
      >
        Investor Master Pitch V2
      </motion.div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight">
        SmartDoc<span className="text-smart-400">.ma</span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/35 font-light mb-8 md:mb-12">
        Le Premier Assistant Médical Augmenté du Maroc
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ x: -15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-4 md:p-5 text-center"
        >
          <Eye className="w-6 h-6 text-smart-400 mb-2 mx-auto" />
          <h3 className="text-sm font-semibold text-white/90 mb-1">Vision</h3>
          <p className="text-white/35 text-[11px] leading-relaxed">
            Devenir le standard de gestion clinique et administrative pour les médecins au Maroc
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-xl p-4 md:p-5 text-center"
        >
          <Award className="w-6 h-6 text-smart-400 mb-2 mx-auto" />
          <h3 className="text-sm font-semibold text-white/90 mb-1">Positionnement</h3>
          <p className="text-white/35 text-[11px] leading-relaxed">
            L'ERP Médical 360° : Rigueur Clinique + Excellence Administrative + Intelligence Métier
          </p>
        </motion.div>
      </div>
    </motion.div>
  </CenteredSlide>
);

export const SummarySlide = () => (
  <Slide>
    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-smart-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
    <SlideHeader label="La Vision Augmentée" title="Executive Summary" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 flex-1 min-h-0">
      <GlassCard title="Le Contexte - L'Urgence" icon={Globe} index={0}>
        La médecine mondiale vit sa plus grande mutation depuis l'informatique : l'avènement de l'Intelligence Artificielle. Le médecin de 2026 ne peut plus se contenter d'être un "archiviste" qui saisit des données dans des logiciels desktop déconnectés et obsolètes.
      </GlassCard>
      <GlassCard title="Le Manque - L'Obsolescence" icon={AlertTriangle} index={1}>
        Les solutions actuelles au Maroc (logiciels installés localement ou simples agendas en ligne) sont des freins. Ce sont des outils passifs, "muets", qui n'offrent aucune assistance intelligente. Ils stockent de la donnée morte, sans l'analyser ni la valoriser.
      </GlassCard>
      <GlassCard title="La Solution SmartDoc - Le Nouveau Standard" icon={Zap} highlight index={2}>
        SmartDoc est le Premier Assistant Médical Augmenté du Maroc. C'est une plateforme Cloud native qui fusionne la rigueur d'un ERP de gestion avec la puissance cognitive d'une IA de pointe. Il ne se contente pas de stocker : il écoute, il structure, il analyse et il automatise.
      </GlassCard>
      <GlassCard title="La Valeur Ajoutée - Le Boost de Performance" icon={TrendingUp} index={3}>
        SmartDoc libère le médecin de la charge mentale administrative et technique. En automatisant la structuration des dossiers (SOAP), la sécurisation des prescriptions (DCI) et la gestion administrative, il permet au praticien de se recentrer à 100% sur son cœur de métier : le soin et la relation patient.
      </GlassCard>
    </div>
  </Slide>
);

export const ProblemSlide = () => {
  const fractures = [
    { title: 'Fracture Technologique & Cognitive', icon: AlertTriangle, color: 'bg-rose-500/10 text-rose-400 border-rose-500/15', text: 'Le médecin utilise des logiciels Desktop figés dans les années 2000. Passivité totale, surcharge cognitive et déconnexion des standards modernes (IA, Cloud, API).' },
    { title: 'Fracture Clinique & Sécuritaire', icon: ShieldCheck, color: 'bg-amber-500/10 text-amber-400 border-amber-500/15', text: 'Données non structurées, absence de filet de sécurité pour les prescriptions (DCI/Interactions), et perte d\'information sur les examens externes.' },
    { title: 'Fracture Organisationnelle', icon: DollarSign, color: 'bg-orange-500/10 text-orange-400 border-orange-500/15', text: 'Processus morcelés, fuite de revenus estimée à 15-20% (RDV manqués, impayés), et temps administratif gâché sans valeur ajoutée.' },
  ];

  return (
    <Slide>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-rose-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <SlideHeader
        label="La Réalité du Médecin-Entrepreneur"
        title="Le Problème"
        subtitle={<>Le médecin marocain moderne fait face à une <span className="text-rose-400 font-semibold">triple fracture</span> :</>}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-3 flex-1 min-h-0">
        {fractures.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className={`rounded-xl p-3 md:p-4 flex flex-col h-full border ${f.color}`}
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 flex-shrink-0 ${f.color}`}>
              <f.icon size={16} />
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-white/80 mb-1.5">{f.title}</h3>
            <p className="text-[10.5px] md:text-[11.5px] text-white/35 leading-relaxed flex-1">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};
