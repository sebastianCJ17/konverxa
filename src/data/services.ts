import { ServicePillar } from '../types';

export const SERVICES_DATA: ServicePillar[] = [
  {
    id: 'atencion-al-cliente',
    slug: 'atencion-al-cliente',
    title: 'Atención al cliente',
    tagline: 'Resolvemos consultas, gestionamos reclamos y damos seguimiento a cada caso.',
    description: 'Inbound multicanal con SLA garantizados, gestión integral de reclamos y evaluación continua mediante encuestas CSAT y NPS para asegurar la máxima satisfacción de tus usuarios.',
    iconName: 'Headphones',
    features: [
      'Inbound multicanal',
      'SLA garantizados',
      'Encuestas CSAT y NPS',
      'Gestión de reclamos'
    ],
    benefits: [
      'Atención oportuna y personalizada 24/7',
      'Aumento directo en retención y lealtad de marca',
      'Trazabilidad completa de cada caso',
      'Monitoreo en tiempo real de satisfacción'
    ],
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ventas-telemarketing',
    slug: 'ventas-telemarketing',
    title: 'Ventas y Telemarketing',
    tagline: 'Campañas outbound e inbound para captar, retener y aumentar ticket promedio.',
    description: 'Equipos comerciales especializados en prospección B2B y B2C, estrategias de Upsell & Cross-sell, reactivación de clientes inactivos y agendamiento efectivo de citas.',
    iconName: 'TrendingUp',
    features: [
      'Prospección B2B/B2C',
      'Upsell & Cross-sell',
      'Reactivación de clientes',
      'Agendamiento'
    ],
    benefits: [
      'Aumento comprobado en tasa de conversión comercial',
      'Incremento en el valor promedio de ticket por cliente',
      'Recuperación efectiva de cuentas inactivas',
      'Optimización del embudo de ventas'
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cobranzas',
    slug: 'cobranzas',
    title: 'Cobranzas',
    tagline: 'Estrategias de cobranza temprana, media y avanzada para recuperar cartera.',
    description: 'Gestión estructurada basada en segmentación detallada por deuda, discado predictivo, negociación profesional adaptada y reportería diaria operacional en tiempo real.',
    iconName: 'ShieldCheck',
    features: [
      'Segmentación por deuda',
      'Discado predictivo',
      'Negociación estructurada',
      'Reportería diaria'
    ],
    benefits: [
      'Reducción efectiva de índices de morosidad',
      'Aceleración de recuperación de flujo de caja',
      'Trato ético preservando la relación comercial',
      'Información transparente y métricas en vivo'
    ],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'soporte-tecnico',
    slug: 'soporte-tecnico',
    title: 'Soporte técnico',
    tagline: 'Mesa de ayuda de primer y segundo nivel para productos y plataformas digitales.',
    description: 'Resolución técnica eficiente con gestión de tickets y escalamiento, base de conocimiento estructurada, diagnóstico remoto avanzado e integración nativa con tu CRM.',
    iconName: 'Workflow',
    features: [
      'Tickets & escalamiento',
      'Base de conocimiento',
      'Diagnóstico remoto',
      'Integración con CRM'
    ],
    benefits: [
      'Alta resolución de incidencias en primer contacto (FCR)',
      'Minimización del tiempo de inactividad de plataformas',
      'Documentación técnica clara e impulsada por datos',
      'Sincronización total con la base de datos de clientes'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'backoffice-bpo',
    slug: 'backoffice-bpo',
    title: 'BackOffice / BPO',
    tagline: 'Externaliza procesos operativos con calidad medible y equipos dedicados.',
    description: 'Externalización estratégica de procesos administrativos, data entry de alta precisión, verificación de documentos y onboarding ágil de nuevos clientes con SLAs rigurosos.',
    iconName: 'FileText',
    features: [
      'Data entry',
      'Verificación documental',
      'Onboarding clientes',
      'Procesos administrativos'
    ],
    benefits: [
      'Reducción de costos operativos y de estructura',
      'Garantía de calidad con auditoría estandarizada',
      'Escalabilidad inmediata según volumen de operaciones',
      'Agilización del tiempo de incorporación de usuarios'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'omnicanalidad-bots',
    slug: 'omnicanalidad-bots',
    title: 'Omnicanalidad & Bots',
    tagline: 'WhatsApp, chatbots, IVR y voz orquestados en un solo flujo de cliente.',
    description: 'Ecosistema de atención unificado con bots conversacionales inteligentes, integración oficial de WhatsApp Business API, IVR dinámico y conectividad total sin fricción.',
    iconName: 'Bot',
    features: [
      'Bots conversacionales',
      'WhatsApp Business API',
      'IVR inteligente',
      'Integración omnicanal'
    ],
    benefits: [
      'Disponibilidad automatizada 24 horas al día, 365 días',
      'Derivación inteligente a agentes humanos',
      'Experiencia de cliente uniforme en todos los canales',
      'Optimización de costos por transacción atendida'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
  }
];
