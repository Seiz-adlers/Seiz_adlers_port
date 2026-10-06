import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--surface-0) / <alpha-value>)",
          secondary: "rgb(var(--surface-1) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--surface-2) / <alpha-value>)",
          elevated: "rgb(var(--surface-3) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--text-0) / <alpha-value>)",
          secondary: "rgb(var(--text-1) / <alpha-value>)",
          muted: "rgb(var(--text-2) / <alpha-value>)",
        },
        hair: "var(--hair)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        blue: {
          DEFAULT: "#008CFF",
          bright: "#00A8FF",
          deep: "#0057A8",
        },
      },
      borderColor: {
        hair: "var(--hair)",
        blueline: "rgba(0,140,255,0.35)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(0,140,255,0.25)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
