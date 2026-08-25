import React from 'react';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = false,
  light = false
}: SectionTitleProps) {
  return (
    <div className={`space-y-3 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
          light
            ? 'bg-zinc-800 text-zinc-200 border border-zinc-700'
            : 'bg-zinc-100 text-zinc-800 border border-zinc-300'
        } shadow-xs`}>
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-zinc-300' : 'bg-black'}`}></span>
          {badge}
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
        light ? 'text-white' : 'text-black'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-zinc-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
