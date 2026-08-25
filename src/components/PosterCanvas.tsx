import React from 'react';
import { motion } from 'motion/react';
import { AGENCY_INFO, SERVICES_DATA } from '../data/servicesData';
import { ServiceItem, ServiceCategory } from '../types';
import { ServiceIcon } from './ServiceIcon';
import { MessageCircle, Check, Plus, ArrowUpRight, Sparkles, Monitor, Palette, Code2, CheckCircle2 } from 'lucide-react';

interface PosterCanvasProps {
  onSelectService: (service: ServiceItem) => void;
  selectedServiceIds?: string[];
  onToggleQuoteItem?: (serviceId: string) => void;
  searchQuery?: string;
  activeCategory?: ServiceCategory;
}

export const PosterCanvas: React.FC<PosterCanvasProps> = ({
  onSelectService,
  selectedServiceIds = [],
  onToggleQuoteItem,
  searchQuery = '',
  activeCategory = 'all',
}) => {
  const filteredServices = SERVICES_DATA.filter((s) => {
    const matchesSearch =
      searchQuery === '' ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.included.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'all' || s.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const mainWhatsAppLink = `https://wa.me/27787923951?text=${encodeURIComponent(
    'Hello Creative Agency! I would like to enquire about your graphics, website, and software design services.'
  )}`;

  return (
    <div className="relative w-full max-w-5xl mx-auto my-4 transition-all duration-300">
      {/* Outer Poster Printable Frame */}
      <div
        id="poster-printable-area"
        className="relative bg-white text-slate-900 rounded-3xl border border-slate-200/80 shadow-[0_25px_80px_rgba(0,18,51,0.25)] overflow-hidden font-['Inter',sans-serif]"
      >
        {/* ========================================================================= */}
        {/* HERO BANNER: BALANCED, BLENDED WORKSPACE STUDIO THEME */}
        {/* ========================================================================= */}
        <div className="relative bg-gradient-to-b from-[#0b1329] via-[#0f172a] to-[#1e293b] text-white border-b border-slate-800 overflow-hidden px-6 sm:px-10 md:px-14 pt-8 pb-12 sm:pb-16 select-none">
          {/* Ambient Lighting & Soft Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* DESK ELEMENT 1: Sleek Dark Laptop Workstation (Top Left) */}
          <div className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 w-56 sm:w-72 md:w-80 h-44 sm:h-56 md:h-64 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-2xl p-2.5 shadow-2xl rotate-6 border border-slate-700/60 pointer-events-none opacity-60 hidden sm:block">
            <div className="w-full h-full bg-[#090d16] rounded-xl p-2 flex flex-col justify-between border border-slate-800 shadow-inner">
              <div className="grid grid-cols-10 gap-1 opacity-40 p-1">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="h-2 rounded-[2px] bg-slate-800 border border-slate-700/40" />
                ))}
              </div>
              <div className="w-20 h-10 mx-auto rounded-lg bg-slate-900 border border-slate-800 shadow-inner" />
            </div>
          </div>

          {/* DESK ELEMENT 2: Designer Glasses (Top Left-Center) */}
          <div className="absolute top-4 left-44 sm:left-64 md:left-72 hidden md:flex items-center gap-1 rotate-12 pointer-events-none opacity-40">
            <div className="w-9 h-9 rounded-full border-2 border-slate-600 bg-slate-800/30 shadow-md backdrop-blur-[1px]" />
            <div className="w-3 h-[2px] bg-slate-600" />
            <div className="w-9 h-9 rounded-full border-2 border-slate-600 bg-slate-800/30 shadow-md backdrop-blur-[1px]" />
          </div>

          {/* DESK ELEMENT 3: Porcelain Coffee Cup with Saucer (Top Center) */}
          <div className="absolute top-3 right-1/3 sm:right-[42%] hidden sm:flex items-center justify-center pointer-events-none opacity-50">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-slate-800/80 shadow-xl border border-slate-700 flex items-center justify-center p-1.5 backdrop-blur-sm">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#1a0f08] via-[#2d150b] to-[#120804] shadow-inner flex items-center justify-center border border-amber-950/40">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-600/30 blur-[1px]" />
              </div>
            </div>
          </div>

          {/* DESK ELEMENT 4: Minimalist Notebook & Stylus (Top Right) */}
          <div className="absolute -top-6 right-2 sm:right-6 md:right-10 w-28 sm:w-36 md:w-44 h-36 sm:h-44 md:h-52 bg-slate-800/80 rounded-xl shadow-xl border border-slate-700/80 -rotate-6 p-3 hidden sm:flex flex-col justify-between pointer-events-none opacity-50 backdrop-blur-sm">
            <div className="flex gap-1.5 pb-2 border-b border-slate-700">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-700 border border-slate-600" />
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-3/4 bg-slate-700/60 rounded" />
              <div className="h-1.5 w-full bg-slate-700/60 rounded" />
              <div className="h-1.5 w-5/6 bg-slate-700/60 rounded" />
            </div>
            <div className="w-full h-1 bg-slate-700/40 rounded" />
          </div>

          {/* Top Metadata Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-8 sm:mb-12 relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="font-['Inter',sans-serif] tracking-[0.2em] font-extrabold text-white text-sm sm:text-base uppercase">
                CREATIVE AGENCY
              </span>
              <span className="h-3 w-[1px] bg-slate-700" />
              <span className="text-[10px] font-['JetBrains_Mono',monospace] tracking-wider text-slate-400 uppercase">
                CAPE TOWN • EST. {AGENCY_INFO.establishedYear}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-sky-300 text-[10px] font-['JetBrains_Mono',monospace] font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,127,255,0.15)]">
                OFFICIAL 2026 PORTFOLIO & PRICING
              </span>
            </div>
          </div>

          {/* MAIN HERO CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Phone Mockup + Value Proposition */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Smartphone Mockup: Agency Digital App Showcase */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-48 sm:w-56 flex-shrink-0 bg-slate-900 rounded-[36px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-slate-800 -rotate-3 hover:rotate-0 transition-transform duration-300"
              >
                {/* Phone Notch / Speaker */}
                <div className="w-16 h-3.5 bg-slate-800 mx-auto rounded-b-xl mb-1.5" />
                
                {/* Phone Screen: Agency Client UI Platform Showcase */}
                <div className="bg-[#0b1329] rounded-[26px] overflow-hidden text-white text-[10px] leading-tight p-2.5 space-y-2 border border-slate-800 shadow-inner">
                  <div className="flex items-center justify-between text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                    <span>CREATIVE AGENCY</span>
                    <span className="text-sky-400">● LIVE</span>
                  </div>
                  
                  {/* Digital Platform Hero Box */}
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white space-y-1 shadow-md">
                    <span className="text-[7px] uppercase tracking-widest text-blue-200 block font-bold">
                      DIGITAL STUDIO
                    </span>
                    <h5 className="font-extrabold text-xs leading-none">MODERN SOLUTIONS</h5>
                    <p className="text-[7.5px] text-blue-100">Bespoke graphics, fast websites & software architecture.</p>
                  </div>
                  
                  {/* Capabilities List */}
                  <div className="space-y-1 pt-0.5">
                    <span className="text-[8px] font-bold text-slate-300 block">Core Capabilities</span>
                    <div className="flex gap-1.5">
                      <div className="w-1/2 p-1.5 rounded-lg bg-slate-800/90 border border-slate-700">
                        <span className="font-bold text-[8px] text-white block">Custom Web</span>
                        <span className="text-[7px] text-emerald-400 font-semibold">⚡ Fast & SEO</span>
                      </div>
                      <div className="w-1/2 p-1.5 rounded-lg bg-slate-800/90 border border-slate-700">
                        <span className="font-bold text-[8px] text-white block">UI Software</span>
                        <span className="text-[7px] text-sky-400 font-semibold">✦ High UX</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-center font-bold text-[8px] transition-colors">
                    Explore Services →
                  </div>
                </div>
              </motion.div>

              {/* Pitch Copy Block */}
              <div className="space-y-3 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-500/30 text-sky-300 text-[10px] font-['JetBrains_Mono',monospace] font-bold tracking-wider uppercase">
                  <Sparkles className="w-3 h-3 text-sky-400" />
                  DESIGN EXCELLENCE
                </div>
                <p className="text-xs sm:text-[13px] font-['Inter',sans-serif] text-slate-300 font-normal leading-relaxed">
                  With our expertise in graphics, website, and software design, we can help enhance your brand image, attract more attention, and ensure an enjoyable user experience. Count on us to bring your design ideas to life!
                </p>
              </div>
            </div>

            {/* Right Column: Hero Display Typography + Direct WhatsApp Contact */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Display Headline in Inter font */}
              <h1 className="font-['Inter',sans-serif] text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white mb-4">
                <span>Graphics, website</span>
                <span className="block text-[#007FFF] sm:mt-1">& Software Designs</span>
              </h1>

              <p className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold mb-6">
                LOOKING TO IMPROVE YOUR VISUAL PRESENCE?
              </p>

              {/* WhatsApp Contact Badge (0787923951) */}
              <a
                href={mainWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-['JetBrains_Mono',monospace] font-extrabold text-base sm:text-lg tracking-wider transition-all duration-200 shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-105 group"
              >
                <div className="p-1 rounded-full bg-white text-[#25D366]">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span>0787923951</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION: 3 CORE SERVICE PILLARS */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 md:p-14 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-['JetBrains_Mono',monospace] font-bold tracking-[0.3em] uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-2">
              CORE SPECIALIZATIONS
            </span>
            <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl font-extrabold text-slate-900">
              Graphics, Website, and Software Designs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Engineered to elevate your company from initial branding to full-scale digital platforms.
            </p>
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Graphics Design */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="font-['Inter',sans-serif] font-bold text-lg text-slate-900 mb-2">
                  GRAPHICS DESIGN
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 font-['Inter',sans-serif]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span><strong>Logo Design:</strong> Scalable vector brand marks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span><strong>Brochures & Posters:</strong> Print and digital collateral</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span><strong>Animation:</strong> 2D motion graphics & logo reveals</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-['JetBrains_Mono',monospace]">From R450</span>
                <span className="text-blue-600 font-semibold">3 Services →</span>
              </div>
            </div>

            {/* Pillar 2: Website Design */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="font-['Inter',sans-serif] font-bold text-lg text-slate-900 mb-2">
                  WEBSITE DESIGN
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 font-['Inter',sans-serif]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    <span><strong>Custom Website Creation:</strong> Responsive lead machines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    <span><strong>User-Friendly Layouts:</strong> Intuitive conversion UX</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    <span><strong>Visual Element Design:</strong> Fonts, colors & images</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-['JetBrains_Mono',monospace]">From R650</span>
                <span className="text-indigo-600 font-semibold">3 Services →</span>
              </div>
            </div>

            {/* Pillar 3: Software Design */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-sky-500 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="font-['Inter',sans-serif] font-bold text-lg text-slate-900 mb-2">
                  SOFTWARE DESIGN
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 font-['Inter',sans-serif]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span><strong>Intuitive UI:</strong> Modern interface systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span><strong>Functional Structures:</strong> High-productivity workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span><strong>Programming & Dev:</strong> Web apps, DBs & APIs</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-['JetBrains_Mono',monospace]">From R1 400</span>
                <span className="text-sky-600 font-semibold">4 Services →</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION: DETAILED SERVICE CARDS & PRICE LIST */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 md:p-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#002366] text-white font-['JetBrains_Mono',monospace] font-bold text-xs">
                  2026 CATALOG
                </span>
                <h2 className="font-['Inter',sans-serif] text-xl sm:text-2xl font-bold text-slate-900">
                  All Services & Price Guide
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Click any service card to view scope or tap (+) to calculate an instant package estimate.
              </p>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {filteredServices.map((service) => {
              const isSelected = selectedServiceIds.includes(service.id);
              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className={`group relative p-4.5 rounded-2xl bg-white border transition-all duration-200 cursor-pointer flex flex-col justify-between hover:shadow-xl hover:border-blue-500 ${
                    isSelected
                      ? 'border-blue-600 ring-2 ring-blue-500/20 bg-blue-50/40'
                      : 'border-slate-200'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Specs */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-slate-100 text-blue-700 border border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ServiceIcon name={service.iconName} className="w-4 h-4" />
                      </div>
                      {service.turnaround && (
                        <span className="text-[10px] font-['JetBrains_Mono',monospace] text-slate-500 font-medium">
                          {service.turnaround}
                        </span>
                      )}
                    </div>

                    {/* Service Name */}
                    <h3 className="font-['Inter',sans-serif] font-bold text-sm sm:text-[15px] text-slate-900 group-hover:text-blue-700 transition-colors mb-1.5">
                      {service.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 leading-snug font-['Inter',sans-serif]">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Card Bottom: Starting Price & Quick Add */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-['JetBrains_Mono',monospace] block">
                        STARTING
                      </span>
                      <span className="font-['JetBrains_Mono',monospace] text-sm text-slate-900 font-bold group-hover:text-blue-700 transition-colors">
                        {service.priceFormatted}
                      </span>
                    </div>

                    {onToggleQuoteItem && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleQuoteItem(service.id);
                        }}
                        className={`p-1.5 rounded-lg transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white font-bold shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white border border-slate-200'
                        }`}
                        title={isSelected ? 'Remove from estimate' : 'Add to estimate'}
                      >
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Price Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white mb-10 shadow-sm">
            <table className="w-full text-left border-collapse text-xs font-['Inter',sans-serif]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-['JetBrains_Mono',monospace] tracking-wider text-slate-600 uppercase">
                  <th className="py-3.5 px-4 font-bold">SERVICE</th>
                  <th className="py-3.5 px-4 font-bold hidden sm:table-cell">WHAT'S INCLUDED</th>
                  <th className="py-3.5 px-4 font-bold text-right">STARTING AT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredServices.map((service) => {
                  const isSelected = selectedServiceIds.includes(service.id);
                  return (
                    <tr
                      key={service.id}
                      id={`price-row-${service.id}`}
                      onClick={() => onSelectService(service)}
                      className={`group hover:bg-slate-50 transition-colors cursor-pointer ${
                        isSelected ? 'bg-blue-50/50' : ''
                      }`}
                    >
                      <td className="py-4 px-4 align-middle">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-slate-100 text-blue-700 border border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                            <ServiceIcon name={service.iconName} className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors text-sm">
                              {service.name}
                            </div>
                            <div className="text-[11px] text-slate-500 font-['JetBrains_Mono',monospace]">
                              {service.specs}
                            </div>
                            <div className="sm:hidden text-[11px] text-slate-600 mt-1">
                              {service.included}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4 hidden sm:table-cell align-middle text-slate-600">
                        {service.included}
                      </td>

                      <td className="py-4 px-4 text-right align-middle font-['JetBrains_Mono',monospace]">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                          FROM
                        </span>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {service.priceFormatted}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* High Impact WhatsApp CTA Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#002366] to-[#001742] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-blue-300 font-bold block mb-1">
                START YOUR PROJECT TODAY
              </span>
              <h3 className="font-['Inter',sans-serif] text-lg sm:text-2xl font-bold leading-snug">
                Need high-quality <span className="text-blue-300">graphics</span>, a fast <span className="text-blue-300">website</span>, or custom <span className="text-blue-300">software</span>?
              </h3>
              <p className="text-xs text-blue-100 mt-1">
                Direct WhatsApp contact, transparent pricing, and nationwide turnaround.
              </p>
            </div>

            <a
              href={mainWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-['JetBrains_Mono',monospace] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(37,211,102,0.5)] flex items-center justify-center gap-3 flex-shrink-0 group"
            >
              <div className="p-1 rounded-full bg-white text-[#25D366]">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-widest text-emerald-100 font-extrabold leading-tight">
                  WHATSAPP DIRECT
                </span>
                <span className="text-sm font-extrabold text-white">
                  0787923951
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Structured Footer */}
          <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-slate-200 pt-8 mt-10 text-slate-600">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-slate-900 font-bold block">
                Primary Disciplines
              </span>
              <ul className="text-xs space-y-1">
                <li>• Graphics & Brand Identity</li>
                <li>• Custom Websites & SEO</li>
                <li>• Software UI/UX & Coding</li>
                <li>• Diagnostics & Device Fixes</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-slate-900 font-bold block">
                Studio Location
              </span>
              <p className="text-xs leading-relaxed">
                {AGENCY_INFO.address}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-slate-900 font-bold block">
                Direct Contact
              </span>
              <p className="text-xs font-['JetBrains_Mono',monospace]">
                WhatsApp: <strong>0787923951</strong>
              </p>
              <p className="text-xs">
                Cape Town, South Africa
              </p>
            </div>

            <div className="flex flex-col sm:items-end justify-end">
              <a
                href={mainWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#002366] text-white p-4 rounded-full w-24 h-24 flex items-center justify-center text-center leading-tight text-[10px] uppercase tracking-wider font-bold cursor-pointer hover:bg-blue-700 shadow-md transition-all hover:scale-105"
              >
                Order On WhatsApp
              </a>
            </div>
          </footer>

          {/* Baseline Copyright */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-['JetBrains_Mono',monospace] text-slate-400 uppercase tracking-wider">
            <div>
              <span className="text-slate-700 font-bold">CREATIVE AGENCY</span>
              <span className="mx-2">/</span>
              <span>GRAPHICS • WEBSITES • SOFTWARE</span>
            </div>
            <div>
              <span>WhatsApp: 0787923951</span>
              <span className="mx-1.5">•</span>
              <span>Cape Town, South Africa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
