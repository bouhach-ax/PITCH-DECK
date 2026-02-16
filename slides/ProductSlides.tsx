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
      <p className="text-[10px] md:text-[11px] text-slate-500 leading-relaxed max-w-[180px]">{f.text}</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-3 lg:gap-4 flex-1 min-h-0 items-center">
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
      <p className="text-[10px] md:text-[11px] text-slate-500 leading-relaxed max-w-[190px]">{f.text}</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-3 lg:gap-4 flex-1 min-h-0 items-center">
        <div className="hidden lg:flex flex-col gap-6 justify-center py-2">
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

        <div className="hidden lg:flex flex-col gap-6 justify-center py-2">
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
        className="hidden lg:block absolute top-[8%] right-[2%] w-[46%] h-[84%] rounded-3xl overflow-hidden ring-1 ring-slate-200/50 shadow-hero"
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

      <div className="relative h-full flex flex-col px-5 sm:px-8 md:px-12 lg:px-14 pt-12 sm:pt-14 pb-12 overflow-y-auto scrollbar-hide">
        <SlideHeader
          label="La Specificite Maroc"
          title="Pilier 3 : L'Automatisation Administrative"
          subtitle="Ce qui fait gagner du temps a l'assistante et fidelise le patient."
        />

        <div className="flex-1 flex items-center min-h-0">
          <div className="w-full lg:max-w-[48%] space-y-4 lg:space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-base sm:text-lg md:text-xl font-extrabold text-slate-800 leading-snug"
            >
              Zero paperasse manuelle.
              <br />
              <span className="text-smart-600">Tout est genere automatiquement.</span>
            </motion.p>

            <div className="space-y-2.5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-white rounded-2xl p-3 md:p-4 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                    <Printer size={16} />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-slate-800">Feuilles de Soins</h3>
                </div>
                <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed mb-2.5">
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
                className="bg-white rounded-2xl p-3 md:p-4 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-smart-50 flex items-center justify-center text-smart-600">
                    <FileText size={16} />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-slate-800">Certificats & Courriers</h3>
                </div>
                <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed mb-2.5">
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
              className="flex items-center gap-5 pt-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-smart-50 flex items-center justify-center text-smart-600">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-slate-900">1 clic</p>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-wider">Generation instantanee</p>
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-slate-900">100%</p>
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
    {
      icon: Mic,
      title: 'SmartVoice',
      stat: 'Darija + FR + AR',
      desc: 'Le medecin parle naturellement -- en francais, arabe ou Darija -- et SmartDoc structure automatiquement un dossier SOAP complet, ordonnance incluse.',
      accent: 'from-cyan-500 to-teal-500',
      iconBg: 'bg-cyan-100 text-cyan-600',
      border: 'border-cyan-200/60',
    },
    {
      icon: Target,
      title: 'SmartScan',
      stat: 'Extraction Auto',
      desc: 'Bilans biologiques et imageries numerises en un clic. Les valeurs pathologiques sont detectees, mises en evidence et classees dans le dossier.',
      accent: 'from-smart-500 to-smart-400',
      iconBg: 'bg-smart-100 text-smart-600',
      border: 'border-smart-200/60',
    },
    {
      icon: Brain,
      title: 'SmartContext',
      stat: 'Alertes Risques',
      desc: "Avant chaque consultation, l'IA synthese l'historique complet du patient et alerte le medecin sur les risques, allergies et interactions medicamenteuses.",
      accent: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-100 text-emerald-600',
      border: 'border-emerald-200/60',
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden bg-mesh">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-smart-100/50 rounded-full blur-[150px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="relative h-full flex flex-col px-5 sm:px-8 md:px-12 lg:px-14 pt-12 sm:pt-14 pb-10 overflow-y-auto scrollbar-hide">
        <SlideHeader
          label="Le Game Changer"
          title="Pilier 4 : L'Intelligence SmartDoc"
          subtitle={<>3 modules IA qui transforment radicalement la pratique medicale.</>}
        />

        <div className="flex-1 flex flex-col lg:flex-row gap-4 min-h-0">
          <div className="lg:w-[38%] flex flex-col gap-2.5 justify-center flex-shrink-0">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.12 }}
                className={`group relative bg-white rounded-xl p-3 border ${m.border} shadow-card hover:shadow-card-hover transition-all cursor-default`}
              >
                <div className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b ${m.accent}`} />
                <div className="pl-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${m.iconBg}`}>
                        <m.icon size={14} />
                      </div>
                      <h3 className="text-sm font-extrabold text-slate-900">{m.title}</h3>
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r ${m.accent} text-white`}>
                      {m.stat}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 mt-1 px-1"
            >
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-smart-600" />
                <span className="text-[11px] font-bold text-slate-700">Zero saisie manuelle</span>
              </div>
              <div className="w-px h-4 bg-slate-200" />
              <div className="flex items-center gap-2">
                <ArrowRight size={14} className="text-smart-600" />
                <span className="text-[11px] font-bold text-slate-700">Temps consult. /2</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-[62%] relative flex-1 min-h-0 rounded-2xl overflow-hidden shadow-hero ring-1 ring-slate-200/50"
          >
            <img
              src="/Gemini_Generated_Image_cgyqwecgyqwecgyq.png"
              alt="SmartDoc Intelligence - SmartVoice, SmartScan, SmartContext"
              className="w-full h-full object-contain bg-gradient-to-br from-slate-50 to-white"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
