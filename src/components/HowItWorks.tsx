'use client';

import React from 'react';
import Image from 'next/image';
import { Download, Sliders, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Download,
      title: 'Install Aera',
      description: 'Download the installer package and move Aera into your Applications folder.',
      image: '/images/app-about.png',
      imageCaption: 'Aera 1.0.0 macOS Application',
      note: 'Gatekeeper notice: open System Settings → Privacy & Security, click "Open Anyway" on first run.',
    },
    {
      number: '02',
      icon: Sliders,
      title: 'Set up your preferences',
      description: 'Follow the onboarding flow and configure the features you want to use from the menu bar.',
      image: '/images/app-menubar.jpg',
      imageCaption: 'Instant Menu Bar Preferences',
      note: 'Choose between Lock Screen unlock, individual App Lock, or coordinate both seamlessly.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Make it yours',
      description:
        'Set up face recognition, choose supported protection options, and grant required permissions.',
      image: '/images/app-yourface.png',
      imageCaption: 'On-Device Face Biometrics',
      note: 'Your encrypted face embedding is created locally in seconds. No photos or cloud accounts needed.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#0A0B11]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-18 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
            GETTING STARTED
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Ready in a few simple steps.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Thoughtfully packaged for effortless onboarding on Apple Silicon Macs.
          </p>
        </div>

        {/* Steps Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-2xl p-6 sm:p-7 bg-[#12131D]/80 border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-4">
                    {/* Header with step number and icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-mono font-bold text-white/20 group-hover:text-primary transition-colors">
                        {step.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Real Image Preview */}
                    <div className="pt-2">
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/[0.08] bg-black/50 shadow-inner group-hover:border-white/20 transition-colors">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                          sizes="(max-width: 1024px) 100vw, 360px"
                        />
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white/80">
                          {step.imageCaption}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Implementation detail note */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-text-muted leading-relaxed">
                    <span className="text-white/60 font-medium">Tip: </span>
                    {step.note}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
