import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, Brain, FileText,
  ShieldCheck, Activity, Users, TrendingUp,
  Target, Mic, Server, CheckCircle, Zap, AlertTriangle, Globe, Stethoscope, Clock, CreditCard, LayoutGrid, Database, HeartPulse, Sparkles, LineChart, BarChart3, Calendar, Award, Rocket, Eye, DollarSign
} from 'lucide-react';
import { MarketChart, AskChart } from './components/Charts';

const TOTAL_SLIDES = 14;

// --- Components ---

const SlideContainer = ({ children, isActive, darkBg = false }: React.PropsWithChildren<{ isActive: boolean, darkBg?: boolean }>) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`absolute inset-0 w-full h-full flex flex-col ${darkBg ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-smart-900' : 'bg-gradient-to-br from-white via-slate-50 to-smart-50/30'}`}
      >
        <div className="relative z-10 w-full h-full flex flex-col p-3 sm:p-4 md:p-6 overflow-hidden pb-16">
          <div className="flex-1 flex flex-col min-h-0">
            {children}
          </div>
        </div>
        {!darkBg && (
          <>
            <div className="absolute top-[-20%] right-[-15%] w-[800px] h-[800px] bg-smart-100/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-15%] left-[-20%] w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[100px] pointer-events-none" />
          </>
        )}
      </motion.div>
    )}
  </AnimatePresence>
);

