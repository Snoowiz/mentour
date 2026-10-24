'use client';

import React from 'react';
import { Home, Search, MessageSquare, Settings, User } from 'lucide-react';

interface MobileNavProps {
  currentScreen: 'home' | 'profile' | 'community' | 'settings' | 'login' | 'signup';
  setCurrentScreen: (screen: 'home' | 'profile' | 'community' | 'settings' | 'login' | 'signup') => void;
}

interface NavItem {
  id: 'home' | 'profile' | 'community' | 'settings';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export default function MobileNav({ currentScreen, setCurrentScreen }: MobileNavProps) {
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { 
      id: 'profile', 
      label: 'Mentor', 
      icon: Search,
      badge: 'Elena'
    },
    { 
      id: 'community', 
      label: 'Community', 
      icon: MessageSquare,
      badge: 'Live'
    },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="md:hidden fixed bottom-3 left-4 right-4 z-40">
      <nav className="liquid-glass-elevated rounded-2xl px-2 py-2 shadow-2xl border border-white/90 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentScreen(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
                isActive
                  ? 'text-[#006948] font-bold'
                  : 'text-[#3d4a42] hover:text-[#131b2e]'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-[#006948]' : ''}`} />
                {item.badge && !isActive && (
                  <span className="absolute -top-1 -right-2 px-1 py-0.2 rounded-full text-[9px] font-bold bg-[#85f8c4] text-[#002114]">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-0.5 tracking-tight">{item.label}</span>
              {isActive && (
                <span className="absolute -bottom-1 w-3 h-1 bg-[#006948] rounded-full" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
