import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  imgHeight?: string;
  showSubtitle?: boolean;
}

/**
 * BrandLogo component for displaying the uploaded logo image.
 * Uses /logo.png as primary logo, then fallbacks.
 */
export default function BrandLogo({
  className = '',
  imgHeight = 'h-16 sm:h-20 lg:h-24',
  showSubtitle = true,
}: BrandLogoProps) {
  const [logoIndex, setLogoIndex] = useState(0);
  const logoSources = ['/logo.png', '/Logo.png', '/logof.png', '/Logof.png'];

  const handleImageError = () => {
    if (logoIndex < logoSources.length - 1) {
      setLogoIndex(logoIndex + 1);
    } else {
      setLogoIndex(logoSources.length); // fallback to text
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {logoIndex < logoSources.length ? (
        <img
          src={logoSources[logoIndex]}
          alt="KONVERXA Logo"
          className={`${imgHeight} w-auto max-w-full object-contain transition-all duration-300`}
          onError={handleImageError}
        />
      ) : (
        <div className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl bg-black border border-zinc-700 p-0.5 shadow-md flex items-center justify-center">
            <span className="text-2xl font-black tracking-tighter text-white">
              K
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black tracking-wider text-white font-sans flex items-center gap-0.5">
              KONVERXA
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full inline-block ml-0.5"></span>
            </span>
            {showSubtitle && (
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-medium">
                Operational Excellence
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
