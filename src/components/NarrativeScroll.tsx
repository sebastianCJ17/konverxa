import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Workflow, Target, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const MOMENTS = [
  {
    id: '01',
    number: '01',
    badge: 'Reflexión de mercado',
    title: 'El negocio exige resultados.\n¿Por qué conformarse con promesas?',
    subtitle: 'Pregunta que abre la conversación y desafía el statu quo del outsourcing tradicional.',
    showScrollHint: true,
  },
  {
    id: '02',
    number: '02',
    badge: 'Criterio de mercado',
    title: 'El problema no es tercerizar.\nEs confundir el tamaño del proveedor con su estándar operativo.',
    subtitle: 'Posiciones, tecnología y volumen demuestran capacidad. No garantizan método, control ni consistencia.',
    highlight: 'El tamaño absorbe volumen. El estándar protege los resultados.',
  },
  {
    id: '03',
    number: '03',
    badge: 'Estándar y Gobernanza',
    title: 'El tamaño absorbe volumen.\nEl estándar protege los resultados.',
    subtitle: 'Un modelo operativo riguroso diseñado para evitar sorpresas, proteger SLA y garantizar predictibilidad.',
  },
  {
    id: '04',
    number: '04',
    badge: 'Experiencia ofrecida',
    title: 'Los resultados empiezan mucho antes de hacerse visibles.',
    supportText: 'Detrás de cada resultado consistente hay una operación pensada, organizada y gobernada con criterio.',
    steps: [
      {
        icon: Eye,
        label: 'Comprender',
        desc: 'Entender el negocio, el cliente y el contexto.'
      },
      {
        icon: Workflow,
        label: 'Coordinar',
        desc: 'Alinear personas, procesos y tecnología.'
      },
      {
        icon: Target,
        label: 'Ejecutar',
        desc: 'Gestionar la operación con método y control.'
      }
    ]
  }
];

export default function NarrativeScroll() {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [completedOnce, setCompletedOnce] = useState(false);

  // Scroll listener for narrative sequence
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of current section relative to viewport
      const totalScrollableHeight = rect.height - windowHeight;
      if (totalScrollableHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableHeight));

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Map 0 -> 1 progress to step index 0 -> 3
        const targetStep = Math.min(3, Math.floor(progress * 4));
        if (targetStep !== currentStep) {
          setCurrentStep(targetStep);
          if (targetStep === 3) {
            setCompletedOnce(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentStep]);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % MOMENTS.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + MOMENTS.length) % MOMENTS.length);
  };

  const activeMoment = MOMENTS[currentStep];

  return (
    <section
      ref={sectionRef}
      className={`relative w-full text-slate-900 bg-slate-100 ${
        completedOnce ? 'min-h-screen py-16' : 'h-[250vh]'
      }`}
    >
      {/* Sticky Container during scroll narrative */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-100 text-slate-900">
        
{/* Fixed Background Image: Bright glass corporate atmosphere */}
<div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
  <img
    src="images/img 1.jpg"
    alt="KONVERXA Centro Operativo"
    className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] opacity-55"
  />

  {/* Subtle gradient overlays for optimal text legibility */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-100/85 via-slate-100/55 to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-slate-100/50"></div>
</div>

        {/* Section Top Header Tag - Clean Executive Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <span className="uppercase tracking-widest font-black text-slate-900">KONVERXA</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200/80 px-3 py-1.5 rounded-full shadow-xs">
            <span>0{currentStep + 1} de 04</span>
          </div>
        </div>

        {/* Main Interactive Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Card */}
            <div className="lg:col-span-9 space-y-6">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMoment.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 min-h-[260px] sm:min-h-[280px] flex flex-col justify-center"
                >
                  {/* Step Number */}
                  <div className="text-3xl sm:text-4xl font-black text-slate-400 tracking-tight font-mono">
                    {activeMoment.number}
                  </div>

                  {/* Main Title */}
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] whitespace-pre-line">
                    {activeMoment.title}
                  </h2>

                  {/* Subtitle / Complementary details */}
                  {activeMoment.subtitle && (
                    <p className="text-base sm:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl">
                      {activeMoment.subtitle}
                    </p>
                  )}

                  {/* Moment 02 Specific Highlight */}
                  {activeMoment.highlight && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-300 shadow-sm max-w-xl">
                      <p className="text-sm sm:text-base font-black text-black">
                        {activeMoment.highlight}
                      </p>
                    </div>
                  )}

                  {/* Moment 04 Steps Diagram */}
                  {activeMoment.steps && (
                    <div className="space-y-6 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {activeMoment.steps.map((step, idx) => {
                          const IconComp = step.icon;
                          return (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2 hover:border-black/30 transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <span className="font-black text-sm text-black">{step.label}</span>
                              </div>
                              <p className="text-xs text-slate-600 leading-normal">{step.desc}</p>
                            </div>
                          );
                        })}
                      </div>

                      {activeMoment.supportText && (
                        <p className="text-xs sm:text-sm font-semibold text-slate-700 italic border-l-2 border-black pl-3 py-1">
                          "{activeMoment.supportText}"
                        </p>
                      )}
                    </div>
                  )}

                  {/* Scroll Hint for Step 1 */}
                  {activeMoment.showScrollHint && (
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 pt-4">
                      <span>Sigue bajando</span>
                      <ChevronDown className="w-4 h-4 animate-bounce text-black" />
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

            </div>

            {/* Right Side Step Indicator (01 - 04) */}
            <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center space-y-6 border-l border-slate-300/80 pl-8">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                SECUENCIA
              </div>

              <div className="flex flex-col gap-4">
                {MOMENTS.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => setCurrentStep(idx)}
                    className="flex items-center gap-3 text-left group focus:outline-none"
                  >
                    <div
                      className={`text-sm font-black transition-all duration-300 ${
                        idx === currentStep
                          ? 'text-black text-lg scale-110'
                          : 'text-slate-400 group-hover:text-slate-700'
                      }`}
                    >
                      {m.number}
                    </div>
                    
                    <div
                      className={`h-0.5 rounded-full transition-all duration-300 ${
                        idx === currentStep ? 'w-10 bg-black' : 'w-4 bg-slate-300 group-hover:bg-slate-400'
                      }`}
                    />

                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
                        idx === currentStep ? 'text-black' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {m.badge}
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation Arrows for Manual Control */}
              <div className="flex items-center gap-2 pt-6">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-white hover:bg-black hover:text-white border border-slate-300 text-slate-800 flex items-center justify-center transition-all shadow-xs"
                  aria-label="Estado anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-white hover:bg-black hover:text-white border border-slate-300 text-slate-800 flex items-center justify-center transition-all shadow-xs"
                  aria-label="Estado siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Section Bottom Bar Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span>0{currentStep + 1} / 04</span>
          </div>

          {/* Mobile Arrows */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg bg-white border border-slate-300 text-slate-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold px-2">{currentStep + 1} de 4</span>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-white border border-slate-300 text-slate-800"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
