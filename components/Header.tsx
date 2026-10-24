'use client';

import React, { useState } from 'react';
import { 
  X, 
  Settings, 
  User, 
  BookOpen, 
  ChevronDown, 
  Home, 
  Search, 
  ShieldCheck, 
  LogIn
} from 'lucide-react';
import { UserCustomization } from '@/lib/data';

interface HeaderProps {
  currentScreen: 'home' | 'profile' | 'community' | 'settings' | 'login' | 'signup';
  setCurrentScreen: (screen: 'home' | 'profile' | 'community' | 'settings' | 'login' | 'signup') => void;
  user: UserCustomization;
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
}

export default function Header({ currentScreen, setCurrentScreen, user, onOpenAuthModal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (screen: 'home' | 'profile' | 'community' | 'settings' | 'login' | 'signup') => {
    setCurrentScreen(screen);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (currentScreen !== 'home') {
      setCurrentScreen('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 liquid-glass shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
        <div className="h-16 max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 flex items-center justify-between gap-3">
          {/* Brand Logo - Compact icon on mobile, full wordmark on sm+ */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 text-left group transition-transform focus:outline-none"
              aria-label="Alongside Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#006948] to-[#00855d] flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-sm group-hover:scale-105 transition-transform shrink-0">
                <span className="font-extrabold tracking-tighter">A</span>
              </div>
              <span className="hidden sm:inline font-bold text-lg sm:text-xl text-[#131b2e] tracking-tight group-hover:text-[#006948] transition-colors">
                Alongside
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-[#eaedff]/60 backdrop-blur-md rounded-full border border-white/60">
            <button
              onClick={() => handleNav('home')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                currentScreen === 'home'
                  ? 'bg-[#00855d] text-white shadow-sm'
                  : 'text-[#3d4a42] hover:text-[#131b2e] hover:bg-white/50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('discovery-grid')}
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-[#3d4a42] hover:text-[#131b2e] hover:bg-white/50 transition-all"
            >
              Find a Mentor
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-[#3d4a42] hover:text-[#131b2e] hover:bg-white/50 transition-all"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNav('community')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                currentScreen === 'community'
                  ? 'bg-[#00855d] text-white shadow-sm'
                  : 'text-[#3d4a42] hover:text-[#131b2e] hover:bg-white/50'
              }`}
            >
              Community
            </button>
          </nav>

          {/* Right User Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop-only quick settings customize button */}
            <button
              onClick={() => handleNav('settings')}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#3d4a42] hover:text-[#006948] transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/70"
              title="Settings & Customization"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Customize</span>
            </button>

            {/* Desktop-only Sign In button */}
            <button
              onClick={() => onOpenAuthModal('login')}
              className={`hidden md:inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full transition-colors ${
                currentScreen === 'login'
                  ? 'bg-[#006948]/10 text-[#006948] font-bold'
                  : 'text-[#3d4a42] hover:text-[#006948]'
              }`}
            >
              Sign In
            </button>

            {/* Desktop-only Join Alongside CTA */}
            <button
              onClick={() => onOpenAuthModal('signup')}
              className={`hidden md:inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-200 shadow-sm ${
                currentScreen === 'signup'
                  ? 'bg-[#005137] text-white ring-2 ring-[#85f8c4]'
                  : 'bg-[#006948] hover:bg-[#00855d] text-white hover:shadow-md'
              }`}
            >
              Join Alongside
            </button>

            {/* Avatar Navigation Button - Top anchor for the menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-1.5 p-1 pr-2 rounded-full bg-white/70 hover:bg-white border border-[#eaedff] shadow-sm hover:shadow transition-all focus:outline-none"
              aria-label="Open profile and navigation menu"
              aria-expanded={menuOpen}
            >
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ring-1.5 ring-[#85f8c4]"
                />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#006948] ring-1 ring-white" />
              </div>
              <ChevronDown 
                className={`w-3.5 h-3.5 text-[#3d4a42] transition-transform duration-200 ${
                  menuOpen ? 'rotate-180 text-[#006948]' : ''
                }`} 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Professional Top-Anchored Dropdown Menu (Directly beneath Header, NOT pushed to screen bottom) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Subtle dimming backdrop to close on outside tap */}
          <div 
            className="fixed inset-0 bg-black/25 backdrop-blur-[2px] animate-in fade-in duration-150"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          />

          {/* Floating Dropdown Card positioned cleanly right under the header */}
          <div className="absolute top-[68px] right-3 left-3 sm:left-auto sm:right-6 w-auto sm:w-84 max-w-sm ml-auto liquid-glass-elevated rounded-2xl p-4 shadow-2xl border border-white/95 animate-in fade-in slide-in-from-top-2 duration-200 z-50 overflow-hidden space-y-3.5">
            {/* User Profile Header with Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-[#eaedff]">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative shrink-0">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#85f8c4]"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#006948] ring-2 ring-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-sm text-[#131b2e] truncate">{user.name}</p>
                  <p className="text-[11px] text-[#3d4a42] truncate">{user.startupName} • {user.role}</p>
                  <span className="inline-block mt-0.5 text-[10px] text-[#006948] font-bold bg-[#85f8c4]/30 px-2 py-0.5 rounded-full">
                    {user.track} Active
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5 rounded-full bg-[#f2f3ff] text-[#3d4a42] hover:text-[#131b2e] hover:bg-white transition-colors shrink-0 ml-2"
                aria-label="Close navigation"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Navigation Section */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#6d7a72] px-1 mb-1.5">
                Navigation
              </p>
              <div className="space-y-1">
                <button
                  onClick={() => handleNav('home')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors ${
                    currentScreen === 'home'
                      ? 'bg-[#006948] text-white shadow-sm'
                      : 'text-[#131b2e] hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Home className={`w-4 h-4 ${currentScreen === 'home' ? 'text-white' : 'text-[#006948]'}`} />
                    <span>Home & Mentor Discovery</span>
                  </div>
                  {currentScreen === 'home' && <span className="text-[10px] opacity-80">Current</span>}
                </button>

                <button
                  onClick={() => handleNav('community')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors ${
                    currentScreen === 'community'
                      ? 'bg-[#006948] text-white shadow-sm'
                      : 'text-[#131b2e] hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <User className={`w-4 h-4 ${currentScreen === 'community' ? 'text-white' : 'text-[#006948]'}`} />
                    <span>Member Dashboard & Feed</span>
                  </div>
                  {currentScreen === 'community' && <span className="text-[10px] opacity-80">Current</span>}
                </button>

                <button
                  onClick={() => handleNav('profile')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors ${
                    currentScreen === 'profile'
                      ? 'bg-[#006948] text-white shadow-sm'
                      : 'text-[#131b2e] hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className={`w-4 h-4 ${currentScreen === 'profile' ? 'text-white' : 'text-[#006948]'}`} />
                    <span>Elena Rostova (Mentor Profile)</span>
                  </div>
                  {currentScreen === 'profile' && <span className="text-[10px] opacity-80">Current</span>}
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#6d7a72] px-1 mb-1.5">
                Quick Actions
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => scrollToSection('discovery-grid')}
                  className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/70 text-xs font-semibold text-[#131b2e] hover:bg-white border border-[#eaedff] transition-colors"
                >
                  <Search className="w-3.5 h-3.5 text-[#006948]" />
                  <span>Find Mentors</span>
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/70 text-xs font-semibold text-[#131b2e] hover:bg-white border border-[#eaedff] transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#006948]" />
                  <span>How It Works</span>
                </button>
              </div>
            </div>

            {/* Preferences & Account */}
            <div className="pt-2 border-t border-[#eaedff] space-y-1">
              <button
                onClick={() => handleNav('settings')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors ${
                  currentScreen === 'settings'
                    ? 'bg-[#006948] text-white shadow-sm'
                    : 'text-[#131b2e] hover:bg-white/80'
                }`}
              >
                <Settings className={`w-4 h-4 ${currentScreen === 'settings' ? 'text-white' : 'text-[#006948]'}`} />
                <span>Dashboard Customization</span>
              </button>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenAuthModal('login');
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left text-[#006948] bg-[#85f8c4]/20 hover:bg-[#85f8c4]/30 transition-colors"
              >
                <LogIn className="w-4 h-4 text-[#006948]" />
                <span>Switch Account / Sign In</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
