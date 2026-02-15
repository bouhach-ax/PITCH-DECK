import React from 'react';
import { motion } from 'framer-motion';

export const Slide = ({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`relative w-full h-full flex flex-col px-6 sm:px-10 md:px-14 lg:px-20 pt-16 sm:pt-20 pb-16 overflow-y-auto scrollbar-hide bg-mesh ${className}`}>
    {children}
  </div>
);

export const DarkSlide = ({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`relative w-full h-full flex flex-col px-6 sm:px-10 md:px-14 lg:px-20 pt-16 sm:pt-20 pb-16 overflow-y-auto scrollbar-hide bg-hero ${className}`}>
    {children}
  </div>
);

export const CenteredSlide = ({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`relative w-full h-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-16 overflow-hidden bg-mesh ${className}`}>
    {children}
  </div>
);

export const CenteredDarkSlide = ({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`relative w-full h-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-16 overflow-hidden bg-hero ${className}`}>
    {children}
  </div>
);

export const SlideHeader = ({ label, title, subtitle }: { label: string; title: React.ReactNode; subtitle?: React.ReactNode }) => (
  <div className="mb-4 md:mb-6 flex-shrink-0">
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="inline-block px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase text-smart-700 bg-smart-100 border border-smart-200 mb-3"
    >
      {label}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-sm md:text-base lg:text-lg text-slate-500 mt-2 font-medium"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const WhiteSlideHeader = ({ label, title, subtitle }: { label: string; title: React.ReactNode; subtitle?: React.ReactNode }) => (
  <div className="mb-4 md:mb-6 flex-shrink-0">
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="inline-block px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase text-white/90 bg-white/15 border border-white/20 mb-3"
    >
      {label}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-sm md:text-base lg:text-lg text-white/60 mt-2 font-medium"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const GlassCard = ({ title, children, icon: Icon, highlight = false, index = 0 }: {
  title: string;
  children: React.ReactNode;
  icon?: any;
  highlight?: boolean;
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className={`rounded-2xl p-4 md:p-5 h-full flex flex-col transition-all duration-300 ${
      highlight
        ? 'bg-gradient-to-br from-smart-600 to-smart-700 text-white shadow-hero'
        : 'bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-smart-200'
    }`}
  >
    <div className="flex items-center gap-3 mb-2.5 flex-shrink-0">
      {Icon && (
        <div className={`p-2 rounded-xl flex-shrink-0 ${
          highlight ? 'bg-white/20 text-white' : 'bg-smart-50 text-smart-600'
        }`}>
          <Icon size={18} />
        </div>
      )}
      <h3 className={`text-sm md:text-base font-bold leading-tight ${
        highlight ? 'text-white' : 'text-slate-800'
      }`}>{title}</h3>
    </div>
    <div className={`text-xs md:text-sm leading-relaxed flex-1 ${
      highlight ? 'text-white/85' : 'text-slate-500'
    }`}>
      {children}
    </div>
  </motion.div>
);

export const SlideImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className={`rounded-2xl overflow-hidden shadow-hero flex-shrink-0 ${className}`}
  >
    <img src={src} alt={alt} className="slide-img" loading="lazy" />
  </motion.div>
);
