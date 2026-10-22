'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ScanFace,
  Shield,
  Lock,
  Sparkles,
  Maximize2,
  X,
  CheckCircle2,
  Sliders,
  Eye,
} from 'lucide-react';

export const appScreens = [
  {
    id: 'overview',
    label: 'Overview',
    image: '/images/app-overview.png',
    badge: 'Aera is ready',
    title: 'Central Protection Hub',
    description: 'Real-time security overview, active protection status, and unlock activity log.',
  },
  {
    id: 'menubar',
    label: 'Menu Bar',
    image: '/images/app-menubar.jpg',
    badge: 'Flyout Menu',
    title: 'Quick Menu Bar Controls',
    description: 'Instant status flyout with toggles for Lock Screen, App Lock, and face pause.',
  },
  {
    id: 'lockscreen',
    label: 'Lock Screen',
    image: '/images/app-lockscreen.png',
    badge: 'Face Unlock',
    title: 'Lock Screen Assistance',
    description: 'Wakes your Mac, checks camera liveness, and enters your Keychain-saved password.',
  },
  {
    id: 'applock',
    label: 'App Lock',
    image: '/images/app-applock.png',
    badge: '2 Apps Protected',
    title: 'Application Privacy Lock',
    description: 'Selectively shields apps like WhatsApp & Teams with instant or timed relock.',
  },
  {
    id: 'yourface',
    label: 'Your Face',
    image: '/images/app-yourface.png',
    badge: 'On-Device Face Data',
    title: 'Local Biometric Enrollment',
    description: 'Stores mathematical 512-dim face embeddings locally with Keychain encryption.',
  },
  {
    id: 'appearance',
    label: 'Appearance',
    image: '/images/app-appearance.png',
    badge: 'Notch Island',
    title: 'Dynamic Notch Feedback',
    description: 'Customizable unlock animations integrated with the native MacBook camera notch.',
  },
  {
    id: 'about',
    label: 'About Aera',
    image: '/images/app-about.png',
    badge: 'Version 1.0.0',
    title: 'App & Data Management',
    description: 'Version verification, privacy statement, and one-click clean uninstaller.',
  },
] as const;

type ScreenId = (typeof appScreens)[number]['id'];

