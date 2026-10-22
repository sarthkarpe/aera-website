import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B10',
        'surface-elevated': '#14161F',
        'surface-card': '#12131D',
        'surface-card-hover': '#181A27',
        primary: {
          DEFAULT: '#A855F7',
          hover: '#9333EA',
          glow: 'rgba(168, 85, 247, 0.3)',
        },
        secondary: {
          DEFAULT: '#EC4899',
          hover: '#DB2777',
        },
        tertiary: {
          DEFAULT: '#818CF8',
          hover: '#6366F1',
        },
        text: {
          primary: '#F5F5F7',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          DEFAULT: 'rgba(255, 255, 255, 0.10)',
          hover: 'rgba(255, 255, 255, 0.18)',
          active: 'rgba(168, 85, 247, 0.4)',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-purple': '0 0 50px -10px rgba(168, 85, 247, 0.25)',
        'glow-pink': '0 0 50px -10px rgba(236, 72, 153, 0.2)',
        'glow-subtle': '0 0 80px -20px rgba(168, 85, 247, 0.15)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'window': '0 30px 60px -12px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(0%)', opacity: '0.2' },
          '50%': { transform: 'translateY(100%)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
