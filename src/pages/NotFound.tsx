import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-white text-slate-900 min-h-screen flex items-center justify-center p-6 text-center font-sans">
      <SEOHead title="Página No Encontrada - 404" />

      <div className="max-w-md space-y-6">
        <div className="text-8xl font-black text-blue-600 tracking-tighter">404</div>
        <h1 className="text-3xl font-bold text-slate-900">Página No Encontrada</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          La página que estás buscando no existe o ha sido movida dentro de la estructura corporativa de KONVERXA.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>
          <Link
            to="/contacto"
            className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-all flex items-center gap-2"
          >
            <span>Contacto</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
