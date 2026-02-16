import React from 'react';
import { motion } from 'framer-motion';
import {
  Server, Zap, Globe, Brain,
  LineChart, Target, TrendingUp,
  Calendar, Award, Sparkles,
  Users, Stethoscope, MapPin, Activity,
  ArrowUpRight, ChevronRight, CircleDot
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
            <h3 className={`text-xs md:text-sm font-bold mb-1 ${f.highlight ? 'text-white' : 'text-white/90'}`}>{f.title}</h3>
            <p className={`text-[11px] md:text-xs leading-relaxed flex-1 ${f.highlight ? 'text-white/70' : 'text-white/45'}`}>{f.text}</p>
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

export const MarketSlide = () => {
  const marketStats = [
    { icon: Stethoscope, value: '17K', label: 'Medecins prives', sublabel: 'au Maroc' },
    { icon: MapPin, value: '65%', label: 'Casablanca & Rabat', sublabel: 'concentration urbaine' },
    { icon: Activity, value: '<5%', label: 'Taux de digitalisation', sublabel: 'opportunite massive' },
  ];

  const painPoints = [
    'Dossiers papier ou Excel -- zero tracabilite',
    'Aucun outil adapte au contexte marocain (langue, reglementation)',
    'Perte de temps administrative : 40% du temps medecin',
    'Zero aide a la decision clinique',
  ];

  return (
    <div className="relative w-full h-full overflow-hidden bg-hero">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-smart-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative h-full flex flex-col px-5 sm:px-8 md:px-12 lg:px-14 pt-10 sm:pt-12 pb-8 overflow-y-auto scrollbar-hide">
        <div className="mb-4 md:mb-5 flex-shrink-0">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase text-smart-300 bg-smart-500/20 border border-smart-400/25 mb-3"
          >
            Secteur Prive
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Un marche de <span className="text-transparent bg-clip-text bg-gradient-to-r from-smart-300 to-emerald-300">17 000 medecins</span>
            <br />
            <span className="text-white/60">qui attend sa revolution digitale.</span>
          </motion.h2>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 md:gap-5">
          <div className="flex flex-col gap-3 min-h-0">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="grid grid-cols-3 gap-2.5"
            >
              {marketStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, type: 'spring', stiffness: 80 }}
                  className="relative bg-white/[0.06] backdrop-blur-sm rounded-2xl p-4 border border-white/[0.1] hover:bg-white/[0.1] transition-all group overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-smart-400/10 rounded-full blur-[25px] group-hover:bg-smart-400/20 transition-all" />
                  <div className="p-2 rounded-xl bg-smart-500/20 text-smart-300 w-fit mb-3">
                    <stat.icon size={18} />
                  </div>
                  <p className="text-xl md:text-2xl font-black text-white mb-0.5">{stat.value}</p>
                  <p className="text-[11px] md:text-xs font-bold text-white/80 leading-tight">{stat.label}</p>
                  <p className="text-[10px] text-white/40 mt-0.5">{stat.sublabel}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-gradient-to-br from-smart-600/30 to-smart-700/20 backdrop-blur-sm rounded-2xl p-5 border border-smart-400/20 flex-1 min-h-0 flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-xl bg-smart-400/20 text-smart-300">
                  <Target size={18} />
                </div>
                <h3 className="text-sm md:text-base font-bold text-white">Coeur de Cible</h3>
              </div>
              <p className="text-xs md:text-sm text-white/65 leading-relaxed mb-3">
                Medecins installes en <span className="text-white font-semibold">cabinet prive</span> a fort volume
                (20+ patients/jour), noyes sous l'administratif et en quete d'un outil qui les comprend.
              </p>
              <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-smart-300" />
                  <span className="text-[11px] font-bold text-white/70">20+ patients/jour</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-1.5">
                  <ArrowUpRight size={14} className="text-emerald-400" />
                  <span className="text-[11px] font-bold text-white/70">Forte demande</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-3 min-h-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, type: 'spring', stiffness: 80 }}
              className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 border border-white/[0.1] flex-1 min-h-0 flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-red-500/20 text-red-400">
                  <Zap size={18} />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white">La Douleur du Marche</h3>
                  <p className="text-[10px] text-white/40 font-medium">Ce que vivent 17K medecins au quotidien</p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 flex-1">
                {painPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-lg bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500/25 transition-all">
                      <CircleDot size={12} className="text-red-400" />
                    </div>
                    <p className="text-xs md:text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="bg-gradient-to-r from-smart-500/25 via-emerald-500/20 to-teal-500/25 backdrop-blur-sm rounded-2xl p-4 border border-smart-400/20 flex items-center gap-4"
            >
              <div className="p-2.5 rounded-xl bg-emerald-400/20 text-emerald-300 flex-shrink-0">
                <TrendingUp size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-white mb-0.5">Opportunite Unique</h3>
                <p className="text-[11px] text-white/55 leading-relaxed">
                  Un marche vierge de <span className="text-emerald-300 font-semibold">+3.5 milliards MAD</span> de depenses sante privee, sans leader digital installe. Le premier qui s'impose <span className="text-white font-semibold">prend tout</span>.
                </p>
              </div>
              <ChevronRight size={20} className="text-white/30 flex-shrink-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
        <h3 className="text-sm md:text-base font-bold text-slate-800 mb-1.5">Abonnement Mensuel</h3>
        <p className="text-xs md:text-sm text-slate-500 leading-relaxed flex-1 mb-3">
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
        <h3 className="text-sm md:text-base font-bold text-white mb-1.5 relative z-10">Abonnement Annuel</h3>
        <p className="text-xs md:text-sm text-white/70 leading-relaxed flex-1 mb-3 relative z-10">
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
        <h3 className="text-sm md:text-base font-bold text-slate-800 mb-1.5">Services Additionnels</h3>
        <p className="text-xs md:text-sm text-slate-500 leading-relaxed flex-1 mb-3">
          Téléconsultation intégrée, Module de comptabilité avancée exportable, SMS Marketing pour le cabinet.
        </p>
        <div className="flex items-center gap-2 text-smart-600 font-extrabold text-base md:text-lg">
          <TrendingUp size={20} /> + Revenus
        </div>
      </motion.div>
    </div>
  </Slide>
);
