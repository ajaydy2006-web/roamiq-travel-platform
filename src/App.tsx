import React, { useState, useRef, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AiTransitionModal } from './components/AiTransitionModal';
import { DestinationCarousel } from './components/DestinationCarousel';
import { HiddenGemsSection } from './components/HiddenGemsSection';
import { FamousThingsSection } from './components/FamousThingsSection';
import { FestivalsSection } from './components/FestivalsSection';
import { AvailabilitySection } from './components/AvailabilitySection';
import { ItineraryTimeline } from './components/ItineraryTimeline';
import { TransportHotelHub } from './components/TransportHotelHub';
import { BudgetIntelligence } from './components/BudgetIntelligence';
import { WeatherCrowdHub } from './components/WeatherCrowdHub';
import { TravelRiskHub } from './components/TravelRiskHub';
import { AiTranslator } from './components/AiTranslator';
import { AdaptiveReplanningDemo } from './components/AdaptiveReplanningDemo';
import { WhatIfPlanner } from './components/WhatIfPlanner';
import { TravelScoreDashboard } from './components/TravelScoreDashboard';

import { Destination, UserTripQuery, FestivalEvent, ItineraryDay, HotelOption, TransportOption } from './types/travel';
import { recommendationService, itineraryService } from './services/roamServices';
import { getDestinationBackground } from './utils/themeImages';
import { Compass, Heart } from 'lucide-react';

/*
 * STRICT LINEAR JOURNEY FLOW
 *
 * 0  HERO only — absolutely nothing else on the page
 * 1  AI thinking modal
 * 2  Discover matching destinations
 * 3  Destination selected → Hidden Gems + Local Famous Things
 * 4  Festivals + Weather + Availability
 * 5  AI Itinerary generated
 * 6  Hotels + Transport + Routes
 * 7  Budget breakdown
 * 8  Safety + Risk + Translator
 * 9  Adapt & Replan (What-If + Replanning + Dashboard + Footer)
 *
 * NOTHING from a later step is ever visible or hinted at.
 */

