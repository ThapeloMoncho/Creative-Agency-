import React from 'react';
import { BrandLogo } from './BrandLogo';
import {
  Printer,
  Calculator,
  LayoutGrid,
  Search,
  MessageCircle,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/servicesData';
import { ServiceCategory } from '../types';

interface TopBarProps {
  viewMode: 'poster' | 'estimator';
  onSetViewMode: (mode: 'poster' | 'estimator') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeCategory: ServiceCategory;
  onSelectCategory: (c: ServiceCategory) => void;
  selectedCount: number;
}

export const TopBar: React.FC<TopBarProps> = ({
  viewMode,
  onSetViewMode,
  searchQuery,
  onSearchChange,
  activeCategory,
  onSelectCategory,
  selectedCount,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'graphics', label: 'Graphics Design' },
    { id: 'website', label: 'Website Design' },
    { id: 'software', label: 'Software Design' },
    { id: 'branding', label: 'Print & Branding' },
    { id: 'repairs', label: 'Device Repairs' },
    { id: 'business', label: 'CIPC Business' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#002366]/95 backdrop-blur-md border-b border-[#007FFF]/30 px-4 py-3 sm:px-6 shadow-[0_4px_25px_rgba(0,35,102,0.8)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <BrandLogo size="sm" showText={true} />

          {/* Mobile direct WhatsApp button */}
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden p-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center gap-1.5 text-xs font-bold font-['JetBrains_Mono',monospace] shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>0787923951</span>
          </a>
        </div>

        {/* Search & Category Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#87CEEB]" />
            <input
              type="text"
              placeholder="Search graphics, websites, software, repairs..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-8.5 pr-3 py-1.5 rounded-xl bg-[#001c52] border border-[#007FFF]/40 text-xs text-white placeholder:text-[#87CEEB]/50 focus:outline-none focus:border-[#87CEEB] focus:ring-1 focus:ring-[#87CEEB]/50 transition-colors"
            />
          </div>
        </div>

        {/* View Mode Switcher & Actions */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          {/* Tabs: Poster View vs Estimate Builder */}
          <div className="flex items-center p-1 rounded-xl bg-[#001a4e] border border-[#007FFF]/30">
            <button
              type="button"
              onClick={() => onSetViewMode('poster')}
              className={`px-3 py-1.5 rounded-lg text-xs font-['JetBrains_Mono',monospace] flex items-center gap-1.5 transition-all ${
                viewMode === 'poster'
                  ? 'bg-[#007FFF] text-white shadow-[0_0_12px_#007FFF] font-semibold'
                  : 'text-[#87CEEB] hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Poster</span>
            </button>

            <button
              type="button"
              onClick={() => onSetViewMode('estimator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-['JetBrains_Mono',monospace] flex items-center gap-1.5 transition-all relative ${
                viewMode === 'estimator'
                  ? 'bg-[#007FFF] text-white shadow-[0_0_12px_#007FFF] font-semibold'
                  : 'text-[#87CEEB] hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Estimator</span>
              {selectedCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#87CEEB] text-[#002366] text-[10px] font-extrabold flex items-center justify-center">
                  {selectedCount}
                </span>
              )}
            </button>
          </div>

          {/* Print Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="p-2 rounded-xl bg-[#001a4e] hover:bg-[#0047AB] border border-[#007FFF]/30 text-[#87CEEB] hover:text-white transition-colors"
            title="Print Poster / Save PDF"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Desktop WhatsApp CTA */}
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-['JetBrains_Mono',monospace] font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(37,211,102,0.4)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>0787923951</span>
          </a>
        </div>
      </div>

      {/* Category Pills Subnav */}
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 text-xs no-scrollbar">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onSelectCategory(c.id)}
            className={`px-3 py-1 rounded-full text-[11px] font-['JetBrains_Mono',monospace] whitespace-nowrap transition-colors border ${
              activeCategory === c.id
                ? 'bg-[#007FFF] border-[#87CEEB] text-white font-bold shadow-[0_0_10px_rgba(0,127,255,0.4)]'
                : 'bg-[#001a4e]/60 border-[#007FFF]/30 text-[#87CEEB] hover:text-white hover:border-[#007FFF]'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </header>
  );
};
