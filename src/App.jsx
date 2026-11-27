import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import About from './components/About';
import Services from './components/Services';
import InteractiveSolarLab from './components/ThreeCanvas/InteractiveSolarLab';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import DetailModal from './components/DetailModal';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/solarData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [detailType, setDetailType] = useState('service');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (service) => {
    setSelectedDetail(service);
    setDetailType('service');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(`Hello! I would like a free solar quote and site survey for my property.`);
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 relative selection:bg-emerald-600 selection:text-white font-sans overflow-x-hidden pb-16 sm:pb-0">
      {/* Sticky Navigation Bar (Kept Intact) */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Flow Optimized for Solar Installation Leads */}
      <main>
        {/* 1. Hero Section (Kept Intact) */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 2. Instant Solar Savings Calculator (High-Converting Lead Magnet) */}
        <Calculator onOpenQuote={handleOpenQuote} />

        {/* 3. About & Trust Credentials (Clean Corporate Overview) */}
        <About onOpenQuote={handleOpenQuote} />

        {/* 4. Solar Installation Services (Home, Commercial, Industrial, O&M) */}
        <Services
          onSelectService={handleSelectService}
          onOpenQuote={handleOpenQuote}
        />

        {/* 5. HD Solar Showcase Video */}
        <InteractiveSolarLab onOpenQuote={handleOpenQuote} />

        {/* 6. Simple 4-Step Installation Process */}
        <HowItWorks onOpenQuote={handleOpenQuote} />

        {/* 7. Recent Solar Installations Proof */}
        <Portfolio onOpenQuote={handleOpenQuote} />

        {/* 8. Customer Reviews & Practical FAQs */}
        <Testimonials />
        <FAQ onOpenQuote={handleOpenQuote} />

        {/* 9. Free Site Survey & Lead Capture Form */}
        <Contact />
      </main>

      {/* Clean Light Professional Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Interactive Free Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Service Detail Modal */}
      <DetailModal
        item={selectedDetail}
        type={detailType}
        onClose={() => setSelectedDetail(null)}
        onOpenQuote={handleOpenQuote}
      />

      {/* Floating Quick Lead Buttons (Desktop / Tablet) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 shadow-lg transition-all duration-300 hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={handleWhatsAppClick}
          className="group relative flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp for Free Quote"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="font-bold tracking-wide">WhatsApp Free Quote</span>
        </button>
      </div>

      {/* Sticky Mobile Bottom Lead Bar (Mobile Only) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 flex items-center gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span>Call</span>
        </a>
        <button
          onClick={handleWhatsAppClick}
          className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </button>
        <button
          onClick={handleOpenQuote}
          className="flex-[1.3] py-2.5 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center"
        >
          Free Quote
        </button>
      </div>
    </div>
  );
}