const SectionTitle = ({ children, subtitle, white = false }: { children?: React.ReactNode, subtitle?: string, white?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-3 md:mb-4 flex-shrink-0"
  >
    {subtitle && (
      <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-1 ${white ? 'bg-white/10 text-white/80' : 'bg-smart-50 text-smart-700 border border-smart-200'}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${white ? 'text-white' : 'text-slate-900'}`}>
      {children}
    </h2>
  </motion.div>
);

const Card = ({ title, children, icon: Icon, highlight = false, index = 0 }: { title: string, children?: React.ReactNode, icon?: any, highlight?: boolean, index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`group relative p-3 md:p-4 rounded-xl border-2 transition-all duration-300 h-full flex flex-col overflow-hidden ${
      highlight
        ? 'bg-gradient-to-br from-smart-600 to-smart-700 text-white border-smart-500 shadow-2xl shadow-smart-600/30 hover:shadow-smart-600/50'
        : 'bg-white/80 backdrop-blur-sm border-slate-200 hover:border-smart-300 hover:shadow-xl'
    }`}
  >
    {!highlight && <div className="absolute inset-0 bg-gradient-to-br from-smart-50/0 to-smart-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
    <div className="relative z-10 flex flex-col h-full min-h-0">
      <div className="flex items-start gap-2 mb-2">
        {Icon && (
          <div className={`p-1.5 rounded-lg transition-transform duration-300 group-hover:scale-110 ${
            highlight ? 'bg-white/20 text-white' : 'bg-smart-100 text-smart-600'
          }`}>
            <Icon size={16} />
          </div>
        )}
        <h3 className={`text-sm md:text-base font-bold flex-1 leading-tight ${highlight ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h3>
      </div>
      <div className={`text-[11px] md:text-xs leading-snug flex-1 min-h-0 ${highlight ? 'text-white/90' : 'text-slate-600'}`}>
        {children}
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, TOTAL_SLIDES - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-screen h-screen relative bg-slate-900 text-slate-800 font-sans overflow-hidden">

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-4 md:top-6 left-4 md:left-8 z-50 bg-smart-600 px-4 md:px-6 py-2 md:py-3 rounded-xl shadow-lg"
      >
        <img
          src="https://thasmkgvldvgglmflkcb.supabase.co/storage/v1/object/sign/logo/White%20logo%20-%20no%20background.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZjkzMGI1My1kMmU1LTQ3ZmMtOTU2YS0wN2JiYzZhMjcxZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvL1doaXRlIGxvZ28gLSBubyBiYWNrZ3JvdW5kLnBuZyIsImlhdCI6MTc3MTE2MDM2MiwiZXhwIjoyMDg2NTIwMzYyfQ.m0R9AXOCLjDhlEcI4ppoQMucHpG5VFkMQe48c5Rr2jw"
          alt="SmartDoc.ma"
          className="h-6 md:h-8"
        />
      </motion.div>

      {/* Slide Counter */}
      <div className="absolute top-4 md:top-8 right-4 md:right-8 z-50 bg-white/90 backdrop-blur px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold text-slate-700 shadow-lg">
        {currentSlide + 1} / {TOTAL_SLIDES}
      </div>

      <div className="relative w-full h-full">


        {/* SLIDE 0: COVER */}
        <SlideContainer isActive={currentSlide === 0} darkBg={true}>
          <div className="flex flex-col h-full justify-center items-center text-center relative px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.05 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Activity className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] text-smart-400" />
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="z-10 max-w-6xl"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-smart-500 to-teal-500 text-white font-bold text-sm md:text-base tracking-wider uppercase mb-8 shadow-xl"
              >
                Investor Master Pitch V2
              </motion.div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                SmartDoc<span className="text-smart-400">.ma</span>
              </h1>

              <p className="text-2xl sm:text-3xl md:text-4xl text-slate-300 font-light mb-12 md:mb-16">
                Le Premier Assistant Médical Augmenté du Maroc
              </p>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mt-12">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20"
                >
                  <Eye className="w-10 h-10 md:w-12 md:h-12 text-smart-400 mb-4 mx-auto" />
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Vision</h3>
                  <p className="text-slate-300 text-sm md:text-base">
                    Devenir le standard de gestion clinique et administrative pour les médecins au Maroc
                  </p>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20"
                >
                  <Award className="w-10 h-10 md:w-12 md:h-12 text-smart-400 mb-4 mx-auto" />
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Positionnement</h3>
                  <p className="text-slate-300 text-sm md:text-base">
                    L'ERP Médical 360° : Rigueur Clinique + Excellence Administrative + Intelligence Métier
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 1: EXECUTIVE SUMMARY */}
        <SlideContainer isActive={currentSlide === 1}>
          <SectionTitle subtitle="La Vision Augmentée">Executive Summary</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
            <Card title="Le Contexte - L'Urgence" icon={Globe} index={0}>
              La médecine mondiale vit sa plus grande mutation depuis l'informatique : l'avènement de l'Intelligence Artificielle. Le médecin de 2026 ne peut plus se contenter d'être un "archiviste" qui saisit des données dans des logiciels desktop déconnectés et obsolètes.
            </Card>

            <Card title="Le Manque - L'Obsolescence" icon={AlertTriangle} index={1}>
              Les solutions actuelles au Maroc (logiciels installés localement ou simples agendas en ligne) sont des freins. Ce sont des outils passifs, "muets", qui n'offrent aucune assistance intelligente. Ils stockent de la donnée morte, sans l'analyser ni la valoriser.
            </Card>

            <Card title="La Solution SmartDoc - Le Nouveau Standard" icon={Zap} highlight={true} index={2}>
              SmartDoc est le Premier Assistant Médical Augmenté du Maroc. C'est une plateforme Cloud native qui fusionne la rigueur d'un ERP de gestion avec la puissance cognitive d'une IA de pointe. Il ne se contente pas de stocker : il écoute, il structure, il analyse et il automatise.
            </Card>

            <Card title="La Valeur Ajoutée - Le Boost de Performance" icon={TrendingUp} index={3}>
              SmartDoc libère le médecin de la charge mentale administrative et technique. En automatisant la structuration des dossiers (SOAP), la sécurisation des prescriptions (DCI) et la gestion administrative, il permet au praticien de se recentrer à 100% sur son cœur de métier : le soin et la relation patient.
            </Card>
          </div>
        </SlideContainer>

        {/* SLIDE 2: LE PROBLÈME */}
        <SlideContainer isActive={currentSlide === 2} darkBg={true}>
          <SectionTitle subtitle="La Réalité du Médecin-Entrepreneur" white={true}>
            Le Problème
          </SectionTitle>
          <p className="text-base md:text-lg text-white/80 mb-2 md:mb-3 flex-shrink-0">
            Le médecin marocain moderne fait face à une <span className="font-bold text-smart-400">triple fracture</span> :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-4 md:p-5 rounded-xl border-2 border-red-500/30 flex flex-col items-center text-center h-full min-h-0">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 shadow-xl">
                  <AlertTriangle className="text-white w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2">Fracture Technologique & Cognitive</h3>
                <p className="text-slate-300 leading-snug text-[11px] md:text-xs">
                  Le médecin utilise des logiciels Desktop figés dans les années 2000. Passivité totale, surcharge cognitive et déconnexion des standards modernes (IA, Cloud, API).
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-4 md:p-5 rounded-xl border-2 border-orange-500/30 flex flex-col items-center text-center h-full min-h-0">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-3 shadow-xl">
                  <ShieldCheck className="text-white w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2">Fracture Clinique & Sécuritaire</h3>
                <p className="text-slate-300 leading-snug text-[11px] md:text-xs">
                  Données non structurées, absence de filet de sécurité pour les prescriptions (DCI/Interactions), et perte d'information sur les examens externes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-4 md:p-5 rounded-xl border-2 border-amber-500/30 flex flex-col items-center text-center h-full min-h-0">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-3 shadow-xl">
                  <DollarSign className="text-white w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2">Fracture Organisationnelle</h3>
                <p className="text-slate-300 leading-snug text-[11px] md:text-xs">
                  Processus morcelés, fuite de revenus estimée à 15-20% (RDV manqués, impayés), et temps administratif gâché sans valeur ajoutée.
                </p>
              </div>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 3: PILIER 1 - ADMINISTRATION */}
        <SlideContainer isActive={currentSlide === 3}>
          <SectionTitle subtitle="Le Socle Business">
            Pilier 1 : L'Administration & La Gestion
          </SectionTitle>
          <p className="text-slate-600 mb-4 md:mb-6 text-base md:text-lg font-medium flex-shrink-0">
            C'est ce qui fait tourner le cabinet au quotidien.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
            <Card title="Gestion Avancée des RDV" icon={Calendar} index={0}>
              Agenda multi-vues, gestion des urgences, listes d'attente intelligentes.
            </Card>

            <Card title="Système Anti-Absentéisme" icon={CheckCircle} index={1}>
              Envoi automatique de rappels (SMS/WhatsApp) 24h/48h avant. Réduction drastique des "No-Shows".
            </Card>

            <Card title="Salle d'Attente Digitale" icon={Users} index={2}>
              Suivi en temps réel des patients présents, chrono d'attente pour optimiser le flux.
            </Card>

            <Card title="Pilotage Financier" icon={CreditCard} highlight={true} index={3}>
              Module de Facturation complet, suivi des encaissements (Espèces/Chèque/Virement), gestion des impayés et Tableau de Bord de Chiffre d'Affaires sécurisé.
            </Card>

            <Card title="Gestion des Rôles" icon={ShieldCheck} index={4}>
              Interface dédiée "Assistante" (Accueil/RDV) avec cloisonnement strict des données médicales et financières sensibles.
            </Card>

            <Card title="Rapports & Analytics" icon={BarChart3} index={5}>
              Tableaux de bord en temps réel pour suivre les performances du cabinet et optimiser la prise de décision.
            </Card>
          </div>
        </SlideContainer>

        {/* SLIDE 4: PILIER 2 - CLINIQUE */}
        <SlideContainer isActive={currentSlide === 4}>
          <SectionTitle subtitle="Le Cœur Médical">
            Pilier 2 : La Rigueur Clinique
          </SectionTitle>
          <p className="text-slate-600 mb-2 md:mb-3 text-sm md:text-base font-medium flex-shrink-0">
            C'est ce qui sécurise la pratique du médecin.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0">
            <div className="space-y-2 min-h-0">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex gap-2 p-3 md:p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-smart-300 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="bg-smart-100 p-1.5 rounded-lg text-smart-600 h-fit">
                  <FileText size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xs md:text-sm mb-0.5">Dossier Patient Structuré (Standard SOAP)</h3>
                  <p className="text-[10px] md:text-xs text-slate-600 leading-snug">
                    Organisation native des données en Subjectif, Objectif, Analyse, Plan. Permet une traçabilité parfaite.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-2 p-3 md:p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-smart-300 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="bg-smart-100 p-1.5 rounded-lg text-smart-600 h-fit">
                  <Database size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xs md:text-sm mb-0.5">Base Médicale Internationale (CIM-10)</h3>
                  <p className="text-[10px] md:text-xs text-slate-600 leading-snug">
                    Codification automatique des diagnostics pour un suivi épidémiologique et statistique précis.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex gap-2 p-3 md:p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-smart-300 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="bg-smart-100 p-1.5 rounded-lg text-smart-600 h-fit">
                  <Stethoscope size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xs md:text-sm mb-0.5">Spécialisation Métier</h3>
                  <p className="text-[10px] md:text-xs text-slate-600 leading-snug">
                    Modules dédiés par spécialité (Roue Obstétricale Gynéco, Courbes OMS Pédiatrie, Schémas Cardio/Ophtalmo) intégrés nativement.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative bg-gradient-to-br from-smart-500 to-smart-700 rounded-xl p-4 md:p-5 overflow-hidden shadow-2xl min-h-0"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white/20 p-1.5 rounded-lg">
                    <HeartPulse className="text-white" size={20} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white">Prescription Sécurisée</h3>
                </div>
                <p className="text-white/90 mb-2 text-[10px] md:text-xs">DCI & Vidal-like</p>
                <ul className="space-y-1.5 md:space-y-2">
                  {[
                    'Base de données exhaustive des médicaments (Maroc)',
                    'Prescription par Nom Commercial ou DCI',
                    'Alerte automatique sur les dosages et formes galéniques',
                    'Modèles d\'ordonnances (Templates) pour les pathologies fréquentes'
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex gap-3 items-start text-white"
                    >
                      <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                      <span className="text-[10px] md:text-xs">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 5: PILIER 3 - AUTOMATISATION */}
        <SlideContainer isActive={currentSlide === 5} darkBg={true}>
          <SectionTitle subtitle="La Spécificité Maroc" white={true}>
            Pilier 3 : L'Automatisation Administrative
          </SectionTitle>
          <p className="text-lg md:text-xl text-white/80 mb-4 md:mb-6 flex-shrink-0">
            C'est ce qui fait gagner du temps à l'assistante et fidélise le patient.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center flex-1">
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-smart-400 to-teal-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-xl">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-2">Générateur de Feuilles de Soins</h3>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                    Remplissage et impression automatique des formulaires officiels (CNOPS, CNSS, AXA, Assurances Privées) directement depuis la consultation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-smart-400 to-teal-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-xl">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-2">Certificats & Courriers</h3>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                    Bibliothèque de modèles (Aptitude, Repos, Orientation) générés en 1 clic avec les données du patient.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-white/30 transform -rotate-6"
                />
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-white/30 transform rotate-6 z-10 flex items-center justify-center"
                >
                  <FileText className="text-white/40 w-20 h-20" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-6 -bottom-6 bg-gradient-to-br from-smart-400 to-teal-500 text-white p-6 rounded-2xl shadow-2xl z-20"
                >
                  <Zap size={40} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 6: PILIER 4 - INTELLIGENCE */}
        <SlideContainer isActive={currentSlide === 6}>
          <SectionTitle subtitle="Le Game Changer">
            Pilier 4 : L'Intelligence SmartDoc
          </SectionTitle>
          <p className="text-slate-600 mb-2 md:mb-3 text-sm md:text-base font-medium flex-shrink-0">
            C'est ce qui différencie SmartDoc de <span className="font-bold text-smart-600">tout ce qui existe</span>.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative bg-gradient-to-br from-purple-500 to-pink-600 p-4 md:p-5 rounded-xl border-2 border-purple-400/50 shadow-2xl overflow-hidden min-h-0"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="bg-white/20 p-2 rounded-lg w-fit mb-2">
                  <Mic className="text-white" size={20} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1">SmartVoice</h3>
                <p className="text-[9px] text-white/80 uppercase tracking-wider mb-1 font-bold">Assistant Vocal Structuré</p>
                <p className="text-white/90 text-[10px] md:text-xs leading-snug">
                  Capacité unique à transformer une dictée naturelle (multilingue/Darija) en un dossier SOAP structuré + Ordonnance + RDV. Ce n'est pas de la simple transcription, c'est de la structuration de donnée clinique.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative bg-gradient-to-br from-blue-500 to-cyan-600 p-4 md:p-5 rounded-xl border-2 border-blue-400/50 shadow-2xl overflow-hidden min-h-0"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="bg-white/20 p-2 rounded-lg w-fit mb-2">
                  <Target className="text-white" size={20} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1">SmartScan</h3>
                <p className="text-[9px] text-white/80 uppercase tracking-wider mb-1 font-bold">Analyse Documentaire</p>
                <p className="text-white/90 text-[10px] md:text-xs leading-snug">
                  Numérisation intelligente des bilans biologiques et imageries (Radios/Scanners). Le système extrait les données, met en évidence les valeurs pathologiques et les classe dans le dossier.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative bg-gradient-to-br from-smart-500 to-teal-600 p-4 md:p-5 rounded-xl border-2 border-smart-400/50 shadow-2xl overflow-hidden min-h-0"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="bg-white/20 p-2 rounded-lg w-fit mb-2">
                  <Brain className="text-white" size={20} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1">SmartContext</h3>
                <p className="text-[9px] text-white/80 uppercase tracking-wider mb-1 font-bold">Analyse de Dossier</p>
                <p className="text-white/90 text-[10px] md:text-xs leading-snug">
                  Algorithme de synthèse qui analyse l'historique complet du patient (consultations passées, antécédents) pour offrir au médecin un résumé des risques et points de vigilance avant chaque consultation.
                </p>
              </div>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 7: TECHNOLOGIE & SÉCURITÉ */}
        <SlideContainer isActive={currentSlide === 7} darkBg={true}>
          <SectionTitle subtitle="Architecture Robuste" white={true}>
            La Technologie & Sécurité
          </SectionTitle>
          <p className="text-base md:text-lg text-white mb-2 md:mb-3 font-light flex-shrink-0">
            Nous vendons de la <span className="font-bold text-smart-400">confiance</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-xl border border-white/20"
            >
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-smart-400 to-teal-500 p-2 rounded-lg">
                  <Server className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">Architecture Cloud Souveraine</h3>
                  <p className="text-slate-300 text-[10px] md:text-xs leading-snug">
                    Hébergement sécurisé (Supabase), Chiffrement AES-256 des données de santé au repos et en transit.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-xl border border-white/20"
            >
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-smart-400 to-teal-500 p-2 rounded-lg">
                  <Zap className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">Mode Hybride (Offline-First)</h3>
                  <p className="text-slate-300 text-[10px] md:text-xs leading-snug">
                    Architecture PWA (Progressive Web App) permettant de continuer à consulter les dossiers et gérer l'agenda même en cas de coupure internet.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-xl border border-white/20"
            >
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-smart-400 to-teal-500 p-2 rounded-lg">
                  <Globe className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">Interopérabilité</h3>
                  <p className="text-slate-300 text-[10px] md:text-xs leading-snug">
                    API prête pour s'interfacer avec les futurs systèmes de santé nationaux ou laboratoires.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative bg-gradient-to-br from-smart-500 to-teal-600 p-4 md:p-5 rounded-xl border-2 border-smart-400 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
              <div className="relative z-10 flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Brain className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">Moteur d'Intelligence Propriétaire</h3>
                  <p className="text-white/90 text-[10px] md:text-xs leading-snug">
                    Combinaison de modèles de langage avancés optimisés pour le contexte médical marocain (reconnaissance des médicaments locaux, dialecte médical).
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 8: LE MARCHÉ & LA CIBLE */}
        <SlideContainer isActive={currentSlide === 8}>
          <SectionTitle subtitle="Secteur Privé">Le Marché & La Cible</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 flex-1 items-center">
            <div className="space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-smart-500 to-teal-600 p-5 md:p-6 rounded-2xl text-white shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <LineChart className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Total Addressable Market</h3>
                </div>
                <p className="text-3xl font-bold mb-1">~28,000</p>
                <p className="text-white/90 text-sm md:text-base">
                  Médecins au Maroc (Secteur Privé)
                </p>
                <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-2xl font-bold">12K</p>
                    <p className="text-white/80 text-xs">Généralistes</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">16K</p>
                    <p className="text-white/80 text-xs">Spécialistes</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-5 md:p-6 rounded-2xl border-2 border-slate-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-smart-100 p-2 rounded-lg">
                    <Target className="text-smart-600" size={20} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">Cœur de Cible</h3>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Médecins installés en cabinet de groupe ou individuel à fort volume (20+ patients/jour), cherchant à optimiser leur temps administratif et sécuriser leur pratique.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-5 md:p-6 rounded-2xl border-2 border-slate-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-smart-100 p-2 rounded-lg">
                    <TrendingUp className="text-smart-600" size={20} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">Tendance de Fond</h3>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Généralisation de l'AMO (Assurance Maladie Obligatoire) qui impose une rigueur administrative accrue (feuilles de soins) que SmartDoc automatise entièrement.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-full flex items-center justify-center"
            >
              <div className="w-full">
                <MarketChart data={[
                  { name: 'Généralistes', value: 12000 },
                  { name: 'Spécialistes', value: 16000 }
                ]} />
              </div>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 9: BUSINESS MODEL */}
        <SlideContainer isActive={currentSlide === 9} darkBg={true}>
          <SectionTitle subtitle="Revenus Récurrents" white={true}>Business Model</SectionTitle>
          <p className="text-slate-300 mb-4 md:mb-6 text-base md:text-lg flex-shrink-0">
            Modèle SaaS B2B classique, lisible et <span className="font-bold text-smart-400">scalable</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 flex-1">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/15 transition-all"
            >
              <div>
                <div className="bg-white/20 p-3 rounded-xl w-fit mb-6">
                  <Calendar className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Abonnement Mensuel</h3>
                <p className="text-slate-300 mb-6">
                  Un prix unique pour l'accès complet (Gestion + Clinique + Intelligence). Pas d'options cachées.
                </p>
              </div>
              <div className="text-5xl font-bold text-white">XXX<span className="text-xl font-normal text-slate-400"> MAD/mois</span></div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative bg-gradient-to-br from-smart-500 to-teal-600 rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-smart-400"
            >
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 text-sm font-bold px-6 py-2 rounded-full shadow-xl">
                POPULAIRE
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="bg-white/20 p-3 rounded-xl w-fit mb-6">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Abonnement Annuel</h3>
                <p className="text-white/90 mb-6">
                  Paiement upfront (trésorerie immédiate) avec incitation (2 mois offerts).
                </p>
              </div>
              <div className="text-5xl font-bold text-white relative z-10">10 mois<span className="text-xl font-normal text-white/80"> / an</span></div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/15 transition-all"
            >
              <div>
                <div className="bg-white/20 p-3 rounded-xl w-fit mb-6">
                  <Sparkles className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Services Additionnels</h3>
                <p className="text-slate-300 mb-6">
                  Téléconsultation intégrée, Module de comptabilité avancée exportable, SMS Marketing pour le cabinet.
                </p>
              </div>
              <div className="flex gap-3 items-center text-smart-400 font-bold text-2xl">
                <TrendingUp size={32} /> + Revenus
              </div>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 10: TRACTION & ROADMAP */}
        <SlideContainer isActive={currentSlide === 10}>
          <SectionTitle subtitle="L'Avenir">Traction & Roadmap</SectionTitle>

          <div className="relative border-l-4 border-smart-300 ml-4 md:ml-8 space-y-6 md:space-y-8 flex-1 py-4">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[14px] md:-left-[18px] top-2 w-8 h-8 bg-gradient-to-br from-smart-500 to-teal-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                <CheckCircle className="text-white" size={16} />
              </div>
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-2 border-smart-200">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">État Actuel</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Produit V1 finalisé et stable. Modules spécialisés (Gynéco, Cardio, Pédiatrie) opérationnels. Moteur d'Intelligence calibré sur le contexte marocain.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[14px] md:-left-[18px] top-2 w-8 h-8 bg-white border-4 border-smart-400 rounded-full shadow-xl flex items-center justify-center">
                <Rocket className="text-smart-600" size={16} />
              </div>
              <div className="bg-gradient-to-br from-smart-50 to-teal-50 p-4 md:p-6 rounded-xl shadow-lg border-2 border-smart-300">
                <h3 className="text-lg md:text-xl font-bold text-smart-800 mb-2">Go-To-Market Q1-Q2 2026</h3>
                <p className="text-smart-900 text-xs md:text-sm leading-relaxed">
                  Déploiement d'une force de vente terrain (Délégués digitaux) sur l'axe Casablanca-Rabat pour équiper les 100 premiers cabinets "Ambassadeurs".
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[14px] md:-left-[18px] top-2 w-8 h-8 bg-white border-4 border-slate-300 rounded-full shadow-lg flex items-center justify-center">
                <Target className="text-slate-400" size={16} />
              </div>
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-2 border-slate-200 opacity-70">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">Objectif Q4 2026</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Atteindre 500 médecins abonnés actifs. Lancement de l'application mobile patient (Carnet de santé connecté).
                </p>
              </div>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 11: ÉQUIPE */}
        <SlideContainer isActive={currentSlide === 11} darkBg={true}>
          <SectionTitle subtitle="Expertise & Vision" white={true}>L'Équipe</SectionTitle>
          <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 flex-shrink-0">
            Une équipe pluridisciplinaire alliant :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-1 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-smart-500 to-teal-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-3xl border-2 border-smart-500/30 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-smart-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl flex-shrink-0">
                  <Server className="text-white w-12 h-12 md:w-16 md:h-16" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-white text-2xl md:text-3xl mb-4">Expertise Technique</h4>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    Maîtrise des architectures Cloud, Sécurité des données de santé et Développement IA.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-3xl border-2 border-teal-500/30 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl flex-shrink-0">
                  <Stethoscope className="text-white w-12 h-12 md:w-16 md:h-16" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-white text-2xl md:text-3xl mb-4">Connaissance Métier</h4>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    Collaboration étroite avec des médecins partenaires pour définir les flux de travail (UX/UI) et valider la pertinence clinique des fonctionnalités.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 12: CONCLUSION */}
        <SlideContainer isActive={currentSlide === 12}>
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-smart-500 to-teal-600 rounded-3xl flex items-center justify-center mb-12 shadow-2xl"
            >
              <Activity className="text-white w-10 h-10 md:w-16 md:h-16" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 md:mb-12"
            >
              CONCLUSION
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-5xl"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light mb-8 text-slate-600">
                SmartDoc n'est pas une simple "aide à la saisie".
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8">
                C'est la <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-smart-600 to-teal-600">colonne vertébrale numérique</span> du cabinet médical moderne.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-slate-700 font-medium">
                Nous apportons la structure, la sécurité et l'intelligence qui manquent aujourd'hui aux médecins pour faire face à l'augmentation de leur charge de travail et aux exigences de leurs patients.
              </p>
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 13: THE ASK */}
        <SlideContainer isActive={currentSlide === 13} darkBg={true}>
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mb-8"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">Investissement</h2>
              <p className="text-2xl md:text-3xl text-smart-400 font-light">Seed Round</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="relative mb-16"
            >
              <div className="absolute inset-0 bg-smart-400 blur-3xl opacity-50" />
              <div className="relative text-[80px] md:text-[120px] lg:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-smart-400 to-teal-400 leading-none">
                3.5 MDH
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-4xl"
            >
              <h3 className="text-2xl md:text-3xl text-white mb-8 font-light">Allocation Budget</h3>
              <AskChart data={[
                { name: 'Sales Force', value: 40 },
                { name: 'Tech / IA', value: 35 },
                { name: 'Marketing', value: 25 },
              ]} />
            </motion.div>
          </div>
        </SlideContainer>

        {/* SLIDE 14: THANK YOU - Removed to get to 14 total slides */}

        {/* Navigation Footer */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 z-50"
        >
          <div className="flex items-center justify-between px-4 md:px-8 py-3">
            <div className="flex gap-2 overflow-x-auto max-w-[50%] md:max-w-none">
              {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 ${
                    idx === currentSlide ? 'w-8 bg-gradient-to-r from-smart-600 to-teal-600' : 'w-2 bg-slate-300 hover:bg-smart-400'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`p-2 md:p-3 rounded-full border-2 transition-all ${
                  currentSlide === 0
                    ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                    : 'border-smart-200 hover:bg-smart-50 hover:border-smart-400 text-smart-600'
                }`}
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                disabled={currentSlide === TOTAL_SLIDES - 1}
                className={`p-2 md:p-3 rounded-full shadow-lg transition-all ${
                  currentSlide === TOTAL_SLIDES - 1
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-smart-600 to-teal-600 text-white hover:shadow-xl hover:from-smart-700 hover:to-teal-700'
                }`}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default App;