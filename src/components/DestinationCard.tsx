import React from 'react';
import { Destination } from '../types/travel';
import { Sparkles, MapPin, ArrowRight, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
  isSelected: boolean;
  onSelect: (dest: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  isSelected,
  onSelect
}) => {
  return (
    <div
      onClick={() => onSelect(destination)}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 transform ${
        isSelected
          ? 'ring-2 ring-[#D3968C] shadow-2xl scale-[1.02] bg-[#0A3323]'
          : 'bg-[#105666]/40 border border-[#839958]/40 hover:border-[#D3968C]/60 hover:scale-[1.01]'
      }`}
    >
      {/* Hero Image Container */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3323] via-[#0A3323]/50 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-[#0A3323]/85 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-[#F7F4D5] border border-[#839958]/50 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#D3968C]" />
            {destination.state} ({destination.regionType})
          </span>

          {/* Match Score Badge */}
          <div className="px-3 py-1 rounded-full bg-[#D3968C] text-[#0A3323] text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#0A3323]" />
            <span>{destination.matchScore}% MATCH</span>
          </div>
        </div>

        {/* Title Overlay at bottom of image */}
        <div className="absolute bottom-4 left-6 right-6 z-10">
          <h3 className="font-editorial text-3xl sm:text-4xl font-black uppercase text-[#F7F4D5] tracking-tight drop-shadow-lg">
            {destination.name}
          </h3>
          <p className="font-serif-accent text-lg text-[#D3968C] drop-shadow-md">
            "{destination.tagline}"
          </p>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-6 space-y-4">
        {/* Interest Tags */}
        <div className="flex flex-wrap gap-1.5">
          {destination.interests.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0A3323]/90 text-[#F7F4D5]/90 border border-[#839958]/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Why We Recommend It (Explainable AI Section) */}
        <div className="p-4 rounded-2xl bg-[#0A3323]/60 border border-[#839958]/40 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D3968C] font-title">
            <CheckCircle2 className="w-4 h-4 text-[#839958]" />
            <span>WHY WE RECOMMEND IT:</span>
          </div>
          <ul className="space-y-1 text-xs text-[#F7F4D5]/90">
            {destination.matchReasons.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                <span className="text-[#D3968C] font-bold">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metadata Footer (Budget, Duration, Season, Crowd) */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#105666] text-center text-xs">
          <div className="p-2 rounded-xl bg-[#0A3323]/80">
            <span className="block text-[10px] text-[#839958] uppercase font-bold">Est. Budget</span>
            <span className="text-[#D3968C] font-bold font-mono">₹{destination.estimatedBudget.couple.toLocaleString('en-IN')}</span>
          </div>

          <div className="p-2 rounded-xl bg-[#0A3323]/80">
            <span className="block text-[10px] text-[#839958] uppercase font-bold">Duration</span>
            <span className="text-[#F7F4D5] font-bold">{destination.idealDurationDays} Days</span>
          </div>

          <div className="p-2 rounded-xl bg-[#0A3323]/80">
            <span className="block text-[10px] text-[#839958] uppercase font-bold">Crowd</span>
            <span className={`font-bold ${destination.crowdLevel === 'LOW' ? 'text-[#839958]' : 'text-[#D3968C]'}`}>
              {destination.crowdLevel}
            </span>
          </div>
        </div>

        {/* CTA Select Button */}
        <button
          onClick={() => onSelect(destination)}
          className={`w-full py-3 rounded-xl font-editorial text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isSelected
              ? 'bg-[#D3968C] text-[#0A3323] shadow-lg shadow-[#D3968C]/30'
              : 'bg-[#105666]/60 hover:bg-[#D3968C] text-[#F7F4D5] hover:text-[#0A3323]'
          }`}
        >
          <span>{isSelected ? 'SELECTED DESTINATION' : 'DISCOVER DESTINATION DETAILS'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
