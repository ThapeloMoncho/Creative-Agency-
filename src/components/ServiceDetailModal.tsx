import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceItem } from '../types';
import { ServiceIcon } from './ServiceIcon';
import { X, Check, MessageCircle, Clock, ShieldCheck, Plus, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/servicesData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  isInEstimate: boolean;
  onToggleEstimate: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  isInEstimate,
  onToggleEstimate,
}) => {
  if (!service) return null;

  const whatsAppDirectUrl = `https://wa.me/27787923951?text=${encodeURIComponent(
    `Hi Creative Agency! I'd like to get a quote and start an order for "${service.name}" (${service.specs}) - Starting from ${service.priceFormatted}.`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00143d]/80 backdrop-blur-md">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#002366] via-[#001c52] to-[#00143d] border border-[#007FFF]/50 shadow-[0_25px_70px_rgba(0,18,51,0.9),0_0_40px_rgba(0,127,255,0.3)] p-6 sm:p-8 text-white z-10 overflow-hidden"
        >
          {/* Top Decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#007FFF] via-[#87CEEB] to-[#007FFF]" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#001742] text-[#87CEEB] hover:text-white hover:bg-[#007FFF] transition-colors border border-[#007FFF]/30"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Service Header */}
          <div className="flex items-start gap-4 mb-5">
            <div className="p-3.5 rounded-2xl bg-[#00266b] text-[#87CEEB] border border-[#007FFF]/50 shadow-[0_0_20px_rgba(0,127,255,0.4)] flex-shrink-0">
              <ServiceIcon name={service.iconName} className="w-7 h-7" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-['JetBrains_Mono',monospace] font-bold px-2 py-0.5 rounded bg-[#007FFF] text-white shadow-[0_0_10px_#007FFF]">
                  {service.number}
                </span>
                <span className="text-xs font-['JetBrains_Mono',monospace] text-[#87CEEB] uppercase tracking-wider font-semibold">
                  {service.specs}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Inter',sans-serif] text-white mt-1">
                {service.name}
              </h2>
            </div>
          </div>

          {/* Description & Detailed scope */}
          <div className="space-y-4 mb-6 font-['Inter',sans-serif]">
            <p className="text-sm text-[#87CEEB]/90 leading-relaxed font-light">
              {service.detailedDesc}
            </p>

            {/* Inclusions Box */}
            <div className="p-4 rounded-2xl bg-[#001742]/90 border border-[#007FFF]/40">
              <span className="text-[11px] font-['JetBrains_Mono',monospace] uppercase tracking-wider text-[#87CEEB] font-bold block mb-1.5">
                PACKAGE INCLUDES:
              </span>
              <div className="flex items-center gap-2.5 text-xs text-white">
                <Check className="w-4 h-4 text-[#87CEEB] flex-shrink-0" />
                <span>{service.included}</span>
              </div>
            </div>

            {/* Turnaround & Guarantee info */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#001742]/90 border border-[#007FFF]/30 flex items-center gap-2.5 text-white">
                <Clock className="w-4 h-4 text-[#87CEEB]" />
                <div>
                  <span className="text-[10px] text-[#87CEEB]/70 block font-['JetBrains_Mono',monospace]">TURNAROUND</span>
                  <span className="font-semibold">{service.turnaround || 'Fast turnaround'}</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#001742]/90 border border-[#007FFF]/30 flex items-center gap-2.5 text-white">
                <ShieldCheck className="w-4 h-4 text-[#87CEEB]" />
                <div>
                  <span className="text-[10px] text-[#87CEEB]/70 block font-['JetBrains_Mono',monospace]">QUALITY</span>
                  <span className="font-semibold">Professional Grade</span>
                </div>
              </div>
            </div>
          </div>

          {/* Price & Action Buttons */}
          <div className="pt-4 border-t border-[#007FFF]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-['JetBrains_Mono',monospace] text-[#87CEEB] uppercase block font-bold">
                STARTING AT
              </span>
              <span className="text-2xl font-bold font-['JetBrains_Mono',monospace] text-white">
                {service.priceFormatted}
              </span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onToggleEstimate(service.id)}
                className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-['JetBrains_Mono',monospace] font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                  isInEstimate
                    ? 'bg-[#007FFF] text-white border border-[#87CEEB] shadow-[0_0_12px_rgba(0,127,255,0.5)]'
                    : 'bg-[#001742] text-[#87CEEB] hover:bg-[#00266b] hover:text-white border border-[#007FFF]/40'
                }`}
              >
                {isInEstimate ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Added to Estimate
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" /> Add to Estimate
                  </>
                )}
              </button>

              <a
                href={whatsAppDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#007FFF] hover:bg-[#0047AB] text-white font-['JetBrains_Mono',monospace] font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(0,127,255,0.4)] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#87CEEB]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
