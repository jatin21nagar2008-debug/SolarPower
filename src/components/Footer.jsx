import React from 'react';
import { Sun, Phone, Mail, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '../data/solarData';

export default function Footer({ onOpenQuote }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello! I would like to enquire about solar panel installation.`);
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Top Lead CTA Strip */}
      <div className="bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-200 block mb-1">
                25-Year Performance Warranty • Subsidy Assistance
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Ready to reduce your electricity bill by up to 90%?
              </h3>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl font-bold text-sm text-emerald-800 bg-white hover:bg-emerald-50 shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Get Free Solar Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-black text-lg tracking-wider text-slate-900">
                  HELIOS<span className="text-emerald-600">PRIME</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block -mt-0.5 font-semibold">
                  Solar Installation Specialists
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Trusted residential, commercial, and industrial solar panel installation company delivering clean energy and guaranteed monthly bill savings.
            </p>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-emerald-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#portfolio" className="hover:text-emerald-600 transition-colors">
                  Recent Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900">
              Solar Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-emerald-600 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-semibold hover:text-emerald-600">{COMPANY_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold hover:text-emerald-600">{COMPANY_INFO.email}</a>
              </p>
              <p className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Certified & Insured Solar Installer</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 HELIOS PRIME ENERGY. All rights reserved.</p>
          <p>Clean Energy. Lower Bills. Reliable Power.</p>
        </div>
      </div>
    </footer>
  );
}
