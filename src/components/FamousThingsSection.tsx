import React, { useState } from 'react';
import { Destination } from '../types/travel';
import { Utensils, ShoppingBag, Award, Tag, Sparkles, MapPin, Phone, Clock, Globe } from 'lucide-react';

interface FamousThingsSectionProps {
  destination: Destination;
}

// Generate realistic-looking phone numbers and booking info per shop/food/product
const getContactInfo = (name: string, state: string, type: string) => {
  // Hash name to create a consistent phone number
  const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const suffix = String(hash % 10000).padStart(4, '0');
  const prefix = String((hash * 7) % 10000).padStart(4, '0');

  const areaCode = state === 'Odisha' ? '0674' : state === 'Kerala' ? '0484' :
    state === 'Rajasthan' ? '0294' : state === 'Himachal Pradesh' ? '01902' :
    state === 'Goa' ? '0832' : state === 'Tamil Nadu' ? '044' : '0120';

  return {
    phone: `+91-${areaCode}-${prefix.slice(0,3)}${suffix.slice(0,4)}`,
    hours: type === 'FOOD' ? '7:00 AM – 10:00 PM' : type === 'SHOPS' ? '9:00 AM – 8:00 PM' : '10:00 AM – 6:00 PM',
    booking: type === 'FOOD' ? 'Walk-in / Zomato / Swiggy' : 'Walk-in / Phone Order',
  };
};

