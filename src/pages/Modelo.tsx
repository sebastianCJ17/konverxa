import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import { ONEX_PILLARS, INTEGRALX_PHASES } from '../data/model';
import { Layers, Target, Users, Cpu, BarChart3, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const PILLAR_ICONS: Record<string, any> = {
  Target, Users, Cpu, BarChart3, ShieldCheck
};

export default function Modelo() {
  const [selectedPillar, setSelectedPillar] = useState(ONEX_PILLARS[0].id);

  const activePillarObj = ONEX_PILLARS.find((p) => p.id === selectedPillar) || ONEX_PILLARS[0];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title="Modelo Operativo OneX & Ciclo IntegralX"
        description="Conoce la arquitectura metodológica OneX de KONVERXA: Estrategia, Talento, Tecnología, Analítica y Gobernanza para BPO y Customer Experience."
      />

      {/* Header Banner with Breadcrumbs & Outlined Watermark */}
      <PageBanner
        title="MODELO"
        watermark="MODELO"
        titleAccentColor="text-slate-900"
        badge="Arquitectura de Transformación"
        headline="Modelo Operativo OneX & Ciclo IntegralX"
        description="Una metodología propietaria de gestión de BPO y Contact Center diseñada para alinearse con los objetivos estratégicos de cada corporativo."
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Modelo OneX' }
        ]}
        image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Metodología y modelo operativo KONVERXA"
      />

      {/* Visión General */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid: Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionTitle
                badge="Visión General"
                title="De la Operación Convencional al Modelo Integrado OneX"
                subtitle="El BPO tradicional se ha enfocado históricamente en reducir costos a costa de la calidad. KONVERXA reconfigura esta lógica introduciendo un estándar de consultoría operativa de clase mundial."
              />

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Integramos cada componente operacional bajo el concepto OneX: una sola visión de servicio donde la tecnología no reemplaza la empatía humana, sino que la potencia para lograr tasas superiores de resolución, conversión y retención.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-black text-black block">+98%</span>
                  <span className="text-xs text-slate-600">Adherencia a SLAs Contratados</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-black text-black block">0%</span>
                  <span className="text-xs text-slate-600">Interrupción en Transición Operativa</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl relative space-y-6">
                <h3 className="text-xl font-black text-black border-b border-slate-200 pb-4">
                  Diferenciales del Modelo OneX
                </h3>

                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-black block">Gobernanza Transparente:</strong> Dashboards ejecutivos en tiempo real con auditoría de calidad al 100% mediante IA.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-black block">Talento Certificado:</strong> Formación en la Universidad Konverxa enfocada en empatía, habilidades técnicas y negociación.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-black block">Arquitectura Escalable:</strong> Capacidad elástica para absorber variaciones masivas de volumen en horas.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Deep Dive interactive OneX Pillars */}
      <section id="onex" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Pilares Fundamentales"
            title="Excelencia Integral OneX"
            subtitle="Explora en detalle los 5 pilares que sostienen nuestras operaciones BPO."
            centered
          />

          {/* Interactive Tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {ONEX_PILLARS.map((p) => {
              const IconComp = PILLAR_ICONS[p.icon] || Target;
              const isActive = p.id === selectedPillar;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPillar(p.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 border ${
                    isActive
                      ? 'bg-black text-white border-black shadow-md'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Detail View */}
          <motion.div
            key={activePillarObj.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-black">
                {activePillarObj.subtitle}
              </span>
              <h3 className="text-3xl font-black text-black">{activePillarObj.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed">{activePillarObj.description}</p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">Atributos Clave:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  {activePillarObj.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-100 border border-slate-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mx-auto shadow-md">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-black text-black">Impacto en SLA & Operación</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Este pilar garantiza que el 100% de los procesos estén alineados con los requerimientos normativos y las metas de negocio.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Ciclo de Intervención IntegralX */}
      <section id="integralx" className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <SectionTitle
            badge="Metodología de Proyectos"
            title="Ciclo de Intervención IntegralX"
            subtitle="Fases secuenciales diseñadas para una transición segura, estabilización oportuna y escalabilidad continua."
            centered
          />

          <div className="space-y-8">
            {INTEGRALX_PHASES.map((phase, idx) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-3xl bg-slate-50/90 backdrop-blur-xs border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-black/30 transition-all shadow-xs"
              >
                <div className="lg:col-span-4 flex items-start gap-4">
                  <div className="text-5xl font-black text-black shrink-0">
                    {phase.number}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700 block">
                      {phase.subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-black mt-1">{phase.name}</h3>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Entregables Principales:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {phase.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-sm border border-zinc-700 shadow-md transition-all"
            >
              <span>Solicitar Presentación Metodológica Completa</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
