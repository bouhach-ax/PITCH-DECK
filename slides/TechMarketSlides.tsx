import React from 'react';
import { motion } from 'framer-motion';
import {
  Server, Zap, Globe, Brain,
  LineChart, Target, TrendingUp,
  Calendar, Award, Sparkles
} from 'lucide-react';
import { Slide, DarkSlide, SlideHeader, WhiteSlideHeader, GlassCard, SlideImage } from '../components/SlideComponents';
import { MarketChart } from '../components/Charts';

export const TechSlide = () => (
  <DarkSlide>
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-smart-400/8 rounded-full blur-[150px] pointer-events-none" />
    <WhiteSlideHeader
      label="Architecture Robuste"
      title="La Technologie & Sécurité"
      subtitle={<>Nous vendons de la <span className="text-smart-300 font-bold">confiance</span>.</>}
    />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0">
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {[
          { icon: Server, title: 'Architecture Cloud Souveraine', text: 'Hébergement sécurisé (Supabase), Chiffrement AES-256 des données de santé au repos et en transit.' },
          { icon: Zap, title: 'Mode Hybride (Offline-First)', text: "Architecture PWA (Progressive Web App) permettant de continuer à consulter les dossiers et gérer l'agenda même en cas de coupure internet." },
          { icon: Globe, title: 'Interopérabilité', text: "API prête pour s'interfacer avec les futurs systèmes de santé nationaux ou laboratoires." },
          { icon: Brain, title: "Moteur d'Intelligence Propriétaire", text: 'Combinaison de modèles de langage avancés optimisés pour le contexte médical marocain (reconnaissance des médicaments locaux, dialecte médical).', highlight: true },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.08 }}
            className={`rounded-2xl p-4 md:p-5 flex flex-col transition-all ${
              f.highlight
                ? 'bg-smart-600/25 border border-smart-400/30'
                : 'bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1]'
            }`}
          >
            <div className={`p-2 rounded-xl w-fit mb-3 ${f.highlight ? 'bg-smart-400/20 text-smart-300' : 'bg-white/10 text-white/60'}`}>
              <f.icon size={18} />
            </div>
            <h3 className={`text-sm md:text-base font-bold mb-1.5 ${f.highlight ? 'text-white' : 'text-white/90'}`}>{f.title}</h3>
            <p className={`text-xs md:text-sm leading-relaxed flex-1 ${f.highlight ? 'text-white/70' : 'text-white/45'}`}>{f.text}</p>
          </motion.div>
        ))}
      </div>
      <SlideImage
        src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Infrastructure technologique"
        className="hidden lg:block h-full"
      />
    </div>
  </DarkSlide>
);

export const MarketSlide = () => (
  <Slide>
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-smart-100/60 rounded-full blur-[120px] pointer-events-none" />
    <SlideHeader label="Secteur Privé" title="Le Marché & La Cible" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 flex-1 min-h-0">
      <div className="flex flex-col gap-3 min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-smart-600 to-smart-700 rounded-2xl p-5 md:p-6 text-white shadow-hero relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[60px]" />
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="bg-white/20 p-2 rounded-xl">
              <LineChart className="text-white" size={18} />
            </div>
            <h3 className="text-base md:text-lg font-bold">Total Addressable Market</h3>
          </div>
          <p className="text-3xl md:text-4xl font-black mb-1 relative z-10">~28,000</p>
          <p className="text-white/70 text-sm mb-3 relative z-10">Médecins au Maroc (Secteur Privé)</p>
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/15 relative z-10">
            <div>
              <p className="text-xl md:text-2xl font-extrabold">12K</p>
              <p className="text-white/60 text-xs">Généralistes</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-extrabold">16K</p>
              <p className="text-white/60 text-xs">Spécialistes</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-4 md:p-5 border border-slate-200/80 shadow-card"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-2 rounded-xl bg-smart-50 text-smart-600">
              <Target size={16} />
            </div>
            <h3 className="text-sm md:text-base font-bold text-slate-800">Coeur de Cible</h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Médecins installés en cabinet de groupe ou individuel à fort volume (20+ patients/jour), cherchant à optimiser leur temps administratif et sécuriser leur pratique.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-4 md:p-5 border border-slate-200/80 shadow-card"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-2 rounded-xl bg-smart-50 text-smart-600">
              <TrendingUp size={16} />
            </div>
            <h3 className="text-sm md:text-base font-bold text-slate-800">Tendance de Fond</h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Généralisation de l'AMO (Assurance Maladie Obligatoire) qui impose une rigueur administrative accrue (feuilles de soins) que SmartDoc automatise entièrement.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-slate-200/80 shadow-card p-4 flex items-center justify-center"
      >
        <MarketChart data={[
          { name: 'Généralistes', value: 12000 },
          { name: 'Spécialistes', value: 16000 }
        ]} />
      </motion.div>
    </div>
  </Slide>
);

export const BusinessSlide = () => (
  <Slide>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-smart-100/50 rounded-full blur-[120px] pointer-events-none" />
    <SlideHeader
      label="Revenus Récurrents"
      title="Business Model"
      subtitle={<>Modèle SaaS B2B classique, lisible et <span className="text-smart-600 font-bold">scalable</span>.</>}
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-5 md:p-6 flex flex-col border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all"
      >
        <div className="p-2.5 rounded-xl bg-smart-50 text-smart-600 w-fit mb-4">
          <Calendar size={20} />
        </div>
        <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2">Abonnement Mensuel</h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">
          Un prix unique pour l'accès complet (Gestion + Clinique + Intelligence). Pas d'options cachées.
        </p>
        <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
          XXX<span className="text-sm font-medium text-slate-400 ml-1.5">MAD/mois</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative bg-gradient-to-br from-smart-600 to-smart-700 rounded-2xl p-5 md:p-6 flex flex-col shadow-hero overflow-hidden"
      >
        <div className="absolute -top-2 right-4 bg-amber-400 text-amber-900 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-lg z-10">
          POPULAIRE
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[50px]" />
        <div className="p-2.5 rounded-xl bg-white/20 text-white w-fit mb-4 relative z-10">
          <Award size={20} />
        </div>
        <h3 className="text-base md:text-lg font-bold text-white mb-2 relative z-10">Abonnement Annuel</h3>
        <p className="text-sm text-white/70 leading-relaxed flex-1 mb-4 relative z-10">
          Paiement upfront (trésorerie immédiate) avec incitation (2 mois offerts).
        </p>
        <div className="text-2xl md:text-3xl font-extrabold text-white relative z-10">
          10 mois<span className="text-sm font-medium text-white/60 ml-1.5">/ an</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-5 md:p-6 flex flex-col border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all"
      >
        <div className="p-2.5 rounded-xl bg-smart-50 text-smart-600 w-fit mb-4">
          <Sparkles size={20} />
        </div>
        <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2">Services Additionnels</h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">
          Téléconsultation intégrée, Module de comptabilité avancée exportable, SMS Marketing pour le cabinet.
        </p>
        <div className="flex items-center gap-2 text-smart-600 font-extrabold text-base md:text-lg">
          <TrendingUp size={20} /> + Revenus
        </div>
      </motion.div>
    </div>
  </Slide>
);
