import React from 'react';
import { Destination, FestivalEvent } from '../types/travel';
import { Calendar, Users, Hotel, Car, AlertTriangle, Plus, Check } from 'lucide-react';

interface FestivalsSectionProps {
  destination: Destination;
  addedFestivals: string[];
  onToggleFestival: (event: FestivalEvent) => void;
}

export const FestivalsSection: React.FC<FestivalsSectionProps> = ({
  destination,
  addedFestivals,
  onToggleFestival
}) => {
  return (
    <section id="events" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel-forest rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden animate-fade-in-up">
        
        {/* Ambient orbs */}
        <div className="ambient-orb-teal top-0 right-0" />

        {/* Section Header */}
        <div className="mb-8 relative z-10 animate-slide-in-left">
          <div className="badge-editorial mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Seasonal Cultural Calendar
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F7F4D5]">
            WHAT'S HAPPENING <span className="text-[#D3968C] italic">DURING YOUR TRIP?</span>
          </h2>
          <p className="font-serif-accent text-xl text-[#F7F4D5]/80 mt-2">
            AI matched festivals & events with real-time crowd, transport, and hotel impact analysis.
          </p>
        </div>

        {/* Festival Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children relative z-10">
          {destination.eventsFestivals.map((event) => {
            const isAdded = addedFestivals.includes(event.id);
            return (
              <div
                key={event.id}
                className="glass-panel rounded-2xl p-6 flex flex-col justify-between space-y-4 relative overflow-hidden card-hover-lift hover-border-glow"
              >
                <div className="flex items-start justify-between border-b border-[#105666]/40 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D3968C] text-[#0A3323]">
                      {event.dates}
                    </span>
                    <h3 className="font-editorial text-2xl font-extrabold text-[#F7F4D5] uppercase mt-2">{event.name}</h3>
                    <span className="text-xs text-[#F7F4D5]/60 font-medium">{event.location}</span>
                  </div>
                  <span className="text-xs font-bold text-[#D3968C] px-2.5 py-1 rounded-lg bg-[#0A3323]/80 border border-[#105666]/40">
                    {event.price}
                  </span>
                </div>

                <p className="text-xs text-[#F7F4D5]/80 leading-relaxed font-serif-accent text-sm">
                  "{event.description}"
                </p>

                {/* Impact Assessment Grid */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2">
                  <div className="p-2.5 rounded-xl bg-[#0A3323]/80 border border-[#105666]/40">
                    <span className="text-[9px] text-[#F7F4D5]/50 uppercase font-bold flex items-center justify-center gap-1">
                      <Users className="w-3 h-3 text-[#D3968C]" />
                      Crowd Density
                    </span>
                    <span className="text-[#D3968C] font-bold mt-0.5 block">{event.crowdImpact} CROWD</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#0A3323]/80 border border-[#105666]/40">
                    <span className="text-[9px] text-[#F7F4D5]/50 uppercase font-bold flex items-center justify-center gap-1">
                      <Hotel className="w-3 h-3 text-[#D3968C]" />
                      Hotel Impact
                    </span>
                    <span className="text-[#F7F4D5] text-[10px] font-semibold mt-0.5 block leading-tight">{event.hotelImpact}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#0A3323]/80 border border-[#105666]/40">
                    <span className="text-[9px] text-[#F7F4D5]/50 uppercase font-bold flex items-center justify-center gap-1">
                      <Car className="w-3 h-3 text-[#D3968C]" />
                      Traffic Impact
                    </span>
                    <span className="text-[#F7F4D5] text-[10px] font-semibold mt-0.5 block leading-tight">{event.transportImpact}</span>
                  </div>
                </div>

                {/* Add to Itinerary CTA */}
                <button
                  onClick={() => onToggleFestival(event)}
                  className={`w-full py-3 rounded-xl font-title text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer btn-press ${
                    isAdded
                      ? 'bg-[#839958] text-[#0A3323] shadow-lg shadow-[#839958]/30'
                      : 'bg-[#D3968C] hover:bg-[#E2A69C] text-[#0A3323] shadow-lg shadow-[#D3968C]/30'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 text-[#0A3323] stroke-[3]" />
                      <span>ADDED TO ITINERARY</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#0A3323]" />
                      <span>ADD TO ITINERARY</span>
                    </>
                  )}
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
