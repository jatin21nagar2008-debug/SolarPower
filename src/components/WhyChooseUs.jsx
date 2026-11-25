import React from 'react';
import { ShieldCheck, Award, TrendingUp, Cpu, DollarSign, Leaf, Sparkles, Check } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/solarData';

export default function WhyChooseUs({ onOpenQuote }) {
  const getIcon = (name) => {
    switch (name) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Award': return Award;
      case 'TrendingUp': return TrendingUp;
      case 'Cpu': return Cpu;
      case 'DollarSign': return DollarSign;
      case 'Leaf': return Leaf;
      default: return ShieldCheck;
    }
  };

  return (
    <section className="py-28 bg-forest-900 relative overflow-hidden border-t border-forest-800/40">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-brand/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-brand/20 border border-emerald-brand/40 text-lime-brand text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lime-brand" />
            ENGINEERING EXCELLENCE & TRUST
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-offwhite mb-4">
            WHY VISIONARY CLIENTS CHOOSE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-brand via-mint to-emerald-glow">
              OUR SOLAR ENGINEERING
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We don't just bolt solar panels to roofs. We design synchronized, high-voltage clean power plants guaranteed to maximize kilowatt-hour generation every second.
          </p>
        </div>

        {/* 6 Pillars Grid with Deep Charcoal & Fresh Lime accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="group bg-charcoal-900/90 rounded-3xl p-8 border border-white/10 hover:border-lime-brand/50 transition-all duration-300 relative flex flex-col justify-between hover:shadow-2xl hover:shadow-lime-brand/10 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-forest-800 border border-white/10 flex items-center justify-center text-lime-brand group-hover:scale-110 group-hover:border-lime-brand/50 transition-all duration-300 shadow-lg shadow-forest-950/40">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-forest-950 border border-white/10 text-lime-brand">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-offwhite mb-3 group-hover:text-lime-brand transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-mint">
                  <Check className="w-4 h-4 text-lime-brand" />
                  <span>Verified Performance Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
