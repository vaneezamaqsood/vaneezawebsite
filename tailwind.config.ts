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
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", md: "1.5rem", lg: "2rem" },
      },
    },
  },
  plugins: [],
};
export default config;



