'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Briefcase, 
  KeyRound, 
  RefreshCw,
  Check
} from 'lucide-react';
import { UserCustomization } from '@/lib/data';

interface AuthScreenProps {
  initialMode?: 'login' | 'signup';
  onAuthSuccess: (user: UserCustomization, isNewSignup?: boolean) => void;
  onNavigateHome: () => void;
  onSwitchMode?: (mode: 'login' | 'signup') => void;
}

export default function AuthScreen({
  initialMode = 'login',
  onAuthSuccess,
  onNavigateHome,
  onSwitchMode,
}: AuthScreenProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [role, setRole] = useState<'mentee' | 'mentor'>('mentee');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  // Form Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('B2B Growth & GTM');
  const [termsAgreed, setTermsAgreed] = useState(true);

  const [prevInitialMode, setPrevInitialMode] = useState(initialMode);
  if (prevInitialMode !== initialMode) {
    setPrevInitialMode(initialMode);
    setMode(initialMode);
  }

  const switchMode = (newMode: 'login' | 'signup') => {
    setMode(newMode);
    setForgotPasswordOpen(false);
    if (onSwitchMode) {
      onSwitchMode(newMode);
    }
  };

  const handleSocialAuth = (provider: 'Google' | 'LinkedIn') => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onAuthSuccess({
        name: mode === 'signup' && firstName ? `${firstName} ${lastName}`.trim() : 'Alex Vance',
        role: role === 'mentor' ? 'Growth Mentor' : 'Founder & CEO',
        startupName: companyName || (role === 'mentor' ? 'Strategic Advisor' : 'NextGen SaaS'),
        stage: role === 'mentor' ? 'Vetted Mentor' : 'Seed Stage',
        bio: `Member authenticated with verified ${provider} profile. Connected to Alongside mentorship network.`,
        avatar: role === 'mentor' 
          ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpdNlqHW6YcUWbGqYn7MqTDfZ11t_Np7BCNgpKJZbX7fKaJ8oIoaU-ygA8BOx828uDAY6lIZGoQcl88BNJRp_YoPqp4lXqswknJpQbqF7fsPggtRZy6JImUfPpaGQ5I8-jfcBXH8Zjt0vZqcFAJH0mBw5H3GA1717fEj710PJcWDkVlROzXBTC-y34KgcrQHDnefB1Tl-Qit9MvG3Ipi9TQL8hqV1OquyV_dxsNsULLGhQAT33PghXwQ'
          : 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJgqNG3boTp9bwvstyfNV4TIaWCLDOmYWSfSWeNu_XdmeDQw4mZwx02xc6qRxBbijnTxiuVlRWUGEGOV6uKcBp0X92sQWBplHaVDON338ivn13T6kr-pCeG_sND-8OD9S0oM8E6w0XY7bgGfLd-fDgdUpALjOxN4knXgT9hLgg2ZBnOk-d59UJzVcfYKMZ3K7cJ2GsUk1YfJ4t2JF6w-0kVelRN0X19xzz82fp6aAFrpsErT7Js_IhHA',
        track: role === 'mentor' ? 'Executive Leadership' : 'Growth Track',
        glassIntensity: 'medium',
        ambientGlow: 'emerald',
        compactDensity: false,
        googleCalendarConnected: true,
        smsReminders: true,
        emailWeeklyDigest: true,
        defaultPrepNotes: 'Session focus: Product GTM milestones, conversion metrics, and pricing validation.'
      }, mode === 'signup');
    }, 700);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const displayName = mode === 'signup' 
        ? `${firstName || 'Alex'} ${lastName || 'Founder'}`.trim() 
        : (email ? email.split('@')[0].replace('.', ' ') : 'Alex Vance');

      onAuthSuccess({
        name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
        role: role === 'mentor' ? 'Vetted Mentor' : 'Founder & Operator',
        startupName: companyName || (role === 'mentor' ? 'Growth Advisory' : 'Veloce AI'),
        stage: role === 'mentor' ? 'Executive Mentor' : 'Early Stage',
        bio: `Alongside member focused on ${primaryGoal}. Active milestone collaborator.`,
        avatar: role === 'mentor'
          ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpdNlqHW6YcUWbGqYn7MqTDfZ11t_Np7BCNgpKJZbX7fKaJ8oIoaU-ygA8BOx828uDAY6lIZGoQcl88BNJRp_YoPqp4lXqswknJpQbqF7fsPggtRZy6JImUfPpaGQ5I8-jfcBXH8Zjt0vZqcFAJH0mBw5H3GA1717fEj710PJcWDkVlROzXBTC-y34KgcrQHDnefB1Tl-Qit9MvG3Ipi9TQL8hqV1OquyV_dxsNsULLGhQAT33PghXwQ'
          : 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJgqNG3boTp9bwvstyfNV4TIaWCLDOmYWSfSWeNu_XdmeDQw4mZwx02xc6qRxBbijnTxiuVlRWUGEGOV6uKcBp0X92sQWBplHaVDON338ivn13T6kr-pCeG_sND-8OD9S0oM8E6w0XY7bgGfLd-fDgdUpALjOxN4knXgT9hLgg2ZBnOk-d59UJzVcfYKMZ3K7cJ2GsUk1YfJ4t2JF6w-0kVelRN0X19xzz82fp6aAFrpsErT7Js_IhHA',
        track: 'Growth Track',
        glassIntensity: 'medium',
        ambientGlow: 'emerald',
        compactDensity: false,
        googleCalendarConnected: true,
        smsReminders: true,
        emailWeeklyDigest: true,
        defaultPrepNotes: `Primary milestone: ${primaryGoal}.`
      }, mode === 'signup');
    }, 800);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-in fade-in duration-300 min-w-0">
      {/* Back navigation */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3d4a42] hover:text-[#006948] transition-colors py-2 px-3 rounded-xl hover:bg-white/80"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to explore mentors</span>
        </button>
        <span className="text-xs text-[#6d7a72] hidden sm:inline">
          {mode === 'login' ? 'Returning member sign-in' : 'New membership application'}
        </span>
      </div>

      {/* Main Authentication Card */}
      <div className="w-full min-w-0 liquid-glass-elevated rounded-3xl shadow-2xl relative border border-white/95 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* LEFT COLUMN: Main Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              {/* Header Title */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#006948] to-[#00855d] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  A
                </div>
                <span className="font-bold text-lg text-[#131b2e] tracking-tight">Alongside</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
                {mode === 'login' ? 'Welcome back to Alongside' : 'Create your Alongside account'}
              </h1>

              {/* Mode Switcher Tabs (Login vs Sign Up) */}
              <div className="flex rounded-2xl bg-[#f2f3ff] p-1 mt-4 border border-[#eaedff]">
                <button
                  type="button"
                  onClick={() => switchMode('login')}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                    mode === 'login'
                      ? 'bg-white text-[#006948] shadow-sm'
                      : 'text-[#3d4a42] hover:text-[#131b2e]'
                  }`}
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => switchMode('signup')}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                    mode === 'signup'
                      ? 'bg-white text-[#006948] shadow-sm'
                      : 'text-[#3d4a42] hover:text-[#131b2e]'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Role Toggle for Sign Up */}
              {mode === 'signup' && (
                <div className="mt-3 p-1.5 rounded-2xl bg-[#eaedff]/60 border border-white/80 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('mentee')}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                      role === 'mentee'
                        ? 'bg-[#006948] text-white shadow-sm'
                        : 'text-[#3d4a42] hover:text-[#131b2e]'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>I want to learn & grow</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('mentor')}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                      role === 'mentor'
                        ? 'bg-[#006948] text-white shadow-sm'
                        : 'text-[#3d4a42] hover:text-[#131b2e]'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Apply as Mentor</span>
                  </button>
                </div>
              )}
            </div>

            {/* Password Reset Subview */}
            {forgotPasswordOpen ? (
              <div className="space-y-4 py-2">
                <div className="p-4 rounded-2xl bg-[#f2f3ff] border border-[#eaedff] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#131b2e]">
                    <KeyRound className="w-4 h-4 text-[#006948]" />
                    <span>Reset Your Password</span>
                  </div>
                  <p className="text-xs text-[#3d4a42]">
                    Enter your work email and we will send a password reset magic link.
                  </p>
                </div>

                {resetEmailSent ? (
                  <div className="p-4 rounded-2xl bg-[#85f8c4]/40 border border-[#006948]/30 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#006948] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#002114]">Password reset email dispatched!</p>
                      <p className="text-[11px] text-[#005137]">
                        Check your inbox for instructions to set your new password.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-bold text-[#131b2e] block mb-1">Work Email</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6d7a72]" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@company.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f2f3ff] text-xs sm:text-sm text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setResetEmailSent(true)}
                      className="w-full py-2.5 rounded-xl bg-[#006948] hover:bg-[#00855d] text-white text-xs font-bold shadow-sm transition-all"
                    >
                      Send Password Reset Link
                    </button>
                  </div>
                )}

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setForgotPasswordOpen(false);
                      setResetEmailSent(false);
                    }}
                    className="text-xs font-semibold text-[#006948] hover:underline"
                  >
                    ← Back to Log In
                  </button>
                </div>
              </div>
            ) : (
              /* Main Form Content */
              <div className="space-y-4">
                {/* 1-Click Social Auth Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => handleSocialAuth('Google')}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-white hover:bg-[#f2f3ff] text-xs font-bold text-[#131b2e] border border-[#eaedff] shadow-sm hover:shadow transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Google</span>
                  </button>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => handleSocialAuth('LinkedIn')}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-white hover:bg-[#f2f3ff] text-xs font-bold text-[#131b2e] border border-[#eaedff] shadow-sm hover:shadow transition-all"
                  >
                    <svg className="w-4 h-4" fill="#0A66C2" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn</span>
                  </button>
                </div>

                {/* Single-line centered divider with no line break */}
                <div className="relative flex items-center justify-center my-4 w-full">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#eaedff]" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-3 text-[11px] font-semibold text-[#6d7a72] uppercase tracking-wider whitespace-nowrap text-center">
                      or continue with email
                    </span>
                  </div>
                </div>

                {/* Form Inputs */}
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  {mode === 'signup' && (
                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[11px] font-bold text-[#131b2e] block mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Alex"
                          className="w-full px-3 py-2 rounded-xl bg-[#f2f3ff] text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-[#131b2e] block mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Vance"
                          className="w-full px-3 py-2 rounded-xl bg-[#f2f3ff] text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="text-[11px] font-bold text-[#131b2e] block mb-1">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#6d7a72]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#f2f3ff] text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] font-bold text-[#131b2e]">Password</label>
                      {mode === 'login' && (
                        <button
                          type="button"
                          onClick={() => setForgotPasswordOpen(true)}
                          className="text-[11px] text-[#006948] hover:underline font-semibold"
                        >
                          Forgot password?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#6d7a72]" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full pl-9 pr-10 py-2 rounded-xl bg-[#f2f3ff] text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6d7a72] hover:text-[#131b2e]"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {mode === 'signup' && (
                    <>
                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="text-[11px] font-bold text-[#131b2e] block mb-1">
                            Company / Startup
                          </label>
                          <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. Veloce AI"
                            className="w-full px-3 py-2 rounded-xl bg-[#f2f3ff] text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold text-[#131b2e] block mb-1">
                            Primary Focus Goal
                          </label>
                          <select
                            value={primaryGoal}
                            onChange={(e) => setPrimaryGoal(e.target.value)}
                            className="w-full px-2.5 py-2 rounded-xl bg-[#f2f3ff] text-xs text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#006948]/30"
                          >
                            <option value="B2B Growth & GTM">B2B Growth & GTM</option>
                            <option value="Seed / Series A Pitch">Seed / Series A Pitch</option>
                            <option value="Product Strategy & PLG">Product Strategy & PLG</option>
                            <option value="Engineering & CTO Scale">Engineering & CTO Scale</option>
                            <option value="Executive Coaching">Executive Coaching</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <input
                          type="checkbox"
                          id="terms"
                          checked={termsAgreed}
                          onChange={(e) => setTermsAgreed(e.target.checked)}
                          className="w-4 h-4 accent-[#006948] rounded cursor-pointer"
                          required
                        />
                        <label htmlFor="terms" className="text-[11px] text-[#3d4a42] cursor-pointer">
                          I agree to Alongside&apos;s <span className="text-[#006948] underline">Terms</span> and <span className="text-[#006948] underline">Privacy Policy</span>.
                        </label>
                      </div>
                    </>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-2xl bg-[#006948] hover:bg-[#00855d] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Verifying credentials...</span>
                      </>
                    ) : (
                      <>
                        <span>{mode === 'login' ? 'Sign In to Alongside' : 'Create Free Account'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* Bottom Mode Switch & Help Link */}
            <div className="pt-3 border-t border-[#eaedff] flex items-center justify-between text-xs">
              <span className="text-[#3d4a42]">
                {mode === 'login' ? "Don't have an account yet?" : 'Already have an Alongside account?'}
              </span>
              <button
                type="button"
                onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
                className="font-bold text-[#006948] hover:underline"
              >
                {mode === 'login' ? 'Sign up free' : 'Sign in here'}
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Social Proof, Trust Signals & Testimonial (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#006948] to-[#005137] text-white p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient liquid glow elements */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#85f8c4]/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-[#fea619]/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#00855d] text-[#f5fff7]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Vetted Executive Network
              </span>

              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Accelerate tactical milestones with founders who have done it before.
              </h2>

              {/* Trust Checkmarks */}
              <div className="space-y-3 pt-2">
                {[
                  '500+ Vetted startup founders & executives',
                  'Zero awkward chit-chat • Milestone agendas only',
                  'Automated Google Meet calendar synchronization',
                  '100% Satisfaction guarantee on every 1-on-1',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#85f8c4]">
                    <Check className="w-4 h-4 text-[#85f8c4] shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Testimonial Card */}
            <div className="relative z-10 mt-8 p-4.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-3">
              <div className="flex items-center gap-1 text-[#fea619]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#fea619]" />
                ))}
              </div>
              <p className="text-xs text-white/90 italic leading-relaxed">
                &ldquo;Booking two 45-minute sessions on Alongside saved our seed startup months of pricing trial-and-error. The caliber of operator mentorship is completely unmatched.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-1">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqduY6J-waR4L9ZG_2O3zbnckW01VY_YB9ueWkJn4HMtZEobPbHPYl719lA54ZSS6UioKNAGyKnkonpARbua6FzCkidpWCBW5DbtLJthGQlEhliatuSAtRO3ivVsZw4Q4M9qm0u7aJ83cv_gY-CUK9kD4wBvPWFHQC5getW4oKFilXE7taQg_vmp2YKkRAwB9eoCBZDBFe5Vp-YxE-SbADA3JnDZ21_NuFs0BsRJdIGaYBSUmxJTQJsQ"
                  alt="Marcus Chen"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-bold text-white">Marcus Chen</p>
                  <p className="text-[10px] text-white/70">Co-Founder @ RelayFlow (Seed)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
