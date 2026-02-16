import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, CheckCircle, Users, CreditCard, ShieldCheck, BarChart3,
  FileText, Database, Stethoscope, HeartPulse,
  Zap, Mic, Target, Brain
} from 'lucide-react';
import { Slide, DarkSlide, SlideHeader, WhiteSlideHeader, GlassCard, SlideImage } from '../components/SlideComponents';

export const PillarOneSlide = () => {
  const leftFeatures = [
    { icon: Calendar, title: 'Gestion Avancee des RDV', text: 'Agenda multi-vues, gestion des urgences et listes d\'attente intelligentes.', accent: 'bg-smart-100 text-smart-600' },
    { icon: CheckCircle, title: 'Systeme Anti-Absenteisme', text: 'Rappels automatiques SMS/WhatsApp 24h/48h avant. Reduction drastique des No-Shows.', accent: 'bg-emerald-100 text-emerald-600' },
    { icon: Users, title: 'Salle d\'Attente Digitale', text: 'Suivi en temps reel des patients presents avec chrono d\'attente optimise.', accent: 'bg-cyan-100 text-cyan-600' },
  ];

  const rightFeatures = [
    { icon: CreditCard, title: 'Pilotage Financier', text: 'Facturation complete, encaissements, gestion des impayes et tableau de bord CA securise.', accent: 'bg-smart-600 text-white', highlight: true },
    { icon: ShieldCheck, title: 'Gestion des Roles', text: 'Interface Assistante dediee avec cloisonnement strict des donnees medicales et financieres.', accent: 'bg-slate-100 text-slate-600' },
    { icon: BarChart3, title: 'Rapports & Analytics', text: 'Tableaux de bord en temps reel pour optimiser la prise de decision.', accent: 'bg-teal-100 text-teal-600' },
  ];

  const FeatureItem = ({ f, i, align }: { f: typeof leftFeatures[0] & { highlight?: boolean }; i: number; align: 'left' | 'right' }) => (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -15 : 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + i * 0.12 }}
      className={`flex flex-col gap-1.5 ${align === 'left' ? 'items-end text-right' : 'items-start text-left'}`}
    >
      <div className={`flex items-center gap-2.5 ${align === 'left' ? 'flex-row-reverse' : ''}`}>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${f.accent}`}>
          <f.icon size={16} />
        </div>
        <h3 className={`text-[13px] md:text-sm font-bold leading-tight ${f.highlight ? 'text-smart-700' : 'text-slate-800'}`}>{f.title}</h3>
      </div>
      <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed max-w-[200px]">{f.text}</p>
    </motion.div>
  );

  return (
    <Slide>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-smart-100/60 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 -translate-x-1/4" />
      <SlideHeader
        label="Le Socle Business"
        title="Pilier 1 : L'Administration & La Gestion"
        subtitle="C'est ce qui fait tourner le cabinet au quotidien."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.8fr_1fr] gap-4 lg:gap-5 flex-1 min-h-0 items-center">
        <div className="hidden lg:flex flex-col gap-6 justify-center py-2">
          {leftFeatures.map((f, i) => (
            <FeatureItem key={i} f={f} i={i} align="left" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative h-full min-h-0 rounded-2xl overflow-hidden shadow-hero ring-1 ring-slate-200/60"
        >
          <img
            src="/Gemini_Generated_Image_6t0uc06t0uc06t0u.png"
            alt="SmartDoc Administration & Gestion - 6 modules"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="hidden lg:flex flex-col gap-6 justify-center py-2">
          {rightFeatures.map((f, i) => (
            <FeatureItem key={i} f={f} i={i + 3} align="right" />
          ))}
        </div>
      </div>
    </Slide>
  );
};

export const PillarTwoSlide = () => {
  const items = [
    { icon: FileText, title: 'Dossier Patient Structuré (Standard SOAP)', text: 'Organisation native des données en Subjectif, Objectif, Analyse, Plan. Permet une traçabilité parfaite.' },
    { icon: Database, title: 'Base Médicale Internationale (CIM-10)', text: 'Codification automatique des diagnostics pour un suivi épidémiologique et statistique précis.' },
    { icon: Stethoscope, title: 'Spécialisation Métier', text: 'Modules dédiés par spécialité (Roue Obstétricale Gynéco, Courbes OMS Pédiatrie, Schémas Cardio/Ophtalmo) intégrés nativement.' },
  ];

  const prescriptionItems = [
    'Base de données exhaustive des médicaments (Maroc)',
    'Prescription par Nom Commercial ou DCI',
    'Alerte automatique sur les dosages et formes galéniques',
    "Modèles d'ordonnances (Templates) pour les pathologies fréquentes"
  ];

  return (
    <Slide>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-smart-100/50 rounded-full blur-[120px] pointer-events-none translate-y-1/3 translate-x-1/4" />
      <SlideHeader
        label="Le Coeur Médical"
        title="Pilier 2 : La Rigueur Clinique"
        subtitle="C'est ce qui sécurise la pratique du médecin."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0">
        <div className="flex flex-col gap-3 min-h-0">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 + i * 0.1 }}
              className="bg-white rounded-2xl p-4 md:p-5 flex gap-3 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="p-2 rounded-xl bg-smart-50 text-smart-600 flex-shrink-0 h-fit">
                <item.icon size={18} />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm md:text-base font-bold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-gradient-to-br from-smart-600 to-smart-700 rounded-2xl p-5 md:p-6 flex flex-col min-h-0 shadow-hero relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[60px]" />
          <div className="flex items-center gap-3 mb-1 relative z-10">
            <div className="p-2 rounded-xl bg-white/20 text-white">
              <HeartPulse size={20} />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-white">Prescription Sécurisée</h3>
              <p className="text-[10px] md:text-xs text-smart-200 uppercase tracking-wider font-bold">DCI & Vidal-like</p>
            </div>
          </div>
          <ul className="space-y-2.5 mt-4 flex-1 relative z-10">
            {prescriptionItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex gap-3 items-start"
              >
                <CheckCircle size={16} className="text-smart-200 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/85 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Slide>
  );
};

export const PillarThreeSlide = () => {
  const features = [
    { icon: FileText, title: 'Générateur de Feuilles de Soins', text: 'Remplissage et impression automatique des formulaires officiels (CNOPS, CNSS, AXA, Assurances Privées) directement depuis la consultation.' },
    { icon: CheckCircle, title: 'Certificats & Courriers', text: "Bibliothèque de modèles (Aptitude, Repos, Orientation) générés en 1 clic avec les données du patient." },
  ];

  return (
    <DarkSlide>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-smart-400/10 rounded-full blur-[150px] pointer-events-none" />
      <WhiteSlideHeader
        label="La Spécificité Maroc"
        title="Pilier 3 : L'Automatisation Administrative"
        subtitle="C'est ce qui fait gagner du temps à l'assistante et fidélise le patient."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 flex-1 min-h-0 items-center">
        <div className="flex flex-col gap-4">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 flex items-start gap-4 border border-white/15 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-smart-300 flex-shrink-0 bg-white/15">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SlideImage
          src="https://images.pexels.com/photos/8942090/pexels-photo-8942090.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Automatisation administrative"
          className="h-48 md:h-64 lg:h-full"
        />
      </div>
    </DarkSlide>
  );
};

export const PillarFourSlide = () => {
  const modules = [
    { icon: Mic, title: 'SmartVoice', sub: 'Assistant Vocal Structuré', text: "Capacité unique à transformer une dictée naturelle (multilingue/Darija) en un dossier SOAP structuré + Ordonnance + RDV. Ce n'est pas de la simple transcription, c'est de la structuration de donnée clinique.", color: 'bg-cyan-50 border-cyan-200', iconBg: 'bg-cyan-100 text-cyan-600', subColor: 'text-cyan-600' },
    { icon: Target, title: 'SmartScan', sub: 'Analyse Documentaire', text: "Numérisation intelligente des bilans biologiques et imageries (Radios/Scanners). Le système extrait les données, met en évidence les valeurs pathologiques et les classe dans le dossier.", color: 'bg-smart-50 border-smart-200', iconBg: 'bg-smart-100 text-smart-600', subColor: 'text-smart-600' },
    { icon: Brain, title: 'SmartContext', sub: 'Analyse de Dossier', text: "Algorithme de synthèse qui analyse l'historique complet du patient (consultations passées, antécédents) pour offrir au médecin un résumé des risques et points de vigilance avant chaque consultation.", color: 'bg-emerald-50 border-emerald-200', iconBg: 'bg-emerald-100 text-emerald-600', subColor: 'text-emerald-600' },
  ];

  return (
    <Slide>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-smart-100/40 rounded-full blur-[150px] pointer-events-none" />
      <SlideHeader
        label="Le Game Changer"
        title="Pilier 4 : L'Intelligence SmartDoc"
        subtitle={<>C'est ce qui différencie SmartDoc de <span className="text-smart-600 font-bold">tout ce qui existe</span>.</>}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0">
        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.12 }}
            className={`rounded-2xl p-5 md:p-6 flex flex-col h-full border-2 transition-all shadow-card hover:shadow-card-hover ${m.color}`}
          >
            <div className={`p-2.5 rounded-xl w-fit mb-3 ${m.iconBg}`}>
              <m.icon size={22} />
            </div>
            <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-0.5">{m.title}</h3>
            <p className={`text-[10px] md:text-xs uppercase tracking-wider font-bold mb-3 ${m.subColor}`}>{m.sub}</p>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed flex-1">{m.text}</p>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};
