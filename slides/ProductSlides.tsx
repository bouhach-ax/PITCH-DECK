import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, CheckCircle, Users, CreditCard, ShieldCheck, BarChart3,
  FileText, Database, Stethoscope, HeartPulse,
  Zap, Mic, Target, Brain
} from 'lucide-react';
import { Slide, SlideHeader, GlassCard } from '../components/SlideComponents';

export const PillarOneSlide = () => (
  <Slide>
    <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-smart-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
    <SlideHeader
      label="Le Socle Business"
      title="Pilier 1 : L'Administration & La Gestion"
      subtitle="C'est ce qui fait tourner le cabinet au quotidien."
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2.5 flex-1 min-h-0">
      <GlassCard title="Gestion Avancée des RDV" icon={Calendar} index={0}>
        Agenda multi-vues, gestion des urgences, listes d'attente intelligentes.
      </GlassCard>
      <GlassCard title="Système Anti-Absentéisme" icon={CheckCircle} index={1}>
        Envoi automatique de rappels (SMS/WhatsApp) 24h/48h avant. Réduction drastique des "No-Shows".
      </GlassCard>
      <GlassCard title="Salle d'Attente Digitale" icon={Users} index={2}>
        Suivi en temps réel des patients présents, chrono d'attente pour optimiser le flux.
      </GlassCard>
      <GlassCard title="Pilotage Financier" icon={CreditCard} highlight index={3}>
        Module de Facturation complet, suivi des encaissements (Espèces/Chèque/Virement), gestion des impayés et Tableau de Bord de Chiffre d'Affaires sécurisé.
      </GlassCard>
      <GlassCard title="Gestion des Rôles" icon={ShieldCheck} index={4}>
        Interface dédiée "Assistante" (Accueil/RDV) avec cloisonnement strict des données médicales et financières sensibles.
      </GlassCard>
      <GlassCard title="Rapports & Analytics" icon={BarChart3} index={5}>
        Tableaux de bord en temps réel pour suivre les performances du cabinet et optimiser la prise de décision.
      </GlassCard>
    </div>
  </Slide>
);

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
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-smart-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <SlideHeader
        label="Le Cœur Médical"
        title="Pilier 2 : La Rigueur Clinique"
        subtitle="C'est ce qui sécurise la pratique du médecin."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 md:gap-3 flex-1 min-h-0">
        <div className="flex flex-col gap-2 min-h-0">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 + i * 0.08 }}
              className="glass rounded-xl p-3 flex gap-2.5"
            >
              <div className="p-1.5 rounded-lg bg-white/[0.05] text-white/40 flex-shrink-0 h-fit">
                <item.icon size={14} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] md:text-xs font-semibold text-white/80 mb-0.5">{item.title}</h3>
                <p className="text-[10px] md:text-[11px] text-white/35 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-hl rounded-xl p-3 md:p-4 flex flex-col min-h-0"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-smart-600/20 text-smart-400">
              <HeartPulse size={16} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-smart-300">Prescription Sécurisée</h3>
              <p className="text-[9px] text-smart-500/60 uppercase tracking-wider font-semibold">DCI & Vidal-like</p>
            </div>
          </div>
          <ul className="space-y-1.5 flex-1">
            {prescriptionItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.06 }}
                className="flex gap-2 items-start"
              >
                <CheckCircle size={12} className="text-smart-500/50 flex-shrink-0 mt-0.5" />
                <span className="text-[10.5px] md:text-[11px] text-white/45">{item}</span>
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
    <Slide>
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-smart-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <SlideHeader
        label="La Spécificité Maroc"
        title="Pilier 3 : L'Automatisation Administrative"
        subtitle="C'est ce qui fait gagner du temps à l'assistante et fidélise le patient."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0 items-center">
        <div className="flex flex-col gap-3">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.12 }}
              className="glass rounded-xl p-4 flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-smart-400 flex-shrink-0 bg-smart-600/15">
                <item.icon size={18} />
              </div>
              <div>
                <h3 className="text-xs md:text-sm font-semibold text-white/80 mb-1">{item.title}</h3>
                <p className="text-[10.5px] md:text-[11.5px] text-white/35 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <motion.div
              animate={{ rotate: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 glass rounded-2xl transform -rotate-6"
            />
            <motion.div
              animate={{ rotate: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 bg-white/[0.04] border border-white/[0.08] rounded-2xl transform rotate-6 flex items-center justify-center"
            >
              <FileText className="text-white/10 w-12 h-12" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 -bottom-3 bg-gradient-to-br from-smart-600 to-smart-500 text-white p-3 rounded-xl z-10 shadow-glow"
            >
              <Zap size={22} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export const PillarFourSlide = () => {
  const modules = [
    { icon: Mic, title: 'SmartVoice', sub: 'Assistant Vocal Structuré', text: "Capacité unique à transformer une dictée naturelle (multilingue/Darija) en un dossier SOAP structuré + Ordonnance + RDV. Ce n'est pas de la simple transcription, c'est de la structuration de donnée clinique.", border: 'border-rose-500/15', iconBg: 'bg-rose-500/15 text-rose-400', subColor: 'text-rose-400/50', bg: 'bg-rose-500/[0.05]' },
    { icon: Target, title: 'SmartScan', sub: 'Analyse Documentaire', text: "Numérisation intelligente des bilans biologiques et imageries (Radios/Scanners). Le système extrait les données, met en évidence les valeurs pathologiques et les classe dans le dossier.", border: 'border-blue-500/15', iconBg: 'bg-blue-500/15 text-blue-400', subColor: 'text-blue-400/50', bg: 'bg-blue-500/[0.05]' },
    { icon: Brain, title: 'SmartContext', sub: 'Analyse de Dossier', text: "Algorithme de synthèse qui analyse l'historique complet du patient (consultations passées, antécédents) pour offrir au médecin un résumé des risques et points de vigilance avant chaque consultation.", border: 'border-smart-500/15', iconBg: 'bg-smart-500/15 text-smart-400', subColor: 'text-smart-400/50', bg: 'bg-smart-500/[0.05]' },
  ];

  return (
    <Slide>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-smart-600/[0.04] rounded-full blur-[180px] pointer-events-none" />
      <SlideHeader
        label="Le Game Changer"
        title="Pilier 4 : L'Intelligence SmartDoc"
        subtitle={<>C'est ce qui différencie SmartDoc de <span className="text-smart-400 font-semibold">tout ce qui existe</span>.</>}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 md:gap-3 flex-1 min-h-0">
        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className={`rounded-xl p-3 md:p-4 flex flex-col h-full border ${m.border} ${m.bg}`}
          >
            <div className={`p-2 rounded-lg w-fit mb-2 ${m.iconBg}`}>
              <m.icon size={16} />
            </div>
            <h3 className="text-sm md:text-base font-bold text-white/90 mb-0.5">{m.title}</h3>
            <p className={`text-[9px] uppercase tracking-wider font-semibold mb-1.5 ${m.subColor}`}>{m.sub}</p>
            <p className="text-[10.5px] md:text-[11.5px] text-white/35 leading-relaxed flex-1">{m.text}</p>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};
