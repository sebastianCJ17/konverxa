import { useState, ElementType } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Radio, Landmark, ShoppingBag, Cpu, ShieldCheck, Activity, Truck, Zap,
  Headphones, TrendingUp, Wrench, Heart, ClipboardList,
  ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react';

export interface MarketItem {
  id: string;
  number: string;
  name: string;
  slug: string;
  desc: string;
  image: string;
  tags: { label: string; icon: ElementType }[];
}

export const MARKETS_DATA: MarketItem[] = [
  {
    id: 'telecomunicaciones',
    number: '01',
    name: 'Telecomunicaciones',
    slug: 'telecomunicaciones',
    desc: 'Operaciones de alto volumen donde la capacidad de respuesta, la continuidad y el control deben sostenerse en cada interacción.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { label: 'Atención al cliente', icon: Headphones },
      { label: 'Ventas', icon: TrendingUp },
      { label: 'Soporte técnico', icon: Wrench },
      { label: 'Fidelización', icon: Heart },
      { label: 'Back Office', icon: ClipboardList }
    ]
  },
  {
    id: 'banca-finanzas',
    number: '02',
    name: 'Banca y servicios financieros',
    slug: 'banca-fintech',
    desc: 'Entornos altamente regulados que exigen rigor operativo, protección de datos y absoluta continuidad en la atención.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { label: 'Onboarding digital', icon: Headphones },
      { label: 'Cobranza especializada', icon: TrendingUp },
      { label: 'Soporte transaccional', icon: Wrench },
      { label: 'Prevención de fraude', icon: ShieldCheck },
      { label: 'Back Office crítico', icon: ClipboardList }
    ]
  },
  {
    id: 'retail-ecommerce',
    number: '03',
    name: 'Retail y comercio electrónico',
    slug: 'retail-ecommerce',
    desc: 'Atención ágil para picos de alta demanda, garantizando experiencia de compra y resolución en cada punto de contacto.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e51a6627?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { label: 'Atención pre y post-venta', icon: ShoppingBag },
      { label: 'Logística inversa', icon: Truck },
      { label: 'Soporte omnicanal', icon: Headphones },
      { label: 'Fidelización', icon: Heart },
      { label: 'Gestión de pedidos', icon: ClipboardList }
    ]
  },
  {
    id: 'tecnologia-digital',
    number: '04',
    name: 'Tecnología y negocios digitales',
    slug: 'tecnologia-digital',
    desc: 'Soporte técnico y gestión de clientes para plataformas dinámicas que crecen a ritmo acelerado.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { label: 'Help desk multinivel', icon: Cpu },
      { label: 'Customer Success', icon: Heart },
      { label: 'Soporte SaaS', icon: Wrench },
      { label: 'Gestión de usuarios', icon: Headphones },
      { label: 'Monitorización 24/7', icon: Zap }
    ]
  },
  {
    id: 'seguros',
    number: '05',
    name: 'Seguros',
    slug: 'seguros',
    desc: 'Gestión humana y oportuna en momentos decisivos, acelerando la respuesta ante siniestros y asistencias.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { label: 'Atención de siniestros 24/7', icon: ShieldCheck },
      { label: 'Despacho de asistencias', icon: Truck },
      { label: 'Renovación proactiva', icon: TrendingUp },
      { label: 'Soporte a corredores', icon: Headphones },
      { label: 'Gestión de pólizas', icon: ClipboardList }
    ]
  },
  {
    id: 'salud',
    number: '06',
    name: 'Salud',
    slug: 'salud',
    desc: 'Coordinación precisa y empática para servicios médicos, asegurando agilidad y cuidado profesional al paciente.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { label: 'Agendamiento de citas', icon: Activity },
      { label: 'Soporte a telemedicina', icon: Headphones },
      { label: 'Mesa de orientación', icon: Wrench },
      { label: 'Confirmación y recordatorios', icon: TrendingUp },
      { label: 'Gestión de reclamos', icon: ClipboardList }
    ]
  },
  {
    id: 'movilidad-logistica',
    number: '07',
    name: 'Movilidad, transporte y logística',
    slug: 'logistica',
    desc: 'Control en tiempo real para cadenas de distribución y atención a choferes y usuarios finales.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { label: 'Rastreo de envíos', icon: Truck },
      { label: 'Gestión de novedades', icon: Wrench },
      { label: 'Soporte a conductores', icon: Headphones },
      { label: 'Atención post-entrega', icon: Heart },
      { label: 'Mesa de control', icon: ClipboardList }
    ]
  },
  {
    id: 'energia-servicios',
    number: '08',
    name: 'Energía y Servicios Públicos',
    slug: 'energia-servicios',
    desc: 'Atención masiva con alta disponibilidad ante eventualidades, emergencias y requerimientos de servicio.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    tags: [
      { label: 'Reporte de emergencias', icon: Zap },
      { label: 'Atención de reclamaciones', icon: Headphones },
      { label: 'Gestión de facturación', icon: ClipboardList },
      { label: 'Despacho técnico', icon: Wrench },
      { label: 'Canales digitales 24/7', icon: TrendingUp }
    ]
  }
];

