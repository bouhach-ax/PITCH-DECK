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
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tight"
      >
        SmartDoc<span className="text-smart-300">.ma</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light mb-10 md:mb-14 max-w-4xl"
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

export const SummarySlide = () => (
  <Slide>
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-smart-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
    <SlideHeader label="La Vision Augmentée" title="Executive Summary" />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0">
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden lg:flex rounded-2xl overflow-hidden shadow-hero flex-shrink-0 h-full items-center bg-slate-50"
      >
        <img
          src="/Gemini_Generated_Image_myammomyammomyam.jpeg"
          alt="SmartDoc - Avant et Après"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>
    </div>
  </Slide>
);

export const ProblemSlide = () => {
  const fractures = [
    { title: 'Fracture Technologique & Cognitive', icon: AlertTriangle, color: 'bg-red-50 border-red-200 hover:border-red-300', iconBg: 'bg-red-100 text-red-600', text: 'Le médecin utilise des logiciels Desktop figés dans les années 2000. Passivité totale, surcharge cognitive et déconnexion des standards modernes (IA, Cloud, API).' },
    { title: 'Fracture Clinique & Sécuritaire', icon: ShieldCheck, color: 'bg-amber-50 border-amber-200 hover:border-amber-300', iconBg: 'bg-amber-100 text-amber-600', text: 'Données non structurées, absence de filet de sécurité pour les prescriptions (DCI/Interactions), et perte d\'information sur les examens externes.' },
    { title: 'Fracture Organisationnelle', icon: DollarSign, color: 'bg-orange-50 border-orange-200 hover:border-orange-300', iconBg: 'bg-orange-100 text-orange-600', text: 'Processus morcelés, fuite de revenus estimée à 15-20% (RDV manqués, impayés), et temps administratif gâché sans valeur ajoutée.' },
  ];

  return (
    <Slide>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-100/40 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
      <SlideHeader
        label="La Réalité du Médecin-Entrepreneur"
        title="Le Problème"
        subtitle={<>Le médecin marocain moderne fait face à une <span className="text-red-500 font-bold">triple fracture</span> :</>}
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 flex-1 min-h-0">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {fractures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.12 }}
              className={`rounded-2xl p-4 md:p-5 flex flex-col h-full border-2 transition-all shadow-card ${f.color}`}
            >
              <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 flex-shrink-0 ${f.iconBg}`}>
                <f.icon size={20} />
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed flex-1">{f.text}</p>
            </motion.div>
          ))}
        </div>
        <SlideImage
          src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Médecin face aux défis"
          className="hidden lg:block lg:col-span-2 h-full"
        />
      </div>
    </Slide>
  );
};
