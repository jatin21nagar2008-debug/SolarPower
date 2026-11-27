import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star, ShieldCheck, Zap, ChevronRight, CheckCircle2, Play, Pause } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export default function Hero({ onOpenQuote }) {
  const [activeCallout, setActiveCallout] = useState(null);

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-navy-950 flex flex-col justify-between">
      {/* 1. Deep Celestial Starry Night Background with Subtle Video Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] scale-105"
        >
          <source src="./videos/solar-hero.mp4" type="video/mp4" />
        </video>
        {/* Dark night sky gradient overlay matching AuraSun aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-navy-950/90 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-hero opacity-70 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        
        {/* 2. Main Centered Headline: "Revolutionize Your Power" */}
        <div className="text-center pt-2 sm:pt-4 mb-2 sm:mb-4 px-2">
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-white tracking-tight inline-block relative">
            <span className="text-slate-100">Revolutionize Your </span>
            <span className="relative font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
              Power
              {/* Golden Solar Swirl Arc above "Power" from reference */}
              <svg 
                className="absolute -top-5 -right-5 sm:-top-8 sm:-right-12 w-8 sm:w-16 h-6 sm:h-8 text-solar-gold" 
                viewBox="0 0 100 50" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4"
              >
                <path d="M10,40 Q50,0 90,20 Q60,35 30,15" strokeLinecap="round" />
                <path d="M25,45 Q65,10 95,28" strokeLinecap="round" opacity="0.6" strokeWidth="2.5" />
              </svg>
            </span>
          </h1>
        </div>

        {/* 3. Central Smart Eco-Villa Composition with Glowing Energy Dome */}
        <div className="relative my-auto py-8 sm:py-12 flex items-center justify-center">
          
          {/* Main Visual Container */}
          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
            
            {/* The Glowing Golden Energy Dome Ring (Aura) */}
            <div className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] rounded-full border border-solar-gold/60 shadow-[0_0_100px_rgba(245,158,11,0.35)] pointer-events-none animate-pulse">
              <div className="w-full h-full rounded-full border border-solar-gold/30 scale-105" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-solar-gold/10 via-transparent to-solar-gold/5" />
            </div>

            {/* Central Modern House with Rooftop Solar Panels & Live Energy Animation */}
            <div className="relative z-10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-solar-gold/30 group">
              <motion.img
                src="./images/hero-solar-house.jpg"
                alt="Modern House with Rooftop Solar Power System"
                animate={{
                  scale: [1, 1.07, 1],
                  y: [0, -4, 0]
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover filter brightness-105 contrast-105"
              />

              {/* Animated Sunlight Shimmer Sweep across the Solar Roof */}
              <motion.div
                animate={{ x: ['-120%', '180%'] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: 'easeInOut'
                }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-solar-gold/25 to-transparent skew-x-[-25deg] pointer-events-none"
              />

              {/* Floating Golden Solar Energy Particles */}
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-[22%] left-[30%] w-2 h-2 rounded-full bg-solar-gold shadow-[0_0_12px_#f59e0b] animate-ping" />
                <span className="absolute top-[18%] left-[52%] w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_#fcd34d] animate-pulse" />
                <span className="absolute top-[28%] right-[28%] w-2 h-2 rounded-full bg-solar-gold shadow-[0_0_12px_#f59e0b] animate-ping" />
                <span className="absolute top-[35%] left-[42%] w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7] animate-pulse" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/20 pointer-events-none" />
            </div>

            {/* CALLOUT 1: Left - Nova Array Solar Panels */}
            <div className="hidden md:flex absolute -left-4 lg:-left-12 top-1/3 flex-col max-w-[210px] z-20">
              <div className="glass-card rounded-2xl p-3.5 border border-white/15 backdrop-blur-md shadow-xl text-left">
                <span className="font-bold text-xs text-white block mb-0.5">Nova Array:</span>
                <p className="text-[11px] text-slate-300 leading-tight mb-2">
                  Sleek, high-efficiency panel integration with smart tracking.
                </p>
                <a
                  href="#services"
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-solar-gold hover:text-white transition-colors"
                >
                  <span>VIEW DETAILS</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
              {/* Pointer line & dot */}
              <div className="flex items-center self-end translate-x-6 -translate-y-4">
                <div className="w-8 h-[1px] bg-solar-gold/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-solar-gold shadow-[0_0_8px_#f59e0b] animate-ping" />
              </div>
            </div>

            {/* CALLOUT 2: Center-Right Top - Smart Edge Battery */}
            <div className="hidden md:flex absolute right-12 lg:right-24 top-2 flex-col items-end max-w-[230px] z-20 text-right">
              <div className="glass-card rounded-2xl p-3.5 border border-white/15 backdrop-blur-md shadow-xl">
                <span className="font-bold text-[10px] uppercase tracking-wider text-solar-gold block">
                  SMART EDGE BATT:
                </span>
                <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                  15kWh capacity, modular, and cloud-monitored.
                </p>
                <span className="text-xs font-black text-white mt-1 block">15kWh</span>
              </div>
              {/* Pointer line & dot */}
              <div className="flex items-center -translate-x-12 translate-y-2">
                <div className="w-2.5 h-2.5 rounded-full bg-solar-gold shadow-[0_0_8px_#f59e0b] animate-pulse" />
                <div className="w-10 h-[1px] bg-solar-gold/60" />
              </div>
            </div>

            {/* CALLOUT 3: Right - Never Lose Power / Total Coverage */}
            <div className="hidden lg:flex absolute -right-6 lg:-right-10 bottom-1/4 flex-col max-w-[220px] z-20 text-left">
              <div className="glass-card rounded-2xl p-4 border border-white/15 backdrop-blur-md shadow-xl">
                <span className="font-bold text-xs text-white block mb-0.5">
                  Never Lose Power:
                </span>
                <p className="text-[11px] text-slate-300 leading-tight mb-2">
                  Automated backup for complete home resilience.
                </p>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-sm font-black font-display text-solar-gold">
                    Total Coverage
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Quick-Action CTA & Key Highlights (Visible on Mobile Only) */}
        <div className="flex md:hidden flex-col gap-3 pt-2 pb-2">
          <div className="grid grid-cols-2 gap-2.5 text-center">
            <div className="glass-card rounded-xl p-2.5 border border-white/15">
              <span className="text-[10px] font-bold uppercase tracking-wider text-solar-gold block">25-Yr Warranty</span>
              <span className="text-xs font-semibold text-white">Tier-1 Solar Panels</span>
            </div>
            <div className="glass-card rounded-xl p-2.5 border border-white/15">
              <span className="text-[10px] font-bold uppercase tracking-wider text-solar-gold block">Govt. Subsidy</span>
              <span className="text-xs font-semibold text-white">Up to 90% Bill Cut</span>
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-navy-950 bg-gradient-to-r from-solar-gold to-amber-300 shadow-lg flex items-center justify-center gap-2"
          >
            <span>Get Free Solar Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
