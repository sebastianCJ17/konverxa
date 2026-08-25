import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyKonverxa() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-[#f8f9fa] text-slate-900 overflow-hidden font-sans border-t border-slate-200">
      
{/* Right Side Background Image with Smooth Left Fade Gradient */}
<div className="absolute top-0 right-0 w-full lg:w-3/5 h-full pointer-events-none overflow-hidden">

  <img
    src="images/img 2.jpg"
    alt="Reunión directiva y operaciones KONVERXA"
    className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02] opacity-70"
  />

  {/* Degradado horizontal amplio y suave */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/65 via-[50%] to-transparent"></div>

  {/* Suavizado vertical */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa]/65 via-transparent to-[#f8f9fa]/15"></div>

</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
        <div className="max-w-2xl lg:max-w-3xl space-y-8">
          
          {/* Top Category Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800/90 block">
              ¿POR QUÉ KONVERXA?
            </span>
            <div className="w-8 h-[2px] bg-amber-800/80"></div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]"
          >
            Más de 20 años gestionando operaciones, han dado forma a nuestra manera de entender el negocio.
          </motion.h2>

          {/* Two Numbered Paragraph Columns (01 & 02) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4"
          >
            {/* Column 01 */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-800/90 font-mono">01</span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Ese recorrido nos enseñó a reconocer dónde empiezan a degradarse las operaciones, qué compromete su desempeño y qué necesitan para sostenerse.
              </p>
            </div>

            {/* Column 02 */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-800/90 font-mono">02</span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Hoy, esa experiencia se traduce en operaciones mejor organizadas, decisiones más claras y una gestión capaz de sostener el desempeño sin perder coherencia.
              </p>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4"
          >
            <Link
              to="/modelo"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-xl bg-slate-950 hover:bg-black text-white font-medium text-sm transition-all shadow-md group"
            >
              <span>Conoce nuestro modelo</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

