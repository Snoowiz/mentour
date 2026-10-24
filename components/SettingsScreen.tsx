'use client';

import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  Sliders, 
  Sparkles, 
  Calendar, 
  Bell, 
  Save, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  Eye, 
  Layers, 
  Smartphone, 
  Mail, 
  Clock, 
  FileText 
} from 'lucide-react';
import { UserCustomization, DEFAULT_USER } from '@/lib/data';

interface SettingsScreenProps {
  user: UserCustomization;
  onSaveUser: (updatedUser: UserCustomization) => void;
  onNavigateHome: () => void;
}

export default function SettingsScreen({ user, onSaveUser, onNavigateHome }: SettingsScreenProps) {
  const [formData, setFormData] = useState<UserCustomization>({ ...user });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'appearance' | 'mentorship' | 'notifications'>('profile');

  const avatarOptions = [
    {
      label: 'Alex (Default)',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJgqNG3boTp9bwvstyfNV4TIaWCLDOmYWSfSWeNu_XdmeDQw4mZwx02xc6qRxBbijnTxiuVlRWUGEGOV6uKcBp0X92sQWBplHaVDON338ivn13T6kr-pCeG_sND-8OD9S0oM8E6w0XY7bgGfLd-fDgdUpALjOxN4knXgT9hLgg2ZBnOk-d59UJzVcfYKMZ3K7cJ2GsUk1YfJ4t2JF6w-0kVelRN0X19xzz82fp6aAFrpsErT7Js_IhHA',
    },
    {
      label: 'Casual Tech',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqduY6J-waR4L9ZG_2O3zbnckW01VY_YB9ueWkJn4HMtZEobPbHPYl719lA54ZSS6UioKNAGyKnkonpARbua6FzCkidpWCBW5DbtLJthGQlEhliatuSAtRO3ivVsZw4Q4M9qm0u7aJ83cv_gY-CUK9kD4wBvPWFHQC5getW4oKFilXE7taQg_vmp2YKkRAwB9eoCBZDBFe5Vp-YxE-SbADA3JnDZ21_NuFs0BsRJdIGaYBSUmxJTQJsQ',
    },
    {
      label: 'Minimalist Exec',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFXcTPGqvZoejZfVs_ur1rF4-WZfrlCNxq-mkAnnlO9OOvrwN8nNjEb-u6yXB8us6E9bRM9l8sJ3-GM5wgkFYmbs3yeaVOE8p-qpI-YI6EdLEdsg-D4wZJVd3Us_u-QObn-gDUAAKDkaOPSq2c19nyL8WVCWWgYGDPKTPBI5OZadDkldsWopIQAhcztW06Vio99nqwras6GsWaYg3_adYWUmMv94NA0Ref4CT_3tQa1y-zhoyUaQS0fg',
    },
    {
      label: 'Studio Founder',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEc9MyjKZiu8prWONRAElEX58ng8LMDiUDh7_exAGGe_gwqrdqkTSWwZHkeJH-2Ms_q4XCRGtCjeue2Ce2ONzEkJgjVpIKRaUPEaA9Q2DS0gjd5ITPuwGAsxAZJVRK81xsUhCPaOc0M0nvw96sIEt8ixIfvSm74YJjgo1DrL2IdpdHvSYlJsvss02CiPGckDO9PjF06F7PYNkHQ8kkCJHy4BbUePAAT9RmZD2SblRpLQ26bjy_C97sxg',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveUser(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 3000);
  };

  const handleReset = () => {
    setFormData({ ...DEFAULT_USER });
    onSaveUser({ ...DEFAULT_USER });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 space-y-6 min-w-0">
      {/* Title & Save Feedback */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006948] uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5" />
            <span>Member Control Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#131b2e] tracking-tight mt-1">
            Settings & Customization
          </h1>
          <p className="text-xs sm:text-sm text-[#3d4a42]">
            Personalize your founder identity, mentorship track, liquid-glass aesthetics, and notification triggers.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f2f3ff] hover:bg-[#eaedff] text-xs font-semibold text-[#3d4a42] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
          <button
            onClick={handleSubmit}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#006948] hover:bg-[#00855d] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="bg-[#85f8c4]/40 border border-[#006948]/30 rounded-2xl p-4 flex items-center gap-3 animate-in fade-in duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#006948] shrink-0" />
          <div>
            <p className="text-xs sm:text-sm font-bold text-[#002114]">Settings saved successfully!</p>
            <p className="text-[11px] text-[#005137]">
              Your profile, preferences, and liquid-glass environment have been updated across Alongside.
            </p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-[#eaedff]">
        {[
          { id: 'profile', label: 'Founder Profile', icon: User },
          { id: 'appearance', label: 'Liquid-Glass & Theme', icon: Sparkles },
          { id: 'mentorship', label: 'Mentorship Track', icon: Layers },
          { id: 'notifications', label: 'Calendar & Sync', icon: Bell },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                isActive
                  ? 'border-[#006948] text-[#006948] bg-white'
                  : 'border-transparent text-[#3d4a42] hover:text-[#131b2e]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* TAB 1: Profile */}
        {activeTab === 'profile' && (
          <div className="liquid-glass-elevated rounded-3xl p-6 sm:p-8 space-y-6 border border-white/95">
            <div>
              <h2 className="text-lg font-bold text-[#131b2e] mb-1">Founder Identity</h2>
              <p className="text-xs text-[#3d4a42]">
                This information appears on your session prep sheets, community posts, and mentorship intake requests.
              </p>
            </div>

            {/* Avatar Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#131b2e] uppercase tracking-wider block">
                Choose Portrait Avatar
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {avatarOptions.map((opt, idx) => {
                  const isSelected = formData.avatar === opt.url;
                  return (
                    <div
                      key={idx}
                      onClick={() => setFormData({ ...formData, avatar: opt.url })}
                      className={`cursor-pointer p-3 rounded-2xl border transition-all text-center flex flex-col items-center gap-2 ${
                        isSelected
                          ? 'border-[#006948] bg-[#f2f3ff] shadow-sm'
                          : 'border-[#eaedff] bg-white hover:bg-[#f2f3ff]'
                      }`}
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm">
                        <img src={opt.url} alt={opt.label} className="w-full h-full object-cover" />
                        {isSelected && (
                          <div className="absolute inset-0 bg-[#006948]/20 flex items-center justify-center">
                            <span className="w-5 h-5 rounded-full bg-[#006948] text-white flex items-center justify-center text-xs">
                              ✓
                            </span>
                          </div>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-[#131b2e]">{opt.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#131b2e] block mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs sm:text-sm text-[#131b2e] font-semibold focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#131b2e] block mb-1">Professional Title / Role</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs sm:text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#131b2e] block mb-1">Startup / Company Name</label>
                <input
                  type="text"
                  value={formData.startupName}
                  onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs sm:text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#131b2e] block mb-1">Funding & Operational Stage</label>
                <select
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs sm:text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                >
                  <option value="Idea & Validation">Idea & Validation</option>
                  <option value="Pre-seed Stage ($250k - $750k)">Pre-seed Stage ($250k - $750k)</option>
                  <option value="Seed Stage ($1.2M raised)">Seed Stage ($1.2M raised)</option>
                  <option value="Series A ($3M - $10M ARR)">Series A ($3M - $10M ARR)</option>
                  <option value="Bootstrapped & Profitable">Bootstrapped & Profitable</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#131b2e] block mb-1">
                Founder Bio / Elevator Pitch
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={3}
                className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs sm:text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30 leading-relaxed resize-none"
              />
            </div>
          </div>
        )}

        {/* TAB 2: Liquid-Glass & Appearance */}
        {activeTab === 'appearance' && (
          <div className="liquid-glass-elevated rounded-3xl p-6 sm:p-8 space-y-6 border border-white/95">
            <div>
              <h2 className="text-lg font-bold text-[#131b2e] mb-1">Design System & Liquid-Glass Controls</h2>
              <p className="text-xs text-[#3d4a42]">
                Configure the depth of frosted translucency, ambient radial glow gradients, and content density.
              </p>
            </div>

            {/* Glass Intensity */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#131b2e] uppercase tracking-wider block">
                Liquid-Glass Refraction Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'subtle',
                    title: 'Subtle Glass',
                    desc: 'Crisp, high contrast with minimal backdrop blur (12px).',
                  },
                  {
                    id: 'medium',
                    title: 'Medium Liquid (Default)',
                    desc: 'Balanced modern frosted specular refraction (16px blur).',
                  },
                  {
                    id: 'vibrant',
                    title: 'Vibrant Glass',
                    desc: 'Deep multi-layer saturated blur with luminous borders (24px).',
                  },
                ].map((item) => {
                  const isSelected = formData.glassIntensity === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setFormData({ ...formData, glassIntensity: item.id as any })}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'border-[#006948] bg-[#f2f3ff] shadow-sm'
                          : 'border-[#eaedff] bg-white hover:bg-[#f2f3ff]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-bold text-[#131b2e]">{item.title}</span>
                        {isSelected && <span className="text-[#006948] text-xs font-bold">Active</span>}
                      </div>
                      <p className="text-[11px] text-[#3d4a42] leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ambient Aura Color Accent */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#131b2e] uppercase tracking-wider block">
                Ambient Radial Backdrop Aura
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'emerald',
                    title: 'Emerald Aura',
                    color: 'bg-[#85f8c4]',
                    desc: 'Signature Alongside high-trust green gradients.',
                  },
                  {
                    id: 'slate',
                    title: 'Slate Minimal',
                    color: 'bg-[#dae2fd]',
                    desc: 'Neutral cool executive styling with zero colored tints.',
                  },
                  {
                    id: 'amber',
                    title: 'Warm Sunset',
                    color: 'bg-[#ffddb8]',
                    desc: 'Warm amber glow inspired by founder energy.',
                  },
                ].map((glow) => {
                  const isSelected = formData.ambientGlow === glow.id;
                  return (
                    <div
                      key={glow.id}
                      onClick={() => setFormData({ ...formData, ambientGlow: glow.id as any })}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'border-[#006948] bg-[#f2f3ff] shadow-sm'
                          : 'border-[#eaedff] bg-white hover:bg-[#f2f3ff]'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full ${glow.color} shrink-0 mt-0.5 border border-black/10`} />
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#131b2e] block">{glow.title}</span>
                        <p className="text-[11px] text-[#3d4a42] leading-relaxed mt-0.5">{glow.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Density toggle */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f2f3ff]">
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#131b2e]">Compact Dashboard Density</p>
                <p className="text-[11px] text-[#3d4a42]">
                  Reduces card padding and list spacing for faster data scanning on laptops.
                </p>
              </div>
              <input
                type="checkbox"
                checked={formData.compactDensity}
                onChange={(e) => setFormData({ ...formData, compactDensity: e.target.checked })}
                className="w-5 h-5 accent-[#006948] cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* TAB 3: Mentorship Track */}
        {activeTab === 'mentorship' && (
          <div className="liquid-glass-elevated rounded-3xl p-6 sm:p-8 space-y-6 border border-white/95">
            <div>
              <h2 className="text-lg font-bold text-[#131b2e] mb-1">Mentorship Focus & Track</h2>
              <p className="text-xs text-[#3d4a42]">
                Customizes which mentors, discussions, and milestone tracks are prioritized on your dashboard.
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-[#131b2e] uppercase tracking-wider block">
                Primary Track
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: 'Growth Track',
                    desc: 'B2B GTM, CAC optimization, retention loops, and viral expansion.',
                  },
                  {
                    id: 'Fundraising Track',
                    desc: 'Angel & VC pitch decks, cap table modeling, and investor due diligence.',
                  },
                  {
                    id: 'Executive Leadership',
                    desc: 'Founder-to-CEO transition, board dynamics, and executive hiring.',
                  },
                  {
                    id: 'Technical Scale',
                    desc: 'Microservices architecture, engineering velocity, and CTO management.',
                  },
                ].map((track) => {
                  const isSelected = formData.track === track.id;
                  return (
                    <div
                      key={track.id}
                      onClick={() => setFormData({ ...formData, track: track.id })}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'border-[#006948] bg-[#f2f3ff] shadow-sm'
                          : 'border-[#eaedff] bg-white hover:bg-[#f2f3ff]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-bold text-[#131b2e]">{track.id}</span>
                        {isSelected && <span className="text-[#006948] text-xs font-bold">Selected</span>}
                      </div>
                      <p className="text-[11px] text-[#3d4a42] leading-relaxed">{track.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Default Prep Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#131b2e] block">
                Default Session Prep Notes Template
              </label>
              <p className="text-[11px] text-[#3d4a42]">
                Sent automatically to booked mentors 24 hours prior to scheduled sessions.
              </p>
              <textarea
                value={formData.defaultPrepNotes}
                onChange={(e) => setFormData({ ...formData, defaultPrepNotes: e.target.value })}
                rows={3}
                className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs sm:text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30 resize-none leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* TAB 4: Calendar & Sync */}
        {activeTab === 'notifications' && (
          <div className="liquid-glass-elevated rounded-3xl p-6 sm:p-8 space-y-6 border border-white/95">
            <div>
              <h2 className="text-lg font-bold text-[#131b2e] mb-1">Calendar Integration & Alerts</h2>
              <p className="text-xs text-[#3d4a42]">
                Ensure you never miss a mentorship call or milestone review.
              </p>
            </div>

            <div className="space-y-3">
              {/* Google Calendar */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#eaedff]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e2e7ff] flex items-center justify-center text-[#006948]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#131b2e]">Google Calendar Auto-Sync</p>
                    <p className="text-[11px] text-[#3d4a42]">
                      Directly add Google Meet links and session agendas to your primary calendar.
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.googleCalendarConnected}
                  onChange={(e) =>
                    setFormData({ ...formData, googleCalendarConnected: e.target.checked })
                  }
                  className="w-5 h-5 accent-[#006948] cursor-pointer"
                />
              </div>

              {/* SMS Alerts */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#eaedff]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#85f8c4] flex items-center justify-center text-[#002114]">
                    <Smartphone className="w-5 h-5 text-[#006948]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#131b2e]">SMS 15-Minute Heads-Up</p>
                    <p className="text-[11px] text-[#3d4a42]">
                      Receive a prompt with the video room URL 15 minutes before calls.
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.smsReminders}
                  onChange={(e) => setFormData({ ...formData, smsReminders: e.target.checked })}
                  className="w-5 h-5 accent-[#006948] cursor-pointer"
                />
              </div>

              {/* Weekly Digest */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#eaedff]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffddb8] flex items-center justify-center text-[#855300]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#131b2e]">Weekly Founder Digest</p>
                    <p className="text-[11px] text-[#3d4a42]">
                      Curated executive discussions, top mentor availability openings, and milestone summaries.
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.emailWeeklyDigest}
                  onChange={(e) =>
                    setFormData({ ...formData, emailWeeklyDigest: e.target.checked })
                  }
                  className="w-5 h-5 accent-[#006948] cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="flex items-center justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onNavigateHome}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#3d4a42] hover:text-[#131b2e] hover:bg-[#f2f3ff] transition-colors"
          >
            Back to Home
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-full bg-[#006948] hover:bg-[#00855d] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Apply & Save Customizations</span>
          </button>
        </div>
      </form>
    </div>
  );
}
