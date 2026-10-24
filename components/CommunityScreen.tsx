'use client';

import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  MessageSquare, 
  Bookmark, 
  Video, 
  CalendarDays, 
  Edit3, 
  Image as ImageIcon, 
  Tag, 
  Terminal, 
  BarChart2, 
  Send, 
  MoreHorizontal, 
  ThumbsUp, 
  Share2, 
  PartyPopper, 
  Check, 
  Hourglass, 
  Circle, 
  Plus, 
  Sparkles, 
  TrendingUp, 
  Bell, 
  Star, 
  CheckCircle, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { UserCustomization, CommunityPost, INITIAL_POSTS, Mentor, MENTORS } from '@/lib/data';

interface CommunityScreenProps {
  user: UserCustomization;
  onOpenVideoRoom: () => void;
  onOpenBooking: (mentor: Mentor) => void;
  onSelectMentor: (mentor: Mentor) => void;
  onOpenNewMilestone: () => void;
}

interface GoalItem {
  id: string;
  title: string;
  subtitle: string;
  status: 'done' | 'in_progress' | 'upcoming';
}

export default function CommunityScreen({
  user,
  onOpenVideoRoom,
  onOpenBooking,
  onSelectMentor,
  onOpenNewMilestone,
}: CommunityScreenProps) {
  const [posts, setPosts] = useState<CommunityPost[]>(INITIAL_POSTS);
  const [newPostText, setNewPostText] = useState('');
  const [selectedFeedTab, setSelectedFeedTab] = useState<'latest' | 'trending' | 'circle'>('latest');
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Interactive Goals Tracker
  const [goals, setGoals] = useState<GoalItem[]>([
    {
      id: 'g1',
      title: 'Complete GTM strategy review',
      subtitle: 'Verified with Marcus Vance • Oct 12',
      status: 'done',
    },
    {
      id: 'g2',
      title: 'Customer interview cohort script',
      subtitle: 'Reviewed in Session 2 • Oct 16',
      status: 'done',
    },
    {
      id: 'g3',
      title: 'Refine pricing tier model & SLA structure',
      subtitle: 'Scheduled for Elena Rostova session',
      status: 'in_progress',
    },
    {
      id: 'g4',
      title: 'Executive investor deck rehearsal',
      subtitle: 'Target milestone: Mid November',
      status: 'upcoming',
    },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      author: {
        name: user.name,
        role: `${user.role} @ ${user.startupName}`,
        avatar: user.avatar,
        badge: 'Mentee',
      },
      timeAgo: 'Just now',
      content: newPostText,
      tags: ['#FounderJourney', '#Growth'],
      likes: 1,
      commentsCount: 0,
      hasUserLiked: true,
    };

    setPosts([newPost, ...posts]);
    setNewPostText('');
    showToast('Your insight has been published to the Alongside Community!');
  };

  const toggleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const isLiked = !post.hasUserLiked;
          return {
            ...post,
            hasUserLiked: isLiked,
            likes: post.likes + (isLiked ? 1 : -1),
          };
        }
        return post;
      })
    );
  };

  const toggleBookmark = (postId: string) => {
    setBookmarkedPosts((prev) => {
      const isBookmarked = !prev[postId];
      showToast(isBookmarked ? 'Post saved to resources' : 'Post removed from saved resources');
      return { ...prev, [postId]: isBookmarked };
    });
  };

  const toggleGoal = (id: string) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === id) {
          const newStatus = g.status === 'done' ? 'in_progress' : 'done';
          return { ...g, status: newStatus };
        }
        return g;
      })
    );
  };

  const completedGoalsCount = goals.filter((g) => g.status === 'done').length;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 space-y-8 min-w-0">
      {/* Toast Notice */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-8 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="bg-[#131b2e] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20">
            <CheckCircle className="w-5 h-5 text-[#85f8c4]" />
            <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* 1. Welcome Banner & Metric Bar */}
      <section className="liquid-glass-elevated rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col gap-6 border border-white/90">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-sm ring-2 ring-[#85f8c4]"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#006948] rounded-full ring-2 ring-white" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#006948] font-bold">
                  Active Member
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#bccac0]" />
                <span className="text-xs text-[#3d4a42] font-semibold">{user.track}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#131b2e] tracking-tight">
                Welcome back, {user.name.split(' ')[0]}.
              </h1>
              <p className="text-xs sm:text-sm text-[#3d4a42] max-w-2xl">
                Keep moving forward with your goals, upcoming sessions, and community connections.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
            <button
              onClick={() => onOpenBooking(MENTORS[0])}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#006948] hover:bg-[#00855d] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>+ Book New Session</span>
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: 500, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#f2f3ff] hover:bg-[#eaedff] text-[#131b2e] text-xs sm:text-sm font-semibold transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#006948]" />
              <span>Explore Community</span>
            </button>
          </div>
        </div>

        {/* Metric Bar Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#85f8c4] flex items-center justify-center text-[#002114]">
              <Calendar className="w-5 h-5 text-[#006948]" />
            </div>
            <div>
              <p className="text-lg font-bold text-[#131b2e]">1</p>
              <p className="text-[11px] text-[#3d4a42] font-medium">Upcoming Session</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#e2e7ff] flex items-center justify-center text-[#006948]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-bold text-[#131b2e]">4</p>
              <p className="text-[11px] text-[#3d4a42] font-medium">Completed Sessions</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#ffddb8] flex items-center justify-center text-[#855300]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-bold text-[#131b2e]">{posts.length + 9}</p>
              <p className="text-[11px] text-[#3d4a42] font-medium">Community Discussions</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#e2e7ff] flex items-center justify-center text-[#3d4a42]">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-bold text-[#131b2e]">
                {3 + Object.values(bookmarkedPosts).filter(Boolean).length}
              </p>
              <p className="text-[11px] text-[#3d4a42] font-medium">Saved Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout: 2-Column Split (7 Cols Left / 5 Cols Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT / CENTER COLUMN (Community Feed & Priority Session) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Upcoming Mentorship Session Priority Card */}
          <div className="relative bg-white rounded-3xl shadow-sm p-6 overflow-hidden border border-[#eaedff]">
            {/* Left Emerald Accent Border */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#006948]" />

            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#85f8c4] text-[#002114]">
                    <span className="w-2 h-2 rounded-full bg-[#006948] animate-pulse" />
                    Confirmed 1-on-1
                  </span>
                  <span className="text-xs text-[#3d4a42] font-medium">In 18 hours</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#3d4a42] text-xs font-semibold bg-[#f2f3ff] px-3 py-1 rounded-full">
                  <span>45 mins</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={MENTORS[0].avatar}
                  alt="Elena Rostova"
                  className="w-14 h-14 rounded-2xl object-cover shadow-sm shrink-0"
                />
                <div className="min-w-0">
                  <h2 className="text-base sm:text-lg font-bold text-[#131b2e]">
                    Growth Strategy with Elena Rostova
                  </h2>
                  <p className="text-xs text-[#3d4a42] truncate">
                    Fractional CMO & Former Head of Growth @ Miro
                  </p>
                </div>
              </div>

              {/* Time and Agenda Box */}
              <div className="p-4 rounded-2xl bg-[#f2f3ff] flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-[#131b2e] text-xs sm:text-sm font-bold">
                  <CalendarDays className="w-4 h-4 text-[#006948]" />
                  <span>Tomorrow, Oct 24 at 10:00 AM PST</span>
                </div>
                <div className="text-xs text-[#3d4a42] leading-relaxed">
                  <strong className="text-[#131b2e]">Shared Agenda:</strong> Review Q4 SaaS churn metrics & refine self-serve onboarding conversion flow.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={onOpenVideoRoom}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#006948] hover:bg-[#00855d] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                >
                  <Video className="w-4 h-4" />
                  <span>Join Video Room</span>
                </button>
                <button
                  onClick={() => showToast('Calendar event downloaded & synchronized')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#f2f3ff] hover:bg-[#eaedff] text-[#131b2e] text-xs font-semibold transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#006948]" />
                  <span>Add to Google Calendar</span>
                </button>
                <button
                  onClick={() => showToast('Agenda notes draft opened')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#f2f3ff] hover:bg-[#eaedff] text-[#131b2e] text-xs font-semibold transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#006948]" />
                  <span>Prepare Agenda Notes</span>
                </button>
              </div>
            </div>
          </div>

          {/* Community Post Composer */}
          <div className="liquid-glass rounded-3xl p-5 shadow-sm flex flex-col gap-3.5 border border-white/90">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#85f8c4]"
              />
              <p className="text-xs sm:text-sm font-bold text-[#131b2e]">
                Share an insight or start a founder discussion
              </p>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-3">
              <textarea
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                placeholder="Share an idea, ask a question, or tell us what you're learning..."
                rows={3}
                className="w-full p-3.5 rounded-2xl bg-[#f2f3ff] text-xs sm:text-sm text-[#131b2e] placeholder:text-[#6d7a72] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006948]/20 transition-all resize-none"
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-1 text-[#3d4a42]">
                  <button
                    type="button"
                    onClick={() => showToast('Image attachment simulated')}
                    className="p-2 rounded-xl hover:bg-[#f2f3ff] hover:text-[#131b2e] transition-colors"
                    title="Attach visual"
                  >
                    <ImageIcon className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewPostText((prev) => prev + ' #B2BGrowth')}
                    className="p-2 rounded-xl hover:bg-[#f2f3ff] hover:text-[#131b2e] transition-colors"
                    title="Tag topic"
                  >
                    <Tag className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewPostText((prev) => prev + '\n```ts\n// Milestone Metric\n```')}
                    className="p-2 rounded-xl hover:bg-[#f2f3ff] hover:text-[#131b2e] transition-colors"
                    title="Insert code/data block"
                  >
                    <Terminal className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => showToast('Poll widget configured')}
                    className="p-2 rounded-xl hover:bg-[#f2f3ff] hover:text-[#131b2e] transition-colors"
                    title="Attach poll"
                  >
                    <BarChart2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#6d7a72] hidden sm:inline-block font-medium">
                    Visible to Alongside Network
                  </span>
                  <button
                    type="submit"
                    disabled={!newPostText.trim()}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#006948] hover:bg-[#00855d] disabled:opacity-50 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Insight</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Feed Filter / Tabs */}
          <div className="flex items-center justify-between px-1">
            <h3 className="text-base font-bold text-[#131b2e] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#006948]" />
              <span>Community Stream</span>
            </h3>
            <div className="flex items-center gap-1.5 bg-[#eaedff]/60 p-1 rounded-full border border-white/60">
              <button
                onClick={() => setSelectedFeedTab('latest')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  selectedFeedTab === 'latest'
                    ? 'bg-white text-[#006948] shadow-sm'
                    : 'text-[#3d4a42] hover:text-[#131b2e]'
                }`}
              >
                Latest
              </button>
              <button
                onClick={() => setSelectedFeedTab('trending')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  selectedFeedTab === 'trending'
                    ? 'bg-white text-[#006948] shadow-sm'
                    : 'text-[#3d4a42] hover:text-[#131b2e]'
                }`}
              >
                Trending
              </button>
              <button
                onClick={() => setSelectedFeedTab('circle')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  selectedFeedTab === 'circle'
                    ? 'bg-white text-[#006948] shadow-sm'
                    : 'text-[#3d4a42] hover:text-[#131b2e]'
                }`}
              >
                My Circle
              </button>
            </div>
          </div>

          {/* Posts Stream */}
          <div className="flex flex-col gap-5">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow border border-[#eaedff]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-11 h-11 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm text-[#131b2e]">{post.author.name}</h4>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            post.author.badge === 'Mentor'
                              ? 'bg-[#85f8c4] text-[#002114]'
                              : 'bg-[#eaedff] text-[#006948]'
                          }`}
                        >
                          {post.author.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#3d4a42]">{post.author.role} • {post.timeAgo}</p>
                    </div>
                  </div>

                  {post.badgeLabel && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ffddb8] text-[#2a1700] text-xs font-bold">
                      <PartyPopper className="w-3.5 h-3.5 text-[#855300]" />
                      <span>{post.badgeLabel}</span>
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#131b2e] leading-relaxed whitespace-pre-line">
                  <p>{post.content}</p>

                  {post.points && (
                    <ol className="space-y-2 list-decimal list-inside text-[#3d4a42] pl-1">
                      {post.points.map((pt, idx) => (
                        <li key={idx}>
                          <span className="text-[#131b2e] font-medium">{pt.split('.')[0]}.</span>
                          <span>{pt.substring(pt.indexOf('.') + 1)}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>

                {/* Milestone Embedded Snippet if available */}
                {post.milestoneBanner && (
                  <div className="p-4 rounded-2xl bg-[#f2f3ff] flex items-center justify-between gap-3 border border-[#eaedff]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#85f8c4] flex items-center justify-center text-[#002114] shrink-0">
                        <CheckCircle className="w-5 h-5 text-[#006948]" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[#131b2e]">
                          {post.milestoneBanner.title}
                        </p>
                        <p className="text-[11px] text-[#3d4a42]">
                          {post.milestoneBanner.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#006948] shrink-0">
                      {post.milestoneBanner.attained}
                    </span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-xl bg-[#f2f3ff] text-xs text-[#006948] font-semibold hover:bg-[#eaedff] cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-[#f2f3ff]">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                        post.hasUserLiked ? 'text-[#006948]' : 'text-[#3d4a42] hover:text-[#006948]'
                      }`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${post.hasUserLiked ? 'fill-[#006948]' : ''}`} />
                      <span>{post.likes}</span>
                    </button>

                    <button
                      onClick={() => showToast('Opening conversation thread...')}
                      className="flex items-center gap-1.5 text-xs text-[#3d4a42] hover:text-[#006948] font-semibold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.commentsCount} comments</span>
                    </button>

                    <button
                      onClick={() => showToast('Share link copied to clipboard')}
                      className="flex items-center gap-1.5 text-xs text-[#3d4a42] hover:text-[#006948] font-semibold transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                  </div>

                  <button
                    onClick={() => toggleBookmark(post.id)}
                    className="text-[#3d4a42] hover:text-[#006948] transition-colors p-1"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        bookmarkedPosts[post.id] ? 'fill-[#006948] text-[#006948]' : ''
                      }`}
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT SUPPORTING SIDEBAR PANEL (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* 1. Your Mentorship Goals Checklist */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#eaedff] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#006948]" />
                <h3 className="font-bold text-sm sm:text-base text-[#131b2e]">
                  Your Mentorship Goals
                </h3>
              </div>
              <span className="text-xs font-bold text-[#006948] bg-[#85f8c4] px-2.5 py-0.5 rounded-full">
                {completedGoalsCount} of {goals.length} Done
              </span>
            </div>

            {/* Progress Rail */}
            <div className="w-full bg-[#f2f3ff] rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#006948] h-full rounded-full transition-all duration-500"
                style={{ width: `${(completedGoalsCount / goals.length) * 100}%` }}
              />
            </div>

            {/* Goal Items */}
            <div className="flex flex-col gap-2.5 pt-1">
              {goals.map((g) => {
                const isDone = g.status === 'done';
                return (
                  <div
                    key={g.id}
                    onClick={() => toggleGoal(g.id)}
                    className={`flex items-start gap-3 p-3 rounded-2xl cursor-pointer transition-colors border ${
                      isDone
                        ? 'bg-[#f2f3ff]/60 border-transparent'
                        : 'bg-white border-[#eaedff] hover:bg-[#f2f3ff]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center mt-0.5 transition-colors ${
                        isDone
                          ? 'bg-[#006948] text-white'
                          : 'border border-[#bccac0] text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-xs font-semibold truncate ${
                          isDone ? 'line-through text-[#6d7a72]' : 'text-[#131b2e]'
                        }`}
                      >
                        {g.title}
                      </p>
                      <p className="text-[11px] text-[#3d4a42] truncate">{g.subtitle}</p>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        isDone
                          ? 'bg-[#85f8c4]/60 text-[#002114]'
                          : g.status === 'in_progress'
                          ? 'bg-[#ffddb8] text-[#2a1700]'
                          : 'bg-[#f2f3ff] text-[#3d4a42]'
                      }`}
                    >
                      {isDone ? 'Done' : g.status === 'in_progress' ? 'In Progress' : 'Upcoming'}
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onOpenNewMilestone}
              className="w-full text-center py-2 text-[#006948] hover:text-[#00855d] text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add new milestone</span>
            </button>
          </div>

          {/* 2. Recommended Mentors for Alex */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#eaedff] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#006948]" />
                <h3 className="font-bold text-sm sm:text-base text-[#131b2e]">
                  Recommended For You
                </h3>
              </div>
              <button
                onClick={() => onSelectMentor(MENTORS[0])}
                className="text-xs font-bold text-[#006948] hover:underline"
              >
                See all
              </button>
            </div>
            <p className="text-xs text-[#3d4a42]">
              Curated based on your SaaS subscription model and B2B growth profile.
            </p>

            <div className="flex flex-col gap-3">
              {/* Daniel Chen */}
              <div className="p-3.5 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA41Gku5Y3Vc9JbuF_7uNEC93l_1fGUW_E9yWAkfGaM-Tx8Va8WJ9sjUJso50qXCEwj6Puw0EYYiOPGBXJKRKW0kwFiXYM8ZNzuNEwQHNydy-YLwrXu5mZ1Bj93-elgZqFL9tR-UlQw_O6-s5TTdh2cnVz_UeGznC4xIM3Pf-DdBVaO6q_irvgyzspdJXImn5B_oSmgtOmQYGUu5Whhscjs4U-HpMwwZgPHLP-TcnK35tTp5vBUI9mcxQ"
                    alt="Daniel Chen"
                    className="w-12 h-12 rounded-2xl object-cover shadow-sm shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-[#131b2e] truncate">
                      Daniel Chen
                    </h4>
                    <p className="text-[11px] text-[#3d4a42] truncate">CPO @ StackLogic • Ex-Figma</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 text-[#fea619] fill-[#fea619]" />
                      <span className="text-[11px] font-bold text-[#131b2e]">4.9</span>
                      <span className="text-[11px] text-[#6d7a72]">(38 reviews)</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenBooking(MENTORS[3])}
                  className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#006948] hover:text-white text-[#006948] text-xs font-bold transition-all shadow-sm shrink-0"
                >
                  View
                </button>
              </div>

              {/* Maya Lindqvist */}
              <div className="p-3.5 rounded-2xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVIPJmQU74PRYrB_8_S8k3NlJuE14yhagY6hgx3BjnuQk0fXtQOhVrKiV548ibU38CxZPBtkZPfVF8uOpX52wJln98Gemcmy6KXojY0uKDIKOg730OA3XR5ge_aBL7m8GOPp3-Gi0DNbFkc7B35oDNgOvDzWiBptBojJAkkmP_BiHQu665SaFvSw6lbDGN3R4IElysyJIsi37pSGYppyw0T90FcnArMDzm7UNQxJqjEhzFtPPBmYZl6g"
                    alt="Maya Lindqvist"
                    className="w-12 h-12 rounded-2xl object-cover shadow-sm shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-[#131b2e] truncate">
                      Maya Lindqvist
                    </h4>
                    <p className="text-[11px] text-[#3d4a42] truncate">Head of Sales @ NordMetric</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 text-[#fea619] fill-[#fea619]" />
                      <span className="text-[11px] font-bold text-[#131b2e]">5.0</span>
                      <span className="text-[11px] text-[#6d7a72]">(52 reviews)</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenBooking(MENTORS[4])}
                  className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#006948] hover:text-white text-[#006948] text-xs font-bold transition-all shadow-sm shrink-0"
                >
                  View
                </button>
              </div>
            </div>
          </div>

          {/* 3. Trending Topics */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#eaedff] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#006948]" />
              <h3 className="font-bold text-sm sm:text-base text-[#131b2e]">Trending Topics</h3>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { tag: 'B2BGrowth', count: '142 discussions' },
                { tag: 'Fundraising2024', count: '98 discussions' },
                { tag: 'ProductStrategy', count: '74 discussions' },
                { tag: 'TechHiring', count: '61 discussions' },
              ].map((topic) => (
                <div
                  key={topic.tag}
                  onClick={() => setNewPostText((prev) => prev + ` #${topic.tag}`)}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f2f3ff] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-[#f2f3ff] group-hover:bg-[#85f8c4] text-[#006948] flex items-center justify-center text-xs font-bold transition-colors">
                      #
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#131b2e] group-hover:text-[#006948] transition-colors">
                      {topic.tag}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#6d7a72]">{topic.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Recent Activity */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#eaedff] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#006948]" />
                <h3 className="font-bold text-sm sm:text-base text-[#131b2e]">Recent Activity</h3>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#006948]" />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#f2f3ff]/80">
                <div className="w-8 h-8 rounded-full bg-[#85f8c4] flex items-center justify-center text-[#002114] shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#006948]" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs text-[#131b2e]">
                    <strong className="font-bold">Elena Rostova</strong> accepted your session agenda.
                  </p>
                  <p className="text-[10px] text-[#6d7a72]">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#f2f3ff]/80">
                <div className="w-8 h-8 rounded-full bg-[#e2e7ff] flex items-center justify-center text-[#006948] shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs text-[#131b2e]">
                    <strong className="font-bold">David Kim</strong> replied to your thread in{' '}
                    <span className="text-[#006948] font-semibold">#DesignSystems</span>.
                  </p>
                  <p className="text-[10px] text-[#6d7a72]">5 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#f2f3ff]/80">
                <div className="w-8 h-8 rounded-full bg-[#ffddb8] flex items-center justify-center text-[#855300] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs text-[#131b2e]">
                    Your founder profile was viewed by 3 mentors this week.
                  </p>
                  <p className="text-[10px] text-[#6d7a72]">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
