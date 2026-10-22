'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownToLine, Menu, X, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface NavbarProps {
  onOpenDownload?: () => void;
}

export function Navbar({ onOpenDownload }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Privacy', href: '#privacy' },
    { name: 'Specs', href: '#specs' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            aria-label="Aera Home"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-md shadow-primary/20 ring-1 ring-white/15 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/app-icon.png"
                alt="Aera Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-lg tracking-tight text-text-primary group-hover:text-white transition-colors">
                  Aera
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-white/70 border border-white/[0.08]">
                  macOS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-full transition-colors duration-150 hover:bg-white/[0.05]"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/privacy"
              className="text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-full transition-colors duration-150 hover:bg-white/[0.05]"
            >
              Policy
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDownload}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm hover:shadow-primary/20 transition-shadow"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#12131D] text-xs font-semibold text-white tracking-wide transition-colors group-hover:bg-[#161725]">
                <ArrowDownToLine className="w-3.5 h-3.5 text-primary group-hover:translate-y-0.5 transition-transform" />
                <span>Download for Mac</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-xs font-medium text-white"
            >
              <ArrowDownToLine className="w-3 h-3 text-primary" />
              <span>Get</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-white bg-white/[0.05] border border-white/[0.08]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-white/[0.1] px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Privacy Policy
            </Link>
            <div className="pt-3 mt-2 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenDownload) onOpenDownload();
                }}
                className="w-full py-2.5 rounded-full bg-primary text-white text-xs font-semibold shadow-md shadow-primary/30 flex items-center justify-center gap-2"
              >
                <ArrowDownToLine className="w-3.5 h-3.5" />
                <span>Download Aera for Mac</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
