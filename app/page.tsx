'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import HomeScreen from '@/components/HomeScreen';
import ProfileScreen from '@/components/ProfileScreen';
import CommunityScreen from '@/components/CommunityScreen';
import SettingsScreen from '@/components/SettingsScreen';
import Footer from '@/components/Footer';
import { 
  BookingModal, 
  VideoRoomModal, 
  MessageModal, 
  MilestoneModal, 
  JoinModal 
} from '@/components/Modals';
import AuthScreen from '@/components/AuthScreen';
import { MENTORS, Mentor, DEFAULT_USER, UserCustomization } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'profile' | 'community' | 'settings' | 'login' | 'signup'>('home');
  const [selectedMentor, setSelectedMentor] = useState<Mentor>(MENTORS[0]);
  const [user, setUser] = useState<UserCustomization>(DEFAULT_USER);

  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeBookingMentor, setActiveBookingMentor] = useState<Mentor | null>(null);
  const [bookingSessionDetails, setBookingSessionDetails] = useState<{
    format: string;
    date: string;
    time: string;
    price: number;
  } | undefined>(undefined);

  const [videoRoomModalOpen, setVideoRoomModalOpen] = useState(false);
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [activeMessageMentor, setActiveMessageMentor] = useState<Mentor | null>(null);
  const [milestoneModalOpen, setMilestoneModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  // Global Toast
  const [globalToast, setGlobalToast] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setGlobalToast(msg);
    setTimeout(() => {
      setGlobalToast(null);
    }, 3500);
  };

  const handleSelectMentor = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setCurrentScreen('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (
    mentor: Mentor,
    sessionDetails?: { format: string; date: string; time: string; price: number }
  ) => {
    setActiveBookingMentor(mentor);
    setBookingSessionDetails(sessionDetails);
    setBookingModalOpen(true);
  };

  const handleOpenMessage = (mentor: Mentor) => {
    setActiveMessageMentor(mentor);
    setMessageModalOpen(true);
  };

  // Ambient aura styling based on user customization
  const getAmbientGlowClasses = () => {
    switch (user.ambientGlow) {
      case 'amber':
        return 'from-[#ffddb8]/30 via-transparent to-[#fea619]/10';
      case 'slate':
        return 'from-[#dae2fd]/30 via-transparent to-[#eaedff]/20';
      case 'emerald':
      default:
        return 'from-[#85f8c4]/20 via-transparent to-[#00855d]/10';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col relative w-full max-w-full overflow-x-hidden ${user.compactDensity ? 'text-sm' : ''}`}>
      {/* Dynamic Ambient Background Canvas */}
      <div
        className={`fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b ${getAmbientGlowClasses()} transition-all duration-700`}
      />

      {/* Global Toast */}
      {globalToast && (
        <div className="fixed top-20 right-6 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="bg-[#131b2e] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20">
            <CheckCircle2 className="w-5 h-5 text-[#85f8c4]" />
            <span className="text-xs sm:text-sm font-semibold">{globalToast}</span>
          </div>
        </div>
      )}

      {/* Shared Floating Liquid-Glass Header */}
      <Header
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        user={user}
        onOpenAuthModal={(mode) => {
          setCurrentScreen(mode);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area (padding-top 16 for fixed header) */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden min-w-0 pt-16 pb-20 md:pb-8">
        {currentScreen === 'home' && (
          <HomeScreen
            onSelectMentor={handleSelectMentor}
            onOpenBooking={(m) => handleOpenBooking(m)}
            onOpenVideoRoom={() => setVideoRoomModalOpen(true)}
            onNavigateCommunity={() => {
              setCurrentScreen('community');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateSettings={() => {
              setCurrentScreen('settings');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAuthModal={(mode) => {
              setCurrentScreen(mode);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'profile' && (
          <ProfileScreen
            mentor={selectedMentor}
            onSelectMentor={handleSelectMentor}
            onOpenBooking={handleOpenBooking}
            onOpenMessageModal={handleOpenMessage}
            onBackToHome={() => {
              setCurrentScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'community' && (
          <CommunityScreen
            user={user}
            onOpenVideoRoom={() => setVideoRoomModalOpen(true)}
            onOpenBooking={(m) => handleOpenBooking(m)}
            onSelectMentor={handleSelectMentor}
            onOpenNewMilestone={() => setMilestoneModalOpen(true)}
          />
        )}

        {currentScreen === 'settings' && (
          <SettingsScreen
            user={user}
            onSaveUser={(updated) => {
              setUser(updated);
              triggerToast('Dashboard customization applied across Alongside.');
            }}
            onNavigateHome={() => {
              setCurrentScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {(currentScreen === 'login' || currentScreen === 'signup') && (
          <AuthScreen
            initialMode={currentScreen}
            onSwitchMode={(mode) => {
              setCurrentScreen(mode);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateHome={() => {
              setCurrentScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAuthSuccess={(authenticatedUser, isNewSignup) => {
              setUser(authenticatedUser);
              triggerToast(
                isNewSignup
                  ? `Account created! Welcome to Alongside, ${authenticatedUser.name.split(' ')[0]}.`
                  : `Welcome back, ${authenticatedUser.name.split(' ')[0]}!`
              );
              setCurrentScreen('community');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Shared Footer */}
      <Footer onNavigateScreen={setCurrentScreen} />

      {/* Touch-Friendly Responsive Mobile Navigation Dock */}
      <MobileNav
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        mentor={activeBookingMentor}
        sessionDetails={bookingSessionDetails}
        onConfirmSuccess={() => {
          triggerToast('Booking confirmed! Google Meet invitation sent to your email.');
          setCurrentScreen('community');
        }}
      />

      <VideoRoomModal
        isOpen={videoRoomModalOpen}
        onClose={() => setVideoRoomModalOpen(false)}
        user={user}
      />

      <MessageModal
        isOpen={messageModalOpen}
        onClose={() => setMessageModalOpen(false)}
        mentor={activeMessageMentor}
        onSendSuccess={() => {
          triggerToast(`Message sent to ${activeMessageMentor?.name}. Response expected in ~2 hours.`);
        }}
      />

      <MilestoneModal
        isOpen={milestoneModalOpen}
        onClose={() => setMilestoneModalOpen(false)}
        onAddMilestone={(title, subtitle) => {
          triggerToast(`New milestone added: "${title}"`);
        }}
      />

      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        onJoined={() => {
          triggerToast('Welcome to Alongside! Your founder profile has been activated.');
          setCurrentScreen('community');
        }}
      />
    </div>
  );
}
