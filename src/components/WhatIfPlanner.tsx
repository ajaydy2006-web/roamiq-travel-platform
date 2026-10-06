import React, { useState } from 'react';
import { UserTripQuery, CrowdLevel } from '../types/travel';
import { Sliders, RefreshCw, Wallet, Calendar, Users, Sparkles } from 'lucide-react';

interface WhatIfPlannerProps {
  currentQuery: UserTripQuery;
  onRebuildTrip: (newQuery: UserTripQuery) => void;
}

export const WhatIfPlanner: React.FC<WhatIfPlannerProps> = ({ currentQuery, onRebuildTrip }) => {
  const [budget, setBudget] = useState(currentQuery.budget);
  const [durationDays, setDurationDays] = useState(currentQuery.durationDays);
  const [crowdPref, setCrowdPref] = useState<CrowdLevel>('LOW');
  const [primaryInterest, setPrimaryInterest] = useState('CULTURE');

  const handleRebuild = () => {
    onRebuildTrip({
      ...currentQuery,
      budget,
      durationDays,
      selectedInterests: [primaryInterest, ...currentQuery.selectedInterests.filter(i => i !== primaryInterest)]
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel-forest rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden animate-fade-in-up">
        
        {/* Ambient orb */}
        <div className="ambient-orb-teal top-0 -right-10" />

        {/* Header */}
        <div className="relative z-10 animate-slide-in-left">
          <div className="badge-editorial mb-2">
            <Sliders className="w-3.5 h-3.5" />
            Hypothetical Scenario Engine
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#F7F4D5]">
            WHAT IF YOUR <span className="text-[#D3968C] italic">PLANS CHANGE?</span>
          </h2>
          <p className="text-[#F7F4D5]/70 text-sm mt-1 font-serif-accent">
            Adjust budget, travel duration, or crowd tolerance to dynamically recalculate destination matches & itineraries.
          </p>
        </div>

        {/* Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-2xl glass-panel relative z-10 stagger-children">
          
          {/* Budget */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#F7F4D5]/60 mb-2 flex justify-between tracking-wider">
              <span>Budget What-If</span>
              <span className="text-[#D3968C] font-mono">₹{budget.toLocaleString('en-IN')}</span>
            </label>
            <input
              type="range"
              min={8000}
              max={40000}
              step={1000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-[#D3968C] cursor-pointer"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#F7F4D5]/60 mb-2 tracking-wider">
              Duration What-If
            </label>
            <select
              value={durationDays}
              onChange={(e) => setDurationDays(Number(e.target.value))}
              className="w-full bg-[#0A3323]/80 border border-[#105666]/60 text-[#F7F4D5] text-xs rounded-xl px-3 py-2.5 font-bold focus:outline-none focus:border-[#D3968C]"
            >
              <option value={3}>3 Days (Weekend Escape)</option>
              <option value={4}>4 Days (Standard Trip)</option>
              <option value={5}>5 Days (Extended Discovery)</option>
              <option value={7}>7 Days (Full Exploration)</option>
            </select>
          </div>

          {/* Crowd Preference */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#F7F4D5]/60 mb-2 tracking-wider">
              Crowd Tolerance
            </label>
            <select
              value={crowdPref}
              onChange={(e) => setCrowdPref(e.target.value as CrowdLevel)}
              className="w-full bg-[#0A3323]/80 border border-[#105666]/60 text-[#F7F4D5] text-xs rounded-xl px-3 py-2.5 font-bold focus:outline-none focus:border-[#D3968C]"
            >
              <option value="LOW">Low Crowd (Secluded & Peaceful)</option>
              <option value="MEDIUM">Medium Crowd (Balanced Vibe)</option>
              <option value="HIGH">High Crowd (Bustling Hubs)</option>
            </select>
          </div>

          {/* Primary Interest Shift */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#F7F4D5]/60 mb-2 tracking-wider">
              Primary Focus Shift
            </label>
            <select
              value={primaryInterest}
              onChange={(e) => setPrimaryInterest(e.target.value)}
              className="w-full bg-[#0A3323]/80 border border-[#105666]/60 text-[#D3968C] text-xs rounded-xl px-3 py-2.5 font-bold focus:outline-none focus:border-[#D3968C]"
            >
              <option value="TRIBAL">Tribal Culture Focus</option>
              <option value="SUNRISE">Sunrise & Photography Focus</option>
              <option value="FOOD">Culinary & Street Food Focus</option>
              <option value="PEACE & RELAXATION">Peace & Wellness Focus</option>
            </select>
          </div>

        </div>

        {/* CTA Rebuild Button */}
        <button
          onClick={handleRebuild}
          className="w-full py-4 bg-[#D3968C] hover:bg-[#E2A69C] text-[#0A3323] font-editorial text-lg font-extrabold uppercase tracking-wider rounded-2xl transition-all shadow-xl shadow-[#D3968C]/30 flex items-center justify-center gap-2 cursor-pointer btn-press relative z-10 animate-glow-breathe"
        >
          <RefreshCw className="w-5 h-5 text-[#0A3323]" />
          <span>REBUILD MY ENTIRE TRIP PLAN NOW →</span>
        </button>

      </div>
    </section>
  );
};
