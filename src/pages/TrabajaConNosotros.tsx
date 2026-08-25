import { useState } from 'react';
import { motion } from 'motion/react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import PageBanner from '../components/PageBanner';
import CareerFormModal from '../components/CareerFormModal';
import { JOB_POSITIONS, CAREER_BENEFITS } from '../data/jobs';
import { JobPosition } from '../types';
import {
  Users, TrendingUp, Home, Award, Briefcase, MapPin, Clock,
  CheckCircle2, ArrowRight, Search
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  TrendingUp, Users, Home, Award
};

export default function TrabajaConNosotros() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [departmentFilter, setDepartmentFilter] = useState('Todos');
  const [modalityFilter, setModalityFilter] = useState('Todas');

  const filteredJobs = JOB_POSITIONS.filter((job) => {
    const matchDept = departmentFilter === 'Todos' || job.department === departmentFilter;
    const matchMod = modalityFilter === 'Todas' || job.modality === modalityFilter;
    return matchDept && matchMod;
  });

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead
        title="Trabaja con Nosotros - Carreras en KONVERXA"
        description="Explora las oportunidades laborales en KONVERXA. Crece profesionalmente en una empresa líder en BPO, Contact Center y Customer Experience."
      />

      {/* Header Banner with Breadcrumbs & Outlined Watermark */}
      <PageBanner
        title="ÚNETE"
        watermark="ÚNETE"
        titleAccentColor="text-slate-900"
        badge="Talento Humano KONVERXA"
        headline="Construye tu Futuro Profesional con Nosotros"
        description="Somos una compañía de talento multidisciplinario y multicultural. Impulsamos el desarrollo continuo, ambientes de trabajo inclusivos y programas que aceleran tu crecimiento."
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Trabaja con Nosotros' }
        ]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Equipo de talento humano KONVERXA"
      />

      {/* Culture & Benefits */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Visual Aid: Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <SectionTitle
            badge="Propuesta de Valor al Empleado"
            title="¿Por qué Trabajar en KONVERXA?"
            subtitle="Desarrollamos el potencial de cada colaborador mediante programas de formación continua y un entorno laboral inclusivo."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREER_BENEFITS.map((ben, idx) => {
              const IconComp = ICON_MAP[ben.icon] || Users;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:border-black/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black border border-slate-300 flex items-center justify-center">
                    <IconComp className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-black text-black">{ben.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ben.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Real Workplace Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Colaboradores KONVERXA"
              className="rounded-2xl object-cover h-64 w-full border border-slate-200 shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Supervisión de operaciones"
              className="rounded-2xl object-cover h-64 w-full border border-slate-200 shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
              alt="Capacitación continua"
              className="rounded-2xl object-cover h-64 w-full border border-slate-200 shadow-md"
            />
          </div>

        </div>
      </section>

      {/* Open Vacancies Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionTitle
            badge="Oportunidades Abiertas"
            title="Vacantes Disponibles"
            subtitle="Encuentra la posición que se ajuste a tus competencias e inscríbete en segundos."
          />

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 text-xs shadow-xs">
            <div className="flex items-center gap-2 text-slate-500">
              <Search className="w-4 h-4" />
              <span className="font-semibold text-slate-900">Filtrar Vacantes:</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-500">Área:</span>
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-900 focus:outline-none focus:border-black"
              >
                <option value="Todos">Todas las áreas</option>
                <option value="Operaciones">Operaciones</option>
                <option value="Customer Care">Customer Care</option>
                <option value="Calidad & Analytics">Calidad & Analytics</option>
                <option value="Desarrollo de Negocio">Desarrollo de Negocio</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-500">Modalidad:</span>
              <select
                value={modalityFilter}
                onChange={(e) => setModalityFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-900 focus:outline-none focus:border-black"
              >
                <option value="Todas">Todas las modalidades</option>
                <option value="Híbrido">Híbrido</option>
                <option value="Remoto">Remoto</option>
                <option value="Presencial">Presencial</option>
              </select>
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black/30 hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
                >
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300 font-semibold">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-700" /> {job.location}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-700" /> {job.modality}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-black">{job.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{job.description}</p>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-sm border border-zinc-700 shadow-md transition-all flex items-center gap-2 shrink-0"
                  >
                    <span>Postularme Ahora</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 p-8 rounded-2xl bg-slate-100 border border-slate-200 text-slate-600">
                No se encontraron vacantes con los filtros seleccionados.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <CareerFormModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

    </div>
  );
}
