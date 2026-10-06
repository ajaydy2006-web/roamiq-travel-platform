import React from 'react';
import { Destination } from '../types/travel';
import { weatherService } from '../services/roamServices';
import { Sun, CloudRain, Moon, Users, CloudSun } from 'lucide-react';

interface WeatherCrowdHubProps {
  destination: Destination;
}

export const WeatherCrowdHub: React.FC<WeatherCrowdHubProps> = ({ destination }) => {
  const forecast = weatherService.getWeatherForecast();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel-forest rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden animate-fade-in-up">
        
        {/* Ambient orb */}
        <div className="ambient-orb-teal -top-10 -right-10" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 relative z-10">
          <div className="animate-slide-in-left">
            <div className="badge-editorial mb-2">
              <CloudSun className="w-3.5 h-3.5" />
              Microclimate & Density Intelligence
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#F7F4D5]">
              WEATHER & <span className="text-[#D3968C] italic">CROWD FORECAST</span>
            </h2>
            <p className="text-[#F7F4D5]/70 text-sm mt-1 font-serif-accent">
              Hourly weather & crowd density recommendations for smooth trip execution.
            </p>
          </div>

          <div className="flex items-center gap-2 animate-slide-in-right">
            <span className="text-xs text-[#F7F4D5]/50 font-bold tracking-wider">BEST VISITING WINDOW:</span>
            <span className="px-3 py-1 rounded-lg bg-[#D3968C] text-[#0A3323] text-xs font-extrabold uppercase shadow-lg shadow-[#D3968C]/30">
              06:00 AM - 11:30 AM
            </span>
          </div>
        </div>

        {/* Hourly Slot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children relative z-10">
          {forecast.map((slot, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 space-y-4 card-hover-lift hover-border-glow">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7F4D5]/50 block">{slot.timeSlot}</span>
                  <h3 className="font-editorial text-xl font-bold text-[#F7F4D5] uppercase mt-0.5">{slot.condition}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#0A3323]/80 border border-[#105666]/40 flex items-center justify-center text-[#D3968C] font-bold text-lg">
                  {slot.temp}
                </div>
              </div>

              {/* Crowd Indicator */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0A3323]/60 border border-[#105666]/30 text-xs">
                <span className="text-[#F7F4D5]/50 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#D3968C]" />
                  Crowd Density:
                </span>
                <span className={`font-bold ${slot.crowd === 'LOW' ? 'text-[#839958]' : 'text-[#D3968C]'}`}>
                  {slot.crowd}
                </span>
              </div>

              {/* Smart Advice */}
              <div className="p-3 rounded-xl bg-[#D3968C]/10 border border-[#D3968C]/25 text-xs text-[#F7F4D5]/80 font-serif-accent text-sm">
                "{slot.status}"
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
