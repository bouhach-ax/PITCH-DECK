import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Award, Globe, AlertTriangle, Zap, TrendingUp, ShieldCheck, DollarSign } from 'lucide-react';
import { Slide, CenteredSlide, SlideHeader, GlassCard, SlideImage } from '../components/SlideComponents';

const LOGO_URL = "https://thasmkgvldvgglmflkcb.supabase.co/storage/v1/object/sign/logo/White%20logo%20-%20no%20background.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZjkzMGI1My1kMmU1LTQ3ZmMtOTU2YS0wN2JiYzZhMjcxZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvL1doaXRlIGxvZ28gLSBubyBiYWNrZ3JvdW5kLnBuZyIsImlhdCI6MTc3MTE2MDM2MiwiZXhwIjoyMDg2NTIwMzYyfQ.m0R9AXOCLjDhlEcI4ppoQMucHpG5VFkMQe48c5Rr2jw";

export const CoverSlide = () => (
  <div className="relative w-full h-full overflow-hidden bg-hero">
    <div className="absolute inset-0 opacity-20">
      <img src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-smart-950/95 via-smart-800/90 to-smart-900/80" />

    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 text-center">
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        src={LOGO_URL}
        alt="SmartDoc.ma"
        className="h-10 md:h-14 mb-6 md:mb-8"
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 font-bold text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 md:mb-8 backdrop-blur-sm"
      >
        Investor Master Pitch V2
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight"
      >
        SmartDoc<span className="text-smart-300">.ma</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-light mb-8 md:mb-10 max-w-4xl"
      >
        Le Premier Assistant Médical Augmenté du Maroc
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl w-full">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/15 text-left hover:bg-white/15 transition-colors"
        >
          <Eye className="w-8 h-8 md:w-10 md:h-10 text-smart-300 mb-3" />
          <h3 className="text-base md:text-lg font-bold text-white mb-2">Vision</h3>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            Devenir le standard de gestion clinique et administrative pour les médecins au Maroc
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/15 text-left hover:bg-white/15 transition-colors"
        >
          <Award className="w-8 h-8 md:w-10 md:h-10 text-smart-300 mb-3" />
          <h3 className="text-base md:text-lg font-bold text-white mb-2">Positionnement</h3>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            L'ERP Médical 360° : Rigueur Clinique + Excellence Administrative + Intelligence Métier
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);

export const SummarySlide = () => {
  const cards = [
    { title: "Le Contexte", subtitle: "L'Urgence", icon: Globe, text: "La médecine mondiale vit sa plus grande mutation : l'avènement de l'IA. Le médecin de 2026 ne peut plus se contenter d'être un archiviste sur des logiciels obsolètes.", position: 'top-left' },
    { title: "Le Manque", subtitle: "L'Obsolescence", icon: AlertTriangle, text: "Les solutions actuelles au Maroc sont des freins. Outils passifs et muets, sans assistance intelligente. De la donnée morte, jamais analysée ni valorisée.", position: 'top-right' },
    { title: "La Solution", subtitle: "SmartDoc", icon: Zap, text: "Le Premier Assistant Médical Augmenté du Maroc. Cloud natif, fusionnant ERP de gestion et IA cognitive. Il écoute, structure, analyse et automatise.", position: 'bottom-left', highlight: true },
    { title: "La Valeur", subtitle: "Le Boost", icon: TrendingUp, text: "Libère le médecin de la charge administrative. Automatisation SOAP, sécurisation DCI, gestion admin. Recentrage à 100% sur le soin patient.", position: 'bottom-right' },
  ];

  return (
    <Slide>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-smart-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-smart-100/30 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
      <SlideHeader label="La Vision Augmentee" title="Executive Summary" />

      <div className="relative flex-1 min-h-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="absolute inset-0 flex items-center justify-center z-0"
        >
          <div className="relative w-[45%] max-w-[420px] aspect-[16/10] rounded-3xl overflow-hidden shadow-hero border-2 border-white/60">
            <img
              src="/Gemini_Generated_Image_myammomyammomyam.jpeg"
              alt="SmartDoc - Avant et Apres"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </motion.div>

        <div className="relative z-10 h-full grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: i < 2 ? -15 : 15, x: i % 2 === 0 ? -15 : 15 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className={`flex ${i < 2 ? 'items-start' : 'items-end'} ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[250px] rounded-xl p-3 backdrop-blur-xl border transition-all duration-300 ${
                  card.highlight
                    ? 'bg-smart-600/95 border-smart-400/50 shadow-hero'
                    : 'bg-white/90 border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-smart-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`p-1 rounded-lg flex-shrink-0 ${
                    card.highlight ? 'bg-white/20 text-white' : 'bg-smart-50 text-smart-600'
                  }`}>
                    <card.icon size={14} />
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold leading-tight ${card.highlight ? 'text-white' : 'text-slate-800'}`}>
                      {card.title}
                    </h3>
                    <span className={`text-[9px] font-semibold uppercase tracking-wider ${card.highlight ? 'text-white/70' : 'text-smart-500'}`}>
                      {card.subtitle}
                    </span>
                  </div>
                </div>
                <p className={`text-[11px] leading-relaxed ${card.highlight ? 'text-white/85' : 'text-slate-500'}`}>
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export const ProblemSlide = () => {
  const fractures = [
    {
      title: 'Fracture Technologique',
      icon: AlertTriangle,
      accent: 'bg-red-500',
      iconBg: 'bg-red-500/20 text-red-100',
      text: 'Logiciels Desktop figes dans les annees 2000. Passivite totale, surcharge cognitive et deconnexion des standards modernes.',
    },
    {
      title: 'Fracture Clinique',
      icon: ShieldCheck,
      accent: 'bg-amber-500',
      iconBg: 'bg-amber-500/20 text-amber-100',
      text: 'Donnees non structurees, absence de filet de securite pour les prescriptions (DCI/Interactions), perte d\'information critique.',
    },
    {
      title: 'Fracture Organisationnelle',
      icon: DollarSign,
      accent: 'bg-orange-500',
      iconBg: 'bg-orange-500/20 text-orange-100',
      text: 'Processus morceles, fuite de revenus de 15-20% (RDV manques, impayes), temps administratif sans valeur ajoutee.',
    },
  ];

  return (
    <Slide>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-100/40 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
      <SlideHeader
        label="La Realite du Medecin-Entrepreneur"
        title="Le Probleme"
        subtitle={<>Le medecin marocain moderne fait face a une <span className="text-red-500 font-bold">triple fracture</span> :</>}
      />

      <div className="relative flex-1 min-h-0 rounded-3xl overflow-hidden shadow-hero">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/Gemini_Generated_Image_493qms493qms493q.jpeg"
          alt="Triple fracture du medecin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

        <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
            {fractures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/15 overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-white/25"
              >
                <div className={`h-1 w-full ${f.accent}`} />
                <div className="p-3 md:p-4">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${f.iconBg}`}>
                      <f.icon size={18} />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white leading-tight">{f.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};
