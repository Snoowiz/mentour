'use client';

import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  PlayCircle, 
  Star, 
  Video, 
  Mic, 
  FileText, 
  Zap, 
  ShieldCheck, 
  Award, 
  Search, 
  Calendar, 
  Filter, 
  Flame, 
  Clock, 
  CheckCircle2, 
  Circle, 
  Flag, 
  MessageSquare, 
  ThumbsUp, 
  ChevronRight, 
  ChevronDown 
} from 'lucide-react';
import { MENTORS, Mentor } from '@/lib/data';

interface HomeScreenProps {
  onSelectMentor: (mentor: Mentor) => void;
  onOpenBooking: (mentor: Mentor) => void;
  onOpenVideoRoom: () => void;
  onNavigateCommunity: () => void;
  onNavigateSettings: () => void;
  onOpenAuthModal?: (mode: 'login' | 'signup') => void;
}

export default function HomeScreen({
  onSelectMentor,
  onOpenBooking,
  onOpenVideoRoom,
  onNavigateCommunity,
  onNavigateSettings,
  onOpenAuthModal,
}: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all');
  const [formatFilter, setFormatFilter] = useState<string>('all');
  const [likesCount, setLikesCount] = useState<Record<string, number>>({
    disc1: 142,
    disc2: 210,
  });
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Focus Areas' },
    { id: 'business', label: 'Business Strategy' },
    { id: 'marketing', label: 'Marketing & Growth' },
    { id: 'tech', label: 'Technology & Engineering' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'finance', label: 'Finance & Fundraising' },
  ];

  const filteredMentors = useMemo(() => {
    return MENTORS.filter((mentor) => {
      // category filter
      if (selectedCategory !== 'all' && mentor.category !== selectedCategory) {
        return false;
      }
      // search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = mentor.name.toLowerCase().includes(q);
        const matchesRole = mentor.role.toLowerCase().includes(q);
        const matchesBio = mentor.bio.toLowerCase().includes(q);
        const matchesDisciplines = mentor.coreDisciplines.some((d) =>
          d.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesRole && !matchesBio && !matchesDisciplines) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  const toggleDiscussionLike = (id: string) => {
    setLikedPosts((prev) => {
      const isLiked = !prev[id];
      setLikesCount((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] + (isLiked ? 1 : -1),
      }));
      return { ...prev, [id]: isLiked };
    });
  };

  return (
    <div className="w-full max-w-full flex flex-col overflow-x-hidden min-w-0">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-12 lg:pt-14 lg:pb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
        {/* Soft Ambient Background Glows */}
        <div className="absolute -top-32 right-10 w-96 h-96 bg-[#85f8c4]/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-80 -left-20 w-80 h-80 bg-[#ffddb8]/25 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e2e7ff]/80 backdrop-blur-md shadow-sm border border-white/60">
              <span className="w-2 h-2 rounded-full bg-[#006948] animate-pulse" />
              <span className="text-xs font-bold text-[#006948] tracking-wider uppercase">
                Vetted Executive Mentorship
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#131b2e] tracking-tight leading-[1.15]">
              Your next chapter starts with the{' '}
              <span className="text-[#006948] relative inline-block">
                right guidance
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#85f8c4]"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 8.5C30 2 60 11 90 6C120 1 150 11 180 6C190 4 195 6 197 7"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-[#3d4a42] max-w-xl leading-relaxed">
              Connect with experienced founders, operators, and executives. Gain practical
              milestone-driven insights and take your next strategic step with unwavering confidence.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  document.getElementById('discovery-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#006948] hover:bg-[#00855d] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Find a Mentor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full liquid-glass hover:bg-white text-[#131b2e] font-semibold text-sm shadow-sm transition-all duration-200"
              >
                <PlayCircle className="w-4 h-4 text-[#006948]" />
                <span>How It Works</span>
              </button>
            </div>

            {/* Trust Indicators / Micro Metrics Bar */}
            <div className="w-full mt-6 liquid-glass rounded-2xl p-4 sm:p-5 shadow-sm grid grid-cols-3 divide-x divide-[#bccac0]/30 text-center">
              <div className="px-2">
                <div className="text-xl sm:text-2xl font-bold text-[#006948]">500+</div>
                <div className="text-xs text-[#3d4a42] font-medium mt-0.5">Verified Mentors</div>
              </div>
              <div className="px-2">
                <div className="flex items-center justify-center gap-1 text-xl sm:text-2xl font-bold text-[#131b2e]">
                  <span>4.9</span>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#fea619] fill-[#fea619]" />
                </div>
                <div className="text-xs text-[#3d4a42] font-medium mt-0.5">Average Session Rating</div>
              </div>
              <div className="px-2">
                <div className="text-xl sm:text-2xl font-bold text-[#006948]">12,000+</div>
                <div className="text-xs text-[#3d4a42] font-medium mt-0.5">Hours Mentored</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition / Live Session Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md w-full">
              {/* Glass Card Container */}
              <div className="rounded-3xl p-6 liquid-glass-elevated shadow-xl flex flex-col gap-4 border border-white/90">
                {/* Live Session Header */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#85f8c4]/60 text-[#002114]">
                    <span className="w-2 h-2 rounded-full bg-[#006948] animate-ping" />
                    Upcoming Live Session
                  </span>
                  <span className="text-xs text-[#3d4a42] font-mono font-medium">Today, 3:30 PM</span>
                </div>

                {/* Mentor Snippet */}
                <div className="flex items-center gap-3.5 bg-[#f2f3ff] p-3.5 rounded-2xl">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2gzphwWed8SflR2cDV3dS7_f20-adXzpUrtl7uNnrHkfQTKHJ2XQAbJWoUiDFKs4Gm4HvLfBZ8GZ3bPAj3T1BvTcY3GHGm1O9FIriqxjESdqdRDiHpjrj0TuVkNSlElQiJpv0huwh9wcHnMN9y2VpQ96FK1ldx20kldeZt67dOvn294ukLEFjVjYn189M68S_Tg94p58xA6n0_tlxTWRZlv74ImslTzmEpLAD6Csa9iTvwVCncBAytg"
                      alt="Sarah Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <h3 className="font-bold text-sm text-[#131b2e] truncate">Sarah Chen</h3>
                      <ShieldCheck className="w-4 h-4 text-[#006948]" />
                    </div>
                    <p className="text-xs text-[#3d4a42] truncate">ex-Stripe Product Lead</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3.5 h-3.5 text-[#fea619] fill-[#fea619]" />
                      <span className="text-xs font-bold text-[#131b2e]">5.0</span>
                      <span className="text-xs text-[#3d4a42]">(112 sessions)</span>
                    </div>
                  </div>
                </div>

                {/* Agenda / Topic Highlight */}
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-[#3d4a42] uppercase tracking-wider">
                    Session Agenda
                  </div>
                  <div className="text-sm font-semibold text-[#131b2e] leading-snug">
                    1-on-1 Product GTM & Self-Serve Growth Loops
                  </div>
                </div>

                {/* Tactical Milestone Checklist */}
                <div className="space-y-2 bg-[#eaedff]/60 p-3.5 rounded-xl border border-white/60">
                  <div className="flex items-center gap-2 text-xs text-[#3d4a42]">
                    <CheckCircle2 className="w-4 h-4 text-[#006948] shrink-0" />
                    <span>Audit onboarding drop-off points</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#3d4a42]">
                    <CheckCircle2 className="w-4 h-4 text-[#006948] shrink-0" />
                    <span>Refine tiered pricing packaging</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#3d4a42]">
                    <Circle className="w-4 h-4 text-[#6d7a72] shrink-0" />
                    <span>45-day execution road-mapping</span>
                  </div>
                </div>

                {/* Session Action Bar */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={onOpenVideoRoom}
                      className="p-2 rounded-xl bg-[#e2e7ff] text-[#131b2e] hover:text-[#006948] hover:bg-white transition-colors"
                      title="Test video link"
                    >
                      <Video className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onOpenVideoRoom}
                      className="p-2 rounded-xl bg-[#e2e7ff] text-[#131b2e] hover:text-[#006948] hover:bg-white transition-colors"
                      title="Mic audio"
                    >
                      <Mic className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onOpenVideoRoom}
                      className="p-2 rounded-xl bg-[#e2e7ff] text-[#131b2e] hover:text-[#006948] hover:bg-white transition-colors"
                      title="Shared agenda doc"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={onOpenVideoRoom}
                    className="px-5 py-2.5 rounded-full bg-[#006948] hover:bg-[#00855d] text-white font-semibold text-xs shadow-sm hover:shadow transition-all"
                  >
                    Join Room
                  </button>
                </div>
              </div>

              {/* Decorative Floating Badges */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 liquid-glass p-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#85f8c4] flex items-center justify-center text-[#002114]">
                  <Zap className="w-5 h-5 text-[#006948]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#131b2e]">Fastest Response</div>
                  <div className="text-[11px] text-[#3d4a42]">&lt; 4 hours avg response</div>
                </div>
              </div>

              <div className="absolute -top-3 -right-2 sm:-right-4 liquid-glass px-3.5 py-1.5 rounded-2xl shadow-lg flex items-center gap-2">
                <Award className="w-4 h-4 text-[#fea619]" />
                <span className="text-xs font-semibold text-[#131b2e]">98% Founder Match Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MENTOR DISCOVERY SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16 min-w-0" id="discovery-grid">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 w-full min-w-0">
          <div className="space-y-1.5 max-w-2xl min-w-0">
            <div className="inline-flex items-center gap-1 text-xs font-bold text-[#006948] uppercase tracking-wider">
              <span>Verified Network</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131b2e] tracking-tight">
              Find the right mentor for your journey
            </h2>
            <p className="text-sm sm:text-base text-[#3d4a42]">
              Browse verified founders, executives, and operators ready to walk alongside you on tactical milestones.
            </p>
          </div>
          <div className="flex items-center gap-1.5 self-start md:self-auto text-xs sm:text-sm text-[#3d4a42]">
            <span className="font-bold text-[#131b2e]">{filteredMentors.length}</span> mentors available now
          </div>
        </div>

        {/* Liquid Glass Search & Filter Bar */}
        <div className="w-full max-w-full min-w-0 liquid-glass p-4 lg:p-5 rounded-2xl shadow-sm mb-8 flex flex-col gap-4 overflow-hidden">
          {/* Top Row: Search Input + Selects */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center w-full min-w-0">
            {/* Search Input */}
            <div className="md:col-span-6 relative w-full min-w-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6d7a72]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, expertise, company, or role..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f2f3ff] text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30 placeholder:text-[#6d7a72]"
              />
            </div>

            {/* Availability Filter */}
            <div className="md:col-span-3 w-full min-w-0">
              <div className="relative w-full">
                <select
                  value={availabilityFilter}
                  onChange={(e) => setAvailabilityFilter(e.target.value)}
                  className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl bg-[#f2f3ff] text-xs sm:text-sm font-semibold text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30 cursor-pointer"
                >
                  <option value="all">Availability: All</option>
                  <option value="this-week">Available This Week</option>
                  <option value="today">Available Today</option>
                  <option value="weekend">Weekends Only</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#3d4a42]" />
              </div>
            </div>

            {/* Session Type Filter */}
            <div className="md:col-span-3 w-full min-w-0">
              <div className="relative w-full">
                <select
                  value={formatFilter}
                  onChange={(e) => setFormatFilter(e.target.value)}
                  className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl bg-[#f2f3ff] text-xs sm:text-sm font-semibold text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30 cursor-pointer"
                >
                  <option value="all">Format: 1-on-1 Sessions</option>
                  <option value="async">Async Code/Doc Review</option>
                  <option value="package">Monthly Advisory Retainer</option>
                  <option value="pitch">Pitch Deck Polish</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#3d4a42]" />
              </div>
            </div>
          </div>

          {/* Bottom Row: Category Filter Pills */}
          <div className="w-full max-w-full min-w-0 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#006948] text-white shadow-sm'
                    : 'bg-[#f2f3ff] hover:bg-[#eaedff] text-[#3d4a42] hover:text-[#131b2e]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Mentor Card Grid */}
        <div className="w-full min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="w-full min-w-0 bg-white/95 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-[#eaedff] group overflow-hidden"
            >
              <div className="space-y-4">
                {/* Badges & Status */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#85f8c4]/60 text-[#002114]">
                    <Flame className="w-3 h-3 text-[#006948]" />
                    {mentor.statusTag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#006948] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006948]" />
                    {mentor.availableBadge}
                  </span>
                </div>

                {/* Profile Header */}
                <div className="flex items-start gap-3.5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <h3
                        onClick={() => onSelectMentor(mentor)}
                        className="font-bold text-base text-[#131b2e] truncate group-hover:text-[#006948] transition-colors cursor-pointer"
                      >
                        {mentor.name}
                      </h3>
                      <ShieldCheck className="w-4 h-4 text-[#006948] shrink-0" />
                    </div>
                    <p className="text-xs text-[#3d4a42] truncate">{mentor.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3.5 h-3.5 text-[#fea619] fill-[#fea619]" />
                      <span className="text-xs font-bold text-[#131b2e]">{mentor.rating.toFixed(1)}</span>
                      <span className="text-xs text-[#3d4a42]">({mentor.reviewsCount} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Bio / Value Proposition */}
                <p className="text-xs sm:text-sm text-[#3d4a42] line-clamp-2 leading-relaxed">
                  {mentor.headline}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {mentor.coreDisciplines.slice(0, 3).map((disc) => (
                    <span
                      key={disc}
                      className="px-2.5 py-1 rounded-lg bg-[#f2f3ff] text-[#3d4a42] text-xs font-medium"
                    >
                      {disc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action Row */}
              <div className="mt-6 pt-4 border-t border-[#f2f3ff] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#6d7a72] uppercase tracking-wider block">
                    Starting at
                  </span>
                  <div className="text-lg font-bold text-[#131b2e]">
                    ${mentor.hourlyRate} <span className="text-xs font-normal text-[#3d4a42]">/ session</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectMentor(mentor)}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#3d4a42] hover:text-[#006948] hover:bg-[#f2f3ff] transition-colors"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => onOpenBooking(mentor)}
                    className="px-4 py-2 rounded-xl bg-[#006948] hover:bg-[#00855d] text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More CTA */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full liquid-glass hover:bg-[#eaedff] text-[#131b2e] font-semibold text-sm shadow-sm hover:shadow transition-all"
          >
            <span>Explore All 500+ Verified Mentors</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20 min-w-0" id="how-it-works">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2 min-w-0">
          <span className="text-xs font-bold text-[#006948] uppercase tracking-widest">
            Tactical Milestone Execution
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#131b2e]">
            Designed for clarity and measurable momentum
          </h2>
          <p className="text-sm sm:text-base text-[#3d4a42]">
            Mentorship should not be ambiguous chit-chat. Alongside couples vetted guidance with structured milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="liquid-glass p-8 rounded-3xl shadow-sm flex flex-col relative group hover:-translate-y-1 transition-all duration-300 border border-white/80">
            <div className="w-14 h-14 rounded-2xl bg-[#e2e7ff] text-[#006948] flex items-center justify-center text-2xl font-bold mb-5">
              1
            </div>
            <h3 className="text-lg font-bold text-[#131b2e] mb-2">Discover your ideal match</h3>
            <p className="text-xs sm:text-sm text-[#3d4a42] leading-relaxed mb-6">
              Filter operators by exact domain milestones: seed round prep, B2B outbound, tech refactoring, or VP-level executive hiring.
            </p>
            <div className="mt-auto flex items-center gap-2 text-[#006948] text-xs font-semibold">
              <span>Verified backgrounds</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="liquid-glass p-8 rounded-3xl shadow-sm flex flex-col relative group hover:-translate-y-1 transition-all duration-300 border border-white/80">
            <div className="w-14 h-14 rounded-2xl bg-[#e2e7ff] text-[#006948] flex items-center justify-center text-2xl font-bold mb-5">
              2
            </div>
            <h3 className="text-lg font-bold text-[#131b2e] mb-2">Choose session & prep agenda</h3>
            <p className="text-xs sm:text-sm text-[#3d4a42] leading-relaxed mb-6">
              Book synchronized 1-on-1 calls or async deep-dives. Submit context and documents in advance so every minute is high-impact.
            </p>
            <div className="mt-auto flex items-center gap-2 text-[#006948] text-xs font-semibold">
              <span>Zero calendar friction</span>
              <Calendar className="w-4 h-4" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="liquid-glass p-8 rounded-3xl shadow-sm flex flex-col relative group hover:-translate-y-1 transition-all duration-300 border border-white/80">
            <div className="w-14 h-14 rounded-2xl bg-[#e2e7ff] text-[#006948] flex items-center justify-center text-2xl font-bold mb-5">
              3
            </div>
            <h3 className="text-lg font-bold text-[#131b2e] mb-2">Learn, grow, and execute</h3>
            <p className="text-xs sm:text-sm text-[#3d4a42] leading-relaxed mb-6">
              Walk away with actionable sprint tasks, shared notes, and direct asynchronous accountability via Alongside milestone tracks.
            </p>
            <div className="mt-auto flex items-center gap-2 text-[#006948] text-xs font-semibold">
              <span>Milestone verified</span>
              <Flag className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY PREVIEW SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 min-w-0">
        <div className="liquid-glass-elevated rounded-3xl p-6 lg:p-10 shadow-sm border border-white/90">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-[#006948] text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>Peer & Executive Circles</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e] mt-1">
                Trending Founder Discussions
              </h2>
            </div>
            <button
              onClick={onNavigateCommunity}
              className="inline-flex items-center gap-1 text-[#006948] hover:text-[#00855d] text-sm font-semibold transition-colors"
            >
              <span>View all discussions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Discussion 1 */}
            <div className="p-5 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#85f8c4]/40 text-[#002114]">
                    Validation
                  </span>
                  <span className="text-xs text-[#6d7a72]">32m ago</span>
                </div>
                <h3
                  onClick={onNavigateCommunity}
                  className="font-bold text-sm sm:text-base text-[#131b2e] hover:text-[#006948] transition-colors cursor-pointer"
                >
                  How we validated our B2B SaaS demand in 3 weeks with $0 ad spend
                </h3>
                <p className="text-xs sm:text-sm text-[#3d4a42] line-clamp-2">
                  &ldquo;We set up 15 cold discovery interviews using LinkedIn Sales Navigator, asked only 4 non-leading questions, and pre-sold 6 quarterly pilots...&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#85f8c4] flex items-center justify-center text-[10px] font-bold text-[#002114]">
                    TC
                  </div>
                  <span className="text-xs text-[#3d4a42] font-medium">Tyler Cole</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#3d4a42]">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" /> 28
                  </span>
                  <button
                    onClick={() => toggleDiscussionLike('disc1')}
                    className={`flex items-center gap-1 transition-colors ${
                      likedPosts['disc1'] ? 'text-[#006948] font-bold' : 'hover:text-[#006948]'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${likedPosts['disc1'] ? 'fill-[#006948]' : ''}`} />
                    <span>{likesCount['disc1']}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Discussion 2 */}
            <div className="p-5 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#ffddb8]/60 text-[#2a1700]">
                    Governance
                  </span>
                  <span className="text-xs text-[#6d7a72]">2h ago</span>
                </div>
                <h3
                  onClick={onNavigateCommunity}
                  className="font-bold text-sm sm:text-base text-[#131b2e] hover:text-[#006948] transition-colors cursor-pointer"
                >
                  Dealing with early co-founder misalignment before signing cap-sheet splits
                </h3>
                <p className="text-xs sm:text-sm text-[#3d4a42] line-clamp-2">
                  &ldquo;Our mentor Julian walked us through dynamic equity vesting schedules that saved our pre-seed round when my technical co-founder went part-time...&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#ffddb8] flex items-center justify-center text-[10px] font-bold text-[#2a1700]">
                    AK
                  </div>
                  <span className="text-xs text-[#3d4a42] font-medium">Ananya Krishnan</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#3d4a42]">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" /> 43
                  </span>
                  <button
                    onClick={() => toggleDiscussionLike('disc2')}
                    className={`flex items-center gap-1 transition-colors ${
                      likedPosts['disc2'] ? 'text-[#006948] font-bold' : 'hover:text-[#006948]'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${likedPosts['disc2'] ? 'fill-[#006948]' : ''}`} />
                    <span>{likesCount['disc2']}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CALL TO ACTION BANNER */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16 min-w-0">
        <div className="relative overflow-hidden rounded-3xl bg-[#006948] text-white p-8 md:p-14 shadow-xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#85f8c4]/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#fea619]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-[#00855d] text-[#f5fff7]">
              Join 3,200+ Growth-Minded Operators
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to accelerate your next breakout milestone?
            </h2>
            <p className="text-sm sm:text-base text-[#85f8c4] leading-relaxed">
              Whether you are preparing for your seed round or expanding into international enterprise sales, the right guidance changes everything.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  document.getElementById('discovery-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-full bg-[#85f8c4] hover:bg-[#68dba9] text-[#002114] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
              >
                Browse All Mentors
              </button>
              <button
                onClick={() => {
                  if (onOpenAuthModal) {
                    onOpenAuthModal('signup');
                  } else {
                    onNavigateSettings();
                  }
                }}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md transition-all duration-200"
              >
                Apply to Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
