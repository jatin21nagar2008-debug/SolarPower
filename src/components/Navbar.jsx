import React, { useState, useEffect } from 'react';
import { Sun, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Exact navigation links from the AuraSun design format
  const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Solar Panels', href: '#services' },
    { name: 'Energy Storage', href: '#solar-3d' },
    { name: 'Technology', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'solar-3d', 'products', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-xl border-b border-white/10 py-4 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 1. Left Side: Brand Logo (AuraSun style) */}
          <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-solar-gold to-electric-400 p-[1.5px] shadow-lg shadow-solar-gold/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-navy-950 rounded-[7px] flex items-center justify-center">
                <Sun className="w-4 h-4 text-solar-gold transition-transform duration-500 group-hover:rotate-45" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Aura<span className="text-solar-gold font-light">Sun</span>
              </span>
            </div>
          </a>

          {/* 2. Center: Clean Minimal Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-solar-gold font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* 3. Right Side: Gold "GET STARTED" button matching the exact layout */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenQuote}
              className="relative group overflow-hidden px-5 py-2 rounded-xl bg-gradient-to-r from-solar-gold via-solar-400 to-amber-300 hover:shadow-lg hover:shadow-solar-gold/25 transition-all duration-300 active:scale-95 flex items-center gap-3 text-navy-950"
            >
              <div className="text-left">
                <span className="text-xs font-black uppercase tracking-wider block leading-tight">
                  GET STARTED
                </span>
                <span className="text-[9px] text-navy-900 font-semibold block">
                  $12,000 - $29 price
                </span>
              </div>
              <div className="w-6 h-6 rounded-lg bg-navy-950/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-navy-900 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-solar-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl mt-4">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-solar-gold opacity-60" />
              </a>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-navy-950 bg-gradient-to-r from-solar-gold to-amber-300 shadow-lg"
            >
              Get Started ($12,000 - $29 price) ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
