'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  MapPin, 
  Star, 
  Zap, 
  UserCheck, 
  Clock, 
  Calendar as CalendarIcon, 
  Award, 
  MessageCircle, 
  CheckCircle, 
  ChevronRight, 
  Lock, 
  Video, 
  Handshake, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  HelpCircle
} from 'lucide-react';
import { Mentor, MENTORS } from '@/lib/data';

interface ProfileScreenProps {
  mentor: Mentor;
  onSelectMentor: (mentor: Mentor) => void;
  onOpenBooking: (mentor: Mentor, sessionDetails?: { format: string; date: string; time: string; price: number }) => void;
  onOpenMessageModal: (mentor: Mentor) => void;
  onBackToHome: () => void;
}

export default function ProfileScreen({
  mentor,
  onSelectMentor,
  onOpenBooking,
  onOpenMessageModal,
  onBackToHome,
}: ProfileScreenProps) {
  // Booking state
  const [selectedFormatId, setSelectedFormatId] = useState<string>(
    mentor.sessionFormats[0]?.id || 'deep-dive'
  );
  const [selectedDate, setSelectedDate] = useState<string>('Thu, Oct 24');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');

  const selectedFormat = mentor.sessionFormats.find((f) => f.id === selectedFormatId) || mentor.sessionFormats[0];

  const calendarDays = [
    { day: 'Mon', num: '20', label: 'Full', available: false },
    { day: 'Tue', num: '21', label: '2 slots', available: true },
    { day: 'Wed', num: '22', label: 'Full', available: false },
    { day: 'Thu', num: '24', label: '4 slots', available: true },
    { day: 'Fri', num: '25', label: '3 slots', available: true },
  ];

  const timeSlots = ['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'];

  // Recommended peer mentors
  const recommendedPeers = MENTORS.filter((m) => m.id !== mentor.id).slice(0, 3);

  const handleBookClick = () => {
    onOpenBooking(mentor, {
      format: selectedFormat.title + ` (${selectedFormat.duration})`,
      date: selectedDate,
      time: selectedTime + ' PST',
      price: selectedFormat.price,
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 min-w-0">
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-[#3d4a42] mb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1 hover:text-[#006948] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Find a Mentor</span>
        </button>
        <span className="text-[#bccac0]">/</span>
        <span className="capitalize">{mentor.category} Strategy</span>
        <span className="text-[#bccac0]">/</span>
        <span className="font-bold text-[#131b2e]">{mentor.name}</span>
      </nav>

      {/* 2. Main 2-Column Profile & Booking Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Profile Overview, Bio, Experience & Reviews (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Profile Card */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#eaedff]">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Portrait Avatar with Live Pulse */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-[#eaedff] shadow-md">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center bg-white rounded-full shadow-sm">
                  <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#85f8c4] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#006948]" />
                </span>
              </div>

              {/* Header Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#85f8c4] text-[#002114]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Vetted Partner
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#3d4a42] bg-[#f2f3ff] px-2.5 py-0.5 rounded-full font-medium">
                    <MapPin className="w-3 h-3 text-[#006948]" />
                    {mentor.location} ({mentor.timezone})
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-[#131b2e] tracking-tight mb-1">
                  {mentor.name}
                </h1>

                <p className="text-xs sm:text-sm text-[#3d4a42] leading-snug mb-4">
                  {mentor.role}
                </p>

                {/* Rating & Trust Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1 bg-[#f2f3ff] px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-[#fea619] fill-[#fea619]" />
                    <span className="text-xs font-bold text-[#131b2e]">{mentor.rating.toFixed(1)}</span>
                    <span className="text-xs text-[#3d4a42]">({mentor.reviewsCount} verified sessions)</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#006948] text-xs font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Top 1% Mentor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-[#f2f3ff] bg-[#f2f3ff]/60 rounded-2xl p-4 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#006948]">{mentor.sessionsCompleted}</p>
                <p className="text-[10px] sm:text-xs text-[#3d4a42] uppercase tracking-wider font-semibold mt-0.5">
                  Sessions Done
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#131b2e]">{mentor.responseRate}</p>
                <p className="text-[10px] sm:text-xs text-[#3d4a42] uppercase tracking-wider font-semibold mt-0.5">
                  Response Rate
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#855300]">{mentor.yearsMentoring} yrs</p>
                <p className="text-[10px] sm:text-xs text-[#3d4a42] uppercase tracking-wider font-semibold mt-0.5">
                  Mentoring
                </p>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#eaedff] space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#131b2e] flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#006948]" />
                <span>About {mentor.name.split(' ')[0]}</span>
              </h2>
              <span className="text-xs font-semibold text-[#006948] bg-[#e2e7ff] px-2.5 py-0.5 rounded-full">
                Growth Architecture
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#3d4a42] leading-relaxed whitespace-pre-line">
              {mentor.bio}
            </div>

            {/* Expertise Tags */}
            <div className="pt-2">
              <p className="text-xs font-bold text-[#131b2e] uppercase tracking-wider mb-2.5">
                Core Disciplines
              </p>
              <div className="flex flex-wrap gap-2">
                {mentor.coreDisciplines.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl bg-[#f2f3ff] text-[#3d4a42] text-xs font-medium hover:bg-[#eaedff] hover:text-[#006948] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Experience & Track Record */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#eaedff] space-y-4">
            <h2 className="text-lg font-bold text-[#131b2e] flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#006948]" />
              <span>Experience & Track Record</span>
            </h2>

            <div className="space-y-4 pt-1">
              {mentor.trackRecord.map((tr, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e2e7ff] flex items-center justify-center shrink-0 text-[#006948] font-bold text-sm">
                    {tr.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs sm:text-sm font-bold text-[#131b2e]">{tr.role}</h3>
                      <span className="text-[11px] text-[#6d7a72] font-mono">{tr.period}</span>
                    </div>
                    <p className="text-xs text-[#006948] font-semibold">{tr.company}</p>
                    <p className="text-xs text-[#3d4a42] mt-1 leading-relaxed">{tr.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What to Expect During Your Session */}
          <section className="bg-[#006948]/5 border border-[#85f8c4]/40 rounded-3xl p-6 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#00855d] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Handshake className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-[#131b2e]">
                  What to Expect During Your Session
                </h3>
                <p className="text-xs sm:text-sm text-[#3d4a42] leading-relaxed">
                  {mentor.expectations}
                </p>
              </div>
            </div>
          </section>

          {/* Founder Reviews */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#eaedff] space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#131b2e] flex items-center gap-2">
                <Star className="w-5 h-5 text-[#fea619] fill-[#fea619]" />
                <span>Founder Reviews ({mentor.reviewsCount})</span>
              </h2>
              <div className="flex items-center gap-1 text-[#fea619] text-xs font-bold">
                <span>★ {mentor.rating.toFixed(1)}</span>
                <span className="text-[#6d7a72] font-normal">Overall</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {mentor.reviews.map((rev) => (
                <div key={rev.id} className="bg-[#f2f3ff] rounded-2xl p-4 sm:p-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-white shrink-0 shadow-sm">
                        <img
                          src={rev.avatar}
                          alt={rev.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#131b2e]">{rev.author}</h4>
                        <p className="text-[11px] text-[#3d4a42]">{rev.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-[#fea619] text-xs font-bold">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3d4a42] italic leading-relaxed">
                    {rev.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Interactive Liquid-Glass Booking Panel (5 Cols) */}
        <div className="lg:col-span-5 sticky top-20 space-y-4">
          <div className="liquid-glass-elevated rounded-3xl p-6 shadow-xl relative overflow-hidden border border-white/95">
            {/* Top Emerald Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#006948] via-[#00855d] to-[#85f8c4]" />

            {/* Panel Header */}
            <div className="flex items-start justify-between mb-4 pt-1">
              <div>
                <h2 className="text-lg font-bold text-[#131b2e]">Book a Session</h2>
                <p className="text-xs text-[#3d4a42]">Direct calendar synchronization</p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#85f8c4]/60 text-[#002114]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006948] animate-pulse" />
                Responds in ~2h
              </span>
            </div>

            {/* STEP 1: Select Format */}
            <div className="space-y-2 mb-4">
              <label className="text-xs font-bold text-[#131b2e] uppercase tracking-wider block">
                1. Select Format
              </label>
              <div className="space-y-2">
                {mentor.sessionFormats.map((fmt) => {
                  const isSelected = selectedFormatId === fmt.id;
                  return (
                    <div
                      key={fmt.id}
                      onClick={() => setSelectedFormatId(fmt.id)}
                      className={`cursor-pointer p-3 rounded-2xl transition-all duration-200 border ${
                        isSelected
                          ? 'bg-[#f2f3ff] border-[#006948] shadow-sm'
                          : 'bg-white/80 border-[#eaedff] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center border transition-colors ${
                              isSelected
                                ? 'bg-[#006948] border-[#006948]'
                                : 'bg-transparent border-[#bccac0]'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#131b2e]">
                            {fmt.title}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-[#006948]">
                          ${fmt.price}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] text-[#3d4a42] mt-1 pl-6">
                        <span>{fmt.subtitle}</span>
                        <span className="font-medium text-[#131b2e]">{fmt.duration}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Select Date (Week Strip) */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#131b2e] uppercase tracking-wider">
                  2. Select Date
                </label>
                <span className="text-xs font-semibold text-[#006948]">October 2025</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5 text-center">
                {calendarDays.map((cal) => {
                  const dayString = `${cal.day}, Oct ${cal.num}`;
                  const isSelected = selectedDate === dayString;
                  if (!cal.available) {
                    return (
                      <div
                        key={cal.num}
                        className="p-2 rounded-xl bg-[#f2f3ff]/60 opacity-50 cursor-not-allowed"
                      >
                        <span className="block text-[11px] text-[#6d7a72]">{cal.day}</span>
                        <span className="block text-sm font-semibold text-[#131b2e] mt-0.5">{cal.num}</span>
                        <span className="block text-[10px] text-[#6d7a72] mt-0.5">Full</span>
                      </div>
                    );
                  }
                  return (
                    <button
                      key={cal.num}
                      type="button"
                      onClick={() => setSelectedDate(dayString)}
                      className={`p-2 rounded-xl transition-all ${
                        isSelected
                          ? 'bg-[#006948] text-white shadow-sm font-bold'
                          : 'bg-[#f2f3ff] text-[#131b2e] hover:bg-[#eaedff]'
                      }`}
                    >
                      <span className={`block text-[11px] ${isSelected ? 'opacity-90' : 'text-[#3d4a42]'}`}>
                        {cal.day}
                      </span>
                      <span className="block text-sm font-bold mt-0.5">{cal.num}</span>
                      <span
                        className={`block text-[10px] mt-0.5 ${
                          isSelected ? 'text-[#85f8c4]' : 'text-[#006948]'
                        }`}
                      >
                        {cal.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Select Time Slot */}
            <div className="space-y-2 mb-4">
              <label className="text-xs font-bold text-[#131b2e] uppercase tracking-wider block">
                3. Available Slots (PST)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#006948] text-white shadow-sm'
                          : 'bg-[#f2f3ff] text-[#131b2e] hover:bg-[#eaedff]'
                      }`}
                    >
                      {time} (PST)
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Real-time Pricing Breakdown */}
            <div className="bg-[#f2f3ff] rounded-2xl p-4 space-y-2 mb-4 border border-[#eaedff]">
              <div className="flex items-center justify-between text-xs text-[#131b2e]">
                <span className="font-medium truncate mr-2">
                  {selectedFormat.title} ({selectedFormat.duration})
                </span>
                <span className="font-bold">${selectedFormat.price}.00</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#3d4a42]">
                <span>{selectedDate} @ {selectedTime} (PST)</span>
                <span>Platform Fee: $0.00</span>
              </div>
              <div className="pt-2 border-t border-[#eaedff] flex items-center justify-between">
                <span className="text-xs font-bold text-[#131b2e]">Total Due</span>
                <span className="text-xl font-bold text-[#006948]">
                  ${selectedFormat.price}.00
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleBookClick}
                className="w-full py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm text-white bg-[#006948] hover:bg-[#00855d] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Continue to Booking</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onOpenMessageModal(mentor)}
                className="w-full py-2.5 px-4 rounded-2xl font-semibold text-xs text-[#131b2e] hover:text-[#006948] bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send {mentor.name.split(' ')[0]} a Quick Message</span>
              </button>
            </div>

            {/* Guarantee Note */}
            <div className="flex items-center justify-center gap-1.5 mt-4 text-[11px] text-[#3d4a42] text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[#006948]" />
              <span>100% Satisfaction Guarantee • Free reschedule &gt; 24h</span>
            </div>
          </div>

          {/* Automated Google Meet link info box */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#eaedff] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ffddb8] flex items-center justify-center text-[#855300] shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#131b2e]">Automated Google Meet link</p>
              <p className="text-[11px] text-[#3d4a42]">
                Calendar invite & preparation checklist sent instantly upon booking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION: Other Recommended Mentors */}
      <section className="mt-14 pt-10 border-t border-[#eaedff] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-[#006948] uppercase tracking-wider">
              Recommended Peers
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e] mt-1">
              Other Mentors in Business Strategy & Growth
            </h2>
          </div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#006948] hover:underline self-start sm:self-auto"
          >
            <span>Explore all mentors</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedPeers.map((peer) => (
            <div
              key={peer.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#eaedff] group"
            >
              <div>
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#eaedff] shrink-0">
                    <img
                      src={peer.avatar}
                      alt={peer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-[#fea619] text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-[#fea619]" />
                      <span>{peer.rating.toFixed(1)}</span>
                      <span className="text-[#6d7a72]">({peer.reviewsCount})</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#131b2e] truncate group-hover:text-[#006948] transition-colors">
                      {peer.name}
                    </h3>
                    <p className="text-[11px] text-[#3d4a42] truncate">{peer.role}</p>
                  </div>
                </div>

                <p className="text-xs text-[#3d4a42] line-clamp-2 mb-4 leading-relaxed">
                  {peer.headline}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {peer.coreDisciplines.slice(0, 2).map((disc) => (
                    <span
                      key={disc}
                      className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-[#f2f3ff] text-[#3d4a42]"
                    >
                      {disc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 bg-[#f2f3ff] px-3.5 py-2.5 rounded-2xl">
                <div>
                  <span className="text-sm font-bold text-[#131b2e]">${peer.hourlyRate}</span>
                  <span className="text-[11px] text-[#3d4a42]"> / 45 min</span>
                </div>
                <button
                  onClick={() => {
                    onSelectMentor(peer);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#006948] text-white hover:bg-[#00855d] transition-colors"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
