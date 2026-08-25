import { useParams, Link, useNavigate } from 'react';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import { INDUSTRIES_DATA } from '../data/industries';
import {
  Radio, Landmark, ShoppingBag, Cpu, ShieldCheck, Activity, Truck, Zap, Plane, GraduationCap,
  Building2, ArrowRight, CheckCircle2, AlertCircle, ChevronLeft
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Radio, Landmark, ShoppingBag, Cpu, ShieldCheck, Activity, Truck, Zap, Plane, GraduationCap
};

export default function IndustriaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const industry = INDUSTRIES_DATA.find((ind) => ind.slug === slug) || INDUSTRIES_DATA[0];
  const IconComp = ICON_MAP[industry.iconName] || Building2;

  if (!industry) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-black">Industria no encontrada</h2>
          <Link to="/industrias" className="px-6 py-2.5 rounded-xl bg-black text-white font-bold text-sm">
            Volver a Industrias
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title={`Soluciones BPO para ${industry.name}`}
        description={industry.fullDesc}
      />

      {/* Header Banner with Breadcrumbs & Outlined Watermark */}
      <PageBanner
        title={industry.name.toUpperCase()}
        watermark={industry.name.toUpperCase()}
        titleAccentColor="text-slate-900"
        badge="Sector Especializado"
        headline={`Soluciones BPO y CX para ${industry.name}`}
        description={industry.fullDesc}
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Industrias', path: '/industrias' },
          { label: industry.name }
        ]}
        image={industry.heroImage}
        imageAlt={`Soluciones BPO para ${industry.name}`}
      />

      {/* Main Content Details */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid: Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.stats.map((stat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <span className="text-4xl font-black text-black block">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Challenges vs Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Challenges */}
            <div className="p-8 sm:p-10 rounded-3xl bg-red-50/50 border border-red-200 space-y-6">
              <div className="flex items-center gap-2 text-red-700 font-bold text-lg">
                <AlertCircle className="w-5 h-5 text-red-600" /> Retos Frecuentes del Sector
              </div>
              <ul className="space-y-4">
                {industry.keyChallenges.map((chal, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                    <span>{chal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
              <div className="flex items-center gap-2 text-black font-black text-lg">
                <CheckCircle2 className="w-5 h-5 text-slate-800" /> Soluciones KONVERXA
              </div>
              <ul className="space-y-4">
                {industry.solutions.map((sol, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-slate-800 mt-0.5 shrink-0" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Call to Action */}
          <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-black">
              ¿Quieres transformar la operación en {industry.name}?
            </h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Nuestros expertos de industria pueden realizar un diagnóstico preliminar y estructurar una propuesta de servicio ajustada a tus SLAs.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-sm border border-zinc-700 shadow-md transition-all"
            >
              <span>Solicitar Diagnóstico para {industry.name}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
