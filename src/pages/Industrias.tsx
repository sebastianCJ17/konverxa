import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import IndustryCarousel from '../components/IndustryCarousel';
import { INDUSTRIES_DATA } from '../data/industries';
import {
  Radio, Landmark, ShoppingBag, Cpu, ShieldCheck, Activity, Truck, Zap, Plane, GraduationCap,
  Building2, ArrowRight
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Radio, Landmark, ShoppingBag, Cpu, ShieldCheck, Activity, Truck, Zap, Plane, GraduationCap
};

export default function Industrias() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title="Sectores e Industrias - BPO Especializado"
        description="Descubre cómo KONVERXA ofrece soluciones BPO, Contact Center y CX a medida para Telecomunicaciones, Banca, Retail, Tecnología, Seguros, Salud, Logística y Energía."
      />

      {/* Header Banner with Breadcrumbs & Outlined Watermark */}
      <PageBanner
        title="MERCADOS"
        watermark="MERCADOS"
        titleAccentColor="text-slate-900"
        badge="Sectores Estratégicos"
        headline="Especialización Operativa por Industria"
        description="Los negocios cambian. El estándar permanece. Diseñamos modelos de atención y retención adaptados a los desafíos regulatorios y operativos de cada sector."
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Industrias y Mercados' }
        ]}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Sectores e industrias globales"
      />

      {/* Featured Modern Carousel */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid: Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <SectionTitle
            badge="Destacado"
            title="Sectores de Alto Impacto"
            subtitle="Explora de forma interactiva las capacidades desarrolladas para cada vertical."
          />

          <IndustryCarousel />
        </div>
      </section>

      {/* All Industries Detailed Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionTitle
            badge="Catálogo Completo"
            title="Todas las Industrias Atendidas"
            subtitle="Haz clic en cualquier industria para profundizar en sus métricas, retos y soluciones especializadas."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_DATA.map((ind, idx) => {
              const IconComp = ICON_MAP[ind.iconName] || Building2;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-black/30 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={ind.heroImage}
                        alt={ind.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-black text-black transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {ind.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to={`/industrias/${ind.slug}`}
                      className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-black hover:text-white border border-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:border-zinc-700 shadow-xs"
                    >
                      <span>Ver Soluciones {ind.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
