import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  currentStep: number;
}

// Map each nav link to the minimum step required to show it
const NAV_LINKS = [
  { name: 'Discover', id: 'discover', minStep: 2 },
  { name: 'Hidden Gems', id: 'hidden-gems', minStep: 3 },
  { name: 'Festivals', id: 'events', minStep: 4 },
  { name: 'Itinerary', id: 'itinerary', minStep: 5 },
  { name: 'Logistics', id: 'comparison', minStep: 6 },
  { name: 'Safety', id: 'safety', minStep: 8 },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection, currentStep }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only show links to sections the user has already unlocked
  const visibleLinks = NAV_LINKS.filter(link => currentStep >= link.minStep);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A3323]/95 backdrop-blur-md border-b border-[#D3968C]/30 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A3323]/90 via-[#0A3323]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Editorial Serif typography */}
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => handleNavClick('hero')}>
          <div className="w-9 h-9 rounded-xl bg-[#D3968C] flex items-center justify-center text-[#0A3323] font-extrabold shadow-lg shadow-[#D3968C]/30 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-[#0A3323]" />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-2xl font-black tracking-tight text-[#F7F4D5] flex items-center gap-1">
              ROAM<span className="text-[#D3968C]">IQ</span>
            </span>
            <span className="text-[9px] tracking-widest text-[#839958] uppercase font-sans -mt-1 font-semibold">
              AI Travel Intelligence
            </span>
          </div>
        </div>

        {/* Desktop Navigation — only unlocked links */}
        {visibleLinks.length > 0 && (
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {visibleLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all uppercase tracking-widest text-xs font-bold py-1 px-2.5 rounded-full ${
                  activeSection === link.id
                    ? 'text-[#0A3323] bg-[#F7F4D5] shadow-md shadow-[#F7F4D5]/20 font-extrabold'
                    : 'text-[#F7F4D5]/80 hover:text-[#F7F4D5] hover:bg-[#105666]/50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}

        {/* Right: Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {currentStep >= 9 && (
            <button
              onClick={() => handleNavClick('dashboard')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F7F4D5] border border-[#839958]/60 rounded-full hover:border-[#D3968C] hover:text-[#D3968C] transition-all bg-[#105666]/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D3968C]" />
              Trip Command
            </button>
          )}

          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0A3323] bg-[#D3968C] hover:bg-[#E2A69C] rounded-full transition-all shadow-md shadow-[#D3968C]/30 hover:scale-105 cursor-pointer"
          >
            {currentStep === 0 ? 'Start Planning →' : 'New Trip →'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F7F4D5] hover:text-[#D3968C] rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D3968C]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && visibleLinks.length > 0 && (
        <div className="lg:hidden bg-[#0A3323]/95 backdrop-blur-xl border-b border-[#105666] px-6 py-6 space-y-3 shadow-2xl">
          {visibleLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left uppercase tracking-wider text-sm font-semibold py-2 px-3 rounded-lg ${
                activeSection === link.id
                  ? 'bg-[#D3968C]/20 text-[#D3968C] font-bold border-l-4 border-[#D3968C]'
                  : 'text-[#F7F4D5]/80 hover:bg-[#105666]/60'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
