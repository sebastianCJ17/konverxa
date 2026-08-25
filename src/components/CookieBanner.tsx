import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('konverxa_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('konverxa_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 p-5 rounded-2xl bg-white text-slate-800 border border-slate-200 shadow-2xl backdrop-blur-xl animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0 border border-blue-200">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1 text-xs leading-relaxed text-slate-600">
          <p className="font-bold text-slate-900 mb-1">Privacidad y Cookies</p>
          Utilizamos cookies propias y de terceros para optimizar la experiencia de navegación y analizar el tráfico corporativo.{' '}
          <Link to="/politica-de-cookies" className="text-blue-600 underline hover:text-blue-700">
            Más información
          </Link>.
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-slate-700 p-1"
          aria-label="Cerrar aviso de cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-end gap-3 text-xs">
        <button
          onClick={accept}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors shadow-sm"
        >
          Aceptar Todas
        </button>
      </div>
    </div>
  );
}
