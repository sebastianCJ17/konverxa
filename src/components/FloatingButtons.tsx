import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Phone, Mail, MessageCircle, Linkedin, X, Headphones } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/525589005000?text=${encodeURIComponent('Hola KONVERXA, me gustaría solicitar información sobre sus servicios de BPO y Contact Center.')}`;
  const mailUrl = `mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent('Consulta de Servicios KONVERXA')}`;
  const phoneUrl = `tel:${COMPANY_INFO.contact.phone.replace(/\D/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none" ref={menuRef}>
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white text-slate-700 hover:text-blue-600 border border-slate-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-md"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Expanded Contact Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto w-72 sm:w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 space-y-2 mb-2"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Contacto Inmediato</h4>
                  <p className="text-[10px] text-slate-500">KONVERXA BPO & CX Solutions</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Option 1: WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/60 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Escribir por WhatsApp
                </div>
                <div className="text-[10px] text-slate-500 truncate">+52 (55) 8900-5000 • Respuesta rápida</div>
              </div>
            </a>

            {/* Option 2: Phone Call */}
            <a
              href={phoneUrl}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-900 group-hover:text-black transition-colors">
                  Llamada Telefónica
                </div>
                <div className="text-[10px] text-slate-500 truncate">Atención directa comercial</div>
              </div>
            </a>

            {/* Option 3: Send Email */}
            <a
              href={mailUrl}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-full bg-zinc-800 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-900 group-hover:text-black transition-colors">
                  Enviar Correo Electrónico
                </div>
                <div className="text-[10px] text-slate-500 truncate">{COMPANY_INFO.contact.email}</div>
              </div>
            </a>

            {/* Option 4: LinkedIn */}
            <a
              href={COMPANY_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Linkedin className="w-4 h-4 fill-current" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-800">LinkedIn Oficial</div>
                <div className="text-[10px] text-slate-400 truncate">Comunidad corporativa</div>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating WhatsApp-style Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative flex items-center gap-2.5 p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl transition-all duration-300 hover:scale-105 shadow-emerald-900/30 border border-white/20"
        aria-label="Opciones de contacto flotante"
      >
        <div className="relative">
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <MessageCircle className="w-6 h-6 fill-current transition-transform duration-300" />
          )}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white animate-ping"></span>
          )}
        </div>

        <span className="text-xs font-bold pr-1 hidden sm:inline-block">
          {isOpen ? 'Cerrar' : 'Contacto Directo'}
        </span>
      </button>

    </div>
  );
}

