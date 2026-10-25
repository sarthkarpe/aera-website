'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { PrivacySection } from '@/components/PrivacySection';
import { DownloadSection } from '@/components/DownloadSection';
import { SystemRequirements } from '@/components/SystemRequirements';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { DownloadModal } from '@/components/DownloadModal';

import { siteConfig } from '@/config/site';

export default function HomePage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleOpenDownload = () => {
    // 1. Immediately initiate download of verified Aera package
    try {
      const link = document.createElement('a');
      link.href = siteConfig.release.downloadUrl;
      link.setAttribute('download', 'Aera.zip');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback to opening modal if direct trigger fails
      setDownloadModalOpen(true);
      return;
    }

    // 2. Smoothly scroll down to installation instructions
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-x-hidden selection:bg-primary/30 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenDownload={handleOpenDownload} />

      {/* Hero Section */}
      <main>
        <Hero onOpenDownload={handleOpenDownload} />

        {/* Feature Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Privacy & Transparency Section */}
        <PrivacySection />

        {/* Prominent Download Section */}
        <DownloadSection onOpenModal={() => setDownloadModalOpen(true)} />

        {/* System Requirements & Permissions */}
        <SystemRequirements />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
