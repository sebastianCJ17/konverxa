import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CAREER_BENEFITS } from '../data/jobs';
import { ArrowRight, Users, TrendingUp, Home, Award, CheckCircle2 } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp, Users, Home, Award
};

export default function CareerTeaser() {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden font-sans border-t border-slate-200">
      
      {/* Background Subtle Accent Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-widest shadow-xs">
              <Users className="w-3.5 h-3.5 text-slate-600" /> Oportunidades de Carrera
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-black">
              Acelera tu Crecimiento en <span className="text-black">KONVERXA</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Creemos firmemente que la excelencia operativa se construye con personas extraordinarias. Ofrecemos un entorno corporativo donde tu talento es valorado, capacitado y promovido.
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <Link
              to="/trabaja-con-nosotros"
              className="px-8 py-4 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-base border border-zinc-700 shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <span>Ver Vacantes Disponibles</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </Link>
          </div>

        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CAREER_BENEFITS.map((item, idx) => {
            const IconComp = ICON_MAP[item.icon] || Users;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-black/30 hover:bg-white transition-all duration-300 shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-black text-white border border-zinc-800 flex items-center justify-center mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-black mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Real Workplace Imagery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-black">
              Cultura Corporativa, Bienestar y Desarrollo Humano
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              En KONVERXA fomentamos un ambiente laboral colaborativo, dinámico e inclusivo. Contamos con programas de formación continua mediante la Universidad Konverxa, reconocimientos mensuales por méritos y planes de carrera transparentes.
            </p>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-700 shrink-0" />
                <span>80% de promociones a liderazgo son internas.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-700 shrink-0" />
                <span>Capacitación en Inteligencia Artificial aplicada a CX.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-700 shrink-0" />
                <span>Horarios flexibles y esquema híbrido de trabajo.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/trabaja-con-nosotros"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-black transition-colors"
              >
                <span>Conoce nuestra propuesta de valor para el talento</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Equipo de trabajo KONVERXA"
              className="rounded-2xl object-cover h-48 sm:h-56 w-full border border-slate-200 shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Ejecutivos de cuenta BPO"
              className="rounded-2xl object-cover h-48 sm:h-56 w-full border border-slate-200 shadow-md mt-6"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
