import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/solarData';

export default function Portfolio({ onOpenQuote }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header + Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              Our Recent Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Completed Solar Installations
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-emerald-700 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  {project.capacity}
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md">
                  {project.savings}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {project.desc}
                </p>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Want a similar setup? Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
