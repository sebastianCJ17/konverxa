import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface PageBannerProps {
  title: string;
  watermark?: string;
  titleAccentColor?: string;
  badge?: string;
  headline?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  image: string;
  imageAlt?: string;
}

export default function PageBanner({
  title,
  watermark,
  titleAccentColor = 'text-slate-900',
  badge,
  headline,
  description,
  breadcrumbs,
  image,
  imageAlt = 'KONVERXA',
}: PageBannerProps) {
  const displayWatermark = watermark || title;

  return (
    <section className="relative w-full min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] pt-28 sm:pt-32 pb-14 sm:pb-16 flex items-center bg-[#f8f9fa] text-slate-900 overflow-hidden font-sans border-b border-slate-200">
      
      {/* Right Side Team / Professional Image with Smooth Left Fade */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-top sm:object-center filter brightness-[0.96] contrast-[1.03]"
        />
        {/* Multi-layered smooth gradient fade to seamlessly merge with left background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/90 to-transparent lg:via-[#f8f9fa]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-transparent to-[#f8f9fa]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/70 via-transparent to-transparent lg:hidden"></div>
      </div>

      {/* Massive Outlined Watermark Typography behind */}
      <div
        className="absolute top-1/2 left-0 -translate-y-[45%] pointer-events-none select-none overflow-hidden z-0 pl-4 sm:pl-8 lg:pl-12 max-w-full"
        aria-hidden="true"
      >
        <span
          className="text-[15vw] sm:text-[14vw] lg:text-[12vw] font-black uppercase tracking-tight leading-none block whitespace-nowrap text-transparent opacity-80"
          style={{
            WebkitTextStroke: '2px rgba(203, 213, 225, 0.75)',
            textStroke: '2px rgba(203, 213, 225, 0.75)',
          }}
        >
          {displayWatermark}
        </span>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Breadcrumb Navigation (Miga de pan) */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Miga de pan"
            className="flex items-center flex-wrap gap-1.5 text-xs font-semibold text-slate-500"
          >
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <div key={idx} className="flex items-center gap-1.5">
                  {crumb.path && !isLast ? (
                    <Link
                      to={crumb.path}
                      className="hover:text-slate-900 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-slate-900 font-bold' : ''}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                </div>
              );
            })}
          </motion.nav>

          {/* Badge / Tag if provided */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider"
            >
              {badge}
            </motion.div>
          )}

          {/* Prominent Colored Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-3"
          >
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase ${titleAccentColor}`}>
              {title}
            </h1>

            {/* Main Headline */}
            {headline && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {headline}
              </h2>
            )}
          </motion.div>

          {/* Descriptive Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl"
          >
            {description}
          </motion.p>

        </div>
      </div>

    </section>
  );
}
