import React from 'react';
import { Destination } from '../types/travel';
import { Clock, CheckCircle, AlertCircle, XCircle, Activity } from 'lucide-react';

interface AvailabilitySectionProps {
  destination: Destination;
}

export const AvailabilitySection: React.FC<AvailabilitySectionProps> = ({ destination }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0A3323]/90 border border-[#105666] rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#839958]/20 border border-[#839958]/40 text-[#839958] text-xs font-bold uppercase tracking-wider mb-2">
              <Activity className="w-3.5 h-3.5 text-[#839958]" />
              Live Demand & Capacity Tracker
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#F7F4D5]">
              IS IT AVAILABLE <span className="text-[#D3968C]">WHEN YOU NEED IT?</span>
            </h2>
            <p className="text-[#F7F4D5]/80 text-sm mt-1">
              Real-time ticket, attraction, transport & hotel availability verification.
            </p>
          </div>

          <span className="text-[10px] font-mono text-[#839958] uppercase tracking-widest px-3 py-1.5 rounded-lg bg-[#0A3323] border border-[#105666] self-start sm:self-auto font-bold">
            STATUS: REAL-TIME MONITORED
          </span>
        </div>

        {/* Availability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destination.localAvailability.map((item, idx) => {
            const isAvailable = item.status === 'AVAILABLE';
            const isLimited = item.status === 'LIMITED';

            return (
              <div
                key={idx}
                className="bg-[#105666]/40 border border-[#839958]/30 rounded-2xl p-5 space-y-4 hover:border-[#D3968C]/60 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#839958] block">{item.category}</span>
                    <h3 className="font-editorial text-xl font-black text-[#F7F4D5] uppercase mt-0.5">{item.name}</h3>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 ${
                      isAvailable
                        ? 'bg-[#839958]/20 text-[#839958] border border-[#839958]/40'
                        : isLimited
                        ? 'bg-[#D3968C]/20 text-[#D3968C] border border-[#D3968C]/40'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    }`}
                  >
                    {isAvailable && <CheckCircle className="w-3 h-3 text-[#839958]" />}
                    {isLimited && <AlertCircle className="w-3 h-3 text-[#D3968C]" />}
                    {!isAvailable && !isLimited && <XCircle className="w-3 h-3 text-rose-300" />}
                    {item.status}
                  </span>
                </div>

                {/* Capacity Meter */}
                <div>
                  <div className="flex justify-between text-xs mb-1 font-bold">
                    <span className="text-[#F7F4D5]/70">Current Occupancy</span>
                    <span className="text-[#F7F4D5] font-mono">{item.capacityPct}%</span>
                  </div>
                  <div className="w-full bg-[#0A3323] rounded-full h-2 overflow-hidden border border-[#105666]">
                    <div
                      className={`h-full rounded-full ${
                        item.capacityPct > 80 ? 'bg-rose-400' : item.capacityPct > 50 ? 'bg-[#D3968C]' : 'bg-[#839958]'
                      }`}
                      style={{ width: `${item.capacityPct}%` }}
                    />
                  </div>
                </div>

                {/* Hours & Advice */}
                <div className="pt-2 border-t border-[#105666] text-xs space-y-1 text-[#F7F4D5]/80">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D3968C]" />
                    <span>Hours: <strong className="text-[#F7F4D5]">{item.openingHours}</strong></span>
                  </div>
                  <p className="text-[11px] text-[#839958] italic font-serif-accent">
                    Tip: {item.bestTime}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
