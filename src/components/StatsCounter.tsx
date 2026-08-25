import { motion } from 'motion/react';
import { COMPANY_STATS } from '../data/testimonials';

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {COMPANY_STATS.map((stat, idx) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white transition-all duration-300 group shadow-xs hover:shadow-md"
        >
          <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight flex items-baseline gap-0.5">
            <span className="text-slate-900">{stat.prefix}</span>
            <span>{stat.value}</span>
            <span className="text-slate-900 text-3xl">{stat.suffix}</span>
          </div>

          <div className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-slate-900 transition-colors">
            {stat.label}
          </div>

          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            {stat.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
