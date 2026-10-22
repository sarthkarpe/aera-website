'use client';

import React from 'react';
import { Laptop, Cpu, Shield, Camera, HardDrive, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function SystemRequirements() {
  const reqs = [
    {
      label: 'Platform',
      value: siteConfig.systemRequirements.platform,
      detail: 'Engineered natively for macOS desktop environments.',
      icon: Laptop,
    },
    {
      label: 'Architecture',
      value: siteConfig.systemRequirements.architecture,
      detail: 'Leverages the Apple Neural Engine on M1, M2, M3, and M4 silicon.',
      icon: Cpu,
    },
    {
      label: 'Minimum OS Version',
      value: siteConfig.systemRequirements.minOsVersion,
      detail: 'Built with Swift 6 and modern macOS frameworks; tested on Sonoma and Sequoia.',
      icon: Shield,
    },
    {
      label: 'Camera Hardware',
      value: siteConfig.systemRequirements.camera,
      detail: 'Facial scanning runs via standard macOS AVFoundation video feeds.',
      icon: Camera,
    },
  ];

  return (
    <section id="specs" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#0A0B11]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
            HARDWARE COMPATIBILITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Designed for your Mac.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Verified system requirements and security permissions.
          </p>
        </div>

        {/* Requirements Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reqs.map((req) => {
            const Icon = req.icon;
            return (
              <div
                key={req.label}
                className="rounded-2xl p-6 bg-[#12131D]/80 border border-white/[0.08] hover:border-white/[0.14] transition-all flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase font-mono text-text-muted block">
                    {req.label}
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {req.value}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mt-4 pt-4 border-t border-white/[0.06]">
                  {req.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Permissions Explanations Table / Container */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#12131D]/70 border border-white/[0.08] space-y-5">
          <h4 className="text-sm font-semibold text-white tracking-wide uppercase font-mono">
            macOS Permission Scopes & Privacy Rationale
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.systemRequirements.requiredPermissions.map((perm) => (
              <div
                key={perm.name}
                className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2 text-left"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">{perm.name}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  <strong className="text-white/80">Why: </strong>
                  {perm.reason}
                </p>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  <strong className="text-white/60">Privacy Guarantee: </strong>
                  {perm.privacyNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
