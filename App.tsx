import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Brain, FileText, 
  ShieldCheck, Activity, Users, Coins, TrendingUp, 
  Target, Mic, Server, Lock, CheckCircle, Zap, AlertTriangle, Layers, Smartphone, Globe, Stethoscope, ArrowRight, Clock, CreditCard, LayoutGrid, Database, HeartPulse
} from 'lucide-react';
import { GeminiImageEditor } from './components/GeminiImageEditor';
import { MarketChart, AskChart } from './components/Charts';
import { SmartDocLogo } from './components/SmartDocLogo';

// --- Constants ---
const TOTAL_SLIDES = 15; // Increased to accommodate all content including Pillar 1 & 2

// --- Components ---

const SlideContainer = ({ children, isActive, className = "" }: React.PropsWithChildren<{ isActive: boolean, className?: string }>) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 10 : 0,
        pointerEvents: isActive ? 'auto' : 'none'
    }}
    transition={{ duration: 0.5 }}
    className={`absolute inset-0 w-full h-full flex flex-col p-8 md:p-12 overflow-hidden bg-white ${className}`}
  >
    {/* Background Elements (Light Mode) */}
    <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-smart-50/80 rounded-full blur-[100px] z-0 pointer-events-none" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-50/80 rounded-full blur-[80px] z-0 pointer-events-none" />
    
    <div className="relative z-10 w-full h-full flex flex-col">
        {children}
    </div>
  </motion.div>
);

const SectionTitle = ({ children, subtitle }: { children?: React.ReactNode, subtitle?: string }) => (
  <div className="mb-8 border-l-4 border-smart-600 pl-6">
    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">{children}</h2>
    {subtitle && <p className="text-xl text-smart-600 mt-2 font-medium">{subtitle}</p>}
  </div>
);

