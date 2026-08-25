import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Linkedin } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function VideoHero() {
  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-black text-white font-sans">
      
      {/* Background Video / Image with dark Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover filter brightness-[0.88] saturate-[1.1] contrast-[1.05]"
        >
          <source src="/videoweb.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay: Solid black on the left for text contrast, fading out to reveal the contact center clearly on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/15 sm:via-black/70 sm:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-3xl space-y-8">
          
          {/* Main Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-[-0.025em] leading-[1.02] drop-shadow-md">
              Los resultados <br />
              no se improvisan. <br />
              Se construyen.
            </h1>

            <p className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl pt-2 drop-shadow-sm">
              Alcanzar resultados exige ejecución. Sostenerlos exige transformación.
            </p>
          </motion.div>

          {/* Hero CTAs - Single Discover Model button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <Link
              to="/modelo"
              className="px-8 py-4 rounded-xl bg-transparent hover:bg-white hover:text-black text-white font-bold text-sm uppercase tracking-wider border border-white/40 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg"
            >
              <span>DESCUBRE EL MODELO</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Bottom Hero Bar: Left Tag "Operador BPO y Contact Center" & Right Institutional LinkedIn Icon */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
        <div className="font-semibold tracking-wide text-slate-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-100 animate-pulse"></span>
          <span>Operador BPO y Contact Center</span>
        </div>

        {/* Institutional LinkedIn Link */}
        <div>
          <a
            href={COMPANY_INFO.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-zinc-900/90 hover:bg-[#b45309]/90 border border-zinc-700 hover:border-[#f59e0b] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group"
            title="Presencia Institucional KONVERXA en LinkedIn"
            aria-label="LinkedIn Oficial KONVERXA"
          >
            <Linkedin className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

    </section>
  );
}