export default function IndustryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? MARKETS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === MARKETS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full relative py-6 select-none overflow-hidden">
      
      {/* 3D Coverflow Container */}
      <div className="relative w-full h-[540px] sm:h-[580px] flex items-center justify-center perspective-[1200px]">
        
        {MARKETS_DATA.map((market, index) => {
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;

          // Determine position, rotation, scale, opacity, and grayscale for 3D stack effect
          let translateX = offset * 220; // horizontal spacing on desktop
          if (Math.abs(offset) > 3) {
            translateX = offset > 0 ? 800 : -800;
          }

          const scale = isActive ? 1.05 : Math.max(0.72, 1 - absOffset * 0.12);
          const rotateY = isActive ? 0 : offset < 0 ? 25 : -25;
          const zIndex = 30 - absOffset * 5;
          const opacity = absOffset > 3 ? 0 : Math.max(0.3, 1 - absOffset * 0.25);

          return (
            <motion.div
              key={market.id}
              onClick={() => setCurrentIndex(index)}
              animate={{
                x: translateX,
                scale: scale,
                rotateY: rotateY,
                zIndex: zIndex,
                opacity: opacity
              }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              style={{
                transformStyle: 'preserve-3d',
              }}
              className={`absolute cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-shadow duration-300 ${
                isActive
                  ? 'w-[320px] sm:w-[380px] h-[480px] sm:h-[520px] ring-2 ring-black/10 shadow-2xl'
                  : 'w-[220px] sm:w-[260px] h-[400px] sm:h-[440px] hover:brightness-110'
              }`}
            >
              {/* Card Background Image */}
              <div className="relative w-full h-full">
                <img
                  src={market.image}
                  alt={market.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isActive
                      ? 'filter brightness-[0.88] contrast-[1.05] saturate-[1.1]'
                      : 'filter grayscale-[100%] brightness-[0.45] contrast-[1.1]'
                  }`}
                />

                {/* Overlay Gradients */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? 'bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent'
                      : 'bg-gradient-to-t from-black via-black/70 to-black/30'
                  }`}
                />

                {/* Active Card Content */}
                {isActive ? (
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white z-10">
                    <div className="space-y-2">
                      <span className="text-sm font-bold tracking-widest text-zinc-300 font-mono block">
                        {market.number}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
                        {market.name}
                      </h3>
                      <div className="w-8 h-[2px] bg-white/60 my-3" />
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                        {market.desc}
                      </p>
                    </div>

                    {/* Services / Capabilities Tag List */}
                    <div className="space-y-4 my-2">
                      <div className="space-y-2">
                        {market.tags.map((tag, i) => {
                          const IconC = tag.icon;
                          return (
                            <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-200 font-medium">
                              <IconC className="w-3.5 h-3.5 text-white shrink-0" />
                              <span>{tag.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <Link
                          to={`/industrias/${market.slug}`}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-white hover:text-zinc-200 transition-colors group"
                        >
                          <span>Explorar {market.name}</span>
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Inactive Side Card Minimal Info */
                  <div className="absolute inset-0 p-5 flex flex-col justify-between text-white/90 z-10 pointer-events-none">
                    <span className="text-xs font-bold tracking-widest text-zinc-400 font-mono">
                      {market.number}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-zinc-200 leading-snug">
                        {market.name}
                      </h4>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

      </div>

      {/* Bottom Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex items-center justify-between">
        
        {/* Progress Dashes / Segment Bars */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {MARKETS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-slate-900'
                  : 'w-3 sm:w-4 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Ir a mercado ${idx + 1}`}
            />
          ))}
        </div>

        {/* Circular Arrow Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-300 shadow-sm transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-300 shadow-sm transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </div>
  );
}

