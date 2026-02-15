import React, { useState, useEffect, useCallback } from 'react';
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
  InvestmentSlide,
];

const DARK_SLIDES = new Set([0, 6, 7, 13]);

const TOTAL = SLIDES.length;

function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const isDark = DARK_SLIDES.has(current);

  const next = useCallback(() => {
    if (current < TOTAL - 1) {
      setDirection(1);
      setCurrent(p => p + 1);
    }
  }, [current]);

  const prev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent(p => p - 1);
    }
  }, [current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const ActiveSlide = SLIDES[current];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden font-sans bg-white">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-smart-700 to-smart-400 rounded-r-full"
          animate={{ width: `${((current + 1) / TOTAL) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      <div className="absolute top-3 sm:top-4 left-4 sm:left-6 md:left-8 z-40">
        <img
          src={LOGO_URL}
          alt="SmartDoc.ma"
          className={`h-5 md:h-6 transition-opacity duration-300 ${isDark ? 'opacity-70' : 'opacity-0 pointer-events-none'}`}
        />
        <img
          src="/smartdoc-logo-color.png"
          alt="SmartDoc.ma"
          className={`h-6 md:h-7 -mt-5 md:-mt-6 transition-opacity duration-300 ${isDark ? 'opacity-0 pointer-events-none' : 'opacity-80'}`}
        />
      </div>

      <div className={`absolute top-3.5 sm:top-5 right-4 sm:right-6 md:right-8 z-40 text-[11px] font-mono tracking-widest transition-colors duration-300 ${
        isDark ? 'text-white/30' : 'text-slate-300'
      }`}>
        {String(current + 1).padStart(2, '0')}
        <span className={isDark ? 'text-white/15' : 'text-slate-200'}> / {String(TOTAL).padStart(2, '0')}</span>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <ActiveSlide />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6 md:right-8 z-40 flex items-center gap-2">
        <button
          onClick={prev}
          disabled={current === 0}
          className={`p-2.5 rounded-full border transition-all duration-200 backdrop-blur-sm ${
            current === 0
              ? isDark
                ? 'border-white/[0.06] text-white/15 cursor-not-allowed'
                : 'border-slate-200 text-slate-200 cursor-not-allowed'
              : isDark
                ? 'border-white/15 text-white/50 hover:border-smart-400/50 hover:text-smart-300 bg-white/5'
                : 'border-slate-200 text-slate-400 hover:border-smart-500 hover:text-smart-600 bg-white/80'
          }`}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          disabled={current === TOTAL - 1}
          className={`p-2.5 rounded-full transition-all duration-200 ${
            current === TOTAL - 1
              ? isDark
                ? 'bg-white/[0.06] text-white/15 cursor-not-allowed'
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
              : 'bg-smart-600 text-white hover:bg-smart-500 shadow-lg shadow-smart-600/25'
          }`}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-1.5 h-5 bg-smart-500'
                : isDark
                  ? 'w-1.5 h-1.5 bg-white/15 hover:bg-white/30'
                  : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
