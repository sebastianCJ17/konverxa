import { Industry } from '../types';

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'banca-fintech',
    slug: 'banca-fintech',
    name: 'Banca y Fintech',
    shortDesc: 'Onboarding, cobranzas, soporte y prevención de fraude.',
    fullDesc: 'Brindamos soporte de alta seguridad para entidades bancarias y empresas fintech, cubriendo onboarding digital de clientes, cobranzas especializadas, soporte en transacciones y protocolos estrictos para la prevención de fraude.',
    iconName: 'Landmark',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    keyChallenges: [
      'Validación e identificación segura en registro de usuarios.',
      'Prevención de mora y gestión de cobro oportuno.',
      'Soporte técnico inmediato en plataformas de banca móvil.',
      'Estrictos estándares normativos de seguridad ISO 27001 y PCI-DSS.'
    ],
    solutions: [
      'Onboarding digital guiado con verificación biométrica.',
      'Estrategias de cobranza temprana y negociación preventiva.',
      'Atención multicanal para consultas de saldo y movimientos.',
      'Monitoreo continuo de transacciones sospechosas.'
    ],
    stats: [
      { label: 'Recuperación de Cartera', value: '+34%' },
      { label: 'NPS Financiero', value: '82 pts' },
      { label: 'Cumplimiento Normativo', value: '100%' }
    ]
  },
  {
    id: 'retail-ecommerce',
    slug: 'retail-ecommerce',
    name: 'Retail y eCommerce',
    shortDesc: 'Pre-venta, post-venta, logística inversa y fidelización.',
    fullDesc: 'Acompañamos al comprador en toda su experiencia comercial. Gestionamos desde la orientación en pre-venta y resolución de dudas sobre productos hasta atención post-venta, logística inversa de cambios/devoluciones y programas de fidelización.',
    iconName: 'ShoppingBag',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a67e51a6627?auto=format&fit=crop&w=1200&q=80',
    keyChallenges: [
      'Elevados picos de demanda durante campañas y temporadas altas.',
      'Saturación en consultas de estado de pedidos y entregas.',
      'Fricción en procesos de devoluciones y cambios de producto.',
      'Pérdida de clientes por atención post-venta diferida.'
    ],
    solutions: [
      'Atención omnicanal inmediata vía WhatsApp, Chat e Inbound.',
      'Gestión ágil de logística inversa y reemplazos.',
      'Campañas proactivas de fidelización y recompra.',
      'Escalabilidad elástica para fechas especiales (Cyber, Black Friday).'
    ],
    stats: [
      { label: 'CSAT Post-Venta', value: '95%' },
      { label: 'Tiempo de Respuesta', value: '< 30s' },
      { label: 'Tasa de Fidelización', value: '+28%' }
    ]
  },
  {
    id: 'salud',
    slug: 'salud',
    name: 'Salud',
    shortDesc: 'Agendamiento, telemedicina y seguimiento a pacientes.',
    fullDesc: 'Humanizamos la comunicación entre pacientes y centros médicos, clínicas y plataformas de salud. Coordinamos el agendamiento y confirmación de citas, soporte a servicios de telemedicina y acompañamiento en planes de salud y tratamientos.',
    iconName: 'Activity',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    keyChallenges: [
      'Líneas telefónicas saturadas para solicitud de citas.',
      'Ausentismo de pacientes por falta de recordatorios oportunos.',
      'Soporte técnico para usuarios de plataformas de telemedicina.',
      'Dificultad en seguimiento a pacientes tras consultas.'
    ],
    solutions: [
      'Mesa centralizada para agendamiento y reprogramación de citas.',
      'Recordatorios automatizados y multicanal de consultas.',
      'Mesa de soporte al usuario para sesiones de telemedicina.',
      'Programas de llamadas de seguimiento e instrucciones post-atención.'
    ],
    stats: [
      { label: 'Reducción Ausentismo', value: '40%' },
      { label: 'Efectividad en Citas', value: '96%' },
      { label: 'CSAT Pacientes', value: '98%' }
    ]
  },
  {
    id: 'turismo-aerolineas',
    slug: 'turismo-aerolineas',
    name: 'Turismo y Aerolíneas',
    shortDesc: 'Reservas, cambios, atención 24/7 y gestión de crisis.',
    fullDesc: 'Asistencia constante e itinerarios sin complicaciones para viajeros a nivel global. Atendemos reservas, cambios de fechas o itinerarios, requerimientos especiales y respuesta inmediata durante contingencias u operativas de crisis.',
    iconName: 'Plane',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    keyChallenges: [
      'Consultas de viajeros en múltiples zonas horarias e idiomas.',
      'Reprogramaciones repentinas por vuelos cancelados o demoras.',
      'Atención en picos vacacionales y temporadas de viaje.',
      'Gestión de reclamaciones sobre equipaje e itinerarios.'
    ],
    solutions: [
      'Atención bilingüe y multilingüe 24/7/365.',
      'Plataforma omnicanal para reprogramación ágil de itinerarios.',
      'Mesa especializada en gestión de contingencias y avisos masivos.',
      'Atención prioritaria para clientes de programas de viajero frecuente.'
    ],
    stats: [
      { label: 'Disponibilidad Global', value: '24/7' },
      { label: 'Resolución de Cambios', value: '91%' },
      { label: 'SLA de Respuesta', value: '< 20s' }
    ]
  },
  {
    id: 'telecomunicaciones',
    slug: 'telecomunicaciones',
    name: 'Telecomunicaciones',
    shortDesc: 'Soporte técnico multinivel, retención y upgrades.',
    fullDesc: 'Optimizamos la atención al usuario final en operadoras de telecomunicaciones. Resolvemos incidencias técnicas en Nivel 1 y Nivel 2, ejecutamos planes de retención proactiva y gestionamos renovaciones e incremento de servicios.',
    iconName: 'Radio',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    keyChallenges: [
      'Volumen alto de llamadas por incidentes de red o configuración.',
      'Evolución constante de ofertas de competidores y riesgo de churn.',
      'Fricción en solicitudes de cambio de plan o portabilidad.',
      'Costos elevados en la atención de consultas frecuentes.'
    ],
    solutions: [
      'Mesa de ayuda técnica multinivel para voz, datos y fibra.',
      'Estrategias personalizadas de retención y portabilidad de clientes.',
      'Atención automatizada con Bots e IVR para soporte recurrente.',
      'Campañas de upgrade de planes y venta cruzada de servicios.'
    ],
    stats: [
      { label: 'Reducción de Churn', value: '30%' },
      { label: 'FCR en Soporte', value: '90%' },
      { label: 'Upgrades Exitosos', value: '+25%' }
    ]
  },
  {
    id: 'educacion',
    slug: 'educacion',
    name: 'Educación',
    shortDesc: 'Admisiones, atención a estudiantes y campañas de matrícula.',
    fullDesc: 'Acompañamos a instituciones educativas y universidades en todo el ciclo del estudiante. Impulsamos las campañas de atracción y admisiones, resolvemos dudas administrativas y brindamos orientación a la comunidad académica.',
    iconName: 'GraduationCap',
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    keyChallenges: [
      'Captación y conversión de prospectos durante ciclos de matrícula.',
      'Atención de múltiples consultas en periodos de inscripción.',
      'Retención de estudiantes durante periodos lectivos.',
      'Comunicación dispersa con la comunidad estudiantil.'
    ],
    solutions: [
      'Contact Center dedicado a prospección y admisión de estudiantes.',
      'Atención omnicanal para solicitudes de certificados y trámites.',
      'Campañas de confirmación de matrícula y recordatorios de pago.',
      'Soporte a plataformas virtuales de aprendizaje.'
    ],
    stats: [
      { label: 'Conversión de Matrícula', value: '+32%' },
      { label: 'Satisfacción Estudiantil', value: '94%' },
      { label: 'Respuesta Admisiones', value: '< 1min' }
    ]
  },
  {
    id: 'seguros',
    slug: 'seguros',
    name: 'Seguros',
    shortDesc: 'Asistencia, siniestros y renovaciones proactivas.',
    fullDesc: 'Brindamos tranquilidad y respuesta rápida a los asegurados en momentos decisivos. Gestionamos la recepción y reporte de siniestros, coordinación de asistencias inmediatas y campañas proactivas de renovación de pólizas.',
    iconName: 'ShieldCheck',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    keyChallenges: [
      'Llamadas de emergencia con alta carga de urgencia del usuario.',
      'Procesos complejos en registro y seguimiento de siniestros.',
      'Baja tasa de renovación espontánea de pólizas anuales.',
      'Gestión de asistencias en carretera, hogar o médicas.'
    ],
    solutions: [
      'Línea de atención de siniestros 24/7 con respuesta prioritaria.',
      'Despacho y coordinación inmediata de asistencias.',
      'Campañas de renovación oportuna y cobranza de primas.',
      'Seguimiento digital del estado del trámite para el asegurado.'
    ],
    stats: [
      { label: 'Tiempo Coordinación', value: '< 15min' },
      { label: 'Renovación Pólizas', value: '92%' },
      { label: 'CSAT Siniestros', value: '96%' }
    ]
  },
  {
    id: 'logistica',
    slug: 'logistica',
    name: 'Logística',
    shortDesc: 'Rastreos, gestión de entregas y atención a transportistas.',
    fullDesc: 'Aseguramos la eficiencia comunicacional en la cadena de suministro y envíos. Resolvemos dudas sobre rastreo de guías, gestionamos entregas con novedades y brindamos soporte en tiempo real a conductores y transportistas.',
    iconName: 'Truck',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    keyChallenges: [
      'Alto volumen de consultas repetitivas de rastreo de paquete.',
      'Novedades en entregas de última milla (dirección incorrecta, ausencia).',
      'Atención inmediata a choferes con eventualidades en ruta.',
      'Reclamaciones por averías o pérdidas de mercancía.'
    ],
    solutions: [
      'Consulta automatizada de rastreo vía WhatsApp y Bot + agente.',
      'Gestión en tiempo real para re-agendamiento de entregas.',
      'Canal exclusivo para atención a transportistas y repartidores.',
      'Central de atención para reclamaciones y resoluciones.'
    ],
    stats: [
      { label: 'Resolución de Novedades', value: '89%' },
      { label: 'Atención a Choferes', value: '< 15s' },
      { label: 'Efectividad Entregas', value: '+27%' }
    ]
  }
];
