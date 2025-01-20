import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-to-black-text": {
          "0%": { color: "transparent" },
          "100%": { color: "black" },
        },
        "fade-to-bg-black-opacity-60": {
          "0%": { backgroundColor: "transparent" },
          "100%": { backgroundColor: "rgba(0, 0, 0, 0.6)" },
        },
        "fade-to-white": {
          "0%": { backgroundColor: "transparent" },
          "100%": { backgroundColor: "white" },
        },
        "fade-to-transparent": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-to-black": {
          "0%": { backgroundColor: "transparent" },
          "100%": { backgroundColor: "black" },
        },
      },
      animation: {
        "fade-to-black-text": "fade-to-black-text 2.5s forwards",
        "fade-to-bg-black-opacity-60": "fade-to-bg-black-opacity-60 2.5s forwards",
        "fade-to-white": "fade-to-white 2.5s forwards",
        "fade-to-transparent": "fade-to-transparent 2.5s forwards",
        "fade-to-black": "fade-to-black 2.5s forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;