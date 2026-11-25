import React from 'react';
import { X, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export default function DetailModal({ item, type, onClose, onOpenQuote }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      />

      <div className="relative z-10 w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
        {item.image && (
          <div className="relative h-60 w-full overflow-hidden bg-slate-100">
            <img
              src={item.image}
              alt={item.title || item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-slate-700 hover:text-slate-900 shadow-md cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300 block mb-1">
                {type === 'service' ? 'Solar Solution' : 'Details'}
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                {item.title || item.name}
              </h3>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8">
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {item.fullDesc || item.desc}
          </p>

          <div className="mb-6">
            <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-700 mb-3">
              Key Benefits & Included Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(item.specs || item.features || []).map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Solar Specialist</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
