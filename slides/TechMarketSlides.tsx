import React from 'react';
import { motion } from 'framer-motion';
import {
  Server, Zap, Globe, Brain,
  LineChart, Target, TrendingUp,
  Calendar, Award, Sparkles
} from 'lucide-react';
import { Slide, SlideHeader, GlassCard } from '../components/SlideComponents';
import { MarketChart } from '../components/Charts';

export const TechSlide = () => (
  <Slide>
    <div className="absolute top-[-15%] left-[-5%] w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
    <SlideHeader
      label="Architecture Robuste"
      title="La Technologie & Sécurité"
      subtitle={<>Nous vendons de la <span className="text-smart-400 font-semibold">confiance</span>.</>}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 flex-1 min-h-0">
      <GlassCard title="Architecture Cloud Souveraine" icon={Server} index={0}>
        Hébergement sécurisé (Supabase), Chiffrement AES-256 des données de santé au repos et en transit.
      </GlassCard>
      <GlassCard title="Mode Hybride (Offline-First)" icon={Zap} index={1}>
        Architecture PWA (Progressive Web App) permettant de continuer à consulter les dossiers et gérer l'agenda même en cas de coupure internet.
      </GlassCard>
      <GlassCard title="Interopérabilité" icon={Globe} index={2}>
        API prête pour s'interfacer avec les futurs systèmes de santé nationaux ou laboratoires.
      </GlassCard>
      <GlassCard title="Moteur d'Intelligence Propriétaire" icon={Brain} highlight index={3}>
        Combinaison de modèles de langage avancés optimisés pour le contexte médical marocain (reconnaissance des médicaments locaux, dialecte médical).
      </GlassCard>
    </div>
  </Slide>
);

export const MarketSlide = () => (
  <Slide>
    <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-smart-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
    <SlideHeader label="Secteur Privé" title="Le Marché & La Cible" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-1 min-h-0">
      <div className="flex flex-col gap-2 min-h-0">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-hl rounded-xl p-3 md:p-4"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-smart-600/20 text-smart-400">
              <LineChart size={14} />
            </div>
            <h3 className="text-xs md:text-sm font-bold text-smart-300">Total Addressable Market</h3>
          </div>
          <p className="text-2xl font-bold text-white mb-0.5">~28,000</p>
          <p className="text-[11px] text-white/40 mb-2">Médecins au Maroc (Secteur Privé)</p>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
            <div>
              <p className="text-lg font-bold text-white">12K</p>
              <p className="text-[9px] text-white/30">Généralistes</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">16K</p>
              <p className="text-[9px] text-white/30">Spécialistes</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-3"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-white/[0.05] text-white/40">
              <Target size={14} />
            </div>
            <h3 className="text-xs font-semibold text-white/80">Cœur de Cible</h3>
          </div>
          <p className="text-[10.5px] text-white/35 leading-relaxed">
            Médecins installés en cabinet de groupe ou individuel à fort volume (20+ patients/jour), cherchant à optimiser leur temps administratif et sécuriser leur pratique.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-3"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-white/[0.05] text-white/40">
              <TrendingUp size={14} />
            </div>
            <h3 className="text-xs font-semibold text-white/80">Tendance de Fond</h3>
          </div>
          <p className="text-[10.5px] text-white/35 leading-relaxed">
            Généralisation de l'AMO (Assurance Maladie Obligatoire) qui impose une rigueur administrative accrue (feuilles de soins) que SmartDoc automatise entièrement.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center min-h-0"
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
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-smart-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
    <SlideHeader
      label="Revenus Récurrents"
      title="Business Model"
      subtitle={<>Modèle SaaS B2B classique, lisible et <span className="text-smart-400 font-semibold">scalable</span>.</>}
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-3 flex-1 min-h-0">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-xl p-3 md:p-4 flex flex-col"
      >
        <div className="p-1.5 rounded-lg bg-white/[0.05] text-white/40 w-fit mb-2">
          <Calendar size={16} />
        </div>
        <h3 className="text-sm font-bold text-white/80 mb-1">Abonnement Mensuel</h3>
        <p className="text-[10.5px] text-white/35 leading-relaxed flex-1 mb-3">
          Un prix unique pour l'accès complet (Gestion + Clinique + Intelligence). Pas d'options cachées.
        </p>
        <div className="text-xl md:text-2xl font-bold text-white">
          XXX<span className="text-xs font-normal text-white/30 ml-1">MAD/mois</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="relative glass-hl rounded-xl p-3 md:p-4 flex flex-col"
      >
        <div className="absolute -top-2 right-3 bg-amber-400 text-amber-950 text-[9px] font-bold px-2.5 py-0.5 rounded-full">
          POPULAIRE
        </div>
        <div className="p-1.5 rounded-lg bg-smart-600/20 text-smart-400 w-fit mb-2">
          <Award size={16} />
        </div>
        <h3 className="text-sm font-bold text-smart-300 mb-1">Abonnement Annuel</h3>
        <p className="text-[10.5px] text-white/45 leading-relaxed flex-1 mb-3">
          Paiement upfront (trésorerie immédiate) avec incitation (2 mois offerts).
        </p>
        <div className="text-xl md:text-2xl font-bold text-white">
          10 mois<span className="text-xs font-normal text-white/40 ml-1">/ an</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-xl p-3 md:p-4 flex flex-col"
      >
        <div className="p-1.5 rounded-lg bg-white/[0.05] text-white/40 w-fit mb-2">
          <Sparkles size={16} />
        </div>
        <h3 className="text-sm font-bold text-white/80 mb-1">Services Additionnels</h3>
        <p className="text-[10.5px] text-white/35 leading-relaxed flex-1 mb-3">
          Téléconsultation intégrée, Module de comptabilité avancée exportable, SMS Marketing pour le cabinet.
        </p>
        <div className="flex items-center gap-1.5 text-smart-400 font-bold text-sm">
          <TrendingUp size={16} /> + Revenus
        </div>
      </motion.div>
    </div>
  </Slide>
);
