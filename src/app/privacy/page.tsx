import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Shield, Lock, Eye, KeyRound, HardDrive, WifiOff, FileText, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Technical privacy policy and security architecture details for Aera on macOS.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0B10] text-text-primary selection:bg-primary/30 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-white/[0.08] bg-[#0E1018]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-6 h-6 rounded-md overflow-hidden ring-1 ring-white/10">
              <Image
                src="/images/app-icon.png"
                alt="Aera Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-sm text-white">Aera</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        {/* Title */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
            <Shield className="w-3.5 h-3.5" />
            <span>Security Architecture & Transparency</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Privacy Policy & Architecture
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Effective: October 2026 • Based on verified source code for Aera v{siteConfig.release.version}
          </p>
        </div>

        {/* Section 1: Overview */}
        <section className="space-y-4 text-sm text-text-secondary leading-relaxed">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono">01.</span> Our Philosophy
          </h2>
          <p>
            Aera is created on the principle of <strong>Quiet Intelligence</strong>. Security and privacy tools should never require sacrificing personal control or blindly trusting remote cloud services. Aera is designed to keep all sensitive computations, biometric representations, and authentication workflows strictly confined to your personal Mac hardware.
          </p>
        </section>

        {/* Section 2: Camera Access & Biometric Processing */}
        <section className="space-y-4 text-sm text-text-secondary leading-relaxed">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono">02.</span> Camera Usage & Face Data
          </h2>
          <p>
            When enabled, Aera requests access to the Mac&apos;s camera. Here is exactly what happens with that access:
          </p>
          <ul className="space-y-2.5 list-disc list-inside pl-2">
            <li>
              <strong>Ephemeral Activation:</strong> The camera is activated only during specific trigger moments—such as when your Mac wakes from sleep or when you focus on a locked application. It is never kept open continuously.
            </li>
            <li>
              <strong>Hardware Indicator:</strong> Whenever the camera is capturing, macOS activates the physical green LED indicator beside your camera lens.
            </li>
            <li>
              <strong>Zero Photo Storage:</strong> Aera does not save photographs, video recordings, or image snapshots to your storage drive.
            </li>
            <li>
              <strong>Mathematical Embeddings:</strong> Captured video frames are evaluated in memory by Apple Silicon Neural Engine models (Core ML) to compute a 512-dimensional numeric feature vector.
            </li>
            <li>
              <strong>AES-GCM Encryption:</strong> The numeric embedding is encrypted using the industry-standard AES-GCM cipher before writing to local application support storage.
            </li>
            <li>
              <strong>Keychain Master Key:</strong> The key used to encrypt and decrypt the face embedding is generated dynamically and stored directly within the protected macOS Keychain.
            </li>
          </ul>
        </section>

        {/* Section 3: Accessibility Permissions */}
        <section className="space-y-4 text-sm text-text-secondary leading-relaxed">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono">03.</span> Accessibility Permission Scope
          </h2>
          <p>
            Aera may request macOS Accessibility permission (<code className="text-white/80 font-mono text-xs">AXIsProcessTrusted</code>). This permission is restricted to two technical operations:
          </p>
          <ol className="space-y-2 list-decimal list-inside pl-2">
            <li>
              <strong>Window Focus Observation:</strong> Detecting which application currently holds window focus (e.g., Messages or Mail) so that App Lock can present an adaptive privacy blur over the locked application window.
            </li>
            <li>
              <strong>Lock Screen Typing Assistance:</strong> Upon a successful facial match during wake, typing your encrypted system login password into the macOS lock-screen password input.
            </li>
          </ol>
          <p>
            Aera does not run a keylogger, does not inspect user document content, and does not record input events outside these targeted workflows.
          </p>
        </section>

        {/* Section 4: Data Transmission & Network Activity */}
        <section className="space-y-4 text-sm text-text-secondary leading-relaxed">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono">04.</span> Network Activity & Telemetry
          </h2>
          <p>
            Aera contains <strong>zero third-party trackers, zero advertising SDKs, and zero behavioral telemetry</strong>.
          </p>
          <p>
            All facial recognition algorithms, feature matching, and liveness evaluations run entirely on-device via Core ML. The application does not communicate with any external cloud servers for facial recognition.
          </p>
        </section>

        {/* Section 5: Uninstallation & Data Removal */}
        <section className="space-y-4 text-sm text-text-secondary leading-relaxed">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono">05.</span> Uninstallation & Data Deletion
          </h2>
          <p>
            To ensure complete removal of all local data, Aera provides a built-in uninstallation mechanism:
          </p>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
            <p className="font-semibold text-white text-xs">Recommended Uninstallation Flow:</p>
            <p className="text-xs">
              Go to Menu Bar icon → <strong className="text-white">Settings…</strong> → <strong className="text-white">About Aera</strong> → <strong className="text-white">Uninstall…</strong>
            </p>
            <p className="text-xs text-text-muted">
              This routine securely wipes your enrolled face embedding file, removes the encryption key and stored password from macOS Keychain, terminates background launch agents, and moves the application binary to Trash.
            </p>
          </div>
        </section>

        {/* Section 6: Security Audits & Technical Disclosures */}
        <section className="space-y-4 text-sm text-text-secondary leading-relaxed border-t border-white/[0.08] pt-8">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
            <span className="text-primary font-mono">06.</span> Security Audits & Verification
          </h2>
          <p>
            Aera is built with transparency and privacy as first-class architectural constraints. Security researchers and technical users can verify our on-device Core ML processing, Keychain encryption parameters, and macOS sandboxing rules directly within the application package.
          </p>
          <p>
            For security inquiries, audit verifications, or technical documentation, please consult the official documentation provided with the application release.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-8 text-center text-xs text-text-muted">
        <p>© {new Date().getFullYear()} Sarth Karpe. All rights reserved. Thoughtfully created for macOS.</p>
      </footer>
    </div>
  );
}
