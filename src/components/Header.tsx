import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, ArrowRight, Headphones, Building2, Layers } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isSolid = isScrolled || isHovered || mobileMenuOpen;

  // Header is transparent at top and transparent black (80%) on scroll with backdrop blur
  const navHeaderClass = isSolid
    ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg py-0 sm:py-0.5'
    : 'bg-black/40 hover:bg-black/75 backdrop-blur-xs border-b border-white/10 py-0 sm:py-0.5';

  const chevronClass = (dropdownName: string) => {
    const isOpen = activeDropdown === dropdownName;
    return isOpen ? 'rotate-180 text-white transition-transform duration-200' : 'text-slate-400 transition-transform duration-200';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navHeaderClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveDropdown(null);
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo with maximum visual prominence and tight vertical bounds */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none -my-4 sm:-my-6 hover:opacity-95 transition-opacity" aria-label="KONVERXA Home">
            <BrandLogo imgHeight="h-24 sm:h-28 lg:h-32" />
          </Link>

          {/* Desktop Navigation Menu - Uppercase with contained spacing as per document */}
          <nav className="hidden lg:flex items-center gap-8">
            
            {/* MODELO Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('modelo')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/modelo"
                className="group relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-200/85 hover:text-white py-1 transition-colors duration-200"
              >
                <span>MODELO</span>
                <ChevronDown className={`w-3.5 h-3.5 ${chevronClass('modelo')}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>

              <AnimatePresence>
                {activeDropdown === 'modelo' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-80 mt-2 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-3 shadow-2xl text-slate-100 backdrop-blur-xl"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 mb-1 flex items-center justify-between border-b border-zinc-800">
                      <span className="flex items-center gap-2"><Layers className="w-3.5 h-3.5 text-slate-300" /> Modelo OneX & Metodología</span>
                      <Link to="/modelo" className="text-slate-300 hover:text-white hover:underline flex items-center gap-0.5">Ver Todo <ArrowRight className="w-3 h-3" /></Link>
                    </div>

                    <div className="space-y-1">
                      <Link to="/modelo#vision-general" className="block px-3 py-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                        • Visión General
                      </Link>
                      <Link to="/nosotros" className="block px-3 py-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                        • Quienes somos
                      </Link>
                      <Link to="/modelo#excelencia-integral" className="block px-3 py-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                        • Excelencia Integral
                      </Link>
                      <Link to="/modelo#experiencia" className="block px-3 py-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                        • Experiencia OneX
                      </Link>
                      <Link to="/modelo#donde-estamos" className="block px-3 py-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                        • Dónde estamos
                      </Link>
                      <Link to="/modelo#integralx" className="block px-3 py-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                        • Ciclo Intervención IntegralX™
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SERVICIOS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('servicios')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/servicios"
                className="group relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-200/85 hover:text-white py-1 transition-colors duration-200"
              >
                <span>SERVICIOS</span>
                <ChevronDown className={`w-3.5 h-3.5 ${chevronClass('servicios')}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>

              <AnimatePresence>
                {activeDropdown === 'servicios' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-96 mt-2 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-3 shadow-2xl text-slate-100 backdrop-blur-xl"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 mb-1 flex items-center justify-between border-b border-zinc-800">
                      <span className="flex items-center gap-2"><Headphones className="w-3.5 h-3.5 text-slate-300" /> Soluciones BPO & CX</span>
                      <Link to="/servicios" className="text-slate-300 hover:text-white hover:underline flex items-center gap-0.5">Ver Todos <ArrowRight className="w-3 h-3" /></Link>
                    </div>

                    <div className="space-y-1">
                      <Link
                        to="/servicios#atencion-cliente"
                        className="block p-2.5 rounded-lg hover:bg-zinc-800/80 transition-colors text-xs text-slate-200 hover:text-white"
                      >
                        <div className="font-bold text-white">Atención y Experiencia Cliente</div>
                        <p className="text-[11px] text-slate-400 mt-0.5">Atención omnicanal, postventa, soporte y fidelización.</p>
                      </Link>

                      <Link
                        to="/servicios#ventas-fidelizacion"
                        className="block p-2.5 rounded-lg hover:bg-zinc-800/80 transition-colors text-xs text-slate-200 hover:text-white"
                      >
                        <div className="font-bold text-white">Ventas y Fidelización</div>
                        <p className="text-[11px] text-slate-400 mt-0.5">Prospección, captación, televentas, cross & up selling.</p>
                      </Link>

                      <Link
                        to="/servicios#back-office"
                        className="block p-2.5 rounded-lg hover:bg-zinc-800/80 transition-colors text-xs text-slate-200 hover:text-white"
                      >
                        <div className="font-bold text-white">Back Office y Gestión de procesos</div>
                        <p className="text-[11px] text-slate-400 mt-0.5">Gestión documental, validaciones, tramitación y control.</p>
                      </Link>

                      <Link
                        to="/servicios#capacidades-integradas"
                        className="block p-2.5 rounded-lg hover:bg-zinc-800/80 transition-colors text-xs text-slate-200 hover:text-white"
                      >
                        <div className="font-bold text-white">Capacidades integradas</div>
                        <p className="text-[11px] text-slate-400 mt-0.5">Analítica, calidad, desarrollo, automatización y mejora.</p>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INDUSTRIAS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industrias')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/industrias"
                className="group relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-200/85 hover:text-white py-1 transition-colors duration-200"
              >
                <span>INDUSTRIAS</span>
                <ChevronDown className={`w-3.5 h-3.5 ${chevronClass('industrias')}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>

              <AnimatePresence>
                {activeDropdown === 'industrias' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-12 w-[480px] mt-2 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-4 shadow-2xl grid grid-cols-2 gap-2 text-slate-100 backdrop-blur-xl"
                  >
                    <div className="col-span-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1 mb-1 border-b border-zinc-800 flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-slate-300" /> Sectores Especializados
                    </div>

                    <Link to="/industrias/telecomunicaciones" className="p-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                      • Telecomunicaciones
                    </Link>
                    <Link to="/industrias/banca-fintech" className="p-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                      • Banca y Servicios financieros
                    </Link>
                    <Link to="/industrias/retail-ecommerce" className="p-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                      • Retail y Comercio electrónico
                    </Link>
                    <Link to="/industrias/tecnologia" className="p-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                      • Tecnología y Negocios digitales
                    </Link>
                    <Link to="/industrias/seguros" className="p-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                      • Seguros
                    </Link>
                    <Link to="/industrias/salud" className="p-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                      • Salud
                    </Link>
                    <Link to="/industrias/logistica" className="p-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                      • Movilidad, Transporte y Logística
                    </Link>
                    <Link to="/industrias/energia" className="p-2 rounded-lg hover:bg-zinc-800/80 text-xs text-slate-300 hover:text-white transition-colors">
                      • Energía y Servicios Públicos
                    </Link>

                    <div className="col-span-2 mt-2 pt-2 border-t border-zinc-800 flex justify-end">
                      <Link to="/industrias" className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1">
                        Ver todas las industrias <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* NOSOTROS Link */}
            <Link
              to="/nosotros"
              className="group relative text-xs font-bold uppercase tracking-widest text-slate-200/85 hover:text-white py-1 transition-colors duration-200"
            >
              <span>NOSOTROS</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>

            {/* CONTÁCTANOS Button */}
            <Link
              to="/contacto"
              className="px-5 py-2 rounded-lg bg-transparent hover:bg-slate-100 text-slate-100 hover:text-black border border-slate-300/40 text-xs font-bold uppercase tracking-widest transition-all duration-[220ms] ml-2"
            >
              CONTÁCTANOS
            </Link>
          </nav>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none transition-colors border bg-white/10 text-white hover:bg-white/20 border-white/20"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 py-6 shadow-2xl backdrop-blur-xl overflow-hidden max-h-[85vh] overflow-y-auto text-white"
          >
            <div className="flex flex-col gap-4 text-slate-200">
              
              {/* MODELO Mobile */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'm-modelo' ? null : 'm-modelo')}
                  className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
                >
                  MODELO
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-modelo' ? 'rotate-180 text-slate-200' : ''}`} />
                </button>
                {activeDropdown === 'm-modelo' && (
                  <div className="pl-4 py-2 flex flex-col gap-2.5 text-xs text-slate-300 border-l-2 border-slate-700 mt-2">
                    <Link to="/modelo#vision-general" onClick={() => setMobileMenuOpen(false)}>Visión General</Link>
                    <Link to="/nosotros" onClick={() => setMobileMenuOpen(false)}>Quienes somos</Link>
                    <Link to="/modelo#excelencia-integral" onClick={() => setMobileMenuOpen(false)}>Excelencia Integral</Link>
                    <Link to="/modelo#experiencia" onClick={() => setMobileMenuOpen(false)}>Experiencia OneX</Link>
                    <Link to="/modelo#donde-estamos" onClick={() => setMobileMenuOpen(false)}>Dónde estamos</Link>
                    <Link to="/modelo#integralx" onClick={() => setMobileMenuOpen(false)}>Ciclo Intervención IntegralX™</Link>
                  </div>
                )}
              </div>

              {/* SERVICIOS Mobile */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'm-servicios' ? null : 'm-servicios')}
                  className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
                >
                  SERVICIOS
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-servicios' ? 'rotate-180 text-slate-200' : ''}`} />
                </button>
                {activeDropdown === 'm-servicios' && (
                  <div className="pl-4 py-2 flex flex-col gap-2.5 text-xs text-slate-300 border-l-2 border-slate-700 mt-2">
                    <Link to="/servicios#atencion-cliente" onClick={() => setMobileMenuOpen(false)}>Atención y Experiencia Cliente</Link>
                    <Link to="/servicios#ventas-fidelizacion" onClick={() => setMobileMenuOpen(false)}>Ventas y Fidelización</Link>
                    <Link to="/servicios#back-office" onClick={() => setMobileMenuOpen(false)}>Back Office y Gestión de procesos</Link>
                    <Link to="/servicios#capacidades-integradas" onClick={() => setMobileMenuOpen(false)}>Capacidades integradas</Link>
                  </div>
                )}
              </div>

              {/* INDUSTRIAS Mobile */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'm-industrias' ? null : 'm-industrias')}
                  className="flex items-center justify-between w-full text-left font-bold text-xs uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
                >
                  INDUSTRIAS
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-industrias' ? 'rotate-180 text-slate-200' : ''}`} />
                </button>
                {activeDropdown === 'm-industrias' && (
                  <div className="pl-4 py-2 flex flex-col gap-2.5 text-xs text-slate-300 border-l-2 border-slate-700 mt-2">
                    <Link to="/industrias/telecomunicaciones" onClick={() => setMobileMenuOpen(false)}>Telecomunicaciones</Link>
                    <Link to="/industrias/banca-fintech" onClick={() => setMobileMenuOpen(false)}>Banca y Servicios financieros</Link>
                    <Link to="/industrias/retail-ecommerce" onClick={() => setMobileMenuOpen(false)}>Retail y Comercio electrónico</Link>
                    <Link to="/industrias/tecnologia" onClick={() => setMobileMenuOpen(false)}>Tecnología y Negocios digitales</Link>
                    <Link to="/industrias/seguros" onClick={() => setMobileMenuOpen(false)}>Seguros</Link>
                    <Link to="/industrias/salud" onClick={() => setMobileMenuOpen(false)}>Salud</Link>
                    <Link to="/industrias/logistica" onClick={() => setMobileMenuOpen(false)}>Movilidad, Transporte y Logística</Link>
                    <Link to="/industrias/energia" onClick={() => setMobileMenuOpen(false)}>Energía y Servicios Públicos</Link>
                  </div>
                )}
              </div>

              {/* NOSOTROS Mobile */}
              <Link
                to="/nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-xs uppercase tracking-widest py-2 border-b border-zinc-800 text-white"
              >
                NOSOTROS
              </Link>

              {/* CONTÁCTANOS Mobile Button */}
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3 text-center rounded-xl bg-transparent hover:bg-slate-100 text-white hover:text-black font-bold text-xs uppercase tracking-widest border border-slate-300/40"
              >
                CONTÁCTANOS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