export function App() {
  const [step, setStep] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const [query, setQuery] = useState<UserTripQuery>({
    promptText: '',
    selectedInterests: [],
    budget: 15000,
    durationDays: 4,
    travelGroup: 'Couple',
    travelStyle: 'Balanced',
    dates: 'Oct 12 - Oct 16',
  });

  const [isAiTransitioning, setIsAiTransitioning] = useState(false);
  const [recommendations, setRecommendations] = useState<Destination[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [currentItinerary, setCurrentItinerary] = useState<ItineraryDay[]>([]);
  const [addedFestivals, setAddedFestivals] = useState<string[]>([]);
  const [bookedHotel, setBookedHotel] = useState<HotelOption | null>(null);
  const [bookedTransport, setBookedTransport] = useState<TransportOption | null>(null);

  // Scroll refs
  const refs = {
    discover: useRef<HTMLDivElement>(null),
    destDetail: useRef<HTMLDivElement>(null),
    festivals: useRef<HTMLDivElement>(null),
    itinerary: useRef<HTMLDivElement>(null),
    logistics: useRef<HTMLDivElement>(null),
    budget: useRef<HTMLDivElement>(null),
    safety: useRef<HTMLDivElement>(null),
    finalize: useRef<HTMLDivElement>(null),
  };

  const scrollTo = useCallback((ref: React.RefObject<HTMLDivElement | null>) => {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // ── 0 → 1 : "FIND MY PERFECT TRIP" clicked ──
  const handleFindTrip = (newQuery: UserTripQuery) => {
    setQuery(newQuery);
    setIsAiTransitioning(true);
    setStep(1);
  };

  // ── 1 → 2 : AI transition complete ──
  const handleAiTransitionComplete = () => {
    setIsAiTransitioning(false);
    const recs = recommendationService.getRecommendations(query);
    setRecommendations(recs);
    setSelectedDestination(null);
    setStep(2);
    scrollTo(refs.discover);
  };

  // ── 2 → 3 : User selects a destination ──
  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    setCurrentItinerary(dest.itinerary);
    setAddedFestivals([]);
    setBookedHotel(null);
    setBookedTransport(null);
    setStep(3);
    scrollTo(refs.destDetail);
  };

  const handleBookHotel = (hotel: HotelOption) => {
    setBookedHotel(prev => (prev?.id === hotel.id ? null : hotel));
  };

  const handleBookTransport = (transport: TransportOption) => {
    setBookedTransport(prev => (prev?.mode === transport.mode && prev?.provider === transport.provider ? null : transport));
  };



  // Toggle festival
  const handleToggleFestival = (event: FestivalEvent) => {
    if (addedFestivals.includes(event.id)) {
      setAddedFestivals(prev => prev.filter(id => id !== event.id));
    } else {
      setAddedFestivals(prev => [...prev, event.id]);
      setCurrentItinerary(prev =>
        itineraryService.addStop(prev, 0, {
          id: `fest-${event.id}`, time: '07:00 PM',
          activity: `Festival: ${event.name}`, location: event.location,
          category: 'Festival', cost: 500, travelTime: '20 min',
          crowd: event.crowdImpact, risk: 'LOW', available: true,
        }),
      );
    }
  };

  const handleModifyStop = (dayIdx: number, stopId: string, action: 'REMOVE' | 'REORDER_UP' | 'REORDER_DOWN') =>
    setCurrentItinerary(prev => itineraryService.modifyStop(prev, dayIdx, stopId, action));

  const handleApplyReplanning = (newIt: ItineraryDay[]) => setCurrentItinerary(newIt);

  const handleRebuildTrip = (newQuery: UserTripQuery) => {
    setQuery(newQuery);
    const recs = recommendationService.getRecommendations(newQuery);
    setRecommendations(recs);
    setSelectedDestination(null);
    setBookedHotel(null);
    setBookedTransport(null);
    setStep(2);
    scrollTo(refs.discover);
  };

  // ── Contextual "next step" button ──
  const NextStepBtn = ({ onClick, label }: { onClick: () => void; label: string }) => (
    <div className="flex justify-center py-14">
      <button
        onClick={onClick}
        className="px-10 py-4 bg-[#D3968C] hover:bg-[#E2A69C] text-[#0A3323] font-editorial text-base sm:text-lg font-black uppercase tracking-wider rounded-2xl shadow-xl shadow-[#D3968C]/30 hover:scale-[1.02] transition-all cursor-pointer"
      >
        {label} →
      </button>
    </div>
  );

  const activeBgTheme = getDestinationBackground(selectedDestination, query);

  return (
    <div className="min-h-screen bg-[#0A3323] text-[#F7F4D5] font-sans selection:bg-[#D3968C] selection:text-[#0A3323]">

      {/* Navbar — only shows links to sections that are already unlocked */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} currentStep={step} />

      {/* ═══ STEP 0 : HERO — the ONLY thing on the landing page ═══ */}
      <HeroSection onFindTrip={handleFindTrip} />

      {/* ═══ STEP 1 : AI modal overlay ═══ */}
      <AiTransitionModal isOpen={isAiTransitioning} onComplete={handleAiTransitionComplete} />

      {/* ═══ NON-HERO JOURNEY CONTAINER WITH DYNAMIC REGION BACKGROUND ═══ */}
      {step >= 2 && (
        <div className="relative transition-all duration-700">
          {/* Dynamic Background Image Layer */}
          <div
            className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${activeBgTheme.url})`,
              filter: 'brightness(0.3) contrast(1.15) saturate(1.2)'
            }}
          />

          {/* Dark Ambient Botanical Gradient Mask for Pristine Contrast */}
          <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#0A3323]/85 via-[#0A3323]/90 to-[#0A3323] backdrop-blur-[2px]" />

          {/* Dynamic Region Theme Badge */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A3323]/90 border border-[#D3968C]/40 text-[#D3968C] text-xs font-bold uppercase tracking-wider shadow-2xl backdrop-blur-md">
              <span className="text-base">{activeBgTheme.icon}</span>
              <span>DYNAMIC BACKGROUND: <strong className="text-[#F7F4D5]">{activeBgTheme.label}</strong></span>
            </div>
          </div>

          <div className="relative z-10">
            {/* ═══ STEP 2 : DISCOVER MATCHING DESTINATIONS ═══ */}
            <div ref={refs.discover}>
              <DestinationCarousel
                destinations={recommendations}
                selectedDestination={selectedDestination}
                onSelectDestination={handleSelectDestination}
              />
            </div>

            {/* ═══ STEP 3 : EXPLORE HIDDEN GEMS + LOCAL EXPERIENCES ═══ */}
            {step >= 3 && selectedDestination && (
              <div ref={refs.destDetail}>
                <HiddenGemsSection destination={selectedDestination} />
                <FamousThingsSection destination={selectedDestination} />

                {step === 3 && (
                  <NextStepBtn onClick={() => { setStep(4); scrollTo(refs.festivals); }} label="CHECK FESTIVALS & WEATHER" />
                )}
              </div>
            )}

            {/* ═══ STEP 4 : FESTIVALS + WEATHER + AVAILABILITY ═══ */}
            {step >= 4 && selectedDestination && (
              <div ref={refs.festivals}>
                <FestivalsSection destination={selectedDestination} addedFestivals={addedFestivals} onToggleFestival={handleToggleFestival} />
                <WeatherCrowdHub destination={selectedDestination} />
                <AvailabilitySection destination={selectedDestination} />

                {step === 4 && (
                  <NextStepBtn onClick={() => { setStep(5); scrollTo(refs.itinerary); }} label="GENERATE AI ITINERARY" />
                )}
              </div>
            )}

            {/* ═══ STEP 5 : AI ITINERARY ═══ */}
            {step >= 5 && selectedDestination && (
              <div ref={refs.itinerary}>
                <ItineraryTimeline destination={selectedDestination} itinerary={currentItinerary} onModifyStop={handleModifyStop} />

                {step === 5 && (
                  <NextStepBtn onClick={() => { setStep(6); scrollTo(refs.logistics); }} label="OPTIMIZE HOTELS & TRANSPORT" />
                )}
              </div>
            )}

            {/* ═══ STEP 6 : HOTELS + TRANSPORT + ROUTES ═══ */}
            {step >= 6 && selectedDestination && (
              <div ref={refs.logistics}>
                <TransportHotelHub
                  destination={selectedDestination}
                  bookedHotel={bookedHotel}
                  bookedTransport={bookedTransport}
                  onBookHotel={handleBookHotel}
                  onBookTransport={handleBookTransport}
                />

                {step === 6 && (
                  <NextStepBtn onClick={() => { setStep(7); scrollTo(refs.budget); }} label="CHECK BUDGET" />
                )}
              </div>
            )}

            {/* ═══ STEP 7 : BUDGET INTELLIGENCE ═══ */}
            {step >= 7 && selectedDestination && (
              <div ref={refs.budget}>
                <BudgetIntelligence
                  destination={selectedDestination}
                  query={query}
                  bookedHotel={bookedHotel}
                  bookedTransport={bookedTransport}
                />

                {step === 7 && (
                  <NextStepBtn onClick={() => { setStep(8); scrollTo(refs.safety); }} label="CHECK SAFETY & LOCAL INTELLIGENCE" />
                )}
              </div>
            )}

            {/* ═══ STEP 8 : SAFETY + RISK (no translator yet) ═══ */}
            {step >= 8 && selectedDestination && (
              <div ref={refs.safety}>
                <TravelRiskHub destination={selectedDestination} />

                {step === 8 && (
                  <NextStepBtn onClick={() => { setStep(9); scrollTo(refs.finalize); }} label="SPEAK LIKE A LOCAL — TRANSLATOR" />
                )}
              </div>
            )}

            {/* ═══ STEP 9 : TRANSLATOR — only after user clicks ═══ */}
            {step >= 9 && selectedDestination && (
              <div ref={refs.finalize}>
                <AiTranslator destination={selectedDestination} />

                {step === 9 && (
                  <NextStepBtn onClick={() => { setStep(10); scrollTo(refs.finalize); }} label="READY TO TRAVEL — FINAL DASHBOARD" />
                )}
              </div>
            )}

            {/* ═══ STEP 10 : ADAPT & REPLAN + DASHBOARD + FOOTER ═══ */}
            {step >= 10 && selectedDestination && (
              <div>
                <AdaptiveReplanningDemo destination={selectedDestination} onApplyReplanning={handleApplyReplanning} />
                <WhatIfPlanner currentQuery={query} onRebuildTrip={handleRebuildTrip} />
                <TravelScoreDashboard destination={selectedDestination} query={query} onNavigateTab={handleNavigate} />

                {/* Footer — only appears at the very end */}
                <footer className="mt-24 border-t border-[#105666] bg-[#0A3323]/95 py-16 px-4 sm:px-6 lg:px-8 text-[#F7F4D5]/70 backdrop-blur-md">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#D3968C] flex items-center justify-center"><Compass className="w-5 h-5 text-[#0A3323]" /></div>
                        <span className="font-editorial text-2xl font-black tracking-wider text-[#F7F4D5]">ROAM<span className="text-[#D3968C]">IQ</span></span>
                      </div>
                      <p className="text-xs text-[#F7F4D5]/80 max-w-md font-serif-accent italic leading-relaxed">
                        An AI travel decision engine. Discover, compare, experience, protect, and adapt. Travel Beyond the Tourist Map.
                      </p>
                      <div className="text-[11px] text-[#839958] font-mono">All 28 Indian States & 8 Union Territories • Hackathon Edition</div>
                    </div>
                    <div />
                    <div className="text-right space-y-2 flex flex-col items-end justify-end">
                      <span className="text-xs text-[#F7F4D5]/70 font-sans">© 2026 RoamIQ Platform</span>
                      <span className="flex items-center gap-1 text-xs text-[#F7F4D5]/80">Built with <Heart className="w-3.5 h-3.5 text-[#D3968C] fill-[#D3968C]" /> for Travel Discovery</span>
                    </div>
                  </div>
                </footer>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