export function MacBookMockup() {
  const [activeTab, setActiveTab] = useState<ScreenId>('overview');
  const [isScanning, setIsScanning] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentScreen = appScreens.find((s) => s.id === activeTab) || appScreens[0];

  const simulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 2200);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-2 sm:px-4">
      {/* Ambient Glows */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-80 rounded-full blur-[120px] pointer-events-none opacity-45"
        style={{
          background:
            'radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, rgba(236, 72, 153, 0.28) 45%, rgba(129, 140, 248, 0.18) 75%, transparent 100%)',
        }}
      />

      {/* Interactive Tab Switcher above the MacBook */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2 relative z-20">
        <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl flex flex-wrap items-center justify-center gap-1 shadow-2xl">
          {appScreens.map((screen) => {
            const isActive = activeTab === screen.id;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                  isActive
                    ? 'text-white shadow-lg shadow-primary/25 bg-gradient-to-r from-primary/80 to-secondary/80 border border-white/20'
                    : 'text-text-secondary hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span>{screen.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Simulate Unlock Button */}
        <button
          onClick={simulateScan}
          disabled={isScanning}
          className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-white/90 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 backdrop-blur-md transition-all flex items-center gap-2 shadow-lg"
          title="Simulate hardware face recognition & notch feedback"
        >
          <ScanFace className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span>{isScanning ? 'Verifying Face…' : 'Simulate Face Unlock'}</span>
        </button>
      </div>

      {/* MacBook Outer Shell */}
      <div className="relative rounded-[26px] p-2.5 sm:p-3.5 bg-gradient-to-b from-[#2A2D3A] via-[#161823] to-[#0D0E15] shadow-2xl shadow-black ring-1 ring-white/15">
        {/* Screen Bezel */}
        <div className="relative rounded-[18px] overflow-hidden bg-[#0A0B10] border border-white/[0.08] shadow-inner">
          {/* Top Camera Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 sm:w-44 h-5 sm:h-6 bg-black rounded-b-xl z-30 flex items-center justify-center gap-2 border-b border-x border-white/[0.08] shadow-md">
            {/* Camera Lens */}
            <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#1A1D24] border border-white/20 flex items-center justify-center">
              <div
                className={`w-1 h-1 rounded-full transition-colors duration-500 ${
                  isScanning ? 'bg-emerald-400 shadow-[0_0_8px_#34D399]' : 'bg-[#0D2235]'
                }`}
              />
            </div>
            {/* Hardware indicator LED */}
            {isScanning && (
              <span className="text-[8px] sm:text-[9px] text-emerald-400 font-mono tracking-tighter flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Active
              </span>
            )}
          </div>

          {/* Dynamic Island / Notch Overlay Animation */}
          <div
            className={`absolute top-6 sm:top-7 left-1/2 -translate-x-1/2 z-20 transition-all duration-300 pointer-events-none ${
              isScanning
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-90 -translate-y-2'
            }`}
          >
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#10121A]/95 border border-primary/40 shadow-2xl shadow-black/90 backdrop-blur-2xl">
              <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                <ScanFace className="w-2.5 h-2.5 text-primary animate-pulse" />
              </div>
              <span className="text-[11px] font-medium text-white/90">
                Face verified • Aera Active
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
            </div>
          </div>

          {/* Simulated macOS Menu Bar */}
          <div className="relative h-6 sm:h-7 bg-black/50 border-b border-white/[0.06] px-3 flex items-center justify-between text-[10px] sm:text-[11px] text-white/70 select-none z-10 backdrop-blur-md">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-white/90 text-xs font-semibold"></span>
              <span className="font-semibold text-white">Aera</span>
              <span className="hidden sm:inline hover:text-white cursor-default">Protection</span>
              <span className="hidden sm:inline hover:text-white cursor-default">View</span>
              <span className="hidden sm:inline hover:text-white cursor-default">Window</span>
            </div>
            <div className="flex items-center gap-2.5 font-mono text-[9px] sm:text-[10px]">
              {/* Menu bar item for Aera */}
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/[0.08] text-white border border-white/10">
                <Image
                  src="/images/aera-menu.svg"
                  alt="Aera Menu Glyph"
                  width={11}
                  height={11}
                  className="opacity-90"
                />
                <span className="text-[9px]">Aera Ready</span>
              </div>
              <span className="text-white/40 hidden sm:inline">Thu Oct 22</span>
              <span>10:42 AM</span>
            </div>
          </div>

          {/* Real Application Screenshot Display Area */}
          <div className="relative w-full aspect-[16/10] bg-[#0E1019] group overflow-hidden">
            <Image
              src={currentScreen.image}
              alt={`Aera Native macOS App - ${currentScreen.label}`}
              fill
              priority
              className="object-cover object-top transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />

            {/* Subtle Gradient Vignette overlay for depth */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/[0.06]" />

            {/* Enlarge Button in bottom-right corner */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/15 text-[11px] font-medium backdrop-blur-md transition-all flex items-center gap-1.5 opacity-0 group-hover:opacity-100 shadow-xl"
              title="View full resolution screenshot"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Inspect Real UI</span>
            </button>

            {/* Current screen badge in bottom-left */}
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-white/70 backdrop-blur-md flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{currentScreen.badge}</span>
            </div>
          </div>
        </div>

        {/* MacBook Bottom Base / Lip */}
        <div className="relative h-3 sm:h-4 bg-gradient-to-b from-[#2E313E] to-[#1C1E29] rounded-b-[20px] mt-1 shadow-md flex items-center justify-center">
          {/* Thumb opening groove */}
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#12141C] rounded-full opacity-80" />
        </div>
      </div>

      {/* Screen Caption & Verification Note */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-secondary px-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-white font-medium">{currentScreen.title}</span>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="text-text-muted hidden sm:inline">{currentScreen.description}</span>
        </div>
        <span className="text-[11px] font-mono text-white/40">
          Native macOS Sonoma 14.0+
        </span>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#141622] rounded-2xl border border-white/20 shadow-2xl overflow-hidden p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">
                  Aera macOS Application — {currentScreen.label}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-mono">
                  Real Screenshot
                </span>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 rounded-lg text-white/60 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mt-2 bg-black">
              <Image
                src={currentScreen.image}
                alt={currentScreen.label}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
