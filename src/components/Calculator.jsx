import React, { useState } from 'react';
import { Calculator as CalcIcon, ArrowRight, ShieldCheck, BatteryCharging } from 'lucide-react';

export default function Calculator({ onOpenQuote }) {
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [propertyType, setPropertyType] = useState('residential'); // 'residential', 'commercial', 'industrial'
  const [includeBattery, setIncludeBattery] = useState(false);

  const annualBill = monthlyBill * 12;
  const avgCostPerKWh = 8; // ₹8 per unit average Indian electricity tariff
  const annualKWhNeeded = annualBill / avgCostPerKWh;

  const systemSizeKW = Math.max(2, Math.round((annualKWhNeeded / 1450) * 10) / 10);
  const offsetPercentage = includeBattery ? 0.95 : 0.88;
  const estimatedAnnualSavings = Math.round(annualBill * offsetPercentage);
  const lifetimeSavings = Math.round(estimatedAnnualSavings * 25 * 1.25);

  const maxSlider = propertyType === 'residential' ? 50000 : propertyType === 'commercial' ? 200000 : 500000;

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Light Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            Instant Solar Savings Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            See How Much You Can Save With Solar
          </h2>
          <p className="text-slate-600 text-base">
            Slide your current monthly electricity bill (in ₹) to see your recommended solar size and 25-year savings.
          </p>
        </div>

        {/* Clean White Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Simple Customer Controls */}
            <div className="lg:col-span-6 space-y-7">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                  1. Select Property Type
                </label>
                <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-xl">
                  {[
                    { id: 'residential', label: 'Home' },
                    { id: 'commercial', label: 'Office / Shop' },
                    { id: 'industrial', label: 'Factory' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setPropertyType(item.id);
                        if (item.id === 'residential' && monthlyBill > 50000) setMonthlyBill(5000);
                        if (item.id === 'commercial' && monthlyBill < 10000) setMonthlyBill(25000);
                        if (item.id === 'industrial' && monthlyBill < 50000) setMonthlyBill(100000);
                      }}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        propertyType === item.id
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Monthly Electricity Bill
                  </label>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                    ₹{monthlyBill.toLocaleString('en-IN')}<span className="text-xs font-medium text-slate-500">/mo</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max={maxSlider}
                  step={propertyType === 'residential' ? 500 : 2500}
                  value={Math.min(monthlyBill, maxSlider)}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                  <span>₹1,500/mo</span>
                  <span>₹{maxSlider.toLocaleString('en-IN')}/mo</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                    <BatteryCharging className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Add Battery Backup
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Power your home even during grid cuts
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIncludeBattery(!includeBattery)}
                  className={`w-12 h-7 rounded-full transition-colors relative p-1 cursor-pointer ${
                    includeBattery ? 'bg-emerald-600' : 'bg-slate-300'
                  }`}
                  aria-label="Toggle battery backup"
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      includeBattery ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Includes PM Surya Ghar Subsidy & Net-Metering assistance.</span>
              </div>
            </div>

            {/* Right: Clear Financial Results & Lead CTA */}
            <div className="lg:col-span-6 bg-emerald-50/70 rounded-2xl p-6 sm:p-8 border border-emerald-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Your Estimated Solar Savings
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-5">
                Recommended Plan
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="col-span-2 p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm">
                  <span className="text-xs text-slate-500 font-medium block mb-1">Estimated 25-Year Total Savings</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700">
                    ₹{lifetimeSavings.toLocaleString('en-IN')}
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold mt-1 block">
                    ~₹{estimatedAnnualSavings.toLocaleString('en-IN')} saved every year
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-500 block text-[11px] font-medium mb-1">Recommended System</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {systemSizeKW} kW
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-500 block text-[11px] font-medium mb-1">Bill Reduction</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-600">
                    Up to {Math.round(offsetPercentage * 100)}%
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Free Custom Quote & Site Survey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-[11px] text-slate-500 mt-3">
                100% Free consultation • No spam • Instant callback
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
