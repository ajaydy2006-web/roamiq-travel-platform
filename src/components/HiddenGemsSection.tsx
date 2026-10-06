import React from 'react';
import { Destination } from '../types/travel';
import { Compass, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HiddenGemsSectionProps {
  destination: Destination;
}

export const HiddenGemsSection: React.FC<HiddenGemsSectionProps> = ({ destination }) => {
  return (
    <section id="hidden-gems" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel-forest rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden animate-fade-in-up">
        
        {/* Ambient orbs */}
        <div className="ambient-orb-rosy top-0 right-0" />
        <div className="ambient-orb-moss -bottom-20 -left-20" />

        <div className="mb-10 max-w-3xl relative z-10 animate-slide-in-left">
          <div className="badge-editorial mb-3">
            <Compass className="w-3.5 h-3.5" />
            Uncharted Discovery
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F7F4D5]">
            BEYOND THE <span className="text-[#D3968C] italic">TOURIST MAP.</span>
          </h2>
          <p className="font-serif-accent text-xl text-[#F7F4D5]/80 mt-2">
            These hidden gems near {destination.name} are already included in your AI-optimized itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children relative z-10">
          {destination.hiddenGems.map((gem) => (
            <div
              key={gem.id}
              className="glass-panel rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between space-y-4 card-hover-lift hover-border-glow"
            >
              {/* Popular vs Hidden Gem Header */}
              <div className="flex items-center justify-between border-b border-[#105666]/60 pb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#F7F4D5]/60 tracking-wider">Popular Hub</span>
                  <h4 className="font-title text-lg font-bold text-[#F7F4D5] uppercase">{destination.name}</h4>
                </div>
                <span className="text-xl text-[#D3968C] animate-pulse-glow">→</span>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-[#D3968C] flex items-center gap-1 justify-end tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#D3968C]" />
                    Hidden Gem
                  </span>
                  <h4 className="font-editorial text-xl font-extrabold text-[#D3968C] uppercase">{gem.name}</h4>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-48 w-full rounded-xl overflow-hidden group">
                <img src={gem.image} alt={gem.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3323]/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0A3323]/85 backdrop-blur-md text-[10px] font-bold text-[#839958] border border-[#839958]/40 uppercase tracking-wider">
                  {gem.crowdLevel} CROWD
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-[#0A3323]/80 border border-[#105666]/40">
                  <span className="text-[10px] text-[#839958] block font-bold uppercase">Distance</span>
                  <span className="text-[#F7F4D5] font-bold">{gem.distanceFromHub}</span>
                </div>
                <div className="p-2 rounded-lg bg-[#0A3323]/80 border border-[#105666]/40">
                  <span className="text-[10px] text-[#839958] block font-bold uppercase">Travel Time</span>
                  <span className="text-[#F7F4D5] font-bold">{gem.travelTime}</span>
                </div>
                <div className="p-2 rounded-lg bg-[#0A3323]/80 border border-[#105666]/40">
                  <span className="text-[10px] text-[#839958] block font-bold uppercase">Est. Cost</span>
                  <span className="text-[#D3968C] font-bold">{gem.estimatedCost}</span>
                </div>
              </div>

              {/* Why Recommended */}
              <div className="p-3.5 rounded-xl bg-[#0A3323]/60 border border-[#105666]/40 text-xs text-[#F7F4D5]/90">
                <span className="font-bold text-[#D3968C] block mb-1 uppercase tracking-wider text-[10px]">WHY RECOMMENDED:</span>
                <p className="font-serif-accent text-sm leading-relaxed">"{gem.whyRecommended}"</p>
              </div>

              {/* Already Included Badge */}
              <div className="w-full py-3 rounded-xl bg-[#839958]/15 border border-[#839958]/40 flex items-center justify-center gap-2 text-[#839958] font-title text-sm font-extrabold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#839958] stroke-[3]" />
                <span>INCLUDED IN YOUR ITINERARY</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scam warnings for this destination */}
        {destination.riskProfile.scamShieldTips.length > 0 && (
          <div className="mt-8 p-5 rounded-2xl bg-[#D3968C]/10 border border-[#D3968C]/30 animate-fade-in-up relative z-10">
            <h4 className="font-title text-lg font-extrabold text-[#D3968C] uppercase mb-3 flex items-center gap-2">
              ⚠️ PRICE & SCAM AWARENESS FOR {destination.name.toUpperCase()}
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F4D5]/90">
              {destination.riskProfile.scamShieldTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#0A3323]/60 border border-[#105666]/40">
                  <span className="text-[#D3968C] font-bold shrink-0">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            {/* Tourist Price Guard inline */}
            <div className="mt-4 p-4 rounded-xl bg-[#0A3323]/60 border border-[#105666]/40">
              <span className="text-[10px] font-bold uppercase text-[#F7F4D5]/60 block mb-2 tracking-wider">TOURIST PRICE GUARD: {destination.touristPriceGuard.item}</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-[#0A3323]/80 border border-[#105666]/40">
                  <span className="text-[9px] text-[#839958] uppercase font-bold block">Expected Fair Price</span>
                  <span className="text-[#839958] font-bold">{destination.touristPriceGuard.expectedPrice}</span>
                </div>
                <div className="p-2 rounded-lg bg-[#0A3323]/80 border border-[#105666]/40">
                  <span className="text-[9px] text-[#D3968C] uppercase font-bold block">Observed Price</span>
                  <span className="text-[#D3968C] font-bold">{destination.touristPriceGuard.observedPrice}</span>
                </div>
              </div>
              <span className="text-[10px] text-[#D3968C] font-bold mt-2 block">{destination.touristPriceGuard.status}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
