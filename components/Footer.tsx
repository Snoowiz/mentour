'use client';

import React from 'react';

interface FooterProps {
  onNavigateScreen: (screen: 'home' | 'profile' | 'community' | 'settings' | 'login' | 'signup') => void;
}

export default function Footer({ onNavigateScreen }: FooterProps) {
  return (
    <footer className="w-full bg-[#f2f3ff] text-[#131b2e] border-t border-[#eaedff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#006948] to-[#00855d] flex items-center justify-center text-white font-bold text-base shadow-sm">
                A
              </div>
              <span className="font-bold text-lg text-[#131b2e] tracking-tight">Alongside</span>
            </div>
            <p className="text-xs sm:text-sm text-[#3d4a42] leading-relaxed">
              Empowering entrepreneurs with vetted executive mentorship, tactical milestone execution, and high-trust peer networks.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#e2e7ff] text-[#3d4a42]">
                Next-Gen Mentorship
              </span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-sm text-[#131b2e] mb-3">Platform</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#3d4a42]">
              <li>
                <button
                  onClick={() => onNavigateScreen('home')}
                  className="hover:text-[#006948] transition-colors"
                >
                  Find Mentors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateScreen('settings')}
                  className="hover:text-[#006948] transition-colors"
                >
                  Become a Mentor
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateScreen('home');
                    setTimeout(() => {
                      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#006948] transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateScreen('community')}
                  className="hover:text-[#006948] transition-colors"
                >
                  Community Feed
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateScreen('profile')}
                  className="hover:text-[#006948] transition-colors"
                >
                  Pricing & Packaging
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-sm text-[#131b2e] mb-3">Resources</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#3d4a42]">
              <li>
                <button
                  onClick={() => onNavigateScreen('community')}
                  className="hover:text-[#006948] transition-colors"
                >
                  Founder Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateScreen('home')}
                  className="hover:text-[#006948] transition-colors"
                >
                  Mentorship Playbook
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateScreen('community')}
                  className="hover:text-[#006948] transition-colors"
                >
                  Executive Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateScreen('community')}
                  className="hover:text-[#006948] transition-colors"
                >
                  Office Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="font-bold text-sm text-[#131b2e] mb-3">Legal & Support</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#3d4a42]">
              <li>
                <a href="#privacy" className="hover:text-[#006948] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#006948] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#code" className="hover:text-[#006948] transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-[#006948] transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#eaedff] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3d4a42]">
          <p>© 2025 Alongside Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#006948] transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-[#006948] transition-colors">
              Terms
            </a>
            <a href="#security" className="hover:text-[#006948] transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
