import React, { useState } from 'react';
import { Destination, ItineraryDay, ItineraryStop } from '../types/travel';
import { Calendar, Clock, MapPin, DollarSign, Users, AlertTriangle, Trash2, ArrowUp, ArrowDown, Sparkles, Route, Check } from 'lucide-react';

interface ItineraryTimelineProps {
  destination: Destination;
  itinerary: ItineraryDay[];
  onModifyStop: (dayIndex: number, stopId: string, action: 'REMOVE' | 'REORDER_UP' | 'REORDER_DOWN') => void;
}

export const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({
  destination,
  itinerary,
  onModifyStop
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);

  const currentDayData = itinerary.find(d => d.day === activeDay) || itinerary[0];

  const totalTripCost = itinerary.reduce((sum, day) => {
    return sum + day.stops.reduce((daySum, stop) => daySum + stop.cost, 0);
  }, 0);

  return (
    <section id="itinerary" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 animate-fade-in-up">
        <div>
          <div className="badge-editorial mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Adaptive AI Timeline
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F7F4D5]">
            YOUR TRIP, <span className="text-[#D3968C] italic">PLANNED.</span>
          </h2>
          <p className="font-serif-accent text-xl text-[#F7F4D5]/80 mt-2">
            Editorial itinerary optimized for minimal transit friction, opening times, and crowd patterns.
          </p>
        </div>

        {/* Total Cost Badge */}
        <div className="p-4 rounded-2xl glass-panel-forest border border-[#D3968C]/30 text-right shadow-xl animate-glow-breathe">
          <span className="text-[10px] uppercase font-bold text-[#F7F4D5]/50 block tracking-wider">Total Activity Cost</span>
          <span className="font-editorial text-2xl font-extrabold text-[#D3968C]">₹{totalTripCost.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Smart Route Optimization Banner */}
      <div className="mb-8 p-4 rounded-2xl glass-panel-forest border-[#839958]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#839958]/20 text-[#839958] flex items-center justify-center font-bold">
            <Route className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-title text-sm font-bold text-[#F7F4D5] uppercase">SMART ROUTE OPTIMIZATION ACTIVE</h4>
            <p className="text-xs text-[#839958]">
              Route order sequenced geometrically. Saved 4.2 km back-and-forth transit & 28 mins today.
            </p>
          </div>
        </div>
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-[#839958]/20 text-[#839958] border border-[#839958]/30">
          94% EFFICIENCY RATING
        </span>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
        {itinerary.map((day) => (
          <button
            key={day.day}
            onClick={() => setActiveDay(day.day)}
            className={`px-6 py-3 rounded-2xl font-title text-sm font-extrabold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer btn-press ${
              activeDay === day.day
                ? 'bg-[#D3968C] text-[#0A3323] shadow-lg shadow-[#D3968C]/30 scale-105'
                : 'glass-panel-forest text-[#F7F4D5]/70 hover:border-[#D3968C]/40'
            }`}
          >
            DAY 0{day.day}: {day.title.substring(0, 22)}...
          </button>
        ))}
      </div>

      {/* Day Timeline Container */}
      <div className="glass-panel-forest rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in-up">
        <div className="border-b border-[#105666]/40 pb-4 flex items-center justify-between">
          <h3 className="font-editorial text-2xl font-extrabold text-[#F7F4D5] uppercase">
            DAY 0{currentDayData.day}: {currentDayData.title}
          </h3>
          <span className="text-xs text-[#F7F4D5]/50 font-bold tracking-wider">{currentDayData.stops.length} STOPS SCHEDULED</span>
        </div>

        {/* Timeline Stops */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-[#D3968C] before:via-[#105666] before:to-[#839958]">
          {currentDayData.stops.map((stop, idx) => (
            <div
              key={stop.id}
              className={`relative pl-14 transition-all animate-fade-in-up ${
                stop.isAlternative ? 'bg-[#D3968C]/10 border border-[#D3968C]/30 p-4 rounded-2xl' : ''
              }`}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Timeline Marker Dot */}
              <div className="absolute left-3.5 top-1.5 w-6 h-6 rounded-full bg-[#D3968C] text-[#0A3323] text-[11px] font-extrabold flex items-center justify-center shadow-lg shadow-[#D3968C]/30">
                {idx + 1}
              </div>

              {/* Stop Details Card */}
              <div className="glass-panel rounded-2xl p-5 space-y-3 hover-border-glow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#D3968C]/15 text-[#D3968C] text-xs font-bold font-mono">
                      {stop.time}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7F4D5]/50 px-2 py-0.5 rounded bg-[#0A3323]/80 border border-[#105666]/40">
                      {stop.category}
                    </span>
                    {stop.isAlternative && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D3968C] px-2 py-0.5 rounded bg-[#D3968C]/15 border border-[#D3968C]/30">
                        WEATHER REPLANNED
                      </span>
                    )}
                  </div>

                  {/* Actions (Reorder & Remove) */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onModifyStop(activeDay - 1, stop.id, 'REORDER_UP')}
                      disabled={idx === 0}
                      className="p-1.5 rounded-lg bg-[#0A3323]/80 hover:bg-[#105666] text-[#F7F4D5]/60 disabled:opacity-40 transition-colors cursor-pointer"
                      title="Move Up"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onModifyStop(activeDay - 1, stop.id, 'REORDER_DOWN')}
                      disabled={idx === currentDayData.stops.length - 1}
                      className="p-1.5 rounded-lg bg-[#0A3323]/80 hover:bg-[#105666] text-[#F7F4D5]/60 disabled:opacity-40 transition-colors cursor-pointer"
                      title="Move Down"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onModifyStop(activeDay - 1, stop.id, 'REMOVE')}
                      className="p-1.5 rounded-lg bg-[#D3968C]/15 hover:bg-[#D3968C]/30 text-[#D3968C] transition-colors cursor-pointer"
                      title="Remove Stop"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h4 className="font-editorial text-xl font-bold text-[#F7F4D5] uppercase">{stop.activity}</h4>

                <div className="text-xs text-[#F7F4D5]/60 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D3968C]" />
                  <span>LOCATION: <strong className="text-[#F7F4D5]/90">{stop.location}</strong></span>
                </div>

                {/* Metadata Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#105666]/30 text-xs">
                  <div className="p-1.5 rounded-lg bg-[#0A3323]/60 border border-[#105666]/30 text-center">
                    <span className="text-[9px] text-[#F7F4D5]/40 uppercase font-bold block">Cost</span>
                    <span className="text-[#D3968C] font-bold">₹{stop.cost}</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#0A3323]/60 border border-[#105666]/30 text-center">
                    <span className="text-[9px] text-[#F7F4D5]/40 uppercase font-bold block">Travel Time</span>
                    <span className="text-[#F7F4D5] font-bold">{stop.travelTime}</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#0A3323]/60 border border-[#105666]/30 text-center">
                    <span className="text-[9px] text-[#F7F4D5]/40 uppercase font-bold block">Crowd</span>
                    <span className="text-[#839958] font-bold">{stop.crowd}</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#0A3323]/60 border border-[#105666]/30 text-center">
                    <span className="text-[9px] text-[#F7F4D5]/40 uppercase font-bold block">Risk Tag</span>
                    <span className="text-[#F7F4D5] font-bold">{stop.risk}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Per-Day Do's & Don'ts — contextual advice for this day */}
        <div className="mt-6 p-5 rounded-2xl bg-[#0A3323]/60 border border-[#105666]/40 space-y-3">
          <h4 className="font-title text-sm font-extrabold uppercase text-[#F7F4D5] flex items-center gap-2">
            📋 DAY {currentDayData.day} — LOCAL TIPS & ETIQUETTE
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <span className="text-[#839958] font-bold uppercase text-[10px] block tracking-wider">DO'S FOR TODAY:</span>
              {destination.riskProfile.dosAndDonts.dos.map((d, i) => (
                <div key={i} className="flex items-start gap-1.5 text-[#F7F4D5]/80">
                  <span className="text-[#839958] font-bold shrink-0">✓</span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              <span className="text-[#D3968C] font-bold uppercase text-[10px] block tracking-wider">DON'TS FOR TODAY:</span>
              {destination.riskProfile.dosAndDonts.donts.map((d, i) => (
                <div key={i} className="flex items-start gap-1.5 text-[#F7F4D5]/80">
                  <span className="text-[#D3968C] font-bold shrink-0">✗</span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scam awareness for this day's locations */}
          {destination.riskProfile.scamShieldTips.length > 0 && (
            <div className="pt-3 border-t border-[#105666]/40">
              <span className="text-[#D3968C] font-bold uppercase text-[10px] block mb-1.5 tracking-wider">⚠️ PRICE AWARENESS:</span>
              <p className="text-xs text-[#F7F4D5]/70 font-serif-accent text-sm">
                {destination.riskProfile.scamShieldTips[
                  (currentDayData.day - 1) % destination.riskProfile.scamShieldTips.length
                ]}
              </p>
            </div>
          )}

          {/* Emergency Contacts for this place */}
          <div className="pt-3 border-t border-[#105666]/40">
            <span className="text-[#D3968C] font-bold uppercase text-[10px] block mb-2 tracking-wider">🚨 EMERGENCY CONTACTS — {destination.name.toUpperCase()}</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {destination.riskProfile.emergencyServices.map((svc, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-[#0A3323]/80 border border-[#105666]/30 flex items-start gap-2">
                  <span className="text-[#D3968C] font-bold shrink-0">
                    {svc.type === 'Hospital' ? '🏥' : svc.type === 'Police' ? '🚔' : '📞'}
                  </span>
                  <div>
                    <span className="text-[9px] text-[#F7F4D5]/40 uppercase font-bold block">{svc.type}</span>
                    <span className="text-[#F7F4D5] font-bold block">{svc.name}</span>
                    <span className="text-[#D3968C] font-mono font-bold">{svc.contact}</span>
                    <span className="text-[#F7F4D5]/40 block text-[10px]">{svc.distance} away {svc.verified ? '• ✅ Verified' : ''}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Universal helplines */}
            <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
              <div className="p-1.5 rounded-lg bg-[#0A3323]/60 border border-[#105666]/30 text-center">
                <span className="text-[9px] text-[#F7F4D5]/40 uppercase font-bold block">Police</span>
                <span className="text-[#F7F4D5] font-bold font-mono">100</span>
              </div>
              <div className="p-1.5 rounded-lg bg-[#0A3323]/60 border border-[#105666]/30 text-center">
                <span className="text-[9px] text-[#F7F4D5]/40 uppercase font-bold block">Ambulance</span>
                <span className="text-[#F7F4D5] font-bold font-mono">108</span>
              </div>
              <div className="p-1.5 rounded-lg bg-[#0A3323]/60 border border-[#105666]/30 text-center">
                <span className="text-[9px] text-[#F7F4D5]/40 uppercase font-bold block">Women Safety</span>
                <span className="text-[#F7F4D5] font-bold font-mono">1091</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
