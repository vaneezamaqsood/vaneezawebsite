import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        fg: "#F5F5F5",
        muted: "#B3B3B3",
        card: "#121212",
        ring: "#7C7C7C",
        accent: "#8E2DE2",
        "accent-secondary": "#4A00E0",
        "accent-tertiary": "#FF6EC7",
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.3' }],
        'subtitle': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", md: "1.5rem", lg: "2rem" },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;



