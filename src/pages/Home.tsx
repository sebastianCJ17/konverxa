import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import VideoHero from '../components/VideoHero';
import StatsCounter from '../components/StatsCounter';
import NarrativeScroll from '../components/NarrativeScroll';
import WhyKonverxa from '../components/WhyKonverxa';
import IndustryCarousel from '../components/IndustryCarousel';
import CareerTeaser from '../components/CareerTeaser';
import SectionTitle from '../components/SectionTitle';
import { SERVICES_DATA } from '../data/services';
import { ArrowRight, ShieldCheck, Headphones, TrendingUp, Workflow, FileText, Bot, ChevronRight } from 'lucide-react';

const SERVICE_ICONS: Record<string, any> = {
  Headphones, TrendingUp, ShieldCheck, Workflow, FileText, Bot
};

const CTA_SLIDES = [
  {
    id: 1,
    description:
      'Solicita un diagnóstico de madurez operacional y descubre cómo el modelo de KONVERXA puede optimizar tus costes y elevar la satisfacción de tus clientes.',
    image: 'images/Captura de pantalla 2026-08-20 155017.png',
  },
  {
    id: 2,
    description:
      'Evaluamos tu operación actual, identificamos oportunidades clave y diseñamos un plan de mejora a la medida de tus objetivos.',
    image: 'images/Captura de pantalla 2026-08-20 155036.png',
  },
  {
    id: 3,
    description:
      'Implementamos soluciones operativas con tecnología, procesos y talento especializado para generar resultados medibles y sostenibles.',
    image: 'images/Captura de pantalla 2026-08-20 155055.png',
  },
  {
    id: 4,
    description: '',
    image: 'images/Captura de pantalla 2026-08-20 155114.png',
  },
];

export default function Home() {
    const [activeCta, setActiveCta] = useState(0);

    const currentCta = CTA_SLIDES[activeCta];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title="BPO, Contact Center & Customer Experience de Clase Mundial"
        description="KONVERXA - Firma especializada en Business Process Outsourcing (BPO), Contact Center, Customer Experience y Transformación Operativa."
      />

      {/* Hero Video Section */}
      <VideoHero />

      {/* Metrics & Statistics Bar */}
      <section className="py-16 bg-slate-50 border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter />
        </div>
      </section>

      {/* SECCIÓN 02: Scroll Narrativo */}
      <NarrativeScroll />

      {/* SECCIÓN 03: ¿POR QUÉ KONVERXA? */}
      <WhyKonverxa />

      {/* SECCIÓN 04: SOLUCIONES / PORTAFOLIO */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        {/* Subtle Visual Aid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <SectionTitle
              badge="Portafolio de Soluciones BPO"
              title="Capacidades Operativas de Alto Desempeño"
              subtitle="Diseñadas para escalar de forma elástica, garantizando respuestas inmediatas y continuidad de negocio."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service, idx) => {
              const IconComp = SERVICE_ICONS[service.iconName] || Headphones;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl bg-white border border-slate-200 overflow-hidden hover:border-black/30 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="p-8 sm:p-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center group-hover:bg-black transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        0{idx + 1} / Solución
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-black transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 mt-1">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Capacidades Clave:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {service.features.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Implementación con SLAs Garantizados
                    </span>
                    <Link
                      to={`/servicios#${service.id}`}
                      className="text-xs font-bold text-black hover:text-slate-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Ver detalles</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-sm shadow-md border border-zinc-700 transition-all"
            >
              <span>Explorar Todo el Portafolio de Servicios</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECCIÓN · MAPA GLOBAL */}
{/* SECCIÓN · MAPA GLOBAL */}
<section className="relative w-full overflow-hidden bg-black">
  <div className="w-full aspect-[2.4/1] min-h-[420px] max-h-[650px]">
    <img
      src="images/mapa-global.png"
      alt=""
      className="w-full h-full object-cover object-center"
    />

    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
  </div>
</section>





      {/* SECCIÓN 05 · MERCADOS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <SectionTitle
              badge="MERCADOS"
              title="Los negocios cambian. El estándar permanece."
              subtitle="Adaptamos la capacidad, la organización y la ejecución a las exigencias de cada sector, sin perder control ni consistencia."
              centered
            />
          </div>

          <IndustryCarousel />
        </div>
      </section>

      {/* Strategic Careers Section ("Trabaja con Nosotros") */}
      <CareerTeaser />

{/* Final Call To Action Banner */}
<section
  className="relative min-h-[620px] overflow-hidden text-center text-white"
>

  {/* Fondo del slide */}

<div className="absolute inset-0 overflow-hidden bg-black">

  <motion.img
    key={currentCta.image}
    src={currentCta.image}
    alt=""
    initial={{ opacity: 0.15 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.4,
      ease: 'easeOut',
    }}
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/75" />

</div>


  {/* Contenido */}
  <div className="relative z-10 flex min-h-[620px] items-center justify-center">
    <div className="w-full max-w-5xl px-6 py-20 sm:px-8">

      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
        <ShieldCheck className="h-4 w-4" />
        Transición Operativa Sin Riesgo
      </div>

      {/* Título */}
<h2 className="mx-auto max-w-4xl text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
        ¿Listo para Elevar la Eficiencia y Experiencia de tu Operación?
      </h2>

      {/* Descripción */}
      <div className="mt-7 min-h-[72px]">
        {currentCta.description && (
          <motion.p
            key={`description-${activeCta}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg"
          >
            {currentCta.description}
          </motion.p>
        )}
      </div>

      {/* Botones */}
      <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/contacto"
          className="flex items-center gap-2 rounded-xl bg-slate-950 px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-black hover:shadow-xl"
        >
          <span>Agendar Sesión Consultiva</span>
          <ArrowRight className="h-5 w-5" />
        </Link>

        <Link
          to="/servicios"
          className="rounded-xl border border-white/50 bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-sm transition-all duration-300 hover:bg-white/90"
        >
          Conoce Nuestros Servicios
        </Link>
      </div>

      {/* Indicador 01 · 02 · 03 · 04 */}
      <div className="mt-12 flex items-center justify-center gap-5">
        {CTA_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveCta(index)}
            className="group flex items-center gap-2"
            aria-label={`Ir al slide ${slide.id}`}
          >
            <span
              className={`text-sm font-semibold transition-colors duration-300 ${
                activeCta === index
                  ? 'text-[#B08D57]'
                  : 'text-white/50 group-hover:text-white'
              }`}
            >
              0{slide.id}
            </span>

            <span
              className={`h-px transition-all duration-300 ${
                activeCta === index
                  ? 'w-8 bg-[#B08D57]'
                  : 'w-0 bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
