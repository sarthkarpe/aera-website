'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Camera,
  KeyRound,
  HardDrive,
  WifiOff,
  Accessibility,
  ArrowRight,
  Lock,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export function PrivacySection() {
  const privacyPillars = [
    {
      icon: Camera,
      title: 'Camera Access',
      badge: 'Hardware Light Confirmed',
      description:
        'Requested only to capture brief live frames during wake or app unlock events. Raw images are analyzed in volatile memory by Core ML and immediately discarded. No photos or recordings are ever saved to disk.',
    },
    {
      icon: Accessibility,
      title: 'Accessibility Permissions',
      badge: 'Local Process Sandboxed',
      description:
        'Used solely for detecting which application window has focus (for App Lock) and typing your stored login credentials on verified lock-screen matches. Aera never monitors global keystrokes or inspects window contents.',
    },
    {
      icon: KeyRound,
      title: 'Encrypted Credentials',
      badge: 'macOS Keychain Backed',
      description:
        'If you enable Lock Screen auto-typing, your password is encrypted with AES-GCM 256-bit and held inside the native macOS Keychain. Aera cannot access your credentials outside verified unlock triggers.',
    },
    {
      icon: HardDrive,
      title: 'Encrypted Numeric Embeddings',
      badge: 'Zero Photos Stored',
      description:
        'Enrolling your face produces a mathematical 512-dimensional vector embedding, not a picture. This embedding is encrypted with AES-GCM using a hardware-derived Keychain secret.',
    },
    {
      icon: WifiOff,
      title: '100% On-Device Neural Model',
      badge: 'Zero Telemetry',
      description:
        'All Core ML facial feature extraction and anti-spoofing evaluations run locally on Apple Silicon Neural Engines. No telemetry, third-party analytics, or cloud connections are present in the app.',
    },
    {
      icon: Lock,
      title: 'Clean Uninstallation',
      badge: 'Full Data Purge',
      description:
        'The built-in uninstall utility (Settings → About Aera → Uninstall…) immediately deletes your enrolled face embedding, wipes Keychain secrets, and unloads all background helpers before moving the app to Trash.',
    },
  ];

  return (
    <section id="privacy" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Technical Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Your privacy isn’t an afterthought.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Security software should be transparent about what it accesses and why.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {privacyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl p-6 sm:p-7 bg-[#12131D]/80 border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between shadow-lg hover:shadow-black"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.05] text-white/70 border border-white/[0.08]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Privacy Policy */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-semibold text-white">Read our complete Privacy Policy</h4>
            <p className="text-xs sm:text-sm text-text-secondary">
              Review full technical documentation on permission scoping, encryption routines, and local data persistence.
            </p>
          </div>

          <Link
            href="/privacy"
            className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 transition-colors flex items-center gap-2 shrink-0 shadow-md"
          >
            <span>View Privacy Policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