const Card = ({ title, children, icon: Icon, highlight = false, compact = false }: { title: string, children?: React.ReactNode, icon?: any, highlight?: boolean, compact?: boolean }) => (
    <div className={`p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col ${highlight ? 'bg-smart-600 text-white border-smart-600 shadow-xl shadow-smart-600/20' : 'bg-white border-slate-200 text-slate-600 shadow-soft hover:border-smart-300'}`}>
        <div className={`flex items-center gap-3 ${compact ? 'mb-2' : 'mb-4'}`}>
            {Icon && (
                <div className={`p-2 rounded-lg ${highlight ? 'bg-white/20 text-white' : 'bg-smart-50 text-smart-600'}`}>
                    <Icon size={compact ? 20 : 24} />
                </div>
            )}
            <h3 className={`${compact ? 'text-base' : 'text-lg'} font-bold ${highlight ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
        </div>
        <div className={`text-sm leading-relaxed flex-1 ${highlight ? 'text-smart-50' : 'text-slate-500'}`}>
            {children}
        </div>
    </div>
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
    <div className="w-screen h-screen relative bg-white text-slate-800 font-sans overflow-hidden">
      
      {/* Header */}
      <div className="absolute top-6 left-8 z-50">
        <SmartDocLogo iconSize={8} />
      </div>
      
      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-50 font-mono text-xs text-slate-400">
          SLIDE {currentSlide + 1} / {TOTAL_SLIDES}
      </div>

      <div className="relative w-full h-full">
        
        {/* SLIDE 0: COVER */}
        <SlideContainer isActive={currentSlide === 0}>
            <div className="flex flex-col h-full justify-center items-center text-center relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                     <Activity className="w-[800px] h-[800px] text-smart-600" />
                </div>
                
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="z-10 max-w-5xl"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-smart-50 text-smart-700 font-bold text-sm tracking-widest uppercase mb-6 border border-smart-100">
                        Investor Master Pitch (V2 - Booster)
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                        SmartDoc<span className="text-smart-600">.ma</span><br/>
                        <span className="text-4xl md:text-5xl text-slate-500 font-light block mt-4">La Plateforme de Gestion Médicale Intégrale</span>
                    </h1>
                    
                    <div className="mt-12 bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 inline-block shadow-soft">
                        <p className="text-xl text-slate-700 font-medium">
                            <span className="font-bold text-smart-600">Vision :</span> Devenir le standard de gestion clinique et administrative pour les médecins au Maroc.
                        </p>
                         <div className="w-24 h-1 bg-smart-500 mx-auto my-4 rounded-full"></div>
                        <p className="text-xl text-slate-700 font-medium">
                            <span className="font-bold text-smart-600">Positionnement :</span> L'ERP Médical 360° : Rigueur Clinique + Excellence Administrative + Intelligence Métier.
                        </p>
                    </div>
                </motion.div>
            </div>
        </SlideContainer>

        {/* SLIDE 1: EXECUTIVE SUMMARY */}
        <SlideContainer isActive={currentSlide === 1}>
            <SectionTitle subtitle="La Vraie Thèse">Executive Summary</SectionTitle>
            
            <div className="grid grid-cols-2 gap-8 h-full pb-8">
                <Card title="Le Marché (Contexte)" icon={Globe}>
                    La médecine libérale au Maroc se professionnalise (AMO, exigences patients, volume). Les médecins gèrent aujourd'hui des PME complexes avec des outils archaïques (papier ou logiciels de simple RDV).
                </Card>
                <Card title="Le Manque" icon={AlertTriangle}>
                    Il n'existe aucun outil centralisé qui gère à la fois la rigueur du dossier médical (SOAP/CIM-10), la complexité administrative marocaine (CNOPS/CNSS) et la relation patient (Rappels/Suivi).
                </Card>
                <Card title="La Solution SmartDoc" icon={Zap} highlight={true}>
                    Une plateforme de gestion complète qui digitalise 100% des flux du cabinet. De la prise de RDV à la facturation, en passant par l'analyse clinique avancée et l'édition automatique des feuilles de soins.
                </Card>
                <Card title="La Valeur Ajoutée" icon={TrendingUp}>
                    Une architecture "Smart" qui sécurise l'acte médical (DCI, Interactions), optimise les revenus (Zéro Lapin, Facturation) et assiste le médecin dans ses décisions (Analyse Documents & Dossiers).
                </Card>
            </div>
        </SlideContainer>

        {/* SLIDE 2: LE PROBLÈME */}
        <SlideContainer isActive={currentSlide === 2}>
            <SectionTitle subtitle="La Réalité du Médecin-Entrepreneur">Le Problème</SectionTitle>
            <p className="text-2xl text-slate-600 mb-12">Le médecin marocain moderne fait face à une triple fracture :</p>
            
            <div className="grid grid-cols-3 gap-6 h-full pb-12">
                 <div className="bg-red-50 p-8 rounded-2xl border border-red-100 flex flex-col items-center text-center">
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm"><FileText className="text-red-500 w-8 h-8"/></div>
                     <h3 className="text-xl font-bold text-red-800 mb-4">Fracture Administrative</h3>
                     <p className="text-red-700/80 leading-relaxed text-sm">
                        La gestion des feuilles de maladies (CNOPS/CNSS/Assurances) est manuelle, chronophage et source d'erreurs de remboursement pour les patients.
                     </p>
                 </div>

                 <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 flex flex-col items-center text-center">
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm"><Brain className="text-orange-500 w-8 h-8"/></div>
                     <h3 className="text-xl font-bold text-orange-800 mb-4">Fracture Clinique</h3>
                     <p className="text-orange-700/80 leading-relaxed text-sm">
                        Les logiciels existants sont des "coquilles vides" (texte libre). Ils ne structurent pas la donnée (pas de statistiques possibles), ne sécurisent pas les prescriptions (pas de base DCI native) et n'aident pas à la décision.
                     </p>
                 </div>

                 <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 flex flex-col items-center text-center">
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm"><LayoutGrid className="text-yellow-600 w-8 h-8"/></div>
                     <h3 className="text-xl font-bold text-yellow-800 mb-4">Fracture Organisationnelle</h3>
                     <p className="text-yellow-700/80 leading-relaxed text-sm">
                        La gestion des RDV, de la salle d'attente et de la comptabilité se fait souvent sur trois supports différents (Agenda papier, Excel, Logiciel tiers), créant des pertes d'informations et de revenus.
                     </p>
                 </div>
            </div>
        </SlideContainer>

        {/* SLIDE 3: PILIER 1 - ADMINISTRATION */}
        <SlideContainer isActive={currentSlide === 3}>
             <SectionTitle subtitle="Le Socle Business">Pilier 1 : L'Administration & La Gestion</SectionTitle>
             <p className="text-slate-500 mb-8 font-medium">C'est ce qui fait tourner le cabinet au quotidien.</p>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <Card title="Gestion Avancée des RDV" icon={Clock}>
                     Agenda multi-vues, gestion des urgences, listes d'attente intelligentes.
                 </Card>
                 <Card title="Système Anti-Absentéisme" icon={CheckCircle}>
                     Envoi automatique de rappels (SMS/WhatsApp) 24h/48h avant. Réduction drastique des "No-Shows".
                 </Card>
                 <Card title="Salle d'Attente Digitale" icon={Users}>
                     Suivi en temps réel des patients présents, chrono d'attente pour optimiser le flux.
                 </Card>
                 <Card title="Pilotage Financier" icon={CreditCard} highlight={true}>
                     Module de Facturation complet, suivi des encaissements (Espèces/Chèque/Virement), gestion des impayés et Tableau de Bord de Chiffre d'Affaires sécurisé.
                 </Card>
                 <Card title="Gestion des Rôles (Sécurité)" icon={ShieldCheck}>
                     Interface dédiée "Assistante" (Accueil/RDV) avec cloisonnement strict des données médicales et financières sensibles.
                 </Card>
             </div>
        </SlideContainer>

        {/* SLIDE 4: PILIER 2 - CLINIQUE */}
        <SlideContainer isActive={currentSlide === 4}>
             <SectionTitle subtitle="Le Cœur Médical">Pilier 2 : La Rigueur Clinique</SectionTitle>
             <p className="text-slate-500 mb-8 font-medium">C'est ce qui sécurise la pratique du médecin.</p>

             <div className="grid grid-cols-2 gap-8 h-full pb-8">
                 <div className="space-y-6">
                     <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 items-start">
                         <div className="bg-white p-2 rounded shadow-sm text-smart-600"><FileText /></div>
                         <div>
                             <h3 className="font-bold text-slate-800">Dossier Patient Structuré (Standard SOAP)</h3>
                             <p className="text-sm text-slate-600 mt-1">Organisation native des données en Subjectif, Objectif, Analyse, Plan. Permet une traçabilité parfaite.</p>
                         </div>
                     </div>
                     <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 items-start">
                         <div className="bg-white p-2 rounded shadow-sm text-smart-600"><Database /></div>
                         <div>
                             <h3 className="font-bold text-slate-800">Base Médicale Internationale (CIM-10)</h3>
                             <p className="text-sm text-slate-600 mt-1">Codification automatique des diagnostics pour un suivi épidémiologique et statistique précis.</p>
                         </div>
                     </div>
                      <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 items-start">
                         <div className="bg-white p-2 rounded shadow-sm text-smart-600"><Stethoscope /></div>
                         <div>
                             <h3 className="font-bold text-slate-800">Spécialisation Métier</h3>
                             <p className="text-sm text-slate-600 mt-1">Modules dédiés par spécialité (Roue Obstétricale Gynéco, Courbes OMS Pédiatrie, Schémas Cardio/Ophtalmo) intégrés nativement.</p>
                         </div>
                     </div>
                 </div>

                 <div className="bg-smart-50 border border-smart-100 rounded-2xl p-6 relative overflow-hidden">
                     <div className="flex items-center gap-3 mb-6">
                         <HeartPulse className="text-smart-600" size={32} />
                         <h3 className="text-xl font-bold text-smart-800">Prescription Sécurisée (DCI & Vidal-like)</h3>
                     </div>
                     <ul className="space-y-4">
                         <li className="flex gap-2 items-center text-sm text-smart-700">
                             <CheckCircle size={16} /> Base de données exhaustive des médicaments (Maroc).
                         </li>
                         <li className="flex gap-2 items-center text-sm text-smart-700">
                             <CheckCircle size={16} /> Prescription par Nom Commercial ou Dénomination Commune Internationale (DCI).
                         </li>
                         <li className="flex gap-2 items-center text-sm text-smart-700">
                             <CheckCircle size={16} /> Alerte automatique sur les dosages et formes galéniques.
                         </li>
                         <li className="flex gap-2 items-center text-sm text-smart-700">
                             <CheckCircle size={16} /> Modèles d'ordonnances (Templates) pour les pathologies fréquentes.
                         </li>
                     </ul>
                 </div>
             </div>
        </SlideContainer>

        {/* SLIDE 5: PILIER 3 - AUTOMATISATION */}
        <SlideContainer isActive={currentSlide === 5}>
            <div className="flex gap-12 h-full items-center">
                <div className="w-1/2">
                    <SectionTitle subtitle="La Spécificité Maroc">Pilier 3 : L'Automatisation Administrative</SectionTitle>
                    <p className="text-xl text-slate-600 mb-12">
                        C'est ce qui fait gagner du temps à l'assistante et fidélise le patient.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-smart-100 rounded-2xl flex items-center justify-center text-smart-600 flex-shrink-0">
                                <FileText size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Générateur de Feuilles de Soins</h3>
                                <p className="text-slate-600">Remplissage et impression automatique des formulaires officiels (CNOPS, CNSS, AXA, Assurances Privées) directement depuis la consultation.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-6">
                             <div className="w-16 h-16 bg-smart-100 rounded-2xl flex items-center justify-center text-smart-600 flex-shrink-0">
                                <CheckCircle size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Certificats & Courriers</h3>
                                <p className="text-slate-600">Bibliothèque de modèles (Aptitude, Repos, Orientation) générés en 1 clic avec les données du patient.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-1/2 bg-slate-50 rounded-3xl p-12 flex items-center justify-center border border-slate-200 shadow-inner">
                    {/* Abstract Graphic: Automation */}
                    <div className="relative w-64 h-64">
                         <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-slate-200 transform -rotate-6 flex items-center justify-center">
                             <div className="w-3/4 h-2 bg-slate-100 rounded mb-2"></div>
                             <div className="w-1/2 h-2 bg-slate-100 rounded"></div>
                         </div>
                         <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-slate-200 transform rotate-6 flex items-center justify-center z-10">
                              <FileText className="text-slate-300 w-16 h-16" />
                         </div>
                         <div className="absolute -right-4 -bottom-4 bg-smart-500 text-white p-4 rounded-xl shadow-xl z-20 animate-bounce">
                             <Zap size={32} />
                         </div>
                    </div>
                </div>
            </div>
        </SlideContainer>

        {/* SLIDE 6: PILIER 4 - INTELLIGENCE */}
        <SlideContainer isActive={currentSlide === 6}>
             <SectionTitle subtitle="Le 'Game Changer'">Pilier 4 : L'Intelligence SmartDoc</SectionTitle>
             <p className="text-slate-500 mb-8">C'est ce qui différencie SmartDoc de tout ce qui existe.</p>
             
             <div className="grid grid-cols-2 gap-8 h-full">
                 <div className="space-y-6">
                     <div className="bg-white border border-smart-100 shadow-soft p-6 rounded-2xl flex gap-4">
                         <div className="p-3 bg-smart-50 text-smart-600 rounded-xl h-fit"><Mic /></div>
                         <div>
                             <h3 className="text-xl font-bold text-slate-800">SmartVoice (Assistant Vocal Structuré)</h3>
                             <p className="text-slate-600 text-sm mt-2 leading-relaxed">Capacité unique à transformer une dictée naturelle (multilingue/Darija) en un dossier SOAP structuré + Ordonnance + RDV. Ce n'est pas de la simple transcription, c'est de la structuration de donnée clinique.</p>
                         </div>
                     </div>
                      <div className="bg-white border border-smart-100 shadow-soft p-6 rounded-2xl flex gap-4">
                         <div className="p-3 bg-smart-50 text-smart-600 rounded-xl h-fit"><Target /></div>
                         <div>
                             <h3 className="text-xl font-bold text-slate-800">SmartScan (Analyse Documentaire)</h3>
                             <p className="text-slate-600 text-sm mt-2 leading-relaxed">Numérisation intelligente des bilans biologiques et imageries (Radios/Scanners). Le système extrait les données, met en évidence les valeurs pathologiques et les classe dans le dossier.</p>
                         </div>
                     </div>
                      <div className="bg-white border border-smart-100 shadow-soft p-6 rounded-2xl flex gap-4">
                         <div className="p-3 bg-smart-50 text-smart-600 rounded-xl h-fit"><Brain /></div>
                         <div>
                             <h3 className="text-xl font-bold text-slate-800">SmartContext (Analyse de Dossier)</h3>
                             <p className="text-slate-600 text-sm mt-2 leading-relaxed">Algorithme de synthèse qui analyse l'historique complet du patient (consultations passées, antécédents) pour offrir au médecin un résumé des risques et points de vigilance avant chaque consultation.</p>
                         </div>
                     </div>
                 </div>
                 
                 {/* Visual Area for Intelligence */}
                 <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex flex-col justify-center items-center">
                      <div className="mb-4 text-center">
                          <Brain className="w-16 h-16 text-smart-600 mx-auto mb-2" />
                          <h4 className="font-bold text-slate-700">Intelligence Core Demo</h4>
                          <p className="text-xs text-slate-400">Générez une visualisation abstraite de l'IA médicale</p>
                      </div>
                      <div className="w-full">
                           <GeminiImageEditor />
                      </div>
                 </div>
             </div>
        </SlideContainer>

        {/* SLIDE 7: TECHNOLOGIE & SÉCURITÉ */}
        <SlideContainer isActive={currentSlide === 7}>
             <SectionTitle subtitle="Architecture Robuste">La Technologie & Sécurité</SectionTitle>
             <p className="text-xl text-slate-600 mb-12 font-medium">Nous vendons de la confiance.</p>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 <Card title="Architecture Cloud Souveraine" icon={Server} highlight={false}>
                     Hébergement sécurisé (Supabase), Chiffrement AES-256 des données de santé au repos et en transit.
                 </Card>
                  <Card title="Mode Hybride (Offline-First)" icon={Zap} highlight={false}>
                     Architecture PWA (Progressive Web App) permettant de continuer à consulter les dossiers et gérer l'agenda même en cas de coupure internet.
                 </Card>
                  <Card title="Interopérabilité" icon={Globe} highlight={false}>
                     API prête pour s'interfacer avec les futurs systèmes de santé nationaux ou laboratoires.
                 </Card>
                  <Card title="Moteur d'Intelligence Propriétaire" icon={Brain} highlight={true}>
                     Combinaison de modèles de langage avancés optimisés pour le contexte médical marocain (reconnaissance des médicaments locaux, dialecte médical).
                 </Card>
             </div>
        </SlideContainer>

        {/* SLIDE 8: LE MARCHÉ & LA CIBLE */}
        <SlideContainer isActive={currentSlide === 8}>
             <SectionTitle subtitle="Secteur Privé">Le Marché & La Cible</SectionTitle>
             
             <div className="flex gap-12 h-full items-center">
                 <div className="w-1/2 space-y-8">
                     <div className="bg-smart-50 p-6 rounded-2xl border border-smart-100">
                         <h3 className="text-xl font-bold text-smart-700 mb-2">Total Addressable Market (TAM)</h3>
                         <p className="text-slate-700 font-medium text-lg">~12 000 Médecins généralistes + ~16 000 Spécialistes au Maroc (Secteur Privé).</p>
                     </div>
                     
                     <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft">
                         <h3 className="text-xl font-bold text-slate-800 mb-2">Cœur de Cible (Early Adopters)</h3>
                         <p className="text-slate-600">Médecins installés en cabinet de groupe ou individuel à fort volume (20+ patients/jour), cherchant à optimiser leur temps administratif et sécuriser leur pratique.</p>
                     </div>

                     <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft">
                         <h3 className="text-xl font-bold text-slate-800 mb-2">Tendance de Fond</h3>
                         <p className="text-slate-600">Généralisation de l'AMO (Assurance Maladie Obligatoire) qui impose une rigueur administrative accrue (feuilles de soins) que SmartDoc automatise entièrement.</p>
                     </div>
                 </div>
                 
                 <div className="w-1/2 h-[400px]">
                     <MarketChart data={[
                        { name: 'Généralistes', value: 12000 },
                        { name: 'Spécialistes', value: 16000 }
                    ]} />
                 </div>
             </div>
        </SlideContainer>

        {/* SLIDE 9: BUSINESS MODEL */}
        <SlideContainer isActive={currentSlide === 9}>
             <SectionTitle subtitle="Revenus Récurrents">Business Model</SectionTitle>
             <p className="text-slate-500 mb-12">Modèle SaaS B2B classique, lisible et scalable.</p>
             
             <div className="grid grid-cols-3 gap-8 items-stretch h-[50vh]">
                 <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow">
                     <div>
                         <h3 className="text-2xl font-bold text-slate-800 mb-4">Abonnement Mensuel All-In-One</h3>
                         <p className="text-slate-600 mb-6">Un prix unique pour l'accès complet (Gestion + Clinique + Intelligence). Pas d'options cachées.</p>
                     </div>
                     <div className="text-4xl font-bold text-slate-900">100%<span className="text-lg font-normal text-slate-500"> / mois</span></div>
                 </div>

                 <div className="bg-smart-600 border border-smart-600 rounded-3xl p-8 flex flex-col justify-between shadow-2xl transform scale-105 relative z-10 text-white">
                     <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAIRE</div>
                     <div>
                         <h3 className="text-2xl font-bold mb-4">Abonnement Annuel</h3>
                         <p className="text-smart-50 mb-6">Paiement upfront (trésorerie immédiate) avec incitation (2 mois offerts).</p>
                     </div>
                     <div className="text-4xl font-bold">10 mois<span className="text-lg font-normal text-smart-200"> / an</span></div>
                 </div>

                 <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow">
                     <div>
                         <h3 className="text-2xl font-bold text-slate-800 mb-4">Services Additionnels (Upsell)</h3>
                         <p className="text-slate-600 mb-6">Téléconsultation intégrée, Module de comptabilité avancée exportable, SMS Marketing pour le cabinet.</p>
                     </div>
                     <div className="flex gap-2 items-center text-smart-600 font-bold">
                         <TrendingUp /> + Revenus
                     </div>
                 </div>
             </div>
        </SlideContainer>

        {/* SLIDE 10: TRACTION & ROADMAP */}
        <SlideContainer isActive={currentSlide === 10}>
             <SectionTitle subtitle="L'Avenir">Traction & Roadmap</SectionTitle>
             
             <div className="relative border-l-4 border-smart-200 ml-8 my-12 space-y-16">
                 {/* Item 1 */}
                 <div className="relative pl-12">
                     <div className="absolute -left-[14px] top-1 w-6 h-6 bg-smart-600 rounded-full border-4 border-white shadow"></div>
                     <h3 className="text-2xl font-bold text-slate-800">État Actuel</h3>
                     <p className="text-slate-600 mt-2 text-lg">Produit V1 finalisé et stable. Modules spécialisés (Gynéco, Cardio, Pédiatrie) opérationnels. Moteur d'Intelligence calibré sur le contexte marocain.</p>
                 </div>
                 
                 {/* Item 2 */}
                 <div className="relative pl-12">
                     <div className="absolute -left-[14px] top-1 w-6 h-6 bg-white border-4 border-smart-400 rounded-full shadow"></div>
                     <h3 className="text-2xl font-bold text-slate-800">Go-To-Market Q1-Q2 2026</h3>
                     <p className="text-slate-600 mt-2 text-lg">Déploiement d'une force de vente terrain (Délégués digitaux) sur l'axe Casablanca-Rabat pour équiper les 100 premiers cabinets "Ambassadeurs".</p>
                 </div>

                 {/* Item 3 */}
                 <div className="relative pl-12 opacity-70">
                     <div className="absolute -left-[14px] top-1 w-6 h-6 bg-white border-4 border-slate-300 rounded-full"></div>
                     <h3 className="text-2xl font-bold text-slate-800">Objectif Q4 2026</h3>
                     <p className="text-slate-600 mt-2 text-lg">Atteindre 500 médecins abonnés actifs. Lancement de l'application mobile patient (Carnet de santé connecté).</p>
                 </div>
             </div>
        </SlideContainer>

        {/* SLIDE 11: ÉQUIPE */}
        <SlideContainer isActive={currentSlide === 11}>
             <SectionTitle subtitle="Expertise & Vision">L'Équipe</SectionTitle>
             <p className="text-xl text-slate-600 mb-8">Une équipe pluridisciplinaire alliant :</p>
             
             <div className="grid grid-cols-2 gap-12 mt-16">
                 <div className="flex gap-6 items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                     <div className="w-24 h-24 bg-smart-100 rounded-full flex items-center justify-center">
                        <Server className="text-smart-600 w-10 h-10" />
                     </div>
                     <div>
                         <h4 className="font-bold text-slate-800 text-2xl mb-2">Expertise Technique</h4>
                         <p className="text-slate-600 leading-relaxed">Maîtrise des architectures Cloud, Sécurité des données de santé et Développement IA.</p>
                     </div>
                 </div>
                 <div className="flex gap-6 items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                      <div className="w-24 h-24 bg-smart-100 rounded-full flex items-center justify-center">
                        <Stethoscope className="text-smart-600 w-10 h-10" />
                     </div>
                     <div>
                         <h4 className="font-bold text-slate-800 text-2xl mb-2">Connaissance Métier</h4>
                         <p className="text-slate-600 leading-relaxed">Collaboration étroite avec des médecins partenaires pour définir les flux de travail (UX/UI) et valider la pertinence clinique des fonctionnalités.</p>
                     </div>
                 </div>
             </div>
        </SlideContainer>

         {/* SLIDE 12: CONCLUSION */}
        <SlideContainer isActive={currentSlide === 12}>
            <div className="flex flex-col items-center justify-center h-full text-center max-w-5xl mx-auto">
                 <div className="w-24 h-24 bg-smart-600 rounded-full flex items-center justify-center mb-12 shadow-2xl shadow-smart-600/40">
                    <Activity className="text-white w-12 h-12" />
                 </div>
                 <h2 className="text-5xl font-bold text-slate-900 mb-12">CONCLUSION</h2>
                 <p className="text-3xl leading-relaxed font-light mb-8 text-slate-600">
                    SmartDoc n'est pas une simple "aide à la saisie". <br/>C'est la <span className="text-smart-600 font-bold">colonne vertébrale numérique</span> du cabinet médical moderne.
                 </p>
                 <p className="text-2xl leading-relaxed text-slate-800 font-medium">
                    Nous apportons la structure, la sécurité et l'intelligence qui manquent aujourd'hui aux médecins pour faire face à l'augmentation de leur charge de travail et aux exigences de leurs patients.
                 </p>
            </div>
        </SlideContainer>


        {/* SLIDE 13: THE ASK */}
         <SlideContainer isActive={currentSlide === 13}>
            <div className="flex flex-col items-center justify-center h-full text-center">
                 <h2 className="text-6xl font-bold text-slate-800 mb-4">Investissement</h2>
                 <p className="text-2xl text-slate-500 mb-12">Seed Round</p>
                 <div className="text-[120px] font-bold text-smart-600 leading-none mb-12">3.5 MDH</div>
                 
                 <div className="w-full max-w-4xl">
                     <AskChart data={[
                        { name: 'Sales Force', value: 40 },
                        { name: 'Tech / IA', value: 35 },
                        { name: 'Marketing', value: 25 },
                     ]} />
                 </div>
            </div>
         </SlideContainer>

         {/* SLIDE 14: THANK YOU */}
         <SlideContainer isActive={currentSlide === 14}>
            <div className="flex flex-col items-center justify-center h-full text-center">
                 <h2 className="text-7xl font-bold text-slate-800 mb-8 tracking-tight">Merci</h2>
                 <p className="text-2xl text-slate-500 mb-12">contact@smartdoc.ma</p>
            </div>
         </SlideContainer>

        {/* Navigation Footer */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white/90 backdrop-blur-md border-t border-slate-100 flex items-center justify-between px-12 z-50">
            <div className="flex gap-2">
                {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
                    <div 
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide ? 'w-8 bg-smart-600' : 'w-2 bg-slate-300 hover:bg-smart-300'}`}
                    />
                ))}
            </div>
            <div className="flex gap-4">
                <button onClick={prevSlide} className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-smart-300 text-slate-500 hover:text-smart-600 transition-all">
                    <ChevronLeft />
                </button>
                <button onClick={nextSlide} className="p-3 rounded-full bg-smart-600 text-white shadow-lg hover:bg-smart-700 hover:shadow-xl transition-all">
                    <ChevronRight />
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;