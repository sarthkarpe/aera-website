# Aera — Official macOS App Website

The official, production-ready website for **Aera**, a native macOS privacy and security application combining on-device face recognition, application-level locking, and authentication assistance.

Created and engineered by **Sarth Karpe**.

Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Lucide Icons. Designed with an Apple / Linear / Raycast inspired dark minimalist aesthetic.

---

## Features

- **Apple-Grade Visual Quality:** Deep dark surfaces (`#0B0B10`), subtle borders, refined typography, and restrained ambient lighting.
- **Authentic macOS App Screenshots:** 7 pixel-perfect screenshots captured directly from Aera 1.0.0 on macOS Sonoma:
  - `app-overview.png`: Central Protection Hub & activity logs
  - `app-menubar.jpg`: Instant status bar menu flyout
  - `app-lockscreen.png`: Lock Screen face unlock & Keychain password entry
  - `app-applock.png`: Application privacy shield (WhatsApp & Microsoft Teams)
  - `app-yourface.png`: Local biometric enrollment & sensitivity slider
  - `app-appearance.png`: Dynamic Notch feedback & animation style
  - `app-about.png`: Version verification & built-in clean uninstallation
- **Realistic Interactive macOS Mockup:** Photorealistic MacBook hardware shell with camera notch, active dynamic island simulation, and tab switching across all 7 real app views.
- **Verified Ground Truth:** All system requirements (Apple Silicon M-series, macOS 14.0+ Sonoma), permissions (Camera, Accessibility), and cryptographic guarantees (Core ML, AES-GCM Keychain) are directly derived from the native Aera codebase.
- **Direct Installer Download:** Clean installer delivery configured for Apple Silicon Macs.
- **Accessible Accordion FAQ:** Keyboard-navigable accordion covering all 8 essential user and technical questions, including visual uninstaller guidance.
- **Dedicated Privacy Policy Page:** Full technical explanation at `/privacy` detailing ephemeral camera activation, zero photo storage, and local Keychain storage.
- **Responsive & Reduced Motion Ready:** Fully adaptive layouts from mobile to 4K displays with system `prefers-reduced-motion` compliance.

---

## Directory Structure

```text
aera-website/
├── public/
│   ├── downloads/
│   │   └── Aera.zip              # Verified installer asset
│   └── images/
│       ├── app-icon.png          # 1024x1024 master icon
│       ├── app-overview.png      # Real Overview tab screenshot
│       ├── app-menubar.jpg       # Real macOS Menu Bar flyout screenshot
│       ├── app-lockscreen.png    # Real Lock Screen tab screenshot
│       ├── app-applock.png       # Real App Lock tab screenshot
│       ├── app-yourface.png      # Real Your Face tab screenshot
│       ├── app-appearance.png    # Real Appearance tab screenshot
│       └── app-about.png         # Real About tab screenshot
├── src/
│   ├── app/
│   │   ├── globals.css           # Apple dark theme, ambient glows, glass tokens
│   │   ├── layout.tsx            # SEO metadata, Open Graph, Twitter cards, viewport
│   │   ├── page.tsx              # Main landing page
│   │   └── privacy/
│   │       └── page.tsx          # Comprehensive Privacy Policy page
│   ├── components/
│   │   ├── Navbar.tsx            # Transparent to frosted glass navigation
│   │   ├── Hero.tsx              # Headline, verified metadata, and primary CTAs
│   │   ├── MacBookMockup.tsx     # Interactive macOS app window inside MacBook shell
│   │   ├── Features.tsx          # 3 feature sections (Face, App Lock, Auth Assistance)
│   │   ├── HowItWorks.tsx        # 3 onboarding steps with visual previews
│   │   ├── PrivacySection.tsx    # 6 privacy pillars + link to policy
│   │   ├── DownloadSection.tsx   # Verified download area + installation instructions
│   │   ├── DownloadModal.tsx     # Accessible modal for direct download
│   │   ├── SystemRequirements.tsx# Apple Silicon, macOS 14+, permissions rationale
│   │   ├── FaqSection.tsx        # 8-question accessible accordion
│   │   └── Footer.tsx            # Minimal footer with dynamic copyright
│   └── config/
│       └── site.ts               # Central configuration file for all releases and URLs
├── tailwind.config.ts            # Brand colors and typography
├── next.config.mjs               # Next.js production settings
├── tsconfig.json                 # TypeScript compiler configuration
└── package.json                  # Scripts and dependencies
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.18.0 or newer
- **npm**: v9 or newer

### Local Development

1. Navigate to the website directory:
   ```bash
   cd aera-website
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## Production Build & Quality Verification

```bash
# Typecheck TypeScript files
npm run typecheck

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## Copyright & Credits

© 2026 Sarth Karpe. All rights reserved.  
Created and engineered by **Sarth Karpe**.
