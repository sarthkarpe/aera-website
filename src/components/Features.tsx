'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ScanFace,
  Lock,
  Eye,
  EyeOff,
  Cpu,
  Key,
  Laptop,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  Sliders,
  Maximize2,
  X,
} from 'lucide-react';

export function Features() {
  const [blurPreview, setBlurPreview] = useState(false);
  const [authView, setAuthView] = useState<'lockscreen' | 'menubar' | 'appearance'>('lockscreen');
  const [featureLightbox, setFeatureLightbox] = useState<string | null>(null);

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
            CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Security that feels natural.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Thoughtful protection, without getting in your way.
          </p>
        </div>

        {/* Feature 1: Face Recognition */}
        <div className="mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Copy */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                <ScanFace className="w-3.5 h-3.5" />
                <span>On-Device Biometrics</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Recognize you.
                <br />
                Keep things personal.
              </h3>

              <p className="text-text-secondary leading-relaxed">
                Aera uses its face-recognition functionality to support a more personal security experience on your Mac. All inference runs directly on Apple Silicon neural engines—no data ever leaves your device.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Mathematical face embeddings (no raw photographs stored)',
                  'AES-GCM encryption with key stored in your Mac’s Keychain',
                  'Configurable sensitivity thresholds: Lower, Standard, or Higher',
                  'Optical sensor assistance: Mac password & Touch ID remain primary fallback',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-text-muted flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                <span>
                  Webcam face recognition is an optical convenience layer rather than a hardware depth projector. Aera works alongside macOS security and never claims infallible identification.
                </span>
              </div>
            </div>

            {/* Visual: Real Screenshot of "Your Face" Tab */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl p-4 sm:p-6 bg-gradient-to-b from-[#161826] to-[#0E1018] border border-white/[0.12] shadow-2xl space-y-4 group">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                    <span className="text-xs font-medium text-white/80 ml-2">Your Face — Biometric Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      • Ready
                    </span>
                    <button
                      onClick={() => setFeatureLightbox('/images/app-yourface.png')}
                      className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                      title="Enlarge screenshot"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Real App Screenshot */}
                <div
                  className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/40 border border-white/[0.06] cursor-pointer"
                  onClick={() => setFeatureLightbox('/images/app-yourface.png')}
                >
                  <Image
                    src="/images/app-yourface.png"
                    alt="Aera Face Recognition and Enrollment Settings"
                    fill
                    className="object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] pointer-events-none" />
                </div>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-black/30 border border-white/[0.06] flex items-center gap-2.5 text-xs">
                    <Cpu className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="text-white font-medium block">Core ML Engine</span>
                      <span className="text-[11px] text-text-muted">Runs 100% on Apple Silicon</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/30 border border-white/[0.06] flex items-center gap-2.5 text-xs">
                    <Key className="w-4 h-4 text-secondary shrink-0" />
                    <div>
                      <span className="text-white font-medium block">macOS Keychain</span>
                      <span className="text-[11px] text-text-muted">AES-GCM encryption key</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Application Locking */}
        <div className="mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual: Real Screenshot of "App Lock" Tab with Interactive Blur Feature */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-2xl p-4 sm:p-6 bg-gradient-to-b from-[#161826] to-[#0E1018] border border-white/[0.12] shadow-2xl space-y-4 group">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                    <span className="text-xs font-medium text-white/80 ml-2">App Lock — Workspace Protection</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Privacy Blur Toggle */}
                    <button
                      onClick={() => setBlurPreview(!blurPreview)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-medium text-white border border-white/10 transition-colors"
                      title="Toggle simulated lock shield on real UI"
                    >
                      {blurPreview ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5 text-secondary" />
                          <span>Shield: ON</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5 text-primary" />
                          <span>Shield: OFF</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setFeatureLightbox('/images/app-applock.png')}
                      className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                      title="Enlarge screenshot"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Real App Screenshot with interactive privacy shield */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/40 border border-white/[0.06]">
                  <Image
                    src="/images/app-applock.png"
                    alt="Aera Application Locking Interface with WhatsApp and Teams"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />

                  {/* Frosted Privacy Shield Simulation */}
                  {blurPreview && (
                    <div className="absolute inset-0 bg-black/75 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-200">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center mb-3 shadow-xl shadow-secondary/20">
                        <Lock className="w-6 h-6 text-secondary" />
                      </div>
                      <p className="text-sm font-semibold text-white">App Locked by Aera</p>
                      <p className="text-xs text-white/70 mt-1 max-w-xs">
                        Looking for your face or waiting for Touch ID / system password to unlock.
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] pointer-events-none" />
                </div>

                {/* Informational Subtext */}
                <div className="flex items-center justify-between text-xs text-text-muted pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-white/80">Relaunch protection active</span>
                  </span>
                  <span>Supports Entire display or App windows coverage</span>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-medium text-secondary">
                <Lock className="w-3.5 h-3.5" />
                <span>Application Protection</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Your apps.
                <br />
                Your control.
              </h3>

              <p className="text-text-secondary leading-relaxed">
                Add a layer of privacy to selected applications so your personal workspace stays yours. Choose whether to obscure the entire screen or apply coverage specifically to protected windows.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Add any installed macOS application (e.g. WhatsApp, Microsoft Teams, Mail)',
                  'Flexible relock timers: immediately on switch away, 5 minutes, or custom intervals',
                  'Dual coverage modes: Entire display shielding or individual app window coverage',
                  'Relaunch protection ensures closed apps relock immediately upon reopen',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-text-muted flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                <span>
                  App Lock hides app content when you step away. It does not isolate application processes or tamper with macOS system sandboxing.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Authentication Assistance */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Copy */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-xs font-medium text-tertiary">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Workflow Assistance</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Less friction.
                <br />
                Thoughtful security.
              </h3>

              <p className="text-text-secondary leading-relaxed">
                Aera is designed to assist with authentication workflows on your Mac while keeping the experience simple. Wake your Mac, let Aera recognize your presence, and seamlessly transition into your workspace.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Lock-screen assistant enters your encrypted password upon verified face match',
                  'Dynamic Notch Island gives subtle, non-intrusive status feedback',
                  'Configurable unlock styles: Minimal notch pill or Original full badge',
                  'Requires user-approved Camera and Accessibility permissions to coordinate safely',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-text-muted flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                <span>
                  Aera operates strictly within user-approved Accessibility and Keychain permissions. It does not tamper with macOS kernel integrity or Apple Secure Enclave protections.
                </span>
              </div>
            </div>

            {/* Visual: Interactive Tab Switcher between Lock Screen and Appearance screenshots */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl p-4 sm:p-6 bg-gradient-to-b from-[#161826] to-[#0E1018] border border-white/[0.12] shadow-2xl space-y-4 group">
                {/* Window Header with View Selector */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                    <span className="text-xs font-medium text-white/80 ml-2">
                      {authView === 'lockscreen' && 'Lock Screen — Face Unlock'}
                      {authView === 'menubar' && 'Menu Bar — Instant Status Flyout'}
                      {authView === 'appearance' && 'Appearance — Dynamic Notch Style'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* View Switcher Tabs */}
                    <div className="p-0.5 rounded-lg bg-white/[0.06] border border-white/10 flex items-center text-xs">
                      <button
                        onClick={() => setAuthView('lockscreen')}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          authView === 'lockscreen'
                            ? 'bg-tertiary text-white font-medium shadow-sm'
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Lock Screen
                      </button>
                      <button
                        onClick={() => setAuthView('menubar')}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          authView === 'menubar'
                            ? 'bg-tertiary text-white font-medium shadow-sm'
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Menu Bar
                      </button>
                      <button
                        onClick={() => setAuthView('appearance')}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          authView === 'appearance'
                            ? 'bg-tertiary text-white font-medium shadow-sm'
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Notch Style
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        setFeatureLightbox(
                          authView === 'lockscreen'
                            ? '/images/app-lockscreen.png'
                            : authView === 'menubar'
                            ? '/images/app-menubar.jpg'
                            : '/images/app-appearance.png'
                        )
                      }
                      className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                      title="Enlarge screenshot"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Real App Screenshot */}
                <div
                  className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/40 border border-white/[0.06] cursor-pointer"
                  onClick={() =>
                    setFeatureLightbox(
                      authView === 'lockscreen'
                        ? '/images/app-lockscreen.png'
                        : authView === 'menubar'
                        ? '/images/app-menubar.jpg'
                        : '/images/app-appearance.png'
                    )
                  }
                >
                  <Image
                    src={
                      authView === 'lockscreen'
                        ? '/images/app-lockscreen.png'
                        : authView === 'menubar'
                        ? '/images/app-menubar.jpg'
                        : '/images/app-appearance.png'
                    }
                    alt={
                      authView === 'lockscreen'
                        ? 'Aera Lock Screen face unlock and permission settings'
                        : authView === 'menubar'
                        ? 'Aera macOS Menu Bar popover and quick toggles'
                        : 'Aera Appearance unlock animation and Notch Island settings'
                    }
                    fill
                    className="object-cover object-top transition-all duration-300"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] pointer-events-none" />
                </div>

                {/* Subtitle description */}
                <p className="text-xs text-text-muted">
                  {authView === 'lockscreen' &&
                    'Verified requirements: Face setup, Camera access, Accessibility permission, and Keychain-encrypted password.'}
                  {authView === 'menubar' &&
                    'Instant menu bar presence: Toggle Lock Screen and App Lock, pause face recognition, or open Settings with ⌘,'}
                  {authView === 'appearance' &&
                    'Interactive Notch feedback: Replay animation and switch between Minimal and Original styles.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Screenshot Lightbox Modal */}
      {featureLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setFeatureLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#141622] rounded-2xl border border-white/20 shadow-2xl overflow-hidden p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 border-b border-white/10 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Aera — Native Application Screenshot</span>
              <button
                onClick={() => setFeatureLightbox(null)}
                className="p-1.5 rounded-lg text-white/60 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mt-2 bg-black">
              <Image
                src={featureLightbox}
                alt="Aera High Resolution Screenshot"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
