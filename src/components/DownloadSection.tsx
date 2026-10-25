'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowDownToLine,
  Check,
  Info,
  FolderArchive,
  RefreshCw,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

interface DownloadSectionProps {
  onOpenModal?: () => void;
}

export function DownloadSection({ onOpenModal }: DownloadSectionProps) {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'loading' | 'success' | 'unavailable'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleDownload = () => {
    // Trigger the verified zip download
    setDownloadStatus('loading');
    setStatusMessage(`Initiating download of Aera (${siteConfig.release.installerSize})...`);

    try {
      const link = document.createElement('a');
      link.href = siteConfig.release.downloadUrl;
      link.setAttribute('download', 'Aera.zip');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setDownloadStatus('success');
        setStatusMessage('Download initiated! Check your browser downloads.');
      }, 700);
    } catch (err) {
      setDownloadStatus('unavailable');
      setStatusMessage('Unable to trigger automatic download. Please check your browser settings.');
    }
  };

  return (
    <section id="download" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Subtle Purple Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] rounded-full blur-[140px] pointer-events-none opacity-30 bg-gradient-to-r from-primary via-secondary to-tertiary" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Card Container */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#161826] via-[#12131D] to-[#0D0E15] border border-white/[0.12] shadow-2xl relative overflow-hidden">
          {/* Subtle Top Gradient Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary opacity-80" />

          <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
            {/* Real Aera App Icon */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[24px] overflow-hidden shadow-2xl shadow-primary/30 ring-1 ring-white/20 transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/app-icon.png"
                alt="Aera macOS App Icon"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Headline and Description */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                OFFICIAL MACOS RELEASE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Bring Aera to your Mac.
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                A more personal approach to Mac privacy starts here.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="w-full sm:w-auto pt-2 space-y-3">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-semibold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-3 group mx-auto"
              >
                <ArrowDownToLine className="w-5 h-5 text-white group-hover:translate-y-0.5 transition-transform" />
                <span>Download Aera for Mac</span>
              </button>

              <div className="flex items-center justify-center gap-3 text-xs text-text-muted">
                <span>Includes Aera application installer</span>
                <span>•</span>
                <span className="text-white/70">{siteConfig.release.installerSize}</span>
              </div>

              {/* Status Notice Display */}
              {downloadStatus === 'unavailable' && (
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.1] text-left max-w-md mx-auto space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">{statusMessage}</h4>
                      <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                        The official macOS installer is being prepared for distribution. In the meantime, you can download the verified application package directly below.
                      </p>
                    </div>
                  </div>

                  <div className="pt-1">
                    <a
                      href={siteConfig.release.downloadUrl}
                      download="Aera.zip"
                      className="w-full py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors shadow-md shadow-primary/20"
                    >
                      <FolderArchive className="w-3.5 h-3.5" />
                      <span>Download Aera for Mac ({siteConfig.release.installerSize})</span>
                    </a>
                  </div>
                </div>
              )}

              {downloadStatus === 'loading' && (
                <p className="text-xs text-primary animate-pulse font-mono flex items-center justify-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{statusMessage}</span>
                </p>
              )}

              {downloadStatus === 'success' && (
                <p className="text-xs text-emerald-400 font-mono flex items-center justify-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>{statusMessage}</span>
                </p>
              )}
            </div>

            {/* Release Specifications Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-left">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-text-muted uppercase font-mono block">Version</span>
                <span className="text-xs font-semibold text-white">{siteConfig.release.version}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-text-muted uppercase font-mono block">Compatibility</span>
                <span className="text-xs font-semibold text-white">macOS 14.0+</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-text-muted uppercase font-mono block">Installer Size</span>
                <span className="text-xs font-semibold text-white">{siteConfig.release.installerSize}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] text-text-muted uppercase font-mono block">Release Date</span>
                <span className="text-xs font-semibold text-white">{siteConfig.release.releaseDate}</span>
              </div>
            </div>

            {/* Installation Instructions Step-by-Step */}
            <div className="w-full pt-4 border-t border-white/[0.08] text-left space-y-3">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                Installation Instructions
              </h4>
              <ol className="space-y-2 text-xs text-text-secondary list-decimal list-inside leading-relaxed">
                <li>Download and open the disk image (<code className="text-white/80 font-mono text-[11px]">Aera.dmg</code>).</li>
                <li>Drag <strong className="text-white">Aera.app</strong> into your <strong className="text-white">/Applications</strong> folder.</li>
                <li>
                  Launch Aera. If prompted by macOS Gatekeeper, navigate to{' '}
                  <span className="text-white font-medium">System Settings → Privacy & Security</span>, scroll to Aera, and click{' '}
                  <span className="text-white font-medium">&quot;Open Anyway&quot;</span>.
                </li>
                <li>Follow the onboarding wizard to grant Camera and Accessibility permissions and enroll your face embedding.</li>
              </ol>
            </div>

            {/* Links & Specifications Pill */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-text-secondary">
              <span className="text-white/80 font-medium">Native Apple Silicon</span>
              <span className="text-white/20">•</span>
              <span className="text-white/80 font-medium">macOS 14.0+ Sonoma or later</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
