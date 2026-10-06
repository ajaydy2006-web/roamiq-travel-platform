import React, { useState } from 'react';
import { Destination, UserTripQuery } from '../types/travel';
import { scoreService } from '../services/roamServices';
import { Award, Sparkles, CheckCircle2, ShieldCheck, MapPin, Calendar, Wallet, Car, Hotel, Languages, Compass } from 'lucide-react';

interface TravelScoreDashboardProps {
  destination: Destination;
  query: UserTripQuery;
  onNavigateTab: (tabId: string) => void;
}

export const TravelScoreDashboard: React.FC<TravelScoreDashboardProps> = ({
  destination,
  query,
  onNavigateTab
}) => {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'SCORES' | 'QUICK_LINKS'>('OVERVIEW');
  const travelScore = scoreService.calculateTravelScore(destination, query);

  return (
    <section id="dashboard" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel-forest rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8 animate-fade-in-up border-[#D3968C]/30">
        
        {/* Ambient Glow */}
        <div className="ambient-orb-rosy top-0 right-0" />
        <div className="ambient-orb-moss -bottom-10 -left-10" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#105666]/40 pb-6 relative z-10">
          <div className="animate-slide-in-left">
            <div className="badge-editorial mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Trip Command Center
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F7F4D5]">
              YOUR TRIP <span className="text-[#D3968C] italic">AT A GLANCE.</span>
            </h2>
            <p className="font-serif-accent text-xl text-[#F7F4D5]/70 mt-1">
              Selected: <strong className="text-[#F7F4D5] font-bold">{destination.name}, {destination.state}</strong> ({query.durationDays} Days, ₹{query.budget.toLocaleString('en-IN')} Budget)
            </p>
          </div>

          {/* Overall RoamIQ Travel Score Badge */}
          <div className="p-4 rounded-2xl bg-[#D3968C] text-[#0A3323] text-center shrink-0 shadow-xl shadow-[#D3968C]/30 animate-scale-reveal animate-glow-breathe">
            <span className="text-[10px] uppercase font-extrabold tracking-widest block text-[#0A3323]/80">ROAMIQ TRAVEL SCORE</span>
            <span className="font-editorial text-5xl font-black text-[#0A3323] leading-none">{travelScore.overall}</span>
            <span className="text-xs font-bold block text-[#0A3323]/80">/ 100</span>
          </div>
        </div>

        {/* 6-Dimensional Score Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 stagger-children relative z-10">
          <div className="p-4 rounded-2xl bg-[#0A3323]/60 border border-[#105666]/40 text-center card-hover-lift">
            <span className="text-[10px] text-[#F7F4D5]/40 font-bold uppercase block tracking-wider">Cost Index</span>
            <span className="font-editorial text-2xl font-extrabold text-[#D3968C]">{travelScore.costScore}</span>
            <span className="text-[9px] text-[#F7F4D5]/30 block">/ 100</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0A3323]/60 border border-[#105666]/40 text-center card-hover-lift">
            <span className="text-[10px] text-[#F7F4D5]/40 font-bold uppercase block tracking-wider">Safety Index</span>
            <span className="font-editorial text-2xl font-extrabold text-[#839958]">{travelScore.safetyScore}</span>
            <span className="text-[9px] text-[#F7F4D5]/30 block">/ 100</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0A3323]/60 border border-[#105666]/40 text-center card-hover-lift">
            <span className="text-[10px] text-[#F7F4D5]/40 font-bold uppercase block tracking-wider">Crowd Index</span>
            <span className="font-editorial text-2xl font-extrabold text-[#D3968C]">{travelScore.crowdScore}</span>
            <span className="text-[9px] text-[#F7F4D5]/30 block">/ 100</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0A3323]/60 border border-[#105666]/40 text-center card-hover-lift">
            <span className="text-[10px] text-[#F7F4D5]/40 font-bold uppercase block tracking-wider">Weather Index</span>
            <span className="font-editorial text-2xl font-extrabold text-[#105666]">{travelScore.weatherScore}</span>
            <span className="text-[9px] text-[#F7F4D5]/30 block">/ 100</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0A3323]/60 border border-[#105666]/40 text-center card-hover-lift">
            <span className="text-[10px] text-[#F7F4D5]/40 font-bold uppercase block tracking-wider">Transport Index</span>
            <span className="font-editorial text-2xl font-extrabold text-[#F7F4D5]">{travelScore.transportScore}</span>
            <span className="text-[9px] text-[#F7F4D5]/30 block">/ 100</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0A3323]/60 border border-[#105666]/40 text-center card-hover-lift">
            <span className="text-[10px] text-[#F7F4D5]/40 font-bold uppercase block tracking-wider">Convenience</span>
            <span className="font-editorial text-2xl font-extrabold text-[#D3968C]">{travelScore.convenienceScore}</span>
            <span className="text-[9px] text-[#F7F4D5]/30 block">/ 100</span>
          </div>
        </div>

        {/* Command Center Quick Navigation Hub */}
        <div className="pt-4 border-t border-[#105666]/40 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="font-editorial text-xl font-extrabold uppercase text-[#F7F4D5] mb-4">
            COMMAND CENTER MODULES
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-children">
            <button
              onClick={() => onNavigateTab('itinerary')}
              className="p-4 rounded-2xl glass-panel hover:bg-[#D3968C] text-[#F7F4D5]/80 hover:text-[#0A3323] transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-pointer btn-press"
            >
              <Calendar className="w-6 h-6 text-[#D3968C] group-hover:text-[#0A3323]" />
              <span className="font-title text-sm font-extrabold uppercase">AI ITINERARY</span>
            </button>

            <button
              onClick={() => onNavigateTab('hidden-gems')}
              className="p-4 rounded-2xl glass-panel hover:bg-[#D3968C] text-[#F7F4D5]/80 hover:text-[#0A3323] transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-pointer btn-press"
            >
              <Compass className="w-6 h-6 text-[#D3968C] group-hover:text-[#0A3323]" />
              <span className="font-title text-sm font-extrabold uppercase">HIDDEN GEMS</span>
            </button>

            <button
              onClick={() => onNavigateTab('comparison')}
              className="p-4 rounded-2xl glass-panel hover:bg-[#D3968C] text-[#F7F4D5]/80 hover:text-[#0A3323] transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-pointer btn-press"
            >
              <Car className="w-6 h-6 text-[#D3968C] group-hover:text-[#0A3323]" />
              <span className="font-title text-sm font-extrabold uppercase">LOGISTICS & HOTELS</span>
            </button>

            <button
              onClick={() => onNavigateTab('safety')}
              className="p-4 rounded-2xl glass-panel hover:bg-[#D3968C] text-[#F7F4D5]/80 hover:text-[#0A3323] transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-pointer btn-press"
            >
              <ShieldCheck className="w-6 h-6 text-[#D3968C] group-hover:text-[#0A3323]" />
              <span className="font-title text-sm font-extrabold uppercase">SAFETY & EMERGENCY</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