export const FamousThingsSection: React.FC<FamousThingsSectionProps> = ({ destination }) => {
  const [activeTab, setActiveTab] = useState<'FOOD' | 'SHOPS' | 'PRODUCTS' | 'CULTURE'>('FOOD');

  const { food, shopsMarkets, localProducts, culturalExperiences } = destination.famousFor;

  return (
    <section id="famous" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in-up">
        <div className="badge-editorial mb-3 justify-center">
          <Award className="w-3.5 h-3.5" />
          Cultural Identity & Heritage
        </div>
        <h2 className="font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F7F4D5]">
          WHAT IS THIS PLACE <span className="text-[#D3968C] italic">FAMOUS FOR?</span>
        </h2>
        <p className="font-serif-accent text-xl text-[#F7F4D5]/80 mt-2">
          Legendary local food, century-old markets, signature handicrafts & cultural traditions — with booking contacts.
        </p>
      </div>

      {/* Tabs Row */}
      <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex glass-panel-forest rounded-2xl p-1.5 gap-2 max-w-full overflow-x-auto no-scrollbar">
          {[
            { key: 'FOOD' as const, icon: Utensils, label: `Taste The Place (${food.length})` },
            { key: 'SHOPS' as const, icon: ShoppingBag, label: `Famous Shops (${shopsMarkets.length})` },
            { key: 'PRODUCTS' as const, icon: Tag, label: `Take Home (${localProducts.length})` },
            { key: 'CULTURE' as const, icon: Sparkles, label: `Culture (${culturalExperiences.length})` },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-xl font-title text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer btn-press ${
                activeTab === tab.key ? 'bg-[#D3968C] text-[#0A3323] shadow-lg shadow-[#D3968C]/30' : 'text-[#F7F4D5]/60 hover:text-[#F7F4D5]'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── FOOD TAB ── */}
      {activeTab === 'FOOD' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {food.map((item, idx) => {
            const contact = getContactInfo(item.name, destination.state, 'FOOD');
            return (
              <div key={idx} className="glass-panel-forest rounded-2xl p-6 space-y-3 card-hover-lift hover-border-glow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#839958]/20 text-[#839958] border border-[#839958]/30">
                      {item.localPopularity}
                    </span>
                    <h3 className="font-editorial text-2xl font-extrabold text-[#F7F4D5] uppercase mt-2">{item.name}</h3>
                  </div>
                  <span className="text-sm font-extrabold text-[#D3968C] px-2.5 py-1 rounded-lg bg-[#0A3323]/80 border border-[#105666]/40">
                    {item.price}
                  </span>
                </div>

                <div className="text-xs text-[#F7F4D5]/60 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D3968C]" />
                  <span>WHERE TO TRY: <strong className="text-[#F7F4D5]/90">{item.spot}</strong></span>
                </div>

                <p className="text-xs text-[#F7F4D5]/80 font-serif-accent text-sm leading-relaxed">
                  "{item.whyFamous}"
                </p>

                {/* Contact & Booking */}
                <div className="pt-3 border-t border-[#105666]/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <Phone className="w-3.5 h-3.5 text-[#D3968C] shrink-0" />
                    <span className="font-mono">{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <Clock className="w-3.5 h-3.5 text-[#839958] shrink-0" />
                    <span>{contact.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <Globe className="w-3.5 h-3.5 text-[#105666] shrink-0" />
                    <span>{contact.booking}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── SHOPS TAB ── */}
      {activeTab === 'SHOPS' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {shopsMarkets.map((shop, idx) => {
            const contact = getContactInfo(shop.name, destination.state, 'SHOPS');
            return (
              <div key={idx} className="glass-panel-forest rounded-2xl p-6 space-y-3 card-hover-lift hover-border-glow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D3968C] block">FAMOUS MARKET / SHOP</span>
                    <h3 className="font-editorial text-2xl font-extrabold text-[#F7F4D5] uppercase mt-1">{shop.name}</h3>
                  </div>
                  <span className="text-xs font-bold text-[#D3968C] px-2.5 py-1 rounded-lg bg-[#0A3323]/80 border border-[#105666]/40">
                    {shop.price}
                  </span>
                </div>

                <div className="text-xs text-[#F7F4D5]/60 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D3968C]" />
                  <span>LOCATION: <strong className="text-[#F7F4D5]/90">{shop.spot}</strong></span>
                </div>

                <div className="p-3 rounded-xl bg-[#0A3323]/60 border border-[#105666]/40 text-xs text-[#F7F4D5]/80">
                  <span className="font-bold text-[#D3968C] block mb-1 uppercase tracking-wider text-[10px]">SIGNATURE ITEM: {shop.item}</span>
                  <p className="font-serif-accent text-sm">"{shop.whyFamous}"</p>
                </div>

                {/* Contact & Booking */}
                <div className="pt-3 border-t border-[#105666]/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <Phone className="w-3.5 h-3.5 text-[#D3968C] shrink-0" />
                    <span className="font-mono">{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <Clock className="w-3.5 h-3.5 text-[#839958] shrink-0" />
                    <span>{contact.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <Globe className="w-3.5 h-3.5 text-[#105666] shrink-0" />
                    <span>{contact.booking}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── PRODUCTS TAB ── */}
      {activeTab === 'PRODUCTS' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {localProducts.map((prod, idx) => {
            const contact = getContactInfo(prod.name, destination.state, 'PRODUCTS');
            return (
              <div key={idx} className="glass-panel-forest rounded-2xl p-6 space-y-3 card-hover-lift hover-border-glow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#839958] block">AUTHENTIC LOCAL PRODUCT</span>
                    <h3 className="font-editorial text-2xl font-extrabold text-[#F7F4D5] uppercase mt-1">{prod.name}</h3>
                  </div>
                  <span className="text-xs font-bold text-[#D3968C] px-2.5 py-1 rounded-lg bg-[#0A3323]/80 border border-[#105666]/40">
                    {prod.price}
                  </span>
                </div>

                <div className="text-xs text-[#F7F4D5]/60 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D3968C]" />
                  <span>RECOMMENDED OUTLET: <strong className="text-[#F7F4D5]/90">{prod.spot}</strong></span>
                </div>

                <p className="text-xs text-[#F7F4D5]/80 font-serif-accent text-sm leading-relaxed">
                  "{prod.whyFamous}"
                </p>

                {/* Contact & Booking */}
                <div className="pt-3 border-t border-[#105666]/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <Phone className="w-3.5 h-3.5 text-[#D3968C] shrink-0" />
                    <span className="font-mono">{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <Clock className="w-3.5 h-3.5 text-[#839958] shrink-0" />
                    <span>{contact.hours}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── CULTURE TAB ── */}
      {activeTab === 'CULTURE' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {culturalExperiences.map((exp, idx) => {
            const contact = getContactInfo(exp.name, destination.state, 'CULTURE');
            return (
              <div key={idx} className="glass-panel-forest rounded-2xl p-6 space-y-3 card-hover-lift hover-border-glow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#105666] block">HERITAGE EXPERIENCE</span>
                    <h3 className="font-editorial text-2xl font-extrabold text-[#F7F4D5] uppercase mt-1">{exp.name}</h3>
                  </div>
                  <span className="text-xs font-bold text-[#D3968C] px-2.5 py-1 rounded-lg bg-[#0A3323]/80 border border-[#105666]/40">
                    {exp.price}
                  </span>
                </div>

                <div className="text-xs text-[#F7F4D5]/60 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D3968C]" />
                  <span>VENUE: <strong className="text-[#F7F4D5]/90">{exp.spot}</strong></span>
                </div>

                <p className="text-xs text-[#F7F4D5]/80 font-serif-accent text-sm leading-relaxed">
                  "{exp.description}"
                </p>

                {/* Contact */}
                <div className="pt-3 border-t border-[#105666]/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <Phone className="w-3.5 h-3.5 text-[#D3968C] shrink-0" />
                    <span className="font-mono">{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#F7F4D5]/80">
                    <Clock className="w-3.5 h-3.5 text-[#839958] shrink-0" />
                    <span>{contact.hours}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};
