export interface Industry {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  heroImage: string;
  keyChallenges: string[];
  solutions: string[];
  stats: { label: string; value: string }[];
}

export interface ServicePillar {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  benefits: string[];
  image: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  modality: 'Presencial' | 'Híbrido' | 'Remoto';
  type: 'Tiempo Completo' | 'Medio Tiempo';
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  industry: string;
  quote: string;
  metric: string;
  metricLabel: string;
  avatar: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface ModelPhase {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface OneXPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  icon: string;
}
