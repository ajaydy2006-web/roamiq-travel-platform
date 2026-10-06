import React, { useState } from 'react';
import { Destination } from '../types/travel';
import { DestinationCard } from './DestinationCard';
import { ChevronLeft, ChevronRight, Sparkles, Filter } from 'lucide-react';

interface DestinationCarouselProps {
  destinations: Destination[];
  selectedDestination: Destination | null;
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationCarousel: React.FC<DestinationCarouselProps> = ({
  destinations,
  selectedDestination,
  onSelectDestination
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterRegion, setFilterRegion] = useState<'ALL' | 'State' | 'Union Territory'>('ALL');

  const filtered = destinations.filter(d => filterRegion === 'ALL' || d.regionType === filterRegion);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="discover" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header (Editorial High-Fashion Typography inspired by Reference 1 & 3) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3968C]/15 border border-[#D3968C]/40 text-[#D3968C] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D3968C]" />
            AI Matched Recommendations *
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F7F4D5]">
            YOUR TRIP, <span className="text-[#D3968C]">DISCOVERED.</span>
          </h2>
          <p className="font-serif-accent text-xl text-[#F7F4D5]/80 mt-2">
            Discovered matching destinations across all 28 States & 8 Union Territories.
          </p>
        </div>

        {/* Filter Tabs & Navigation Arrows */}
        <div className="flex items-center gap-4">
          <div className="flex bg-[#0A3323]/90 border border-[#839958]/40 rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => setFilterRegion('ALL')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                filterRegion === 'ALL' ? 'bg-[#D3968C] text-[#0A3323] font-extrabold shadow-md' : 'text-[#F7F4D5]/80 hover:text-[#F7F4D5]'
              }`}
            >
              All India ({destinations.length})
            </button>
            <button
              onClick={() => setFilterRegion('State')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                filterRegion === 'State' ? 'bg-[#D3968C] text-[#0A3323] font-extrabold shadow-md' : 'text-[#F7F4D5]/80 hover:text-[#F7F4D5]'
              }`}
            >
              States
            </button>
            <button
              onClick={() => setFilterRegion('Union Territory')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                filterRegion === 'Union Territory' ? 'bg-[#D3968C] text-[#0A3323] font-extrabold shadow-md' : 'text-[#F7F4D5]/80 hover:text-[#F7F4D5]'
              }`}
            >
              UTs
            </button>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#105666]/60 hover:bg-[#D3968C] text-[#F7F4D5] hover:text-[#0A3323] border border-[#839958]/50 transition-all shadow-md cursor-pointer"
              aria-label="Previous Destination"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#105666]/60 hover:bg-[#D3968C] text-[#F7F4D5] hover:text-[#0A3323] border border-[#839958]/50 transition-all shadow-md cursor-pointer"
              aria-label="Next Destination"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Matched Destination Cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              isSelected={selectedDestination?.id === dest.id}
              onSelect={onSelectDestination}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 px-6 rounded-3xl bg-[#105666]/30 border border-[#839958]/40">
          <Sparkles className="w-10 h-10 text-[#D3968C] mx-auto mb-4" />
          <h3 className="font-editorial text-2xl font-extrabold uppercase text-[#F7F4D5] mb-2">
            NO DESTINATIONS MATCH THIS FILTER
          </h3>
          <p className="text-sm text-[#F7F4D5]/80 max-w-md mx-auto">
            Try switching to "All India" above, or adjust your interests in the hero section to discover matching places.
          </p>
        </div>
      )}
    </section>
  );
};
