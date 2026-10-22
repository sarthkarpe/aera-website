'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ArrowDownToLine } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [downloadInitiated, setDownloadInitiated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadInitiated(true);
    const link = document.createElement('a');
    link.href = siteConfig.release.downloadUrl;
    link.setAttribute('download', 'Aera.zip');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#141622] border border-white/[0.12] shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-text-secondary hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/15 shrink-0">
            <Image
              src="/images/app-icon.png"
              alt="Aera Icon"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 id="download-modal-title" className="text-xl font-bold text-white tracking-tight">
              Aera for macOS
            </h3>
            <p className="text-xs text-text-secondary">
              Version {siteConfig.release.version} • {siteConfig.release.macOSVersion}
            </p>
          </div>
        </div>

        {/* Download Action Area */}
        <div className="space-y-4">
          <button
            onClick={handleDownload}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-semibold text-sm shadow-xl shadow-primary/30 hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>Download Aera for Mac ({siteConfig.release.installerSize})</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
            <span>Ready for Apple Silicon • macOS 14.0+</span>
          </div>

          {downloadInitiated && (
            <p className="text-xs text-center text-emerald-400 font-mono">
              ✓ Download started! Check your browser downloads folder.
            </p>
          )}
        </div>

        {/* Footer info */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted">
          <span>© {new Date().getFullYear()} Sarth Karpe. All rights reserved.</span>
          <span className="text-white/60">macOS 14.0+</span>
        </div>
      </div>
    </div>
  );
}
