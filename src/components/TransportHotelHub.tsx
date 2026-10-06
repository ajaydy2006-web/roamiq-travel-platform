import React, { useState } from 'react';
import { Destination, HotelOption, TransportOption } from '../types/travel';
import { Car, Hotel, Star, Phone, MapPin, Zap, CheckCircle2 } from 'lucide-react';

interface TransportHotelHubProps {
  destination: Destination;
  bookedHotel: HotelOption | null;
  bookedTransport: TransportOption | null;
  onBookHotel: (hotel: HotelOption) => void;
  onBookTransport: (transport: TransportOption) => void;
}

export const TransportHotelHub: React.FC<TransportHotelHubProps> = ({
  destination,
  bookedHotel,
  bookedTransport,
  onBookHotel,
  onBookTransport
}) => {
  const [activeTab, setActiveTab] = useState<'TRANSPORT' | 'HOTEL'>('TRANSPORT');

  return (
    <section id="comparison" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3968C]/15 border border-[#D3968C]/40 text-[#D3968C] text-xs font-bold uppercase tracking-widest mb-3">
          <Zap className="w-3.5 h-3.5 text-[#D3968C]" />
          Smart Logistics & Hospitality Engine *
        </div>
        <h2 className="font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F7F4D5]">
          TRANSPORT & <span className="text-[#D3968C]">HOTEL INTELLIGENCE</span>
        </h2>
        <p className="font-serif-accent text-xl text-[#F7F4D5]/80 mt-2">
          Click <strong className="text-[#D3968C]">"BOOK NOW"</strong> on a ride or hotel to calculate your exact trip budget breakdown.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-[#0A3323]/90 border border-[#839958]/40 rounded-2xl p-1.5 gap-2 backdrop-blur-md">
          <button
            onClick={() => setActiveTab('TRANSPORT')}
            className={`px-6 py-2.5 rounded-xl font-editorial text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'TRANSPORT' ? 'bg-[#D3968C] text-[#0A3323] shadow-lg shadow-[#D3968C]/20' : 'text-[#F7F4D5]/70 hover:text-[#F7F4D5]'
            }`}
          >
            <Car className="w-4 h-4" />
            Transport ({destination.transportOptions.length})
            {bookedTransport && <span className="w-2 h-2 rounded-full bg-[#839958] animate-pulse inline-block ml-1" />}
          </button>
          <button
            onClick={() => setActiveTab('HOTEL')}
            className={`px-6 py-2.5 rounded-xl font-editorial text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'HOTEL' ? 'bg-[#D3968C] text-[#0A3323] shadow-lg shadow-[#D3968C]/20' : 'text-[#F7F4D5]/70 hover:text-[#F7F4D5]'
            }`}
          >
            <Hotel className="w-4 h-4" />
            Hotels ({destination.hotelOptions.length})
            {bookedHotel && <span className="w-2 h-2 rounded-full bg-[#839958] animate-pulse inline-block ml-1" />}
          </button>
        </div>
      </div>

      {/* Transport Tab */}
      {activeTab === 'TRANSPORT' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destination.transportOptions.map((item, idx) => {
            const isBooked = bookedTransport?.mode === item.mode && bookedTransport?.provider === item.provider;
            return (
              <div
                key={idx}
                className={`bg-[#0A3323]/90 border rounded-2xl p-6 space-y-4 relative overflow-hidden transition-all duration-300 flex flex-col justify-between backdrop-blur-xl ${
                  isBooked
                    ? 'border-2 border-[#839958] shadow-xl shadow-[#839958]/20 bg-[#0A3323]'
                    : item.badge === 'BEST VALUE'
                    ? 'border-2 border-[#D3968C] shadow-lg shadow-[#D3968C]/15'
                    : 'border-[#105666] hover:border-[#839958]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#D3968C] text-[#0A3323] text-[10px] font-extrabold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                    {isBooked && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#839958] text-[#0A3323] text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> BOOKED
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#839958] block">{item.provider}</span>
                    <h3 className="font-editorial text-2xl font-black text-[#F7F4D5] uppercase mt-0.5">{item.mode}</h3>
                  </div>

                  <div className="flex items-baseline justify-between border-y border-[#105666] py-3 my-3">
                    <div>
                      <span className="text-[10px] text-[#839958] uppercase font-bold block">Fare</span>
                      <span className="font-editorial text-2xl font-extrabold text-[#D3968C] font-mono">₹{item.price.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#839958] uppercase font-bold block">Duration</span>
                      <span className="text-[#F7F4D5] font-bold">{item.time}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-[#F7F4D5]/80">
                    <div className="flex justify-between">
                      <span className="text-[#839958]">Availability:</span>
                      <span className="text-[#839958] font-bold">{item.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#839958]">Rating:</span>
                      <span className="text-[#F7F4D5] font-bold flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-[#D3968C] fill-[#D3968C]" />
                        {item.rating} / 5.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* BOOK NOW Action Button */}
                <div className="space-y-3 pt-3 border-t border-[#105666]">
                  <button
                    onClick={() => onBookTransport(item)}
                    className={`w-full py-3 px-4 rounded-xl font-editorial text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                      isBooked
                        ? 'bg-[#839958] hover:bg-[#94ab65] text-[#0A3323] shadow-[#839958]/20'
                        : 'bg-[#D3968C] hover:bg-[#E2A69C] text-[#0A3323] shadow-[#D3968C]/20 hover:scale-[1.02]'
                    }`}
                  >
                    {isBooked ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        RIDE BOOKED (₹{item.price.toLocaleString('en-IN')})
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        BOOK NOW — CALCULATE BUDGET
                      </>
                    )}
                  </button>

                  <div className="space-y-1 text-xs text-[#F7F4D5]/80">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-[#D3968C] shrink-0" />
                      <span className="font-mono text-[11px] text-[#F7F4D5]/70 truncate">
                        {item.provider === 'Indian Railways' ? '139 / IRCTC.co.in' :
                         item.provider === 'Kerala State RTC' ? '0471-2463799' :
                         item.provider === 'Ladakh Taxi Union' ? '+91-1982-252723' :
                         `Local stand`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Hotels Tab */}
      {activeTab === 'HOTEL' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destination.hotelOptions.map((hotel) => {
            const isBooked = bookedHotel?.id === hotel.id;
            return (
              <div
                key={hotel.id}
                className={`bg-[#0A3323]/90 border rounded-2xl p-6 space-y-4 relative overflow-hidden transition-all duration-300 flex flex-col justify-between backdrop-blur-xl ${
                  isBooked
                    ? 'border-2 border-[#839958] shadow-2xl shadow-[#839958]/20 bg-[#0A3323]'
                    : hotel.recommendationTag === 'BEST OVERALL VALUE'
                    ? 'border-2 border-[#D3968C] shadow-2xl'
                    : 'border-[#105666] hover:border-[#839958]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    {hotel.recommendationTag && (
                      <span className="px-2.5 py-1 rounded-full bg-[#D3968C] text-[#0A3323] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                        {hotel.recommendationTag}
                      </span>
                    )}
                    {isBooked && (
                      <span className="px-2.5 py-1 rounded-full bg-[#839958] text-[#0A3323] text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <CheckCircle2 className="w-3 h-3" /> BOOKED
                      </span>
                    )}
                  </div>

                  <div className="h-40 w-full rounded-xl overflow-hidden relative mb-3">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3323] via-transparent to-transparent" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#839958] block">{hotel.location}</span>
                    <h3 className="font-editorial text-xl font-black text-[#F7F4D5] uppercase mt-0.5">{hotel.name}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs p-3 rounded-xl bg-[#105666]/50 my-3 border border-[#839958]/30">
                    <div>
                      <span className="text-[9px] text-[#839958] uppercase font-bold block">Per Night</span>
                      <span className="text-[#D3968C] font-bold text-sm font-mono">₹{hotel.pricePerNight.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#839958] uppercase font-bold block">Transit Cost</span>
                      <span className="text-[#F7F4D5] font-bold text-sm font-mono">₹{hotel.transportCostToHighlights}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#D3968C]/15 border border-[#D3968C]/30 text-xs mb-3">
                    <span className="text-[10px] text-[#839958] uppercase font-bold block">Total Trip Hotel Cost</span>
                    <span className="font-editorial text-lg font-black text-[#D3968C] font-mono">₹{hotel.totalEstimatedTripHotelCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* BOOK NOW Action Button */}
                <div className="space-y-3 pt-3 border-t border-[#105666]">
                  <button
                    onClick={() => onBookHotel(hotel)}
                    className={`w-full py-3 px-4 rounded-xl font-editorial text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                      isBooked
                        ? 'bg-[#839958] hover:bg-[#94ab65] text-[#0A3323] shadow-[#839958]/20'
                        : 'bg-[#D3968C] hover:bg-[#E2A69C] text-[#0A3323] shadow-[#D3968C]/20 hover:scale-[1.02]'
                    }`}
                  >
                    {isBooked ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        HOTEL BOOKED (₹{hotel.totalEstimatedTripHotelCost.toLocaleString('en-IN')})
                      </>
                    ) : (
                      <>
                        <Hotel className="w-4 h-4" />
                        BOOK NOW — CALCULATE BUDGET
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <MapPin className="w-3.5 h-3.5 text-[#D3968C] shrink-0" />
                    <span>{hotel.distanceToHub} from city center</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Confirmation Banner when items booked */}
      {(bookedHotel || bookedTransport) && (
        <div className="mt-10 p-5 rounded-2xl bg-[#0A3323]/95 border border-[#839958]/60 text-[#F7F4D5] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#839958]/20 border border-[#839958] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#839958]" />
            </div>
            <div>
              <h4 className="font-editorial text-base font-black text-[#F7F4D5] uppercase">
                BOOKING CONFIRMED — BUDGET CALCULATED!
              </h4>
              <p className="text-xs text-[#839958]">
                {bookedHotel ? `Hotel: ${bookedHotel.name}` : 'Hotel: Not selected'} • {bookedTransport ? `Transport: ${bookedTransport.provider} (${bookedTransport.mode})` : 'Transport: Not selected'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              document.getElementById('budget-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#839958] hover:bg-[#94ab65] text-[#0A3323] font-editorial text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg shadow-[#839958]/20 whitespace-nowrap flex items-center gap-2"
          >
            SEE LIVE BUDGET BREAKDOWN ↓
          </button>
        </div>
      )}
    </section>
  );
};
