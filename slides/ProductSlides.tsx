import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, CheckCircle, Users, CreditCard, ShieldCheck, BarChart3,
  FileText, Database, Stethoscope, HeartPulse,
  Zap, Mic, Target, Brain, Printer, Clock, ArrowRight
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
  const leftFeatures = [
    {
      icon: FileText,
      title: 'Tracabilite Parfaite',
      sub: 'Standard SOAP',
      text: 'Dossier patient structure nativement en Subjectif, Objectif, Analyse, Plan. Chaque consultation est documentee de facon rigoureuse et retrouvable.',
      accent: 'bg-smart-100 text-smart-600',
      tag: 'S  O  A  P',
    },
    {
      icon: Stethoscope,
      title: 'Modules Specialises Natifs',
      sub: 'Multi-Specialite',
      text: 'Cardiologie, Gynecologie, Pediatrie, Neurologie, Ophtalmologie, Orthopedie, ECG -- chaque specialite dispose de son interface dediee.',
      accent: 'bg-teal-100 text-teal-600',
    },
  ];

  const rightFeatures = [
    {
      icon: Database,
      title: 'Base CIM-10 Integree',
      sub: 'Codification Auto',
      text: 'Codification automatique des diagnostics selon le standard international. Standardisation et suivi epidemiologique precis.',
      accent: 'bg-cyan-100 text-cyan-600',
    },
    {
      icon: HeartPulse,
      title: 'Base Medicaments Maroc',
      sub: 'DCI / Vidal-like',
      text: 'Prescription securisee avec alertes dosage et galenique verifiees. Base exhaustive des medicaments disponibles au Maroc.',
      accent: 'bg-emerald-100 text-emerald-600',
      highlight: true,
    },
  ];

  const FeatureCard = ({ f, i, align }: { f: typeof leftFeatures[0] & { highlight?: boolean }; i: number; align: 'left' | 'right' }) => (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -18 : 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15 + i * 0.12 }}
      className={`flex flex-col gap-2 ${align === 'left' ? 'items-end text-right' : 'items-start text-left'}`}
    >
      <div className={`flex items-center gap-2.5 ${align === 'left' ? 'flex-row-reverse' : ''}`}>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${f.accent}`}>
          <f.icon size={18} />
        </div>
        <div>
          <h3 className="text-[13px] md:text-sm font-bold text-slate-800 leading-tight">{f.title}</h3>
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-smart-500">{f.sub}</span>
        </div>
      </div>
      {f.tag && (
        <div className="flex gap-1 mt-0.5">
          <span className={`text-[10px] font-mono font-bold tracking-[0.25em] px-2 py-0.5 rounded-md bg-smart-50 text-smart-600 border border-smart-200`}>
            {f.tag}
          </span>
        </div>
      )}
      <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed max-w-[220px]">{f.text}</p>
      {f.highlight && (
        <div className="flex items-center gap-1.5 mt-0.5">
          <CheckCircle size={12} className="text-emerald-500" />
          <span className="text-[10px] font-bold text-emerald-600">Alertes Dosage Verifiees</span>
        </div>
      )}
    </motion.div>
  );

  return (
    <Slide>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-smart-100/50 rounded-full blur-[120px] pointer-events-none translate-y-1/3 translate-x-1/4" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 -translate-x-1/4" />
      <SlideHeader
        label="Le Coeur Medical"
        title="Pilier 2 : La Rigueur Clinique"
        subtitle="C'est ce qui securise la pratique du medecin."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.8fr_1fr] gap-4 lg:gap-5 flex-1 min-h-0 items-center">
        <div className="hidden lg:flex flex-col gap-8 justify-center py-2">
          {leftFeatures.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} align="left" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative h-full min-h-0 rounded-2xl overflow-hidden shadow-hero ring-1 ring-slate-200/60"
        >
          <img
            src="/Gemini_Generated_Image_z9gt3z9gt3z9gt3z.png"
            alt="SmartDoc Rigueur Clinique - Le Coeur Medical"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="hidden lg:flex flex-col gap-8 justify-center py-2">
          {rightFeatures.map((f, i) => (
            <FeatureCard key={i} f={f} i={i + 2} align="right" />
          ))}
        </div>
      </div>
    </Slide>
  );
};

export const PillarThreeSlide = () => {
  const insuranceTags = ['CNOPS', 'CNSS', 'AXA', 'Assurances Privees'];

  const certTypes = ['Aptitude', 'Repos Medical', 'Orientation', 'Courrier Confrere'];

  return (
    <div className="relative w-full h-full overflow-hidden bg-mesh">
      <motion.div
        className="hidden lg:block absolute top-[8%] right-[2%] w-[52%] h-[84%] rounded-3xl overflow-hidden ring-1 ring-slate-200/50 shadow-hero"
        initial={{ opacity: 0, x: 50, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <img
          src="/Gemini_Generated_Image_z9gt3z9gt3z9gt3z.png"
          alt="SmartDoc Automatisation Administrative"
          className="w-full h-full object-contain bg-white"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/70" />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-smart-100/50 rounded-full blur-[120px] pointer-events-none translate-y-1/3" />
      <div className="absolute top-0 left-1/3 w-[250px] h-[250px] bg-teal-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative h-full flex flex-col px-6 sm:px-10 md:px-14 lg:px-20 pt-16 sm:pt-20 pb-16 overflow-y-auto scrollbar-hide">
        <SlideHeader
          label="La Specificite Maroc"
          title="Pilier 3 : L'Automatisation Administrative"
          subtitle="Ce qui fait gagner du temps a l'assistante et fidelise le patient."
        />

        <div className="flex-1 flex items-center min-h-0">
          <div className="w-full lg:max-w-[46%] space-y-5 lg:space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-800 leading-snug"
            >
              Zero paperasse manuelle.
              <br />
              <span className="text-smart-600">Tout est genere automatiquement.</span>
            </motion.p>

            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-white rounded-2xl p-4 md:p-5 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                    <Printer size={18} />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-800">Feuilles de Soins</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-3">
                  Remplissage et impression automatique des formulaires officiels directement depuis la consultation.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {insuranceTags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.06 }}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-600 border border-teal-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-white rounded-2xl p-4 md:p-5 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-smart-50 flex items-center justify-center text-smart-600">
                    <FileText size={18} />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-800">Certificats & Courriers</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-3">
                  Bibliotheque de modeles generes en 1 clic avec les donnees du patient pre-remplies.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {certTypes.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.06 }}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-smart-50 text-smart-600 border border-smart-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-6 pt-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-smart-50 flex items-center justify-center text-smart-600">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-slate-900">1 clic</p>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-wider">Generation instantanee</p>
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-slate-900">100%</p>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-wider">Conforme reglementation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
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
