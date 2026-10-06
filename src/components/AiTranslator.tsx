import React, { useState } from 'react';
import { Destination, TranslationPhrase } from '../types/travel';
import { Languages, Volume2, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';

interface AiTranslatorProps {
  destination: Destination;
}

const CATEGORIES = [
  'ALL',
  'GREETINGS',
  'FOOD & MARKET',
  'DIRECTIONS',
  'BARGAINING',
  'EMERGENCY'
];

export const AiTranslator: React.FC<AiTranslatorProps> = ({ destination }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [customSearch, setCustomSearch] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [customTranslation, setCustomTranslation] = useState<TranslationPhrase | null>(null);

  // Fallback phrases matching Image 2 format if destination list is concise
  const defaultPhrases: TranslationPhrase[] = (destination.translatorPhrases && destination.translatorPhrases.length > 0)
    ? destination.translatorPhrases.map(p => ({
        ...p,
        category: (p.category === 'Greetings' ? 'GREETINGS' :
                   p.category === 'Dining' || p.category === 'Shopping' ? 'FOOD & MARKET' :
                   p.category === 'Direction' ? 'DIRECTIONS' : p.category as any),
        pronunciation: p.pronunciation || `Pronunciation: ${p.phonetic}`,
        usageNote: p.usageNote || (p.category === 'Greetings' ? 'Respectful universal greeting' : 'Asking price politely in markets')
      }))
    : [
        {
          id: 'p1',
          english: '"Hello / Greetings"',
          localScript: 'నమస్కారం',
          phonetic: 'Namaskāram',
          pronunciation: 'Pronunciation: Nah-mas-KAA-ram',
          usageNote: 'Respectful universal greeting',
          category: 'GREETINGS'
        },
        {
          id: 'p2',
          english: '"How much does this cost?"',
          localScript: 'ఇది ఎంత ఖరీదు?',
          phonetic: 'Idi entha kharidu?',
          pronunciation: 'Pronunciation: Ih-dee EN-tuh kuh-REE-doo?',
          usageNote: 'Asking price politely in markets',
          category: 'FOOD & MARKET'
        },
        {
          id: 'p3',
          english: '"Where can I find drinking water?"',
          localScript: 'మంచినీళ్ళు ఎక్కడ దొరుకుతాయి?',
          phonetic: 'Manchineellu ekkada dorukutaayi?',
          pronunciation: 'Pronunciation: Mun-chi-NEE-loo ek-kuh-duh do-ru-ku-TAA-yee?',
          usageNote: 'Essential hydration inquiry',
          category: 'DIRECTIONS'
        },
        {
          id: 'p4',
          english: '"Can you reduce the price a little?"',
          localScript: 'కొంచెం తగ్గిస్తారా?',
          phonetic: 'Konchem thaggistaaraa?',
          pronunciation: 'Pronunciation: Kon-chem thug-gis-TAA-raa?',
          usageNote: 'Polite bargaining phrase',
          category: 'BARGAINING'
        }
      ];

  const handleCopy = (phrase: TranslationPhrase) => {
    navigator.clipboard.writeText(`${phrase.english} - ${phrase.localScript} (${phrase.phonetic})`);
    setCopiedId(phrase.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleSpeak = (phrase: TranslationPhrase) => {
    setPlayingId(phrase.id);
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(phrase.phonetic);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
    setTimeout(() => setPlayingId(null), 2000);
  };

  const handleTranslateClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSearch.trim()) return;

    // Simulate instant AI Translation
    const newCustom: TranslationPhrase = {
      id: `custom-${Date.now()}`,
      english: `"${customSearch}"`,
      localScript: destination.state.includes('Andhra') ? 'ఇది ఎక్కడ ఉంది?' : 'यह कहाँ है?',
      phonetic: destination.state.includes('Andhra') ? 'Idi ekkada undhi?' : 'Yeh kahan hai?',
      pronunciation: `Pronunciation: ${customSearch} (Native Dialect)`,
      usageNote: 'AI Custom Generated Translation',
      category: 'FOOD & MARKET'
    };

    setCustomTranslation(newCustom);
  };

  const filteredPhrases = [
    ...(customTranslation ? [customTranslation] : []),
    ...defaultPhrases
  ].filter(p => selectedCategory === 'ALL' || p.category === selectedCategory);

  return (
    <section id="translator" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0A3323]/95 border border-[#105666] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden backdrop-blur-xl">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D3968C]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Tag & Title (Image 2) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D3968C]/15 border border-[#D3968C]/40 text-[#D3968C] text-xs font-bold uppercase tracking-widest shadow-md">
            <MessageSquare className="w-3.5 h-3.5 text-[#D3968C]" />
            LINGUISTIC COMPANION *
          </div>

          <h2 className="font-editorial text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#F7F4D5]">
            SPEAK LIKE A <br />
            <span className="font-script text-5xl sm:text-7xl text-[#D3968C] lowercase italic font-normal px-2">
              local.
            </span>
          </h2>

          <p className="font-serif-accent text-lg sm:text-xl text-[#F7F4D5]/80 max-w-2xl mx-auto leading-relaxed">
            Break language barriers across {destination.state} and tribal frontiers. Accurate phonetic guides and synthesized native audio at your fingertips.
          </p>
        </div>

        {/* Search / Translation Input Box (Image 2) */}
        <form onSubmit={handleTranslateClick} className="max-w-3xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-center bg-[#0A3323] border border-[#105666] focus-within:border-[#D3968C] rounded-2xl p-2 shadow-2xl transition-all gap-2">
            <input
              type="text"
              value={customSearch}
              onChange={(e) => setCustomSearch(e.target.value)}
              placeholder="Type any travel phrase (e.g. 'Where can I find drinking water?')..."
              className="w-full bg-transparent px-4 py-3 text-[#F7F4D5] text-sm sm:text-base focus:outline-none placeholder-[#F7F4D5]/40 font-sans"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#D3968C] hover:bg-[#E2A69C] text-[#0A3323] font-editorial text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg shadow-[#D3968C]/30 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 text-[#0A3323]" />
              <span>TRANSLATE</span>
            </button>
          </div>
        </form>

        {/* Category Filter Chips (Image 2) */}
        <div className="flex flex-wrap justify-center items-center gap-2 relative z-10 pt-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-editorial text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D3968C] text-[#0A3323] shadow-lg shadow-[#D3968C]/30 scale-105'
                  : 'bg-[#0A3323] text-[#F7F4D5]/70 border border-[#105666] hover:border-[#839958] hover:text-[#F7F4D5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Phrase Cards Grid (Image 2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-4">
          {filteredPhrases.map((phrase) => (
            <div
              key={phrase.id}
              className="bg-[#0A3323] border border-[#105666] hover:border-[#D3968C]/50 rounded-2xl p-6 space-y-4 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Sub-note */}
                <div className="flex items-center justify-between border-b border-[#105666] pb-3 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#839958] px-2.5 py-1 rounded bg-[#839958]/15 border border-[#839958]/30">
                    {phrase.category}
                  </span>
                  <span className="text-[11px] font-serif-accent italic text-[#F7F4D5]/60">
                    {phrase.usageNote}
                  </span>
                </div>

                {/* English Phrase */}
                <div className="mb-4">
                  <h4 className="font-editorial text-xl font-extrabold text-[#F7F4D5]">{phrase.english}</h4>
                </div>

                {/* Native Script & Phonetic Details */}
                <div className="space-y-1.5 p-4 rounded-xl bg-[#105666]/30 border border-[#839958]/20">
                  <div className="text-3xl font-black text-[#D3968C] font-sans tracking-wide">
                    {phrase.localScript}
                  </div>
                  <div className="text-sm font-bold text-[#F7F4D5] font-serif-accent pt-1">
                    {phrase.phonetic}
                  </div>
                  <div className="text-xs text-[#839958] font-mono italic">
                    {phrase.pronunciation}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-[#105666]">
                <button
                  onClick={() => handleSpeak(phrase)}
                  className={`flex-1 py-2.5 px-4 rounded-xl font-editorial text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                    playingId === phrase.id
                      ? 'bg-[#839958] text-[#0A3323]'
                      : 'bg-[#D3968C] hover:bg-[#E2A69C] text-[#0A3323] shadow-[#D3968C]/20'
                  }`}
                >
                  <Volume2 className={`w-4 h-4 ${playingId === phrase.id ? 'animate-bounce' : ''}`} />
                  <span>{playingId === phrase.id ? 'PLAYING NATIVE AUDIO...' : 'LISTEN & SPEAK'}</span>
                </button>

                <button
                  onClick={() => handleCopy(phrase)}
                  className="p-2.5 rounded-xl bg-[#105666]/50 hover:bg-[#105666] text-[#F7F4D5] border border-[#839958]/30 transition-colors cursor-pointer"
                  title="Copy Phrase"
                >
                  {copiedId === phrase.id ? <Check className="w-4 h-4 text-[#839958]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
