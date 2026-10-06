import React, { useState } from 'react';
import { Destination, ItineraryDay } from '../types/travel';
import { CloudRain, RefreshCw, CheckCircle2, Sparkles, AlertTriangle } from 'lucide-react';
import { replanningService } from '../services/roamServices';

interface AdaptiveReplanningDemoProps {
  destination: Destination;
  onApplyReplanning: (newItinerary: ItineraryDay[]) => void;
}

export const AdaptiveReplanningDemo: React.FC<AdaptiveReplanningDemoProps> = ({
  destination,
  onApplyReplanning
}) => {
  const [isReplanned, setIsReplanned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleReplan = () => {
    setIsLoading(true);
    setTimeout(() => {
      const updated = replanningService.triggerRainAdaptation(destination);
      onApplyReplanning(updated);
      setIsLoading(false);
      setIsReplanned(true);
    }, 1200);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel-forest rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden animate-fade-in-up border-[#D3968C]/30">
        
        {/* Ambient orbs */}
        <div className="ambient-orb-rosy top-0 right-0" />
        <div className="ambient-orb-moss -bottom-20 -left-10" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
          <div className="animate-slide-in-left">
            <div className="badge-editorial mb-2">
              <CloudRain className="w-3.5 h-3.5" />
              Dynamic Condition Adaptation
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase text-[#F7F4D5]">
              ADAPTIVE <span className="text-[#D3968C] italic">REPLANNING ENGINE</span>
            </h2>
            <p className="text-[#F7F4D5]/70 text-sm mt-1 font-serif-accent">
              Simulate live environmental disruption & see RoamIQ rebalance your itinerary in real-time.
            </p>
          </div>

          <button
            onClick={handleReplan}
            disabled={isLoading}
            className="px-6 py-4 bg-[#D3968C] hover:bg-[#E2A69C] text-[#0A3323] font-title text-base font-extrabold uppercase tracking-wider rounded-2xl transition-all shadow-xl shadow-[#D3968C]/30 flex items-center justify-center gap-2 shrink-0 cursor-pointer btn-press animate-slide-in-right animate-glow-breathe"
          >
            <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>{isLoading ? 'REBALANCING TRIP...' : 'SIMULATE WEATHER UPDATE & REPLAN →'}</span>
          </button>
        </div>

        {/* Live Weather Update Alert Box */}
        <div className="p-5 rounded-2xl bg-[#D3968C]/10 border border-[#D3968C]/30 mb-6 flex items-start gap-4 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <AlertTriangle className="w-6 h-6 text-[#D3968C] shrink-0 mt-1" />
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D3968C]">
              WEATHER ALERT DETECTED (DAY 03)
            </span>
            <p className="text-sm font-semibold text-[#F7F4D5]">
              Heavy Rain & Mountain Downpour Forecasted for Outdoor Waterfall Trek on Day 3 morning.
            </p>
            {isReplanned && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#839958] bg-[#839958]/15 px-2.5 py-0.5 rounded border border-[#839958]/30 mt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#839958]" />
                ITINERARY AUTOMATICALLY REBALANCED TO INDOOR HERITAGE & FOOD TRAIL!
              </span>
            )}
          </div>
        </div>

        {/* Old vs New Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 stagger-children">
          <div className={`p-5 rounded-2xl border transition-all ${isReplanned ? 'bg-[#0A3323]/50 border-[#105666]/30 opacity-60 line-through' : 'glass-panel border-[#105666]/40'}`}>
            <span className="text-[10px] font-bold uppercase text-[#F7F4D5]/40 block mb-1 tracking-wider">ORIGINAL SCHEDULE (DAY 3)</span>
            <h4 className="font-editorial text-xl font-bold text-[#F7F4D5] uppercase">Outdoor Waterfall & Jeep Trek</h4>
            <p className="text-xs text-[#F7F4D5]/50 mt-1 font-serif-accent">Katiki Waterfall offroad trek & stream bath</p>
          </div>

          <div className={`p-5 rounded-2xl border transition-all ${isReplanned ? 'bg-[#839958]/10 border-[#839958]/40 shadow-xl shadow-[#839958]/10' : 'bg-[#0A3323]/40 border-[#105666]/30'}`}>
            <span className="text-[10px] font-bold uppercase text-[#839958] block mb-1 tracking-wider">ADAPTED SCHEDULE (DAY 3)</span>
            <h4 className="font-editorial text-xl font-bold text-[#839958] uppercase">
              {isReplanned ? 'Tribal Heritage Museum & Coffee Tasting' : 'Awaiting Replanning Trigger'}
            </h4>
            <p className="text-xs text-[#F7F4D5]/70 mt-1 font-serif-accent">
              {isReplanned
                ? 'Indoor Valmiki Tribal Artifacts walk + Roasted Arabica Coffee workshop'
                : 'Click button above to trigger AI adaptation'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
