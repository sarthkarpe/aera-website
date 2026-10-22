export interface SiteConfig {
  name: string;
  wordmark: string;
  tagline: string;
  headline: {
    line1: string;
    line2: string;
  };
  description: string;
  category: string;
  author: {
    name: string;
    github: string;
  };
  release: {
    version: string;
    releaseDate: string;
    macOSVersion: string;
    architectures: string[];
    installerSize: string;
    sha256Checksum: string;
    // Configurable download URL
    downloadUrl: string;
    sourceZipUrl: string;
    dmgDownloadUrl?: string;
    // GitHub release integration
    repoUrl: string;
    releasesUrl: string;
    issuesUrl: string;
    // Whether a compiled .dmg asset is currently live on GitHub Releases
    // Verified status: GitHub releases API currently has no releases (asset in repo is Aera.zip)
    isDmgAvailable: boolean;
  };
  systemRequirements: {
    platform: string;
    architecture: string;
    minOsVersion: string;
    testedVersions: string[];
    camera: string;
    storage: string;
    requiredPermissions: {
      name: string;
      reason: string;
      privacyNote: string;
    }[];
  };
  features: {
    id: string;
    title: string;
    eyebrow: string;
    tagline: string;
    description: string;
    badge: string;
    highlights: string[];
  }[];
  steps: {
    number: string;
    title: string;
    description: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Aera",
  wordmark: "aera",
  tagline: "SECURITY, REIMAGINED FOR MAC",
  headline: {
    line1: "Your Mac.",
    line2: "Your space.",
  },
  description:
    "Aera brings a more personal layer of security to your Mac, combining face recognition, app-level protection, and a thoughtfully designed experience.",
  category: "macOS Privacy & Security Application",
  author: {
    name: "Sarth Karpe",
    github: "https://github.com/sarthkarpe",
  },
  release: {
    version: "1.0.0",
    releaseDate: "October 2026",
    macOSVersion: "macOS 14.0 Sonoma or later",
    architectures: ["Apple Silicon Native (M1/M2/M3/M4)"],
    installerSize: "13.6 MB",
    sha256Checksum:
      "a024713ac194feded1343ba491de8f5c0d33ac637652d4cc14a5f03a09139217",
    downloadUrl: "/downloads/Aera.zip",
    sourceZipUrl: "/downloads/Aera.zip",
    dmgDownloadUrl: "/downloads/Aera.dmg",
    repoUrl: "https://github.com/sarthkarpe/Aera",
    releasesUrl: "https://github.com/sarthkarpe/Aera/releases",
    issuesUrl: "https://github.com/sarthkarpe/Aera/issues",
    isDmgAvailable: true,
  },
  systemRequirements: {
    platform: "macOS",
    architecture: "Apple Silicon Native (ARM64)",
    minOsVersion: "macOS 14.0 (Sonoma) or newer",
    testedVersions: ["macOS 14 Sonoma", "macOS 15 Sequoia"],
    camera: "Built-in FaceTime HD camera or external UVC webcam",
    storage: "35 MB free disk space",
    requiredPermissions: [
      {
        name: "Camera Access",
        reason: "Required for on-device facial recognition and anti-spoofing liveness checks.",
        privacyNote:
          "Active only for brief verification moments (indicated by the hardware green light). Raw camera frames are analyzed in-memory by Core ML and immediately discarded. No photos are ever saved.",
      },
      {
        name: "Accessibility Permission",
        reason:
          "Required to observe frontmost application switches for App Lock and assist with typing credentials on verified lock-screen matches.",
        privacyNote:
          "Granted per code-signing bundle (com.sarthkarpe.aera). Never logs keystrokes or monitors content outside configured app boundaries.",
      },
    ],
  },
  features: [
    {
      id: "face-recognition",
      eyebrow: "BIOMETRIC PRIVACY",
      title: "Recognize you. Keep things personal.",
      tagline: "Core ML on-device neural processing",
      description:
        "Aera uses its face-recognition functionality to support a more personal security experience on your Mac. All facial analysis executes 100% locally on Apple Silicon neural engines—never transmitting data to external servers or storing raw photos.",
      badge: "100% On-Device",
      highlights: [
        "Mathematical face embeddings encrypted with AES-GCM",
        "Master encryption key safely locked in macOS Keychain",
        "Anti-spoofing liveness filter detects photos and digital screens",
        "Zero cloud dependencies, telemetry, or network transmission",
      ],
    },
    {
      id: "app-locking",
      eyebrow: "APPLICATION PRIVACY",
      title: "Your apps. Your control.",
      tagline: "Granular protection for sensitive workspaces",
      description:
        "Add a layer of privacy to selected applications so your personal workspace stays yours. Choose whether to obscure the entire screen or blur only the active target window until you glance at the camera.",
      badge: "Adaptive Privacy Blur",
      highlights: [
        "Individual app locking (Messages, Mail, Notes, Safari, Terminals)",
        "Configurable relock policies: immediate, 5m, 15m, or on app switch",
        "Graceful fallback to macOS Touch ID or system password",
        "Low-overhead native background monitoring via macOS APIs",
      ],
    },
    {
      id: "auth-assistance",
      eyebrow: "SEAMLESS AUTHENTICATION",
      title: "Less friction. Thoughtful security.",
      tagline: "Notch overlay and lock-screen assistance",
      description:
        "Aera is designed to assist with authentication workflows on your Mac while keeping the experience simple. Wake your Mac, let Aera recognize your presence, and seamlessly transition into your workspace without bypassing macOS security boundaries.",
      badge: "Notch Island Feedback",
      highlights: [
        "Native-feeling dynamic notch overlay with calm scanning animation",
        "Keychain-backed password typing via macOS Accessibility APIs",
        "Never replaces or defeats macOS Gatekeeper or Apple hardware security",
        "Full control to pause or resume facial detection from the menu bar",
      ],
    },
  ],
  steps: [
    {
      number: "01",
      title: "Install Aera",
      description:
        "Download the installer and move Aera into your Applications folder.",
      detail:
        "On first launch, open System Settings → Privacy & Security to confirm 'Open Anyway' for unsigned or ad-hoc builds.",
    },
    {
      number: "02",
      title: "Set up your preferences",
      description:
        "Follow the onboarding flow and configure the features you want to use.",
      detail:
        "Choose between Lock Screen unlock, individual App Lock, or both, tailored to your privacy habits.",
    },
    {
      number: "03",
      title: "Make it yours",
      description:
        "Set up face recognition, choose supported protection options, and grant only the permissions required for the features you enable.",
      detail:
        "Enrolls your local encrypted face embedding in seconds. Camera and Accessibility permissions are requested only as needed.",
    },
  ],
  faqs: [
    {
      question: "What is Aera?",
      answer:
        "Aera is a native macOS privacy and security utility designed for Apple Silicon Macs. It brings face recognition to your Mac to assist with lock-screen wake authentication and allows you to lock individual applications (like Messages, Notes, and Mail) with biometric verification and adaptive privacy blurs.",
    },
    {
      question: "Which Macs are supported?",
      answer:
        "Aera is built specifically for Apple Silicon Macs running macOS 14.0 (Sonoma) or newer. This includes MacBooks, Mac mini, Mac Studio, and iMacs powered by M1, M2, M3, or M4 processors. It leverages the Apple Neural Engine (ANE) via Core ML for instant, efficient on-device face analysis.",
    },
    {
      question: "How do I install Aera?",
      answer:
        "Download the Aera disk image or application archive, then drag Aera.app into your Applications folder. Because community open-source builds may not be notarized by an identified developer certificate, macOS Gatekeeper may flag it on first run: simply open System Settings > Privacy & Security, scroll down to the notice about Aera, and click 'Open Anyway'. Then follow the built-in setup wizard.",
    },
    {
      question: "Why does Aera need camera access?",
      answer:
        "Aera requires camera access solely to run facial recognition and anti-spoofing checks during authentication events (such as waking the Mac or opening a locked application). The camera is active only for a split-second scan—the green hardware LED will confirm this. Raw video or photo frames never leave device memory and are never saved to disk.",
    },
    {
      question: "Why might Aera request Accessibility permission?",
      answer:
        "Accessibility permission is needed for two specific functions: (1) detecting which application currently has window focus so App Lock can apply privacy blurs, and (2) typing your encrypted password into the macOS lock screen when your face is positively verified. Aera does not monitor keystrokes or inspect app data outside these security tasks.",
    },
    {
      question: "How do I uninstall Aera?",
      answer:
        "Aera includes a built-in clean uninstallation routine: click the Aera menu bar icon > Settings… > About Aera > Uninstall…. This securely purges your enrolled face embedding, deletes saved Keychain credentials, removes launch agent configuration, and moves the application to Trash. Dragging the app directly to Trash leaves your Keychain tokens on device.",
    },
    {
      question: "Is Aera free?",
      answer:
        "Yes. Aera is completely free to download and use on your Mac, with zero paywalls, subscriptions, or hidden fees.",
    },
    {
      question: "How do I get help or report a problem?",
      answer:
        "You can find detailed troubleshooting and permission verification steps directly within the app (Settings > About Aera) or consult the official documentation portal and release notes.",
    },
  ],
};
