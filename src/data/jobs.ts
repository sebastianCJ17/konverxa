import { JobPosition } from '../types';

export const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'supervisor-cx',
    title: 'Supervisor de Operaciones CX / BPO',
    department: 'Operaciones',
    location: 'Bogotá / Ciudad de México / Remoto',
    modality: 'Híbrido',
    type: 'Tiempo Completo',
    description: 'Buscamos un líder apasionado por la excelencia operativa, encargado de coordinar, motivar y auditar equipos de servicio al cliente de alto rendimiento para cuentas corporativas.',
    requirements: [
      'Mínimo 3 años de experiencia liderando operaciones en Contact Center o BPO.',
      'Manejo de indicadores operativos (KPIs: FCR, CSAT, AHT, Adherencia, SLA).',
      'Dominio de herramientas de Workforce Management (WFM) y Speech Analytics.',
      'Liderazgo empático y capacidad de toma de decisiones bajo presión.'
    ],
    responsibilities: [
      'Asegurar el cumplimiento de las metas de servicio y satisfacción asignadas.',
      'Ejecutar sesiones de coaching, feedback y desarrollo de habilidades con los agentes.',
      'Analizar métricas en tiempo real para reasignar recursos según volumetría.',
      'Presentar informes periódicos de gestión ante la Gerencia Operativa.'
    ]
  },
  {
    id: 'agente-multicanal-vip',
    title: 'Especialista en Atención Multicanal VIP',
    department: 'Customer Care',
    location: 'Sede Central / Híbrido',
    modality: 'Híbrido',
    type: 'Tiempo Completo',
    description: 'Serás la voz y embajador de marca para clientes preferenciales de servicios financieros y telecomunicaciones, brindando respuestas rápidas, resolutivas y altamente personalizadas.',
    requirements: [
      'Experiencia previa mínima de 1 año en atención al cliente multicanal (Chat/Voz/Email).',
      'Excelente redacción, ortografía y fluidez verbal.',
      'Manejo intermedio/avanzado de herramientas CRM y sistemas de tickets.',
      'Empatía, paciencia y orientación total a la solución de requerimientos.'
    ],
    responsibilities: [
      'Atender solicitudes entrantes de clientes VIP a través de canales digitales.',
      'Gestionar de principio a fin los requerimientos hasta su resolución efectiva.',
      'Registrar detalladamente cada interacción en la plataforma de gestión.',
      'Participar en capacitaciones continuas de actualización de productos y procesos.'
    ]
  },
  {
    id: 'analista-bi-calidad',
    title: 'Analista Senior de Calidad y Business Intelligence',
    department: 'Calidad & Analytics',
    location: 'Remoto / Oficina Regional',
    modality: 'Remoto',
    type: 'Tiempo Completo',
    description: 'Buscamos un perfil analítico capaz de transformar millones de datos e interacciones registradas en valiosos insights estratégicos para la toma de decisiones operativas.',
    requirements: [
      'Formación en Ingeniería Industrial, Sistemas, Estadística o afines.',
      'Dominio de herramientas BI (Power BI, Tableau) y SQL.',
      'Experiencia en implementación de modelos de Speech & Text Analytics.',
      'Conocimiento de metodologías de mejora continua (Six Sigma, Lean, Kaizen).'
    ],
    responsibilities: [
      'Diseñar y mantener tableros de control y dashboards operativos en vivo.',
      'Identificar patrones de comportamiento y oportunidades de optimización.',
      'Realizar auditorías muestrales y automatizadas de calidad de servicio.',
      'Collaborar con las áreas operativas para implementar acciones correctivas.'
    ]
  },
  {
    id: 'ejecutivo-ventas-bpo',
    title: 'Ejecutivo Comercial Senior (BPO & CX Solutions)',
    department: 'Desarrollo de Negocio',
    location: 'Corporativo Central',
    modality: 'Híbrido',
    type: 'Tiempo Completo',
    description: 'Responsable del crecimiento del portafolio BPO mediante la identificación y cierre de oportunidades comerciales estratégicas con grandes corporaciones regionales.',
    requirements: [
      'Experiencia comprobable de +5 años en venta consultiva de servicios BPO/IT/CX.',
      'Red de contactos de nivel C-Level en sectores Telecom, Banca o Retail.',
      'Dominio de estructuración de licitaciones y propuestas de valor a medida.',
      'Enfoque en metas de facturación y relaciones institucionales de largo plazo.'
    ],
    responsibilities: [
      'Liderar el ciclo de venta de extremo a extremo desde prospección hasta firma.',
      'Presentar la propuesta metodológica OneX y modelos de eficiencias.',
      'Negociar términos contractuales y SLAs de servicio con equipos legales.',
      'Representar a KONVERXA en eventos y foros de la industria.'
    ]
  }
];

export const CAREER_BENEFITS = [
  {
    title: 'Crecimiento Profesional Acelerado',
    desc: 'Promovemos el 80% de nuestras vacantes de supervisión y gestión desde el talento interno a través de la Universidad Konverxa.',
    icon: 'TrendingUp'
  },
  {
    title: 'Ambiente Corporativo Inclusivo',
    desc: 'Cultura basada en el respeto, la diversidad, el liderazgo participativo y el reconocimiento continuo al desempeño.',
    icon: 'Users'
  },
  {
    title: 'Flexibilidad & Trabajo Híbrido',
    desc: 'Modelos de trabajo adaptados que promueven el equilibrio saludable entre la vida laboral y personal.',
    icon: 'Home'
  },
  {
    title: 'Bono por Desempeño & Bienestar',
    desc: 'Esquema de incentivos competitivos, seguros de salud complementarios y convenios de bienestar integral.',
    icon: 'Award'
  }
];
