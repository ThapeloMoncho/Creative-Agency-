import React, { useState } from 'react';
import { SERVICES_DATA, AGENCY_INFO } from '../data/servicesData';
import { ServiceItem } from '../types';
import { ServiceIcon } from './ServiceIcon';
import { MessageCircle, Trash2, Plus, Minus, Calculator, Copy, Check, ArrowUpRight } from 'lucide-react';

interface QuoteCalculatorProps {
  selectedIds: string[];
  onToggleItem: (id: string) => void;
  onClear: () => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  selectedIds,
  onToggleItem,
  onClear,
}) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [clientName, setClientName] = useState('');
  const [copied, setCopied] = useState(false);

  const selectedServices = SERVICES_DATA.filter((s) => selectedIds.includes(s.id));

  const getQty = (id: string) => quantities[id] || 1;

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const totalEstimate = selectedServices.reduce((sum, service) => {
    return sum + service.startingPrice * getQty(service.id);
  }, 0);

  const formatZAR = (amount: number) => {
    return 'R ' + amount.toLocaleString('en-ZA');
  };

  const generateWhatsAppMessage = () => {
    let msg = `*Quote Request / Order - Creative Agency*\n`;
    if (clientName.trim()) {
      msg += `*Client Name:* ${clientName.trim()}\n`;
    }
    msg += `*Date:* 2026 Price List Estimate\n\n`;
    msg += `*Selected Services:*\n`;

    selectedServices.forEach((s, idx) => {
      const qty = getQty(s.id);
      const subtotal = s.startingPrice * qty;
      msg += `${idx + 1}. *${s.name}* (${s.specs})\n`;
      msg += `   • Qty: ${qty} | Approx: R ${subtotal.toLocaleString('en-ZA')}\n`;
      msg += `   • Details: ${s.included}\n`;
    });

    msg += `\n*Estimated Total:* ~${formatZAR(totalEstimate)}*\n`;
    msg += `\n_Please confirm timeline and finalize my invoice._`;

    return msg;
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/27787923951?text=${text}`, '_blank');
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#002366] via-[#001c52] to-[#00143d] border border-[#007FFF]/40 shadow-[0_20px_60px_rgba(0,18,51,0.9),0_0_40px_rgba(0,127,255,0.2)] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#0047AB] rounded-full blur-[100px] opacity-30 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#007FFF] rounded-full blur-[100px] opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#007FFF]/30 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-2xl bg-[#007FFF] text-white shadow-[0_0_20px_#007FFF]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#87CEEB] font-bold">
                ESTIMATE GENERATOR
              </span>
              <div className="h-[2px] w-8 bg-[#007FFF]" />
            </div>
            <h2 className="font-['Inter',sans-serif] text-xl sm:text-2xl font-bold text-white mt-0.5">
              Custom Package & Price Estimator
            </h2>
            <p className="text-xs text-[#87CEEB] font-['Inter',sans-serif]">
              Select and combine branding, web, digital, and repair services
            </p>
          </div>
        </div>

        {selectedServices.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs font-['JetBrains_Mono',monospace] text-[#87CEEB] hover:text-white flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#001742] border border-[#007FFF]/40 hover:bg-rose-500/20 hover:border-rose-500/40 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5 text-rose-400" /> Clear All
          </button>
        )}
      </div>

      {/* Available Services Chips / Toggles */}
      <div className="mt-6 mb-6 relative z-10">
        <label className="text-xs font-['JetBrains_Mono',monospace] text-[#87CEEB] uppercase tracking-wider block font-bold mb-3">
          Quick-Toggle Services:
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedIds.includes(service.id);
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => onToggleItem(service.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-['Inter',sans-serif] flex items-center gap-2 border transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#007FFF] text-white border-[#87CEEB] shadow-[0_0_15px_rgba(0,127,255,0.6)] font-bold'
                    : 'bg-[#001c52]/90 text-[#87CEEB] border-[#007FFF]/30 hover:border-[#87CEEB] hover:text-white'
                }`}
              >
                <ServiceIcon name={service.iconName} className="w-3.5 h-3.5" />
                <span>{service.name}</span>
                <span className="text-[11px] font-['JetBrains_Mono',monospace] opacity-90">
                  ({service.priceFormatted})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Itemized Selection Table */}
      {selectedServices.length === 0 ? (
        <div className="p-10 text-center rounded-2xl bg-[#001742]/80 border border-dashed border-[#007FFF]/40 my-6 relative z-10">
          <p className="text-[#87CEEB] text-sm font-['Inter',sans-serif]">
            Click any service button above or tap items on the poster to build your custom package quote.
          </p>
        </div>
      ) : (
        <div className="space-y-4 mb-6 relative z-10">
          <div className="overflow-x-auto rounded-2xl border border-[#007FFF]/40 bg-[#001c52]/80 backdrop-blur-md">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#007FFF]/40 bg-[#001642]/90 text-[11px] font-['JetBrains_Mono',monospace] text-[#87CEEB] uppercase">
                  <th className="py-3 px-4 font-bold">Service</th>
                  <th className="py-3 px-4 text-center font-bold">Qty / Scope</th>
                  <th className="py-3 px-4 text-right font-bold">Unit Price</th>
                  <th className="py-3 px-4 text-right font-bold">Subtotal</th>
                  <th className="py-3 px-4 text-center font-bold">Remove</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#007FFF]/20">
                {selectedServices.map((service) => {
                  const qty = getQty(service.id);
                  const subtotal = service.startingPrice * qty;
                  return (
                    <tr key={service.id} className="hover:bg-[#00266b]/60 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-white text-sm">{service.name}</div>
                        <div className="text-[11px] text-[#87CEEB]/80">{service.specs}</div>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="inline-flex items-center gap-2 bg-[#001742] border border-[#007FFF]/40 rounded-xl p-1">
                          <button
                            type="button"
                            onClick={() => updateQty(service.id, -1)}
                            className="p-1 rounded-lg hover:bg-[#007FFF] text-[#87CEEB] hover:text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-['JetBrains_Mono',monospace] font-bold w-6 text-center text-xs text-white">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQty(service.id, 1)}
                            className="p-1 rounded-lg hover:bg-[#007FFF] text-[#87CEEB] hover:text-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right font-['JetBrains_Mono',monospace] text-[#87CEEB]">
                        {service.priceFormatted}
                      </td>
                      <td className="py-3.5 px-4 text-right font-['JetBrains_Mono',monospace] font-bold text-white text-sm">
                        R {subtotal.toLocaleString('en-ZA')}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => onToggleItem(service.id)}
                          className="text-[#87CEEB] hover:text-rose-400 p-1.5 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Optional Client Name Input */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="text"
              placeholder="Your Business / Client Name (Optional)"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#001742] border border-[#007FFF]/40 text-xs text-white placeholder:text-[#87CEEB]/50 focus:outline-none focus:border-[#87CEEB] focus:ring-1 focus:ring-[#87CEEB]/50 transition-colors"
            />
          </div>

          {/* Total & Action Banner */}
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#001a4e] via-[#002e80] to-[#001a4e] border border-[#007FFF]/50 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-[0_10px_30px_rgba(0,127,255,0.25)]">
            <div>
              <span className="text-[10px] font-['JetBrains_Mono',monospace] text-[#87CEEB] uppercase tracking-widest block font-bold">
                ESTIMATED STARTING TOTAL
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-2xl sm:text-3xl font-extrabold text-white">
                {formatZAR(totalEstimate)}
              </span>
              <span className="text-[10px] text-[#87CEEB]/80 block mt-0.5">
                Excl. VAT • Final quote tailored to exact specifications
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopyQuote}
                className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-[#001742] hover:bg-[#00266b] border border-[#007FFF]/40 text-xs font-['JetBrains_Mono',monospace] font-bold text-[#87CEEB] hover:text-white flex items-center justify-center gap-2 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy Quote'}</span>
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#007FFF] hover:bg-[#0047AB] text-white font-['JetBrains_Mono',monospace] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-[0_0_20px_rgba(0,127,255,0.4)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
