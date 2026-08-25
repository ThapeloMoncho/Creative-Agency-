import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const iconSizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const dotSizeClasses = {
    sm: 'w-2.5 h-2.5',
    md: 'w-3.5 h-3.5',
    lg: 'w-5.5 h-5.5',
    xl: 'w-8 h-8',
  };

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* 4-Node Minimalist Geometric Mark referencing the signature 4 blue palette nodes */}
      <div
        className={`relative ${iconSizeClasses[size]} grid grid-cols-2 grid-rows-2 gap-1.5 p-1 rounded-2xl bg-[#001c52]/90 border border-[#007FFF]/50 shadow-[0_0_20px_rgba(0,127,255,0.3)] flex-shrink-0 place-items-center`}
      >
        {/* Top Left: Deep Cobalt / Royal Blue */}
        <div
          className={`${dotSizeClasses[size]} rounded-full bg-[#0047AB] shadow-[0_0_10px_#0047AB] transition-transform duration-300 hover:scale-110`}
          title="Cobalt Blue"
        />
        {/* Top Right: Pastel Azure / Sky Blue */}
        <div
          className={`${dotSizeClasses[size]} rounded-full bg-[#87CEEB] shadow-[0_0_10px_#87CEEB] transition-transform duration-300 hover:scale-110`}
          title="Pastel Azure"
        />
        {/* Bottom Left: Deep Navy Blue */}
        <div
          className={`${dotSizeClasses[size]} rounded-full bg-[#002366] border border-[#007FFF]/60 transition-transform duration-300 hover:scale-110`}
          title="Navy Blue"
        />
        {/* Bottom Right: Vivid Azure */}
        <div
          className={`${dotSizeClasses[size]} rounded-full bg-[#007FFF] shadow-[0_0_10px_#007FFF] transition-transform duration-300 hover:scale-110`}
          title="Azure Blue"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-['Inter',sans-serif] tracking-[0.2em] font-extrabold text-white text-base md:text-lg leading-tight uppercase drop-shadow-[0_2px_10px_rgba(0,127,255,0.3)]">
            CREATIVE AGENCY
          </span>
          <span className="font-['JetBrains_Mono',monospace] text-[10px] md:text-[11px] tracking-[0.25em] text-[#87CEEB] uppercase font-bold">
            DIGITAL PRODUCTS & BRANDING
          </span>
        </div>
      )}
    </div>
  );
};
