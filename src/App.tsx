import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { PosterCanvas } from './components/PosterCanvas';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceCategory, ServiceItem } from './types';
import { SERVICES_DATA, AGENCY_INFO } from './data/servicesData';
import { Calculator, MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'poster' | 'estimator'>('poster');
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'logo-design',
    'custom-website',
    'ui-software-design',
  ]);
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const handleToggleQuoteItem = (serviceId: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]
    );
  };

  const handleClearEstimate = () => {
    setSelectedServiceIds([]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#002366] text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar Navigation & Controls (Hidden when printing) */}
      <div className="print:hidden">
        <TopBar
          viewMode={viewMode}
          onSetViewMode={setViewMode}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          selectedCount={selectedServiceIds.length}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 px-3 sm:px-6 py-6 max-w-7xl mx-auto w-full">
        {viewMode === 'poster' ? (
          <div>
            <PosterCanvas
              onSelectService={(service) => setActiveModalService(service)}
              selectedServiceIds={selectedServiceIds}
              onToggleQuoteItem={handleToggleQuoteItem}
              searchQuery={searchQuery}
              activeCategory={activeCategory}
            />

            {/* Quick Estimate Banner trigger below poster */}
            <div className="max-w-4xl mx-auto mt-6 p-5 rounded-2xl bg-[#001c52] border border-[#007FFF]/40 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden shadow-[0_10px_30px_rgba(0,18,51,0.8)]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#007FFF] text-white shadow-[0_0_12px_#007FFF]">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">
                    Need a custom bundled package quote?
                  </h4>
                  <p className="text-xs text-[#87CEEB]">
                    {selectedServiceIds.length} service(s) currently selected for estimation.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setViewMode('estimator')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#007FFF] hover:bg-[#0047AB] text-white font-['JetBrains_Mono',monospace] font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(0,127,255,0.4)]"
              >
                Open Instant Estimator ({selectedServiceIds.length})
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Quick back to poster button */}
            <div className="max-w-4xl mx-auto mb-4 flex justify-between items-center print:hidden">
              <button
                type="button"
                onClick={() => setViewMode('poster')}
                className="text-xs font-['JetBrains_Mono',monospace] text-[#87CEEB] hover:text-white hover:underline flex items-center gap-1.5 font-bold"
              >
                ← Back to Full Poster View
              </button>
            </div>

            <QuoteCalculator
              selectedIds={selectedServiceIds}
              onToggleItem={handleToggleQuoteItem}
              onClear={handleClearEstimate}
            />
          </div>
        )}
      </main>

      {/* Floating Bottom Quick Actions (Hidden when printing) */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2.5 print:hidden">
        {/* Floating WhatsApp Button */}
        <a
          href={AGENCY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-[#007FFF] hover:bg-[#0047AB] text-white shadow-[0_0_25px_rgba(0,127,255,0.6)] transition-all hover:scale-105 flex items-center justify-center group"
          title="Direct WhatsApp Orders & Inquiries"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Scroll To Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#001c52] text-[#87CEEB] hover:text-white hover:bg-[#007FFF] border border-[#007FFF]/40 transition-colors flex items-center justify-center"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        isInEstimate={activeModalService ? selectedServiceIds.includes(activeModalService.id) : false}
        onToggleEstimate={handleToggleQuoteItem}
      />
    </div>
  );
}
