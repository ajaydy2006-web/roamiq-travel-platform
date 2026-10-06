import React, { useState } from 'react';
import { Sparkles, Calendar, Wallet, Users, Compass, SlidersHorizontal, Check } from 'lucide-react';
import { UserTripQuery, TravelGroup, TravelStyle } from '../types/travel';

interface HeroSectionProps {
  onFindTrip: (query: UserTripQuery) => void;
}

const INTEREST_CHIPS = [
  "SUNRISE", "SUNSET", "MOUNTAINS", "NATURE", "TRIBAL", "FOOD", 
  "HISTORY", "ADVENTURE", "SPIRITUAL", "HIDDEN GEMS", "PHOTOGRAPHY", 
  "CULTURE", "FORESTS", "WATERFALLS", "BEACHES", "WILDLIFE", 
  "PEACE & RELAXATION", "LOCAL MARKETS", "STREET FOOD", "OFFBEAT TRAVEL"
];

const PRESET_PROMPTS = [
  "I want tribal culture, beautiful sunrises, local food and peaceful places. ₹15,000. 4 days.",
  "Looking for misty mountain tea gardens, waterfalls, organic coffee and homestays.",
  "Spiritual heritage, ancient stone temples, river aarti and famous local street food.",
  "Romantic secluded tropical beach escape with coral diving and fresh seafood shacks."
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onFindTrip }) => {
  const [promptText, setPromptText] = useState(
    "I want tribal culture, beautiful sunrises, local food and peaceful places."
  );
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "TRIBAL", "SUNRISE", "NATURE", "FOOD"
  ]);
  const [budget, setBudget] = useState<number>(15000);
  const [durationDays, setDurationDays] = useState<number>(4);
  const [travelGroup, setTravelGroup] = useState<TravelGroup>('Couple');
  const [travelStyle, setTravelStyle] = useState<TravelStyle>('Balanced');
  const [dates, setDates] = useState<string>("Oct 12 - Oct 16");

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSelectPreset = (preset: string) => {
    setPromptText(preset);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFindTrip({
      promptText,
      selectedInterests,
      budget,
      durationDays,
      travelGroup,
      travelStyle,
      dates
    });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Video Background - 100vh, loop, muted, autoplay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
        />
        {/* Cinematic Vignette & Botanical Overlay */}
        <div className="absolute inset-0 hero-vignette z-10" />
      </div>

      {/* Floating Retro Editorial Poster Details (Image 1 & 2 inspired) */}
      <div className="absolute top-28 left-6 sm:left-12 z-20 hidden md:flex flex-col text-left space-y-1 font-mono text-[10px] text-[#F7F4D5]/70 tracking-widest pointer-events-none">
        <span className="flex items-center gap-1"><span className="text-[#D3968C]">*</span> ROAMIQ PLATFORM</span>
        <span>LAT: 20.5937° N, LONG: 78.9629° E</span>
        <span>ALL 28 STATES & 8 UTS</span>
      </div>

      <div className="absolute top-28 right-6 sm:right-12 z-20 hidden md:flex flex-col text-right space-y-1 font-mono text-[10px] text-[#F7F4D5]/70 tracking-widest pointer-events-none">
        <span className="flex items-center justify-end gap-1"><span className="text-[#839958]">*</span> EDITION 2026</span>
        <span>AI DECISION ENGINE</span>
        <span>MEMORIES REMAIN.</span>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-20 max-w-5xl w-full mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow Tag / Floating Pill (Image 2 style) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A3323]/90 border border-[#D3968C]/50 backdrop-blur-md text-[#D3968C] text-xs font-bold uppercase tracking-widest mb-4 shadow-xl animate-pulse-glow">
          <Sparkles className="w-3.5 h-3.5 text-[#D3968C]" />
          <span>AI Travel Intelligence Engine</span>
          <span className="text-[#839958]">*</span>
        </div>

        {/* Hero High-Fashion Editorial Headline (Image 1 & 2 inspired typography) */}
        <div className="mb-4 relative">
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#F7F4D5] leading-[0.95] drop-shadow-2xl">
            DESCRIBE <br />
            <span className="relative inline-block text-[#D3968C] font-editorial italic font-normal px-2">
              YOUR DREAM
              <span className="font-script text-4xl sm:text-6xl text-[#F7F4D5] absolute -top-4 sm:-top-8 -right-8 sm:-right-12 transform rotate-[-6deg] font-normal drop-shadow-md">
                Experience
              </span>
            </span> <br />
            TRIP<span className="text-[#839958]">.</span>
          </h1>
        </div>

        {/* Editorial Subheadline */}
        <p className="max-w-2xl text-[#F7F4D5]/90 text-base sm:text-xl font-serif-accent italic leading-relaxed mb-8 drop-shadow-md">
          Tell us what you want to experience. We’ll discover matching places across all Indian states & Union Territories based on your interests, budget and time.
        </p>

        {/* Form Input Container (Glassmorphic Box with Rosy & Dark Green Palette) */}
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-4xl glass-panel-rosy rounded-3xl p-5 sm:p-7 shadow-2xl text-left border border-[#D3968C]/30 relative overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle Ambient Glow inside form */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#D3968C]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Conversational Textarea Input */}
          <div className="mb-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D3968C] mb-2 flex items-center gap-1.5 font-title">
              <Compass className="w-4 h-4 text-[#839958]" />
              1. What experience are you dreaming of?
            </label>
            <textarea
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="I want tribal culture, beautiful sunrises, local food and peaceful places..."
              className="w-full bg-[#0A3323]/90 border border-[#839958]/50 focus:border-[#D3968C] rounded-2xl p-4 text-[#F7F4D5] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D3968C]/40 transition-all resize-none shadow-inner placeholder-[#F7F4D5]/40 font-sans"
              rows={3}
            />
          </div>

          {/* Preset Prompts Pills */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#839958] uppercase tracking-wider">Quick Prompts:</span>
            {PRESET_PROMPTS.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectPreset(preset)}
                className="text-xs text-[#F7F4D5]/90 hover:text-[#0A3323] bg-[#105666]/60 hover:bg-[#F7F4D5] border border-[#839958]/40 rounded-full px-3 py-1 transition-all line-clamp-1 cursor-pointer font-medium"
              >
                "{preset.substring(0, 38)}..."
              </button>
            ))}
          </div>

          {/* Interest Chips Section */}
          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#F7F4D5] mb-2 font-title">
              2. Select Your Experience Vibe (Multi-select)
            </label>
            <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto no-scrollbar p-1">
              {INTEREST_CHIPS.map((chip) => {
                const isSelected = selectedInterests.includes(chip);
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => toggleInterest(chip)}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 uppercase tracking-wider cursor-pointer ${
                      isSelected
                        ? 'bg-[#D3968C] text-[#0A3323] shadow-md shadow-[#D3968C]/40 scale-105 font-extrabold'
                        : 'bg-[#0A3323]/80 text-[#F7F4D5]/80 border border-[#839958]/50 hover:border-[#D3968C] hover:text-[#F7F4D5]'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#0A3323] stroke-[3]" />}
                    {chip}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Control Grid (Dates, Budget, Group, Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 pt-4 border-t border-[#105666]/60">
            
            {/* Travel Dates */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#839958] mb-1 flex items-center gap-1 font-title">
                <Calendar className="w-3.5 h-3.5 text-[#D3968C]" />
                Dates & Duration
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full bg-[#0A3323]/90 border border-[#839958]/60 text-[#F7F4D5] text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-[#D3968C]"
                />
                <select
                  value={durationDays}
                  onChange={(e) => setDurationDays(Number(e.target.value))}
                  className="bg-[#0A3323]/90 border border-[#839958]/60 text-[#D3968C] text-xs font-bold rounded-xl px-2 py-2 focus:outline-none"
                >
                  <option value={3}>3 Days</option>
                  <option value={4}>4 Days</option>
                  <option value={5}>5 Days</option>
                  <option value={7}>7 Days</option>
                </select>
              </div>
            </div>

            {/* Budget Input Slider */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#839958] mb-1 flex items-center justify-between font-title">
                <span className="flex items-center gap-1">
                  <Wallet className="w-3.5 h-3.5 text-[#D3968C]" />
                  Max Budget
                </span>
                <span className="text-[#D3968C] font-bold font-mono">₹{budget.toLocaleString('en-IN')}</span>
              </label>
              <input
                type="range"
                min={5000}
                max={50000}
                step={1000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-[#D3968C] cursor-pointer mt-2"
              />
            </div>

            {/* Travelling With */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#839958] mb-1 flex items-center gap-1 font-title">
                <Users className="w-3.5 h-3.5 text-[#D3968C]" />
                Travelling With
              </label>
              <select
                value={travelGroup}
                onChange={(e) => setTravelGroup(e.target.value as TravelGroup)}
                className="w-full bg-[#0A3323]/90 border border-[#839958]/60 text-[#F7F4D5] text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-[#D3968C]"
              >
                <option value="Solo">Solo Traveler</option>
                <option value="Couple">Couple</option>
                <option value="Family">Family</option>
                <option value="Friends">Group of Friends</option>
              </select>
            </div>

            {/* Travel Style */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#839958] mb-1 flex items-center gap-1 font-title">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#D3968C]" />
                Travel Pace
              </label>
              <select
                value={travelStyle}
                onChange={(e) => setTravelStyle(e.target.value as TravelStyle)}
                className="w-full bg-[#0A3323]/90 border border-[#839958]/60 text-[#F7F4D5] text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-[#D3968C]"
              >
                <option value="Relaxed">Relaxed & Leisurely</option>
                <option value="Balanced">Balanced Experience</option>
                <option value="Packed">Packed & Action-Filled</option>
              </select>
            </div>

          </div>

          {/* Submit Rosy Brown Editorial CTA Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-[#D3968C] hover:bg-[#E2A69C] text-[#0A3323] font-editorial text-2xl font-black uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-xl shadow-[#D3968C]/30 hover:scale-[1.01] flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>FIND MY PERFECT TRIP</span>
            <span className="text-2xl">→</span>
          </button>
        </form>

      </div>
    </section>
  );
};
