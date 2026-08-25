import { Testimonial, StatItem } from '../types';

export const COMPANY_STATS: StatItem[] = [
  {
    id: '1',
    value: 98,
    suffix: '%',
    label: 'CUMPLIMIENTO DE SLA',
    description: 'Rigor y puntualidad garantizada en todos los acuerdos de servicio.'
  },
  {
    id: '2',
    value: 15,
    suffix: 'M+',
    label: 'INTERACCIONES ANUALES',
    description: 'Atendidas con excelencia a través de canales omnicanal e IA.'
  },
  {
    id: '3',
    value: 35,
    suffix: '%',
    label: 'AHORRO OPERATIVO PROMEDIO',
    description: 'Logrado por nuestros clientes tras implementar nuestro modelo OneX.'
  },
  {
    id: '4',
    value: 92,
    suffix: ' pts',
    label: 'CSAT GLOBAL',
    description: 'Índice de satisfacción medido en interacciones directas con usuarios.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Roberto Mendoza',
    clientRole: 'Director de Operaciones y CX',
    company: 'Telco Global South',
    industry: 'Telecomunicaciones',
    quote: 'KONVERXA no opera como un proveedor de call center convencional; es un aliado estratégico real. Reestructuraron nuestra mesa de ayuda en 45 días y logramos reducir la tasa de churn de suscriptores en un 28%.',
    metric: '-28%',
    metricLabel: 'Reducción de Churn',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '2',
    clientName: 'Sofía Valenzuela',
    clientRole: 'VP de Experiencia Digital',
    company: 'Fintech Neobank',
    industry: 'Banca y Servicios Financieros',
    quote: 'La integración tecnológica de KONVERXA y su rigurosidad en seguridad ISO 27001 nos dieron absoluta tranquilidad. Su equipo de onboarding redujo nuestro tiempo de activación de clientes a menos de 3 minutos.',
    metric: '+34%',
    metricLabel: 'Mayor Retención de Cartera',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '3',
    clientName: 'Carlos Eduardo Ramírez',
    clientRole: 'Gerente General de Servicio',
    company: 'Logística Express Multimodal',
    industry: 'Movilidad y Logística',
    quote: 'En momentos de pico o contingencia, la capacidad de respuesta de KONVERXA es sobresaliente. Su modelo OneX nos da una flexibilidad absoluta sin perder la calidad y empatía con nuestros conductores.',
    metric: '98.5%',
    metricLabel: 'SLA de Atención',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  }
];
