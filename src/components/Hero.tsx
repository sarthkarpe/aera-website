'use client';

import React from 'react';
import { ArrowDownToLine, ChevronDown, ShieldCheck, Sparkles, Cpu, Lock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { MacBookMockup } from './MacBookMockup';

interface HeroProps {
  onOpenDownload?: () => void;
}

export function Hero({ onOpenDownload }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-white/80 uppercase font-semibold">
              {siteConfig.tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            <span className="block">{siteConfig.headline.line1}</span>
            <span className="text-gradient block">{siteConfig.headline.line2}</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-normal">
            {siteConfig.description}
          </p>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDownload}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 group"
            >
              <ArrowDownToLine className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
              <span>Download for Mac</span>
            </button>

            <a
              href="#features"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.08] text-white/90 text-sm font-medium border border-white/[0.1] hover:border-white/[0.18] transition-all flex items-center justify-center gap-2"
            >
              <span>Explore features</span>
              <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
            </a>
          </div>

          {/* Under CTA verified metadata pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-text-muted">
            <span className="text-white/80 font-medium">Made for macOS</span>
            <span className="text-white/20">•</span>
            <span>Version {siteConfig.release.version}</span>
            <span className="text-white/20">•</span>
            <span>{siteConfig.release.macOSVersion}</span>
            <span className="text-white/20">•</span>
            <span>{siteConfig.release.installerSize}</span>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-14 sm:mt-18">
          <MacBookMockup />
        </div>
      </div>
    </section>
  );
}
