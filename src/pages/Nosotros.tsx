import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import { COMPANY_INFO } from '../data/company';
import { Building2, ShieldCheck, Target, Heart, Cpu, ArrowRight, Award, CheckCircle2, Globe } from 'lucide-react';

const VALUE_ICONS: Record<string, any> = {
  Target, Heart, Cpu, ShieldCheck
};

export default function Nosotros() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title="Sobre Nosotros - KONVERXA"
        description="Conoce la historia, filosofía corporativa, valores y estándar de calidad internacional de KONVERXA en BPO y Customer Experience."
      />

      {/* Header Banner with Breadcrumbs & Outlined Watermark */}
      <PageBanner
        title="NOSOTROS"
        watermark="NOSOTROS"
        titleAccentColor="text-slate-900"
        badge="Nuestra Firma & Estándar"
        headline="Liderazgo, Método y Excelencia Operacional"
        description="Somos un aliado estratégico corporativo comprometido con elevar la eficiencia, rentabilidad y satisfacción del usuario final en grandes organizaciones."
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Sobre Nosotros' }
        ]}
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Equipo ejecutivo y liderazgo KONVERXA"
      />

      {/* Identity & Corporate Philosophy */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid: Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionTitle
                badge="Propósito Institucional"
                title="Transformamos la Operación en una Ventaja Competitiva"
                subtitle="Nuestra propuesta trasciende el esquema convencional de outsourcing. Nos involucramos activamente en la estrategia de nuestros clientes."
              />

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Fundada bajo los más altos estándares de consultoría internacional, KONVERXA opera centros de interacción inteligentes con presencia regional en América Latina y conectividad global.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
                  <Globe className="w-5 h-5 text-slate-800 shrink-0" />
                  <span>Atención multilingüe y cobertura regional multizonas.</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-slate-800 shrink-0" />
                  <span>Infraestructura certificada ISO 27001 y PCI-DSS.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Centro de Operaciones KONVERXA"
                className="rounded-2xl object-cover h-64 w-full border border-slate-200 shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                alt="Reunión directiva KONVERXA"
                className="rounded-2xl object-cover h-64 w-full border border-slate-200 shadow-md mt-8"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionTitle
            badge="Principios Rectores"
            title="Nuestros Valores Corporativos"
            subtitle="Cada integrante de KONVERXA guía su actuación diaria en estos 4 pilares de conducta."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.values.map((val, idx) => {
              const IconComp = VALUE_ICONS[val.icon] || Target;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 hover:border-black/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black border border-slate-300 flex items-center justify-center">
                    <IconComp className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-black text-black">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Certifications Showcase */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <SectionTitle
            badge="Gobernanza & Cumplimiento"
            title="Estándares de Calidad Internacional"
            subtitle="Garantizamos seguridad informática, protección de datos personales y rigurosidad operativa."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.certifications.map((cert, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <Award className="w-8 h-8 text-black mx-auto mb-2" />
                <h4 className="text-lg font-black text-black">{cert.name}</h4>
                <p className="text-xs text-slate-600">{cert.label}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-sm border border-zinc-700 shadow-md transition-all"
            >
              <span>Conectar con un Ejecutivo Corporativo</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
