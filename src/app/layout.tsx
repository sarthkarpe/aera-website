import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://aera.app'),
  title: {
    default: 'Aera — Thoughtful Security for Your Mac',
    template: '%s | Aera',
  },
  description:
    'Discover Aera, a macOS application designed to bring face recognition, app-level protection, and authentication assistance into a more personal security experience.',
  keywords: [
    'Aera',
    'macOS security',
    'face recognition Mac',
    'Apple Silicon security',
    'app lock Mac',
    'Face ID for Mac',
    'Mac privacy',
    'Core ML face unlock',
    'Notch island',
    'Sonoma security app',
  ],
  authors: [{ name: 'Sarth Karpe' }],
  creator: 'Sarth Karpe',
  publisher: 'Sarth Karpe',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/images/app-icon.png', sizes: '1024x1024', type: 'image/png' },
    ],
    apple: [{ url: '/images/app-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aera.app',
    siteName: 'Aera',
    title: 'Aera — Thoughtful Security for Your Mac',
    description:
      'Discover Aera, a macOS application designed to bring face recognition, app-level protection, and authentication assistance into a more personal security experience.',
    images: [
      {
        url: '/images/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Aera — macOS Face Recognition & App Security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aera — Thoughtful Security for Your Mac',
    description:
      'Discover Aera, a macOS application designed to bring face recognition, app-level protection, and authentication assistance into a more personal security experience.',
    images: ['/images/logo.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0B10',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-text-primary antialiased selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
