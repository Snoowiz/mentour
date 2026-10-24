'use client';

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  Calendar, 
  Clock, 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  Send, 
  MessageCircle, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  Lock 
} from 'lucide-react';
import { Mentor, UserCustomization } from '@/lib/data';

/* 1. BOOKING CHECKOUT MODAL */
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: Mentor | null;
  sessionDetails?: {
    format: string;
    date: string;
    time: string;
    price: number;
  };
  onConfirmSuccess: () => void;
}

export function BookingModal({
  isOpen,
  onClose,
  mentor,
  sessionDetails,
  onConfirmSuccess,
}: BookingModalProps) {
  const [confirmed, setConfirmed] = useState(false);
  const [prepNote, setPrepNote] = useState(
    'Key growth focus: reviewing Q4 inbound churn & pricing packaging for self-serve users.'
  );

  if (!isOpen || !mentor) return null;

  const price = sessionDetails?.price ?? mentor.hourlyRate;
  const format = sessionDetails?.format ?? '1-on-1 Deep Dive (45 min)';
  const date = sessionDetails?.date ?? 'Thu, Oct 24';
  const time = sessionDetails?.time ?? '10:00 AM PST';

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      onConfirmSuccess();
      setConfirmed(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="liquid-glass-elevated rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-white/90">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#f2f3ff] text-[#3d4a42] hover:text-[#131b2e] hover:bg-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!confirmed ? (
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold text-[#006948] uppercase tracking-wider">
                Confirmed Synchronization
              </span>
              <h3 className="text-xl font-bold text-[#131b2e] mt-1">Review & Confirm Session</h3>
              <p className="text-xs text-[#3d4a42]">
                Calendar invitations and Google Meet credentials will be generated automatically.
              </p>
            </div>

            {/* Mentor Snippet */}
            <div className="flex items-center gap-3.5 bg-[#f2f3ff] p-3.5 rounded-2xl">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-12 h-12 rounded-2xl object-cover shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <h4 className="font-bold text-sm text-[#131b2e]">{mentor.name}</h4>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#006948]" />
                </div>
                <p className="text-xs text-[#3d4a42] truncate">{mentor.role}</p>
              </div>
            </div>

            {/* Booking Details */}
            <div className="space-y-2 bg-white/80 p-4 rounded-2xl border border-[#eaedff]">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#3d4a42]">Format</span>
                <span className="font-bold text-[#131b2e]">{format}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#3d4a42]">Scheduled Date</span>
                <span className="font-bold text-[#131b2e]">{date}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#3d4a42]">Time Slot</span>
                <span className="font-bold text-[#131b2e]">{time}</span>
              </div>
              <div className="pt-2 border-t border-[#eaedff] flex justify-between items-center text-sm">
                <span className="font-bold text-[#131b2e]">Total Amount</span>
                <span className="font-bold text-lg text-[#006948]">${price}.00</span>
              </div>
            </div>

            {/* Agenda Prep Note */}
            <div>
              <label className="text-xs font-bold text-[#131b2e] block mb-1">
                Agenda / Topic for {mentor.name.split(' ')[0]}
              </label>
              <textarea
                value={prepNote}
                onChange={(e) => setPrepNote(e.target.value)}
                rows={2}
                className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30 resize-none leading-relaxed"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#3d4a42] hover:bg-[#f2f3ff] rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="px-6 py-2.5 rounded-full bg-[#006948] hover:bg-[#00855d] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow transition-all"
              >
                Confirm & Sync Calendar
              </button>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#85f8c4] text-[#006948] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#131b2e]">Session Confirmed!</h3>
            <p className="text-xs sm:text-sm text-[#3d4a42] max-w-sm mx-auto">
              You are booked with {mentor.name} on {date} at {time}. A Google Meet invitation and reminder checklist have been scheduled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* 2. LIVE VIDEO ROOM SIMULATOR MODAL */
interface VideoRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserCustomization;
}

export function VideoRoomModal({ isOpen, onClose, user }: VideoRoomModalProps) {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [activeTab, setActiveTab] = useState<'agenda' | 'chat'>('agenda');
  const [notes, setNotes] = useState(
    '• Key problem: 35% trial churn on day 14\n• Restructure tiered SLA packaging\n• Target 45-day milestone: 10 enterprise pilot letters of intent'
  );
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Elena Rostova', text: 'Hi Alex! Ready to dive into the self-serve loops?', time: '3:30 PM' },
    { sender: 'You', text: 'Yes! I have the retention cohort charts ready on screen 2.', time: '3:31 PM' },
  ]);
  const [chatInput, setChatInput] = useState('');

  if (!isOpen) return null;

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages([...chatMessages, { sender: 'You', text: chatInput, time: '3:32 PM' }]);
    setChatInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="liquid-glass-dark text-white rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-white/20">
        {/* Room Header */}
        <div className="h-14 px-6 flex items-center justify-between border-b border-white/10 bg-black/20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#85f8c4] animate-ping" />
            <h3 className="font-bold text-sm sm:text-base text-white">
              1-on-1 Growth Strategy Room
            </h3>
            <span className="hidden sm:inline-block text-xs text-[#85f8c4] bg-[#006948]/60 px-2.5 py-0.5 rounded-full font-mono">
              Live: 42:18
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas & Collaborative Split */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 min-h-0">
          {/* Video Preview Feeds (7 cols) */}
          <div className="md:col-span-7 bg-[#131b2e] p-4 flex flex-col justify-between relative overflow-hidden">
            {/* Main Speaker: Elena */}
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2gzphwWed8SflR2cDV3dS7_f20-adXzpUrtl7uNnrHkfQTKHJ2XQAbJWoUiDFKs4Gm4HvLfBZ8GZ3bPAj3T1BvTcY3GHGm1O9FIriqxjESdqdRDiHpjrj0TuVkNSlElQiJpv0huwh9wcHnMN9y2VpQ96FK1ldx20kldeZt67dOvn294ukLEFjVjYn189M68S_Tg94p58xA6n0_tlxTWRZlv74ImslTzmEpLAD6Csa9iTvwVCncBAytg"
                alt="Elena Rostova"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#85f8c4]" />
                <span>Sarah Chen (Lead Mentor)</span>
              </div>
            </div>

            {/* Self Feed PiP */}
            <div className="absolute top-6 right-6 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#85f8c4] bg-[#283044]">
              {cameraOn ? (
                <img src={user.avatar} alt="You" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-white/60">
                  Camera Off
                </div>
              )}
              <div className="absolute bottom-1 left-2 text-[10px] bg-black/60 px-1.5 py-0.5 rounded font-medium">
                You
              </div>
            </div>

            {/* Bottom In-Call Controls */}
            <div className="pt-3 flex items-center justify-center gap-3">
              <button
                onClick={() => setMicOn(!micOn)}
                className={`p-3 rounded-full transition-colors ${
                  micOn ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-[#ba1a1a] text-white'
                }`}
                title={micOn ? 'Mute Mic' : 'Unmute Mic'}
              >
                {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setCameraOn(!cameraOn)}
                className={`p-3 rounded-full transition-colors ${
                  cameraOn ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-[#ba1a1a] text-white'
                }`}
                title={cameraOn ? 'Stop Camera' : 'Start Camera'}
              >
                {cameraOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#ba1a1a] hover:bg-[#93000a] text-white text-xs font-bold transition-colors"
              >
                Leave Room
              </button>
            </div>
          </div>

          {/* Collaborative Panel (5 cols) */}
          <div className="md:col-span-5 bg-[#283044]/90 flex flex-col border-t md:border-t-0 md:border-l border-white/10 min-h-0">
            {/* Tabs */}
            <div className="flex border-b border-white/10 bg-black/20 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('agenda')}
                className={`flex-1 py-3 text-center transition-colors ${
                  activeTab === 'agenda' ? 'text-[#85f8c4] border-b-2 border-[#85f8c4]' : 'text-white/60'
                }`}
              >
                Collaborative Agenda Notes
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex-1 py-3 text-center transition-colors ${
                  activeTab === 'chat' ? 'text-[#85f8c4] border-b-2 border-[#85f8c4]' : 'text-white/60'
                }`}
              >
                Room Chat ({chatMessages.length})
              </button>
            </div>

            {/* Tab: Notes */}
            {activeTab === 'agenda' && (
              <div className="flex-1 p-4 flex flex-col gap-2 min-h-0">
                <p className="text-[11px] text-white/60">
                  Real-time synchronized notes shared between you and your mentor during the session.
                </p>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="flex-1 w-full bg-black/30 rounded-2xl p-3.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#85f8c4] resize-none font-mono leading-relaxed"
                />
              </div>
            )}

            {/* Tab: Chat */}
            {activeTab === 'chat' && (
              <div className="flex-1 flex flex-col min-h-0 p-4">
                <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="flex items-center justify-between text-[10px] text-white/60">
                        <span className="font-bold text-[#85f8c4]">{msg.sender}</span>
                        <span>{msg.time}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-black/40 text-white leading-relaxed">
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendChat} className="mt-3 flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type in room chat..."
                    className="flex-1 bg-black/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#85f8c4]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl bg-[#00855d] text-white hover:bg-[#006948]"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. SEND QUICK MESSAGE MODAL */
interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: Mentor | null;
  onSendSuccess: () => void;
}

export function MessageModal({ isOpen, onClose, mentor, onSendSuccess }: MessageModalProps) {
  const [message, setMessage] = useState('');

  if (!isOpen || !mentor) return null;

  const handleSend = () => {
    onSendSuccess();
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="liquid-glass-elevated rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border border-white/90">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#f2f3ff] text-[#3d4a42] hover:text-[#131b2e] hover:bg-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#85f8c4] flex items-center justify-center text-[#002114]">
              <MessageCircle className="w-5 h-5 text-[#006948]" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#131b2e]">Message {mentor.name}</h3>
              <p className="text-xs text-[#3d4a42]">Typically responds within 2 hours</p>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#131b2e] block mb-1">
              Your Growth Question or Context
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Briefly describe your company, your current stage (ARR or user count), and the specific bottleneck you'd like to unpack..."
              rows={4}
              className="w-full rounded-2xl bg-[#f2f3ff] text-xs text-[#131b2e] placeholder:text-[#6d7a72] p-3.5 focus:outline-none focus:ring-2 focus:ring-[#006948]/30 resize-none leading-relaxed"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-[#6d7a72] flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" /> Confidential & Protected
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#3d4a42] hover:bg-[#f2f3ff]"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!message.trim()}
                onClick={handleSend}
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#006948] hover:bg-[#00855d] disabled:opacity-50 text-white shadow-sm transition-all"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 4. ADD NEW MILESTONE MODAL */
interface MilestoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMilestone: (title: string, subtitle: string) => void;
}

export function MilestoneModal({ isOpen, onClose, onAddMilestone }: MilestoneModalProps) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddMilestone(title, subtitle || 'Custom founder milestone');
    setTitle('');
    setSubtitle('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="liquid-glass-elevated rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-white/90">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#f2f3ff] text-[#3d4a42] hover:text-[#131b2e] hover:bg-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="font-bold text-base text-[#131b2e]">Add New Mentorship Milestone</h3>
            <p className="text-xs text-[#3d4a42]">
              Track critical targets with your mentors across upcoming sprint cycles.
            </p>
          </div>

          <div>
            <label className="text-xs font-bold text-[#131b2e] block mb-1">Milestone Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Enterprise security review & SOC2 compliance"
              className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#131b2e] block mb-1">Target or Notes</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="e.g., Target: End of Q4 • Assigned to Mentor Session"
              className="w-full p-3 rounded-xl bg-[#f2f3ff] text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#3d4a42] hover:bg-[#f2f3ff] rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#006948] hover:bg-[#00855d] text-white shadow-sm"
            >
              Save Milestone
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* 5. JOIN ALONGSIDE MODAL */
interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoined: () => void;
}

export function JoinModal({ isOpen, onClose, onJoined }: JoinModalProps) {
  const [roleType, setRoleType] = useState<'mentee' | 'mentor'>('mentee');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="liquid-glass-elevated rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-white/90">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#f2f3ff] text-[#3d4a42] hover:text-[#131b2e] hover:bg-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-5 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#85f8c4] flex items-center justify-center text-[#002114] mx-auto shadow-sm">
            <Sparkles className="w-7 h-7 text-[#006948]" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#131b2e]">Join Alongside</h3>
            <p className="text-xs sm:text-sm text-[#3d4a42] max-w-sm mx-auto mt-1">
              Connect with vetted operators or share your strategic expertise with rising founders.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-left">
            <div
              onClick={() => setRoleType('mentee')}
              className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                roleType === 'mentee'
                  ? 'border-[#006948] bg-[#f2f3ff] shadow-sm'
                  : 'border-[#eaedff] bg-white hover:bg-[#f2f3ff]'
              }`}
            >
              <h4 className="font-bold text-xs sm:text-sm text-[#131b2e]">I am a Founder</h4>
              <p className="text-[11px] text-[#3d4a42] mt-0.5">
                Looking for tactical guidance and accountability.
              </p>
            </div>

            <div
              onClick={() => setRoleType('mentor')}
              className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                roleType === 'mentor'
                  ? 'border-[#006948] bg-[#f2f3ff] shadow-sm'
                  : 'border-[#eaedff] bg-white hover:bg-[#f2f3ff]'
              }`}
            >
              <h4 className="font-bold text-xs sm:text-sm text-[#131b2e]">I am an Operator</h4>
              <p className="text-[11px] text-[#3d4a42] mt-0.5">
                Apply to become a vetted executive mentor.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              onJoined();
              onClose();
            }}
            className="w-full py-3.5 rounded-full bg-[#006948] hover:bg-[#00855d] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow transition-all"
          >
            Continue with Google Workspaces
          </button>
        </div>
      </div>
    </div>
  );
}
