import React from 'react';
import { motion } from 'framer-motion';

export const Slide = ({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`relative w-full h-full flex flex-col px-6 sm:px-8 md:px-12 lg:px-16 pt-14 pb-14 overflow-y-auto scrollbar-hide ${className}`}>
    {children}
  </div>
);

export const CenteredSlide = ({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`relative w-full h-full flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 pt-14 pb-14 overflow-hidden ${className}`}>
    {children}
  </div>
);

export const SlideHeader = ({ label, title, subtitle }: { label: string; title: React.ReactNode; subtitle?: React.ReactNode }) => (
  <div className="mb-4 md:mb-5 flex-shrink-0">
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase text-smart-400 border border-smart-600/30 bg-smart-600/10 mb-2"
    >
      {label}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-xs md:text-sm text-white/40 mt-1 font-medium"
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
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className={`rounded-xl p-3 md:p-4 h-full flex flex-col transition-colors duration-300 ${
      highlight ? 'glass-hl' : 'glass hover:bg-white/[0.05]'
    }`}
  >
    <div className="flex items-center gap-2.5 mb-2 flex-shrink-0">
      {Icon && (
        <div className={`p-1.5 rounded-lg flex-shrink-0 ${highlight ? 'bg-smart-600/20 text-smart-400' : 'bg-white/[0.05] text-white/40'}`}>
          <Icon size={15} />
        </div>
      )}
      <h3 className={`text-xs md:text-sm font-semibold leading-tight ${highlight ? 'text-smart-300' : 'text-white/80'}`}>{title}</h3>
    </div>
    <div className={`text-[10.5px] md:text-[11.5px] leading-relaxed flex-1 ${highlight ? 'text-white/50' : 'text-white/35'}`}>
      {children}
    </div>
  </motion.div>
);
