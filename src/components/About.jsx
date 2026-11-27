import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Users, Zap, Clock } from 'lucide-react';

export default function About({ onOpenQuote }) {
  const TRUST_STATS = [
    { label: 'Installations Completed', value: '1,250+', icon: Zap },
    { label: 'Happy Customers', value: '4,800+', icon: Users },
    { label: 'Performance Warranty', value: '25 Years', icon: ShieldCheck },
    { label: 'Fast Installation', value: '1–2 Days', icon: Clock }
  ];

  const HIGHLIGHTS = [
    'Complete Govt. Subsidy & Net-Metering Paperwork Handled',
    'Tier-1 High-Efficiency Solar Panels (25-Year Warranty)',
    'Zero Hidden Charges & Transparent Pricing',
    'Trained In-House Installation & Support Engineers'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Clean Real Solar Photo */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <img
                src="./images/solar-panels-sky.jpg"
                alt="High-efficiency rooftop solar panels"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Certified Solar Installer
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      25-Year Linear Power Output Warranty
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Customer-Focused Value Proposition */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              Why Homeowners & Businesses Choose Us
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Reliable Solar Installation Built for Maximum Savings
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Going solar shouldn't be confusing. We design, install, and maintain high-performance solar systems for homes, offices, and factories—handling every approval so you start saving from day one.
            </p>

            {/* Clear Bullet Points */}
            <div className="space-y-3 pt-1">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* 4 Clean Trust Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {TRUST_STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <Icon className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
                    <div className="text-lg font-extrabold text-slate-900">{stat.value}</div>
                    <div className="text-[11px] font-medium text-slate-500 leading-tight">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Book a Free Site Inspection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
