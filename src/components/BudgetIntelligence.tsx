import React from 'react';
import { Destination, UserTripQuery, HotelOption, TransportOption } from '../types/travel';
import { budgetService } from '../services/roamServices';
import { Wallet, ShieldAlert, CheckCircle2, TrendingDown, AlertTriangle, Lock, Zap } from 'lucide-react';

interface BudgetIntelligenceProps {
  destination: Destination;
  query: UserTripQuery;
  bookedHotel: HotelOption | null;
  bookedTransport: TransportOption | null;
}

export const BudgetIntelligence: React.FC<BudgetIntelligenceProps> = ({
  destination,
  query,
  bookedHotel,
  bookedTransport
}) => {
  const isBooked = Boolean(bookedHotel || bookedTransport);
  const budgetData = budgetService.calculateTripBudgetBreakdown(destination, query, bookedHotel, bookedTransport);
  const guard = destination.touristPriceGuard;

  if (!isBooked) {
    return (
      <section id="budget-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0A3323]/95 border border-[#D3968C]/40 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D3968C]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="w-16 h-16 rounded-2xl bg-[#D3968C]/15 border border-[#D3968C]/40 text-[#D3968C] flex items-center justify-center mx-auto shadow-inner">
            <Lock className="w-8 h-8 text-[#D3968C]" />
          </div>

          <div className="max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3968C]/15 border border-[#D3968C]/40 text-[#D3968C] text-xs font-bold uppercase tracking-widest">
              Budget Calculation Locked *
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-black uppercase text-[#F7F4D5]">
              CLICK <span className="text-[#D3968C]">"BOOK NOW"</span> ON A HOTEL OR RIDE TO CALCULATE BUDGET
            </h2>
            <p className="text-[#F7F4D5]/80 text-sm leading-relaxed">
              Your custom trip budget calculation and financial breakdown are computed strictly after you select and click <strong className="text-[#D3968C]">"Book Now"</strong> on a transport or hotel option above.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-[#D3968C] hover:bg-[#E2A69C] text-[#0A3323] font-editorial text-sm font-extrabold uppercase tracking-wider rounded-xl shadow-lg shadow-[#D3968C]/20 hover:scale-[1.02] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-[#0A3323]" />
              GO TO HOTELS & TRANSPORT TO BOOK NOW ↑
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="budget-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Active Booking Badge Summary */}
      <div className="mb-6 p-4 rounded-2xl bg-[#0A3323]/90 border border-[#839958]/50 text-[#F7F4D5] flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#839958] shrink-0" />
          <span className="font-editorial text-sm font-black uppercase text-[#F7F4D5]">
            LIVE BUDGET CALCULATED FROM BOOKED SELECTIONS:
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {bookedHotel && (
            <span className="px-3 py-1 rounded-full bg-[#839958]/20 text-[#F7F4D5] border border-[#839958]/40 font-mono">
              🏨 {bookedHotel.name} (₹{bookedHotel.totalEstimatedTripHotelCost.toLocaleString('en-IN')})
            </span>
          )}
          {bookedTransport && (
            <span className="px-3 py-1 rounded-full bg-[#839958]/20 text-[#F7F4D5] border border-[#839958]/40 font-mono">
              🚘 {bookedTransport.provider} ({bookedTransport.mode}) (₹{(bookedTransport.price * 2).toLocaleString('en-IN')})
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Budget Breakdown Main Card */}
        <div className="lg:col-span-2 bg-[#0A3323]/95 border border-[#105666] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-[#105666] pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3968C]/15 border border-[#D3968C]/40 text-[#D3968C] text-xs font-bold uppercase tracking-widest mb-2">
                <Wallet className="w-3.5 h-3.5" />
                Budget Intelligence *
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-black uppercase text-[#F7F4D5]">
                FINANCIAL <span className="text-[#D3968C]">BREAKDOWN</span>
              </h2>
            </div>

            <div className="text-right">
              <span className="text-xs text-[#839958] block font-bold uppercase">Target Budget</span>
              <span className="font-editorial text-2xl font-extrabold text-[#D3968C] font-mono">
                ₹{query.budget.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Budget Categories Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-[#F7F4D5]/90 flex items-center gap-1.5 font-title">
                  Hotels & Stay
                  {bookedHotel ? <span className="text-[10px] text-[#839958] font-normal">(Booked)</span> : <span className="text-[10px] text-[#D3968C] font-normal">(Not selected)</span>}
                </span>
                <span className="text-[#F7F4D5] font-mono">₹{budgetData.hotelCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="w-full bg-[#0A3323] rounded-full h-2">
                <div className="bg-[#D3968C] h-2 rounded-full" style={{ width: `${Math.min(100, (budgetData.hotelCost / budgetData.userBudget) * 100)}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-[#F7F4D5]/90 flex items-center gap-1.5 font-title">
                  Transport & Transit
                  {bookedTransport ? <span className="text-[10px] text-[#839958] font-normal">(Booked)</span> : <span className="text-[10px] text-[#D3968C] font-normal">(Not selected)</span>}
                </span>
                <span className="text-[#F7F4D5] font-mono">₹{budgetData.transportCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="w-full bg-[#0A3323] rounded-full h-2">
                <div className="bg-[#839958] h-2 rounded-full" style={{ width: `${Math.min(100, (budgetData.transportCost / budgetData.userBudget) * 100)}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-[#F7F4D5]/90 font-title">Food & Dining (Estimated)</span>
                <span className="text-[#F7F4D5] font-mono">₹{budgetData.foodCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="w-full bg-[#0A3323] rounded-full h-2">
                <div className="bg-[#105666] h-2 rounded-full" style={{ width: `${Math.min(100, (budgetData.foodCost / budgetData.userBudget) * 100)}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-[#F7F4D5]/90 font-title">Activities & Passes</span>
                <span className="text-[#F7F4D5] font-mono">₹{budgetData.activityCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="w-full bg-[#0A3323] rounded-full h-2">
                <div className="bg-[#D3968C]/70 h-2 rounded-full" style={{ width: `${Math.min(100, (budgetData.activityCost / budgetData.userBudget) * 100)}%` }} />
              </div>
            </div>
          </div>

          {/* Tally Summary Box */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#0A3323]/90 border border-[#105666] text-center">
            <div>
              <span className="text-[10px] text-[#839958] uppercase font-bold block font-title">Calculated Total Cost</span>
              <span className="font-editorial text-2xl font-black text-[#F7F4D5] font-mono">₹{budgetData.totalCalculated.toLocaleString('en-IN')}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#839958] uppercase font-bold block font-title">Remaining Buffer</span>
              <span className="font-editorial text-2xl font-black text-[#839958] font-mono">₹{budgetData.remaining.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Money Saving Recommendations */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#D3968C] uppercase tracking-wider flex items-center gap-1 font-title">
              <TrendingDown className="w-4 h-4 text-[#D3968C]" />
              BOOKING SUMMARY & MONEY-SAVING TIPS:
            </span>
            <ul className="space-y-1 text-xs text-[#F7F4D5]/90">
              {budgetData.savingsAdvice.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#D3968C] font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tourist Price Guard Alert Card */}
        <div className="bg-gradient-to-br from-[#0A3323] via-[#105666] to-[#0A3323] border border-[#D3968C]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl backdrop-blur-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3968C]/20 text-[#D3968C] border border-[#D3968C]/40 text-xs font-bold uppercase tracking-widest mb-3">
              <ShieldAlert className="w-3.5 h-3.5 text-[#D3968C]" />
              Tourist Price Guard *
            </div>
            <h3 className="font-editorial text-2xl font-black uppercase text-[#F7F4D5]">
              FAIR PRICE <span className="text-[#D3968C]">AUDIT</span>
            </h3>
            <p className="text-xs text-[#F7F4D5]/80 mt-1">
              Guarding you against local markup inflation & tourist surcharge traps.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0A3323]/90 border border-[#839958]/40 space-y-3">
            <span className="text-xs font-bold uppercase text-[#839958] block font-title">ITEM AUDITED: {guard.item}</span>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-[#105666]/60">
                <span className="text-[9px] text-[#F7F4D5]/70 uppercase font-bold block">Expected Fair Price</span>
                <span className="text-[#839958] font-bold">{guard.expectedPrice}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#105666]/60">
                <span className="text-[9px] text-[#F7F4D5]/70 uppercase font-bold block">Observed Stall Price</span>
                <span className="text-[#D3968C] font-bold">{guard.observedPrice}</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#D3968C]/20 border border-[#D3968C]/40 text-[#D3968C] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 font-title">
              <AlertTriangle className="w-4 h-4 text-[#D3968C] shrink-0" />
              <span>STATUS: {guard.status}</span>
            </div>
          </div>

          <p className="text-[11px] text-[#F7F4D5]/70 italic font-serif-accent">
            "RoamIQ flags possible overcharging using crowdsourced local market baselines rather than accusing sellers."
          </p>
        </div>

      </div>
    </section>
  );
};
