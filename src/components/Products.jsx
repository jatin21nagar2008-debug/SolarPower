import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, Eye, Cpu, Battery, Lightbulb, Compass, Waves } from 'lucide-react';
import { PRODUCTS } from '../data/solarData';

export default function Products({ onSelectProduct, onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Solar Panels', 'Solar Inverters', 'Solar Batteries', 'Solar Water Pumps', 'Solar Street Lights', 'Solar Accessories'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const getProductIcon = (category) => {
    switch (category) {
      case 'Solar Panels': return Zap;
      case 'Solar Inverters': return Cpu;
      case 'Solar Batteries': return Battery;
      case 'Solar Water Pumps': return Waves;
      case 'Solar Street Lights': return Lightbulb;
      case 'Solar Accessories': return Compass;
      default: return Zap;
    }
  };

  return (
    <section id="products" className="py-28 bg-forest-900 relative overflow-hidden border-t border-forest-800/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-lime-brand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-brand/20 border border-emerald-brand/40 text-lime-brand text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lime-brand" />
            TIER-1 HARDWARE BENCHMARKS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-offwhite mb-4">
            PRECISION-ENGINEERED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-brand via-mint to-emerald-glow">
              PHOTOVOLTAIC COMPONENTS
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Engineered with industry-leading silicon purities, military-grade thermal dissipation, and 25-to-30 year guaranteed linear power outputs.
          </p>
        </div>

        {/* Minimalist Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-lime-brand text-forest-950 shadow-md shadow-lime-brand/25'
                  : 'bg-charcoal-900/80 text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Tech Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const Icon = getProductIcon(product.category);
            return (
              <div
                key={product.id}
                className="group bg-charcoal-900/90 rounded-3xl p-7 border border-white/10 hover:border-lime-brand/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-lime-brand/10 hover:-translate-y-1 relative"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-forest-800 border border-white/10 flex items-center justify-center text-lime-brand group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-forest-950 border border-white/10 text-slate-300">
                        {product.category}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-lime-brand text-forest-950">
                        {product.tag}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-offwhite mb-2 group-hover:text-lime-brand transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2">
                    {product.desc}
                  </p>

                  {/* Tech Specs Matrix */}
                  <div className="grid grid-cols-2 gap-2.5 p-4 rounded-2xl bg-forest-950/70 border border-white/5 text-[11px] mb-6">
                    <div>
                      <span className="text-slate-400 block">Rated Output:</span>
                      <span className="font-bold text-offwhite">{product.power}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Efficiency:</span>
                      <span className="font-bold text-lime-brand">{product.efficiency}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Cell Tech:</span>
                      <span className="font-bold text-slate-200">{product.cellType}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Warranty:</span>
                      <span className="font-bold text-mint">{product.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Price Range Guide</span>
                    <span className="text-xs font-bold text-slate-200">{product.priceRange}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="p-2.5 rounded-xl bg-forest-800/80 hover:bg-forest-800 text-slate-300 hover:text-white transition-colors"
                      title="Inspect Full Specifications"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={onOpenQuote}
                      className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-forest-950 bg-gradient-to-r from-lime-brand to-mint hover:shadow-md hover:shadow-lime-brand/30 transition-all flex items-center gap-1.5"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
