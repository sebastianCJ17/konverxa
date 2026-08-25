import { ModelPhase, OneXPillar } from '../types';

export const ONEX_PILLARS: OneXPillar[] = [
  {
    id: 'estrategia',
    title: 'Estrategia & Alineación',
    subtitle: 'Dirección Clara',
    description: 'Alineamos los objetivos operativos con la estrategia de negocio general del cliente, estableciendo OKRs, KPIs y acuerdos de nivel de servicio (SLAs) rigurosos.',
    keyPoints: [
      'Gobernanza ejecutiva y comités periódicos',
      'Matriz de riesgos y planes de continuidad (BCP)',
      'Modelo de costos transparente y flexible'
    ],
    icon: 'Target'
  },
  {
    id: 'talento',
    title: 'Talento & Cultura OneX',
    subtitle: 'El Factor Humano',
    description: 'Reclutamos, capacitamos y desarrollamos el mejor talento operativo con programas de bienestar, coaching continuo y planes de carrera de alto impacto.',
    keyPoints: [
      'Perfiles especializados por industria',
      'Formación continua en la Universidad Konverxa',
      'Baja rotación de personal (Atraer & Retener)'
    ],
    icon: 'Users'
  },
  {
    id: 'tecnologia',
    title: 'Tecnología & Automatización',
    subtitle: 'Infraestructura Robusta',
    description: 'Desplegamos ecosistemas digitales seguros en la nube, integración con omnicanalidad unificada e inteligencia artificial integrada.',
    keyPoints: [
      'Plataformas Omni-channel avanzadas',
      'Bots conversacionales e IA Generativa',
      'Arquitectura elástica y ciberseguridad ISO 27001'
    ],
    icon: 'Cpu'
  },
  {
    id: 'analitica',
    title: 'Analítica & BI Operativo',
    subtitle: 'Decisiones Basadas en Datos',
    description: 'Monitoreamos cada interacción mediante Speech/Text Analytics para identificar oportunidades de mejora, patrones de comportamiento y eficiencia.',
    keyPoints: [
      'Dashboards ejecutivos en tiempo real',
      'Modelos predictivos de volumen y demanda',
      'Auditoría automática de calidad al 100%'
    ],
    icon: 'BarChart3'
  },
  {
    id: 'gobernanza',
    title: 'Gobernanza & Calidad',
    subtitle: 'Garantía de Control',
    description: 'Metodología estructurada de auditoría operativa con acompañamiento constante para asegurar el cumplimiento regulatorio y normativo.',
    keyPoints: [
      'Niveles de servicio superiores al 98%',
      'Planes de acción inmediatos ante desviaciones',
      'Reportes de impacto diario, semanal y mensual'
    ],
    icon: 'ShieldCheck'
  }
];

export const INTEGRALX_PHASES: ModelPhase[] = [
  {
    number: '01',
    name: 'Diagnóstico & Inmersión (DiagnósticoX)',
    subtitle: 'Fase de Análisis Profundo',
    description: 'Analizamos la situación actual (As-Is) de los procesos, tecnología, volumetrías y experiencia del usuario para identificar cuellos de botella y brechas de eficiencia.',
    deliverables: [
      'Mapa de procesos operativo detallado',
      'Business Case de eficiencias proyectadas',
      'Matriz de riesgos y mitigación',
      'Plan maestro de transición (SLA/KPI target)'
    ]
  },
  {
    number: '02',
    name: 'Diseño & Reingeniería (DiseñoX)',
    subtitle: 'Fase de Arquitectura de Servicio',
    description: 'Rediseñamos la operación (To-Be) integrando mejores prácticas de la industria, flujos omnicanal, guiones de interacción, automatizaciones y modelos de capacitación.',
    deliverables: [
      'Modelos de atención y escalamiento',
      'Configuración de tecnología e integraciones API',
      'Contenidos y simuladores de formación',
      'Gobernanza y estructura organizativa'
    ]
  },
  {
    number: '03',
    name: 'Implementación & Transition (ImplementaciónX)',
    subtitle: 'Puesta en Marcha Controlada',
    description: 'Ejecutamos la migración operativa en entornos paralelos controlados (Pilot Testing), garantizando continuidad total del servicio sin impacto en los clientes.',
    deliverables: [
      'Selección y contratación de talento alineado',
      'Pruebas end-to-end de sistemas y telecomunicaciones',
      'Período de marcha blanca (Go-Live gradual)',
      'Acompañamiento directivo presencial/remoto'
    ]
  },
  {
    number: '04',
    name: 'Optimización Continua (EvoluciónX)',
    subtitle: 'Fase de Sostenibilidad e Innovación',
    description: 'Una vez estabilizada la operación, aplicamos metodologías Kaizen, analítica avanzada de Speech & Text, e IA para elevar constantemente la productividad y experiencia.',
    deliverables: [
      'Auditoría continua de calidad mediante IA',
      'Comités mensuales de innovación y eficiencias',
      'Planes de carrera y fidelización de talento',
      'Evolución tecnológica constante'
    ]
  }
];
