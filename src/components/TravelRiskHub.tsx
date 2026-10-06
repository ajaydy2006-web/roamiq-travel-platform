import React from 'react';
import { Destination } from '../types/travel';
import { ShieldAlert, ShieldCheck, PhoneCall, Check, X, AlertTriangle, Hospital, Shield, CheckCircle2, XCircle } from 'lucide-react';

interface TravelRiskHubProps {
  destination: Destination;
}

export const TravelRiskHub: React.FC<TravelRiskHubProps> = ({ destination }) => {
  const risk = destination.riskProfile;

  // Fallback scam shield items matching Image 1 format if specific items array isn't populated
  const scamItems = (risk.scamShieldItems && risk.scamShieldItems.length > 0)
    ? risk.scamShieldItems
    : [
        {
          title: `Counterfeit "Wild" Honey & Spices`,
          badge: `POSSIBLE OVERCHARGING & ADULTERATION`,
          trigger: `Roadside hawkers claiming 100% wild cliff honey at inflated prices (₹800/jar)`,
          solution: `Only purchase certified honey and black pepper from the GCC (Girijan Co-operative Corporation) emporiums with printed MRP seals (₹280/jar).`
        },
        {
          title: `Inflated Waterfall 4x4 Jeep Fares`,
          badge: `POSSIBLE TOURIST OVERCHARGING`,
          trigger: `Private drivers demanding ₹1,500 for a 4 km shared trip to Katiki Falls`,
          solution: `Standard registered union jeep fare is ₹300–₹350 per seat round-trip. Confirm price with the union booth before boarding.`
        },
        {
          title: `Unauthorized "Tribal Village" Tour Guides`,
          badge: `UNVERIFIED TOUR TOUT`,
          trigger: `Touts near railway station offering exclusive entry to sacred tribal hamlets`,
          solution: `Indigenous settlements value their privacy. Experience tribal culture respectfully through the State Tribal Museum and licensed community guides.`
        }
      ];

  const dosList = (risk.dosAndDonts && risk.dosAndDonts.dos.length > 0)
    ? risk.dosAndDonts.dos
    : [
        "Always ask permission before photographing indigenous tribal community members or village hearths.",
        "Wear sturdy rubber-soled footwear when visiting waterfalls with slick mossy granite rocks.",
        "Carry cash (₹100/₹200 notes) as internet UPI signals can be intermittent in deep forest valleys.",
        "Support local tribal women cooperatives by purchasing certified single-origin Arabica coffee.",
        "Carry a lightweight fleece jacket for early morning 5:30 AM sunrise viewpoints."
      ];

  const dontsList = (risk.dosAndDonts && risk.dosAndDonts.donts.length > 0)
    ? risk.dosAndDonts.donts
    : [
        "Do not consume alcohol or play loud boombox music in sacred tribal groves or temple precincts.",
        "Do not enter Katiki Falls plunge pool during heavy rain warnings due to sudden flash runoff.",
        "Do not discard plastic wrappers or disposable bottles along mountain forest tracks.",
        "Never fabricate or accept unauthorized medicinal roots from road touts without pharmacist verification."
      ];

  return (
    <section id="safety" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0A3323]/95 border border-[#105666] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10 relative overflow-hidden backdrop-blur-xl">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#839958]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#105666] pb-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3968C]/15 border border-[#D3968C]/40 text-[#D3968C] text-xs font-bold uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D3968C]" />
              Comprehensive Risk Intelligence *
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F7F4D5]">
              KNOW THE RISK <span className="text-[#D3968C]">BEFORE YOU GO.</span>
            </h2>
            <p className="font-serif-accent text-xl text-[#F7F4D5]/80 mt-2">
              Proactive safety scoring, scam prevention shields, and verified local etiquette guides.
            </p>
          </div>

          {/* Overall Score Badge */}
          <div className="p-4 rounded-2xl bg-[#0A3323] border border-[#839958]/50 text-center shrink-0 shadow-lg">
            <span className="text-[10px] uppercase font-bold text-[#839958] block tracking-wider font-title">ROAMIQ RISK INDEX</span>
            <span className="font-editorial text-3xl font-black text-[#D3968C] uppercase">{risk.overallScore} RISK</span>
          </div>
        </div>

        {/* 6-Factor Risk Breakdown Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
          <div className="p-3.5 rounded-2xl bg-[#0A3323]/80 border border-[#105666] text-center space-y-1">
            <span className="text-[10px] text-[#839958] uppercase font-bold block tracking-wider font-title">Weather Risk</span>
            <span className="text-[#F7F4D5] font-editorial font-bold text-sm">{risk.weatherRisk}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0A3323]/80 border border-[#105666] text-center space-y-1">
            <span className="text-[10px] text-[#839958] uppercase font-bold block tracking-wider font-title">Crowd Risk</span>
            <span className="text-[#F7F4D5] font-editorial font-bold text-sm">{risk.crowdRisk}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0A3323]/80 border border-[#105666] text-center space-y-1">
            <span className="text-[10px] text-[#839958] uppercase font-bold block tracking-wider font-title">Road Risk</span>
            <span className="text-[#F7F4D5] font-editorial font-bold text-sm">{risk.roadRisk}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0A3323]/80 border border-[#105666] text-center space-y-1">
            <span className="text-[10px] text-[#839958] uppercase font-bold block tracking-wider font-title">Activity Risk</span>
            <span className="text-[#F7F4D5] font-editorial font-bold text-sm">{risk.activityRisk}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0A3323]/80 border border-[#105666] text-center space-y-1">
            <span className="text-[10px] text-[#839958] uppercase font-bold block tracking-wider font-title">Scam Risk</span>
            <span className="text-[#F7F4D5] font-editorial font-bold text-sm">{risk.scamRisk}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0A3323]/80 border border-[#105666] text-center space-y-1">
            <span className="text-[10px] text-[#839958] uppercase font-bold block tracking-wider font-title">Emergency Access</span>
            <span className="text-[#F7F4D5] font-editorial font-bold text-sm">{risk.emergencyAccess}</span>
          </div>
        </div>

        {/* MAIN FEATURE GRID (Image 1 Layout: Scam Shield Intelligence + Cultural Do's & Don'ts) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          
          {/* LEFT CONTAINER: SCAM SHIELD INTELLIGENCE (Image 1) */}
          <div className="bg-[#0A3323] border border-[#105666] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-2 text-[#D3968C]">
              <ShieldAlert className="w-6 h-6 text-[#D3968C]" />
              <h3 className="font-editorial text-2xl font-black uppercase tracking-tight text-[#F7F4D5]">
                SCAM SHIELD INTELLIGENCE
              </h3>
            </div>

            <div className="space-y-4">
              {scamItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#105666]/30 border border-[#839958]/30 space-y-2 hover:border-[#D3968C]/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#105666] pb-2">
                    <h4 className="font-editorial text-lg font-black text-[#F7F4D5]">{item.title}</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#D3968C]/20 text-[#D3968C] border border-[#D3968C]/40 text-[10px] font-extrabold uppercase tracking-wider self-start sm:self-auto font-mono">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#F7F4D5]/90 pt-1">
                    <p className="leading-relaxed">
                      <strong className="text-[#D3968C] uppercase font-bold font-title">Trigger: </strong>
                      <span className="text-[#F7F4D5]/80">{item.trigger}</span>
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-[#839958] uppercase font-bold font-title">Solution: </strong>
                      <span className="text-[#F7F4D5]">{item.solution}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTAINER: CULTURAL DO'S & DON'TS (Image 1) */}
          <div className="bg-[#0A3323] border border-[#105666] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#839958]" />
              <h3 className="font-editorial text-2xl font-black uppercase tracking-tight text-[#F7F4D5]">
                CULTURAL DO'S & DON'TS
              </h3>
            </div>

            <div className="space-y-6 text-xs">
              {/* RECOMMENDED ETIQUETTE (DO'S) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#839958] font-editorial text-sm font-extrabold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#839958]" />
                  <span>RECOMMENDED ETIQUETTE (DO'S)</span>
                </div>

                <ul className="space-y-2.5">
                  {dosList.map((doItem, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[#F7F4D5]/90 leading-relaxed">
                      <Check className="w-4 h-4 text-[#839958] shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{doItem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* THINGS TO AVOID (DON'TS) */}
              <div className="space-y-3 pt-4 border-t border-[#105666]">
                <div className="flex items-center gap-2 text-[#D3968C] font-editorial text-sm font-extrabold uppercase tracking-wider">
                  <XCircle className="w-4 h-4 text-[#D3968C]" />
                  <span>THINGS TO AVOID (DON'TS)</span>
                </div>

                <ul className="space-y-2.5">
                  {dontsList.map((dontItem, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[#F7F4D5]/80 leading-relaxed">
                      <X className="w-4 h-4 text-[#D3968C] shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{dontItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Emergency Services Section */}
        <div className="pt-6 border-t border-[#105666] relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-editorial text-xl font-black uppercase text-[#F7F4D5] flex items-center gap-2">
              <Hospital className="w-5 h-5 text-[#D3968C]" />
              VERIFIED EMERGENCY HUB
            </h3>
            <span className="text-[10px] font-mono text-[#839958] uppercase tracking-widest px-2.5 py-1 rounded bg-[#839958]/15 border border-[#839958]/30 font-bold">
              VERIFIED NUMBERS ONLY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {risk.emergencyServices.map((srv, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#0A3323] border border-[#105666] space-y-1">
                <span className="text-[9px] uppercase font-bold text-[#839958] block tracking-wider font-title">{srv.type} ({srv.distance})</span>
                <h4 className="font-editorial text-base font-extrabold text-[#F7F4D5] uppercase">{srv.name}</h4>
                <div className="text-xs text-[#D3968C] font-mono font-bold flex items-center gap-1.5 pt-1">
                  <PhoneCall className="w-3.5 h-3.5 text-[#D3968C]" />
                  <span>{srv.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
