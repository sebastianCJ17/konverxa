import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/company';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, ShieldCheck, CheckCircle2, Briefcase } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const [quickEmail, setQuickEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleQuickSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (quickEmail.trim()) {
      setSubscribed(true);
      setQuickEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-black/80 backdrop-blur-md text-slate-200 border-t border-zinc-800 relative pt-10 pb-8 overflow-hidden font-sans">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-800/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Career Banner CTA in Footer */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 backdrop-blur-md">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-slate-300 text-xs font-semibold mb-2">
              <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Oportunidades de Carrera
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              ¿Buscas transformar tu futuro profesional?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Únete al equipo de KONVERXA y forma parte de una cultura de innovación, liderazgo y excelencia operacional.
            </p>
          </div>
          <Link
            to="/trabaja-con-nosotros"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold transition-all border border-zinc-700 shadow-lg flex items-center gap-2 text-sm"
          >
            Trabaja con Nosotros
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

        {/* Main Footer Grid - 3 Balanced Centered Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-zinc-800 items-start">
          
          {/* Col 1: Brand & Credentials (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block focus:outline-none -my-3">
              <BrandLogo imgHeight="h-28 sm:h-36 lg:h-40" />
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Especialistas en Business Process Outsourcing (BPO), Contact Center, Customer Experience y Transformación Operativa para empresas líderes.
            </p>

            {/* LinkedIn Official Button */}
            <div className="pt-0.5">
              <a
                href={COMPANY_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-slate-200 border border-zinc-700 hover:border-zinc-500 text-xs font-semibold transition-all shadow-sm"
                aria-label="LinkedIn Oficial KONVERXA"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current text-slate-300" />
                <span>Síguenos en LinkedIn</span>
              </a>
            </div>

            {/* Certifications Badge */}
            <div className="pt-0.5 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center gap-1.5 shadow-xs text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> ISO 27001 Certified
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center gap-1.5 shadow-xs text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> COPC Standard
              </span>
            </div>
          </div>

          {/* Col 2: Quick Nav (3 cols) */}
          <div className="md:col-span-3 md:pl-4 lg:pl-8 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-zinc-800 pb-2 inline-block">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li><Link to="/" className="hover:text-white transition-colors block">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors block">Servicios BPO & CX</Link></li>
              <li><Link to="/industrias" className="hover:text-white transition-colors block">Sectores e Industrias</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors block">Sobre Nosotros</Link></li>
              <li><Link to="/trabaja-con-nosotros" className="hover:text-white transition-colors block">Trabaja con Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors block">Contacto Corporativo</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Contact & Inquiry (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-zinc-800 pb-2 inline-block">
              Contacto Directo
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{COMPANY_INFO.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-xs hover:text-white transition-colors font-medium">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\D/g,'')}`} className="text-xs hover:text-white transition-colors font-medium">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="pt-1">
              <span className="text-xs text-slate-200 font-semibold block mb-1.5">Consulta Rápida de Solución</span>
              <form onSubmit={handleQuickSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="Tu correo corporativo"
                  required
                  className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors border border-slate-700 shrink-0 shadow-sm"
                  aria-label="Enviar consulta"
                >
                  Enviar
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solicitud enviada con éxito.
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} KONVERXA BPO & CX Solutions. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/politica-de-privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/politica-de-cookies" className="hover:text-white transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

