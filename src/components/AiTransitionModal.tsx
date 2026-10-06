import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, ShieldCheck, CloudSun, MapPin } from 'lucide-react';

interface AiTransitionModalProps {
  isOpen: boolean;
  onComplete: () => void;
}

const STAGES = [
  { text: "UNDERSTANDING YOUR TRAVEL VIBE...", icon: Compass, sub: "Analyzing interest vectors: Tribal, Sunrise, Food, Peace" },
  { text: "FINDING PLACES THAT MATCH...", icon: MapPin, sub: "Evaluating all 28 States & 8 Union Territories datasets" },
  { text: "SEARCHING HIDDEN GEMS...", icon: Sparkles, sub: "Filtering low-crowd secluded vistas within 20km radius" },
  { text: "CHECKING EVENTS, WEATHER & LOCAL EXPERIENCES...", icon: CloudSun, sub: "Checking seasonal festivals, monsoon forecasts & haat dates" },
  { text: "BUILDING YOUR PERFECT TRIP...", icon: ShieldCheck, sub: "Optimizing budget, transport routes & hotel values" }
];

export const AiTransitionModal: React.FC<AiTransitionModalProps> = ({ isOpen, onComplete }) => {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStage(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev < STAGES.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800);
          return prev;
        }
      });
    }, 900);

    return () => clearInterval(interval);
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  const StageIcon = STAGES[currentStage].icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A3323]/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="max-w-xl w-full bg-[#0A3323] border border-[#D3968C]/50 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Glowing Ambient Radial */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D3968C]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Animated Icon Container */}
          <motion.div
            key={currentStage}
            initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#D3968C] text-[#0A3323] flex items-center justify-center shadow-lg shadow-[#D3968C]/30"
          >
            <StageIcon className="w-10 h-10 text-[#0A3323] animate-bounce" />
          </motion.div>

          {/* Eyebrow */}
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D3968C] mb-2 block font-editorial">
            RoamIQ Decision Engine
          </span>

          {/* Main Stage Text */}
          <motion.h2
            key={`title-${currentStage}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-editorial text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F7F4D5] mb-3"
          >
            {STAGES[currentStage].text}
          </motion.h2>

          {/* Subtext explanation */}
          <motion.p
            key={`sub-${currentStage}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs sm:text-sm text-[#F7F4D5]/80 font-serif-accent italic mb-8"
          >
            {STAGES[currentStage].sub}
          </motion.p>

          {/* Progress Bar */}
          <div className="w-full bg-[#105666] rounded-full h-2 mb-4 overflow-hidden border border-[#839958]/30">
            <motion.div
              className="bg-[#D3968C] h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStage + 1) / STAGES.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] text-[#839958] font-mono uppercase tracking-wider font-bold">
            <span>Stage {currentStage + 1} of {STAGES.length}</span>
            <span>{Math.round(((currentStage + 1) / STAGES.length) * 100)}% Complete</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
