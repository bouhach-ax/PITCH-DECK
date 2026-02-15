import React from 'react';

export const SmartDocLogo: React.FC<{ className?: string, iconSize?: number, dark?: boolean }> = ({ className = "", iconSize = 10, dark = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circle Icon with Pulse */}
      <div className={`relative flex items-center justify-center w-${iconSize + 2} h-${iconSize + 2} bg-smart-600 rounded-full shadow-lg shadow-smart-600/30`}>
        <svg 
            width="60%" 
            height="60%" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      
      {/* Text Branding */}
      <div className="flex flex-col justify-center h-full">
        <h1 className={`font-extrabold text-3xl tracking-tight leading-none ${dark ? 'text-white' : 'text-smart-700'}`}>
          smartdoc
        </h1>
        <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${dark ? 'text-smart-200' : 'text-slate-500'}`}>
          Votre Cabinet, Plus Intelligent
        </span>
      </div>
    </div>
  );
};