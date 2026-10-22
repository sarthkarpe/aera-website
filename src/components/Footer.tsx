'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#090A0F] pt-16 pb-12 overflow-hidden">
      {/* Subtle Bottom Ambient Gradient Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-white/10 shadow-sm">
                <Image
                  src="/images/app-icon.png"
                  alt="Aera Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">
                Aera
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-text-secondary max-w-sm leading-relaxed">
              Thoughtfully created and engineered by <strong className="text-white font-medium">Sarth Karpe</strong> for macOS. A personal security layer combining on-device face recognition, app locking, and minimal friction.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/60 border border-white/[0.08]">
                macOS 14.0+
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/60 border border-white/[0.08]">
                Apple Silicon Native
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-text-secondary">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-white transition-colors">
                  System Requirements
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Documentation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs text-text-secondary">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#specs" className="hover:text-white transition-colors">
                  Security Architecture
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} Sarth Karpe. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-white/70">
            <span>Created by <strong className="text-white font-medium">Sarth Karpe</strong>.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
