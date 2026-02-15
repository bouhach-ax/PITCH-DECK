import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CoverSlide, SummarySlide, ProblemSlide } from './slides/IntroSlides';
import { PillarOneSlide, PillarTwoSlide, PillarThreeSlide, PillarFourSlide } from './slides/ProductSlides';
import { TechSlide, MarketSlide, BusinessSlide } from './slides/TechMarketSlides';
import { RoadmapSlide, TeamSlide, ConclusionSlide, InvestmentSlide } from './slides/ClosingSlides';

const LOGO_URL = "https://thasmkgvldvgglmflkcb.supabase.co/storage/v1/object/sign/logo/White%20logo%20-%20no%20background.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZjkzMGI1My1kMmU1LTQ3ZmMtOTU2YS0wN2JiYzZhMjcxZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvL1doaXRlIGxvZ28gLSBubyBiYWNrZ3JvdW5kLnBuZyIsImlhdCI6MTc3MTE2MDM2MiwiZXhwIjoyMDg2NTIwMzYyfQ.m0R9AXOCLjDhlEcI4ppoQMucHpG5VFkMQe48c5Rr2jw";

const SLIDES = [
  CoverSlide,
  SummarySlide,
  ProblemSlide,
  PillarOneSlide,
  PillarTwoSlide,
  PillarThreeSlide,
  PillarFourSlide,
  TechSlide,
  MarketSlide,
  BusinessSlide,
  RoadmapSlide,
  TeamSlide,
  ConclusionSlide,
  InvestmentSlide
];

const TOTAL = SLIDES.length;

function App() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(p => Math.min(p + 1, TOTAL - 1));
  const prev = () => setCurrent(p => Math.max(p - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const ActiveSlide = SLIDES[current];

  return (
    <div className="w-screen h-screen relative bg-deck-bg overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/[0.04] z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-smart-600 to-smart-400"
          animate={{ width: `${((current + 1) / TOTAL) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      <div className="absolute top-3 sm:top-4 left-4 sm:left-6 md:left-8 z-40">
        <img src={LOGO_URL} alt="SmartDoc.ma" className="h-5 md:h-6 opacity-60" />
      </div>

      <div className="absolute top-3.5 sm:top-5 right-4 sm:right-6 md:right-8 z-40 text-white/25 text-[11px] font-mono tracking-widest">
        {String(current + 1).padStart(2, '0')} <span className="text-white/10">/ {String(TOTAL).padStart(2, '0')}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          <ActiveSlide />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6 md:right-8 z-40 flex items-center gap-2">
        <button
          onClick={prev}
          disabled={current === 0}
          className={`p-2 rounded-full border transition-all duration-200 ${
            current === 0
              ? 'border-white/[0.04] text-white/10 cursor-not-allowed'
              : 'border-white/10 text-white/40 hover:border-smart-500/40 hover:text-smart-400'
          }`}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          disabled={current === TOTAL - 1}
          className={`p-2 rounded-full transition-all duration-200 ${
            current === TOTAL - 1
              ? 'bg-white/[0.04] text-white/10 cursor-not-allowed'
              : 'bg-smart-600 text-white hover:bg-smart-500 shadow-glow'
          }`}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-1.5 h-4 bg-smart-500' : 'w-1.5 h-1.5 bg-white/10 hover:bg-white/25'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
